"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { weeklyUpdates } from "@/lib/journal-data"

export function WeeklyUpdates() {
  const [selectedWeek, setSelectedWeek] = useState<any>(null)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Weekly Log</p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl text-amber-500">
          Tracking Bitcoin, one week at a time.
        </h1>
      </div>

      {/* 列表卡片 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {weeklyUpdates.map((update) => (
          <article key={update.week} className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800">
              <img src={update.chart} alt={update.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute top-3 left-3 rounded-full bg-zinc-900/90 px-2.5 py-1 text-xs font-medium text-zinc-200">
                Week {update.week}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-500 transition-colors">{update.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-400 flex-1">{update.brief || "點擊閱讀完整分析內容..."}</p>
              <button 
                onClick={() => setSelectedWeek(update)}
                className="mt-4 w-full rounded-lg bg-zinc-900 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
                Read Analysis →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 🚀 點擊彈出的 Taiwan News 風格大視窗 */}
      {selectedWeek && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl text-zinc-100">
            {/* 關閉按鈕 */}
            <button onClick={() => setSelectedWeek(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100">
              <X className="h-6 w-6" />
            </button>

            {/* 內頁大標題 */}
            <div className="mb-6">
              <span className="text-amber-500 font-medium text-sm">Week {selectedWeek.week} Log</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-zinc-100">{selectedWeek.title}</h2>
            </div>

            {/* 大封面圖 */}
            <div className="mb-6 overflow-hidden rounded-lg border border-zinc-800">
              <img src={selectedWeek.chart} alt="Cover" className="w-full h-auto object-cover" />
            </div>

            {/* 📰 新聞流：圖文交錯渲染區域 */}
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              {selectedWeek.content && selectedWeek.content.map((block: any, idx: number) => {
                if (block.type === "text") {
                  return <p key={idx} className="text-base whitespace-pre-line">{block.value}</p>
                }
                if (block.type === "image") {
                  return (
                    <div key={idx} className="my-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 p-1">
                      <img src={block.value} alt="Inline Analysis" className="w-full h-auto object-cover" />
                    </div>
                  )
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
