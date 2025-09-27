// components/layout/page-layout.tsx
'use client'

import { MainNav } from "@/components/navigation/main-nav"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect } from "react"



interface PageLayoutProps {
  children: React.ReactNode;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

export default function PageLayout({ children, isDarkMode = false, onThemeToggle }: PageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentLanguage } = useLanguage()
  const handleThemeToggle = onThemeToggle ?? (() => {})

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [mobileMenuOpen])

  return (
      <>
        <MainNav
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
        />
        <main key={currentLanguage}>
          {children}
        </main>
      </>
  )
}