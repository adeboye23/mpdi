'use client'

import Link from 'next/link'
import { ArrowLeft, Plus, Upload, Download, Trash2 } from 'lucide-react'

export default function AdminPublications() {
  const publications = [
    { id: 1, title: '2024 Annual Impact Report', size: '2.3 MB', downloads: 45 },
    { id: 2, title: 'Policy Brief: Media Safety', size: '1.1 MB', downloads: 32 },
    { id: 3, title: 'Research: Digital Literacy', size: '3.7 MB', downloads: 28 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link href="/admin" className="inline-flex items-center gap-2 text-mpdi-yellow font-bold hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Publications</h1>
            <p className="text-gray-600">Upload, edit, or delete publications</p>
          </div>
          <button className="btn-gold px-6 py-3 rounded-full font-bold inline-flex items-center gap-2">
            <Upload size={20} /> Upload New File
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Size</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Downloads</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((pub) => (
                <tr key={pub.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{pub.title}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{pub.size}</td>
                  <td className="px-6 py-4 text-gray-600">{pub.downloads}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-700 mr-4">
                      <Download size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
