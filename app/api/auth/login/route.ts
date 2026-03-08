import { NextRequest, NextResponse } from 'next/server'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { verifyPassword, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log('🔐 Login attempt for:', email)

    const db = await open({
      filename: './mpdi.db',
      driver: sqlite3.Database
    })

    const user = await db.get('SELECT * FROM admins WHERE email = ?', [email])
    await db.close()

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

    console.log('🎫 Token generated:', token.substring(0, 20) + '...')

    const response = NextResponse.json({ 
      success: true, 
      user: { email: user.email },
      token: token // Send token to client too
    })
    
    // Set cookie with multiple attempts
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: false, // Set to false for localhost
      sameSite: 'lax', // Changed from 'strict' to 'lax'
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