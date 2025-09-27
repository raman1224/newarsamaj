"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import LanguageSwitcher from '@/components/language/LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'

import { Moon, Sun, Menu, X, User, LogIn, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CustomDropdown } from "@/components/ui/custom-dropdown"
import { CustomDropdownItem } from "@/components/ui/custom-dropdown-item"
import { cn } from "@/lib/utils"

// Precomputed data with translation keys
const aboutItems = [
  {
    title: "Our History",
    href: "/about/history",
    description: "Interactive timeline, videos, images, AI chatbot Q&A",
    key: "nav.aboutItems.our_history",
    descKey: "nav.aboutItemsDesc.our_history"
  },
  {
    title: "Mission & Vision",
    href: "/about/mission",
    description: "Animated cards, counters, hover effects",
    key: "nav.aboutItems.mission_vision",
    descKey: "nav.aboutItemsDesc.mission_vision"
  },
  {
    title: "Vision & Values",
    href: "/about/values",
    description: "Icons representing values, 3D flip cards, AI quiz",
    key: "nav.aboutItems.vision_values",
    descKey: "nav.aboutItemsDesc.vision_values"
  },
  {
    title: "Leadership & Community",
    href: "/about/leadership",
    description: "Profile cards, hover 3D lift, social links",
    key: "nav.aboutItems.leadership_community",
    descKey: "nav.aboutItemsDesc.leadership_community"
  },
]

const languageItems = [
  {
    title: "Learn Newar Language",
    href: "/language/learn",
    description: "Structured learning with AI tutor assistance",
    key: "nav.languageItems.learn_newar_language",
    descKey: "nav.languageItemsDesc.learn_newar_language"
  },
  {
    title: "Language Exchange Chatroom",
    href: "/language/chat",
    description: "Real-time chat with AI-assisted suggestions",
    key: "nav.languageItems.language_exchange_chatroom",
    descKey: "nav.languageItemsDesc.language_exchange_chatroom"
  },
  {
    title: "Culture, Religion & Language",
    href: "/language/culture",
    description: "Media gallery, festival videos, AI summarizer",
    key: "nav.languageItems.culture_religion_language",
    descKey: "nav.languageItemsDesc.culture_religion_language"
  },
  {
    title: "Culture School",
    href: "/language/school",
    description: "Video lessons, AI adaptive quizzes, progress tracking",
    key: "nav.languageItems.culture_school",
    descKey: "nav.languageItemsDesc.culture_school"
  },
]

const heritageItems = [
  {
    title: "Culture & Customs",
    href: "/culture",
    description: "Explore traditions, lifestyle, and cultural practices with rich media and AI insights",
    key: "nav.heritageItems.culture_customs",
    descKey: "nav.heritageItemsDesc.culture_customs"
  },
  {
    title: "Religion & Beliefs",
    href: "/heritage/religion",
    description: "Learn about faith, rituals, temples, and spiritual practices with guided explanations",
    key: "nav.heritageItems.religion_beliefs",
    descKey: "nav.heritageItemsDesc.religion_beliefs"
  },
  {
    title: "Festivals & Celebrations",
    href: "/culture/festivals",
    description: "Festival calendar, celebration videos, and stories with AI-powered summaries",
    key: "nav.heritageItems.festivals_celebrations",
    descKey: "nav.heritageItemsDesc.festivals_celebrations"
  },
  {
    title: "Caste & Occupation",
    href: "/heritage/caste",
    description: "Information about traditional caste system and occupations",
    key: "nav.heritageItems.caste_occupation",
    descKey: "nav.heritageItemsDesc.caste_occupation"
  }
]

const resourceItems = [
  {
    title: "Documents & Archives",
    href: "/resources/documents",
    description: "Searchable table with PDFs/images, AI summarizer",
    key: "nav.resourceItems.documents_archives",
    descKey: "nav.resourceItemsDesc.documents_archives"
  },
  {
    title: "Research & Publication",
    href: "/resources/research",
    description: "Cards with filters, AI abstract generator",
    key: "nav.resourceItems.research_publication",
    descKey: "nav.resourceItemsDesc.research_publication"
  },
  {
    title: "Community Support",
    href: "/resources/support",
    description: "Interactive map, volunteer info, AI chatbot",
    key: "nav.resourceItems.community_support",
    descKey: "nav.resourceItemsDesc.community_support"
  },
  {
    title: "Language Learning Center",
    href: "/resources/learning",
    description: "Structured lessons with AI tutor and quizzes",
    key: "nav.resourceItems.language_learning_center",
    descKey: "nav.resourceItemsDesc.language_learning_center"
  },
]

