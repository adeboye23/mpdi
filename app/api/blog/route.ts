import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM blog_posts 
      ORDER BY created_at DESC
    `
    return NextResponse.json(rows)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
   return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, author } = await request.json()
    
    await sql`
      INSERT INTO blog_posts (title, content, author)
      VALUES (${title}, ${content}, ${author})
    `
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, content, author } = await request.json()
    
    await sql`
      UPDATE blog_posts 
      SET title = ${title}, content = ${content}, author = ${author}
      WHERE id = ${id}
    `
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    await sql`DELETE FROM blog_posts WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}