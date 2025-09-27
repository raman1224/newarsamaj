"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Camera, Info, ExternalLink, Building, Compass, History } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface Temple {
  id: number
  name: string
  nameNewa: string
  location: string
  period: string
  significance: string
  description: string
  detailedHistory: string
  image: string
  rating: number
  visitors: string
  architecture: string
  architectureStyle: string
  architecturalFeatures: string[]
  festivals: string[]
  coordinates: { lat: number; lng: number }
  timings: string
  entryFee: string
  contact: string
}

interface ArchitectureStyle {
  id: string
  name: string
  nameNewa: string
  description: string
  features: string[]
  examples: string[]
  period: string
  image: string
}

const temples: Temple[] = [
  {
    id: 1,
    name: "Pashupatinath Temple",
    nameNewa: "पशुपतिनाथ मन्दिर",
    location: "Kathmandu",
    period: "5th Century",
    significance: "Sacred Hindu temple dedicated to Lord Shiva",
    description: "One of the most sacred Hindu temples in Nepal...",
    detailedHistory: "Pashupatinath Temple is one of the most significant Hindu temples...",
    image: "/temples/pashupatinath.jpg",
    rating: 4.8,
    visitors: "1M+ annually",
    architecture: "Pagoda Style",
    architectureStyle: "Newar Pagoda",
    architecturalFeatures: ["Golden roof", "Silver doors", "Intricate wood carvings", "Stone sculptures"],
    festivals: ["Maha Shivaratri", "Teej", "Kartik Purnima"],
    coordinates: { lat: 27.7104, lng: 85.3484 },
    timings: "4:00 AM - 9:00 PM",
    entryFee: "Free for Nepalese, ₹1000 for foreigners",
    contact: "+977-1-447034"
  }
]

const architectureStyles: ArchitectureStyle[] = [
  {
    id: "pagoda",
    name: "Pagoda Style",
    nameNewa: "पगोडा शैली",
    description: "Multi-tiered tower with eaves, characteristic of Newar architecture",
    features: ["Multiple tiers", "Curved roofs", "Wooden struts", "Golden finial"],
    examples: ["Pashupatinath", "Nyatapola", "Taleju Bhawani"],
    period: "Malla Period",
    image: "/architecture/pagoda.jpg"
  }
]

export function TemplesSection() {
  const [selectedTemple, setSelectedTemple] = React.useState<Temple | null>(null)
  const [selectedStyle, setSelectedStyle] = React.useState<ArchitectureStyle | null>(null)
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{t('temples.title')}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('temples.description')}
        </p>
      </div>

      <Tabs defaultValue="gallery" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
          <TabsTrigger value="gallery">{t('temples.tabs.gallery')}</TabsTrigger>
          <TabsTrigger value="architecture">{t('temples.tabs.architecture')}</TabsTrigger>
          <TabsTrigger value="timeline">{t('temples.tabs.timeline')}</TabsTrigger>
          <TabsTrigger value="map">{t('temples.tabs.map')}</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {temples.map((temple) => (
              <Card key={temple.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={temple.image} alt={temple.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 text-black">
                    {temple.period}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                      <h3 className="font-semibold text-lg">{temple.name}</h3>
                      <p className="text-sm opacity-90 font-devanagari">{temple.nameNewa}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{temple.location}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{temple.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{temple.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {temple.visitors}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setSelectedTemple(temple)}>
                      <Info className="mr-2 h-3 w-3" />
                      {t('common.learnMore')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="architecture" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureStyles.map((style) => (
              <Card key={style.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setSelectedStyle(style)}>
                <img src={style.image} alt={style.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{style.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{style.period}</Badge>
                    <Button variant="outline" size="sm">
                      <Building className="mr-2 h-3 w-3" />
                      {t('common.view')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Add Timeline and Map content similarly */}
      </Tabs>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative p-0">
              <img src={selectedTemple.image} alt={selectedTemple.name} className="w-full h-64 object-cover" />
              <Button variant="outline" size="sm" className="absolute top-4 right-4 bg-white/90" onClick={() => setSelectedTemple(null)}>
                ✕
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold">{selectedTemple.name}</h2>
                  <p className="text-xl text-muted-foreground font-devanagari">{selectedTemple.nameNewa}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('temples.details.history')}</h3>
                    <p className="text-muted-foreground">{selectedTemple.detailedHistory}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('temples.details.architecture')}</h3>
                    <p className="text-muted-foreground mb-2">{selectedTemple.architecture}</p>
                    <div className="space-y-2">
                      {selectedTemple.architecturalFeatures.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div><strong>{t('temples.details.timings')}:</strong> {selectedTemple.timings}</div>
                  <div><strong>{t('temples.details.entryFee')}:</strong> {selectedTemple.entryFee}</div>
                  <div><strong>{t('temples.details.contact')}:</strong> {selectedTemple.contact}</div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    {t('temples.actions.virtualTour')}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    {t('temples.actions.directions')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}