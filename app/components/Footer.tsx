'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo - Same as Navbar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D712E] to-[#FFC600] flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-xl">MPDI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building a resilient, empowered and ethical African media ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#FFC600] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFC600] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFC600] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFC600] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFC600] font-bold uppercase text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/programmes" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link href="/media-centre" className="hover:text-white transition-colors">Media Centre</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FFC600] font-bold uppercase text-sm mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@mpdi.org
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +234-123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Lagos, Nigeria
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-[#FFC600] font-bold uppercase text-sm mb-6">Partners</h4>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="bg-white/10 px-2 py-1 rounded">PAU</span>
              <span className="bg-white/10 px-2 py-1 rounded">US Consulate</span>
              <span className="bg-white/10 px-2 py-1 rounded">UNESCO</span>
            </div>
            <p className="mt-4 text-xs text-gray-400 italic">
              We welcome partnerships with universities, media houses, donors and civil society.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          &copy; 2026 Media for Africa Development Initiative. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
