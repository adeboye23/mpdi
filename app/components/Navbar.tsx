'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

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
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* Top Utility Bar */}
        <div className="bg-[#191919] text-white text-xs py-2">
          <div className="container mx-auto px-6 flex justify-center md:justify-between items-center">
            {/* Contact info - hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:info@mpdi.org" className="flex items-center gap-2 hover:text-[#FFC600] transition-colors">
                <Mail size={14} /> info@mpdi.org
              </a>
              <a href="tel:+2341234567" className="flex items-center gap-2 hover:text-[#FFC600] transition-colors">
                <Phone size={14} /> +234-123-4567
              </a>
            </div>
            {/* Social icons - visible on both mobile and desktop */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/mpdinitiative" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC600] transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://x.com/@mpdinitiative" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC600] transition-colors" aria-label="X (Twitter)">
                <Twitter size={14} />
              </a>
              <a href="https://www.instagram.com/mpdi612?igsh=MXdpeWtyeHByN3FscQ==" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC600] transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.linkedin.com/company/media-for-pan-african-development-initiative/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC600] transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        <nav className={`transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
        }`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            
            
            <Link href="/" className="flex items-center gap-3 group">
             <img src="/logo-horizontal.png" alt="MPDI" className="h-10 w-auto" />
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
      </div>

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