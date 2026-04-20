import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CircuitBoard,
  DatabaseZap,
  Layers3,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'

const corporateLogo = '/corporate-logo.png'
const techLogo = '/tech-logo.png'
const productLogo = '/product-logo.png'

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Integration', href: '#integration' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Deployment', href: '#deployment' },
]

const operatingSignals = [
  ['Operations layer', 'Live command view'],
  ['Systems layer', 'Connected data flows'],
  ['AI layer', 'Signal detection'],
]

const platformMetrics = [
  ['Active workflows', '128'],
  ['Sites online', '317'],
  ['System events', '2.4k'],
  ['Response queues', '18'],
]

const integrationLines = [
  {
    title: 'Operational software',
    text: 'Custom workflows, dashboards, approvals, routing, reporting, and internal tools designed around the way teams actually run work.',
    icon: CircuitBoard,
  },
  {
    title: 'Systems integration',
    text: 'Connect existing services, databases, vendor processes, and field activity into one command layer without forcing every team into a new silo.',
    icon: Network,
  },
  {
    title: 'Unified execution',
    text: 'Give leadership, operators, field teams, and partners a shared source of truth from intake to completion.',
    icon: Waypoints,
  },
]

const pipelineItems = [
  ['AI operations tools', 'Assistive intelligence for alerts, triage, summarization, and decision support.'],
  ['Customer portals', 'Role-based access for clients, partners, and internal stakeholders.'],
  ['Data systems', 'Cleaner operational records, analytics-ready workflows, and reliable event history.'],
  ['Future platforms', 'Additional command products built from the same software and integration backbone.'],
]

const deploymentItems = [
  'Multi-site operational models',
  'Distributed team coordination',
  'Permission-aware workflows',
  'Real-world rollout support',
  'Executive visibility',
  'Partner and vendor access',
]

const applications = [
  {
    name: 'AMS Command Center',
    status: 'Active',
    type: 'Flagship Platform',
    description:
      'Operational command center platform for dispatch workflow, site visibility, and execution tracking.',
    action: 'View App',
    href: '/app',
  },
  {
    name: 'Spark Vendor Hub',
    status: 'In Development',
    type: 'Partner Portal',
    description:
      'Partner and vendor coordination portal for proposals, job updates, compliance, and communication.',
  },
  {
    name: 'Spark Client Portal',
    status: 'In Development',
    type: 'Customer Experience',
    description:
      'Customer-facing portal for service visibility, approvals, messaging, and operational status.',
  },
  {
    name: 'Spark Signal AI',
    status: 'Pipeline',
    type: 'AI Operations',
    description:
      'AI-assisted triage, alert interpretation, and operational recommendation engine.',
  },
  {
    name: 'Spark Data Grid',
    status: 'Pipeline',
    type: 'Data Infrastructure',
    description:
      'Unified operational data layer for records, reporting, analytics, and system normalization.',
  },
  {
    name: 'Spark Field Mobile',
    status: 'Concept',
    type: 'Mobile Execution',
    description:
      'Mobile-first execution app for field teams, operators, and distributed service partners.',
  },
  {
    name: 'Spark Workflow Studio',
    status: 'Concept',
    type: 'Automation Builder',
    description:
      'Internal workflow builder for routing, automation, approvals, and cross-system orchestration.',
  },
  {
    name: 'Spark Control Room',
    status: 'Future Platform',
    type: 'Enterprise Command',
    description:
      'Enterprise multi-product command environment for live operations visibility and intervention.',
  },
]

function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}

function BrandFrame({ src, alt, className = '', imageClassName = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-black/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_44px_rgba(245,158,11,0.08)] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(245,158,11,0.2),transparent_34%),linear-gradient(135deg,rgba(148,163,184,0.08),transparent_32%,rgba(34,211,238,0.08))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/45" />
      <img src={src} alt={alt} className={`relative h-full w-full object-cover opacity-95 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_44%,rgba(0,0,0,0.62)_68%,transparent_100%)] ${imageClassName}`} />
      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
    </div>
  )
}

function SectionIntro({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/80">{eyebrow}</div>
      <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-slate-300">{children}</p> : null}
    </div>
  )
}

function SceneBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020407]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,158,11,0.2),transparent_28%),radial-gradient(circle_at_78%_6%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_62%_78%,rgba(148,163,184,0.08),transparent_34%),linear-gradient(180deg,#020407_0%,#07111d_42%,#020407_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:86px_86px]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(115deg,transparent_0%,transparent_47%,rgba(255,255,255,0.4)_48%,transparent_49%,transparent_100%)] [background-size:180px_180px]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/[0.055] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_52%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  )
}

function USOperationsMap() {
  const nodes = [
    { id: 'pnw', x: 130, y: 92, tone: 'cyan', size: 4 },
    { id: 'bay', x: 104, y: 204, tone: 'gold', size: 5 },
    { id: 'la', x: 132, y: 280, tone: 'cyan', size: 4 },
    { id: 'denver', x: 286, y: 194, tone: 'gold', size: 5 },
    { id: 'dfw', x: 382, y: 310, tone: 'gold', size: 6 },
    { id: 'chicago', x: 502, y: 164, tone: 'gold', size: 5 },
    { id: 'atl', x: 572, y: 288, tone: 'cyan', size: 4 },
    { id: 'fl', x: 650, y: 384, tone: 'gold', size: 5 },
    { id: 'nyc', x: 690, y: 132, tone: 'gold', size: 6 },
    { id: 'dc', x: 654, y: 188, tone: 'cyan', size: 4 },
  ]

  const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]))
  const connections = [
    ['bay', 'denver'],
    ['la', 'dfw'],
    ['denver', 'chicago'],
    ['dfw', 'atl'],
    ['chicago', 'nyc'],
    ['atl', 'dc'],
    ['dc', 'nyc'],
    ['atl', 'fl'],
  ]

  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-label="United States operational map with active Spark command nodes"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="mapFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1f2937" stopOpacity="0.56" />
          <stop offset="55%" stopColor="#0f172a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="signalLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.08" />
          <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <g opacity="0.96">
        <path
          d="M74 142 L104 107 L170 89 L242 103 L318 91 L382 111 L438 104 L500 125 L545 118 L595 132 L630 127 L690 150 L722 178 L703 207 L682 201 L661 219 L630 216 L612 238 L596 266 L619 293 L660 318 L678 361 L653 394 L606 380 L574 337 L542 321 L501 315 L463 330 L418 319 L372 334 L324 313 L282 305 L250 278 L211 280 L170 258 L142 270 L118 243 L92 225 L96 192 L72 172 Z"
          fill="url(#mapFill)"
          stroke="rgba(148,163,184,0.22)"
          strokeWidth="2"
        />
        <path
          d="M95 151 L152 132 L224 139 L282 126 L348 135 L421 128 L488 144 L555 145 L612 154 L682 174"
          fill="none"
          stroke="rgba(148,163,184,0.11)"
          strokeWidth="1"
        />
        <path
          d="M137 235 L214 217 L291 224 L365 210 L444 225 L512 214 L590 229 L660 221"
          fill="none"
          stroke="rgba(148,163,184,0.1)"
          strokeWidth="1"
        />
        <path
          d="M270 118 L284 174 L290 230 L282 304"
          fill="none"
          stroke="rgba(148,163,184,0.09)"
          strokeWidth="1"
        />
        <path
          d="M501 125 L500 172 L514 232 L542 321"
          fill="none"
          stroke="rgba(148,163,184,0.09)"
          strokeWidth="1"
        />
      </g>

      <g opacity="0.55">
        <circle cx="692" cy="132" r="64" fill="rgba(245,158,11,0.16)" />
        <circle cx="382" cy="310" r="70" fill="rgba(245,158,11,0.11)" />
        <circle cx="130" cy="204" r="58" fill="rgba(34,211,238,0.1)" />
      </g>

      {connections.map(([from, to], index) => {
        const start = nodeById[from]
        const end = nodeById[to]

        return (
          <g key={`${from}-${to}`}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="url(#signalLine)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.76"
              filter="url(#nodeGlow)"
            />
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="18 210"
              opacity="0.32"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-228"
                dur={`${6 + index * 0.35}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        )
      })}

      {nodes.map((node, index) => {
        const isGold = node.tone === 'gold'
        const fill = isGold ? '#fbbf24' : '#67e8f9'
        const glow = isGold ? 'rgba(251,191,36,0.34)' : 'rgba(103,232,249,0.24)'

        return (
          <g key={node.id} filter="url(#nodeGlow)">
            <circle cx={node.x} cy={node.y} r={node.size * 5.6} fill={glow}>
              <animate
                attributeName="opacity"
                values="0.16;0.42;0.16"
                dur={`${4.8 + index * 0.22}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={node.x} cy={node.y} r={node.size} fill={fill}>
              <animate
                attributeName="r"
                values={`${node.size};${node.size + 1.8};${node.size}`}
                dur={`${3.4 + index * 0.18}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={node.x} cy={node.y} r={node.size + 4} fill="none" stroke={fill} strokeOpacity="0.4" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

function CommandConsole() {
  return (
    <div className="relative mx-auto max-w-2xl lg:max-w-none">
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_28%,rgba(245,158,11,0.22),transparent_30%),radial-gradient(circle_at_42%_64%,rgba(34,211,238,0.16),transparent_36%),linear-gradient(135deg,rgba(148,163,184,0.12),transparent_52%)] blur-2xl" />
      <div className="absolute -left-10 top-14 hidden h-[82%] w-16 border-l border-t border-b border-cyan-200/10 bg-gradient-to-r from-cyan-200/[0.08] to-transparent lg:block" />
      <div className="absolute -right-10 bottom-14 hidden h-[72%] w-16 border-r border-t border-b border-amber-200/10 bg-gradient-to-l from-amber-200/[0.08] to-transparent lg:block" />
      <Motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative border border-white/12 bg-[#07101b]/90 shadow-[0_36px_140px_rgba(0,0,0,0.68),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />
        <div className="absolute inset-y-8 -right-px w-px bg-gradient-to-b from-transparent via-cyan-200/70 to-transparent" />
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          </div>
          <span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">Spark command core</span>
        </div>

        <div className="grid gap-px bg-white/10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="bg-[#07101b] p-4 sm:p-5">
            <div className="relative min-h-[330px] overflow-hidden border border-white/10 bg-[#03070d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.23),transparent_23%),linear-gradient(140deg,rgba(245,158,11,0.12),transparent_35%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:auto,auto,42px_42px,42px_42px]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-amber-200/25 to-transparent" />
              <USOperationsMap />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_31%,rgba(245,158,11,0.12),transparent_18%),radial-gradient(circle_at_49%_72%,rgba(245,158,11,0.09),transparent_20%)]" />
              <div className="absolute left-5 top-5 border border-white/10 bg-black/45 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur">
                United States Ops Map
              </div>
              <div className="absolute inset-x-4 bottom-4 border border-white/10 bg-black/55 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-white">Live operational surface</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">Workflows, sites, partners, and event signals in one command view.</div>
                  </div>
                  <RadioTower className="hidden h-7 w-7 text-cyan-200 sm:block" />
                </div>
              </div>
              <BrandFrame
                src={techLogo}
                alt="Spark technology signal"
                className="absolute right-5 top-5 h-24 w-40 opacity-70"
                imageClassName="scale-150"
              />
            </div>
          </div>

          <div className="bg-[#07101b] p-4 sm:p-5">
            <div className="space-y-3">
              {platformMetrics.map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-amber-200/20 bg-gradient-to-br from-amber-200/[0.09] to-cyan-200/[0.04] p-4">
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-amber-200" />
                <span className="text-sm font-medium text-white">AI-ready signal layer</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Built to organize operational data so assistive tools can surface risk, context, and next actions.
              </p>
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  )
}

function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('platform')

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28)

      let currentSection = null

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)

        if (section && section.getBoundingClientRect().top < 180) {
          currentSection = section
        }
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020407] text-white antialiased">
      <SceneBackdrop />

      <header className="sticky top-3 z-50 px-3 sm:px-5 lg:px-8">
        <div
          className={`relative mx-auto max-w-7xl overflow-hidden border bg-[#020407]/72 shadow-[0_18px_70px_rgba(0,0,0,0.36)] backdrop-blur-2xl transition-all duration-300 ${
            isScrolled
              ? 'border-cyan-200/20 shadow-[0_18px_80px_rgba(0,0,0,0.46),0_0_34px_rgba(34,211,238,0.06)]'
              : 'border-white/12'
          }`}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/55 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-200/45 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(245,158,11,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_24%)]" />

          <div className={`relative flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-5 lg:px-6 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
            <a href="#top" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <BrandFrame
              src={corporateLogo}
              alt="Spark Command Systems"
              className={`shrink-0 transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
              imageClassName="scale-[2.15]"
            />
            <div className="min-w-0">
              <div className="text-sm font-semibold uppercase tracking-[0.34em] text-white">Spark</div>
              <div className="hidden text-[0.68rem] uppercase tracking-[0.3em] text-slate-400 sm:block">Command Systems</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 border border-white/10 bg-white/[0.035] p-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.href.slice(1)
                    ? 'bg-cyan-200/[0.12] text-cyan-100 shadow-[inset_0_0_0_1px_rgba(165,243,252,0.12)]'
                    : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/35 hover:bg-cyan-200/[0.11] hover:shadow-[0_0_26px_rgba(34,211,238,0.1)] md:inline-flex"
            >
              Contact Development Team
            </a>
            <a
              href="#contact"
              className="hidden border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] lg:inline-flex"
            >
              Book a Demo
            </a>
            <a
              href="/applications"
              className="group inline-flex items-center gap-2 bg-amber-300 px-4 py-2 text-sm font-bold text-black shadow-[0_0_32px_rgba(245,158,11,0.28)] transition hover:bg-amber-200 hover:shadow-[0_0_42px_rgba(245,158,11,0.38)] sm:px-5"
            >
              <span className="hidden sm:inline">Open App</span>
              <span className="sm:hidden">Apps</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden pt-16 sm:pt-20">
          <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/[0.04]" />
          <div className="absolute right-0 top-1/3 h-px w-1/3 bg-gradient-to-l from-amber-200/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020407] to-transparent" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="mb-7 inline-flex items-center gap-3 border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.1)]">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_14px_rgba(253,230,138,0.9)]" />
                Software. Systems. Command.
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Technology infrastructure for live operations.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Spark Command Systems builds software, integrates operational systems, and develops command center platforms for teams that need clarity under pressure.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/applications"
                  className="group inline-flex items-center justify-center gap-2 bg-cyan-200 px-7 py-4 text-base font-bold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.22)] transition hover:bg-white"
                >
                  Open Applications
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Explore the company
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
                {operatingSignals.map(([label, value]) => (
                  <div key={label} className="bg-gradient-to-br from-[#09121f]/95 to-[#04080f]/95 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                    <div className="mt-2 text-sm font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <BrandFrame
                src={corporateLogo}
                alt="Spark Command Systems corporate mark"
                className="absolute -right-10 -top-16 hidden h-48 w-72 opacity-35 lg:block"
                imageClassName="scale-125"
              />
              <CommandConsole />
            </Motion.div>
          </div>
        </section>

        <section id="platform" className="relative py-24 sm:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-200/[0.035] to-transparent" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionIntro eyebrow="Flagship Platform" title="Command center software for live operational control.">
                Spark builds platforms that turn scattered operational work into a controlled environment: intake, dispatch, vendor coordination, site visibility, approvals, and executive reporting.
              </SectionIntro>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Coordinate work', 'Monitor signals', 'Close the loop'].map((item, index) => {
                  const Icon = [Boxes, RadioTower, CheckCircle2][index]

                  return (
                    <FadeIn key={item} delay={index * 0.08} className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.065] to-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)]">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <div className="mb-5 flex h-10 w-10 items-center justify-center border border-cyan-200/20 bg-cyan-200/[0.07] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {[
                          'Route activity through structured workflows instead of disconnected requests.',
                          'Surface live changes, exception states, and location-level context.',
                          'Move from response to completion with records leadership can trust.',
                        ][index]}
                      </p>
                    </FadeIn>
                  )
                })}
              </div>
            </div>

            <FadeIn className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.38)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden bg-[#060d16] p-6 sm:p-8">
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-200/10 blur-3xl" />
                <BrandFrame
                  src={productLogo}
                  alt="Spark command platform product mark"
                  className="mb-8 h-36 w-full max-w-md opacity-85"
                  imageClassName="scale-125 object-center"
                />
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-white">Built as a working operational layer, not a presentation dashboard.</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  The platform is meant to support real deployment value: fewer blind spots, clearer routing, cleaner partner coordination, and faster leadership visibility.
                </p>
              </div>
              <div className="grid bg-[#060d16] p-6 sm:grid-cols-2 sm:p-8">
                {[
                  ['Intake', 'Capture operational requests and events in a structured command flow.'],
                  ['Dispatch', 'Route work to internal teams, vendors, or site-level stakeholders.'],
                  ['Visibility', 'Track status, exceptions, and operational context in real time.'],
                  ['Closeout', 'Turn completion data into usable records and reporting.'],
                ].map(([title, text]) => (
                  <div key={title} className="relative border-b border-white/10 py-5 sm:border-r sm:pr-5 even:sm:border-r-0 even:sm:pl-5">
                    <div className="absolute left-0 top-6 h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_16px_rgba(253,230,138,0.8)] sm:-left-1" />
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">{title}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="integration" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <FadeIn>
              <SectionIntro eyebrow="Software + Integration" title="One command layer across the systems you already run.">
                Spark develops purpose-built software and connects the operational tools, records, people, and services that need to move together.
              </SectionIntro>
              <div className="mt-10 space-y-4">
                {integrationLines.map((line, index) => {
                  const Icon = line.icon
                  return (
                    <FadeIn key={line.title} delay={index * 0.08} className="group relative flex gap-5 overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-5">
                      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-200/45 to-transparent opacity-60" />
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-amber-200/20 bg-amber-200/[0.06] text-amber-100 shadow-[0_0_28px_rgba(245,158,11,0.08)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{line.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{line.text}</p>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>
            </FadeIn>

            <FadeIn className="relative">
              <div className="absolute -inset-8 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.14),transparent_42%)] blur-2xl" />
              <div className="relative overflow-hidden border border-white/10 bg-[#060d16] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />
                <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
                <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-amber-200/20 to-transparent" />
                <div className="relative grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
                  {['CRM', 'ERP', 'Field', 'Data', 'Vendors', 'Clients', 'AI', 'Reports', 'Portal'].map((item) => (
                    <div key={item} className="bg-gradient-to-br from-[#0a1422] to-[#050a12] px-3 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="relative mx-auto my-8 flex h-24 w-24 items-center justify-center border border-cyan-200/20 bg-cyan-200/[0.06] shadow-[0_0_44px_rgba(34,211,238,0.12)]">
                  <div className="absolute inset-3 border border-amber-200/20" />
                  <Layers3 className="h-10 w-10 text-cyan-100" />
                </div>
                <div className="relative border border-amber-200/20 bg-gradient-to-br from-amber-200/[0.08] to-cyan-200/[0.04] p-5 text-center">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-100">Unified Workflow Core</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    A practical backbone for operations, data, users, and automation.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="pipeline" className="relative overflow-hidden py-24 sm:py-28">
          <BrandFrame
            src={techLogo}
            alt="Spark future technology system"
            className="absolute left-1/2 top-12 h-56 w-[34rem] -translate-x-1/2 border-0 opacity-25"
            imageClassName="scale-110"
          />
          <div className="absolute inset-x-0 top-28 h-72 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.13),transparent_45%)]" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow="Future Products" title="A product pipeline built from the same operational backbone." align="center">
              Spark is a parent technology company, not a single app. The roadmap expands from command center platforms into AI-enabled tools, data systems, portals, and additional operational products.
            </SectionIntro>

            <div className="relative mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 shadow-[0_28px_110px_rgba(0,0,0,0.4)] md:grid-cols-2 lg:grid-cols-4">
              {pipelineItems.map(([title, text], index) => {
                const Icon = [BrainCircuit, Building2, DatabaseZap, Boxes][index]

                return (
                  <FadeIn key={title} delay={index * 0.06} className="relative bg-gradient-to-br from-[#08111d] to-[#04080e] p-6 sm:p-7">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" />
                    <div className="mb-8 flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/70">0{index + 1} / pipeline</div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        <section id="deployment" className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" />
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <FadeIn>
              <SectionIntro eyebrow="Enterprise Scale" title="Designed for rollout across real-world operating environments.">
                Spark systems are shaped for organizations with multiple sites, distributed teams, mixed technology stacks, and operational work that has to move reliably.
              </SectionIntro>
              <div className="mt-8 max-w-xl border-l border-cyan-200/30 pl-5 text-sm leading-7 text-slate-400">
                The goal is controlled adoption: clear access, durable workflows, useful reporting, and a command layer that can expand as products and operations mature.
              </div>
            </FadeIn>

            <FadeIn className="relative grid gap-px overflow-hidden border border-white/10 bg-white/10 shadow-[0_24px_100px_rgba(0,0,0,0.35)] sm:grid-cols-2">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/55 to-transparent" />
              {deploymentItems.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-gradient-to-br from-[#08111d] to-[#04080e] p-5">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-amber-100" />
                  <span className="text-base font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="relative px-5 pb-24 pt-10 sm:pb-28 lg:px-8">
          <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.12),transparent_48%)]" />
          <FadeIn className="mx-auto max-w-6xl overflow-hidden border border-amber-200/20 bg-[#060d16] shadow-[0_38px_150px_rgba(0,0,0,0.68),0_0_90px_rgba(245,158,11,0.08)]">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-80 bg-[#03070d] p-8 sm:p-10">
                <BrandFrame
                  src={techLogo}
                  alt="Spark technology core"
                  className="absolute inset-0 h-full w-full border-0 opacity-65"
                  imageClassName="scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#03070d] via-[#03070d]/70 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-amber-200/45 via-cyan-200/25 to-transparent" />
                <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100">Build the command layer</div>
                  <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                    Build the operating layer your next platform can stand on.
                  </h2>
                </div>
              </div>

              <div className="relative bg-[#060d16] p-8 sm:p-10">
                <div className="absolute right-8 top-8 hidden h-20 w-20 border border-white/10 bg-white/[0.025] lg:block" />
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  Spark Command Systems builds the software foundation, integration layer, and operational platform experience for teams preparing for connected, AI-ready execution.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/applications"
                    className="group inline-flex items-center justify-center gap-2 bg-amber-300 px-7 py-4 text-base font-bold text-black transition hover:bg-amber-200"
                  >
                    View Applications
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href="mailto:demo@sparkcommands.com?subject=Spark%20Command%20Systems%20Development%20Inquiry"
                    className="inline-flex items-center justify-center border border-cyan-200/20 bg-cyan-200/[0.06] px-7 py-4 text-base font-semibold text-cyan-50 transition hover:border-cyan-100/35 hover:bg-cyan-200/[0.11]"
                  >
                    Contact Development Team
                  </a>
                  <a
                    href="mailto:demo@sparkcommands.com?subject=Spark%20Command%20Systems%20Demo%20Request"
                    className="inline-flex items-center justify-center border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Book a Demo
                  </a>
                </div>
                <div className="mt-9 flex items-center gap-3 text-sm text-slate-400">
                  <LockKeyhole className="h-4 w-4 text-cyan-100" />
                  Built for controlled access, operational visibility, and future platform expansion.
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#020407]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <BrandFrame src={corporateLogo} alt="Spark Command Systems" className="h-12 w-12" imageClassName="scale-[2.15]" />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.34em] text-white">Spark</div>
              <div className="text-[0.68rem] uppercase tracking-[0.3em] text-slate-500">Command Systems</div>
            </div>
          </div>
          <div className="text-sm text-slate-500">(c) 2026 Spark Command Systems. Software, integration, and command platforms.</div>
        </div>
      </footer>
    </div>
  )
}

function statusTone(status) {
  if (status === 'Active') {
    return 'border-emerald-200/25 bg-emerald-200/[0.08] text-emerald-100'
  }

  if (status === 'In Development') {
    return 'border-cyan-200/25 bg-cyan-200/[0.08] text-cyan-100'
  }

  if (status === 'Pipeline') {
    return 'border-amber-200/25 bg-amber-200/[0.08] text-amber-100'
  }

  return 'border-white/15 bg-white/[0.045] text-slate-300'
}

function ApplicationsHeader() {
  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-cyan-200/20 bg-[#020407]/72 shadow-[0_18px_80px_rgba(0,0,0,0.46),0_0_34px_rgba(34,211,238,0.06)] backdrop-blur-2xl">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/55 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-200/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(245,158,11,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_24%)]" />

        <div className="relative flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5 lg:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
            <BrandFrame
              src={corporateLogo}
              alt="Spark Command Systems"
              className="h-10 w-10 shrink-0"
              imageClassName="scale-[2.15]"
            />
            <div className="min-w-0">
              <div className="text-sm font-semibold uppercase tracking-[0.34em] text-white">Spark</div>
              <div className="hidden text-[0.68rem] uppercase tracking-[0.3em] text-slate-400 sm:block">Command Systems</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 border border-white/10 bg-white/[0.035] p-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`/${item.href}`}
                className="px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="/#contact"
              className="hidden border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-100/35 hover:bg-cyan-200/[0.11] md:inline-flex"
            >
              Contact Development Team
            </a>
            <a
              href="/#contact"
              className="hidden border border-white/15 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] lg:inline-flex"
            >
              Book a Demo
            </a>
            <a
              href="/applications"
              className="group inline-flex items-center gap-2 bg-amber-300 px-4 py-2 text-sm font-bold text-black shadow-[0_0_32px_rgba(245,158,11,0.28)] transition hover:bg-amber-200 sm:px-5"
            >
              <span className="hidden sm:inline">Applications</span>
              <span className="sm:hidden">Apps</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function ApplicationsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020407] text-white antialiased">
      <SceneBackdrop />
      <ApplicationsHeader />

      <main className="relative px-5 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/[0.04]" />
        <div className="absolute inset-x-0 top-16 h-72 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.13),transparent_46%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-3 border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200 shadow-[0_0_14px_rgba(253,230,138,0.9)]" />
                Spark Software Portfolio
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                Applications built for operational command.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Enter the Spark software ecosystem: active command platforms, development-stage portals, AI tools, data systems, and future operational products.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <BrandFrame
                src={techLogo}
                alt="Spark technology catalog signal"
                className="absolute -right-8 -top-14 hidden h-44 w-80 border-0 opacity-30 lg:block"
                imageClassName="scale-125"
              />
              <div className="relative border border-white/10 bg-[#060d16]/90 p-5 shadow-[0_34px_130px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:p-6">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
                  {[
                    ['Portfolio', '08 products'],
                    ['Live systems', '01 active'],
                    ['Pipeline', '07 staged'],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-gradient-to-br from-[#09121f] to-[#04080f] p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>

          <section className="relative mt-12 overflow-hidden border border-white/10 bg-[#050b13]/92 shadow-[0_34px_140px_rgba(0,0,0,0.54)] backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
            <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 rounded-full bg-cyan-200/10 blur-3xl" />
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">Applications Directory</div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                  Command catalog
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Scroll the panel to inspect active products and future platform concepts.
              </p>
            </div>

            <div className="relative max-h-[32rem] overflow-y-auto overscroll-contain p-4 [scrollbar-color:rgba(245,158,11,0.55)_rgba(255,255,255,0.08)] [scrollbar-width:thin] sm:p-5">
              <div className="grid gap-4">
                {applications.map((app, index) => (
                  <div
                    key={app.name}
                    className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-cyan-200/25 hover:bg-white/[0.07] sm:p-6"
                  >
                    <div className="absolute inset-y-5 left-0 w-px bg-gradient-to-b from-transparent via-amber-200/40 to-transparent" />
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">0{index + 1}</span>
                          <span className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusTone(app.status)}`}>
                            {app.status}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/70">{app.type}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">{app.name}</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{app.description}</p>
                      </div>

                      {app.href ? (
                        <a
                          href={app.href}
                          className="inline-flex shrink-0 items-center justify-center gap-2 bg-amber-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-200"
                        >
                          {app.action}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex shrink-0 cursor-not-allowed items-center justify-center border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-slate-500"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default function SparkCommandSystemsSite() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  if (path === '/applications') {
    return <ApplicationsPage />
  }

  return <LandingPage />
}
