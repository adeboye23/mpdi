'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, Edit, Trash2, X } from 'lucide-react'

export default function AdminBlog() {
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  })

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = () => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setBlogPosts(data || []))
      .catch(err => console.error(err))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingPost) {
        // Update existing post
        const res = await fetch(`/api/blog`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingPost.id, ...formData })
        })
        if (res.ok) {
          alert('Blog post updated successfully!')
        }
      } else {
        // Create new post
        const res = await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        if (res.ok) {
          alert('Blog post created successfully!')
        }
      }
      setShowForm(false)
      setEditingPost(null)
      setFormData({ title: '', content: '', author: '' })
      loadPosts()
    } catch (err) {
      alert('Error saving post')
    }
  }

  const handleEdit = (post: any) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author
    })
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    try {
      const res = await fetch(`/api/blog?id=${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        alert('Post deleted successfully!')
        loadPosts()
      }
    } catch (err) {
      alert('Error deleting post')
    }
  }

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Blog Posts</h1>
            <p className="text-gray-600">Create, edit, or delete blog posts</p>
          </div>
          <button 
            onClick={() => {
              setEditingPost(null)
              setFormData({ title: '', content: '', author: '' })
              setShowForm(true)
            }}
            className="btn-gold px-6 py-3 rounded-full font-bold inline-flex items-center gap-2"
          >
            <Plus size={20} /> Add New Post
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Author</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Date</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{post.title}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{post.author}</td>
                  <td className="px-6 py-4 text-gray-600">{new Date(post.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleEdit(post)}
                      className="text-blue-600 hover:text-blue-700 mr-4"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Post Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
              </h2>
              <button 
                onClick={() => {
                  setShowForm(false)
                  setEditingPost(null)
                }} 
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none"
                  placeholder="Enter blog post title"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Author *</label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Content *</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none"
                  placeholder="Write your blog post content..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-gold px-6 py-3 rounded-full font-bold"
                >
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingPost(null)
                  }}
                  className="px-6 py-3 border-2 border-gray-300 rounded-full font-bold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}