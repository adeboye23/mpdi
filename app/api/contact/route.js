import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET() {
  try {
    const db = getDatabase();
    const submissions = db.prepare('SELECT * FROM contact_submissions ORDER BY created_at DESC').all();
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = getDatabase();
    const result = db.prepare(
      'INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)'
    ).run(name, email, subject || '', message);

    return NextResponse.json({ 
      id: result.lastInsertRowid,
      message: 'Message sent successfully' 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
