'use client';

import { useState, useEffect } from 'react';
import { NepalCalendar as NepalCalendarType, CalendarDate } from '@/types/calendar';

export default function NepalCalendar() {
  const [calendars, setCalendars] = useState<NepalCalendarType[]>([]);
  const [currentCalendar, setCurrentCalendar] = useState<NepalCalendarType | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);

  useEffect(() => {
    loadCalendars();
  }, []);

  useEffect(() => {
    if (calendars.length > 0) {
      const calendar = calendars.find(cal => 
        cal.year === selectedYear && cal.month === selectedMonth
      );
      setCurrentCalendar(calendar || calendars[0]);
    }
  }, [calendars, selectedYear, selectedMonth]);

  const loadCalendars = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/calendars');
      const result = await response.json();
      
      if (result.success) {
        setCalendars(result.data);
      }
    } catch (error) {
      console.error('Error loading calendars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateSelect = (date: CalendarDate) => {
    console.log('Selected date:', date);
    // You can show modal or details for the selected date
  };

  const navigateCalendar = (direction: 'prev' | 'next') => {
    if (!currentCalendar) return;

    let newYear = selectedYear;
    let newMonth = selectedMonth;

    if (direction === 'prev') {
      newMonth--;
      if (newMonth < 1) {
        newMonth = 12;
        newYear--;
      }
    } else {
      newMonth++;
      if (newMonth > 12) {
        newMonth = 1;
        newYear++;
      }
    }

    setSelectedYear(newYear);
    setSelectedMonth(newMonth);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">पात्रो ल्याइदै... Loading calendar...</p>
        </div>
      </div>
    );
  }

  if (!currentCalendar) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">पात्रो भेटिएन</h2>
          <p className="text-gray-600">कृपया पात्रो डाटा लोड गर्न प्रयास गर्नुहोस्।</p>
          <button 
            onClick={loadCalendars}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
          >
            पुनः प्रयास गर्नुहोस्
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          नेपाली पात्रो
        </h1>
        <p className="text-lg text-gray-600">
          Nepal Calendar - Traditional Nepali Dates and Events
        </p>
      </div>

      {/* Calendar Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigateCalendar('prev')}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            अघिल्लो महिना
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentCalendar.monthName} {currentCalendar.year}
            </h2>
            <h3 className="text-xl text-gray-600">
              {currentCalendar.monthNameNepali} {currentCalendar.year}
            </h3>
          </div>

          <button
            onClick={() => navigateCalendar('next')}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            अर्को महिना
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Calendar Grid */}
        <CalendarGrid 
          calendarData={currentCalendar.calendarData} 
          onDateSelect={handleDateSelect}
        />
      </div>

      {/* Events and Holidays Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <EventsSection events={currentCalendar.events} />
        <HolidaysSection holidays={currentCalendar.holidays} />
      </div>

      {/* Calendar List */}
      <CalendarList 
        calendars={calendars}
        selectedCalendar={currentCalendar}
        onCalendarSelect={(cal) => {
          setSelectedYear(cal.year);
          setSelectedMonth(cal.month);
        }}
      />
    </div>
  );
}

// Calendar Grid Component
function CalendarGrid({ 
  calendarData, 
  onDateSelect 
}: { 
  calendarData: CalendarDate[][];
  onDateSelect: (date: CalendarDate) => void;
}) {
  const daysOfWeek = ['आइतवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'बिहिवार', 'शुक्रवार', 'शनिवार'];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* Days Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center font-semibold text-gray-700 bg-gray-100 py-3 rounded">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarData.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <CalendarDay 
                key={`${weekIndex}-${dayIndex}`} 
                day={day} 
                onSelect={onDateSelect}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Calendar Day Component
function CalendarDay({ 
  day, 
  onSelect 
}: { 
  day: CalendarDate | null;
  onSelect: (date: CalendarDate) => void;
}) {
  if (!day) {
    return <div className="min-h-20 p-2 bg-gray-50 rounded"></div>;
  }

  return (
    <div
      className={`min-h-20 p-2 border rounded-lg transition-all cursor-pointer
        ${day.isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'}
        ${day.isHoliday ? 'bg-red-50 border-red-300' : ''}
        hover:shadow-md`}
      onClick={() => onSelect(day)}
    >
      <div className="flex justify-between items-start">
        <span className={`text-sm font-medium
          ${day.isToday ? 'text-blue-600' : 'text-gray-700'}
          ${day.isHoliday ? 'text-red-600' : ''}
        `}>
          {new Date(day.englishDate).getDate()}
        </span>
        {day.event && (
          <span className="text-xs bg-green-100 text-green-800 px-1 rounded">Event</span>
        )}
      </div>
      
      <div className="text-xs text-gray-500 mt-1">
        {day.nepaliDate.split(' ')[0]} {/* Show Nepali day number */}
      </div>
      
      {day.tithi && (
        <div className="text-xs text-purple-600 mt-1 truncate">
          {day.tithi}
        </div>
      )}
      
      {day.event && (
        <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 truncate">
          {day.event}
        </div>
      )}
    </div>
  );
}

// Events Section Component
function EventsSection({ events }: { events: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        आगामी कार्यक्रमहरू
      </h3>
      <ul className="space-y-2">
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-700">{event}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center py-4">कुनै कार्यक्रमहरू भेटिएन</li>
        )}
      </ul>
    </div>
  );
}

// Holidays Section Component
function HolidaysSection({ holidays }: { holidays: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        विदा तथा चाडपर्वहरू
      </h3>
      <ul className="space-y-2">
        {holidays.length > 0 ? (
          holidays.map((holiday, index) => (
            <li key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-gray-700">{holiday}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center py-4">कुनै विदाहरू भेटिएन</li>
        )}
      </ul>
    </div>
  );
}

// Calendar List Component
function CalendarList({ 
  calendars, 
  selectedCalendar, 
  onCalendarSelect 
}: { 
  calendars: NepalCalendarType[];
  selectedCalendar: NepalCalendarType;
  onCalendarSelect: (calendar: NepalCalendarType) => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        उपलब्ध पात्रोहरू ({calendars.length})
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calendars.map(calendar => (
          <button
            key={calendar.id}
            onClick={() => onCalendarSelect(calendar)}
            className={`p-4 border rounded-lg text-left transition-all ${
              calendar.id === selectedCalendar.id 
                ? 'bg-blue-50 border-blue-300' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="font-semibold text-gray-800">
              {calendar.monthName} {calendar.year}
            </div>
            <div className="text-sm text-gray-600">
              {calendar.monthNameNepali}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {calendar.events.length} events • {calendar.holidays.length} holidays
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}