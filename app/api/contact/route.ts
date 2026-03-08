import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM contact_messages 
      ORDER BY created_at DESC
    `
    return NextResponse.json({ messages: rows })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json({ messages: [] })
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    
    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
  }
}