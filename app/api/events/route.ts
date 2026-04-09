import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM events 
      ORDER BY date DESC
    `
    return NextResponse.json(rows)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, date, location } = await request.json()
    
    await sql`
      INSERT INTO events (title, description, date, location)
      VALUES (${title}, ${description}, ${date}, ${location})
    `
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, description, date, location } = await request.json()
    
    await sql`
      UPDATE events 
      SET title = ${title}, description = ${description}, 
          date = ${date}, location = ${location}
      WHERE id = ${id}
    `
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    await sql`DELETE FROM events WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}