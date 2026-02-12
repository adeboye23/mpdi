'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamPage() {
  const executiveDirector = {
    name: 'Rosemary Egabor Afolahan',
    role: 'Founder & Executive Director',
    bio: 'Rosemary Egabor Afolahan is the founder of Media Hangout NG and Executive Director of MPDI. With deep background in media and years leading the Media Hangout organising team, Rosemary brings practitioner insight and strategic vision to building a resilient African media ecosystem.',
    email: 'rosemary@mpdi.org'
  }

  const team = [
    {
      name: 'Director Name',
      role: 'Director, Programmes',
      bio: 'Oversees all programme delivery, partnerships with universities and media houses, and ensures quality in training and events.',
      email: 'programmes@mpdi.org'
    },
    {
      name: 'Director Name',
      role: 'Director, Finance & Admin',
      bio: 'Manages financial operations, transparency protocols, welfare fund governance, and administrative systems.',
      email: 'finance@mpdi.org'
    },
    {
      name: 'Staff Name',
      role: 'Communications Officer',
      bio: 'Leads external communications, media relations, content development, and digital engagement across MPDI platforms.',
      email: 'communications@mpdi.org'
    }
  ]

  const trustees = [
    { name: 'Trustee Name 1', credential: 'Senior Media Practitioner, 20+ years experience' },
    { name: 'Trustee Name 2', credential: 'Academic, Media Studies specialist' },
    { name: 'Trustee Name 3', credential: 'Legal expert, Press freedom advocate' },
    { name: 'Trustee Name 4', credential: 'Development sector leader' },
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#6D712E]/5 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6D712E]/20 text-[#6D712E] font-bold text-xs tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FFC600] animate-pulse"></span>
              OUR TEAM
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Meet the <span className="text-[#6D712E]">Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Dedicated professionals committed to strengthening Africa's media ecosystem through training, advocacy, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Director - Highlighted */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="md:w-2/5 bg-gradient-to-br from-[#6D712E] to-[#585c25] flex items-center justify-center p-12">
                  <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-6xl font-bold">R</div>
                  </div>
                </div>

                {/* Bio */}
                <div className="md:w-3/5 p-10 md:p-12">
                  <div className="h-1 w-16 bg-[#FFC600] mb-6"></div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {executiveDirector.name}
                  </h2>
                  
                  <p className="text-[#6D712E] font-bold uppercase tracking-wider text-sm mb-6">
                    {executiveDirector.role}
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {executiveDirector.bio}
                  </p>

                  <div className="flex gap-4">
                    <a 
                      href={`mailto:${executiveDirector.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#6D712E] hover:text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      <Mail size={16} /> Email
                    </a>
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#6D712E] hover:text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Photo */}
                <div className="h-72 bg-gradient-to-br from-[#6D712E] to-[#FFC600] flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="w-12 h-1 bg-[#6D712E] mx-auto mb-4"></div>
                  
                  <p className="text-sm text-[#6D712E] font-bold uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#6D712E] hover:text-[#FFC600] transition-colors"
                  >
                    <Mail size={14} /> Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Board of Trustees</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {trustees.map((trustee, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#FFC600] text-left"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {trustee.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {trustee.credential}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-500 italic">
              Board members bring diverse expertise in media, law, academia, and development to guide MPDI's strategic direction.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-[#6D712E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our mission of strengthening Africa's media ecosystem.
          </p>
          <a 
            href="/contact"
            className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
