import { Activity, BarChart3, CheckCircle2, RadioTower } from 'lucide-react'
import CommandVideoStage from './CommandVideoStage'

function metricParts(metric) {
  const parts = metric.split(' ')
  return {
    value: parts.slice(0, 2).join(' '),
    label: parts.slice(2).join(' ') || 'Active',
  }
}

function MetricCards({ metrics }) {
  return (
    <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((metric, index) => {
        const { value, label } = metricParts(metric)

        return (
          <div
            key={metric}
            className="command-lab-metric-card min-w-0 overflow-hidden border border-white/10 bg-black/24 p-4"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="whitespace-normal break-words text-xl font-semibold leading-tight text-white">{value}</div>
            <div className="mt-2 overflow-hidden whitespace-normal break-words text-xs uppercase tracking-[0.16em] text-slate-500">
              {label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ActivityFeed({ feed }) {
  return (
    <div className="mt-6 min-w-0 overflow-hidden border border-white/10 bg-black/24 p-5">
      <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
        <Activity className="h-4 w-4 shrink-0" />
        Activity Feed
      </div>
      <div className="space-y-4">
        {feed.map((event, index) => (
          <div key={event} className="command-lab-feed-row flex min-w-0 items-start gap-3 text-sm text-slate-300" style={{ animationDelay: `${index * 70}ms` }}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200 shadow-[0_0_14px_rgba(245,158,11,0.8)]" />
            <span className="min-w-0 overflow-hidden whitespace-normal break-words leading-6">
              <span className="mr-2 text-slate-500">0{index + 1}</span>
              {event}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CommandReactionPanel({ response, signal }) {
  const hasVideo = Boolean(response.video)

  return (
    <aside className="relative overflow-hidden border border-white/10 bg-[#060d16]/86 p-6 shadow-[0_34px_130px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_14%,rgba(245,158,11,0.1),transparent_24%),radial-gradient(circle_at_12%_90%,rgba(34,211,238,0.07),transparent_28%)]" />

      <div key={signal} className="command-lab-react relative">
        {hasVideo ? (
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_1.16fr] lg:items-start">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 border border-amber-200/25 bg-amber-200/[0.08] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
                <RadioTower className="h-3.5 w-3.5" />
                {response.status || 'Module Online'}
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{response.headline}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{response.copy}</p>

              <MetricCards metrics={response.metrics} />
              <ActivityFeed feed={response.feed} />
            </div>

            <div className="order-1 lg:order-2">
              <CommandVideoStage src={response.video} label={response.videoLabel} tone={response.tone} />
              <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3">
                {response.labels.map((label) => (
                  <div key={label} className="min-w-0 overflow-hidden whitespace-normal break-words border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-2 border border-amber-200/25 bg-amber-200/[0.08] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
              <RadioTower className="h-3.5 w-3.5" />
              {response.status || 'Module Online'}
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{response.headline}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{response.copy}</p>

            <MetricCards metrics={response.metrics} />

            <div className="mt-6 grid min-w-0 gap-5 xl:grid-cols-[0.9fr_1.1fr]">
              <ActivityFeed feed={response.feed} />

              <div className="relative overflow-hidden border border-white/10 bg-[#07101b]/88 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/75">Command Preview</div>
                  <BarChart3 className="h-4 w-4 text-cyan-100/75" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[64, 82, 46, 74, 91, 58].map((height, index) => (
                    <div key={height + index} className="flex h-24 items-end border border-white/8 bg-black/24 p-1.5">
                      <div
                        className="w-full bg-gradient-to-t from-amber-300/85 to-cyan-200/70 shadow-[0_0_22px_rgba(245,158,11,0.18)]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-2">
                  {['Network mapped', 'Status normalized', 'Executive view ready'].map((item) => (
                    <div key={item} className="flex items-center justify-between border border-white/8 bg-white/[0.035] px-3 py-2 text-xs text-slate-300">
                      {item}
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
