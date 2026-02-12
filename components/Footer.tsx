import Link from 'next/link'
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-6 bg-white/5 w-fit px-4 py-2 rounded-xl">
             <img src="/logo.png" alt="MPDI" className="h-12 w-auto" />
              <span className="font-bold tracking-wider">MPDI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Building a resilient, empowered, and ethical African media ecosystem that informs, inspires, and drives positive change.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FFC600] hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#FFC600] font-bold uppercase text-sm tracking-wider mb-6">Programmes</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Collaborative Events</li>
                <li className="hover:text-white cursor-pointer">Capacity Training</li>
                <li className="hover:text-white cursor-pointer">Welfare Support</li>
                <li className="hover:text-white cursor-pointer">Advocacy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC600] font-bold uppercase text-sm tracking-wider mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
                <li className="hover:text-white cursor-pointer">Partner with us</li>
                <li className="hover:text-white cursor-pointer">Volunteer</li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC600] font-bold uppercase text-sm tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#6D712E]" /> info@mpdi.org
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#6D712E]" /> +234-123-4567
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#6D712E]" /> Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Media for Pan-African Development Initiative.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
