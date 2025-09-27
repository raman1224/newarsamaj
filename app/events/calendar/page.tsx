// import NepalCalendar from '@/components/NepalCalendar';

// export default function CalendarPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <NepalCalendar />
//     </div>
//   );
// }



// app/calendar/page.tsx
'use client';

import { useState, useEffect } from 'react';
import YearView from '@/components/calendar/YearView';
import { getCurrentBSDate } from '@/lib/nepaliDateUtils';
import { useTranslation } from '@/hooks/useTranslation';
import PageLayout from '@/components/layout/page-layout';

interface CalendarPageProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function CalendarPage () {
  const [currentYear, setCurrentYear] = useState<number>(2081);
  const { t } = useTranslation(); // Only use t function

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleThemeToggle =()=>{
        setIsDarkMode(!isDarkMode)

    document.documentElement.classList.toggle("dark")
  }
  useEffect(() => {
    const currentBS = getCurrentBSDate();
    setCurrentYear(currentBS.year);
  }, []);

  return (
    
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>

    <div className={`min-h-screen py-8 transition-colors duration-300 `}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              {t('calendar.title')}
            </h1>
           
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('calendar.subtitle')} - Newar Samaj
          </p>
        </div>
        
        <YearView initialYear={currentYear} />
      </div>
    </div>
    </PageLayout>
  );
}