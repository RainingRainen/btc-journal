import { TrendingUp, TrendingDown } from "lucide-react"
import { GrowthChart } from "@/components/growth-chart"
import { portfolioLogs } from "@/lib/journal-data"

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export function Portfolio() {
  const logs = [...portfolioLogs].reverse()
  const latest = portfolioLogs[portfolioLogs.length - 1]
  const first = portfolioLogs[0]
  const totalGrowth =
    ((latest.portfolioValue - first.portfolioValue) / first.portfolioValue) * 100

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Portfolio
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Asset growth, logged weekly.
        </h1>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Portfolio Value" value={usd(latest.portfolioValue)} />
        <Stat label="BTC Price" value={usd(latest.btcPrice)} />
        <Stat
          label="Weekly Change"
          value={`${latest.change > 0 ? "+" : ""}${latest.change.toFixed(2)}%`}
          positive={latest.change >= 0}
        />
        <Stat
          label="Total Growth"
          value={`${totalGrowth > 0 ? "+" : ""}${totalGrowth.toFixed(2)}%`}
          positive={totalGrowth >= 0}
        />
      </div>

      <div className="mb-8 rounded-xl border border-border bg-card p-5 shadow-lg shadow-black/20 sm:p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Growth Curve
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            Week {first.week}–{latest.week}
          </span>
        </div>
        <GrowthChart />
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3.5 font-medium">Week</th>
                <th className="px-5 py-3.5 font-medium">Date</th>
                <th className="px-5 py-3.5 text-right font-medium">BTC Price</th>
                <th className="px-5 py-3.5 text-right font-medium">
                  Portfolio Value
                </th>
                <th className="px-5 py-3.5 text-right font-medium">
                  Weekly Change
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => {
                const positive = log.change >= 0
                return (
                  <tr
                    key={log.week}
                    className="border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/60"
                  >
                    <td className="px-5 py-4 font-mono font-medium text-primary">
                      W{log.week}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {log.date}
                    </td>
                    <td className="px-5 py-4 text-right font-mono">
                      {usd(log.btcPrice)}
                    </td>
                    <td className="px-5 py-4 text-right font-mono font-medium">
                      {usd(log.portfolioValue)}
                    </td>
                    <td className="px-5 py-4 text-right font-mono">
                      <span
                        className={`inline-flex items-center justify-end gap-1 rounded-md px-2 py-1 ${
                          log.change === 0
                            ? "text-muted-foreground"
                            : positive
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {log.change !== 0 &&
                          (positive ? (
                            <TrendingUp className="size-3.5" />
                          ) : (
                            <TrendingDown className="size-3.5" />
                          ))}
                        {log.change > 0 ? "+" : ""}
                        {log.change.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  positive,
}: {
  label: string
  value: string
  positive?: boolean
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-lg shadow-black/20">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-1.5 font-mono text-xl font-semibold tracking-tight ${
          positive === undefined
            ? "text-foreground"
            : positive
              ? "text-success"
              : "text-destructive"
        }`}
      >
        {value}
      </p>
    </div>
  )
}
