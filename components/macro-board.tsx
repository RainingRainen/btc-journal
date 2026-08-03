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
    { symbol: "ETHUSDT", name: "Ethereum", price: "--", change: 0, loading: true },
  ])

  useEffect(() => {
    async function fetchMarketData() {
      // 1. 抓取加密貨幣 (BTC & ETH) - 24/7 即時流動
      const fetchCrypto = async (symbol: string) => {
        try {
          const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
          if (!res.ok) return
          const btcData = await res.json()
          
          if (btcData && btcData.lastPrice) {
            setData((prev) =>
              prev.map((item) => {
                if (item.symbol === symbol) {
                  return {
                    ...item,
                    price: `$${Number(btcData.lastPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                    change: parseFloat(btcData.priceChangePercent || "0"),
                    loading: false,
                  }
                }
                return item
              })
            )
          }
        } catch (e) {
          console.error(`Failed to fetch ${symbol}`, e)
        }
      }

      // 2. 抓取美股 ETF (QQQ & SPY) - 使用開放 CORS 且休市依然保留最後收盤價的 API
      const fetchStockClosePrice = async (symbol: string) => {
        try {
          // 使用 Financial Modeling Prep 的免費開放端點
          const res = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=demo`)
          
          if (res.ok) {
            const dataArr = await res.json()
            if (dataArr && dataArr[0]) {
              const currentPrice = dataArr[0].price
              // 免費 Demo Endpoint 預設呈現最新價格 / 收盤價
              setData((prev) =>
                prev.map((item) => {
                  if (item.symbol === symbol) {
                    return {
                      ...item,
                      price: `$${Number(currentPrice).toFixed(2)}`,
                      // 保持原預設或動態更新
                      loading: false,
                    }
                  }
                  return item
                })
              )
              return
            }
          }
          throw new Error("FMP Demo rate limited")
        } catch {
          // 備用第二來源：Stooq / Yahoo Open Endpoint 抓最後收盤價
          try {
            const res = await fetch(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?modules=price`)
            const json = await res.json()
            const priceObj = json?.quoteSummary?.result?.[0]?.price
            
            const closePrice = priceObj?.regularMarketPrice?.raw || priceObj?.postMarketPrice?.raw
            const changePct = priceObj?.regularMarketChangePercent?.raw ? priceObj.regularMarketChangePercent.raw * 100 : 0

            if (closePrice) {
              setData((prev) =>
                prev.map((item) => {
                  if (item.symbol === symbol) {
                    return {
                      ...item,
                      price: `$${Number(closePrice).toFixed(2)}`,
                      change: changePct,
                      loading: false,
                    }
                  }
                  return item
                })
              )
            }
          } catch (e) {
            console.error(`Fallback error for ${symbol}`, e)
          }
        }
      }

      await fetchCrypto("BTCUSDT")
      await fetchCrypto("ETHUSDT")
      fetchStockClosePrice("QQQ")
      fetchStockClosePrice("SPY")
    }

    fetchMarketData()
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
                  <span className="text-sm text-muted-foreground/50 animate-pulse">Loading...</span>
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
