export type WeeklyUpdate = {
  week: number
  title: string
  description: string
  chart: string
}

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: 26,
    title: "Reclaiming the Range High",
    description:
      "BTC pushed back above the mid-range pivot with rising spot volume. I'm watching the weekly close for confirmation before adding to my core position.",
    chart: "/charts/chart-1.png",
  },
  {
    week: 25,
    title: "Chop Before the Break",
    description:
      "A tight consolidation week. Volatility compressed into a coil — historically a precursor to an expansion move. Staying patient and letting price show its hand.",
    chart: "/charts/chart-2.png",
  },
  {
    week: 24,
    title: "Flushing the Late Longs",
    description:
      "Sharp wick down cleared out over-leveraged positions before a strong recovery. Funding reset to neutral, which I read as constructive for the weeks ahead.",
    chart: "/charts/chart-3.png",
  },
]

export type PortfolioLog = {
  week: number
  date: string
  btcPrice: number
  portfolioValue: number
  change: number
}

export const portfolioLogs: PortfolioLog[] = [
  { week: 20, date: "May 19", btcPrice: 62400, portfolioValue: 48200, change: 0 },
  { week: 21, date: "May 26", btcPrice: 67800, portfolioValue: 52600, change: 9.13 },
  { week: 22, date: "Jun 02", btcPrice: 71200, portfolioValue: 56900, change: 8.17 },
  { week: 23, date: "Jun 09", btcPrice: 69100, portfolioValue: 55300, change: -2.81 },
  { week: 24, date: "Jun 16", btcPrice: 66500, portfolioValue: 53100, change: -3.98 },
  { week: 25, date: "Jun 23", btcPrice: 68900, portfolioValue: 55800, change: 5.08 },
  { week: 26, date: "Jun 30", btcPrice: 73400, portfolioValue: 61500, change: 10.22 },
]
