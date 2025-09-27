// context/LanguageContext.tsx
'use client'


import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
  currentLanguage: string
  setCurrentLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  // Update function that also triggers re-renders
  const updateLanguage = (language: string) => {
    setCurrentLanguage(language)
    localStorage.setItem('language', language)
    // Update the html lang attribute
    document.documentElement.lang = language
  }

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setCurrentLanguage: updateLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}