import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET() {
  try {
    const db = getDatabase();
    const events = db.prepare('SELECT * FROM events ORDER BY date ASC').all();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, description, date, location } = await request.json();
    
    if (!title || !description || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = getDatabase();
    const result = db.prepare(
      'INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)'
    ).run(title, description, date, location);

    return NextResponse.json({ 
      id: result.lastInsertRowid,
      message: 'Event created successfully' 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
