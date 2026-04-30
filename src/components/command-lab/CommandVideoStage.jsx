const toneClasses = {
  gold: {
    box: 'border-amber-200/18 shadow-[0_0_58px_rgba(245,158,11,0.16),inset_0_1px_0_rgba(255,255,255,0.06)]',
    label: 'border-amber-200/25 text-amber-100',
    dot: 'bg-amber-200 shadow-[0_0_18px_rgba(245,158,11,0.85)]',
    wash: 'bg-[radial-gradient(circle_at_72%_22%,rgba(245,158,11,0.18),transparent_30%),linear-gradient(90deg,rgba(2,4,7,0.28),transparent_48%,rgba(2,4,7,0.38))]',
  },
  risk: {
    box: 'border-red-200/18 shadow-[0_0_58px_rgba(248,113,113,0.13),inset_0_1px_0_rgba(255,255,255,0.06)]',
    label: 'border-red-200/25 text-red-100',
    dot: 'bg-red-200 shadow-[0_0_18px_rgba(248,113,113,0.78)]',
    wash: 'bg-[radial-gradient(circle_at_72%_22%,rgba(248,113,113,0.16),transparent_30%),linear-gradient(90deg,rgba(2,4,7,0.3),transparent_48%,rgba(2,4,7,0.42))]',
  },
}

export default function CommandVideoStage({ src, label, tone = 'gold' }) {
  const classes = toneClasses[tone] || toneClasses.gold

  return (
    <div className={`command-lab-video-stage relative h-56 overflow-hidden rounded-xl border bg-[#0b0f14] sm:h-64 lg:h-80 ${classes.box}`}>
      <video
        className="h-full w-full object-cover blur-[0.6px] saturate-[0.95]"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      <div className={`absolute inset-0 ${classes.wash}`} />
      <div className={`absolute left-4 top-4 inline-flex items-center gap-2 border bg-black/38 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] backdrop-blur ${classes.label}`}>
        <span className={`h-2 w-2 rounded-full ${classes.dot} animate-pulse`} />
        {label}
      </div>
    </div>
  )
}
