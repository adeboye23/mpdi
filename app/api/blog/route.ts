import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  try {
    const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, author } = await request.json()
    
    const stmt = db.prepare('INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)')
    const result = stmt.run(title, content, author)
    
    return NextResponse.json({ 
      id: result.lastInsertRowid,
      title,
      content,
      author
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
