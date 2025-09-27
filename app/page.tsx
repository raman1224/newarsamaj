// app/page.tsx
"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/navigation/main-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"
import { Calendar, Users, Landmark, BookOpen, Heart, ArrowRight, MapPin, Clock } from "lucide-react"

export default function HomePage() {
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const { t } = useTranslation()
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // Featured data - these would come from your CMS/API in real app
  const featuredTemples = [
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
  ]

  const upcomingEvents = [
    {
      id: 1,
      name: "Yomari Punhi Festival",
      date: "December 15, 2024",
      link: "/culture/festivals"
    },
    {
      id: 2,
      name: "New Year Celebration",
      date: "April 14, 2025", 
      link: "/events/upcoming"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <MainNav
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <HeroSection />
      <AboutSection />
      
      {/* Quick Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-gray-900 dark:to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('features.title')}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Cultural Heritage Card */}
            <Link href="/culture" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 h-full cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Landmark className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-center md:text-left">
                      {t('features.culturalHeritage.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left">
                    {t('features.culturalHeritage.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4">
                    {t('features.culturalHeritage.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {t('hero.stats.artifacts')} {t('hero.stats.artifactsLabel')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Language Learning Card */}
            <Link href="/language/learn" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent/20 h-full cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-center md:text-left">
                      {t('features.languageLearning.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left">
                    {t('features.languageLearning.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4">
                    {t('features.languageLearning.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {t('hero.stats.lessons')} {t('common.lessons')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Community Card */}
            <Link href="/community/onboarding" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary/20 h-full cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <CardTitle className="text-center md:text-left">
                      {t('features.community.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left">
                    {t('features.community.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4">
                    {t('features.community.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {t('hero.stats.assistant')} {t('hero.stats.assistantLabel')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-secondary transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Calendar Card */}
            <Link href="/calendar" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-500/20 h-full cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Calendar className="w-5 h-5 text-green-500" />
                    </div>
                    <CardTitle className="text-center md:text-left">
                      {t('features.calendar.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left">
                    {t('features.calendar.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4">
                    {t('features.calendar.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">
                      BS 2081
                    </span>
                    <ArrowRight className="w-4 h-4 text-green-500 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Temples Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('sections.featuredTemples.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('sections.featuredTemples.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredTemples.map((temple) => (
              <Link key={temple.id} href={temple.link}>
                <Card className="group overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={temple.image} 
                      alt={temple.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">{temple.name}</h3>
                      <p className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {temple.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/culture/temples">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto">
                {t('sections.featuredTemples.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">{t('footer.about.title')}</h3>
              <p className="text-gray-400 text-sm">
                {t('footer.about.description')}
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/culture" className="hover:text-white transition-colors">{t('nav.culture')}</Link></li>
                <li><Link href="/language/learn" className="hover:text-white transition-colors">{t('nav.language')}</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">{t('nav.events')}</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">{t('nav.community')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{t('footer.aboutUs')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about/history" className="hover:text-white transition-colors">{t('footer.about.history')}</Link></li>
                <li><Link href="/about/mission" className="hover:text-white transition-colors">{t('footer.about.mission')}</Link></li>
                <li><Link href="/about/values" className="hover:text-white transition-colors">{t('footer.about.values')}</Link></li>
                <li><Link href="/about/leadership" className="hover:text-white transition-colors">{t('footer.about.leadership')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">{t('footer.connect')}</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61579052624200" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          
        
   <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/g5.png" alt="Dangol AI Logo" className="h-8 w-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">Developed By <a
                  href="https://raman1224.github.io/DANGOL_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-bold text-blue-400 hover:underline"
                >
                  {t('footer.visit')}
                </a> </p>
                
              </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
