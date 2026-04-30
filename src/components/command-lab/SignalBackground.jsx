import { useState } from 'react'

const nodes = [
  ['12%', '22%', '0s'],
  ['24%', '68%', '1.4s'],
  ['41%', '34%', '0.7s'],
  ['58%', '76%', '2.1s'],
  ['73%', '28%', '1.1s'],
  ['86%', '58%', '2.8s'],
]

export default function SignalBackground() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 })

  return (
    <div
      className="command-lab-signal-bg"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setCursor({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        })
      }}
      style={{
        '--cursor-x': `${cursor.x}%`,
        '--cursor-y': `${cursor.y}%`,
      }}
      aria-hidden="true"
    >
      <div className="command-lab-signal-grid" />
      <svg className="command-lab-signal-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M12 22 L41 34 L73 28 L86 58 L58 76 L24 68 L12 22" />
        <path d="M24 68 L41 34 L58 76" />
      </svg>
      {nodes.map(([left, top, delay], index) => (
        <span
          key={`${left}-${top}`}
          className="command-lab-signal-node"
          style={{ left, top, animationDelay: delay }}
        >
          <span>{index + 1}</span>
        </span>
      ))}
    </div>
  )
}
