// components/navigation/main-nav.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import LanguageSwitcher from '@/components/language/LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'
import { useUser } from '@/lib/useUser'
import { logOut } from '@/lib/auth'

import { Moon, Sun, Menu, X, User, LogIn, LogOut, UserCircle, Heart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CustomDropdown } from "@/components/ui/custom-dropdown"
import { CustomDropdownItem } from "@/components/ui/custom-dropdown-item"
import { cn } from "@/lib/utils"



// Data arrays (keep your existing ones)
const aboutItems = [
  { title: "Our History", href: "/about/history", description: "Interactive timeline, videos, images, AI chatbot Q&A", key: "nav.aboutItems.our_history", descKey: "nav.aboutItemsDesc.our_history" },
  { title: "Mission & Vision", href: "/about/mission", description: "Animated cards, counters, hover effects", key: "nav.aboutItems.mission_vision", descKey: "nav.aboutItemsDesc.mission_vision" },
  { title: "Vision & Values", href: "/about/values", description: "Icons representing values, 3D flip cards, AI quiz", key: "nav.aboutItems.vision_values", descKey: "nav.aboutItemsDesc.vision_values" },
  { title: "Leadership & Community", href: "/about/leadership", description: "Profile cards, hover 3D lift, social links", key: "nav.aboutItems.leadership_community", descKey: "nav.aboutItemsDesc.leadership_community" },
]

const languageItems = [
  { title: "Learn Newar Language", href: "/language/learn", description: "Structured learning with AI tutor assistance", key: "nav.languageItems.learn_newar_language", descKey: "nav.languageItemsDesc.learn_newar_language" },
  { title: "Language Exchange Chatroom", href: "/language/chat", description: "Real-time chat with AI-assisted suggestions", key: "nav.languageItems.language_exchange_chatroom", descKey: "nav.languageItemsDesc.language_exchange_chatroom" },
  { title: "Culture, Religion & Language", href: "/language/culture", description: "Media gallery, festival videos, AI summarizer", key: "nav.languageItems.culture_religion_language", descKey: "nav.languageItemsDesc.culture_religion_language" },
  { title: "Culture School", href: "/language/school", description: "Video lessons, AI adaptive quizzes, progress tracking", key: "nav.languageItems.culture_school", descKey: "nav.languageItemsDesc.culture_school" },
]

const heritageItems = [
  { title: "Culture & Customs", href: "/culture", description: "Explore traditions, lifestyle, and cultural practices with rich media and AI insights", key: "nav.heritageItems.culture_customs", descKey: "nav.heritageItemsDesc.culture_customs" },
  { title: "Religion & Beliefs", href: "/heritage/religion", description: "Learn about faith, rituals, temples, and spiritual practices with guided explanations", key: "nav.heritageItems.religion_beliefs", descKey: "nav.heritageItemsDesc.religion_beliefs" },
  { title: "Festivals & Celebrations", href: "/culture/festivals", description: "Festival calendar, celebration videos, and stories with AI-powered summaries", key: "nav.heritageItems.festivals_celebrations", descKey: "nav.heritageItemsDesc.festivals_celebrations" },
  { title: "Caste & Occupation", href: "/heritage/caste", description: "Information about traditional caste system and occupations", key: "nav.heritageItems.caste_occupation", descKey: "nav.heritageItemsDesc.caste_occupation" }
]

const eventItems = [
  { title: "Upcoming Events", href: "/events/upcoming", description: "3D card list, countdown timers, RSVP", key: "nav.eventItems.upcoming_events", descKey: "nav.eventItemsDesc.upcoming_events" },
  { title: "Nepal Calendar", href: "/events/calendar", description: "Interactive, scrollable calendar with festival images", key: "nav.eventItems.festival_calendar", descKey: "nav.eventItemsDesc.festival_calendar" },
]

const communityItems = [
  { title: "Community Onboarding", href: "/community/onboarding", description: "Complete cultural profile, interests, and community role", key: "nav.communityItems.community_onboarding", descKey: "nav.communityItemsDesc.community_onboarding" },
  { title: "News & Updates", href: "/community/news", description: "Interactive card-based layout, AI summary", key: "nav.communityItems.news_updates", descKey: "nav.communityItemsDesc.news_updates" },
  { title: "Meetup", href: "/community/meetup", description: "Groups, events, and video calls", key: "nav.communityItems.meetup", descKey: "nav.communityItemsDesc.meetup" },
  { title: "Notices", href: "/community/notices", description: "Notices", key: "nav.communityItems.notices", descKey: "nav.communityItemsDesc.notices" }
]

const Logo = React.memo(() => (
  <Link href="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
    <div className="relative h-12 w-12 rounded-full shadow-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center overflow-hidden group-hover:rotate-6">
      <div className="relative w-10 h-10">
        <Image
          src="/g5.png"
          alt="Newar Samaj Logo"
          fill
          sizes="40px"
          className="rounded-full object-contain"
          priority
        />
      </div>
    </div>
    <div className="flex flex-col">
      <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
        Newar Samaj
      </h1>
      <p className="text-sm text-muted-foreground">नेवार समाज</p>
    </div>
  </Link>
))
Logo.displayName = 'Logo'

