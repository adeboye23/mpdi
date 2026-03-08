'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, CheckCircle, Shield, Award } from 'lucide-react'

export default function DonatePage() {
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const presetAmounts = [5000, 10000, 25000, 50000, 100000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Stripe integration will go here later
    alert('Donation system coming soon! Thank you for your interest.')
  }

  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#6D712E]/5 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6D712E]/20 text-[#6D712E] font-bold text-xs tracking-wider mb-8">
              <Heart size={16} className="text-red-500" />
              SUPPORT OUR MISSION
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Support independent, ethical media in Africa.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Your gift funds training scholarships, emergency welfare, field research and media literacy campaigns. We publish periodic impact reports to donors.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6D712E] mb-2">₦2.5M+</div>
              <p className="text-gray-600">Raised for Training</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6D712E] mb-2">500+</div>
              <p className="text-gray-600">Journalists Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6D712E] mb-2">50+</div>
              <p className="text-gray-600">Events Funded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              
              {/* Left: Info */}
              <div className="md:w-2/5 bg-[#6D712E] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC600] rounded-full blur-[80px] opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Heart size={32} className="text-[#FFC600]" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6">Support Ethical Media</h2>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    Your gift funds training scholarships, emergency welfare, field research, and media literacy campaigns.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-[#FFC600]" size={20} />
                      <span className="font-medium">100% Transparent Use of Funds</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="text-[#FFC600]" size={20} />
                      <span className="font-medium">Secure Payment Processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="text-[#FFC600]" size={20} />
                      <span className="font-medium">Quarterly Impact Reports</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-sm opacity-60 relative z-10">
                  MPDI is a registered non-profit organization
                </div>
              </div>

              {/* Right: Form */}
              <div className="md:w-3/5 p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Make Your Donation</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                      Select Amount (NGN)
                    </label>
                    
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map(amt => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt.toString())}
                          className={`py-4 border-2 rounded-xl font-bold transition-all ${
                            amount === amt.toString()
                              ? 'border-[#6D712E] bg-[#6D712E] text-white'
                              : 'border-gray-200 text-gray-600 hover:border-[#6D712E] hover:bg-[#6D712E]/5'
                          }`}
                        >
                          ₦{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">₦</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter custom amount"
                        className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FFC600] focus:outline-none font-bold text-gray-900 text-lg"
                        required
                      />
                    </div>
                  </div>

                  {/* Giving Options */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                      Giving Options
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <button
                        type="button"
                        onClick={() => setFrequency('one-off')}
                        className={`py-3 px-2 rounded-lg font-bold text-sm transition-all ${
                          frequency === 'one-off'
                            ? 'bg-[#6D712E] text-white'
                            : 'bg-white border border-gray-200 text-gray-600 hover:border-[#6D712E]'
                        }`}
                      >
                        One-off Gift
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`py-3 px-2 rounded-lg font-bold text-sm transition-all ${
                          frequency === 'monthly'
                            ? 'bg-[#6D712E] text-white'
                            : 'bg-white border border-gray-200 text-gray-600 hover:border-[#6D712E]'
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        className="py-3 px-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm hover:border-[#6D712E] transition-colors"
                      >
                        Sponsor Event
                      </button>
                      <button
                        type="button"
                        className="py-3 px-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm hover:border-[#6D712E] transition-colors"
                      >
                        Corporate CSR
                      </button>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FFC600] focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FFC600] focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full shimmer-button px-8 py-4 rounded-xl font-bold text-black text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl uppercase tracking-wide"
                  >
                    Donate Now
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Automated receipt + thank-you email sent immediately. Quarterly impact reports included.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Your Donation Helps</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#FFC600]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">₦5,000</h3>
                <p className="text-gray-600">
                  Provides course materials for one journalist in our ethics training programme
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#6D712E]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">₦25,000</h3>
                <p className="text-gray-600">
                  Covers emergency welfare support for a journalist in crisis
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">₦50,000</h3>
                <p className="text-gray-600">
                  Sponsors a full scholarship for our digital journalism masterclass
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">₦100,000+</h3>
                <p className="text-gray-600">
                  Funds research and advocacy campaigns for press freedom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
