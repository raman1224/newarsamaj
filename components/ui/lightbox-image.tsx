// Lightbox image component implementation

import * as React from "react"

interface LightboxImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function LightboxImage({ src, alt, caption, className }: LightboxImageProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="text-center">
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className={`cursor-pointer transition hover:opacity-90 ${className}`}
      />
      {caption && <p className="mt-2 text-sm text-muted-foreground">{caption}</p>}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img src={src} alt={alt} className="max-h-[90%] max-w-[90%] rounded shadow-lg" />
        </div>
      )}
    </div>
  )
}
