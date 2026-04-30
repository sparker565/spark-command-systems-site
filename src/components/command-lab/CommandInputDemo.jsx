import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

const suggestions = [
  { label: 'Track vendors across 200 sites', mode: 'vendor' },
  { label: 'Show me operational risk', mode: 'risk' },
  { label: 'Turn chaos into command', mode: 'command' },
  { label: 'Build a client command center', mode: 'command' },
]

export default function CommandInputDemo({ activeMode = '', onCommand, onUserAction }) {
  const [command, setCommand] = useState('')

  const submitCommand = (value = command) => {
    const nextCommand = value.trim()
    if (!nextCommand) return
    onCommand(nextCommand)
    setCommand('')
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden border border-amber-200/16 bg-[#060d16]/78 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.46),0_0_42px_rgba(245,158,11,0.055)] backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_90%_100%,rgba(34,211,238,0.06),transparent_30%)]" />

        <form
          className="relative flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault()
            submitCommand()
          }}
        >
          <label className="sr-only" htmlFor="command-lab-input">
            Command input
          </label>
          <div className="relative flex min-h-16 flex-1 items-center border border-white/10 bg-black/38 px-4 focus-within:border-amber-200/45 focus-within:shadow-[0_0_34px_rgba(245,158,11,0.12)] sm:px-5">
            <Sparkles className="mr-3 h-5 w-5 shrink-0 text-amber-100/80" />
            <input
              id="command-lab-input"
              value={command}
              onChange={(event) => {
                setCommand(event.target.value)
                onUserAction?.()
              }}
              placeholder="Tell Spark what you need..."
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500 sm:text-lg"
            />
          </div>
          <button
            type="submit"
            className="inline-flex min-h-16 items-center justify-center gap-2 bg-amber-300 px-6 text-base font-bold text-black shadow-[0_0_30px_rgba(245,158,11,0.22)] transition hover:bg-amber-200"
          >
            Activate
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.label}
            type="button"
            onClick={() => submitCommand(suggestion.label)}
            className={`border px-3 py-2 text-left text-xs font-semibold transition duration-200 sm:text-sm ${
              activeMode === suggestion.mode
                ? 'border-amber-200/45 bg-amber-200/[0.12] text-amber-50 shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                : 'border-white/10 bg-white/[0.045] text-slate-300 hover:border-amber-200/35 hover:bg-amber-200/[0.08] hover:text-amber-50'
            }`}
          >
            {suggestion.label}
          </button>
        ))}
      </div>
    </div>
  )
}
