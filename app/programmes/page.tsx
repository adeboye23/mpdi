'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Users, BookOpen, Globe, Shield, Mic, ArrowRight, Calendar, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ProgrammesPage() {
  const programmes = [
    {
      id: 1,
      title: "Collaborative Events",
      icon: Users,
      color: "border-[#FFC600]",
      bgColor: "bg-[#FFC600]",
      textColor: "text-[#FFC600]",
      what: "Annual Media Summit, MPDI Conference, Media Hangout series, Pan-African Mediathon.",
      purpose: "Convene stakeholders, incubate ideas and publicise sector solutions.",
      format: "Hybrid (in-person anchors + livestream).",
      outputs: "Post-event reports, communiqués, participant database.",
      action: "View Events Calendar"
    },
    {
      id: 2,
      title: "Media Capacity & Training",
      icon: BookOpen,
      color: "border-[#6D712E]",
      bgColor: "bg-[#6D712E]",
      textColor: "text-[#6D712E]",
      what: "Accredited modules, short courses, masterclasses, LMS-hosted programmes.",
      purpose: "Priority areas: Ethics, fact-checking, data journalism, digital safety, investigative techniques.",
      format: "In-person workshops, online courses, university partnerships (Pan-Atlantic University).",
      outputs: "Certificates, course materials, alumni network.",
      action: "View Course Calendar"
    },
    {
      id: 3,
      title: "Welfare & Emergency Support",
      icon: Shield,
      color: "border-red-500",
      bgColor: "bg-red-500",
      textColor: "text-red-500",
      what: "Welfare fund governance, case management, medical support, legal referrals.",
      purpose: "Providing safety net for practitioners facing hardship or legal challenges.",
      format: "Strict eligibility & transparency protocols.",
      outputs: "Number of beneficiaries assisted (quarterly review).",
      action: "Check Eligibility"
    },
    {
      id: 4,
      title: "Advocacy & Policy Engagement",
      icon: Globe,
      color: "border-[#00008B]",
      bgColor: "bg-[#00008B]",
      textColor: "text-[#00008B]",
      what: "Campaigns (e.g., #FreeAndValid), policy briefs, regulator engagement.",
      purpose: "Protecting press freedom and digital rights across Africa.",
      format: "Position papers, policy roundtables, violations database.",
      outputs: "Policy briefs, campaign reports, advocacy wins.",
      action: "Read Policy Briefs"
    },
    {
      id: 5,
      title: "Media Development Content",
      icon: Mic,
      color: "border-[#0ADD08]",
      bgColor: "bg-[#0ADD08]",
      textColor: "text-[#0ADD08]",
      what: "Documentaries, podcasts, research reports, toolkits for media literacy.",
      purpose: "Promoting media literacy and shaping public perceptions.",
      format: "Hosted in Media Centre, partners' channels, social platforms.",
      outputs: "Published content, research papers, educational materials.",
      action: "Explore Content"
    }
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
              OUR PROGRAMMES
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Five Interlocking <span className="text-[#6D712E]">Programme Lines</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              MPDI runs five interlocking programme lines. Each line has outcomes, delivery modes and clear entry points for beneficiaries.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {programmes.map((prog) => (
              <div 
                key={prog.id}
                className={`bg-white rounded-2xl shadow-sm border-l-8 ${prog.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="lg:w-1/4">
                      <div className={`w-16 h-16 ${prog.bgColor} rounded-2xl flex items-center justify-center text-white mb-4`}>
                        <prog.icon size={32} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {prog.id}. {prog.title}
                      </h2>
                      <Link 
                        href={`/programmes/${prog.id}`}
                        className={`inline-flex items-center gap-2 ${prog.textColor} font-bold text-sm hover:gap-3 transition-all`}
                      >
                        {prog.action} <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Details Grid */}
                    <div className="lg:w-3/4 grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFC600]"></span>
                          What
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{prog.what}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFC600]"></span>
                          Purpose
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{prog.purpose}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFC600]"></span>
                          Format
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{prog.format}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FFC600]"></span>
                          Outputs
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{prog.outputs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6D712E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to get involved in our programmes?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/media-centre"
              className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2"
            >
              View Events <Calendar size={20} />
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-[#6D712E] hover:bg-gray-100 px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-colors"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
