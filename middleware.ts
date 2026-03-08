export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth-token')?.value

    console.log('🔐 Middleware check for:', pathname)
    console.log('🍪 Token found:', token ? 'YES' : 'NO')

    if (!token) {
      console.log('❌ No token, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const verified = verifyToken(token)
    console.log('✅ Token verified:', verified ? 'YES' : 'NO')

    if (!verified) {
      console.log('❌ Invalid token, redirecting to login')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    console.log('✅ Access granted to admin')
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}