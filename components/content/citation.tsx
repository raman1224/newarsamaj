interface CitationProps {
  source: string
}

export function Citation({ source }: CitationProps) {
  return (
    <span className="inline-block bg-muted rounded-full px-3 py-1 text-sm font-medium">
      {source}
    </span>
  )
}