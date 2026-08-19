# Cinematic Homepage Media

## Authoritative source

- Repository copy: `public/assets/cinematic/spark-command-scroll-master.mp4`
- Original filename: `Create_3d_animated_transition_1080p_202608191412.mp4`
- SHA-256: `2E0FA6CABCCD42F78BCD9D16589F603049FBCB4F5085ECB27D30C766435FB3D1`
- File size: 13,014,172 bytes (12.41 MiB)
- Source properties: H.264 High, 1920×1080 (16:9), 24 fps, 8.000 seconds, 192 frames
- Video: yuv420p 8-bit progressive, square pixels, approximately 12.81 Mbps
- Audio: AAC-LC, 48 kHz stereo, approximately 139.9 kbps
- Color metadata: chroma location `center`; the source does not declare color range, primaries, transfer, or matrix tags

The master is retained unchanged. The homepage never requests it at runtime.

## Web derivatives

Both derivatives strip audio, use H.264/yuv420p, disable scene-cut keyframes, and move MP4 metadata to the front of the file with `+faststart`.

### Desktop

- File: `spark-command-scroll-desktop.mp4`
- Native 1920×1080 resolution; no crop, resize, or sharpening filter
- File size: 16,221,788 bytes (15.47 MiB)
- H.264 High / yuv420p, CRF 18, slow preset, Level 4.1
- GOP/keyframe interval: 8 frames (0.333 seconds at 24 fps; 24 keyframes)

The native 1080p frame was retained because the cinematic stage can reach full-HD desktop dimensions and the replacement source contains materially more real detail than the prior 720p master. CRF 18 was chosen to protect the fine network lines, dark gradients, metallic edges, and wordmark during the required frequent-keyframe encode.

### Mobile

- File: `spark-command-scroll-mobile.mp4`
- 720×720 centered square crop from the 1080×1080 safe center of the master
- File size: 6,458,364 bytes (6.16 MiB)
- H.264 High / yuv420p, CRF 19, slow preset, Level 3.1
- GOP/keyframe interval: 4 frames (0.167 seconds at 24 fps; 48 keyframes)

No authoritative portrait footage exists. Representative-frame inspection confirmed that the centered square preserves the globe, vortex, complete Spark emblem, wordmark, and final oval. The page continues to use `object-fit: contain` on phone viewports so the brand is never distorted or cropped by the layout.

## Posters

- `spark-command-scroll-opening.webp`: 1920×1080 frame-matched opening poster, 210,994 bytes
- `spark-command-scroll-opening-mobile.webp`: 720×720 mobile opening poster, 82,066 bytes
- `spark-command-scroll-final.webp`: 1920×1080 final brand frame used for reduced motion and graceful failure, 142,824 bytes
- `spark-command-scroll-final-mobile.webp`: 720×720 mobile final brand frame, 76,748 bytes

Opening posters come from 0.02 seconds and final posters from 7.94 seconds, matching the displayed timeline endpoints closely enough to avoid a poster/video flash.

## Timing compatibility

The replacement is exactly 8.000 seconds at 24 fps and follows the same visual sequence as the prior source. The existing non-linear timeline, scroll distances, reverse scrubbing, final-logo dwell, navigation reveal, and homepage release timing remain unchanged.

## Scroll World reference

The implementation adapts Scroll World's Blob-backed seekability, requestAnimationFrame updates, one-seek-at-a-time coalescing, mobile decoder tuning, iOS touch priming, poster retention, reduced-motion fallback, and mobile resize handling. The final React component and site-specific pacing/UI were implemented for this repository. See `THIRD_PARTY_NOTICES.md` for the MIT notice.
