'use client';

import React, { useState, useEffect } from 'react';
import { NepalCalendar, CalendarDate, CalendarProps } from '@/types/calendar';
import { calendarService } from '@/services/calendarService';

const NepalCalendarComponent: React.FC<CalendarProps> = ({
  selectedYear,
  selectedMonth,
  onDateSelect
}) => {
  const [calendar, setCalendar] = useState<NepalCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    loadCalendar();
  }, [selectedYear, selectedMonth]);

  const loadCalendar = async () => {
    setLoading(true);
    try {
      const calendarData = await calendarService.getCalendar(selectedYear, selectedMonth);
      setCalendar(calendarData);
    } catch (error) {
      console.error('Error loading calendar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateClick = (date: CalendarDate) => {
    onDateSelect?.(date);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
    loadCalendar();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!calendar) {
    return (
      <div className="text-center text-red-600 p-4">
        Could not load calendar data
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {calendar.monthName} {calendar.year}
          </h2>
          <h3 className="text-lg text-gray-600">
            {calendar.monthNameNepali} {calendar.year}
          </h3>
        </div>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendar.calendarData.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`min-h-20 p-2 border rounded-lg transition-all cursor-pointer
                  ${day ? 'hover:bg-gray-50' : 'bg-gray-50'}
                  ${day?.isToday ? 'bg-blue-50 border-blue-200' : ''}
                  ${day?.isHoliday ? 'bg-red-50 border-red-200' : ''}
                `}
                onClick={() => day && handleDateClick(day)}
              >
                {day && (
                  <>
                    <div className="text-right">
                      <span className={`text-sm font-medium
                        ${day.isToday ? 'text-blue-600' : 'text-gray-700'}
                        ${day.isHoliday ? 'text-red-600' : ''}
                      `}>
                        {new Date(day.englishDate).getDate()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {day.nepaliDate.split(' ')[0]} {/* Show only day number in Nepali */}
                    </div>
                    {day.event && (
                      <div className="text-xs bg-green-100 text-green-800 px-1 rounded mt-1 truncate">
                        {day.event}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Events & Holidays Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Events this Month</h4>
          <ul className="space-y-1">
            {calendar.events.map((event, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {event}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Holidays</h4>
          <ul className="space-y-1">
            {calendar.holidays.map((holiday, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {holiday}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NepalCalendarComponent;