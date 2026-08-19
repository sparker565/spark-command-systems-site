import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

const DESKTOP_VIDEO = '/assets/cinematic/spark-command-scroll-desktop.mp4'
const MOBILE_VIDEO = '/assets/cinematic/spark-command-scroll-mobile.mp4'
const OPENING_POSTER = '/assets/cinematic/spark-command-scroll-opening.webp'
const MOBILE_POSTER = '/assets/cinematic/spark-command-scroll-opening-mobile.webp'
const FINAL_POSTER = '/assets/cinematic/spark-command-scroll-final.webp'
const FINAL_MOBILE_POSTER = '/assets/cinematic/spark-command-scroll-final-mobile.webp'

// Pacing is tuned to the supplied eight-second master rather than mapped linearly.
// The last band intentionally settles on the completed mark instead of racing past it.
const TIMELINE = [
  [0, 0.03],
  [0.2, 1.25],
  [0.48, 3.55],
  [0.68, 4.75],
  [0.88, 6.25],
  [0.94, 7.86],
  [1, 7.94],
]

function clamp(value, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value))
}

function smoothstep(start, end, value) {
  const progress = clamp((value - start) / Math.max(0.0001, end - start))
  return progress * progress * (3 - 2 * progress)
}

function windowedOpacity(progress, enterStart, enterEnd, exitStart, exitEnd) {
  const enter = smoothstep(enterStart, enterEnd, progress)
  const exit = 1 - smoothstep(exitStart, exitEnd, progress)
  return Math.min(enter, exit)
}

function mapProgressToTime(progress) {
  const pointIndex = TIMELINE.findIndex(([scrollPoint]) => progress <= scrollPoint)
  const upperIndex = pointIndex <= 0 ? 1 : pointIndex
  const [scrollStart, timeStart] = TIMELINE[upperIndex - 1]
  const [scrollEnd, timeEnd] = TIMELINE[upperIndex]
  const localProgress = clamp((progress - scrollStart) / (scrollEnd - scrollStart))

  return timeStart + (timeEnd - timeStart) * localProgress
}

/**
 * Scroll/seek hardening is adapted from the MIT-licensed Scroll World project:
 * https://github.com/oso95/scroll-world
 * See THIRD_PARTY_NOTICES.md for its copyright and license notice.
 */
