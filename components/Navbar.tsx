'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 group">
    <img src="/logo.png" alt="MPDI" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="bg-white/80 backdrop-blur-md rounded-full px-2 py-1 shadow-sm border border-gray-100 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 text-gray-600 hover:text-[#6D712E] hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved Button - Right */}
          <div className="hidden lg:block">
            <Link 
              href="/donate"
              className="shimmer-button px-6 py-2.5 rounded-full font-bold text-black text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-block"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6D712E] bg-white rounded-lg shadow-sm"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Reading Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#FFC600] to-[#6D712E] transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-6 pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-600 hover:text-[#6D712E] hover:bg-gray-100 font-bold transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="shimmer-button px-4 py-3 rounded-lg font-bold text-black text-center mt-4"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
