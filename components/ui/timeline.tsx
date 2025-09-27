// Timeline components implementation

import { Citation } from "@/components/content/citation"

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="relative border-l border-muted space-y-8">{children}</div>
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  sources: string[]
}

export function TimelineItem({ year, title, description, sources }: TimelineItemProps) {
  return (
    <div className="ml-4 relative">
      <div className="absolute -left-5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
      <h3 className="text-xl font-semibold">{year}: {title}</h3>
      <p className="text-muted-foreground mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, i) => (
          <Citation key={i} source={source} />
        ))}
      </div>
    </div>
  )
}
