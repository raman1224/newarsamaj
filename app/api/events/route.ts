// app/api/events/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo - replace with your database
let events: any[] = [];

export async function GET(request: NextRequest) {
  try {
    // Return empty events for now - you can integrate with your database later
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Simple event storage for demo
    const newEvent = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date()
    };
    events.push(newEvent);
    
    return NextResponse.json(newEvent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}