const eventItems = [
  {  // ← Missing this opening brace
    title: "Upcoming Events",
    href: "/events/upcoming",
    description: "3D card list, countdown timers, RSVP",
    key: "nav.eventItems.upcoming_events",
    descKey: "nav.eventItemsDesc.upcoming_events"
  },
  {
    title: "Nepal Calendar",
    href: "/events/calendar",
    description: "Interactive, scrollable calendar with festival images",
    key: "nav.eventItems.festival_calendar",
    descKey: "nav.eventItemsDesc.festival_calendar"
  },
]
const communityItems = [
  {
    title: "Community Onboarding",
    href: "/community/onboarding",
    description: "Complete cultural profile, interests, and community role",
    key: "nav.communityItems.community_onboarding",
    descKey: "nav.communityItemsDesc.community_onboarding"
  },
  {
    title: "News & Updates",
    href: "/community/news",
    description: "Interactive card-based layout, AI summary",
    key: "nav.communityItems.news_updates",
    descKey: "nav.communityItemsDesc.news_updates"
  },
  {
    title: "Meetup",
    href: "/community/meetup",
    description: "Groups, events, and video calls",
    key: "nav.communityItems.meetup",
    descKey: "nav.communityItemsDesc.meetup"
  },
  {
    title: "Notices",
    href: "/community/notices",
    description: "Notices",
    key: "nav.communityItems.notices",
    descKey: "nav.communityItemsDesc.notices"
  }
]

interface MainNavProps {
  isDarkMode: boolean
  onThemeToggle: () => void
}

