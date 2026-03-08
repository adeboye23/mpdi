'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download, ChevronRight, ArrowLeft, Calendar, MapPin } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MediaCentre() {
  const [expandedRelease, setExpandedRelease] = useState<number | null>(null)

  const pressReleases = [
    {
      id: 1,
      date: 'Nov 2025',
      title: 'MPDI Launches New Fellowship Programme',
      preview: 'A groundbreaking initiative to support emerging journalists...',
      full: 'MPDI is proud to announce the launch of our new Fellowship Programme aimed at supporting emerging journalists across Africa. This comprehensive programme will provide mentorship, training, and funding to 20 selected fellows over a 12-month period. Applications open January 2026.'
    },
    {
      id: 2,
      date: 'Oct 2025',
      title: 'Media Summit 2025 Concludes Successfully',
      preview: 'Over 300 participants gathered for our annual summit...',
      full: 'The MPDI Media Summit 2025 concluded with overwhelming success, bringing together over 300 media professionals, policymakers, and stakeholders from 15 African countries. Key discussions focused on press freedom, digital innovation, and sustainable journalism models.'
    },
    {
      id: 3,
      date: 'Sep 2025',
      title: 'Partnership with Pan-Atlantic University Announced',
      preview: 'Strategic collaboration to enhance media training...',
      full: 'MPDI and Pan-Atlantic University have entered into a strategic partnership to enhance media training across Nigeria. This collaboration will see the development of accredited journalism courses, joint research initiatives, and expanded training facilities for aspiring journalists.'
    }
  ]

  const publications = [
    {
      id: 1,
      title: '2024 Annual Impact Report',
      size: 'PDF • 2.3 MB',
      file: '#'
    },
    {
      id: 2,
      title: 'Policy Brief: Media Safety in Election Periods',
      size: 'PDF • 1.1 MB',
      file: '#'
    },
    {
      id: 3,
      title: 'Research: Digital Literacy in Nigerian Newsrooms',
      size: 'PDF • 3.7 MB',
      file: '#'
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-mpdi-yellow font-bold mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Media Repository
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Press releases, publications, and media gallery
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <FileText size={32} className="text-mpdi-yellow" />
            <h2 className="text-3xl font-bold text-gray-900">Press Releases</h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {pressReleases.map((release) => (
              <div key={release.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-mpdi-yellow transition-all">
                <button
                  onClick={() => setExpandedRelease(expandedRelease === release.id ? null : release.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div>
                    <div className="text-sm text-mpdi-yellow font-bold mb-1">{release.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600">{release.preview}</p>
                  </div>
                  <ChevronRight 
                    size={24} 
                    className={`text-mpdi-yellow flex-shrink-0 ml-4 transition-transform ${
                      expandedRelease === release.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {expandedRelease === release.id && (
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed pt-4">{release.full}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={32} className="text-mpdi-green" />
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Roundtable on Election Reporting Ethics',
                date: '2026-03-15',
                location: 'American Corner Lagos',
                description: 'In partnership with U.S. American Corner Lagos. A critical two-day session addressing the unique challenges journalists face during election periods.'
              },
              {
                title: 'Digital Safety Masterclass for Journalists',
                date: '2026-03-22',
                location: 'MPDI Training Center, Ikeja',
                description: 'Comprehensive training on protecting yourself and your sources in the digital age. Learn secure communication tools and digital forensics basics.'
              },
              {
                title: 'Pan-African Media Summit 2026',
                date: '2026-04-10',
                location: 'Eko Hotel & Suites, Lagos',
                description: 'Our flagship annual event bringing together 200+ media professionals from across Africa. Three-day conference on media innovation, press freedom, and sustainability.'
              }
            ].map((event, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-mpdi-green hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-mpdi-green text-white px-4 py-2 rounded-lg text-center min-w-[70px]">
                    <span className="block text-xs font-bold uppercase">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="block text-2xl font-bold">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-mpdi-green" /> {event.location}
                </p>
                <Link 
                  href={`/register?event=${encodeURIComponent(event.title)}`}
                  className="inline-flex items-center gap-2 text-mpdi-green font-bold hover:gap-3 transition-all"
                >
                  Register Now <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Download size={32} className="text-mpdi-green" />
            <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            {publications.map((pub) => (
              <button
                key={pub.id}
                onClick={() => alert('PDF download will be available when you add actual PDF files to /public/publications/')}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-mpdi-green hover:shadow-xl transition-all group text-left"
              >
                <div className="w-12 h-12 bg-mpdi-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-mpdi-green group-hover:scale-110 transition-all">
                  <Download size={24} className="text-mpdi-green group-hover:text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-500">{pub.size}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
