"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { WeeklyUpdates } from "@/components/weekly-updates"
import { Indicators } from "@/components/indicators"
import { PositionCalculator } from "@/components/position-calculator" // 確保有這一行

type View = "home" | "Indicators" | "tools" | "guide"

export default function Page() {
  const [view, setView] = useState<View>("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activeView={view} onNavigate={setView} />
      
      <div className="container mx-auto">
        {/* 這裡最重要：確保判斷式跟 Navbar 傳過來的一模一樣 */}
        {view === "home" && <WeeklyUpdates />}
        {view === "Indicators" && <Indicators />}
        {view === "tools" && <PositionCalculator />} {/* 這裡有寫嗎？ */}
        {view === "guide" && <div className="py-20 text-center">Guide Coming Soon</div>}
      </div>
    </main>
  )
}
