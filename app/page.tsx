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
        {/* 確保導覽列切換與頁面元件一致 */}
        {view === "home" && <WeeklyUpdates />}
        {(view === "guide" || view === "Indicators") && <Indicators />}
        {view === "tools" && <PositionCalculator />}
      </div>
    </main>
  )
}
