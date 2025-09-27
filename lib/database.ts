import { NepalCalendar } from '@/types/calendar';

// Simulating a database with JSON file storage
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'calendars.json');

export class CalendarDatabase {
    private ensureDataDirectory() {
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    async saveCalendars(calendars: NepalCalendar[]): Promise<void> {
        this.ensureDataDirectory();
        fs.writeFileSync(DATA_FILE, JSON.stringify(calendars, null, 2), 'utf8');
    }

    async loadCalendars(): Promise<NepalCalendar[]> {
        this.ensureDataDirectory();
        if (!fs.existsSync(DATA_FILE)) {
            return [];
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    }

    async getCalendar(year: number, month: number): Promise<NepalCalendar | null> {
        const calendars = await this.loadCalendars();
        return calendars.find(cal => cal.year === year && cal.month === month) || null;
    }

    async getAllCalendars(): Promise<NepalCalendar[]> {
        return await this.loadCalendars();
    }

    async searchCalendars(query: string): Promise<NepalCalendar[]> {
        const calendars = await this.loadCalendars();
        return calendars.filter(cal => 
            cal.monthName.toLowerCase().includes(query.toLowerCase()) ||
            cal.monthNameNepali.includes(query) ||
            cal.events.some(event => event.toLowerCase().includes(query.toLowerCase()))
        );
    }
}