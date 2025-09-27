// components/calendar/YearView.tsx
'use client';

import { useState, useEffect } from 'react';
import { CalendarMonth as CalendarMonthType, getCurrentBSDate, generateBSYear } from '@/lib/nepaliDateUtils';
import CalendarMonth from './CalendarMonth';
import { useTranslation } from '@/hooks/useTranslation';

interface YearViewProps {
  initialYear: number;
}

export default function YearView({ initialYear }: YearViewProps) {
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [calendarData, setCalendarData] = useState<CalendarMonthType[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation(); // Only use t function

  useEffect(() => {
    loadCalendarData(currentYear);
  }, [currentYear]);

  const loadCalendarData = (year: number) => {
    setLoading(true);
    try {
      const data = generateBSYear(year);
      setCalendarData(data);
    } catch (error) {
      console.error('Failed to load calendar data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDayClick = (day: any) => {
    console.log('Selected day:', day);
  };

  const quickYears = [2080, 2081, 2082, 2083, 2084, 2085];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentYear(currentYear - 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={currentYear <= 2080}
            >
              ← {currentYear - 1}
            </button>
            
            <button
              onClick={() => setCurrentYear(currentYear + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={currentYear >= 2085}
            >
              {currentYear + 1} →
            </button>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t('calendar.title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{t('calendar.subtitle')}</p>
          </div>

          <button
            onClick={() => setCurrentYear(getCurrentBSDate().year)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {t('calendar.currentYear')}
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-center text-gray-800 dark:text-white">
            {t('calendar.selectYear')}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {quickYears.map(year => (
              <button
                key={year}
                onClick={() => setCurrentYear(year)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentYear === year 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {calendarData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendarData.map(month => (
            <CalendarMonth key={month.month} month={month} onDayClick={handleDayClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No calendar data available for {currentYear}
        </div>
      )}
    </div>
  );
}