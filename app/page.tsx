"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { WeeklyUpdates } from "@/components/weekly-updates"
import { Portfolio } from "@/components/portfolio"

type View = "home" | "portfolio"

export default function Page() {
  const [view, setView] = useState<View>("home")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activeView={view} onNavigate={setView} />
      {view === "home" ? <WeeklyUpdates /> : <Portfolio />}
    </main>
  )
}
