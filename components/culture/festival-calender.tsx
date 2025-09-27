// components/culture/festival-calendar.tsx
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface FestivalEvent {
  id: number
  name: string
  date: Date
  endDate?: Date
  location: string
  duration: string
  category: string
  nepaliDate: string
}

interface NepaliDateInfo {
  year: number
  month: number
  day: number
  monthName: string
  dayName: string
  isHoliday: boolean
  holidayName?: string
  events: string[]
}

export function FestivalCalendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const { t } = useTranslation()

  // Nepali calendar data for 2081 BS (2024 AD)
  const nepaliMonths = [
    'बैशाख', 'जेठ', 'असार', 'श्रावण', 'भाद्र', 'आश्विन', 
    'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'
  ]

  const nepaliDays = [
    'आइतवार', 'सोमवार', 'मंगलवार', 'बुधवार', 
    'बिहिवार', 'शुक्रवार', 'शनिवार'
  ]

  // Major Nepali festivals and events for 2081 BS
  const nepaliFestivals: FestivalEvent[] = [
    {
      id: 1,
      name: "नेपाली नयाँ वर्ष (बैशाख १)",
      date: new Date(2024, 3, 14),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "राष्ट्रिय",
      nepaliDate: "बैशाख १, २०८१"
    },
    {
      id: 2,
      name: "लोकतन्त्र दिवस",
      date: new Date(2024, 3, 25),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "राष्ट्रिय",
      nepaliDate: "बैशाख १२, २०८१"
    },
    {
      id: 3,
      name: "बुद्ध जयन्ती",
      date: new Date(2024, 4, 23),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "जेठ १०, २०८१"
    },
    {
      id: 4,
      name: "जनैपूर्णिमा",
      date: new Date(2024, 7, 19),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "श्रावण ३, २०८१"
    },
    {
      id: 5,
      name: "गाईजात्रा",
      date: new Date(2024, 7, 20),
      location: "काठमाडौं",
      duration: "1 दिन",
      category: "सांस्कृतिक",
      nepaliDate: "श्रावण ४, २०८१"
    },
    {
      id: 6,
      name: "कृष्ण जन्माष्टमी",
      date: new Date(2024, 7, 26),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "श्रावण १०, २०८१"
    },
    {
      id: 7,
      name: "तेज",
      date: new Date(2024, 8, 8),
      location: "सम्पूर्ण नेपाल",
      duration: "3 दिन",
      category: "धार्मिक",
      nepaliDate: "भाद्र २३, २०८१"
    },
    {
      id: 8,
      name: "इन्द्रजात्रा",
      date: new Date(2024, 8, 26),
      endDate: new Date(2024, 8, 28),
      location: "काठमाडौं",
      duration: "3 दिन",
      category: "सांस्कृतिक",
      nepaliDate: "आश्विन १०-१२, २०८१"
    },
    {
      id: 9,
      name: "दशैं",
      date: new Date(2024, 9, 3),
      endDate: new Date(2024, 9, 12),
      location: "सम्पूर्ण नेपाल",
      duration: "10 दिन",
      category: "धार्मिक",
      nepaliDate: "आश्विन १७-२६, २०८१"
    },
    {
      id: 10,
      name: "तिहार",
      date: new Date(2024, 9, 31),
      endDate: new Date(2024, 10, 2),
      location: "सम्पूर्ण नेपाल",
      duration: "5 दिन",
      category: "धार्मिक",
      nepaliDate: "कार्तिक १४-१८, २०८१"
    },
    {
      id: 11,
      name: "चाड",
      date: new Date(2024, 9, 1),
      location: "तराई क्षेत्र",
      duration: "1 दिन",
      category: "सांस्कृतिक",
      nepaliDate: "आश्विन १५, २०८१"
    },
    {
      id: 12,
      name: "माघे संक्रान्ति",
      date: new Date(2025, 0, 15),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "सांस्कृतिक",
      nepaliDate: "माघ १, २०८१"
    },
    {
      id: 13,
      name: "वसन्त पञ्चमी",
      date: new Date(2025, 1, 2),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "माघ १९, २०८१"
    },
    {
      id: 14,
      name: "शिवरात्रि",
      date: new Date(2025, 1, 26),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "फागुन १३, २०८१"
    },
    {
      id: 15,
      name: "होली",
      date: new Date(2025, 2, 14),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "चैत्र १, २०८१"
    },
    {
      id: 16,
      name: "घोडेजात्रा",
      date: new Date(2024, 8, 27),
      location: "काठमाडौं",
      duration: "1 दिन",
      category: "सांस्कृतिक",
      nepaliDate: "आश्विन ११, २०८१"
    },
    {
      id: 17,
      name: "रामनवमी",
      date: new Date(2024, 3, 17),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "बैशाख ४, २०८१"
    },
    {
      id: 18,
      name: "विश्वकर्मा पूजा",
      date: new Date(2024, 8, 16),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "आश्विन ३१, २०८१"
    },
    {
      id: 19,
      name: "गुरुपूर्णिमा",
      date: new Date(2024, 6, 21),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "आषाढ ६, २०८१"
    },
    {
      id: 20,
      name: "जन्माष्टमी",
      date: new Date(2024, 7, 26),
      location: "सम्पूर्ण नेपाल",
      duration: "1 दिन",
      category: "धार्मिक",
      nepaliDate: "श्रावण १०, २०८१"
    }
  ]

  // Function to convert AD to BS (simplified version)
  const getNepaliDate = (adDate: Date): NepaliDateInfo => {
    // This is a simplified conversion - in production, use a proper library
    const year = adDate.getFullYear() + 56
    const month = (adDate.getMonth() + 9) % 12
    const day = adDate.getDate()
    
    const festivalsToday = nepaliFestivals.filter(f => 
      f.date.getDate() === adDate.getDate() && 
      f.date.getMonth() === adDate.getMonth() && 
      f.date.getFullYear() === adDate.getFullYear()
    )

    return {
      year,
      month: month + 1,
      day,
      monthName: nepaliMonths[month],
      dayName: nepaliDays[adDate.getDay()],
      isHoliday: festivalsToday.length > 0,
      holidayName: festivalsToday[0]?.name,
      events: festivalsToday.map(f => f.name)
    }
  }

  const getMonthName = (date: Date) => {
    const nepaliDate = getNepaliDate(date)
    return `${nepaliDate.monthName} ${nepaliDate.year}`
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)

  // Nepali day names (short form)
  const nepaliDayNames = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि']

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold text-nepali">{getMonthName(currentDate)}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
              {t('culture.calendar.today') || 'आज'}
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Nepali Calendar Header */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {nepaliDayNames.map(day => (
            <div key={day} className="text-center font-medium text-sm text-gray-600 py-2 bg-gray-100 rounded">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty days for the first week */}
          {Array.from({ length: firstDay }).map((_, index) => (
            <div key={`empty-${index}`} className="h-24 border rounded-lg bg-gray-50" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            const nepaliDate = getNepaliDate(date)
            const dayFestivals = nepaliFestivals.filter(f => 
              f.date.getDate() === day && 
              f.date.getMonth() === currentDate.getMonth() && 
              f.date.getFullYear() === currentDate.getFullYear()
            )
            
            const isToday = new Date().toDateString() === date.toDateString()
            
            return (
              <div 
                key={day} 
                className={`h-24 border rounded-lg p-1 overflow-hidden ${
                  isToday ? 'bg-blue-50 border-blue-200' : 'bg-white'
                } ${nepaliDate.isHoliday ? 'border-orange-200 bg-orange-50' : ''}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                    {day}
                  </span>
                  <span className="text-xs text-gray-500">
                    {nepaliDate.day}
                  </span>
                </div>
                <div className="space-y-1 max-h-16 overflow-y-auto">
                  {dayFestivals.map(festival => (
                    <div 
                      key={festival.id} 
                      className="text-xs bg-orange-100 text-orange-800 rounded px-1 py-0.5 truncate cursor-pointer hover:bg-orange-200"
                      title={festival.name}
                    >
                      {festival.name.length > 12 ? festival.name.substring(0, 10) + '...' : festival.name}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-100 border border-orange-200 rounded"></div>
            <span>पर्व/चाड (Festivals)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
            <span>आज (Today)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}