import { ArrowRight, ChevronDown, MapPin, RadioTower } from 'lucide-react'
import { useState } from 'react'

const sites = [
  {
    name: 'Boston MA',
    status: 'Team Online',
    category: 'Partner Coverage',
    teams: '4 active',
    requests: '7 open',
    risk: 'Low',
    action: 'Keep partner coverage active across priority workflows.',
    x: 24,
    y: 28,
    tone: 'online',
  },
  {
    name: 'Providence RI',
    status: 'Risk Alert',
    category: 'Request Aging',
    teams: '2 active',
    requests: '11 open',
    risk: 'High',
    action: 'Review aging requests and elevate routing readiness.',
    x: 44,
    y: 46,
    tone: 'alert',
  },
  {
    name: 'Hartford CT',
    status: 'Ready for Routing',
    category: 'Workflow Ops',
    teams: '3 active',
    requests: '5 open',
    risk: 'Medium',
    action: 'Release routing preview to operations leads.',
    x: 34,
    y: 66,
    tone: 'ready',
  },
  {
    name: 'New York NY',
    status: 'Command Active',
    category: 'Client Account',
    teams: '3 active',
    requests: '9 open',
    risk: 'Low',
    action: 'Maintain command view and monitor partner coverage.',
    x: 70,
    y: 72,
    tone: 'online',
  },
]

function pinClass(tone, isSelected) {
  const base = 'absolute z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition duration-300'
  const tones = {
    online: 'border-emerald-200/50 bg-emerald-200/14 text-emerald-100 shadow-[0_0_28px_rgba(167,243,208,0.22)]',
    alert: 'border-red-200/55 bg-red-300/14 text-red-100 shadow-[0_0_34px_rgba(248,113,113,0.26)]',
    ready: 'border-amber-200/60 bg-amber-200/16 text-amber-100 shadow-[0_0_34px_rgba(245,158,11,0.28)]',
  }

  return `${base} ${tones[tone]} ${isSelected ? 'scale-125 ring-2 ring-amber-200/35' : 'hover:scale-110'}`
}

export default function InteractiveMapExpansion() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedSite, setSelectedSite] = useState(sites[0])

  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/80">Feature Test 01</div>
        <div className="relative overflow-hidden border border-white/10 bg-[#060d16]/88 p-5 shadow-[0_34px_130px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.055)] sm:p-7">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(245,158,11,0.1),transparent_22%),radial-gradient(circle_at_84%_80%,rgba(34,211,238,0.055),transparent_28%)]" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-200/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                <RadioTower className="h-3.5 w-3.5" />
                Interactive Command Map
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Expand a live operations layer.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Expand a live operations layer and watch locations, teams and alerts come online.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-amber-200/25 bg-amber-200/[0.09] px-5 text-sm font-bold text-amber-50 transition hover:border-amber-100/45 hover:bg-amber-200/[0.14]"
            >
              {isExpanded ? 'Collapse Map View' : 'Expand Map View'}
              {isExpanded ? <ChevronDown className="h-4 w-4 rotate-180" /> : <ArrowRight className="h-4 w-4" />}
            </button>
          </div>

          <div className={`relative grid overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'mt-8 max-h-[58rem] opacity-100' : 'max-h-0 opacity-0'} lg:grid-cols-[1.25fr_0.75fr] lg:gap-5`}>
            <div className="relative min-h-[22rem] overflow-hidden border border-white/10 bg-[#03070d] sm:min-h-[30rem]">
              <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_74%_70%,rgba(34,211,238,0.08),transparent_30%)]" />
              <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M24 28 L44 46 L34 66 L70 72 L44 46" fill="none" stroke="rgba(245,158,11,0.36)" strokeWidth="0.35" strokeDasharray="3 4" />
                <path d="M24 28 L70 72" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="0.25" strokeDasharray="2 5" />
              </svg>

              {sites.map((site) => (
                <button
                  key={site.name}
                  type="button"
                  onClick={() => setSelectedSite(site)}
                  className={pinClass(site.tone, selectedSite.name === site.name)}
                  style={{ left: `${site.x}%`, top: `${site.y}%` }}
                  aria-label={`Select ${site.name}`}
                >
                  <span className="absolute h-full w-full animate-ping rounded-full bg-current opacity-15" />
                  <MapPin className="relative h-4 w-4" />
                </button>
              ))}

              <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:grid-cols-4">
                {['4 Locations Online', '12 Teams Visible', '3 Alerts Active', '1 Workflow Ready'].map((stat) => (
                  <div key={stat} className="border border-white/10 bg-black/42 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 backdrop-blur">
                    {stat}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 border border-white/10 bg-black/24 p-5 lg:mt-0">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">Selected Site</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{selectedSite.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{selectedSite.category}</p>
              <div className="mt-6 grid gap-3">
                {[
                  ['Status', selectedSite.status],
                  ['Active teams', selectedSite.teams],
                  ['Open requests', selectedSite.requests],
                  ['Risk level', selectedSite.risk],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.035] px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
                    <span className="text-right text-sm font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border border-amber-200/18 bg-amber-200/[0.065] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">Suggested Action</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{selectedSite.action}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
