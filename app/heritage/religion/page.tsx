'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/context/LanguageContext'
import { TemplesGallery } from '@/components/culture/temples-gallery'
import Link from 'next/link'
import { 
  Heart, 
  Share2, 
  Download, 
  BookOpen, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  ChevronDown,
  Play,
  Pause
} from 'lucide-react'
import PageLayout from '@/components/layout/page-layout'

// Static data that doesn't need translation
const deities = [
  {
    name: "Machhendranath (Karunamaya)",
    description: "The bodhisattva of compassion worshipped by both Hindus and Buddhists, known for bringing rain and prosperity to the valley.",
    significance: "Central to the longest chariot festival in Nepal, worshipped as Avalokiteshvara by Buddhists and Shiva by Hindus.",
    icon: "🕉️"
  },
  {
    name: "Taleju Bhawani",
    description: "The royal goddess of the Malla kings, originally a tutelary deity who became the protector of the Kathmandu Valley.",
    significance: "Represents royal power and protection, with temples accessible only to certain priests and during specific festivals.",
    icon: "👑"
  },
  {
    name: "Kumari (Living Goddess)",
    description: "A pre-pubescent girl worshipped as the living incarnation of the goddess Taleju, representing divine female power.",
    significance: "Unique to Newar culture, the Kumari symbolizes the fusion of Hindu and Buddhist traditions and royal legitimacy.",
    icon: "👧"
  },
  {
    name: "Bhimsen",
    description: "Pandava brother worshipped as the god of trade, commerce, and business success by Newar merchants.",
    significance: "Particularly important for the Newar business community, with temples in major trading centers.",
    icon: "⚔️"
  },
  {
    name: "Ganesh",
    description: "Elephant-headed god of wisdom and remover of obstacles, worshipped in both Hindu and Buddhist contexts.",
    significance: "Four directional Ganesh temples protect Kathmandu city, showing integration into urban planning.",
    icon: "🐘"
  },
  {
    name: "Bhairab",
    description: "Fierce manifestation of Shiva representing destruction and transformation, worshipped in tantric rituals.",
    significance: "Important for protection and tantric practices, with both Hindu and Buddhist forms worshipped.",
    icon: "👹"
  }
]

const rituals = [
  {
    name: "Machabu Byanke (Naming Ceremony)",
    description: "First major ceremony after birth where the baby receives its formal name.",
    timing: "6th or 12th day after birth",
    significance: "Introduces the child to society and confers identity",
    participants: "Family, priest, close relatives"
  },
  {
    name: "Ihi (Pre-puberty Marriage)",
    description: "Symbolic marriage of young girls to the Suvarna Kumar (golden boy), representing Lord Vishnu.",
    timing: "Before menstruation, typically ages 5-9",
    significance: "Ensures spiritual protection and social status",
    participants: "Young girls, priests, community"
  },
  {
    name: "Bara Tayegu (Girl's Seclusion)",
    description: "First menstruation ceremony where girls are secluded for 12 days.",
    timing: "At first menstruation",
    significance: "Marks transition to womanhood",
    participants: "Young woman, female relatives"
  }
]

const festivals = [
  {
    name: "Indra Jatra",
    description: "Eight-day festival honoring Indra, the king of gods, featuring masked dances and chariot processions.",
    duration: "8 days in September",
    significance: "Marks the end of monsoon and beginning of festival season",
    traditions: ["Kumari chariot procession", "Lakhe dances", "Pulukisi display", "Yosin thanegu"]
  },
  {
    name: "Machhindranath Jatra",
    description: "Longest chariot festival in Nepal honoring the rain-bringing deity Machhindranath.",
    duration: "Several months (April-June)",
    significance: "Ensures timely monsoon rains for agriculture",
    traditions: ["Rato Machhindranath chariot", "Bhoto display", "Village-to-village procession"]
  },
  {
    name: "Bisket Jatra",
    description: "New Year festival in Bhaktapur featuring chariot pulling and tongue-piercing ceremonies.",
    duration: "9 days in April",
    significance: "Celebrates Nepalese New Year and victory over evil",
    traditions: ["Chariot pulling competition", "Tongue piercing", "Pole raising ceremony"]
  }
]

// Static lists that don't need translation
const hinduPractices = [
  "Daily worship (nitya puja) at household shrines",
  "Tantric rituals with mantras and yantras",
  "Temple festivals with chariot processions",
  "Life cycle rituals (samskaras)",
  "Pilgrimage to local and regional shrines",
  "Animal sacrifice in specific ceremonies"
]

const buddhistPractices = [
  "Sandhya arati (evening worship)",
  "Gunla fasting month observances",
  "Pancha Buddha worship",
  "Monastery-based rituals",
  "Life cycle ceremonies"
]

const spiritualityPrinciples = [
  "Harmony between religions (Hindu-Buddhist syncretism)",
  "Respect for all life forms (ahimsa)",
  "Importance of community (sangha)",
  "Maintenance of cosmic order (dharma)",
  "Practice of compassion (karuna)",
  "Pursuit of wisdom (prajna)"
]

