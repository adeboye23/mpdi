'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, Heart, Users, BookOpen, Globe, Shield, 
  Mic, MapPin, Calendar, CheckCircle, Sparkles
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setBlogPosts(data.slice(0, 3)))
      .catch(err => console.error(err))

    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data.slice(0, 3)))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Navbar />
      
      
      {/* HERO - World-Class Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFC600]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6D712E]/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC600]/10 border border-[#FFC600]/20">
                <Sparkles size={16} className="text-[#FFC600]" />
                <span className="text-sm font-bold text-[#6D712E]">TRANSFORMING AFRICAN MEDIA</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] text-gray-900">
                Empowering Media.
                <br />
                <span className="bg-gradient-to-r from-[#6D712E] to-[#FFC600] bg-clip-text text-transparent">
                  Strengthening Democracy.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                MPDI builds capacity, fosters ethics, and advances media literacy across Africa. We train journalists, protect press freedom, and empower communities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about"
                  className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 text-lg"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/donate"
                  className="px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 text-lg border-2 border-[#6D712E] text-[#6D712E] hover:bg-[#6D712E] hover:text-white transition-all"
                >
                  Donate Now <Heart size={20} />
                </Link>
              </div>

              {/* Snapshot Stats */}
              <div className="grid grid-cols-1 gap-4 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-1 p-2 rounded-full bg-[#FFC600]/10 group-hover:bg-[#FFC600] transition-all">
                    <CheckCircle className="text-[#FFC600] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">Trained journalists and students across Nigeria & region</p>
                </div>
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-1 p-2 rounded-full bg-[#FFC600]/10 group-hover:bg-[#FFC600] transition-all">
                    <CheckCircle className="text-[#FFC600] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">Convened multi-stakeholder events on ethics</p>
                </div>
                <div className="flex items-start gap-3 group cursor-default">
                  <div className="mt-1 p-2 rounded-full bg-[#FFC600]/10 group-hover:bg-[#FFC600] transition-all">
                    <CheckCircle className="text-[#FFC600] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">Rapid-response welfare and legal referrals</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[#6D712E] to-[#585c25] rounded-3xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <Users size={48} className="text-white mb-4" />
                      <h3 className="text-white font-bold text-2xl mb-2">1000+</h3>
                      <p className="text-white/80">Journalists Trained</p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                      <Shield size={48} className="text-red-500 mb-4" />
                      <h3 className="text-gray-900 font-bold text-2xl mb-2">24/7</h3>
                      <p className="text-gray-600">Welfare Support</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="space-y-6 mt-12">
                    <div className="bg-[#FFC600] rounded-3xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <Globe size={48} className="text-black mb-4" />
                      <h3 className="text-black font-bold text-2xl mb-2">10+</h3>
                      <p className="text-black/80">Years Experience</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#00008B] to-[#0000CD] rounded-3xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <BookOpen size={48} className="text-white mb-4" />
                      <h3 className="text-white font-bold text-2xl mb-2">50+</h3>
                      <p className="text-white/80">Training Programmes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-[#FFC600] mb-6">&ldquo;</div>
            <p className="text-2xl lg:text-3xl font-serif text-gray-700 leading-relaxed">
              MPDI grew from <span className="font-bold text-[#6D712E]">Media Hangout NG</span> into a formal NGO dedicated to strengthening ethical journalism, media literacy and media innovation. We work with universities, media houses and partners to deliver high-quality media content that serves public interest.
            </p>
            <div className="text-6xl text-[#FFC600] mt-6 rotate-180">&ldquo;</div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#6D712E] font-bold tracking-widest uppercase text-sm mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Impact Pillars
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] mx-auto rounded-full"></div>
          </div>

          {/* Main 3 Tiles */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Tile 1 */}
            <div className="prog-tile relative h-[400px] bg-gradient-to-br from-[#FFC600] to-[#ffdb4d] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Users size={48} className="mb-4 text-black" />
                  <h3 className="text-3xl font-bold text-black mb-2">Collaborative Events</h3>
                  <p className="text-black/80 text-sm">Exchange conferences and fireside chats</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <Users size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-medium leading-relaxed">
                    Exchange conferences and fireside chats for solidarity and idea exchange.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-[#FFC600] font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="prog-tile relative h-[400px] bg-gradient-to-br from-[#6D712E] to-[#585c25] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <BookOpen size={48} className="mb-4 text-white" />
                  <h3 className="text-3xl font-bold text-white mb-2">Training & Capacity</h3>
                  <p className="text-white/80 text-sm">Practical skills and fellowships</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-white/95 p-8 flex items-center justify-center text-[#6D712E] z-20">
                <div className="text-center space-y-4">
                  <BookOpen size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold leading-relaxed">
                    Practical skills, accredited modules and fellowships for journalists and students.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-[#6D712E] font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="prog-tile relative h-[400px] bg-gradient-to-br from-[#00008B] to-[#0000CD] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Globe size={48} className="mb-4 text-white" />
                  <h3 className="text-3xl font-bold text-white mb-2">Advocacy & Policy</h3>
                  <p className="text-white/80 text-sm">Protecting press freedom</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-[#FFC600] p-8 flex items-center justify-center text-black z-20">
                <div className="text-center space-y-4">
                  <Globe size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold leading-relaxed">
                    Evidence-based campaigns to protect press freedom and digital rights.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-black font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Extra 2 Tiles */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl flex items-center gap-6 border-l-4 border-red-500 hover:shadow-2xl transition-all group">
              <div className="bg-red-500 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900 mb-2">Welfare & Emergency Support</h4>
                <p className="text-gray-600">Transparent hardship funds & legal referrals.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl flex items-center gap-6 border-l-4 border-[#0ADD08] hover:shadow-2xl transition-all group">
              <div className="bg-[#0ADD08] p-4 rounded-2xl text-white group-hover:scale-110 transition-transform">
                <Mic size={32} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-gray-900 mb-2">Media Development Content</h4>
                <p className="text-gray-600">Promoting media literacy & public perception.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programme */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#1A1A1A] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC600]/20 border border-[#FFC600]/30">
                <Calendar size={16} className="text-[#FFC600]" />
                <span className="text-sm font-bold text-[#FFC600]">FEATURED PROGRAMME</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Roundtable on Election Reporting
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                In partnership with American Corner. A critical session on ethics, safety, and data verification for the upcoming election cycle.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/media-centre"
                  className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
                >
                  View Event Details <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/programmes"
                  className="px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 border-2 border-white/20 hover:bg-white/10 transition-all"
                >
                  All Programmes
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-[#6D712E] to-[#FFC600] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white p-8">
                    <Calendar size={64} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Election Roundtable</h3>
                    <p className="text-white/90">Upcoming Programme</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>March 15, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#6D712E] font-bold tracking-widest uppercase text-sm mb-4 block">
              Collaborations
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Partners
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { name: 'PAU', desc: 'Pan-Atlantic University — training & accreditation partner' },
              { name: 'US Consulate', desc: 'U.S. American Corner — events venue & support' },
              { name: 'UNESCO', desc: 'UNESCO — collaboration on media literacy' }
            ].map((partner, idx) => (
              <div key={idx} className="group text-center">
                <div className="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-2xl partner-logo transform hover:scale-105 transition-all">
                  <div className="text-3xl font-bold text-gray-400 group-hover:text-[#6D712E] transition-colors">
                    {partner.name}
                  </div>
                </div>
                <p className="text-gray-600 italic border-t pt-4 border-gray-100 group-hover:text-[#6D712E] transition-colors">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 font-medium italic text-lg">
              &ldquo;We welcome partnerships with universities, media houses, donors and civil society.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#6D712E] font-bold tracking-widest uppercase text-sm mb-4 block">
                Latest Insights
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                From Our Blog
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D712E] to-[#FFC600] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post: any) => (
                <Link 
                  href={`/blog/${post.id}`}
                  key={post.id} 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-64 bg-gradient-to-br from-[#6D712E] to-[#FFC600] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                    <BookOpen size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#6D712E] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                      <span className="text-[#6D712E] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#6D712E] text-[#6D712E] hover:bg-[#6D712E] hover:text-white rounded-full font-bold transition-all"
              >
                View All Articles <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Events */}
      {events.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-[#6D712E] via-[#585c25] to-[#6D712E] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#FFC600] font-bold tracking-widest uppercase text-sm mb-4 block">
                Join Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1.5 bg-[#FFC600] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event: any) => (
                <div 
                  key={event.id}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#FFC600] text-black px-6 py-3 rounded-2xl text-center min-w-[80px]">
                      <span className="block text-xs font-bold uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="block text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-[#FFC600] transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">{event.description}</p>
                  {event.location && (
                    <p className="text-sm text-white/60 flex items-center gap-2">
                      <MapPin size={16} /> {event.location}
                    </p>
                  )}
                  <Link 
                    href="/media-centre"
                    className="mt-6 inline-flex items-center gap-2 text-[#FFC600] font-bold hover:gap-3 transition-all"
                  >
                    Register Now <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#6D712E] via-[#585c25] to-[#6D712E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Join our mission — donate, partner or attend our next event.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Together, we can build a stronger, more ethical media ecosystem across Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/donate"
              className="btn-gold px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
            >
              Donate Now <Heart size={24} />
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-[#6D712E] hover:bg-gray-100 px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all text-lg shadow-xl"
            >
              Partner With Us <ArrowRight size={24} />
            </Link>
            <Link 
              href="/media-centre"
              className="border-2 border-white text-white hover:bg-white hover:text-[#6D712E] px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all text-lg"
            >
              View Events <Calendar size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
