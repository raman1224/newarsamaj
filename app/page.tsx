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
import { Calendar, Users, Landmark, BookOpen, Heart, ArrowRight, MapPin, Clock, Star, Sparkles } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-amber-950/20 transition-all duration-500">
      <MainNav
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <HeroSection />
      <AboutSection />
      
      {/* Quick Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/5 via-background/50 to-accent/5 dark:from-primary/10 dark:via-gray-900/50 dark:to-accent/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-4xl font-bold">
                {t('features.title')}
              </h2>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-muted-foreground text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cultural Heritage Card */}
            <Link href="/culture" className="block group">
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full cursor-pointer group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-center md:text-left text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {t('features.culturalHeritage.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left text-sm leading-relaxed">
                    {t('features.culturalHeritage.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4 leading-relaxed">
                    {t('features.culturalHeritage.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                      {t('hero.stats.artifacts')} {t('hero.stats.artifactsLabel')}
                    </span>
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Language Learning Card */}
            <Link href="/language/learn" className="block group">
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full cursor-pointer group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-center md:text-left text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {t('features.languageLearning.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left text-sm leading-relaxed">
                    {t('features.languageLearning.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4 leading-relaxed">
                    {t('features.languageLearning.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full font-medium">
                      {t('hero.stats.lessons')} {t('common.lessons')}
                    </span>
                    <div className="p-2 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-green-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Community Card */}
            <Link href="/community/onboarding" className="block group">
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full cursor-pointer group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-center md:text-left text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {t('features.community.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left text-sm leading-relaxed">
                    {t('features.community.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4 leading-relaxed">
                    {t('features.community.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1.5 rounded-full font-medium">
                      {t('hero.stats.assistant')} {t('hero.stats.assistantLabel')}
                    </span>
                    <div className="p-2 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-purple-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Calendar Card */}
            <Link href="/calendar" className="block group">
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full cursor-pointer group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-center md:text-left text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {t('features.calendar.title')}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-center md:text-left text-sm leading-relaxed">
                    {t('features.calendar.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground text-center md:text-left mb-4 leading-relaxed">
                    {t('features.calendar.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-orange-500/20 to-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full font-medium">
                      BS 2081
                    </span>
                    <div className="p-2 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-orange-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Temples Section */}
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
            {featuredTemples.map((temple, index) => (
              <Link key={temple.id} href={temple.link} className="group block">
                <Card className="relative overflow-hidden border-0 bg-transparent shadow-none group-hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src={temple.image} 
                      alt={temple.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('footer.about.title')}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.about.description')}
              </p>
            </div>
            
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {['culture', 'language', 'events', 'community'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link}`} 
                      className="hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/link"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                      {t(`nav.${link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('footer.aboutUs')}
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {['history', 'mission', 'values', 'leadership'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/about/${link}`} 
                      className="hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/link"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                      {t(`footer.about.${link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('footer.connect')}
              </h3>
              <div className="flex space-x-4 mb-4">
                {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 transform"
                  >
                    <span className="text-sm">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0 group">
                <div className="relative">
                  <img src="/footer.jpg" alt="Dangol AI Logo" className="h-10 w-10 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Developed By{" "}
                    <a
                      href="https://raman1224.github.io/DANGOL_AI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/30 hover:decoration-blue-300/50"
                    >
                      {t('footer.visit')}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm">
                © 2024 Newar Samaj. {t('footer.rights')}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}