import { portfolioLogs } from "@/lib/journal-data"

const WIDTH = 800
const HEIGHT = 260
const PAD_X = 8
const PAD_Y = 24

export function GrowthChart() {
  const values = portfolioLogs.map((l) => l.portfolioValue)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const points = portfolioLogs.map((log, i) => {
    const x =
      PAD_X + (i / (portfolioLogs.length - 1)) * (WIDTH - PAD_X * 2)
    const y =
      PAD_Y +
      (1 - (log.portfolioValue - min) / range) * (HEIGHT - PAD_Y * 2)
    return { x, y, log }
  })

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ")

  const areaPath =
    `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${HEIGHT - PAD_Y} ` +
    `L ${points[0].x.toFixed(2)} ${HEIGHT - PAD_Y} Z`

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-64 w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="Portfolio value growth curve, week over week"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7931a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0, 0.25, 0.5, 0.75, 1].map((t) => (
        <line
          key={t}
          x1={PAD_X}
          x2={WIDTH - PAD_X}
          y1={PAD_Y + t * (HEIGHT - PAD_Y * 2)}
          y2={PAD_Y + t * (HEIGHT - PAD_Y * 2)}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      <path d={areaPath} fill="url(#areaFill)" />
      <path
        d={linePath}
        fill="none"
        stroke="#f7931a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {points.map((p) => (
        <circle
          key={p.log.week}
          cx={p.x}
          cy={p.y}
          r="3.5"
          fill="#0b0e11"
          stroke="#f7931a"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}
