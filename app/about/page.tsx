'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Target, Eye, Shield, Users, Heart, Globe, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { name: 'Integrity', icon: Shield },
    { name: 'Independence', icon: Users },
    { name: 'Equity & Inclusion', icon: Heart },
    { name: 'Accountability', icon: CheckCircle },
    { name: 'Innovation', icon: Sparkles },
    { name: 'Collaboration', icon: Users },
    { name: 'Service', icon: Heart }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFC600]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6D712E]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC600]/10 border border-[#FFC600]/20 mb-8">
              <Sparkles size={16} className="text-[#FFC600]" />
              <span className="text-sm font-bold text-[#6D712E]">ABOUT MPDI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Media for Africa <br/>
              <span className="bg-gradient-to-r from-[#6D712E] to-[#FFC600] bg-clip-text text-transparent">
                Development Initiative
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-serif max-w-4xl mx-auto">
              MPDI is a pan-African media development organisation. Born from Media Hangout NG, MPDI formalises years of convening, training and advocacy into a structured organisation with a clear governance framework and five-year strategic roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6D712E] to-[#585c25] rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 border-8 border-white shadow-2xl">
                <div className="w-20 h-20 bg-[#6D712E]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={40} className="text-[#6D712E]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To build a resilient, empowered and ethical African media ecosystem that informs, inspires and drives positive change across the continent.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC600] to-[#ffdb4d] rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 border-8 border-white shadow-2xl">
                <div className="w-20 h-20 bg-[#FFC600]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Target size={40} className="text-[#FFC600]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To enhance media literacy, strengthen journalistic capacity, promote ethical communication, provide welfare support, and empower communities through evidence-based advocacy, training, storytelling and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
            {values.map((value, i) => (
              <div 
                key={i}
                className="flex flex-col items-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-300 text-center group cursor-default transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#6D712E]/10 group-hover:bg-[#FFC600] transition-all flex items-center justify-center mb-4">
                  <value.icon size={28} className="text-[#6D712E] group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-sm text-gray-800 leading-tight">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From grassroots movement to formal NGO
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6D712E] via-[#FFC600] to-[#6D712E]"></div>

            <div className="space-y-16">
              {/* 2015 */}
              <div className="timeline-item relative pl-24 group">
                <div className="timeline-dot absolute left-4 top-2 w-8 h-8 bg-[#6D712E] rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-x-2">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#6D712E]/10 text-[#6D712E] font-bold text-sm mb-4">
                    2015
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">The Beginning</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Media Hangout NG launched as a practitioner space, creating a community for media professionals to connect, learn, and grow together.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="timeline-item relative pl-24 group">
                <div className="timeline-dot absolute left-4 top-2 w-8 h-8 bg-[#FFC600] rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-x-2">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#FFC600]/10 text-[#6D712E] font-bold text-sm mb-4">
                    2022
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Partnership</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Key roundtable with the U.S. American Corner on election reporting, marking our commitment to ethical journalism during critical democratic moments.
                  </p>
                </div>
              </div>

              {/* 2025 */}
              <div className="timeline-item relative pl-24 group">
                <div className="timeline-dot absolute left-4 top-2 w-8 h-8 bg-[#6D712E] rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-x-2">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#6D712E]/10 text-[#6D712E] font-bold text-sm mb-4">
                    2025
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Official Launch</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Transition and registration as MPDI with strategic plan adopted. We formalize our mission to serve Africa's media ecosystem with structure and vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MPDI Exists */}
      <section className="py-24 bg-gradient-to-br from-[#6D712E] via-[#585c25] to-[#6D712E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why MPDI Exists
            </h2>
            <div className="w-24 h-1.5 bg-[#FFC600] mx-auto rounded-full mb-12"></div>
            
            <p className="text-2xl leading-relaxed mb-12 text-white/95">
              There are critical gaps in the African media sector regarding training, welfare, advocacy, and digital adaptation. Our Strategic Plan's burden-of-proof shows a need for a structured support system that empowers independent journalism and strengthens democratic accountability across the continent.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Shield, title: 'Protect', desc: 'Press freedom & digital rights' },
                { icon: Users, title: 'Empower', desc: 'Journalists & communities' },
                { icon: Globe, title: 'Transform', desc: 'Media ecosystem across Africa' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-[#FFC600] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Photo */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6D712E] to-[#FFC600] rounded-3xl transform rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-[#6D712E] to-[#585c25] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-[3/4] flex items-center justify-center text-white p-12">
                      <div className="text-center">
                        <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-md border-8 border-white/30 flex items-center justify-center mx-auto mb-6">
                          <span className="text-8xl font-bold">R</span>
                        </div>
                        <h3 className="text-3xl font-bold">Rosemary Egabor Afolahan</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] rounded-full"></div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Rosemary Egabor Afolahan
                  </h2>
                  
                  <p className="text-[#6D712E] font-bold uppercase tracking-wider text-lg">
                    Founder & Executive Director
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Founder of Media Hangout NG and Executive Director of MPDI. With deep background in media and years leading the Media Hangout organising team, Rosemary brings practitioner insight and strategic vision to MPDI.
                  </p>

                  <p className="text-gray-600 italic">
                    (Replace with final biography as required.)
                  </p>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link 
                      href="/team"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#6D712E] text-[#6D712E] hover:bg-[#6D712E] hover:text-white rounded-full font-bold transition-all"
                    >
                      View Full Team <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Work with us: partner, volunteer or donate
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join our mission to build a stronger African media ecosystem
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact"
                className="btn-gold px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
              >
                Partner With Us <ArrowRight size={24} />
              </Link>
              <Link 
                href="/donate"
                className="px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg border-2 border-[#6D712E] text-[#6D712E] hover:bg-[#6D712E] hover:text-white transition-all"
              >
                Donate Now <Heart size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
