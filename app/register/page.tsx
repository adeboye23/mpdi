'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RegisterForm() {
  const searchParams = useSearchParams()
  const eventTitle = searchParams.get('event') || 'Event'
  
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-mpdi-yellow/10 to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-mpdi-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h1>
          <p className="text-gray-600 mb-8">
            We&apos;ve received your registration for {eventTitle}. You&apos;ll receive a confirmation email shortly.
          </p>
          <Link href="/" className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-2 text-mpdi-yellow font-bold mb-6 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Registration</h1>
          <p className="text-lg text-gray-600 mb-8">Register for: {eventTitle}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none transition-colors"
                placeholder="+234 123 456 7890"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Organization</label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-mpdi-yellow focus:outline-none transition-colors"
                placeholder="Your Organization (Optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gold px-8 py-4 rounded-full font-bold text-lg"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function Register() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <RegisterForm />
      </Suspense>
      <Footer />
    </>
  )
}
