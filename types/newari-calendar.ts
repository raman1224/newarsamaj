export interface NewariDate {
  englishDate: string;
  newariDate: string; // In Nepal Bhasa
  newariYear: number;
  newariMonth: string;
  newariDay: number;
  tithi?: string;
  nakhat?: string;
  event?: string;
  isToday?: boolean;
  isHoliday?: boolean;
  isFestival?: boolean;
}

export interface NewariCalendar {
  id: number;
  englishYear: number;
  newariYear: number; // Nepal Sambat
  month: number;
  monthName: string;
  monthNameNewari: string;
  calendarData: NewariDate[][];
  festivals: string[];
  importantDays: string[];
  scrapedUrl: string;
  scrapedAt: Date;
}