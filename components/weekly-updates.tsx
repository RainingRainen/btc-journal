import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { weeklyUpdates } from "@/lib/journal-data"

export function WeeklyUpdates() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Weekly Log
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Tracking Bitcoin, one week at a time.
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          A running journal of market structure, trade ideas, and the thinking
          behind every move. No hype — just charts and conviction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {weeklyUpdates.map((update) => (
          <article
            key={update.week}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
              <Image
                src={update.chart || "/placeholder.svg"}
                alt={`Trading chart for week ${update.week}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                Week {update.week}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-lg font-semibold tracking-tight">
                {update.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {update.description}
              </p>
              <Button
                variant="outline"
                className="mt-5 w-full border-border bg-secondary text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read Analysis
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
