'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Download,
  Users,
  TrendingUp,
  Eye
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogPosts: 5,
    totalEvents: 6,
    totalMessages: 12,
    totalPublications: 3
  })

  const [recentActivity] = useState([
    { type: 'blog', title: 'New blog post published', time: '2 hours ago' },
    { type: 'event', title: 'Event registration received', time: '5 hours ago' },
    { type: 'message', title: 'New contact message', time: '1 day ago' }
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header with Logo */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
            <img src="/logo-horizontal.png" alt="MPDI" className="h-10 w-auto" />
             
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">MPDI Admin</span>
                <span className="text-xs text-gray-500">Dashboard</span>
              </div>
            </Link>
            <Link href="/" className="text-sm text-gray-600 hover:text-mpdi-yellow font-medium">
              ← Back to Website
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Blog Posts */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-mpdi-yellow transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-mpdi-yellow/10 rounded-xl flex items-center justify-center">
                <FileText size={24} className="text-mpdi-yellow" />
              </div>
              <span className="text-sm text-green-600 font-bold">+12%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalBlogPosts}</h3>
            <p className="text-gray-600 text-sm">Blog Posts</p>
          </div>

          {/* Events */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-mpdi-green transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-mpdi-green/10 rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-mpdi-green" />
              </div>
              <span className="text-sm text-green-600 font-bold">+5%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalEvents}</h3>
            <p className="text-gray-600 text-sm">Events</p>
          </div>

          {/* Messages */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <MessageSquare size={24} className="text-blue-500" />
              </div>
              <span className="text-sm text-green-600 font-bold">+8%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalMessages}</h3>
            <p className="text-gray-600 text-sm">Messages</p>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-500 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Download size={24} className="text-purple-500" />
              </div>
              <span className="text-sm text-green-600 font-bold">+3%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalPublications}</h3>
            <p className="text-gray-600 text-sm">Publications</p>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/admin/blog"
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-mpdi-yellow hover:shadow-lg transition-all group"
              >
                <FileText size={24} className="text-mpdi-yellow mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Manage Blog Posts</h3>
                <p className="text-sm text-gray-600">Create, edit, or delete blog posts</p>
              </Link>

              <Link 
                href="/admin/events"
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-mpdi-green hover:shadow-lg transition-all group"
              >
                <Calendar size={24} className="text-mpdi-green mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Manage Events</h3>
                <p className="text-sm text-gray-600">Create or update events</p>
              </Link>

              <Link 
                href="/admin/messages"
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <MessageSquare size={24} className="text-blue-500 mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">View Messages</h3>
                <p className="text-sm text-gray-600">Check contact form submissions</p>
              </Link>

              <Link 
                href="/admin/publications"
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all group"
              >
                <Download size={24} className="text-purple-500 mb-2" />
                <h3 className="font-bold text-gray-900 mb-1">Manage Publications</h3>
                <p className="text-sm text-gray-600">Upload or update documents</p>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-mpdi-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={16} className="text-mpdi-yellow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}