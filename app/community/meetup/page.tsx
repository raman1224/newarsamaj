'use client'

import PageLayout from '@/components/layout/page-layout'
import { useTranslation } from '@/hooks/useTranslation'
import { useState, useEffect } from 'react'

// Define types for the translation structure
interface MeetupTranslations {
  importance: {
    points: string[]
  }
  features: {
    items: string[]
  }
}

export default function MeetupPage() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Your Google Meet link
  const MEET_LINK = "https://meet.google.com/abc-defg-hij"

  const handleJoinMeet = () => {
    if (isClient) {
      window.open(MEET_LINK, '_blank', 'noopener,noreferrer')
    }
  }

  // Helper function to get array from translations safely
  const getTranslationArray = (key: string): string[] => {
    try {
      const value = t(key)
      // If it's a string, try to parse it as JSON, otherwise return as array
      if (typeof value === 'string') {
        // Check if it's a JSON string or just a string
        if (value.startsWith('[') && value.endsWith(']')) {
          return JSON.parse(value)
        }
        return [value] // Return as single-item array
      }
      return Array.isArray(value) ? value : []
    } catch (error) {
      console.warn(`Translation key "${key}" not found or invalid format`)
      return []
    }
  }

  // Get the points and items arrays safely
  const importancePoints = getTranslationArray('meetup.importance.points')
  const featureItems = getTranslationArray('meetup.features.items')

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* 3D Animated Header */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transform transition-transform duration-500 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('meetup.title')}
            </span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-2xl opacity-20 animate-pulse"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          {t('meetup.subtitle')}
        </p>
        
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          {t('meetup.description')}
        </p>
      </div>

      {/* Main Meet Card with 3D Effect */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('meetup.joinButton')}
              </h2>
              
              <button
                onClick={handleJoinMeet}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                  {t('meetup.joinButton')}
                </span>
              </button>
              
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                {t('meetup.instructions')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Importance Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-[1.01]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            {t('meetup.importance.title')}
          </h3>
          <ul className="space-y-4">
            {importancePoints.length > 0 ? (
              importancePoints.map((point: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500 dark:text-gray-400">No points available</li>
            )}
          </ul>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-[1.01]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
            {t('meetup.features.title')}
          </h3>
          <ul className="space-y-4">
            {featureItems.length > 0 ? (
              featureItems.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500 dark:text-gray-400">No items available</li>
            )}
          </ul>
        </div>
      </div>

      {/* Technology Benefits Section */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-16 transform transition-transform duration-300 hover:scale-[1.01] shadow-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">{t('meetup.techBenefits.title')}</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            {t('meetup.techBenefits.description')}
          </p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {t('meetup.schedule.title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weekly</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('meetup.schedule.weekly')}</p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Monthly</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('meetup.schedule.monthly')}</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Special</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('meetup.schedule.special')}</p>
          </div>
        </div>
      </div>

      {/* Globe Animation */}
      <div className="text-center">
        <div className="inline-block relative">
          <div className="w-32 h-32 border-4 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-purple-500 rounded-full animate-spin-slow" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-4 w-24 h-24 border-4 border-green-500 rounded-full animate-ping"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Connecting Newars Worldwide</p>
      </div>
    </div>
    </PageLayout>
  )
}