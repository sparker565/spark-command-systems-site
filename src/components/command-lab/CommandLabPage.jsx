import { useEffect, useState } from 'react'
import CommandInputDemo from './CommandInputDemo'
import CommandReactionPanel from './CommandReactionPanel'
import InteractiveMapExpansion from './InteractiveMapExpansion'
import SignalBackground from './SignalBackground'
import SystemModeToggle from './SystemModeToggle'

const responses = {
  vendor: {
    mode: 'vendor',
    video: '/videos/vendor-network.mp4',
    videoLabel: 'LIVE NETWORK SIGNAL',
    tone: 'gold',
    status: 'Mapping vendor network...',
    headline: 'Vendor Network Mapped',
    copy: 'Spark is visualizing coverage, crew readiness and service gaps across your operating network.',
    metrics: ['42 Crews Indexed', '18 Sites Need Coverage Review', '6 Priority Alerts'],
    feed: ['Vendor territories scanned', 'Coverage gaps detected', 'Dispatch readiness preview generated'],
    labels: ['Coverage Online', 'Crew Signal Active', 'Command View Ready'],
  },
  risk: {
    mode: 'risk',
    video: '/videos/risk-detection.mp4',
    videoLabel: 'RISK SIGNAL ACTIVE',
    tone: 'risk',
    status: 'Scanning operational risk...',
    headline: 'Risk Visibility Online',
    copy: 'Spark is organizing alerts, service exposure and unresolved operational threats into one command view.',
    metrics: ['12 Open Risks', '4 Critical Sites', '9 Aging Work Orders'],
    feed: ['Critical alerts grouped', 'Aging work orders surfaced', 'Risk command view generated'],
    labels: ['Alert Signal Active', 'Critical Sites Flagged', 'Risk View Ready'],
  },
  command: {
    mode: 'command',
    video: '/videos/chaos-to-command.mp4',
    videoLabel: 'SYSTEM TRANSFORMATION',
    tone: 'gold',
    status: 'Converting chaos into command...',
    headline: 'Command Center Transformation Started',
    copy: 'Spark is converting scattered emails, spreadsheets and texts into structured operational control.',
    metrics: ['Inbox Noise Reduced', 'Workflows Organized', 'Command View Generated'],
    feed: ['Unstructured updates captured', 'Workflow paths organized', 'Command view generated'],
    labels: ['Chaos Reduced', 'Workflow Signal Active', 'Command View Ready'],
  },
  default: {
    mode: 'standard',
    status: 'Generating command preview...',
    headline: 'Spark Command Preview Generated',
    copy: 'Your operational command layer is being assembled from sites, vendors, alerts and workflows.',
    metrics: ['Command Layer Drafted', 'Site Signals Mapped', 'Workflow Preview Ready'],
    feed: ['Operating model scanned', 'Signal groups assembled', 'Preview dashboard generated'],
  },
}

function resolveResponse(command) {
  const value = command.toLowerCase()
  if (
    value.includes('vendor') ||
    value.includes('vendors') ||
    value.includes('coverage') ||
    value.includes('crew') ||
    value.includes('crews')
  ) {
    return responses.vendor
  }
  if (
    value.includes('risk') ||
    value.includes('risks') ||
    value.includes('alert') ||
    value.includes('alerts') ||
    value.includes('critical') ||
    value.includes('exposure') ||
    value.includes('threat')
  ) {
    return responses.risk
  }
  if (
    value.includes('chaos') ||
    value.includes('command') ||
    value.includes('organize') ||
    value.includes('workflow') ||
    value.includes('workflows') ||
    value.includes('build') ||
    value.includes('client command center')
  ) {
    return responses.command
  }
  return responses.default
}

