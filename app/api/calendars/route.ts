import { NextResponse } from 'next/server';
import { CalendarDatabase } from '@/lib/database';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');
    const month = searchParams.get('month');
    const search = searchParams.get('search');

    const database = new CalendarDatabase();

    if (search) {
      const results = await database.searchCalendars(search);
      return NextResponse.json({ success: true, data: results });
    }

    if (year && month) {
      const calendar = await database.getCalendar(parseInt(year), parseInt(month));
      return NextResponse.json({ success: true, data: calendar ? [calendar] : [] });
    }

    const allCalendars = await database.getAllCalendars();
    return NextResponse.json({ success: true, data: allCalendars });
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch calendars',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Add POST method to save test data
export async function POST() {
  try {
    const database = new CalendarDatabase();
    
    // Create test data
    const testCalendar = {
      id: 1,
      year: 2024,
      month: 1,
      monthName: 'Baisakh',
      monthNameNepali: 'बैशाख',
      calendarData: [[
        {
          englishDate: '2024-01-01',
          nepaliDate: '१ बैशाख २०८१',
          event: 'New Year',
          isToday: true,
          isHoliday: true
        }
      ]],
      events: ['New Year', 'Test Event'],
      holidays: ['Public Holiday'],
      scrapedUrl: 'https://www.nepal-lipi.com/nepal-calendars/1/',
      scrapedAt: new Date()
    };

    await database.saveCalendars([testCalendar]);
    
    return NextResponse.json({
      success: true,
      message: 'Test calendar data saved successfully'
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save test data',
        details: error.message 
      },
      { status: 500 }
    );
  }
}