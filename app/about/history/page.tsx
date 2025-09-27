// app/about/history/page.tsx
"use client"

import * as React from "react"
import PageLayout from "@/components/layout/page-layout"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { LightboxImage } from "@/components/ui/lightbox-image"
import { MapContainer } from "@/components/ui/map-container"
import { Bibliography } from "@/components/content/bibliography"
import { Citation } from "@/components/content/citation"
import { CommunityReviewNotice } from "@/components/content/community-review-notice"
import { EthicsStatement } from "@/components/content/ethics-statement"

export default function HistoryPage() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [activeTimelinePeriod, setActiveTimelinePeriod] = React.useState("all")
  const [activeCasteFilter, setActiveCasteFilter] = React.useState("all")
 const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  // Mock data - in a real app, this would come from a CMS or API
  const timelineData = [
    {
      year: t('history.timeline.pre400CE.year'),
      title: t('history.timeline.pre400CE.title'),
      description: t('history.timeline.pre400CE.description'),
      sources: ["Britannica", "UNESCO Kathmandu Valley", "Tiwari 2001"],
    },
    {
      year: t('history.timeline.licchavi.year'),
      title: t('history.timeline.licchavi.title'),
      description: t('history.timeline.licchavi.description'),
      sources: ["Slusser 1982", "Tiwari 2001", "Regmi 1969"],
    },
    {
      year: t('history.timeline.transitional.year'),
      title: t('history.timeline.transitional.title'),
      description: t('history.timeline.transitional.description'),
      sources: ["Slusser 1982", "Gellner 1992"],
    },
    {
      year: t('history.timeline.malla.year'),
      title: t('history.timeline.malla.title'),
      description: t('history.timeline.malla.description'),
      sources: ["Britannica", "Slusser 1982", "Korn 1976"],
    },
    {
      year: t('history.timeline.jayasthiti.year'),
      title: t('history.timeline.jayasthiti.title'),
      description: t('history.timeline.jayasthiti.description'),
      sources: ["Regmi 1960", "Hofer 1979", "Toffin 1984"],
    },
    {
      year: t('history.timeline.gorkha.year'),
      title: t('history.timeline.gorkha.title'),
      description: t('history.timeline.gorkha.description'),
      sources: ["Stiller 1973", "Whelpton 2005", "Gellner 2007"],
    },
    {
      year: t('history.timeline.muluki.year'),
      title: t('history.timeline.muluki.title'),
      description: t('history.timeline.muluki.description'),
      sources: ["Hofer 1979", "Gurung 2016", "Gellner 2007"],
    },
    {
      year: t('history.timeline.rana.year'),
      title: t('history.timeline.rana.title'),
      description: t('history.timeline.rana.description'),
      sources: ["Whelpton 2005", "Gellner 2007", "Hutt 1994"],
    },
    {
      year: t('history.timeline.renaissance.year'),
      title: t('history.timeline.renaissance.title'),
      description: t('history.timeline.renaissance.description'),
      sources: ["Hutt 1994", "Gellner 2007"],
    },
    {
      year: t('history.timeline.present.year'),
      title: t('history.timeline.present.title'),
      description: t('history.timeline.present.description'),
      sources: ["UNESCO", "Levy 1990", "Gellner 2007"],
    },
  ]

  const casteData = [
    {
      category: t('history.caste.priestly.category'),
      castes: [
        {
          name: t('history.caste.priestly.rajopadhyaya.name'),
          description: t('history.caste.priestly.rajopadhyaya.description'),
          surnames: ["Rajopadhyaya", "Sharma", "Acharya"],
          occupation: t('history.caste.priestly.rajopadhyaya.occupation'),
          religion: t('history.caste.priestly.rajopadhyaya.religion'),
          gotra: t('history.caste.priestly.rajopadhyaya.gotra'),
          sources: ["Gellner 1992", "Toffin 1984", "Hofer 1979"],
        },
        {
          name: t('history.caste.priestly.vajracharya.name'),
          description: t('history.caste.priestly.vajracharya.description'),
          surnames: ["Vajracharya", "Bajracharya"],
          occupation: t('history.caste.priestly.vajracharya.occupation'),
          religion: t('history.caste.priestly.vajracharya.religion'),
          gotra: t('history.caste.priestly.vajracharya.gotra'),
          sources: ["Gellner 1992", "Locke 1985", "Lewis 1984"],
        },
        {
          name: t('history.caste.priestly.shakya.name'),
          description: t('history.caste.priestly.shakya.description'),
          surnames: ["Shakya", "Sakya"],
          occupation: t('history.caste.priestly.shakya.occupation'),
          religion: t('history.caste.priestly.shakya.religion'),
          gotra: t('history.caste.priestly.shakya.gotra'),
          sources: ["Gellner 1992", "Locke 1985"],
        },
      ],
    },
    {
      category: t('history.caste.ruling.category'),
      castes: [
        {
          name: t('history.caste.ruling.shrestha.name'),
          description: t('history.caste.ruling.shrestha.description'),
          surnames: ["Shrestha", "Joshi", "Pradhan", "Malla", "Malakar", "Amatya"],
          occupation: t('history.caste.ruling.shrestha.occupation'),
          religion: t('history.caste.ruling.shrestha.religion'),
          gotra: t('history.caste.ruling.shrestha.gotra'),
          sources: ["Toffin 1984", "Gellner 2007", "Hofer 1979"],
        },
        {
          name: t('history.caste.ruling.uray.name'),
          description: t('history.caste.ruling.uray.description'),
          surnames: ["Tuladhar", "Kansakar", "Tamrakar", "Sthapit", "Shakya", "Bania"],
          occupation: t('history.caste.ruling.uray.occupation'),
          religion: t('history.caste.ruling.uray.religion'),
          gotra: t('history.caste.ruling.uray.gotra'),
          sources: ["Lewis 1984", "Gellner 1992", "Toffin 1984"],
        },
      ],
    },
    {
      category: t('history.caste.agricultural.category'),
      castes: [
        {
          name: t('history.caste.agricultural.jyapu.name'),
          description: t('history.caste.agricultural.jyapu.description'),
          surnames: ["Maharjan", "Dangol", "Singh", "Suwal", "Prajapati", "Kumhal"],
          occupation: t('history.caste.agricultural.jyapu.occupation'),
          religion: t('history.caste.agricultural.jyapu.religion'),
          gotra: t('history.caste.agricultural.jyapu.gotra'),
          sources: ["Gellner 2007", "Toffin 1984", "Lewis 1984"],
        },
        {
          name: t('history.caste.agricultural.artisan.name'),
          description: t('history.caste.agricultural.artisan.description'),
          surnames: ["Shilpakar", "Ranjitkar", "Chipa", "Kulu", "Balami", "Napit", "Kau", "Tepe"],
          occupation: t('history.caste.agricultural.artisan.occupation'),
          religion: t('history.caste.agricultural.artisan.religion'),
          gotra: t('history.caste.agricultural.artisan.gotra'),
          sources: ["Toffin 1984", "Gellner 1992", "Hofer 1979"],
        },
      ],
    },
    {
      category: t('history.caste.service.category'),
      castes: [
        {
          name: t('history.caste.service.dyolah.name'),
          description: t('history.caste.service.dyolah.description'),
          surnames: ["Dyolah", "Dyahla"],
          occupation: t('history.caste.service.dyolah.occupation'),
          religion: t('history.caste.service.dyolah.religion'),
          gotra: t('history.caste.service.dyolah.gotra'),
          sources: ["Toffin 1984", "Gellner 1992"],
        },
        {
          name: t('history.caste.service.pode.name'),
          description: t('history.caste.service.pode.description'),
          surnames: ["Pode", "Deula"],
          occupation: t('history.caste.service.pode.occupation'),
          religion: t('history.caste.service.pode.religion'),
          gotra: t('history.caste.service.pode.gotra'),
          sources: ["Gellner 1992", "Toffin 1984"],
        },
      ],
    },
  ]

  const artsData = [
    {
      title: t('history.arts.architecture.title'),
      description: t('history.arts.architecture.description'),
      images: ["/newar-architecture1.jpeg", "/newar-architecture2.png"],
      sources: ["Korn 1976", "Slusser 1982", "Tiwari 2001"],
    },
    {
      title: t('history.arts.metalwork.title'),
      description: t('history.arts.metalwork.description'),
      images: ["/metal1.jpeg", "/metal2.jpg"],
      sources: ["Slusser 1982", "Pal 1974", "Korn 1976"],
    },
    {
      title: t('history.arts.woodcarving.title'),
      description: t('history.arts.woodcarving.description'),
      images: ["/wood1.webp", "/wood2.jpg"],
      sources: ["Korn 1976", "Slusser 1982", "Tiwari 2001"],
    },
    {
      title: t('history.arts.paubha.title'),
      description: t('history.arts.paubha.description'),
      images: ["/pauba1.jpeg", "/paubha2.webp"],
      sources: ["Pal 1974", "Slusser 1982", "Korn 1976"],
    },
    {
      title: t('history.arts.stone.title'),
      description: t('history.arts.stone.description'),
      images: ["/stone1.webp", "/stone2.jpg"],
      sources: ["Slusser 1982", "Pal 1974", "Tiwari 2001"],
    },
    {
      title: t('history.arts.pottery.title'),
      description: t('history.arts.pottery.description'),
      images: ["/pottery.webp", "/pottery2.jpg"],
      sources: ["Lewis 1984", "Toffin 1984", "Gellner 1992"],
    },
  ]

  const festivalData = [
    {
      name: t('history.festivals.indra.name'),
      description: t('history.festivals.indra.description'),
      significance: t('history.festivals.indra.significance'),
      sources: ["Anderson 1971", "Levy 1990", "Locke 1985"],
    },
    {
      name: t('history.festivals.gunla.name'),
      description: t('history.festivals.gunla.description'),
      significance: t('history.festivals.gunla.significance'),
      sources: ["Locke 1985", "Lewis 1984", "Gellner 1992"],
    },
    {
      name: t('history.festivals.samyak.name'),
      description: t('history.festivals.samyak.description'),
      significance: t('history.festivals.samyak.significance'),
      sources: ["Locke 1985", "Gellner 1992", "Lewis 1984"],
    },
    {
      name: t('history.festivals.bisket.name'),
      description: t('history.festivals.bisket.description'),
      significance: t('history.festivals.bisket.significance'),
      sources: ["Levy 1990", "Anderson 1971", "Gellner 1992"],
    },
    {
      name: t('history.festivals.mohani.name'),
      description: t('history.festivals.mohani.description'),
      significance: t('history.festivals.mohani.significance'),
      sources: ["Levy 1990", "Anderson 1971", "Gellner 1992"],
    },
    {
      name: t('history.festivals.sithi.name'),
      description: t('history.festivals.sithi.description'),
      significance: t('history.festivals.sithi.significance'),
      sources: ["Levy 1990", "Lewis 1984", "Gellner 1992"],
    },
  ]

  const languageData = [
    {
      period: t('history.language.ancient.period'),
      description: t('history.language.ancient.description'),
      sources: ["Malla 1989", "Hutt & Subedi 2003"],
    },
    {
      period: t('history.language.malla.period'),
      description: t('history.language.malla.description'),
      sources: ["Malla 1989", "Hutt 1994"],
    },
    {
      period: t('history.language.gorkha.period'),
      description: t('history.language.gorkha.description'),
      sources: ["Hutt 1994", "Gellner 2007"],
    },
    {
      period: t('history.language.rana.period'),
      description: t('history.language.rana.description'),
      sources: ["Hutt 1994", "Gellner 2007"],
    },
    {
      period: t('history.language.modern.period'),
      description: t('history.language.modern.description'),
      sources: ["Hutt 1994", "Gellner 2007"],
    },
  ]

  const diasporaData = [
    {
      region: t('history.diaspora.india.region'),
      description: t('history.diaspora.india.description'),
      sources: ["Gellner 2007", "Hutt 1994"],
    },
    {
      region: t('history.diaspora.tibet.region'),
      description: t('history.diaspora.tibet.description'),
      sources: ["Lewis 1984", "Gellner 2007"],
    },
    {
      region: t('history.diaspora.west.region'),
      description: t('history.diaspora.west.description'),
      sources: ["Gellner 2007", "Hutt 1994"],
    },
  ]

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header Section with animated gradient */}
        <header className="text-center mb-12 transform transition-all duration-700 hover:scale-105">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-red-600 to-amber-600 bg-clip-text text-transparent animate-pulse hover:animate-none hover:bg-gradient-to-l transition-all duration-1000">
            {t('history.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
            {t('history.subtitle')}
          </p>
        </header>

        <EthicsStatement />

        {/* Overview Section with enhanced styling */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.overview.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.overview.paragraph1')} <Citation source="Britannica" />
              </p>
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.overview.paragraph2')} <Citation source="Hutt & Subedi 2003" />
              </p>
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.overview.paragraph3')} <Citation source="UNESCO" />
              </p>
              <CommunityReviewNotice />
            </div>
            <div className="flex items-center justify-center">
              <LightboxImage
                src="/ktm.jpg"
                alt={t('history.overview.imageAlt')}
                caption={t('history.overview.imageCaption')}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section with enhanced interactivity */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.timeline.title')}
          </h2>
          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTimelinePeriod}>
            <TabsList className="bg-amber-50 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.timeline.tabs.all')}
              </TabsTrigger>
              <TabsTrigger value="pre-malla" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.timeline.tabs.preMalla')}
              </TabsTrigger>
              <TabsTrigger value="malla" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.timeline.tabs.malla')}
              </TabsTrigger>
              <TabsTrigger value="modern" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.timeline.tabs.modern')}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Timeline>
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                year={item.year}
                title={item.title}
                description={item.description}
                sources={item.sources}
              />
            ))}
          </Timeline>
        </section>

        {/* Social Structure Section with enhanced styling */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.socialStructure.title')}
          </h2>
          <div className="mb-6 space-y-4">
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.socialStructure.paragraph1')} <Citation source="Hofer 1979" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.socialStructure.paragraph2')} <Citation source="Gellner 2007" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.socialStructure.paragraph3')} <Citation source="Toffin 1984" />
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveCasteFilter}>
            <TabsList className="bg-amber-50 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.socialStructure.tabs.all')}
              </TabsTrigger>
              <TabsTrigger value="hindu" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.socialStructure.tabs.hindu')}
              </TabsTrigger>
              <TabsTrigger value="buddhist" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.socialStructure.tabs.buddhist')}
              </TabsTrigger>
              <TabsTrigger value="priestly" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-all duration-300">
                {t('history.socialStructure.tabs.priestly')}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Accordion type="single" collapsible className="w-full">
            {casteData.map((category, categoryIndex) => (
              <AccordionItem key={categoryIndex} value={`category-${categoryIndex}`} className="border-amber-200">
                <AccordionTrigger className="text-xl font-semibold hover:text-amber-600 transition-colors duration-300 py-4">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-6">
                    {category.castes.map((caste, casteIndex) => (
                      <Card key={casteIndex} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-amber-100">
                        <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                          <CardTitle className="text-amber-700">{caste.name}</CardTitle>
                          <CardDescription>{caste.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-amber-800">{t('history.socialStructure.surnames')}</h4>
                              <p className="text-amber-900">{caste.surnames.join(", ")}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-amber-800">{t('history.socialStructure.occupation')}</h4>
                              <p className="text-amber-900">{caste.occupation}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-amber-800">{t('history.socialStructure.religion')}</h4>
                              <p className="text-amber-900">{caste.religion}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-amber-800">{t('history.socialStructure.gotra')}</h4>
                              <p className="text-amber-900">{caste.gotra}</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-4 border-t border-amber-200">
                            <h4 className="font-semibold mb-2 text-amber-800">{t('history.socialStructure.sources')}</h4>
                            <div className="flex flex-wrap gap-2">
                              {caste.sources.map((source, sourceIndex) => (
                                <Citation key={sourceIndex} source={source} />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Language and Literature Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.language.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.language.paragraph1')} <Citation source="Malla 1989" />
              </p>
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.language.paragraph2')} <Citation source="Hutt 1994" />
              </p>
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.language.paragraph3')} <Citation source="Gellner 2007" />
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-800">{t('history.language.development')}</h3>
              <div className="space-y-4">
                {languageData.map((period, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300 hover:bg-amber-50 border-amber-200">
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg text-amber-700">{period.period}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <p className="mb-2 text-amber-900">{period.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {period.sources.map((source, sourceIndex) => (
                          <Citation key={sourceIndex} source={source} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Arts & Crafts Section with enhanced styling */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.arts.title')}
          </h2>
          <div className="mb-6 space-y-4">
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.arts.paragraph1')} <Citation source="Slusser 1982" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.arts.paragraph2')} <Citation source="Pal 1974" />
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artsData.map((art, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-amber-100">
                <CardHeader className="bg-gradient-to-br from-amber-50 to-amber-100">
                  <CardTitle className="group-hover:text-amber-700 transition-colors duration-300">{art.title}</CardTitle>
                  <CardDescription className="group-hover:text-amber-600 transition-colors duration-300">{art.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {art.images.map((img, imgIndex) => (
                      <LightboxImage
                        key={imgIndex}
                        src={img}
                        alt={`${art.title} example ${imgIndex + 1}`}
                        className="h-32 w-full object-cover rounded group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {art.sources.map((source, sourceIndex) => (
                      <Citation key={sourceIndex} source={source} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Religion & Ritual Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.religion.title')}
          </h2>
          <div className="mb-6 space-y-4">
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.religion.paragraph1')} <Citation source="Gellner 1992" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.religion.paragraph2')} <Citation source="Locke 1985" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.religion.paragraph3')} <Citation source="Levy 1990" />
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-amber-800">{t('history.religion.festivals')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalData.map((festival, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:bg-amber-50 border-amber-200">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle className="text-amber-700">{festival.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-3 text-amber-900">{festival.description}</p>
                  <p className="mb-3 text-amber-900">
                    <span className="font-semibold text-amber-800">{t('history.religion.significance')}:</span> {festival.significance}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {festival.sources.map((source, sourceIndex) => (
                      <Citation key={sourceIndex} source={source} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Historical Sites Map */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.sites.title')}
          </h2>
          <div className="mb-6">
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.sites.paragraph')} <Citation source="UNESCO" />
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <MapContainer 
              center={[27.7172, 85.3240]} 
              zoom={12} 
              markers={[
                {
                  position: [27.7044, 85.3074],
                  title: t('history.sites.kathmandu.title'),
                  description: t('history.sites.kathmandu.description')
                },
                {
                  position: [27.6728, 85.4294],
                  title: t('history.sites.patan.title'),
                  description: t('history.sites.patan.description')
                },
                {
                  position: [27.6710, 85.4295],
                  title: t('history.sites.bhaktapur.title'),
                  description: t('history.sites.bhaktapur.description')
                },
                {
                  position: [27.7172, 85.3240],
                  title: t('history.sites.swayambhunath.title'),
                  description: t('history.sites.swayambhunath.description')
                },
                {
                  position: [27.7140, 85.3084],
                  title: t('history.sites.pashupatinath.title'),
                  description: t('history.sites.pashupatinath.description')
                },
                {
                  position: [27.6915, 85.4298],
                  title: t('history.sites.changu.title'),
                  description: t('history.sites.changu.description')
                },
                {
                  position: [27.6670, 85.3258],
                  title: t('history.sites.boudhanath.title'),
                  description: t('history.sites.boudhanath.description')
                }
              ]}
            />
          </div>
        </section>

        {/* Cuisine Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.cuisine.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.cuisine.paragraph1')} <Citation source="Lewis 1984" />
              </p>

              <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                {t('history.cuisine.paragraph3')} <Citation source="Gellner 1992" />
              </p>
            </div>
            <div className="flex items-center justify-center">
              <LightboxImage
                src="/newar-cuisine.jpg"
                alt={t('history.cuisine.imageAlt')}
                caption={t('history.cuisine.imageCaption')}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Diaspora Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.diaspora.title')}
          </h2>
          <div className="mb-6 space-y-4">
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.diaspora.paragraph1')} <Citation source="Gellner 2007" />
            </p>
            <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
              {t('history.diaspora.paragraph2')} <Citation source="Hutt 1994" />
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {diasporaData.map((region, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:bg-amber-50 border-amber-200">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle className="text-amber-700">{region.region}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-3 text-amber-900">{region.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {region.sources.map((source, sourceIndex) => (
                      <Citation key={sourceIndex} source={source} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contemporary Life Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.contemporary.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-amber-800">{t('history.contemporary.demographics.title')}</h3>
                <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                  {t('history.contemporary.demographics.description')} <Citation source="CBS Nepal 2012" />
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-amber-800">{t('history.contemporary.preservation.title')}</h3>
                <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                  {t('history.contemporary.preservation.description')} <Citation source="Gellner 2007" />
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-amber-800">{t('history.contemporary.challenges.title')}</h3>
                <p className="text-lg leading-relaxed opacity-95 hover:opacity-100 transition-opacity duration-300">
                  {t('history.contemporary.challenges.description')} <Citation source="Gellner 2007" />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LightboxImage
                src="/newar-contemporary.jpg"
                alt={t('history.contemporary.imageAlt')}
                caption={t('history.contemporary.imageCaption')}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Oral Histories Section */}
        <section className="mb-16 transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-600 pl-4 text-shadow-lg shadow-amber-200">
            {t('history.oral.title')}
          </h2>
          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-amber-200">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="text-amber-700">{t('history.oral.cardTitle')}</CardTitle>
              <CardDescription className="text-amber-600">
                {t('history.oral.cardDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="p-6 border rounded-lg bg-amber-50/50 border-amber-200">
                <p className="text-center text-amber-700 mb-4">
                  {t('history.oral.collectionText')}
                </p>
                <div className="text-center">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 hover:scale-105">
                    {t('history.oral.shareButton')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bibliography Section */}
        <Bibliography />

      </div>

      {/* Footer with enhanced styling */}
      <footer className="bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 mt-16 border-t border-amber-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="h-12 w-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                DAI
              </div>
              <div>
                <p className="text-sm font-medium text-amber-800">{t('footer.developedBy')}</p>
                <a
                  href="https://raman1224.github.io/DANGOL_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-700 hover:text-amber-900 hover:underline transition-all duration-300"
                >
                  {t('footer.visit')}
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-amber-800 max-w-md italic">
                "{t('footer.quote')}"
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.facebook')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.instagram')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.youtube')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.twitter')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </PageLayout>
  )
}