export default function CommandLabPage({ onLock }) {
  const [activeResponse, setActiveResponse] = useState(responses.default)
  const [signal, setSignal] = useState(0)
  const [autoDemoOn, setAutoDemoOn] = useState(true)
  const [manualTick, setManualTick] = useState(0)

  const handleCommand = (command) => {
    setActiveResponse(resolveResponse(command))
    setSignal((current) => current + 1)
  }

  const handleUserCommand = (command) => {
    setManualTick((current) => current + 1)
    handleCommand(command)
  }

  useEffect(() => {
    if (!autoDemoOn) return undefined

    const cycle = [responses.vendor, responses.risk, responses.command]
    let index = 0
    let intervalId

    const timeoutId = window.setTimeout(() => {
      setActiveResponse(cycle[index])
      setSignal((current) => current + 1)
      index = (index + 1) % cycle.length

      intervalId = window.setInterval(() => {
        setActiveResponse(cycle[index])
        setSignal((current) => current + 1)
        index = (index + 1) % cycle.length
      }, 5000)
    }, 5000)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [autoDemoOn, manualTick])

  return (
    <div className="command-lab-page min-h-screen overflow-x-hidden bg-[#020407] text-white antialiased">
      <style>{`
        .command-lab-signal-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background:
            radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(245, 158, 11, 0.08), transparent 18rem),
            radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.06), transparent 30rem),
            #020407;
        }

        .command-lab-signal-grid {
          position: absolute;
          inset: 0;
          opacity: 0.055;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .command-lab-signal-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.34;
          filter: drop-shadow(0 0 18px rgba(245, 158, 11, 0.16));
        }

        .command-lab-signal-lines path {
          fill: none;
          stroke: rgba(245, 158, 11, 0.3);
          stroke-width: 0.13;
          stroke-dasharray: 4 5;
          animation: commandLabSignalFlow 14s linear infinite;
        }

        .command-lab-signal-node {
          position: absolute;
          display: grid;
          width: 0.9rem;
          height: 0.9rem;
          place-items: center;
          border: 1px solid rgba(245, 158, 11, 0.4);
          background: rgba(245, 158, 11, 0.16);
          box-shadow: 0 0 28px rgba(245, 158, 11, 0.3);
          animation: commandLabNodePulse 5.5s ease-in-out infinite;
        }

        .command-lab-signal-node span {
          opacity: 0;
        }

        .command-lab-react {
          animation: commandLabReactIn 420ms ease-out both;
        }

        .command-lab-mode-grid {
          animation: commandLabModeIn 360ms ease-out both;
        }

        .command-lab-video-stage {
          animation: commandLabVideoIn 520ms ease-out both;
        }

        .command-lab-metric-card,
        .command-lab-feed-row {
          animation: commandLabDetailIn 360ms ease-out both;
        }

        @keyframes commandLabSignalFlow {
          to { stroke-dashoffset: -90; }
        }

        @keyframes commandLabNodePulse {
          0%, 100% { transform: scale(0.88); opacity: 0.42; }
          50% { transform: scale(1.25); opacity: 0.9; }
        }

        @keyframes commandLabReactIn {
          from { opacity: 0; transform: translateY(10px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes commandLabModeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes commandLabVideoIn {
          from { opacity: 0; transform: translateY(12px) scale(0.985); filter: saturate(0.75); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: saturate(1); }
        }

        @keyframes commandLabDetailIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <SignalBackground />

      <main className="relative z-10">
        <section className="relative px-4 pb-8 pt-20 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex w-fit border border-amber-200/25 bg-amber-200/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100">
                Experimental System Preview
              </div>
              {onLock ? (
                <button
                  type="button"
                  onClick={onLock}
                  title="Ends this preview session and returns to login."
                  className="inline-flex w-fit items-center justify-center border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300 transition hover:border-amber-200/35 hover:bg-amber-200/[0.08] hover:text-amber-100"
                >
                  Lock & Exit
                </button>
              ) : null}
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Spark Command Lab
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A live experiment in AI-driven operations visibility.
            </p>
            <p className="mt-6 max-w-2xl border-l border-amber-200/35 pl-5 text-sm leading-7 text-slate-400">
              A private Spark ecosystem for testing new product ideas, advanced website interactions and command system concepts before they move into production.
            </p>
          </div>
        </section>

        <InteractiveMapExpansion />

        <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/70">Feature Test 02</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Video-backed system response.
              </h2>
              </div>
              <button
                type="button"
                onClick={() => setAutoDemoOn((current) => !current)}
                className={`inline-flex min-h-11 items-center justify-center border px-4 text-sm font-bold transition ${
                  autoDemoOn
                    ? 'border-emerald-200/25 bg-emerald-200/[0.08] text-emerald-100 hover:bg-emerald-200/[0.12]'
                    : 'border-white/12 bg-white/[0.04] text-slate-300 hover:bg-white/[0.075] hover:text-white'
                }`}
              >
                Auto Demo: {autoDemoOn ? 'On' : 'Off'}
              </button>
            </div>
            <CommandReactionPanel response={activeResponse} signal={signal} />
          </div>
        </section>

        <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/80">
              Feature Test 03 / AI Command Interface (Experimental)
            </div>
            <p className="mb-7 max-w-2xl text-sm leading-7 text-slate-400">
              Submit a sample operational prompt to activate the command simulation above.
            </p>
            <CommandInputDemo activeMode={activeResponse.mode} onCommand={handleUserCommand} onUserAction={() => setManualTick((current) => current + 1)} />
          </div>
        </section>

        <SystemModeToggle />

        <section className="relative px-4 pb-20 pt-8 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-7xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/75">Future Modules</div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              Future lab modules can test executive summaries, dispatch previews, vendor scorecards and financial command visibility without touching production workflows.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
