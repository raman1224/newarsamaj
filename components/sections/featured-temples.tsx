// components/sections/featured-temples.tsx
"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Image from "next/image"

// Memoized temple card for better performance
const TempleCard = React.memo<{ temple: any }>(({ temple }) => (
  <Link href={temple.link} className="group block">
    <Card className="relative overflow-hidden border-0 bg-transparent shadow-none group-hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
        <Image
          src={temple.image}
          alt={temple.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {temple.name}
          </h3>
          <p className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <MapPin className="w-4 h-4" />
            {temple.location}
          </p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300 delay-300">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
          </div>
        </div>
      </div>
    </Card>
  </Link>
))

TempleCard.displayName = 'TempleCard'

export const FeaturedTemples = React.memo(() => {
  const { t } = useTranslation()
  
  const featuredTemples = React.useMemo(() => [
    {
      id: 1,
      name: "Pashupatinath Temple",
      location: "Kathmandu",
      image: "/pasupati.jpg",
      link: "/culture/temples"
    },
    {
      id: 2, 
      name: "Swayambhunath Stupa",
      location: "Kathmandu Valley",
      image: "/swayambhu.jpg",
      link: "/culture/temples"
    }
  ], [])

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
            {t('sections.featuredTemples.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('sections.featuredTemples.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredTemples.map((temple) => (
            <TempleCard key={temple.id} temple={temple} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/culture/temples">
            <button className="relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto group/button overflow-hidden">
              <span className="relative z-10 font-semibold">
                {t('sections.featuredTemples.viewAll')}
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 transform group-hover/button:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
})

FeaturedTemples.displayName = 'FeaturedTemples'