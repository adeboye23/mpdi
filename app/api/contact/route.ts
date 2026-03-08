import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request: Request) {
  try {
    // Ensure table exists
    db.exec(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const { name, email, subject, message } = await request.json()

    // Validate
    if (!name || !email ||  !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const stmt = db.prepare(
      'INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)'
    )

    const result = stmt.run(name, email, subject, message)

    return NextResponse.json(
      {
        success: true,
        id: result.lastInsertRowid,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const submissions = db.prepare(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC'
    ).all()

    return NextResponse.json(submissions)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get submissions' },
      { status: 500 }
    )
  }
}