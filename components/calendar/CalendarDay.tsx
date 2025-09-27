// components/calendar/CalendarDay.tsx
'use client';

import { CalendarDay as CalendarDayType } from '@/lib/nepaliDateUtils';
import { useTranslation } from '@/hooks/useTranslation';

interface CalendarDayProps {
  day: CalendarDayType;
  onDayClick: (day: CalendarDayType) => void;
  compact?: boolean;
}

export default function CalendarDay({ day, onDayClick, compact = false }: CalendarDayProps) {
  const { t } = useTranslation();
  const { bsDate, adDate, isToday, isHoliday, holidayName, events, tithi } = day;
  
  const isSaturday = adDate.getDay() === 6;
  const isSunday = adDate.getDay() === 0;

  const dayClasses = `
    relative p-1 border cursor-pointer transition-all duration-200 min-h-[80px]
    hover:shadow-lg hover:z-10 hover:scale-105
    ${isToday 
      ? 'bg-yellow-100 border-yellow-400 shadow-lg transform scale-105' 
      : 'bg-white border-gray-200'
    }
    ${isHoliday 
      ? 'bg-red-50 border-red-200' 
      : ''
    }
    ${isSaturday 
      ? 'bg-blue-50 border-blue-200' 
      : ''
    }
    dark:bg-gray-800 dark:border-gray-700
    ${isToday ? 'dark:bg-yellow-900' : ''}
  `;

  return (
    <div 
      className={dayClasses} 
      onClick={() => onDayClick(day)}
      title={`${holidayName ? holidayName + ' | ' : ''}${tithi} | AD: ${adDate.toDateString()}`}
    >
      {/* Date Number */}
      <div className="flex justify-between items-start mb-1">
        <span className={`
          font-bold text-lg
          ${isToday ? 'text-blue-600' : 'text-gray-800'}
          ${isHoliday ? 'text-red-600' : ''}
          ${isSaturday ? 'text-blue-600' : ''}
          dark:text-gray-200
        `}>
          {bsDate.day}
        </span>
        <span className={`text-xs ${
          isToday ? 'text-blue-600 font-bold' : 'text-gray-500'
        } dark:text-gray-400`}>
          {adDate.getDate()}
        </span>
      </div>

      {/* Tithi */}
      {!compact && (
        <div className="text-xs text-gray-600 mb-1 truncate dark:text-gray-400">
          {tithi}
        </div>
      )}

      {/* Holiday Indicator */}
      {isHoliday && holidayName && !compact && (
        <div className="text-xs bg-red-100 text-red-800 px-1 rounded mb-1 truncate dark:bg-red-900 dark:text-red-200">
          {holidayName}
        </div>
      )}

      {/* Events Indicator */}
      {events.length > 0 && (
        <div className="flex space-x-1">
          {events.slice(0, 2).map((event, index) => (
            <div 
              key={index} 
              className="text-xs bg-green-100 text-green-800 px-1 rounded truncate flex-1 dark:bg-green-900 dark:text-green-200"
            >
              ●
            </div>
          ))}
        </div>
      )}

      {/* Today Badge */}
      {isToday && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="text-xs bg-blue-600 text-white px-1 rounded dark:bg-blue-400 dark:text-blue-900">
            {t('calendar.today')}
          </div>
        </div>
      )}
    </div>
  );
}