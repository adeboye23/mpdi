import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: '🎉 Backend is working!',
    timestamp: new Date().toISOString(),
    status: 'success'
  })
}
