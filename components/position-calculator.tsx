"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

  const calculate = () => {
    const balance = parseFloat(values.balance)
    const risk = parseFloat(values.risk) / 100
    const entry = parseFloat(values.entry)
    const sl = parseFloat(values.sl)
    const tp = parseFloat(values.tp)

    if (!balance || !entry || !sl || !tp) return

    const isLong = entry > sl
    const slDist = Math.abs(entry - sl) / entry
    const tpDist = Math.abs(tp - entry) / entry
    const maxLoss = balance * (risk || 0.01)
    const qty = maxLoss / Math.abs(entry - sl)
    const rr = tpDist / slDist

    setResults({ isLong, slDist, tpDist, maxLoss, qty, rr })
  }

  return (
    <div className="flex justify-center items-center py-12 px-4 bg-transparent">
      {/* 這裡還原了你原本的 card 樣式 */}
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
              onChange={(e) => setValues({...values, balance: e.target.value})} 
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold">Risk (%)</Label>
            <Input 
              type="number" 
              placeholder="1" 
              className="bg-black border-[#1a1a1a] focus:border-[#ff9500] focus:ring-0 text-white h-12"
              value={values.risk} 
              onChange={(e) => setValues({...values, risk: e.target.value})} 
            />
          </div>

          {/* 關鍵的三列佈局 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold text-left">Entry</Label>
              <Input 
                type="number" 
                placeholder="68000" 
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500] text-white"
                value={values.entry} 
                onChange={(e) => setValues({...values, entry: e.target.value})} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold text-left">Stop Loss</Label>
              <Input 
                type="number" 
                placeholder="67000" 
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500] text-white"
                value={values.sl} 
                onChange={(e) => setValues({...values, sl: e.target.value})} 
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-[10px] text-[#666] uppercase tracking-[1.5px] font-semibold text-left">Target</Label>
              <Input 
                type="number" 
                placeholder="72000" 
                className="bg-black border-[#1a1a1a] focus:border-[#ff9500] text-white"
                value={values.tp} 
                onChange={(e) => setValues({...values, tp: e.target.value})} 
              />
            </div>
          </div>

          <button 
            onClick={calculate} 
            className="mt-2 bg-[#ff9500] hover:brightness-110 active:scale-95 transition-all duration-200 rounded-[12px] p-4 text-black font-extrabold uppercase tracking-[2px] shadow-[0_5px_20px_rgba(255,149,0,0.2)]"
          >
            Execute Calculation
          </button>
        </div>

        {/* 結果顯示區 */}
        {results && (
          <div className="mt-10 pt-8 border-t border-[#1a1a1a] animate-in fade-in duration-500">
            <div 
              className={`text-center text-[11px] font-black tracking-[3px] p-2 mb-8 rounded ${
                results.isLong ? 'text-[#22c55e] bg-[#22c55e]/10' : 'text-[#ef4444] bg-[#ef4444]/10'
              }`}
            >
              {results.isLong ? "▲ LONG POSITION" : "▼ SHORT POSITION"}
            </div>
            
            <p className="text-[10px] text-[#666] uppercase tracking-[1px] mb-1 text-left">Suggested Quantity</p>
            <div className="text-[2.8rem] font-bold text-[#ff9500] [text-shadow:0_0_20px_rgba(255,149,0,0.4)] font-mono leading-none mb-8 text-left">
              {results.qty.toLocaleString(undefined, {maximumFractionDigits: 4})}
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-6 text-left">
              <div className="flex flex-col">
                <span className="text-[9px] text-[#666] uppercase mb-1">R/R Ratio</span>
                <span className="text-[1.1rem] font-semibold text-white">{results.rr.toFixed(2)} : 1</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#666] uppercase mb-1">Max Loss</span>
                <span className="text-[1.1rem] font-semibold text-[#ff4d4d]">{results.maxLoss.toFixed(2)} USDT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#666] uppercase mb-1">SL Distance</span>
                <span className="text-[1.1rem] font-semibold text-white">{(results.slDist * 100).toFixed(2)}%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#666] uppercase mb-1">TP Distance</span>
                <span className="text-[1.1rem] font-semibold text-white">{(results.tpDist * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
