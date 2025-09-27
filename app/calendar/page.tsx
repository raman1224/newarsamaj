// app/calendar/page.tsx
'use client';

import { useState, useEffect } from 'react';
import YearView from '@/components/calendar/YearView';
import { getCurrentBSDate } from '@/lib/nepaliDateUtils';
import { useTranslation } from '@/hooks/useTranslation';

interface CalendarPageProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function CalendarPage({ isDarkMode, onThemeToggle }: CalendarPageProps) {
  const [currentYear, setCurrentYear] = useState<number>(2081);
  const { t } = useTranslation(); // Only use t function

  useEffect(() => {
    const currentBS = getCurrentBSDate();
    setCurrentYear(currentBS.year);
  }, []);

  return (
    <div className={`min-h-screen py-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              {t('calendar.title')}
            </h1>
            <button
              onClick={onThemeToggle}
              className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('calendar.subtitle')} - Newar Samaj
          </p>
        </div>
        
        <YearView initialYear={currentYear} />
      </div>
    </div>
  );
}