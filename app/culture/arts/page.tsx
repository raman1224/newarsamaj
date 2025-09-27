// app/culture/arts/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, ArrowLeft, Heart, Share, Users, Clock, Award } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"
import Image from "next/image"
import * as React from 'react';

const artsData = [
  {
    id: 1,
    name: "Paubha Painting",
    category: "Traditional Art",
    image: "/images/arts/paubha.jpg",
    description: "Traditional religious scroll painting used in Buddhist and Hindu rituals",
    materials: "Mineral pigments, Gold leaf",
    origin: "Kathmandu Valley",
    significance: "Spiritual and ritual importance",
    artists: "Newar Chitrakar community"
  },
  {
    id: 2,
    name: "Wood Carving",
    category: "Sculpture",
    image: "/images/arts/wood-carving.jpg",
    description: "Intricate wood carvings on temples, windows, and doors",
    materials: "Sal wood, Teak",
    origin: "Ancient Nepal",
    significance: "Architectural decoration",
    artists: "Newar Sthapit community"
  },
  {
    id: 3,
    name: "Metal Craft",
    category: "Metalwork",
    image: "/images/arts/metal-craft.jpg",
    description: "Bronze and copper statues, ritual objects, and utensils",
    materials: "Bronze, Copper, Gold",
    origin: "Lichhavi Period",
    significance: "Religious and daily use",
    artists: "Newar Shakya community"
  },
  {
    id: 4,
    name: "Stone Sculpture",
    category: "Sculpture",
    image: "/images/arts/stone-sculpture.jpg",
    description: "Ancient stone carvings of deities and architectural elements",
    materials: "Black stone, Marble",
    origin: "5th Century",
    significance: "Temple architecture",
    artists: "Traditional stone carvers"
  },
  {
    id: 5,
    name: "Thangka Painting",
    category: "Religious Art",
    image: "/images/arts/thangka.jpg",
    description: "Buddhist painting on cotton or silk appliqué",
    materials: "Natural pigments, Silk",
    origin: "Tibetan influence",
    significance: "Meditation aid",
    artists: "Buddhist monks and artists"
  },
  {
    id: 6,
    name: "Pottery",
    category: "Ceramics",
    image: "/images/arts/pottery.jpg",
    description: "Traditional wheel-thrown and hand-molded pottery",
    materials: "Clay, Terracotta",
    origin: "Prehistoric period",
    significance: "Daily utility and ritual",
    artists: "Kumale community"
  }
]

export default function ArtsPage() {
  const { t } = useTranslation()

  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleThemeToggle = () =>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-pink-100/30">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/culture">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('common.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('culture.arts.title')}
            </h1>
            <div className="w-20"></div>
          </div>

          {/* Hero Section */}
          <Card className="mb-12 border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
            <CardContent className="p-12 text-center">
              <Palette className="h-20 w-20 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{t('culture.arts.heroTitle')}</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                {t('culture.arts.heroDescription')}
              </p>
            </CardContent>
          </Card>

          {/* Arts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {artsData.map((art) => (
              <Card key={art.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-purple-600">{art.category}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {art.name}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {art.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span><strong>{t('culture.arts.materials')}:</strong> {art.materials}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span><strong>{t('culture.arts.origin')}:</strong> {art.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span><strong>{t('culture.arts.artists')}:</strong> {art.artists}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {art.significance}
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-sm text-purple-600 font-medium">{t('culture.arts.totalArts')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-purple-600 font-medium">{t('culture.arts.categories')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
                <div className="text-sm text-purple-600 font-medium">{t('culture.arts.yearsHistory')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-purple-600 font-medium">{t('culture.arts.artistFamilies')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}