'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PartnersPage() {
  const partners = [
    {
      name: 'Pan-Atlantic University',
      description: 'Training & accreditation partner',
      logo: 'PAU',
      category: 'Academic'
    },
    {
      name: 'U.S. American Corner',
      description: 'Events venue & support',
      logo: 'US Consulate',
      category: 'International'
    },
    {
      name: 'UNESCO',
      description: 'Collaboration on media literacy',
      logo: 'UNESCO',
      category: 'International'
    },
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
              COLLABORATIONS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#6D712E]">Partners</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Working together with universities, media houses, international organizations, and civil society to strengthen Africa's media ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="group flex flex-col items-center text-center"
              >
                {/* Logo Container with Grayscale Effect */}
                <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-6 partner-logo cursor-pointer border border-gray-200 group-hover:border-[#FFC600] transition-all">
                  <div className="text-3xl font-bold text-gray-400 group-hover:text-[#6D712E] transition-colors">
                    {partner.logo}
                  </div>
                </div>

                {/* Partner Info */}
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {partner.description}
                </p>
                <span className="text-xs font-bold text-[#FFC600] uppercase tracking-wider">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          {/* Add More Partners Placeholder */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 opacity-50">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 font-bold">Partner Logo</span>
                </div>
                <h3 className="font-bold text-lg text-gray-400">Partner Name</h3>
                <p className="text-sm text-gray-400">Partnership description</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#FFC600]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Institutions</h3>
                <p className="text-gray-600 mb-4">
                  Partner with us for training accreditation, curriculum development, and student internships.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC600] font-bold">•</span>
                    Co-branded training programmes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC600] font-bold">•</span>
                    Research collaboration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC600] font-bold">•</span>
                    Student placement opportunities
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#6D712E]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Media Houses</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate on content production, staff training, and industry standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6D712E] font-bold">•</span>
                    Newsroom training programmes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6D712E] font-bold">•</span>
                    Joint content initiatives
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6D712E] font-bold">•</span>
                    Ethics workshops
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#00008B]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Development Partners</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission through grants, project funding, and technical assistance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00008B] font-bold">•</span>
                    Programme funding
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00008B] font-bold">•</span>
                    Capacity building support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00008B] font-bold">•</span>
                    Knowledge exchange
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#0ADD08]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Partners</h3>
                <p className="text-gray-600 mb-4">
                  Engage through CSR initiatives, event sponsorship, and brand alignment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ADD08] font-bold">•</span>
                    Event sponsorships
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ADD08] font-bold">•</span>
                    CSR programme alignment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0ADD08] font-bold">•</span>
                    Brand visibility opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-[#6D712E] rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-lg opacity-90 mb-8">
              "We welcome partnerships with universities, media houses, donors and civil society."
            </p>
            <a 
              href="/contact"
              className="btn-gold px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Contact Us About Partnership
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
