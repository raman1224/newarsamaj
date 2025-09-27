export interface CalendarDate {
  englishDate: string;
  nepaliDate: string;
  event?: string;
  tithi?: string;
  isToday?: boolean;
  isHoliday?: boolean;
}

export interface NepalCalendar {
  id: number;
  year: number;
  month: number;
  monthName: string;
  monthNameNepali: string;
  calendarData: CalendarDate[][];
  events: string[];
  holidays: string[];
  scrapedUrl: string;  // Make sure this line exists
  scrapedAt: Date;     // Make sure this line exists
}

export interface CalendarProps {
  selectedYear?: number;
  selectedMonth?: number;
  onDateSelect?: (date: CalendarDate) => void;
}

export interface ScrapingResult {
  success: boolean;
  message: string;
  calendars: number;
}