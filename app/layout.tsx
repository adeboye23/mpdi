import './globals.css'
import '@/components/Navbar'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MPDI - Media for Africa Development Initiative',
  description: 'Building capacity and advancing media literacy across Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Navbar /> {children}</body>
    </html>
  )
}
