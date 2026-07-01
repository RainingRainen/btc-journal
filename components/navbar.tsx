"use client"

import { Button } from "@/components/ui/button"

type View = "home" | "portfolio"

const links: { label: string; view: View }[] = [
  { label: "Home", view: "home" },
  { label: "Archive", view: "home" },
  { label: "Insights", view: "home" },
  { label: "Portfolio", view: "portfolio" },
]

export function Navbar({
  activeView,
  onNavigate,
}: {
  activeView: View
  onNavigate: (view: View) => void
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
            ₿
          </span>
          <span>
            BTC<span className="text-primary"> Journal</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => {
            const isActive =
              link.view === activeView &&
              (link.view === "portfolio" || link.label === "Home")
            return (
              <button
                key={`${link.label}-${i}`}
                onClick={() => onNavigate(link.view)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        <Button className="font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:brightness-110">
          Subscribe
        </Button>
      </nav>
    </header>
  )
}