export function MainNav({ isDarkMode, onThemeToggle }: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { t } = useTranslation()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "h-20 sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-border/40" 
        : "bg-background/80 backdrop-blur-sm border-transparent"
    )}>
      <div className="container flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <Link 
          href="/" 
          className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600 flex items-center justify-center overflow-hidden group-hover:rotate-6 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            <span className="text-lg font-bold relative z-10">
              <img 
                className="rounded-full w-10 h-10 object-cover transform group-hover:scale-110 transition-transform duration-300" 
                src="/g5.png" 
                alt="logo" 
              />
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300">
              Newar Samaj
            </h1>
            <p className="text-sm text-muted-foreground font-devanagari transition-colors duration-300">
              नेवार समाज
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link 
            href="/" 
            className="relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/navlink overflow-hidden"
          >
            <span className="relative z-10">{t('nav.home')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>

          <CustomDropdown
            trigger={
              <span className="relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/dropdown overflow-hidden">
                <span className="relative z-10">{t('nav.about')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            }
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {aboutItems.map((item, index) => (
               <CustomDropdownItem 
  key={item.title} 
  href={item.href}
  className={cn(
    "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    `delay-[${index * 50}ms]`
  )}
>
                  <div className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(item.key)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={
              <span className="relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/dropdown overflow-hidden">
                <span className="relative z-10">{t('nav.language')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/5 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            }
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {languageItems.map((item, index) => (
               <CustomDropdownItem 
  key={item.title} 
  href={item.href}
  className={cn(
    "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    `delay-[${index * 50}ms]`
  )}
>
                  <div className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(item.key)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={
              <span className="relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/dropdown overflow-hidden">
                <span className="relative z-10">{t('nav.heritage')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/5 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            }
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {heritageItems.map((item, index) => (
               <CustomDropdownItem 
  key={item.title} 
  href={item.href}
  className={cn(
    "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    `delay-[${index * 50}ms]`
  )}
>
                  <div className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(item.key)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={
              <span className="relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/dropdown overflow-hidden">
                <span className="relative z-10">{t('nav.events')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/5 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            }
            className="w-[350px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4">
              {eventItems.map((item, index) => (
               <CustomDropdownItem 
  key={item.title} 
  href={item.href}
  className={cn(
    "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    `delay-[${index * 50}ms]`
  )}
>
  <div className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(item.key)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={
              <span className="relative cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/dropdown overflow-hidden">
                <span className="relative z-10">{t('nav.community')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/5 transform scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-300 origin-left"></div>
              </span>
            }
            className="w-[350px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4">
              {communityItems.map((item, index) => (
                <CustomDropdownItem 
  key={item.title} 
  href={item.href}
  className={cn(
    "transform transition-all duration-300 hover:scale-105 hover:shadow-lg",
    `delay-[${index * 50}ms]`
  )}
>
                  <div className="text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(item.key)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <Link 
            href="/contact" 
            className="relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground group/navlink overflow-hidden"
          >
            <span className="relative z-10">{t('nav.contact')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>

          <Link 
            href="/donate" 
            className="relative rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:scale-105 hover:shadow-lg active:scale-95 group/donate overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <span className="relative inline-flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              {t('nav.donate')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform scale-x-0 group-hover/donate:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </nav>

        {/* Right Side Controls - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Language Selector */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onThemeToggle}
            className="relative h-9 w-9 rounded-full bg-accent/50 hover:bg-accent transition-all duration-300 hover:scale-110 active:scale-95 group/theme"
          >
            {isDarkMode ? (
              <Moon className="h-4 w-4 transform group-hover/theme:rotate-12 transition-transform duration-300" />
            ) : (
              <Sun className="h-4 w-4 transform group-hover/theme:rotate-45 transition-transform duration-300" />
            )}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-300"></span>
          </Button>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link href="/auth/login">
              <Button 
                variant="outline" 
                size="sm"
                className="relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group/login"
              >
                <LogIn className="h-4 w-4 mr-2 transform group-hover/login:translate-x-0.5 transition-transform duration-300" />
                {t('nav.signIn')}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover/login:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button 
                size="sm"
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 active:scale-95 group/signup"
              >
                <User className="h-4 w-4 mr-2 transform group-hover/signup:scale-110 transition-transform duration-300" />
                {t('nav.signUp')}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -translate-x-full group-hover/signup:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Language and theme toggles always visible on mobile */}
          <LanguageSwitcher />
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onThemeToggle} 
            className="p-2 h-9 w-9 rounded-full bg-accent/50 hover:bg-accent transition-all duration-300"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-9 w-9 rounded-full bg-accent/50 hover:bg-accent transition-all duration-300 relative group/menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 transform group-hover/menu:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 transform group-hover/menu:scale-110 transition-transform duration-300" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] overflow-y-auto p-0 bg-background/95 backdrop-blur-xl border-l"
            >
              {/* Add SheetTitle for accessibility */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-accent/5 to-accent/10">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg flex items-center justify-center overflow-hidden">
                      <img src="/g5.png" alt="logo" className="w-8 h-8 rounded-full" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        Newar Samaj
                      </h1>
                      <p className="text-xs text-muted-foreground">नेवार समाज</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <nav className="space-y-2 px-6">
                    <Link 
                      href="/" 
                      className="flex items-center py-3 px-4 text-base font-medium rounded-xl transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105 active:scale-95 group/mobilelink"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3 transform group-hover/mobilelink:scale-y-100 scale-y-50 transition-transform duration-300"></div>
                      {t('nav.home')}
                    </Link>

                    {/* About Section */}
                    <div className="pt-4">
                      <h3 className="text-sm font-semibold text-foreground px-4 py-2 bg-accent/20 rounded-lg mb-2">
                        {t('nav.about')}
                      </h3>
                      <div className="space-y-1">
                        {aboutItems.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center pl-6 pr-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-accent/30 hover:text-primary hover:translate-x-2 group/mobileitem"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover/mobileitem:opacity-100 transition-opacity duration-300"></div>
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Language Section */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-foreground px-4 py-2 bg-accent/20 rounded-lg mb-2">
                        {t('nav.language')}
                      </h3>
                      <div className="space-y-1">
                        {languageItems.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center pl-6 pr-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-accent/30 hover:text-primary hover:translate-x-2 group/mobileitem"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 opacity-0 group-hover/mobileitem:opacity-100 transition-opacity duration-300"></div>
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Heritage Section */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-foreground px-4 py-2 bg-accent/20 rounded-lg mb-2">
                        {t('nav.heritage')}
                      </h3>
                      <div className="space-y-1">
                        {heritageItems.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center pl-6 pr-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-accent/30 hover:text-primary hover:translate-x-2 group/mobileitem"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3 opacity-0 group-hover/mobileitem:opacity-100 transition-opacity duration-300"></div>
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Events Section */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-foreground px-4 py-2 bg-accent/20 rounded-lg mb-2">
                        {t('nav.events')}
                      </h3>
                      <div className="space-y-1">
                        {eventItems.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center pl-6 pr-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-accent/30 hover:text-primary hover:translate-x-2 group/mobileitem"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 opacity-0 group-hover/mobileitem:opacity-100 transition-opacity duration-300"></div>
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Community Section */}
                    <div className="pt-2">
                      <h3 className="text-sm font-semibold text-foreground px-4 py-2 bg-accent/20 rounded-lg mb-2">
                        {t('nav.community')}
                      </h3>
                      <div className="space-y-1">
                        {communityItems.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center pl-6 pr-4 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-accent/30 hover:text-primary hover:translate-x-2 group/mobileitem"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3 opacity-0 group-hover/mobileitem:opacity-100 transition-opacity duration-300"></div>
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Contact Link */}
                    <Link 
                      href="/contact" 
                      className="flex items-center py-3 px-4 text-base font-medium rounded-xl transition-all duration-300 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105 active:scale-95 group/mobilelink mt-6 border-t pt-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full mr-3 transform group-hover/mobilelink:scale-y-100 scale-y-50 transition-transform duration-300"></div>
                      {t('nav.contact')}
                    </Link>

                    {/* Donate Link */}
                    <Link 
                      href="/donate" 
                      className="flex items-center py-3 px-4 text-base font-medium text-white rounded-xl bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:scale-105 active:scale-95 group/donatemobile mt-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-1 h-6 bg-white/30 rounded-full mr-3 transform group-hover/donatemobile:scale-y-100 scale-y-50 transition-transform duration-300"></div>
                      {t('nav.donate')}
                    </Link>
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t p-6 space-y-4 bg-accent/5">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/auth/login">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full transition-all duration-300 hover:scale-105 active:scale-95"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        {t('nav.signIn')}
                      </Button>
                    </Link>
                    <Link href="/auth/signup">
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:scale-105 active:scale-95"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        {t('nav.signUp')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}