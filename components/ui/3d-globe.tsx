// components/ui/3d-globe.tsx
"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"

interface GlobeProps {
  data: Array<{
    lat: number
    lng: number
    size: number
    name: string
  }>
  globeColor?: string
  markerColor?: string
}

export function Globe({ data, globeColor = "rgba(245, 158, 11, 0.2)", markerColor = "rgba(245, 158, 11, 0.8)" }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Calculate marker positions
  const markers = data.map(point => {
    const phi = (90 - point.lat) * (Math.PI / 180)
    const theta = (point.lng + 180) * (Math.PI / 180)

    const x = Math.sin(phi) * Math.cos(theta)
    const y = Math.cos(phi)
    const z = Math.sin(phi) * Math.sin(theta)

    return {
      x: x * 45 + 50, // Convert to percentage (50% is center)
      y: y * 45 + 50,
      z,
      size: point.size,
      name: point.name
    }
  })

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* Globe sphere */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-spin-slow"
        style={{
          width: Math.min(dimensions.width, dimensions.height) * 0.8 + 'px',
          height: Math.min(dimensions.width, dimensions.height) * 0.8 + 'px',
          background: `radial-gradient(circle at 30% 30%, ${globeColor}, transparent)`,
          boxShadow: `0 0 40px ${globeColor}, inset 0 0 40px ${globeColor}`
        }}
      ></div>
      
      {/* Markers */}
      {markers.map((marker, index) => (
        <div
          key={index}
          className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 group"
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`,
            width: `${marker.size * 5}px`,
            height: `${marker.size * 5}px`,
            background: markerColor,
            boxShadow: `0 0 10px ${markerColor}, 0 0 20px ${markerColor}`,
            zIndex: 10
          }}
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-amber-700 bg-white/80 px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {marker.name}
          </div>
        </div>
      ))}
    </div>
  )
}