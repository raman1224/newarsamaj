'use client'

import { useState, useEffect } from 'react'
import PageLayout from '@/components/layout/page-layout'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/context/LanguageContext'
import { getBSDateFromAD, formatBSDate, BSDate } from '@/utils/bsCalendar'

interface Event {
  id: number
  title: string
  description: string
  date: string // AD date string
  bsDate: BSDate
  time: string
  location: string
  type: 'monthly' | 'festival' | 'youth' | 'heritage' | 'language' | 'workshop'
  attendees: number
  image: string
  isFeatured: boolean
  locationType: 'bhattathok' | 'nuwakot' | 'kathmandu' | 'samajBuilding'
}

export default function UpcomingEventsPage() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode]= useState(false)

  const handleThemeToggle =()=>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  useEffect(() => {
    // Sample events with BS dates
    const sampleEvents: Omit<Event, 'bsDate'>[] = [
      {
        id: 1,
        title: t('events.monthlyMeeting'),
        description: t('events.meetingDescription'),
        date: '2024-02-15',
        time: '10:00 AM - 2:00 PM',
        location: t('common.location.bhattathok'),
        type: 'monthly',
        attendees: 85,
        image: '/api/placeholder/400/250',
        isFeatured: true,
        locationType: 'bhattathok'
      },
      {
        id: 2,
        title: t('events.languageSchool'),
        description: t('events.languageDescription'),
        date: '2024-02-20',
        time: '3:00 PM - 5:00 PM',
        location: t('common.location.samajBuilding'),
        type: 'language',
        attendees: 45,
        image: '/api/placeholder/400/250',
        isFeatured: false,
        locationType: 'samajBuilding'
      },
      {
        id: 3,
        title: t('events.culturalWorkshop'),
        description: t('events.workshopDescription'),
        date: '2024-02-25',
        time: '11:00 AM - 4:00 PM',
        location: t('common.location.bhattathok'),
        type: 'workshop',
        attendees: 60,
        image: '/api/placeholder/400/250',
        isFeatured: true,
        locationType: 'bhattathok'
      },
      {
        id: 4,
        title: t('events.heritageTour'),
        description: t('events.heritageDescription'),
        date: '2024-03-05',
        time: '8:00 AM - 6:00 PM',
        location: t('common.location.nuwakot'),
        type: 'heritage',
        attendees: 40,
        image: '/api/placeholder/400/250',
        isFeatured: false,
        locationType: 'nuwakot'
      },
      {
        id: 5,
        title: t('events.culturalFestival'),
        description: t('events.festivalDescription'),
        date: '2024-03-15',
        time: '9:00 AM - 8:00 PM',
        location: t('common.location.bhattathok'),
        type: 'festival',
        attendees: 300,
        image: '/api/placeholder/400/250',
        isFeatured: true,
        locationType: 'bhattathok'
      }
    ]

    // Add BS dates to events
    const eventsWithBS = sampleEvents.map(event => ({
      ...event,
      bsDate: getBSDateFromAD(new Date(event.date))
    }))

    setTimeout(() => {
      setEvents(eventsWithBS as Event[])
      setIsLoading(false)
    }, 1000)
  }, [t])

  const getEventTypeColor = (type: string) => {
    const colors = {
      monthly: 'from-blue-900 to-blue-700',
      festival: 'from-red-900 to-red-700',
      youth: 'from-green-900 to-green-700',
      heritage: 'from-purple-900 to-purple-700',
      language: 'from-amber-900 to-amber-700',
      workshop: 'from-teal-900 to-teal-700'
    }
    return colors[type as keyof typeof colors] || 'from-gray-900 to-gray-700'
  }

  const getEventTypeBadge = (type: string) => {
    const badges = {
      monthly: t('common.monthly'),
      festival: t('common.annual'),
      youth: t('common.quarterly'),
      heritage: t('common.quarterly'),
      language: t('common.weekly'),
      workshop: t('common.monthly')
    }
    return badges[type as keyof typeof badges] || 'Event'
  }

  const getLocationColor = (locationType: string) => {
    const colors = {
      bhattathok: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      nuwakot: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      kathmandu: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      samajBuilding: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
    }
    return colors[locationType as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  if (isLoading) {
    return (
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-stone-600 mx-auto mb-4"></div>
            <p className="text-stone-600 dark:text-stone-300 text-lg">{t('events.loading') || 'Loading events...'}</p>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 text-white py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              {t('events.upcomingEvents')}
            </h1>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              भट्टाथोक नेवार समाजको कार्यक्रमहरू - Bhattathok Newar Samaj Events
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="container mx-auto px-4 py-12 -mt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white dark:bg-stone-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-200 dark:border-stone-700"
              >
                {/* Event Header */}
                <div className={`relative h-48 bg-gradient-to-r ${getEventTypeColor(event.type)} rounded-t-xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {getEventTypeBadge(event.type)}
                  </div>
                  
                  {/* Featured Badge */}
                  {event.isFeatured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}

                  {/* Event Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif font-bold text-white line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  {/* Date and Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon />
                      <div>
                        <div className="font-semibold text-stone-900 dark:text-stone-100">
                          {formatBSDate(event.bsDate, currentLanguage)}
                        </div>
                        <div className="text-sm text-stone-600 dark:text-stone-400">
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center mb-4">
                    <LocationIcon />
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getLocationColor(event.locationType)}`}>
                      {event.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Attendees and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-stone-500 dark:text-stone-500 text-sm">
                      <UsersIcon />
                      <span className="ml-2">{event.attendees} {t('events.attendees')}</span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="bg-stone-800 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                      {t('events.viewDetails')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Samaj Building Progress Section */}
        <div className="bg-white dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">
                नेवार समाज भवन निर्माण प्रगति
              </h2>
              <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                भट्टाथोक, लिखु नगरपालिकामा नेवार समाजको सांस्कृतिक केन्द्र र भाषा विद्यालयको निर्माणाधीन परियोजना
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-stone-50 dark:bg-stone-700 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">७५%</div>
                <div className="text-stone-800 dark:text-stone-200 font-semibold">निर्माण प्रगति</div>
                <div className="w-full bg-stone-200 dark:bg-stone-600 rounded-full h-2 mt-4">
                  <div className="bg-amber-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="text-center p-6 bg-stone-50 dark:bg-stone-700 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">२०+</div>
                <div className="text-stone-800 dark:text-stone-200 font-semibold">सांस्कृतिक कार्यक्रम</div>
                <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">आयोजना गरिएका</p>
              </div>

              <div className="text-center p-6 bg-stone-50 dark:bg-stone-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">१५०+</div>
                <div className="text-stone-800 dark:text-stone-200 font-semibold">सक्रिय सदस्य</div>
                <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">समुदायका</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">सम्पर्क गर्नुहोस्</h2>
            <p className="text-stone-200 mb-8 max-w-2xl mx-auto">
              भट्टाथोक नेवार समाजसँग जोडिन र कार्यक्रमको अपडेट प्राप्त गर्न
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61579052624200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <FacebookIcon />
                <span>Facebook पेज</span>
              </a>
              
              <div className="text-stone-300">
                <div>भट्टाथोक, लिखु नगरपालिका, नुवाकोट</div>
                <div className="text-sm">नेवार समाज कार्यालय</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} t={t} currentLanguage={currentLanguage} />
      )}
    </PageLayout>
  )
}

// Icon Components
function CalendarIcon() {
  return (
    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

// Event Modal Component
function EventModal({ event, onClose, t, currentLanguage }: { event: Event; onClose: () => void; t: (key: string) => string; currentLanguage: string }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-stone-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className={`h-48 bg-gradient-to-r from-stone-700 to-stone-900 rounded-t-xl`}></div>
          
          <div className="p-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4">{event.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <CalendarIcon />
                <div className="ml-3">
                  <div className="font-semibold text-stone-900 dark:text-stone-100">
                    {formatBSDate(event.bsDate, currentLanguage)}
                  </div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">{event.time}</div>
                </div>
              </div>
              <div className="flex items-center">
                <LocationIcon />
                <span className="ml-3 text-stone-700 dark:text-stone-300">{event.location}</span>
              </div>
            </div>
            
            <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">{event.description}</p>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-stone-800 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200">
                {t('events.register')}
              </button>
              <button className="flex-1 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 px-4 py-3 rounded-lg font-semibold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors duration-200">
                {t('events.addToCalendar')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}