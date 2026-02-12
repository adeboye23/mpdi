'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Calendar, Mail, Heart, Users, Plus, Eye } from 'lucide-react'

export default function AdminPage() {
  const [stats, setStats] = useState({
    blogPosts: 0,
    events: 0,
    contacts: 0
  })

  const [recentPosts, setRecentPosts] = useState([])
  const [recentEvents, setRecentEvents] = useState([])
  const [recentContacts, setRecentContacts] = useState([])

  useEffect(() => {
    // Fetch blog posts
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, blogPosts: data.length }))
        setRecentPosts(data.slice(0, 5))
      })

    // Fetch events
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, events: data.length }))
        setRecentEvents(data.slice(0, 5))
      })

    // Fetch contacts
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, contacts: data.length }))
        setRecentContacts(data.slice(0, 5))
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6D712E] to-[#FFC600] rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MPDI Admin</h1>
              <p className="text-xs text-gray-500">Content Management System</p>
            </div>
          </div>

          <Link 
            href="/"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
          >
            View Website →
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Here's what's happening with your website</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FileText className="text-blue-600" size={24} />
              </div>
              <Eye size={16} className="text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stats.blogPosts}</h3>
            <p className="text-gray-600 text-sm mt-1">Blog Posts</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Calendar className="text-green-600" size={24} />
              </div>
              <Eye size={16} className="text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stats.events}</h3>
            <p className="text-gray-600 text-sm mt-1">Events</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Mail className="text-purple-600" size={24} />
              </div>
              {stats.contacts > 0 && (
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                  {stats.contacts}
                </span>
              )}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stats.contacts}</h3>
            <p className="text-gray-600 text-sm mt-1">Contact Messages</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link
              href="/admin/blog/new"
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#FFC600] hover:bg-[#FFC600]/5 transition-all group"
            >
              <div className="bg-blue-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Plus className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">New Blog Post</span>
            </Link>

            <Link
              href="/admin/events/new"
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#FFC600] hover:bg-[#FFC600]/5 transition-all group"
            >
              <div className="bg-green-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Plus className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">New Event</span>
            </Link>

            <Link
              href="/admin/contact"
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#FFC600] hover:bg-[#FFC600]/5 transition-all group"
            >
              <div className="bg-purple-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">View Messages</span>
            </Link>

            <Link
              href="/blog"
              target="_blank"
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#FFC600] hover:bg-[#FFC600]/5 transition-all group"
            >
              <div className="bg-gray-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Eye className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">View Site</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Blog Posts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Blog Posts</h3>
              <Link href="/admin/blog" className="text-sm text-[#6D712E] font-medium hover:underline">
                View All →
              </Link>
            </div>
            
            {recentPosts.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No posts yet</p>
            ) : (
              <div className="space-y-4">
                {recentPosts.map((post: any) => (
                  <div key={post.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                      <p className="text-xs text-gray-500 mt-1">By {post.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Contacts */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Recent Messages</h3>
              <Link href="/admin/contact" className="text-sm text-[#6D712E] font-medium hover:underline">
                View All →
              </Link>
            </div>
            
            {recentContacts.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No messages yet</p>
            ) : (
              <div className="space-y-4">
                {recentContacts.map((contact: any) => (
                  <div key={contact.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Mail size={16} className="text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">{contact.name} - {contact.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
