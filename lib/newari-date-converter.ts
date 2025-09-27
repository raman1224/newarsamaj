import { NewariDate } from '@/types/newari-calendar';

export class NewariDateConverter {
  // Nepal Sambat starts from 879 AD
  private readonly NEPAL_SAMBAT_OFFSET = 879;

  // Newari month names in Nepal Bhasa
  private newariMonths = [
    'कछला', 'थिंला', 'पोहेला', 'सिला', 'चिला', 'चौला', 
    'बछला', 'तछला', 'दिल्ला', 'गुंला', 'ञला', 'कौला'
  ];

  // Newari day names
  private newariDays = [
    'आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनी'
  ];

  // Major Newari festivals
  private majorFestivals: {[key: string]: string} = {
    '01-01': 'योमरी पुन्हि',
    '01-08': 'स्वन्ति: नखः',
    '02-01': 'घ्यात्रु ख्वाः स्विगु',
    '04-01': 'श्री पञ्चमी',
    '05-15': 'म्हपि: जात्रा',
    '06-01': 'होली पुन्हि',
    '07-01': 'ल्हासा द्यः बज्य',
    '08-01': 'भैरव जात्रा',
    '08-15': 'मत्या जात्रा',
    '09-01': 'सपारु पुन्हि',
    '10-01': 'यन्हा पुन्हि',
    '11-01': 'कृष्ण जन्माष्टमी',
    '12-01': 'गुणला पुन्हि'
  };

  englishToNewari(englishDate: Date): NewariDate {
    const nsYear = this.englishToNepalSambat(englishDate);
    const nsMonth = this.getNewariMonth(englishDate);
    const nsDay = this.getNewariDay(englishDate);
    
    return {
      englishDate: englishDate.toISOString().split('T')[0],
      newariDate: this.formatNewariDate(nsYear, nsMonth, nsDay),
      newariYear: nsYear,
      newariMonth: this.newariMonths[nsMonth - 1],
      newariDay: nsDay,
      tithi: this.calculateTithi(englishDate),
      nakhat: this.calculateNakhat(englishDate),
      event: this.getFestival(nsMonth, nsDay),
      isToday: this.isToday(englishDate),
      isHoliday: this.isHoliday(englishDate),
      isFestival: !!this.getFestival(nsMonth, nsDay)
    };
  }

  private englishToNepalSambat(englishDate: Date): number {
    return englishDate.getFullYear() - this.NEPAL_SAMBAT_OFFSET;
  }

  private getNewariMonth(englishDate: Date): number {
    const month = englishDate.getMonth() + 1;
    return ((month + 7) % 12) + 1;
  }

  private getNewariDay(englishDate: Date): number {
    return englishDate.getDate();
  }

  private formatNewariDate(year: number, month: number, day: number): string {
    return `नेपाल संवत् ${year} ${this.newariMonths[month - 1]} ${day} गते`;
  }

  private calculateTithi(date: Date): string {
    const tithis = [
      'प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी',
      'षष्ठी', 'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी',
      'एकादशी', 'द्वादशी', 'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा', 'अमावस्या'
    ];
    const day = date.getDate();
    return tithis[(day - 1) % 16];
  }

  private calculateNakhat(date: Date): string {
    const nakhatras = [
      'अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा',
      'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा',
      'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी', 'हस्त', 'चित्रा', 'स्वाती',
      'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूल', 'पूर्वाषाढा',
      'उत्तराषाढा', 'श्रवण', 'धनिष्ठा', 'शतभिषा', 'पूर्वभाद्रपदा',
      'उत्तरभाद्रपदा', 'रेवती'
    ];
    const day = date.getDate();
    return nakhatras[(day - 1) % 27];
  }

  private getFestival(month: number, day: number): string | undefined {
    const key = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return this.majorFestivals[key];
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  private isHoliday(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || this.getFestival(
      this.getNewariMonth(date),
      this.getNewariDay(date)
    ) !== undefined;
  }

  generateNewariCalendar(year: number, month: number): NewariDate[][] {
    const calendar: NewariDate[][] = [];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    
    let currentWeek: NewariDate[] = [];
    
    const startDay = firstDay.getDay();
    for (let i = 0; i < startDay; i++) {
      currentWeek.push(this.getEmptyDate());
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month - 1, day);
      const newariDate = this.englishToNewari(currentDate);
      
      currentWeek.push(newariDate);
      
      if (currentWeek.length === 7) {
        calendar.push(currentWeek);
        currentWeek = [];
      }
    }
    
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(this.getEmptyDate());
      }
      calendar.push(currentWeek);
    }
    
    return calendar;
  }

  private getEmptyDate(): NewariDate {
    return {
      englishDate: '',
      newariDate: '',
      newariYear: 0,
      newariMonth: '',
      newariDay: 0,
      isToday: false,
      isHoliday: false
    };
  }
}