export const MainNav = React.memo(function MainNav({ isDarkMode, onThemeToggle }: { isDarkMode: boolean; onThemeToggle: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { t } = useTranslation()
  const { user, loading } = useUser()
  const [userProfile, setUserProfile] = React.useState<any>(null)

  // Get user profile from localStorage
  React.useEffect(() => {
    const profile = localStorage.getItem('userProfile')
    if (profile) {
      setUserProfile(JSON.parse(profile))
    }
  }, [user])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await logOut()
      localStorage.removeItem('userProfile')
      window.location.href = '/'
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const headerClasses = cn(
    "h-20 sticky top-0 z-50 w-full border-b transition-all duration-300",
    isScrolled 
      ? "bg-background/95 backdrop-blur-md shadow-lg border-border/40" 
      : "bg-background/80 backdrop-blur-sm border-transparent"
  )

  const displayName = userProfile?.fullName || user?.displayName || user?.email?.split('@')[0] || 'User'
  const userEmail = user?.email || ''

  return (
    <header className={headerClasses}>
      <div className="container flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link href="/" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">
            {t('nav.home')}
          </Link>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">{t('nav.about')}</span>}
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {aboutItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-semibold">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">{t('nav.language')}</span>}
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {languageItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-semibold">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">{t('nav.heritage')}</span>}
            className="w-[450px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {heritageItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-semibold">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">{t('nav.events')}</span>}
            className="w-[350px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4">
              {eventItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-semibold">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <CustomDropdown
            trigger={<span className="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">{t('nav.community')}</span>}
            className="w-[350px] p-4 bg-popover/95 backdrop-blur-xl border shadow-2xl rounded-xl"
          >
            <div className="grid gap-4">
              {communityItems.map((item) => (
                <CustomDropdownItem key={item.title} href={item.href}>
                  <div className="text-sm font-semibold">{t(item.key)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t(item.descKey)}</p>
                </CustomDropdownItem>
              ))}
            </div>
          </CustomDropdown>

          <Link href="/contact" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/50">
            {t('nav.contact')}
          </Link>

          <Link href="/donate" className="rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-medium text-white hover:from-orange-600 hover:to-red-600">
            <span className="flex items-center">
              <span className="relative inline-flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              {t('nav.donate')}
            </span>
          </Link>
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher />
          
          <Button variant="ghost" size="sm" onClick={onThemeToggle} className="h-9 w-9 rounded-full bg-accent/50">
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center space-x-3">
                 
                  
                  {/* User Dropdown */}
                  <div className="relative group">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <UserCircle className="h-5 w-5" />
                      <span className="max-w-[120px] truncate">{displayName}</span>
                    </Button>
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{displayName}</p>
                          <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                        </div>
                        <Link href="/community" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent">
                          <UserCircle className="h-4 w-4" />
                          My Profile
                        </Link>
                        <Link href="/community/onboarding" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent">
                          <Settings className="h-4 w-4" />
                          Edit Profile
                        </Link>
                        <hr className="my-1" />
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/auth/login">
                    <Button variant="outline" size="sm">
                      <LogIn className="h-4 w-4 mr-2" />
                      {t('nav.signIn')}
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500">
                      <User className="h-4 w-4 mr-2" />
                      {t('nav.signUp')}
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <LanguageSwitcher />
          
          <Button variant="ghost" size="sm" onClick={onThemeToggle} className="p-2 h-9 w-9 rounded-full bg-accent/50">
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 rounded-full bg-accent/50">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <Image src="/g5.png" alt="logo" width={32} height={32} className="rounded-full" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">Newar Samaj</h1>
                      <p className="text-xs text-muted-foreground">नेवार समाज</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 py-6 overflow-y-auto">
                  <nav className="space-y-2 px-6">
                    <Link href="/" className="flex items-center py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.home')}
                    </Link>
                    <Link href="/culture" className="flex items-center py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.culture')}
                    </Link>
                    <Link href="/language" className="flex items-center py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.language')}
                    </Link>
                    <Link href="/events" className="flex items-center py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.events')}
                    </Link>
                    <Link href="/contact" className="flex items-center py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.contact')}
                    </Link>
                    <Link href="/donate" className="flex items-center py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      {t('nav.donate')}
                    </Link>
                    
                    <hr className="my-4" />
                    
                    {!loading && (
                      <>
                        {user ? (
                          <>
                            <div className="px-4 py-2 bg-accent/20 rounded-lg">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{displayName}</p>
                              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                            </div>
                            <Link href="/community" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                              <Heart className="h-5 w-5" />
                              Community
                            </Link>
                            <Link href="/community/onboarding" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                              <Settings className="h-5 w-5" />
                              Edit Profile
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 py-3 px-4 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <LogOut className="h-5 w-5" />
                              Sign Out
                            </button>
                          </>
                        ) : (
                          <>
                            <Link href="/auth/login" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                              <LogIn className="h-5 w-5" />
                              {t('nav.signIn')}
                            </Link>
                            <Link href="/auth/signup" className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                              <User className="h-5 w-5" />
                              {t('nav.signUp')}
                            </Link>
                          </>
                        )}
                      </>
                    )}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
})