"use client"

import { useEffect, useRef } from "react"

interface TickerProps {
  symbol: string
  title: string
}

function MiniTicker({ symbol, title }: TickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      colorTheme: "dark",
      isTransparent: true,
      locale: "en",
    })

    containerRef.current.appendChild(script)
  }, [symbol])

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </div>
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  )
}

export function MacroTickerBoard() {
  const tickers = [
    { title: "Bitcoin", symbol: "BINANCE:BTCUSDT" },
    { title: "Nasdaq 100", symbol: "NASDAQ:NDX" },
    { title: "S&P 500 ETF", symbol: "AMEX:SPY" },
    { title: "Taiwan Index", symbol: "TAIEX:TAIEX" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
        Real-Time Market Overview
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tickers.map((t) => (
          <MiniTicker key={t.symbol} symbol={t.symbol} title={t.title} />
        ))}
      </div>
    </div>
  )
}