export default function CinematicScrollIntro() {
  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const videoRef = useRef(null)
  const firstCopyRef = useRef(null)
  const secondCopyRef = useRef(null)
  const scrollCueRef = useRef(null)
  const progressRef = useRef(null)
  const releaseRef = useRef(null)
  const playbackRef = useRef({
    currentTime: TIMELINE[0][1],
    targetTime: TIMELINE[0][1],
    ready: false,
    painted: false,
    userReady: false,
  })

  useEffect(() => {
    const root = rootRef.current
    const firstCopy = firstCopyRef.current
    const secondCopy = secondCopyRef.current
    const scrollCue = scrollCueRef.current
    const progressLine = progressRef.current
    const release = releaseRef.current
    const coarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    let laidOutWidth = window.innerWidth
    let scrollFrame = 0

    const renderScrollState = () => {
      scrollFrame = 0
      if (!root) return

      const rect = root.getBoundingClientRect()
      const scrollDistance = Math.max(1, root.offsetHeight - window.innerHeight)
      const progress = clamp(-rect.top / scrollDistance)
      const targetTime = mapProgressToTime(progress)
      const firstOpacity = windowedOpacity(progress, 0, 0.035, 0.16, 0.27)
      const secondOpacity = windowedOpacity(progress, 0.29, 0.36, 0.48, 0.59)
      const releaseOpacity = smoothstep(0.82, 0.985, progress)

      playbackRef.current.targetTime = targetTime
      root.style.setProperty('--cinematic-progress', progress.toFixed(4))
      root.dataset.cinematicProgress = progress.toFixed(3)
      root.dataset.targetTime = targetTime.toFixed(3)

      if (firstCopy) {
        firstCopy.style.opacity = firstOpacity.toFixed(3)
        firstCopy.style.transform = `translate3d(0, ${(0.5 - progress) * 26}px, 0)`
      }
      if (secondCopy) {
        secondCopy.style.opacity = secondOpacity.toFixed(3)
        secondCopy.style.transform = `translate3d(0, ${(0.43 - progress) * 22}px, 0)`
      }
      if (scrollCue) scrollCue.style.opacity = String(1 - smoothstep(0.02, 0.13, progress))
      if (progressLine) progressLine.style.transform = `scaleX(${progress.toFixed(4)})`
      if (release) release.style.opacity = releaseOpacity.toFixed(3)
    }

    const requestScrollRender = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScrollState)
    }

    const handleResize = () => {
      if (coarsePointer && window.innerWidth === laidOutWidth) return
      laidOutWidth = window.innerWidth
      requestScrollRender()
    }

    renderScrollState()
    window.addEventListener('scroll', requestScrollRender, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('orientationchange', requestScrollRender, { passive: true })

    return () => {
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', requestScrollRender)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', requestScrollRender)
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    const video = videoRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const useMobileAsset = coarsePointer || window.matchMedia('(max-width: 860px)').matches
    const source = useMobileAsset ? MOBILE_VIDEO : DESKTOP_VIDEO
    const controller = new AbortController()
    let objectUrl = ''
    let seekFrame = 0
    let idleHandle = 0
    let timeoutHandle = 0

    if (!root || !stage || !video || reducedMotion) {
      if (root) root.dataset.cinematicMode = 'reduced-motion'
      return undefined
    }

    root.dataset.cinematicSource = useMobileAsset ? 'mobile' : 'desktop'

    const primeVideo = () => {
      const playback = playbackRef.current
      if (!coarsePointer || !playback.ready || !video || playback.userReady === false) return

      try {
        const promise = video.play()
        if (promise?.then) promise.then(() => video.pause()).catch(() => {})
      } catch {
        // The matching poster remains visible if the browser declines priming.
      }
    }

    const handleFirstGesture = () => {
      if (playbackRef.current.userReady) return
      playbackRef.current.userReady = true
      primeVideo()
    }

    const handleLoadedMetadata = () => {
      const playback = playbackRef.current
      playback.ready = true
      root.classList.add('is-video-ready')
      root.dataset.cinematicReady = 'true'
      const safeDuration = Math.max(0, video.duration - 0.045)
      const firstTime = Math.min(playback.targetTime, safeDuration)
      playback.currentTime = firstTime
      try {
        video.currentTime = firstTime
      } catch {
        // The next animation frame retries once the decoder is ready.
      }
      if (playback.userReady) primeVideo()
    }

    const handleLoadedData = () => {
      root.classList.add('has-video-data')
    }

    const handleSeeked = () => {
      if (!playbackRef.current.painted) {
        playbackRef.current.painted = true
        stage.classList.add('has-painted-frame')
      }
    }

    const handleVideoError = () => {
      root.classList.add('has-video-error')
      root.dataset.cinematicReady = 'fallback'
    }

    const seekLoop = () => {
      const playback = playbackRef.current
      if (playback.ready && !video.seeking) {
        const delta = playback.targetTime - playback.currentTime
        const epsilon = useMobileAsset ? 0.035 : 0.014

        if (Math.abs(delta) > epsilon) {
          playback.currentTime += delta * (useMobileAsset ? 0.24 : 0.19)
          if (Math.abs(playback.targetTime - playback.currentTime) < epsilon) {
            playback.currentTime = playback.targetTime
          }

          const safeDuration = Math.max(0, video.duration - 0.045)
          const nextTime = clamp(playback.currentTime, 0.02, safeDuration)
          try {
            video.currentTime = nextTime
          } catch {
            // A decoder-busy frame is harmless; the coalesced target stays current.
          }
        }
      }

      seekFrame = window.requestAnimationFrame(seekLoop)
    }

    const loadVideo = async () => {
      try {
        const response = await fetch(source, { signal: controller.signal })
        if (!response.ok) throw new Error(`Video request failed with ${response.status}`)
        const blob = await response.blob()
        if (controller.signal.aborted) return
        objectUrl = URL.createObjectURL(blob)
        video.src = objectUrl
        video.load()
      } catch (error) {
        if (controller.signal.aborted) return
        // Same-origin range requests are the graceful fallback if Blob loading fails.
        video.src = source
        video.load()
        root.dataset.cinematicLoadFallback = 'direct'
        if (error instanceof Error) root.dataset.cinematicLoadError = error.message
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('seeked', handleSeeked)
    video.addEventListener('error', handleVideoError)
    window.addEventListener('pointerdown', handleFirstGesture, { once: true, passive: true })
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true })

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(loadVideo, { timeout: 700 })
    } else {
      timeoutHandle = window.setTimeout(loadVideo, 0)
    }
    seekFrame = window.requestAnimationFrame(seekLoop)

    return () => {
      controller.abort()
      if (idleHandle && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleHandle)
      if (timeoutHandle) window.clearTimeout(timeoutHandle)
      if (seekFrame) window.cancelAnimationFrame(seekFrame)
      window.removeEventListener('pointerdown', handleFirstGesture)
      window.removeEventListener('touchstart', handleFirstGesture)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('seeked', handleSeeked)
      video.removeEventListener('error', handleVideoError)
      video.removeAttribute('src')
      video.load()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={rootRef}
      className="cinematic-scroll"
      aria-label="Spark Command Systems cinematic intro"
    >
      <div ref={stageRef} className="cinematic-stage">
        <div className="cinematic-media" aria-hidden="true">
          <picture className="cinematic-poster cinematic-opening-poster">
            <source media="(max-width: 860px)" srcSet={MOBILE_POSTER} />
            <img src={OPENING_POSTER} alt="" fetchPriority="high" decoding="sync" />
          </picture>

          <video
            ref={videoRef}
            className="cinematic-video"
            muted
            playsInline
            preload="none"
            tabIndex={-1}
            disablePictureInPicture
          />

          <picture className="cinematic-final-still">
            <source media="(max-width: 860px)" srcSet={FINAL_MOBILE_POSTER} />
            <img src={FINAL_POSTER} alt="" decoding="async" />
          </picture>
        </div>

        <div className="cinematic-vignette" aria-hidden="true" />
        <div className="cinematic-atmosphere" aria-hidden="true" />
        <div className="cinematic-scanline" aria-hidden="true" />

        <div ref={firstCopyRef} className="cinematic-copy cinematic-copy-first">
          <span>01 / Connected world</span>
          <p>Technology. Connected.</p>
        </div>

        <div ref={secondCopyRef} className="cinematic-copy cinematic-copy-second">
          <span>02 / Forward systems</span>
          <p>Built to move your business forward.</p>
        </div>

        <div ref={scrollCueRef} className="cinematic-scroll-cue" aria-hidden="true">
          <span>Scroll to enter</span>
          <ArrowDown className="h-4 w-4" />
        </div>

        <div className="cinematic-load-state" aria-hidden="true">
          <span />
          Preparing cinematic
        </div>

        <div className="cinematic-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>

        <div ref={releaseRef} className="cinematic-release" aria-hidden="true" />

        <p className="sr-only">
          Scroll to move through a connected global network and reveal the Spark Command Systems brand. Continue scrolling to access the website.
        </p>
      </div>
    </section>
  )
}
