// components/sections/hero-section.tsx
"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, Sparkles, Users, Landmark, BookOpen } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900/30">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/30 to-transparent dark:from-gray-900/30"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse hidden md:block"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 hidden md:block"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up">
          <Badge variant="secondary" className="px-6 py-3 text-base font-semibold shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            {t('hero.badge')}
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-300% animate-gradient-x">
            {t('hero.title')}
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 animate-fade-in-up delay-300">
          <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-devanagari max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitleNative')}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-500 mb-16">
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="group relative px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto bg-gradient-to-r from-primary to-accent"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t('hero.cta1')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>

          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 w-full sm:w-auto border-2"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {t('hero.cta2')}
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <Link href="/culture" className="group">
            <div className="text-center p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Landmark className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {t('hero.stats.artifacts')}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('hero.stats.artifactsLabel')}
              </div>
            </div>
          </Link>

          <Link href="/language/learn" className="group">
            <div className="text-center p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {t('hero.stats.lessons')}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('hero.stats.lessonsLabel')}
              </div>
            </div>
          </Link>

          <Link href="/community" className="group">
            <div className="text-center p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {t('hero.stats.assistant')}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('hero.stats.assistantLabel')}
              </div>
            </div>
          </Link>

          <Link href="/culture/festivals" className="group">
            <div className="text-center p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                <Sparkles className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {t('hero.stats.festivals')}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('hero.stats.festivalsLabel')}
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {t('common.scrollToExplore')}
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}