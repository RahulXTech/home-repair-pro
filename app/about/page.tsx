import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { cities, services } from '@/lib/data';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us — HomeRepairPro | GST & MSME Registered',
  description: 'HomeRepairPro — 5+ years, 5000+ repairs, 50+ verified technicians. GST & MSME registered appliance repair service in Indore, Bhopal & 8 cities.',
  alternates: { canonical: 'https://homerepairpro.in/about' },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <section className="bg-[#1B4FD8] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          About HomeRepairPro
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          Central India&apos;s most trusted home appliance repair service — GST & MSME registered, serving since 2019.
        </p>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '5+', label: 'Years Experience' },
              { num: '5,000+', label: 'Appliances Repaired' },
              { num: '50+', label: 'Verified Technicians' },
              { num: '10', label: 'Cities Served' },
            ].map((stat) => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-5">
                <p className="text-3xl font-black text-[#1B4FD8]">{stat.num}</p>
                <p className="text-gray-600 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hamare Baare Mein</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                HomeRepairPro ki shuruat 2019 mein Indore se hui thi ek simple idea ke saath — log appliance repair ke liye bahut wait karte hain aur overcharge hote hain. Humne same day, transparent pricing ke saath service dena shuru kiya.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Aaj hum Indore, Bhopal, Ujjain, Jabalpur, Jaipur aur 5 aur cities mein 50+ verified technicians ke saath service de rahe hain. Har technician background-verified aur trained hai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hum GST registered business hain (GST No: 23DNCPG4775E1Z7) aur Udyam (MSME) registered hain (Udyam No: UDYAM-MP-10-0042011). Har repair ke baad proper GST invoice milti hai.
              </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/about-technician.png"
                alt="HomeRepairPro technician at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Legal & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: '📋',
                title: 'GST Registered Business',
                detail: 'GST No: 23DNCPG4775E1Z7 — Har service pe proper GST invoice milti hai.',
              },
              {
                icon: '🏛️',
                title: 'MSME / Udyam Registered',
                detail: 'Udyam No: UDYAM-MP-10-0042011 — Government recognized small business.',
              },
              {
                icon: '✅',
                title: 'Verified Technicians',
                detail: 'Sab technicians background-verified aur professionally trained hain.',
              },
              {
                icon: '🛡️',
                title: '30-Day Service Warranty',
                detail: 'Har repair pe 30-day warranty — same problem dobara aaye toh free fix.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-blue-50 rounded-xl">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government & Corporate */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Government & Corporate Clients</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            HomeRepairPro government offices, corporate buildings, aur institutional clients ko bhi AMC (Annual Maintenance Contract) aur bulk repair services provide karta hai. Humari team large-scale deployments handle kar sakti hai — 100+ appliances ek hi location pe.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            B2B clients ke liye purchase order, work order, GST invoice sab properly maintained karte hain. Service agreement aur rate card download karne ke liye contact karo.
          </p>
          <a
            href="/government-contracts"
            className="inline-flex items-center gap-2 bg-[#1B4FD8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Government Contracts Page →
          </a>
        </div>
      </section>

      {/* Cities */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hamare Service Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((c) => (
              <span key={c.slug} className="px-4 py-2 bg-blue-50 text-[#1B4FD8] rounded-full font-medium text-sm border border-blue-200">
                📍 {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-10 bg-[#1B4FD8]">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Repair Book Karo</h2>
          <div className="bg-white rounded-2xl p-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
