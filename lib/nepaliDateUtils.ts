// lib/nepaliDateUtils.ts
export interface BSDate {
  year: number;
  month: number;
  day: number;
}

export interface CalendarDay {
  bsDate: BSDate;
  adDate: Date;
  isToday: boolean;
  isHoliday: boolean;
  holidayName?: string;
  events: any[];
  tithi?: string;
}

export interface CalendarMonth {
  year: number;
  month: number;
  monthName: string;
  monthNameNepali: string;
  monthNameNewa: string;
  days: CalendarDay[];
}

// Nepali calendar data with exact days
const nepaliCalendarData: { [key: number]: number[] } = {
  2080: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2081: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2082: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2083: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2084: [31, 31, 32, 30, 31, 31, 30, 29, 30, 29, 30, 30],
  2085: [31, 31, 32, 32, 30, 31, 30, 29, 30, 29, 30, 30]
};

// Major Nepali holidays
const nepaliHolidays: { [key: string]: string } = {
  '1-1': 'नयाँ वर्ष',
  '1-9': 'लोकतन्त्र दिवस',
  '1-15': 'माघे संक्रान्ति',
  '3-8': 'छत्रपति शाहिद दिवस',
  '3-15': 'फागु पुन्हि',
  '4-1': 'घटस्थापना',
  '4-9': 'फुलपाती',
  '4-10': 'महाष्टमी',
  '4-11': 'महानवमी',
  '4-12': 'बिजयादशमी',
  '7-15': 'तिहार',
  '7-23': 'भाई टीका',
  '8-29': 'संविधान दिवस',
  '11-11': 'श्री स्वस्थानी ब्रत',
  '12-11': 'शिवरात्री'
};

// Tithi data
const tithiData: string[] = [
  'प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी',
  'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी',
  'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा',
  'प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी',
  'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी',
  'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'अमावस्या'
];

// Reference date for conversion
const REFERENCE_BS: BSDate = { year: 2081, month: 1, day: 1 };
const REFERENCE_AD = new Date(2024, 3, 13);

export function bsToAd(bsDate: BSDate): Date {
  let totalDays = 0;
  
  for (let year = REFERENCE_BS.year; year < bsDate.year; year++) {
    totalDays += nepaliCalendarData[year]?.reduce((sum, days) => sum + days, 0) || 365;
  }
  
  for (let month = 1; month < bsDate.month; month++) {
    totalDays += nepaliCalendarData[bsDate.year]?.[month - 1] || 30;
  }
  
  totalDays += (bsDate.day - REFERENCE_BS.day);
  
  const adDate = new Date(REFERENCE_AD);
  adDate.setDate(adDate.getDate() + totalDays);
  return adDate;
}

export function adToBs(adDate: Date): BSDate {
  const diffTime = adDate.getTime() - REFERENCE_AD.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  let remainingDays = diffDays;
  let year = REFERENCE_BS.year;
  let month = REFERENCE_BS.month;
  let day = REFERENCE_BS.day;
  
  day += remainingDays;
  
  while (true) {
    const daysInMonth = nepaliCalendarData[year]?.[month - 1] || 30;
    if (day > daysInMonth) {
      day -= daysInMonth;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    } else {
      break;
    }
  }
  
  return { year, month, day };
}

export function getCurrentBSDate(): BSDate {
  return adToBs(new Date());
}

export function isHoliday(bsDate: BSDate): { isHoliday: boolean; holidayName?: string } {
  const saturday = bsToAd(bsDate).getDay() === 6;
  const holidayKey = `${bsDate.month}-${bsDate.day}`;
  const fixedHoliday = nepaliHolidays[holidayKey];
  
  if (saturday || fixedHoliday) {
    return { 
      isHoliday: true, 
      holidayName: fixedHoliday || 'साप्ताहिक बिदा' 
    };
  }
  
  return { isHoliday: false };
}

export function getTithi(bsDate: BSDate): string {
  const dayOfMonth = bsDate.day;
  return tithiData[(dayOfMonth - 1) % tithiData.length];
}

export function generateBSYear(year: number): CalendarMonth[] {
  const months: CalendarMonth[] = [];
  const yearData = nepaliCalendarData[year];

  if (!yearData) return [];

  const monthNamesEn = ['Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
  const monthNamesNe = ['बैशाख', 'जेठ', 'असार', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'];
  const monthNamesNew = ['बैशाख', 'जेठ', 'असार', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'];

  for (let month = 1; month <= 12; month++) {
    const daysInMonth = yearData[month - 1];
    const monthData: CalendarMonth = {
      year,
      month,
      monthName: monthNamesEn[month - 1],
      monthNameNepali: monthNamesNe[month - 1],
      monthNameNewa: monthNamesNew[month - 1],
      days: []
    };

    for (let day = 1; day <= daysInMonth; day++) {
      const bsDate: BSDate = { year, month, day };
      const adDate = bsToAd(bsDate);
      const today = new Date();
      const isToday = today.toDateString() === adDate.toDateString();
      const holidayInfo = isHoliday(bsDate);
      const tithi = getTithi(bsDate);

      monthData.days.push({
        bsDate,
        adDate,
        isToday,
        isHoliday: holidayInfo.isHoliday,
        holidayName: holidayInfo.holidayName,
        events: [],
        tithi
      });
    }

    months.push(monthData);
  }

  return months;
}

// Helper function to get week days based on language
export function getWeekDays(language: string): string[] {
  const weekDaysMap: { [key: string]: string[] } = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ne: ['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि'],
    new: ['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि']
  };
  
  return weekDaysMap[language] || weekDaysMap.ne; // Default to Nepali
}