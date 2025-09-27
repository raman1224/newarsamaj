// components/sections/hero-section.tsx
"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, Sparkles, Users, Landmark, BookOpen, Star, Zap, Target, Globe } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-amber-50/30 dark:from-gray-900 dark:via-blue-950/50 dark:to-amber-950/30 transition-all duration-1000">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1500 hidden md:block"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary/30 rounded-full animate-float delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-secondary/50 rounded-full animate-float delay-2000"></div>
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 via-transparent to-transparent dark:from-gray-900/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-gray-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Enhanced Badge with 3D effect */}
        <div className="mb-8 animate-fade-in-up transform-gpu">
          <Badge 
            variant="secondary" 
            className="relative px-6 py-3 text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="w-5 h-5 mr-2 animate-pulse relative z-10" />
            <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('hero.badge')}
            </span>
          </Badge>
        </div>

        {/* Main heading with enhanced 3D text */}
        <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-200 transform-gpu">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-300% animate-gradient-x drop-shadow-2xl">
              {t('hero.title')}
            </span>
            {/* Text shadow for 3D effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-300% animate-gradient-x blur-lg opacity-50 -z-10">
              {t('hero.title')}
            </span>
          </span>
        </h1>

        {/* Enhanced Subtitle with 3D depth */}
        <div className="mb-8 animate-fade-in-up delay-300 transform-gpu">
          <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4 font-light transform hover:scale-105 transition-transform duration-300">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-devanagari max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            {t('hero.subtitleNative')}
          </p>
        </div>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400 transform-gpu bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
          {t('hero.description')}
        </p>

        {/* 3D CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-500 mb-16 transform-gpu">
          <Link href="/auth/signup" className="group relative">
            <Button
              size="lg"
              className="relative px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 overflow-hidden transform-gpu"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
              
              <span className="relative z-10 flex items-center justify-center">
                {t('hero.cta1')}
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
              </span>
            </Button>
          </Link>

          <Link href="/about" className="group relative">
            <Button
              variant="outline"
              size="lg"
              className="group relative px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 overflow-hidden transform-gpu"
            >
              {/* Hover effect layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Play className="mr-2 w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('hero.cta2')}
              </span>
            </Button>
          </Link>
        </div>

        {/* Enhanced 3D Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-700 transform-gpu">
          {[
            { 
              icon: Landmark, 
              color: "blue", 
              value: t('hero.stats.artifacts'), 
              label: t('hero.stats.artifactsLabel'),
              href: "/culture"
            },
            { 
              icon: BookOpen, 
              color: "green", 
              value: t('hero.stats.lessons'), 
              label: t('hero.stats.lessonsLabel'),
              href: "/language/learn"
            },
            { 
              icon: Users, 
              color: "purple", 
              value: t('hero.stats.assistant'), 
              label: t('hero.stats.assistantLabel'),
              href: "/community"
            },
            { 
              icon: Sparkles, 
              color: "orange", 
              value: t('hero.stats.festivals'), 
              label: t('hero.stats.festivalsLabel'),
              href: "/culture/festivals"
            }
          ].map((stat, index) => (
            <Link key={index} href={stat.href} className="group relative block">
              <div className="relative text-center p-6 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 hover:scale-110 hover:-translate-y-3 backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transform-gpu overflow-hidden">
                
                {/* 3D Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-${stat.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Animated Icon Container */}
                <div className={`relative w-16 h-16 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${stat.color}-200 dark:group-hover:bg-${stat.color}-900/50 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600 dark:text-${stat.color}-400 transform group-hover:scale-125 transition-transform duration-300`} />
                  
                  {/* Floating dot */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${stat.color}-500 rounded-full animate-pulse`}></div>
                </div>
                
                {/* Stats Value */}
                <div className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2 transform group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Stats Label */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
                
                {/* Hover arrow */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className={`w-4 h-4 text-${stat.color}-600 dark:text-${stat.color}-400 transform group-hover:translate-x-1 transition-transform duration-300`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Enhanced 3D Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center group cursor-pointer">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-primary transition-colors duration-300">
            {t('common.scrollToExplore')}
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse group-hover:bg-primary transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute top-8 right-8 hidden lg:flex flex-col gap-4">
        <button className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 transform-gpu">
          <Zap className="w-5 h-5 text-primary" />
        </button>
        <button className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 transform-gpu">
          <Globe className="w-5 h-5 text-accent" />
        </button>
      </div>

      {/* Gradient Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  )
}