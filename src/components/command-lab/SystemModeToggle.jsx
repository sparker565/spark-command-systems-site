import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const chaosItems = [
  ['Email thread', 'Vendor ETA unclear', '11 unread updates'],
  ['Spreadsheet', 'Site status mismatched', 'Manual review needed'],
  ['Text message', 'Crew reassigned', 'No central record'],
  ['Alert', 'Invoice exception', 'Priority unknown'],
]

const commandItems = [
  ['Site status', '94% visible', 'Healthy'],
  ['Vendor readiness', '42 crews indexed', 'Ready'],
  ['Work order flow', '18 routed today', 'Controlled'],
  ['Accounting visibility', '6 exceptions tagged', 'Clear'],
]

export default function SystemModeToggle() {
  const [mode, setMode] = useState('command')
  const isCommand = mode === 'command'

  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/80">Chaos to Command</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              See scattered operations convert into structured control.
            </h2>
          </div>
          <div className="grid grid-cols-2 border border-white/10 bg-white/[0.035] p-1">
            {['chaos', 'command'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                className={`px-4 py-3 text-sm font-bold transition ${
                  mode === option
                    ? option === 'command'
                      ? 'bg-emerald-200 text-black'
                      : 'bg-amber-300 text-black'
                    : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {option === 'chaos' ? 'Chaos Mode' : 'Command Mode'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border border-white/10 bg-[#050b13]/88 p-4 shadow-[0_34px_130px_rgba(0,0,0,0.5)] sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.08),transparent_22%),radial-gradient(circle_at_86%_78%,rgba(34,211,238,0.055),transparent_28%)]" />
          <div key={mode} className={`command-lab-mode-grid relative grid gap-3 md:grid-cols-2 xl:grid-cols-4 ${isCommand ? 'is-command' : 'is-chaos'}`}>
            {(isCommand ? commandItems : chaosItems).map(([title, body, meta], index) => (
              <div
                key={title}
                className={`relative min-h-44 overflow-hidden border p-5 ${
                  isCommand
                    ? 'border-emerald-200/18 bg-gradient-to-br from-emerald-200/[0.08] via-white/[0.035] to-cyan-200/[0.04]'
                    : 'border-amber-200/18 bg-gradient-to-br from-red-300/[0.08] via-white/[0.035] to-amber-200/[0.04]'
                }`}
                style={{ transform: isCommand ? 'none' : `rotate(${[-1.2, 0.8, -0.6, 1][index]}deg)` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">0{index + 1}</div>
                  {isCommand ? <CheckCircle2 className="h-5 w-5 text-emerald-200" /> : <AlertTriangle className="h-5 w-5 text-amber-200" />}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
                <div className={`mt-5 inline-flex border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                  isCommand ? 'border-emerald-200/20 bg-emerald-200/[0.08] text-emerald-100' : 'border-amber-200/20 bg-amber-200/[0.08] text-amber-100'
                }`}>
                  {meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
