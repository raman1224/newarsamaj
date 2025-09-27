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
  {
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
  const { t } = useTranslation()

  return (
    <header className="h-18 mt-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-shadow bg-gray-200 flex items-center justify-center">
            <span className="text-lg font-bold "><img className="rounded-full" src="/g5.png" alt="logo" /></span>
          </div>
          <div >
            <h1 className="text-xl font-bold text-primary">Newar Samaj</h1>
            <p className=" text-xl text-muted-foreground font-devanagari">नेवार समाज</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
            {t('nav.home')}
          </Link>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{t('nav.about')}</span>}
            className="w-[400px]"
          >
            <div className="grid gap-3 md:grid-cols-2">
              {aboutItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-medium">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{t('nav.language')}</span>}
            className="w-[400px]"
          >
            <div className="grid gap-3 md:grid-cols-2">
              {languageItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-medium">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{t('nav.heritage')}</span>}
            className="w-[400px]"
          >
            <div className="grid gap-3 md:grid-cols-2">
              {heritageItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-medium">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{t('nav.events')}</span>}
            className="w-[300px]"
          >
            <div className="grid gap-3">
              {eventItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-medium">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-md px-1 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{t('nav.community')}</span>}
            className="w-[300px]"
          >
            <div className="grid gap-3">
              {communityItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-medium">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
            {t('nav.contact')}
          </Link>

          <Link href="/donate" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            {t('nav.donate')}
          </Link>
        </nav>

        {/* Right Side Controls - Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Language Selector */}
          <LanguageSwitcher />

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={onThemeToggle}>
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link href="/auth/login">
            <Button variant="outline" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              {t('nav.signIn')}
            </Button>
            </Link>
                          <Link href="/auth/signup">

            <Button size="sm">
              <User className="h-4 w-4 mr-2" />
              {t('nav.signUp')}
            </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Language and theme toggles always visible on mobile */}
          <LanguageSwitcher />
          
          <Button variant="ghost" size="sm" onClick={onThemeToggle} className="p-2">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[380px] overflow-y-auto p-0">
              {/* Add SheetTitle for accessibility */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-bold"><img src="/g5.png" alt="logo" /></span>
                    </div>
                    <div >
                      <h1 className="text-lg font-bold text-primary">Newar Samaj</h1>
                      <p className="text-xs text-muted-foreground">नेवार समाज</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 py-4 overflow-y-auto">
                  <nav className="space-y-1 px-4">
                    <Link 
                      href="/" 
                      className="block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('nav.home')}
                    </Link>

                    {/* About Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground px-3 py-2">{t('nav.about')}</h3>
                      <div className="space-y-1">
                        {aboutItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block pl-6 py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Language Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground px-3 py-2">{t('nav.language')}</h3>
                      <div className="space-y-1">
                        {languageItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block pl-6 py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Heritage Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground px-3 py-2">{t('nav.heritage')}</h3>
                      <div className="space-y-1">
                        {heritageItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block pl-6 py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Events Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground px-3 py-2">{t('nav.events')}</h3>
                      <div className="space-y-1">
                        {eventItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block pl-6 py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Community Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground px-3 py-2">{t('nav.community')}</h3>
                      <div className="space-y-1">
                        {communityItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block pl-6 py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Contact Link */}
                    <Link 
                      href="/contact" 
                      className="block py-2 px-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground border-t mt-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('nav.contact')}
                    </Link>

                    {/* Donate Link */}
                    <Link 
                      href="/donate" 
                      className="block py-1 px-2 text-base font-medium text-primary rounded-md transition-colors hover:bg-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('nav.donate')}
                    </Link>
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                                <Link href="/auth/login">

                    <Button variant="outline" size="sm" className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      {t('nav.signIn')}
                    </Button>
                    </Link>
                                <Link href="/auth/signup">

                    <Button size="sm" className="w-full">
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