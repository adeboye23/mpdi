'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programmes', label: 'Programmes' },
    { href: '/blog', label: 'Blog' },
    { href: '/media-centre', label: 'Media Centre' },
    { href: '/partners', label: 'Partners' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo - REPLACE THIS SECTION WITH YOUR LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {/* METHOD 1: If you have logo.png in public folder, uncomment this: */}
            {/* <img src="/logo.png" alt="MPDI" className="h-12 w-auto" /> */}
            
            {/* METHOD 2: Current placeholder (delete when you add real logo) */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6D712E] to-[#FFC600] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#6D712E] leading-none">MPDI</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Media Development</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all text-gray-600 hover:text-[#6D712E] hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            
            <Link 
              href="/donate"
              className="ml-4 shimmer-button px-6 py-2.5 rounded-full font-bold text-black text-sm"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6D712E] hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 pt-24 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-700 font-bold hover:bg-[#6D712E]/10 hover:text-[#6D712E] transition-colors"
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
