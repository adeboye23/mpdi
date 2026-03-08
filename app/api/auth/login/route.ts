import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { verifyPassword, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log('🔐 Login attempt for:', email)

    // Query Postgres instead of SQLite
    const { rows } = await sql`SELECT * FROM admins WHERE email = ${email}`
    const user = rows[0]

    console.log('👤 User found:', user ? 'YES' : 'NO')

    if (!user || !verifyPassword(password, user.password)) {
      console.log('❌ Invalid credentials')
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role
    })

    console.log('🎫 Token generated')

    const response = NextResponse.json({ 
      success: true, 
      user: { email: user.email },
      token: token
    })
    
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    })

    console.log('🍪 Cookie set in response')

    return response
  } catch (error) {
    console.error('💥 Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}