// components/calendar/CalendarMonth.tsx
'use client';

import { CalendarMonth as CalendarMonthType, getWeekDays } from '@/lib/nepaliDateUtils';
import CalendarDay from './CalendarDay';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/context/LanguageContext'; // Import your actual hook

interface CalendarMonthProps {
  month: CalendarMonthType;
  onDayClick: (day: CalendarMonthType['days'][0]) => void;
  compact?: boolean;
}

export default function CalendarMonth({ month, onDayClick, compact = false }: CalendarMonthProps) {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage(); // Use your actual hook here
  
  const weekDays = getWeekDays(currentLanguage);

  const firstDay = month.days[0]?.adDate.getDay() || 0;
  const emptyCells = Array(firstDay).fill(null);

  const getMonthDisplayName = () => {
    switch (currentLanguage) {
      case 'en': return month.monthName;
      case 'ne': return month.monthNameNepali;
      case 'new': return month.monthNameNewa;
      default: return month.monthNameNepali;
    }
  };

  return (
    <div className={`
      bg-white rounded-xl shadow-lg p-4 mb-6 border border-gray-100 
      dark:bg-gray-900 dark:border-gray-800
      ${compact ? 'max-w-md mx-auto' : ''}
    `}>
      <h2 className="font-bold text-gray-800 mb-4 text-center dark:text-white">
        <div className="text-2xl text-blue-600 dark:text-blue-400">{getMonthDisplayName()}</div>
        <div className="text-lg text-gray-600 dark:text-gray-400">{month.year}</div>
      </h2>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, index) => (
          <div 
            key={day} 
            className={`
              p-2 text-center font-semibold text-sm
              ${index === 0 ? 'text-red-600' : 'text-gray-600'}
              ${index === 6 ? 'text-blue-600' : ''}
              dark:text-gray-300
            `}
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="h-20 border border-transparent" />
        ))}
        
        {month.days.map(day => (
          <CalendarDay 
            key={`${day.bsDate.year}-${day.bsDate.month}-${day.bsDate.day}`} 
            day={day} 
            onDayClick={onDayClick}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
}