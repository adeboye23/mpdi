import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export async function GET() {
  try {
    const db = getDatabase();
    const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, content, author } = await request.json();
    
    if (!title || !content || !author) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = getDatabase();
    const result = db.prepare(
      'INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)'
    ).run(title, content, author);

    return NextResponse.json({ 
      id: result.lastInsertRowid,
      message: 'Blog post created successfully' 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}
