"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { WeeklyUpdates } from "@/components/weekly-updates"
import { Indicators } from "@/components/indicators"

type View = "home" | "indicators"

export default function Page() {
  const [view, setView] = useState<View>("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activeView={view} onNavigate={setView} />
      {view === "home" ? <WeeklyUpdates /> : <Indicators />}
    </main>
  )
}
