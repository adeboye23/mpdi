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
  const [currentSlide, setCurrentSlide] = useState(0)

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

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 5)
  const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + 5) % 5)

  return (
    <>
      <Navbar />
      
      
      <section className="relative h-screen overflow-hidden">
        {/* Slide 1: Main Mission - Journalists Working */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 pt-20">
              <div className="max-w-4xl">
                {/* Text Directly on Background */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B100]/30 border border-[#F6B100] mb-6">
                  <Sparkles size={16} className="text-[#F6B100]" />
                  <span className="text-sm font-bold text-white">TRANSFORMING AFRICAN MEDIA</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-[#F6B100] to-white bg-clip-text text-transparent animate-gradient">
                  Empowering Media.
                  <br />
                  Strengthening Democracy.
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Building capacity and advancing media literacy across Africa
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                    Learn More <ArrowRight size={20} />
                  </Link>
                  <Link href="/donate" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#F6B100] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-all">
                    Donate Now <Heart size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Training & Education - People Learning */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 pt-20">
              <div className="max-w-4xl ml-auto text-right">
                {/* Text Directly on Background */}
                <BookOpen size={64} className="text-[#F6B100] mb-6 ml-auto drop-shadow-2xl" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-l from-[#F6B100] via-white to-[#F6B100] bg-clip-text text-transparent animate-gradient">
                  Training & Capacity Building
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Practical skills, accredited modules, and fellowships for journalists and students
                </p>
                <div className="flex flex-wrap gap-4 justify-end">
                  <Link href="/programmes" className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                    View Programmes <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Press Freedom - Journalist with Camera */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 pt-20">
              <div className="max-w-4xl">
                {/* Text Directly on Background */}
                <Shield size={64} className="text-[#F6B100] mb-6 drop-shadow-2xl" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-red-400 via-[#F6B100] to-white bg-clip-text text-transparent animate-gradient">
                  Protecting Press Freedom
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  24/7 welfare support, legal referrals, and emergency assistance for journalists
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-white drop-shadow-lg">
                    <CheckCircle className="text-[#F6B100]" size={24} />
                    <span className="text-lg font-semibold">Emergency hotline</span>
                  </div>
                  <div className="flex items-center gap-3 text-white drop-shadow-lg">
                    <CheckCircle className="text-[#F6B100]" size={24} />
                    <span className="text-lg font-semibold">Legal support network</span>
                  </div>
                  <div className="flex items-center gap-3 text-white drop-shadow-lg">
                    <CheckCircle className="text-[#F6B100]" size={24} />
                    <span className="text-lg font-semibold">Medical assistance</span>
                  </div>
                  <div className="flex items-center gap-3 text-white drop-shadow-lg">
                    <CheckCircle className="text-[#F6B100]" size={24} />
                    <span className="text-lg font-semibold">Safe houses</span>
                  </div>
                </div>
                <Link href="/programmes" className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                  Learn About Our Support <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4: Community Impact - People Gathering */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 pt-20">
              <div className="max-w-4xl ml-auto text-right">
                {/* Text Directly on Background */}
                <Users size={64} className="text-white mb-6 ml-auto drop-shadow-2xl" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-l from-[#02D400] via-white to-[#F6B100] bg-clip-text text-transparent animate-gradient">
                  Empowering Communities
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  From urban newsrooms to rural community radio - building Africa&apos;s media future
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">1000+</div>
                    <div className="text-white/90">Journalists Trained</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
                    <div className="text-white/90">Programmes</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                    <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">10+</div>
                    <div className="text-white/90">Years</div>
                  </div>
                </div>
                <Link href="/about" className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-all">
                  Our Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5: Join the Movement - Hands Together */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 pt-20">
              <div className="max-w-4xl mx-auto text-center">
                {/* Text Directly on Background */}
                <Heart size={64} className="text-[#F6B100] mb-6 mx-auto drop-shadow-2xl" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-[#F6B100] to-white bg-clip-text text-transparent animate-gradient">
                  Join Our Mission
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Support independent, ethical media across Africa
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/donate" className="bg-[#F6B100] text-black hover:bg-[#ffdb4d] px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg transition-all">
                    Donate Now <Heart size={24} />
                  </Link>
                  <Link href="/contact" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg transition-all">
                    Partner With Us <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              onMouseEnter={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-12 h-3 rounded-full' 
                  : 'bg-white/50 hover:bg-white/75 w-3 h-3 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Quote with Typewriter Effect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-mpdi-yellow mb-6 animate-fade-in">&ldquo;</div>
            <div className="overflow-hidden">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed typewriter-text">
                MPDI grew from <span className="font-bold text-mpdi-yellow">Media Hangout NG</span> into a formal NGO dedicated to strengthening ethical journalism, media literacy and media innovation. We work with universities, media houses and partners to deliver high-quality media content that serves public interest.
              </p>
            </div>
            <div className="text-6xl text-mpdi-yellow mt-6 rotate-180 animate-fade-in">&ldquo;</div>
          </div>
        </div>
      </section>

      {/* What We Do - 5 Programme Cards (ALL SAME DESIGN) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-mpdi-yellow font-bold tracking-widest uppercase text-sm mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Five Impact Pillars
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-mpdi-yellow to-mpdi-green mx-auto rounded-full"></div>
          </div>

          {/* All 5 Cards - IDENTICAL DESIGN */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Collaborative Events */}
            <div className="prog-tile relative h-[350px] bg-gradient-to-br from-mpdi-yellow to-yellow-500 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <Users size={48} className="text-white drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Collaborative Events</h3>
                  <p className="text-white/90 text-sm">Exchange conferences and fireside chats</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-mpdi-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <Users size={64} className="mx-auto mb-4 text-mpdi-yellow" />
                  <p className="text-lg font-medium leading-relaxed">
                    Exchange conferences and fireside chats for solidarity and idea exchange among media professionals.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-mpdi-yellow font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Training & Capacity */}
            <div className="prog-tile relative h-[350px] bg-gradient-to-br from-mpdi-green to-green-600 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <BookOpen size={48} className="text-white drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Training & Capacity</h3>
                  <p className="text-white/90 text-sm">Practical skills and fellowships</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-mpdi-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <BookOpen size={64} className="mx-auto mb-4 text-mpdi-green" />
                  <p className="text-lg font-medium leading-relaxed">
                    Practical skills, accredited modules and fellowships for journalists and students across Africa.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-mpdi-green font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Advocacy & Policy */}
            <div className="prog-tile relative h-[350px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <Globe size={48} className="text-white drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Advocacy & Policy</h3>
                  <p className="text-white/90 text-sm">Protecting press freedom</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-mpdi-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <Globe size={64} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-lg font-medium leading-relaxed">
                    Evidence-based campaigns to protect press freedom and digital rights across the continent.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4: Welfare & Emergency */}
            <div className="prog-tile relative h-[350px] bg-gradient-to-br from-mpdi-red to-red-700 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <Shield size={48} className="text-white drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welfare & Emergency</h3>
                  <p className="text-white/90 text-sm">24/7 support for journalists</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-mpdi-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <Shield size={64} className="mx-auto mb-4 text-mpdi-red" />
                  <p className="text-lg font-medium leading-relaxed">
                    Transparent hardship funds, legal referrals, and emergency support for journalists in need.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-mpdi-red font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5: Media Content */}
            <div className="prog-tile relative h-[350px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <Mic size={48} className="text-white drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Media Development Content</h3>
                  <p className="text-white/90 text-sm">Promoting media literacy</p>
                </div>
              </div>
              <div className="overlay absolute inset-0 bg-mpdi-black/95 p-8 flex items-center justify-center text-white z-20">
                <div className="text-center space-y-4">
                  <Mic size={64} className="mx-auto mb-4 text-purple-400" />
                  <p className="text-lg font-medium leading-relaxed">
                    Promoting media literacy and improving public perception of journalism across Africa.
                  </p>
                  <Link href="/programmes" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B100]/20 border border-[#F6B100]/30">
                <Calendar size={16} className="text-[#F6B100]" />
                <span className="text-sm font-bold text-[#F6B100]">FEATURED PROGRAMME</span>
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
                <div className="aspect-video bg-gradient-to-br from-[#F6B100] to-[#F6B100] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
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

      {/* Sliding Partners Bar (inspired by insightredefini.com) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <span className="text-mpdi-yellow font-bold tracking-widest uppercase text-sm mb-4 block">
              Collaborations
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-mpdi-yellow to-mpdi-green mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Building Africa's media ecosystem through strategic partnerships
            </p>
          </div>
        </div>

        {/* Sliding Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Sliding Track */}
          <div className="flex">
            <div className="flex partners-slide gap-12 items-center py-8">
              {/* First Set */}
              {[
                'Pan-Atlantic University',
                'U.S. Consulate Lagos', 
                'UNESCO',
                'African Union',
                'ECOWAS',
                'BBC Africa',
                'Thomson Reuters Foundation'
              ].map((partner, idx) => (
                <div 
                  key={idx} 
                  className="partner-logo flex-shrink-0 min-w-[240px] h-28 flex items-center justify-center bg-gray-50 rounded-2xl px-10 border-2 border-gray-100 hover:border-mpdi-yellow transition-all shadow-sm hover:shadow-xl"
                >
                  <span className="text-xl font-extrabold text-gray-700">{partner}</span>
                </div>
              ))}
              
              {/* Duplicate for Seamless Loop */}
              {[
                'Pan-Atlantic University',
                'U.S. Consulate Lagos',
                'UNESCO',
                'African Union',
                'ECOWAS',
                'BBC Africa',
                'Thomson Reuters Foundation'
              ].map((partner, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="partner-logo flex-shrink-0 min-w-[240px] h-28 flex items-center justify-center bg-gray-50 rounded-2xl px-10 border-2 border-gray-100 hover:border-mpdi-yellow transition-all shadow-sm hover:shadow-xl"
                >
                  <span className="text-xl font-extrabold text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Description */}
        <div className="container mx-auto px-6 mt-16 text-center">
          <p className="text-gray-600 italic text-lg max-w-3xl mx-auto">
            &ldquo;We welcome partnerships with universities, media houses, donors and civil society organizations committed to building a resilient African media ecosystem.&rdquo;
          </p>
          <Link href="/partners" className="inline-flex items-center gap-2 mt-6 text-mpdi-yellow font-bold hover:gap-3 transition-all">
            View All Partners <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#F6B100] font-bold tracking-widest uppercase text-sm mb-4 block">
                Latest Insights
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                From Our Blog
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F6B100] to-[#F6B100] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post: any) => (
                <Link 
                  href={`/blog/${post.id}`}
                  key={post.id} 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="h-64 bg-gradient-to-br from-[#F6B100] to-[#F6B100] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                    <BookOpen size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F6B100] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">By {post.author}</span>
                      <span className="text-[#F6B100] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
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
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F6B100] text-[#F6B100] hover:bg-[#F6B100] hover:text-white rounded-full font-bold transition-all"
              >
                View All Articles <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Events */}
      {events.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-[#F6B100] via-[#585c25] to-[#F6B100] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#F6B100] font-bold tracking-widest uppercase text-sm mb-4 block">
                Join Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1.5 bg-[#F6B100] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event: any) => (
                <div 
                  key={event.id}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#F6B100] text-black px-6 py-3 rounded-2xl text-center min-w-[80px]">
                      <span className="block text-xs font-bold uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="block text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-[#F6B100] transition-colors">
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
                    href={`/register?event=${encodeURIComponent(event.title)}`}
                    className="mt-6 inline-flex items-center gap-2 text-[#F6B100] font-bold hover:gap-3 transition-all"
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
      <section className="py-24 bg-gradient-to-br from-[#F6B100] via-[#585c25] to-[#F6B100] text-white">
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
  className="px-6 py-4 border-2 border-white text-white hover:bg-white hover:text-mpdi-black rounded-full font-bold inline-flex items-center gap-2 transition-all text-sm md:text-base"
>
  <span className="whitespace-nowrap">Partner With Us</span>
  <Users size={18} className="flex-shrink-0" />
</Link>
            <Link 
              href="/media-centre"
              className="border-2 border-white text-white hover:bg-white hover:text-[#F6B100] px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all text-lg"
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
