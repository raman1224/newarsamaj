"use client"

import * as React from "react"
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/navigation/main-nav"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"
import { Calendar, Users, Landmark, BookOpen, ArrowRight, MapPin, Star, Sparkles } from "lucide-react"
import { useUser } from "@/lib/useUser"
import Image from "next/image"

// Lazy load non-critical sections
const HeroSection = dynamic(() => import("@/components/sections/hero-section").then(mod => mod.HeroSection), {
  loading: () => <div className="h-screen animate-pulse bg-gray-200 dark:bg-gray-800" />,
  ssr: true
})

const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => mod.AboutSection), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />,
  ssr: true
})

// Memoized Feature Card Component
const FeatureCard = React.memo(({ href, icon, iconGradient, title, subtitle, description, badge, badgeColor, user, requiresAuth = false }: any) => {
  const finalHref = requiresAuth && !user ? "/auth/signup" : href
  
  return (
    <Link href={finalHref} className="block group">
      <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full cursor-pointer group-hover:scale-105">
        <div className={`absolute inset-0 ${iconGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className={`p-3 ${iconGradient} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {icon}
            </div>
            <CardTitle className="text-center md:text-left text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="text-center md:text-left text-sm leading-relaxed">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-muted-foreground text-center md:text-left mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className={`text-xs ${badgeColor} px-3 py-1.5 rounded-full font-medium`}>
              {badge}
            </span>
            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})
FeatureCard.displayName = 'FeatureCard'

// Memoized Temple Card
const TempleCard = React.memo(({ temple }: any) => (
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
          <h3 className="font-bold text-2xl mb-2">{temple.name}</h3>
          <p className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <MapPin className="w-4 h-4" />
            {temple.location}
          </p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-2">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
          </div>
        </div>
      </div>
    </Card>
  </Link>
))
TempleCard.displayName = 'TempleCard'

export default function HomePage() {
  const { t } = useTranslation()
  const { user, loading } = useUser()
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  const handleThemeToggle = React.useCallback(() => {
    setIsDarkMode(prev => !prev)
    document.documentElement.classList.toggle("dark")
  }, [])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Memoized data to prevent recreation
  const featuredTemples = React.useMemo(() => [
    { id: 1, name: "Pashupatinath Temple", location: "Kathmandu", image: "/pasupati.jpg", link: "/culture/temples" },
    { id: 2, name: "Swayambhunath Stupa", location: "Kathmandu Valley", image: "/swayambhu.jpg", link: "/culture/temples" }
  ], [])

  const features = React.useMemo(() => [
    {
      href: "/culture",
      icon: <Landmark className="w-6 h-6 text-white" />,
      iconGradient: "bg-gradient-to-br from-primary to-primary/80",
      title: t('features.culturalHeritage.title'),
      subtitle: t('features.culturalHeritage.subtitle'),
      description: t('features.culturalHeritage.description'),
      badge: `${t('hero.stats.artifacts')} ${t('hero.stats.artifactsLabel')}`,
      badgeColor: "bg-gradient-to-r from-primary/20 to-primary/10 text-primary"
    },
    {
      href: "/language/learn",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      iconGradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      title: t('features.languageLearning.title'),
      subtitle: t('features.languageLearning.subtitle'),
      description: t('features.languageLearning.description'),
      badge: `${t('hero.stats.lessons')} ${t('common.lessons')}`,
      badgeColor: "bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      href: "/community/onboarding",
      icon: <Users className="w-6 h-6 text-white" />,
      iconGradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
      title: t('features.community.title'),
      subtitle: t('features.community.subtitle'),
      description: t('features.community.description'),
      badge: user ? "Join Community" : "Sign Up Required",
      badgeColor: "bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-600 dark:text-purple-400",
      requiresAuth: true
    },
    {
      href: "/calendar",
      icon: <Calendar className="w-6 h-6 text-white" />,
      iconGradient: "bg-gradient-to-br from-orange-500 to-red-500",
      title: t('features.calendar.title'),
      subtitle: t('features.calendar.subtitle'),
      description: t('features.calendar.description'),
      badge: "BS 2081",
      badgeColor: "bg-gradient-to-r from-orange-500/20 to-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ], [t, user])

  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-amber-950/20">
      <MainNav isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
      
      <React.Suspense fallback={<div className="h-screen animate-pulse bg-gray-200 dark:bg-gray-800" />}>
        <HeroSection />
      </React.Suspense>
      
      <React.Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />}>
        <AboutSection />
      </React.Suspense>
      
      {/* Quick Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/5 via-background/50 to-accent/5 dark:from-primary/10 dark:via-gray-900/50 dark:to-accent/10 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-4xl font-bold">{t('features.title')}</h2>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Temples Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
              {t('sections.featuredTemples.title')}
            </h2>
            <p className="text-muted-foreground text-lg">{t('sections.featuredTemples.description')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredTemples.map((temple) => (
              <TempleCard key={temple.id} temple={temple} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/culture/temples">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                <span>{t('sections.featuredTemples.viewAll')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.about.title')}</h3>
              <p className="text-gray-400 text-sm">{t('footer.about.description')}</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {['culture', 'language', 'events', 'community'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link}`} className="hover:text-white transition-colors">
                      {t(`nav.${link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.aboutUs')}</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {['history', 'mission', 'values', 'leadership'].map((link) => (
                  <li key={link}>
                    <Link href={`/about/${link}`} className="hover:text-white transition-colors">
                      {t(`footer.about.${link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">{t('footer.connect')}</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map((social) => (
                  <a key={social} href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Newar Samaj. {t('footer.rights')}</p>
            <p className="mt-2">
              Developed By{" "}
              <a href="https://raman1224.github.io/DANGOL_AI" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {t('footer.visit')}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}