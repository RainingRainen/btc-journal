"use client"

import { useEffect, useState } from "react"

interface MarketItem {
  symbol: string
  name: string
  price: string
  change: number
  loading: boolean
}

export function MacroBoard() {
  const [data, setData] = useState<MarketItem[]>([
    { symbol: "BTCUSDT", name: "Bitcoin", price: "--", change: 0, loading: true },
    { symbol: "QQQ", name: "Nasdaq 100 (QQQ)", price: "--", change: 0, loading: true },
    { symbol: "SPY", name: "S&P 500 (SPY)", price: "--", change: 0, loading: true },
    { symbol: "^TWII", name: "Taiwan Index", price: "--", change: 0, loading: true },
  ])

  useEffect(() => {
    async function fetchMarketData() {
      // 1. 抓取 Binance 的 BTC 即時價格與 24h 漲跌
      try {
        const btcRes = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
        const btcData = await btcRes.json()
        
        setData((prev) =>
          prev.map((item) => {
            if (item.symbol === "BTCUSDT") {
              return {
                ...item,
                price: `$${Number(btcData.lastPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                change: parseFloat(btcData.priceChangePercent),
                loading: false,
              }
            }
            return item
          })
        )
      } catch (e) {
        console.error("Failed to fetch BTC data", e)
      }

      // 2. 抓取 Yahoo Finance 的 SPY, QQQ, ^TWII 數據 (經由 query1 免費 endpoint)
      const yahooSymbols = ["QQQ", "SPY", "%5ETWII"]
      yahooSymbols.forEach(async (sym) => {
        try {
          const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d`)
          const json = await res.json()
          const result = json.chart.result[0]
          const meta = result.meta
          const currentPrice = meta.regularMarketPrice
          const prevClose = meta.chartPreviousClose || meta.previousClose
          const changePercent = ((currentPrice - prevClose) / prevClose) * 100

          const key = sym === "%5ETWII" ? "^TWII" : sym

          setData((prev) =>
            prev.map((item) => {
              if (item.symbol === key) {
                return {
                  ...item,
                  price: sym === "%5ETWII" 
                    ? `${Number(currentPrice).toLocaleString(undefined, { maximumFractionDigits: 0 })}` 
                    : `$${Number(currentPrice).toFixed(2)}`,
                  change: changePercent,
                  loading: false,
                }
              }
              return item
            })
          )
        } catch (e) {
          console.error(`Failed to fetch ${sym}`, e)
        }
      })
    }

    fetchMarketData()
    // 每 30 秒自動更新一次
    const interval = setInterval(fetchMarketData, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold tracking-wider text-primary uppercase">
          Real-Time Macro & Market Overview
        </h3>
        <span className="text-[10px] text-muted-foreground animate-pulse">
          ● Live Updates (30s)
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {data.map((item) => {
          const isPositive = item.change >= 0
          return (
            <div
              key={item.symbol}
              className="rounded-xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm shadow-sm transition-all hover:border-primary/50"
            >
              <div className="text-xs font-medium text-muted-foreground mb-1">
                {item.name}
              </div>
              <div className="text-lg font-bold font-mono text-foreground mb-1">
                {item.loading ? (
                  <span className="text-sm text-muted-foreground/50">Loading...</span>
                ) : (
                  item.price
                )}
              </div>
              {!item.loading && (
                <div
                  className={`text-xs font-semibold font-mono flex items-center gap-1 ${
                    isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  <span>{isPositive ? "▲" : "▼"}</span>
                  <span>
                    {isPositive ? "+" : ""}
                    {item.change.toFixed(2)}%
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
