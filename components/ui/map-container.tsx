// Map container component implementation

interface Marker {
  position: [number, number]
  title: string
  description: string
}

interface MapContainerProps {
  center: [number, number]
  zoom: number
  markers: Marker[]
}

export function MapContainer({ center, zoom, markers }: MapContainerProps) {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center text-muted-foreground">
        <p>[Map Placeholder]</p>
        <p>
          Center: {center[0]}, {center[1]} | Zoom: {zoom}
        </p>
        <ul className="mt-2 space-y-1">
          {markers.map((m, i) => (
            <li key={i}>
              📍 {m.title} – {m.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
