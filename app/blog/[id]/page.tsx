'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        const foundPost = data.find((p: any) => p.id === parseInt(params.id as string))
        if (foundPost) {
          setPost(foundPost)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [params.id])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#FFC600] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <button 
              onClick={() => router.push('/blog')}
              className="text-[#6D712E] font-bold hover:underline"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#6D712E]/5 to-white">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => router.push('/blog')}
            className="inline-flex items-center gap-2 text-[#6D712E] font-bold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} /> Back to Blog
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6D712E]/20 text-[#6D712E] font-bold text-xs tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFC600] animate-pulse"></span>
              MPDI BLOG
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </article>
        </div>
      </section>

      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <button 
            onClick={() => router.push('/blog')}
            className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} /> View More Articles
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}