import TrustBadges from '@/components/TrustBadges';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import CityPills from '@/components/CityPills';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import { faqs, reviews } from '@/lib/data';
import { localBusinessSchema, faqSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <section className="relative bg-[#1B4FD8] overflow-hidden">

        {/* ── MOBILE layout: text top, image below ── */}
        <div className="md:hidden">
          <div className="px-4 pt-16 pb-5">
            <p className="text-blue-200 text-xs font-medium mb-2 tracking-wide uppercase">
              Indore • Bhopal • 10 Cities
            </p>
            <h1 className="text-3xl font-black text-white leading-tight mb-2">
              Indore & Bhopal Ka<br />
              <span className="text-[#F97316]">#1 Appliance Repair ✓</span>
            </h1>
            <p className="text-blue-100 text-sm mb-3 font-medium">
              AC • Washing Machine • Fridge • Geyser
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 text-xs text-blue-200">
              <span>⚡ 30 Min Response</span>
              <span>✅ Verified Technicians</span>
              <span>💰 Starting ₹299</span>
              <span>🛡️ 30-Day Warranty</span>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+918889539174"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#F97316] text-white font-bold py-3.5 px-3 rounded-xl text-sm"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-3.5 px-3 rounded-xl text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
          {/* Appliance image — mobile, below text */}
          <div className="relative w-full h-56 px-2 pb-2">
            <Image
              src="/hero-appliances.png"
              alt="AC, Washing Machine, Refrigerator, Geyser, Microwave, Chimney repair"
              fill
              priority
              quality={90}
              className="object-contain object-center drop-shadow-2xl"
              sizes="100vw"
            />
          </div>
        </div>

        {/* ── DESKTOP layout: text left, image right ── */}
        <div className="hidden md:flex items-center min-h-[480px] max-w-6xl mx-auto px-4 gap-4">
          <div className="relative z-10 flex-1 max-w-lg py-12">
            <p className="text-blue-200 text-sm font-medium mb-2 tracking-wide uppercase">
              Indore • Bhopal • 10 Cities
            </p>
            <h1 className="text-5xl font-black text-white leading-tight mb-3">
              Indore & Bhopal Ka<br />
              <span className="text-[#F97316]">#1 Appliance Repair ✓</span>
            </h1>
            <p className="text-blue-100 text-base mb-2 max-w-md font-medium">
              AC • Washing Machine • Fridge • Geyser — Ek Call Mein Fix
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-xs text-blue-200">
              <span>⚡ 30 Min Response</span>
              <span>✅ Verified Technicians</span>
              <span>💰 Starting ₹299</span>
              <span>🛡️ 30-Day Warranty</span>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+918889539174"
                className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors"
              >
                📞 Call: 88895 39174
              </a>
              <a
                href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Appliance image — desktop right */}
          <div className="flex-shrink-0 relative w-[520px] h-[340px]">
            <Image
              src="/hero-appliances.png"
              alt="AC, Washing Machine, Refrigerator, Geyser, Microwave, Chimney repair"
              fill
              priority
              quality={90}
              className="object-contain object-center drop-shadow-2xl"
              sizes="520px"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustBadges />

      {/* SERVICES */}
      <ServiceGrid />

      {/* HOW IT WORKS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            Repair Book Karna Hai? — 3 Simple Steps
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">Pehle price batayenge, phir kaam shuru karenge — koi surprise nahi</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', icon: '📞', title: 'Call Ya WhatsApp Karo', desc: 'Ek call ya message — 2 minute mein humara expert aapki problem sunega aur estimated cost batayega.' },
              { step: '2', icon: '🔧', title: '30-60 Min Mein Technician', desc: 'Background-verified, trained technician directly aapke ghar aayega — same day, Indore & Bhopal mein.' },
              { step: '3', icon: '✅', title: 'Repair + GST Invoice', desc: 'Problem fix, GST invoice milegi. 30-day warranty — same issue aaye toh free repair guaranteed.' },
            ].map((item) => (
              <div key={item.step} className="relative text-center p-6 bg-blue-50 rounded-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B4FD8] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="text-4xl mb-3 mt-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <CityPills />

      {/* WHY CHOOSE US */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            HomeRepairPro Kyun Choose Karein?
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Urban Company se fast, local service centers se affordable — aur koi middleman nahi</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⚡', title: '30 Min Response', desc: 'Call karo — 30-60 minute mein technician aapke ghar. Koi wait nahi.' },
              { icon: '✅', title: 'Police-Verified', desc: 'Background-checked, brand-trained technicians only. Ghar mein safe.' },
              { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Starting ₹299 — repair shuru hone se pehle full estimate milegi.' },
              { icon: '🛡️', title: '30-Day Warranty', desc: 'Same problem dobara aaye toh free repair — 100% guaranteed.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            5,000+ Customers Ka Bharosa
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">⭐ 4.8/5 Google Rating — Indore, Bhopal & 8 Cities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs">📍 {r.city}</p>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">{'⭐'.repeat(r.rating)}</div>
                </div>
                {(r as { service?: string }).service && (
                  <span className="inline-block bg-blue-100 text-[#1B4FD8] text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    🔧 {(r as { service?: string }).service}
                  </span>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-10 bg-[#1B4FD8]" id="book">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
            Free Estimate Maango — Abhi
          </h2>
          <p className="text-center text-blue-200 mb-6 text-sm">
            30 minute mein callback — Repair cost pehle batayenge, koi obligation nahi
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* BOTTOM CTA */}
      <section className="py-8 bg-[#F97316] text-center">
        <p className="text-white font-bold text-xl mb-1">Aaj Repair Book Karein — Same Day Service</p>
        <p className="text-orange-100 text-sm mb-4">AC • Fridge • Washing Machine • Geyser • Starting ₹299 • GST Invoice • 30-Day Warranty</p>
        <a
          href="tel:+918889539174"
          className="inline-block bg-white text-[#F97316] font-black text-xl px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors"
        >
          📞 +91 88895 39174
        </a>
      </section>
    </>
  );
}
