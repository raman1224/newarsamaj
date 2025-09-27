// Nepali calendar (Bikram Sambat) utility functions

export interface BSDate {
  year: number
  month: number // 1-12
  monthName: string
  monthNameEn: string
  day: number
  dayOfWeek: string
}

export const bsMonths = [
  'बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 
  'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फागुन', 'चैत्र'
]

export const bsMonthsEn = [
  'Baisakh', 'Jestha', 'Asar', 'Shrawan', 'Bhadra', 'Asoj',
  'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
]

export const daysOfWeek = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार']
export const daysOfWeekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Simple conversion for demonstration (in real app, use proper BS-AD conversion library)
export function getBSDateFromAD(adDate: Date): BSDate {
  // This is a simplified conversion for demonstration
  // In production, use a proper BS calendar library
  const year = adDate.getFullYear() + 56
  const month = (adDate.getMonth() + 8) % 12 + 1
  const day = adDate.getDate()
  
  return {
    year,
    month,
    monthName: bsMonths[month - 1],
    monthNameEn: bsMonthsEn[month - 1],
    day,
    dayOfWeek: daysOfWeek[adDate.getDay()],
  }
}

export function formatBSDate(bsDate: BSDate, language: string): string {
  if (language === 'ne') {
    return `${bsDate.year} ${bsDate.monthName} ${bsDate.day} गते, ${bsDate.dayOfWeek}`
  } else if (language === 'new') {
    return `${bsDate.year} ${bsDate.monthName} ${bsDate.day} गते, ${bsDate.dayOfWeek}`
  }
  return `${bsDate.day} ${bsDate.monthNameEn}, ${bsDate.year} (${bsDate.dayOfWeek})`
}