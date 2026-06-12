import HeroSlider from '@/components/Hero/HeroSlider';
import AboutSection from '@/components/AboutSection/AboutSection';
import TrustBadges from '@/components/common/TrustBadges';
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid';
import BrandLogos from '@/components/BrandLogos/BrandLogos';
import CityPills from '@/components/CityPills/CityPills';
import FAQ from '@/components/FAQ/FAQ';
import LeadForm from '@/components/LeadForm/LeadForm';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { faqs, reviews } from '@/utils/data';
import { localBusinessSchema, faqSchema } from '@/utils/schema';

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

      {/* ══ HERO SLIDER ══ */}
      <HeroSlider />

      {/* ══ ABOUT SECTION ══ */}
      <AboutSection />

      {/* ══ TRUST STATS BAR ══ */}
      <TrustBadges />

      {/* ══ SERVICES GRID ══ */}
      <ServiceGrid />

      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Repair Book Karna Hai? — 3 Simple Steps
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Pehle price batayenge, phir kaam — koi surprise nahi</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-0.5 bg-gradient-to-r from-[#1B4FD8] via-[#F97316] to-[#25D366]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01', icon: '📞',
                  iconBg: 'bg-[#1B4FD8]', shadow: 'shadow-blue-200',
                  title: 'Call Ya WhatsApp Karo',
                  desc: 'Ek call ya message — 2 minute mein expert aapki problem sunega aur estimated cost batayega.',
                },
                {
                  step: '02', icon: '🔧',
                  iconBg: 'bg-[#F97316]', shadow: 'shadow-orange-200',
                  title: '30-60 Min Mein Technician',
                  desc: 'Background-verified, trained technician directly aapke ghar aayega — same day service.',
                },
                {
                  step: '03', icon: '✅',
                  iconBg: 'bg-[#25D366]', shadow: 'shadow-green-200',
                  title: 'Repair + GST Invoice',
                  desc: 'Problem fix, GST invoice milegi. 30-day warranty — same issue aaye toh free repair.',
                },
              ].map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 w-20 h-20 ${item.iconBg} rounded-2xl flex flex-col items-center justify-center mb-4 shadow-xl ${item.shadow}`}>
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-white/70 text-[10px] font-bold mt-0.5">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-orange-900/30"
            >
              📞 Abhi Book Karein — Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* ══ CITIES ══ */}
      <CityPills />

      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Service Coverage
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              AC &amp; Appliance Repair in Indore &amp; Bhopal
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Same-day certified technicians across 70+ localities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 card-lift shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Indore</h3>
                  <p className="text-gray-500 text-xs font-semibold">AC Repair &amp; Home Appliance Service</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[['36+', 'Areas Covered'], ['30 Min', 'Response Time'], ['3,000+', 'Repairs Done']].map(([val, label]) => (
                  <div key={label} className="text-center bg-gray-50 rounded-xl py-3 px-2 border border-gray-100">
                    <p className="text-lg font-black text-gray-900 leading-tight">{val}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                <span className="font-semibold text-gray-700">Top Areas:</span> Vijay Nagar, Scheme 54, AB Road, Rau, Palasia, Super Corridor, Nipania &amp; 29 more
              </p>
              <a
                href="tel:+918889539174"
                className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
              >
                📞 Book Repair in Indore
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 card-lift shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Bhopal</h3>
                  <p className="text-gray-500 text-xs font-semibold">AC Repair &amp; Home Appliance Service</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[['35+', 'Areas Covered'], ['30 Min', 'Response Time'], ['2,000+', 'Repairs Done']].map(([val, label]) => (
                  <div key={label} className="text-center bg-gray-50 rounded-xl py-3 px-2 border border-gray-100">
                    <p className="text-lg font-black text-gray-900 leading-tight">{val}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                <span className="font-semibold text-gray-700">Top Areas:</span> Kolar, Arera Colony, MP Nagar, BHEL, Hoshangabad Road, Shahpura &amp; 29 more
              </p>
              <a
                href="tel:+918889539174"
                className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
              >
                📞 Book Repair in Bhopal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BRAND LOGOS ══ */}
      <BrandLogos />

      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Why Us
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              HomeRepairPro Kyun Choose Karein?
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Urban Company se fast, local se affordable — koi middleman nahi</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⚡', title: '30 Min Response', desc: 'Call karo — 30-60 min mein technician ghar. Koi wait nahi.' },
              { icon: '✅', title: 'Police-Verified', desc: 'Background-checked, trained technicians. Ghar mein 100% safe.' },
              { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Starting ₹350 — repair se pehle full estimate. No surprise.' },
              { icon: '🛡️', title: '30-Day Warranty', desc: 'Same problem dobara aaye toh free repair — 100% guaranteed.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center card-lift hover:border-gray-900 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Customer Reviews
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              5,000+ Customers Ka Bharosa
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-sm">⭐ 4.8/5 Google Rating — Indore, Bhopal &amp; 8 Cities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="relative bg-white rounded-2xl p-5 border border-gray-200 card-lift overflow-hidden hover:border-gray-400 hover:shadow-md transition-all"
              >
                <span className="absolute -top-2 -left-1 text-[80px] leading-none text-gray-200 font-black select-none pointer-events-none">&ldquo;</span>
                <div className="flex items-center gap-3 mb-3 relative">
                  <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">📍 {r.city}</p>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">{'⭐'.repeat(r.rating)}</div>
                </div>
                {r.service && (
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2 border border-gray-200">
                    🔧 {r.service}
                  </span>
                )}
                <p className="text-gray-600 text-sm leading-relaxed relative">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-orange-50 relative overflow-hidden border-t border-orange-100" id="book">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Free Estimate
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Free Estimate Maango — Abhi
            </h2>
            <p className="text-orange-700 text-sm">
              30 minute mein callback — Pehle cost batayenge, koi obligation nahi
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
            <LeadForm />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            {['✅ No Spam Calls', '🔒 Data Secure', '⚡ 30 Min Callback'].map((item) => (
              <span key={item} className="text-orange-700 text-xs font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <FAQ items={faqs} />

      <section className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 left-10 w-48 h-48 rounded-full bg-orange-900/20 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p className="text-white font-black text-2xl md:text-3xl mb-1">Aaj Repair Book Karein</p>
          <p className="text-orange-100 text-sm mb-5">
            AC · Fridge · Washing Machine · Geyser · Starting ₹350 · GST Invoice · 30-Day Warranty
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-white text-[#F97316] font-black text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-all shadow-xl hover:scale-105"
            >
              📞 +91 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-base px-6 py-4 rounded-xl hover:bg-green-500 transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
