// app/about/mission/page.tsx
"use client"

import * as React from "react"
import PageLayout from '@/components/layout/page-layout'
import { MainNav } from "@/components/navigation/main-nav"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { LightboxImage } from "@/components/ui/lightbox-image"
import { Globe } from "@/components/ui/3d-globe"
import { QuizModal } from "@/components/ai/quiz-modal"
import { VoiceNarration } from "@/components/ai/voice-narration"
import { DynamicInfographic } from "@/components/ai/dynamic-infographic"

export default function MissionPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isQuizOpen, setIsQuizOpen] = React.useState(false)
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const { t } = useTranslation()

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Mission data
  const missionPoints = [
    {
      title: "language_preservation",
      description: "language_preservation_desc",
      icon: "📚",
      longText: "language_preservation_long"
    },
    {
      title: "cultural_identity",
      description: "cultural_identity_desc",
      icon: "🎭",
      longText: "cultural_identity_long"
    },
    {
      title: "intergenerational_learning",
      description: "intergenerational_learning_desc",
      icon: "👨‍👩‍👧‍👦",
      longText: "intergenerational_learning_long"
    },
    {
      title: "global_awareness",
      description: "global_awareness_desc",
      icon: "🌍",
      longText: "global_awareness_long"
    },
    {
      title: "unity_in_diversity",
      description: "unity_in_diversity_desc",
      icon: "☮️",
      longText: "unity_in_diversity_long"
    }
  ]

  // Vision data
  const visionPoints = [
    {
      title: "language_future",
      description: "language_future_desc",
      icon: "🏫",
      longText: "language_future_long"
    },
    {
      title: "cultural_institutions",
      description: "cultural_institutions_desc",
      icon: "🏛️",
      longText: "cultural_institutions_long"
    },
    {
      title: "youth_engagement",
      description: "youth_engagement_desc",
      icon: "🎨",
      longText: "youth_engagement_long"
    },
    {
      title: "tradition_modernity",
      description: "tradition_modernity_desc",
      icon: "⚖️",
      longText: "tradition_modernity_long"
    },
    {
      title: "international_recognition",
      description: "international_recognition_desc",
      icon: "🏆",
      longText: "international_recognition_long"
    }
  ]

  // Cultural images
  const culturalImages = [
    {
      src: "/swayambhu.jpg",
      alt: "Swayambhunath Stupa",
      caption: "Swayambhunath - Ancient Buddhist Temple"
    },
    {
      src: "/nata.jpg",
      alt: "Nyatapola Temple",
      caption: "Nyatapola Temple - Bhaktapur"
    },
    {
      src: "/indra-jatra.jpg",
      alt: "Indra Jatra Festival",
      caption: "Indra Jatra - Traditional Festival"
    },
    {
      src: "/pauba1.jpeg",
      alt: "Paubha Art",
      caption: "Traditional Paubha Artwork"
    }
  ]

  // Newar communities around the world
  const newarCommunities = [
    { lat: 27.7172, lng: 85.3240, size: 0.15, name: "Kathmandu" }, // Nepal
    { lat: 28.3949, lng: 84.1240, size: 0.1, name: "Pokhara" }, // Nepal
    { lat: 40.7128, lng: -74.0060, size: 0.08, name: "New York" }, // USA
    { lat: 51.5074, lng: -0.1278, size: 0.08, name: "London" }, // UK
    { lat: 55.7558, lng: 37.6173, size: 0.06, name: "Moscow" }, // Russia
    { lat: 35.6762, lng: 139.6503, size: 0.07, name: "Tokyo" }, // Japan
    { lat: 37.7749, lng: -122.4194, size: 0.07, name: "San Francisco" }, // USA
    { lat: 1.3521, lng: 103.8198, size: 0.07, name: "Singapore" }, // Singapore
    { lat: 22.3193, lng: 114.1694, size: 0.07, name: "Hong Kong" }, // Hong Kong
    { lat: 19.0760, lng: 72.8777, size: 0.09, name: "Mumbai" }, // India
    { lat: 27.0238, lng: 74.2179, size: 0.06, name: "Rajasthan" }, // India
    { lat: 43.6532, lng: -79.3832, size: 0.07, name: "Toronto" }, // Canada
    { lat: -33.8688, lng: 151.2093, size: 0.07, name: "Sydney" }, // Australia
    { lat: 48.8566, lng: 2.3522, size: 0.06, name: "Paris" }, // France
    { lat: 52.5200, lng: 13.4050, size: 0.06, name: "Berlin" }, // Germany
  ]

  return (
    <div className="min-h-screen">
      {/* <MainNav
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      /> */}
      
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-amber-200 via-red-300 to-orange-400">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-xl animate-fadeInUp">
                {t('missionVision.title')}
              </h1>
              <p className="text-xl text-gray-800 mb-8 tracking-wide animate-fadeInUp delay-100">
                {t('missionVision.subtitle')}
              </p>
              
              {/* AI Voice Narration */}
              <div className="flex justify-center mb-6">
                <VoiceNarration 
                  text={`${t('missionVision.title')}. ${t('missionVision.subtitle')}. ${t('mission.description')}. ${t('vision.description')}`}
                  language={currentLanguage}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10"></div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-md">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('mission.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {missionPoints.map((point, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 border-0 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 transform-style-preserve-3d hover:rotate-y-12"
                >
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <span className="text-3xl mr-3">{point.icon}</span>
                    <CardTitle className="text-xl text-amber-900 dark:text-amber-200">
                      {t(`mission.${point.title}`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {t(`mission.${point.description}`)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`mission.${point.longText}`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Dynamic Infographic */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
              {t('infographic.title')}
            </h2>
            <DynamicInfographic 
              missionPoints={missionPoints}
              visionPoints={visionPoints}
              t={t}
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left side - Images */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {culturalImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
                    >
                      <LightboxImage
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Vision Content */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white drop-shadow-md">
                  {t('vision.title')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  {t('vision.description')}
                </p>

                <div className="space-y-6">
                  {visionPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-2xl mr-4 mt-1 text-amber-600 dark:text-amber-400">{point.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-200 mb-1">
                          {t(`vision.${point.title}`)}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          {t(`vision.${point.description}`)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(`vision.${point.longText}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Globe Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
              {t('globalCommunity.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              {t('globalCommunity.description')}
            </p>
            
            <div className="h-[400px] w-full rounded-xl overflow-hidden">
              <Globe 
                data={newarCommunities}
                globeColor="rgba(245, 158, 11, 0.2)"
                markerColor="rgba(245, 158, 11, 0.8)"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('globalCommunity.members')}</div>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('globalCommunity.countries')}</div>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('globalCommunity.events')}</div>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('globalCommunity.languages')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white drop-shadow-md">
              {t('focusAreas.title')}
            </h2>

            <Tabs defaultValue="language" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="language">{t('focusAreas.language')}</TabsTrigger>
                <TabsTrigger value="religion">{t('focusAreas.religion')}</TabsTrigger>
                <TabsTrigger value="festivals">{t('focusAreas.festivals')}</TabsTrigger>
                <TabsTrigger value="art">{t('focusAreas.art')}</TabsTrigger>
                <TabsTrigger value="youth">{t('focusAreas.youth')}</TabsTrigger>
                <TabsTrigger value="global">{t('focusAreas.global')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="language" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.language')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.language_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.language_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
              
              <TabsContent value="religion" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.religion')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.religion_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.religion_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
              
              <TabsContent value="festivals" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.festivals')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.festivals_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.festivals_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
              
              <TabsContent value="art" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.art')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.art_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.art_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
              
              <TabsContent value="youth" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.youth')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.youth_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.youth_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
              
              <TabsContent value="global" className="p-6 bg-amber-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-200">{t('focusAreas.global')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t('focusAreas.global_desc')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('focusAreas.global_long')}
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 glow-on-hover">
                  {t('focusAreas.learn_more')}
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Mobile Accordion Section (for smaller screens) */}
        <section className="py-12 px-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 lg:hidden">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
              {t('focusAreas.title')}
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="language">
                <AccordionTrigger>{t('focusAreas.language')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.language_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="religion">
                <AccordionTrigger>{t('focusAreas.religion')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.religion_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="festivals">
                <AccordionTrigger>{t('focusAreas.festivals')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.festivals_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="art">
                <AccordionTrigger>{t('focusAreas.art')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.art_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="youth">
                <AccordionTrigger>{t('focusAreas.youth')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.youth_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="global">
                <AccordionTrigger>{t('focusAreas.global')}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {t('focusAreas.global_desc')}
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-sm glow-on-hover">
                    {t('focusAreas.learn_more')}
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-md">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-8 py-3 glow-on-hover">
                {t('cta.join_button')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 glow-on-hover" onClick={() => setIsQuizOpen(true)}>
                {t('cta.quiz_button')}
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>

      {/* AI Quiz Modal */}
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)}
        language={currentLanguage}
      />

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/g5.png" alt="Dangol AI Logo" className="h-8 w-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">{t('footer.developedBy')}</p>
                <a
                  href="https://raman1224.github.io/DANGOL_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  {t('footer.visit')}
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground max-w-md">
                "{t('footer.quote')}"
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t('footer.social.facebook')}
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t('footer.social.instagram')}
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t('footer.social.youtube')}
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  {t('footer.social.twitter')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}