export default function ReligionPage() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState('overview')

  
    const[isDarkMode, setIsDarkMode] = React.useState(false)
    const handleThemeToggle =()=>{
      setIsDarkMode(!isDarkMode)
      document.documentElement.classList.toggle("dark")
    }
  const miniNavItems = [
    { id: 'overview', label: t('religion.nav.overview'), icon: '🌄' },
    { id: 'hinduism', label: t('religion.nav.hinduism'), icon: '🕉️' },
    { id: 'buddhism', label: t('religion.nav.buddhism'), icon: '☸️' },
    { id: 'deities', label: t('religion.nav.deities'), icon: '🙏' },
    { id: 'rituals', label: t('religion.nav.rituals'), icon: '🕯️' },
    { id: 'festivals', label: t('religion.nav.festivals'), icon: '🎉' },
    { id: 'temples', label: t('religion.nav.temples'), icon: '🛕' },
    { id: 'spirituality', label: t('religion.nav.spirituality'), icon: '✨' },
    { id: 'resources', label: t('religion.nav.resources'), icon: '📚' }
  ]

  const handleDownloadRituals = () => {
    const link = document.createElement('a')
    link.href = 'https://dayafoundation.org.np/assets/files/Newari-Rituals-and-its-Procedure-Book-English.pdf'
    link.target = '_blank'
    link.download = 'Newari-Rituals-and-Procedures.pdf'
    link.click()
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleDownloadRituals}>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-red-800 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-devanagari">
            {t('religion.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            {t('religion.subtitle')}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {miniNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-shrink-0 px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                  activeSection === item.id
                    ? 'border-orange-500 text-orange-600 bg-orange-50'
                    : 'border-transparent text-gray-600 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <section className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">{t('religion.overview.title')}</h2>
                <p className="text-lg leading-relaxed mb-6">
                  {t('religion.overview.description1')}
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  {t('religion.overview.description2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('religion.overview.description3')}
                </p>
              </div>
              <div>
                <img 
                  src="/images/religion/newar-syncretism.jpg" 
                  alt="Newar religious harmony"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </section>
        )}

        {/* Hinduism Section */}
        {activeSection === 'hinduism' && (
          <section className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-4xl font-bold mb-6">{t('religion.hinduism.title')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('religion.hinduism.description1')}
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('religion.hinduism.description2')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('religion.hinduism.description3')}
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">{t('religion.hinduism.practices.title')}</h3>
                    <ul className="space-y-3">
                      {hinduPractices.map((practice, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Buddhism Section */}
        {activeSection === 'buddhism' && (
          <section className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-4xl font-bold mb-6">{t('religion.buddhism.title')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('religion.buddhism.description1')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('religion.buddhism.description2')}
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">{t('religion.buddhism.practices.title')}</h3>
                    <ul className="space-y-3">
                      {buddhistPractices.map((practice, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Deities Section */}
        {activeSection === 'deities' && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('religion.deities.title')}</h2>
              <p className="text-xl text-gray-600">{t('religion.deities.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deities.map((deity, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">{deity.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{deity.name}</h3>
                  <p className="text-gray-600 mb-4">{deity.description}</p>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">{t('religion.deities.significance')}</h4>
                    <p className="text-sm text-orange-700">{deity.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Rituals Section */}
        {activeSection === 'rituals' && (
          <section className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-4xl font-bold mb-6">{t('religion.rituals.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('religion.rituals.introduction')}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">{t('religion.rituals.download.title')}</h3>
                  <p className="text-gray-700 mb-4">{t('religion.rituals.download.description')}</p>
                  <button 
                    onClick={handleDownloadRituals}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t('religion.rituals.download.button')}
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rituals.map((ritual, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold mb-3">{ritual.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{ritual.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-3 w-3" />
                        <span>{ritual.timing}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-3 w-3" />
                        <span>{ritual.participants}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Festivals Section */}
        {activeSection === 'festivals' && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('religion.festivals.title')}</h2>
              <p className="text-xl text-gray-600">{t('religion.festivals.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {festivals.map((festival, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-3">{festival.name}</h3>
                  <p className="text-gray-700 mb-4">{festival.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-purple-700">
                      <Calendar className="h-4 w-4" />
                      <span>{festival.duration}</span>
                    </div>
                    <div className="text-sm text-purple-800 font-semibold">{festival.significance}</div>
                  </div>

                  <div className="border-t border-purple-200 pt-4">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm">{t('religion.festivals.traditions')}</h4>
                    <ul className="space-y-1">
                      {festival.traditions.slice(0, 3).map((tradition, tradIndex) => (
                        <li key={tradIndex} className="text-xs text-purple-700 flex items-center">
                          <span className="w-1 h-1 bg-purple-400 rounded-full mr-2"></span>
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Temples Section */}
        {activeSection === 'temples' && (
          <section className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold">{t('religion.temples.title')}</h2>
                <Link 
                  href="/culture/temples"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  {t('religion.temples.viewAll')}
                </Link>
              </div>
              <TemplesGallery />
            </div>
          </section>
        )}

        {/* Spirituality Section */}
        {activeSection === 'spirituality' && (
          <section className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-4xl font-bold mb-6">{t('religion.spirituality.title')}</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    {t('religion.spirituality.description1')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('religion.spirituality.description2')}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">{t('religion.spirituality.principles.title')}</h3>
                    <ul className="space-y-3">
                      {spiritualityPrinciples.map((principle, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Resources Section */}
        {activeSection === 'resources' && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t('religion.resources.title')}</h2>
              <p className="text-xl text-gray-600">{t('religion.resources.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-4">{t('religion.resources.books.title')}</h3>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {t('religion.resources.explore')}
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold mb-4">{t('religion.resources.videos.title')}</h3>
                <button className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  {t('religion.resources.watch')}
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-4">{t('religion.resources.institutions.title')}</h3>
                <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  {t('religion.resources.visit')}
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
    </PageLayout>
  )
}