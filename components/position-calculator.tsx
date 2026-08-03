"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MacroBoard } from "@/components/macro-board"

export function PositionCalculator() {
  const [values, setValues] = useState({
    balance: "",
    risk: "1",
    entry: "",
    sl: "",
    tp: ""
  })

  const [results, setResults] = useState<{
    isLong: boolean;
    slDist: number;
    tpDist: number;
    maxLoss: number;
    qty: number;
    rr: number;
  } | null>(null)

  const handleCalculate = () => {
    const bal = parseFloat(values.balance)
    const rPct = parseFloat(values.risk)
    const entryPrice = parseFloat(values.entry)
    const slPrice = parseFloat(values.sl)
    const tpPrice = parseFloat(values.tp)

    if (!bal || !rPct || !entryPrice || !slPrice) return

    const isLong = entryPrice > slPrice
    const slDist = Math.abs(entryPrice - slPrice)
    const tpDist = tpPrice ? Math.abs(tpPrice - entryPrice) : 0
    
    const maxLoss = bal * (rPct / 100)
    const qty = maxLoss / slDist
    const rr = tpDist ? tpDist / slDist : 0

    setResults({
      isLong,
      slDist,
      tpDist,
      maxLoss,
      qty,
      rr
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-6">
      <MacroBoard />

      <div className="flex justify-center items-center py-12 px-4 bg-transparent">
        <div className="w-full max-w-[500px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-[20px] p-10 shadow-[0_0_60px_rgba(0,0,0,1)] text-white">
          <h2 className="mb-9 text-[1.4rem] text-center tracking-[4px] uppercase text-[#ff9500] [text-shadow:0_0_15px_rgba(255,149,0,0.4)] font-semibold">
            Position Calc
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Balance (USDT)</Label>
              <Input
                type="number"
                placeholder="20000"
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
                value={values.balance}
                onChange={(e) => setValues({ ...values, balance: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Risk (%)</Label>
              <Input
                type="number"
                placeholder="1"
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
                value={values.risk}
                onChange={(e) => setValues({ ...values, risk: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-2">
                <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Entry</Label>
                <Input
                  type="number"
                  placeholder="68000"
                  className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
                  value={values.entry}
                  onChange={(e) => setValues({ ...values, entry: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Stop Loss</Label>
                <Input
                  type="number"
                  placeholder="67000"
                  className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
                  value={values.sl}
                  onChange={(e) => setValues({ ...values, sl: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Target</Label>
                <Input
                  type="number"
                  placeholder="72000"
                  className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
                  value={values.tp}
                  onChange={(e) => setValues({ ...values, tp: e.target.value })}
                />
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="mt-4 bg-[#ff9500] hover:bg-[#e08300] text-black font-bold h-12 rounded-xl uppercase tracking-[2px] transition-all duration-300 shadow-[0_0_20px_rgba(255,149,0,0.3)] hover:shadow-[0_0_30px_rgba(255,149,0,0.5)]"
            >
              Execute Calculation
            </Button>

            {results && (
              <div className="mt-6 p-4 rounded-xl bg-black/50 border border-[#222] space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#888]">Direction</span>
                  <span className={`font-bold font-mono ${results.isLong ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {results.isLong ? 'LONG ▲' : 'SHORT ▼'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#888]">Max Risk</span>
                  <span className="font-bold font-mono text-white">${results.maxLoss.toFixed(2)} USDT</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#888]">Position Size</span>
                  <span className="font-bold font-mono text-[#ff9500]">{results.qty.toFixed(4)} BTC</span>
                </div>
                {results.rr > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#888]">Risk / Reward</span>
                    <span className="font-bold font-mono text-emerald-400">1 : {results.rr.toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
