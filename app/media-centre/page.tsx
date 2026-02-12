'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Calendar, Download, FileText, Image as ImageIcon, ArrowRight, MapPin, Clock } from 'lucide-react'

export default function MediaCentrePage() {
  const [events, setEvents] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err))
  }, [])

  const pressReleases = [
    { date: 'Nov 2025', title: 'MPDI Launches New Fellowship Programme', id: 1 },
    { date: 'Oct 2025', title: 'Media Summit 2025 Concludes Successfully', id: 2 },
    { date: 'Sep 2025', title: 'Partnership with Pan-Atlantic University Announced', id: 3 },
  ]

  const publications = [
    { title: '2024 Annual Impact Report', size: '2.4 MB', type: 'PDF', color: 'red' },
    { title: 'Policy Brief: Media Safety in Election Periods', size: '1.1 MB', type: 'PDF', color: 'blue' },
    { title: 'Research: Digital Literacy in Nigerian Newsrooms', size: '3.2 MB', type: 'PDF', color: 'green' },
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
              MEDIA CENTRE & EVENTS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Media Centre & <span className="text-[#6D712E]">Events Hub</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Access our press releases, publications, media gallery, and upcoming events all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Events Hub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Register for our programmes and activities</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  filter === 'all' 
                    ? 'bg-[#6D712E] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('in-person')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  filter === 'in-person' 
                    ? 'bg-[#6D712E] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                In-Person
              </button>
              <button 
                onClick={() => setFilter('virtual')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  filter === 'virtual' 
                    ? 'bg-[#6D712E] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Virtual
              </button>
            </div>
          </div>

          {/* Event Cards */}
          {events.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-600 mb-4">No upcoming events at the moment</p>
              <p className="text-gray-500">Check back soon for new programmes and activities</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event: any) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-[#FFC600] hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm font-bold text-gray-400 mb-2 uppercase">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{event.description}</p>
                  
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  )}

                  <button className="w-full py-2 bg-[#6D712E] text-white font-bold rounded-lg hover:bg-[#585c25] transition-colors">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Media Repository */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Media Repository</h2>
            <p className="text-gray-600">Press releases, publications, and media gallery</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Press Releases */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="text-[#6D712E]" size={28} />
                Press Releases
              </h3>
              
              <div className="space-y-4">
                {pressReleases.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow group"
                  >
                    <div>
                      <div className="text-xs text-gray-400 font-bold mb-1">{item.date}</div>
                      <div className="font-bold text-gray-900 group-hover:text-[#6D712E] transition-colors">
                        {item.title}
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-[#6D712E]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Download className="text-[#6D712E]" size={28} />
                Publications
              </h3>
              
              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group"
                  >
                    <div className={`p-3 rounded-lg ${
                      pub.color === 'red' ? 'bg-red-100 text-red-600' :
                      pub.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <FileText size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 group-hover:text-[#6D712E] transition-colors mb-1">
                        {pub.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {pub.type} • {pub.size}
                      </div>
                    </div>
                    <Download size={20} className="text-gray-400 group-hover:text-[#6D712E] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ImageIcon className="text-[#6D712E]" size={28} />
            Media Gallery
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#6D712E] to-[#FFC600] flex items-center justify-center">
                  <ImageIcon size={48} className="text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
