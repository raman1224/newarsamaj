// app/about/values/page.tsx
"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import { MainNav } from "@/components/navigation/main-nav"
import PageLayout from '@/components/layout/page-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Globe, Users, BookOpen, Heart, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { link } from "fs"


export default function ValuesPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const { t } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Animation effects
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-on-scroll')
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0)
        
        if (isVisible) {
          element.classList.add('opacity-100', 'translate-y-0')
          element.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero animation
  useEffect(() => {
    if (heroRef.current) {
      const textElements = heroRef.current.querySelectorAll('.hero-text')
      textElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0')
        }, index * 300)
      })
    }
  }, [])

  // Core values data
  const coreValues = [
    {
      id: "language",
      title: t('values.language.title'),
      description: t('values.language.description'),
      icon: <BookOpen className="h-8 w-8" />,
      details: t('values.language.details'),
      link: "/language/learn",
    },
    {
      id: "religion",
      title: t('values.religion.title'),
      description: t('values.religion.description'),
      icon: <Heart className="h-8 w-8" />,
      details: t('values.religion.details'),
      link: "/heritage/religion",
    },
    {
      id: "arts",
      title: t('values.arts.title'),
      description: t('values.arts.description'),
      icon: <Globe className="h-8 w-8" />,
      details: t('values.arts.details'),
      link: "/culture/arts"
    },
    {
      id: "festivals",
      title: t('values.festivals.title'),
      description: t('values.festivals.description'),
      icon: <Calendar className="h-8 w-8" />,
      details: t('values.festivals.details'),
      link: "/culture/festivals"
    },
    {
      id: "unity",
      title: t('values.unity.title'),
      description: t('values.unity.description'),
      icon: <Users className="h-8 w-8" />,
      details: t('values.unity.details'),
      link: "/about/leadership"
    }
  ]

  // Global community data
  const communityData = [
    {
      location: "United States",
      members: "5,000+",
      activities: "Yearly Yomari Punhi celebration, Language classes"
    },
    {
      location: "United Kingdom",
      members: "2,500+",
      activities: "Cultural exhibitions, New Year celebrations"
    },
    {
      location: "Australia",
      members: "1,800+",
      activities: "Community gatherings, Festival observances"
    },
    {
      location: "Japan",
      members: "1,200+",
      activities: "Traditional cooking classes, Music performances"
    },
    {
      location: "Qatar",
      members: "900+",
      activities: "Monthly meetups, Religious ceremonies"
    },
    {
      location: "India",
      members: "8,000+",
      activities: "Large-scale festivals, Cultural preservation programs"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* <MainNav
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      /> */}
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        >
          <div className="absolute inset-0 z-0">
            {/* Animated background with floating Newar symbols */}
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float-1"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-float-2"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-float-3"></div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-float-4"></div>
            
            {/* Temple silhouette patterns */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTVMMzUgMjVIMjVWMzVIMzVWNDVIMjVWNTVIMzVINTVWMzVINDBWMjVINTVWMTVIMzVaIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="hero-text text-4xl md:text-6xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-700 transform"
                style={{ textShadow: '2px 2px 6px #ffcc00' }}>
              {t('values.hero.title')}
            </h1>
            <p className="hero-text text-xl md:text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700 transform delay-300">
              {t('values.hero.subtitle')}
            </p>
            <p className="hero-text text-lg md:text-xl opacity-0 translate-y-10 transition-all duration-700 transform delay-500">
              {t('values.hero.description')}
            </p>
            
            <Button 
              className="hero-text mt-10 opacity-0 translate-y-10 transition-all duration-700 transform delay-700"
              size="lg"
              onClick={() => {
                visionRef.current?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('values.hero.cta')} <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <style jsx>{`
            @keyframes float {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            .animate-float-1 { animation: float 8s ease-in-out infinite; }
            .animate-float-2 { animation: float 10s ease-in-out infinite 1s; }
            .animate-float-3 { animation: float 12s ease-in-out infinite 2s; }
            .animate-float-4 { animation: float 9s ease-in-out infinite 3s; }
          `}</style>
        </section>

        {/* Core Vision Section */}
        <section ref={visionRef} className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.vision.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vision Card 1 */}

                 <Link href="/language/learn" className="block">
      <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
        <CardHeader>
          <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
            <BookOpen className="h-6 w-6" />
          </div>
          <CardTitle>{t("values.vision.language.title")}</CardTitle>
          <CardDescription>{t("values.vision.language.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {t("values.vision.language.description")}
          </p>
        </CardContent>
      </Card>
    </Link>

              {/* Vision Card 2 */}
              <Link href="/heritage/religion">
              <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
                <CardHeader>
                  <div className="p-2 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center text-purple-600 mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('values.vision.culture.title')}</CardTitle>
                  <CardDescription>{t('values.vision.culture.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('values.vision.culture.description')}
                  </p>
                </CardContent>
              </Card>
              </Link>

              {/* Vision Card 3 */}
              <Link href="/culture/arts">
              <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
                <CardHeader>
                  <div className="p-2 bg-green-100 rounded-full w-12 h-12 flex items-center justify-center text-green-600 mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('values.vision.arts.title')}</CardTitle>
                  <CardDescription>{t('values.vision.arts.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('values.vision.arts.description')}
                  </p>
                </CardContent>
              </Card>
              </Link>

              {/* Vision Card 4 */}
              <Link href="/culture/festivals">
              <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
                <CardHeader>
                  <div className="p-2 bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center text-yellow-600 mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('values.vision.community.title')}</CardTitle>
                  <CardDescription>{t('values.vision.community.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('values.vision.community.description')}
                  </p>
                </CardContent>
              </Card>
</Link>
              {/* Vision Card 5 */}
              <Link href= "/about/leadership">
              <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
                <CardHeader>
                  <div className="p-2 bg-red-100 rounded-full w-12 h-12 flex items-center justify-center text-red-600 mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('values.vision.diaspora.title')}</CardTitle>
                  <CardDescription>{t('values.vision.diaspora.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('values.vision.diaspora.description')}
                  </p>
                </CardContent>
              </Card>
</Link>
              {/* Vision Card 6 - AI Timeline */}
              <Card className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 perspective-1000 hover:rotate-y-10">
                <CardHeader>
                  <div className="p-2 bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 mb-4">
                    <Play className="h-6 w-6" />
                  </div>
                  <CardTitle>{t('values.vision.timeline.title')}</CardTitle>
                  <CardDescription>{t('values.vision.timeline.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('values.vision.timeline.description')}
                  </p>
                  <Button variant="outline" className="w-full">
                    {t('values.vision.timeline.cta')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.coreValues.title')}
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.coreValues.subtitle')}
            </p>

            <Tabs defaultValue="language" className="w-full fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12">
                {coreValues.map((value, index) => (
                  <TabsTrigger 
                    key={value.id} 
                    value={value.id}
                    className="flex flex-col items-center justify-center h-auto py-3 px-2"
                  >
                    <span className="mb-2">{value.icon}</span>
                    <span className="text-xs">{value.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {coreValues.map((value) => (
                <TabsContent key={value.id} value={value.id} className="mt-4">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <span className="p-2 bg-primary/10 rounded-full text-primary">
                          {value.icon}
                        </span>
                        {value.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.details}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Interactive Media Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.media.title')}
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.media.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="rounded-full h-12 w-12">
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{t(`values.media.item${item}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`values.media.item${item}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                {t('values.media.cta')}
              </Button>
            </div>
          </div>
        </section>

        {/* Global Newar Community Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.community.title')}
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.community.subtitle')}
            </p>

            <div className="relative">
              <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                {communityData.map((community, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 snap-start mx-4 perspective-1000 hover:rotate-y-12 transition-transform duration-500"
                  >
                    <Card className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-primary" />
                          {community.location}
                        </CardTitle>
                        <CardDescription>
                          {t('values.community.members')}: {community.members}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          <span className="font-semibold">{t('values.community.activities')}:</span> {community.activities}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button>
                {t('values.community.cta')}
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.cta.title')}
            </h2>
            <p className="text-xl mb-10 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              {t('values.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <Button size="lg" variant="secondary" className="text-base">
                {t('values.cta.join')}
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-primary">
                {t('values.cta.donate')}
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/g5.png" alt="Newar Samaj Logo" className="h-8 w-8 rounded-full" />
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

      {/* <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .hover\\:rotate-y-10:hover {
          transform: rotateY(10deg);
        }
        .hover\\:rotate-y-12:hover {
          transform: rotateY(12deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style> */}
    </div>
  )
}