"use client"

import { Button } from "@/components/ui/button"

// 1. 更新型別定義，加入 tools 與 guide
type View = "home" | "Indicators" | "tools" | "guide"

const links: { label: string; view: View }[] = [
  { label: "Home", view: "home" },
  { label: "Archive", view: "home" },
  { label: "Insights", view: "home" },
  // 2. 修改原本的 Portfolio 並新增 Tools
  { label: "Trading Indicators Guide", view: "guide" },
  { label: "Tools", view: "tools" },
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
            // 3. 修改高亮邏輯：如果目前所在的 view 等於連結的 view，就顯示高亮
            // 特別處理 Home 標籤，使其在 home 視圖下保持高亮
            const isActive = link.view === activeView
            
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
