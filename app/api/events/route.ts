import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  try {
    const events = db.prepare('SELECT * FROM events ORDER BY date DESC').all()
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get events' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, date, location } = await request.json()
    
    const stmt = db.prepare('INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)')
    const result = stmt.run(title, description, date, location || null)
    
    return NextResponse.json({ 
      id: result.lastInsertRowid,
      title,
      description,
      date,
      location
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
