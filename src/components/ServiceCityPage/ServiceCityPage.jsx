import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm/LeadForm';
import FAQ from '@/components/FAQ/FAQ';
import Link from 'next/link';
import { services, pricingPlans } from '@/utils/data';
import { servicePageSchema, faqSchema, localBusinessSchema } from '@/utils/schema';

function GoogleGIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.91 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleWordmark() {
  return (
    <span className="font-bold text-sm tracking-tight">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

const whyUs = [
  { icon: '⚡', title: '30–60 Min Response', desc: 'Call karo — same day technician aapke ghar pe.' },
  { icon: '🛡️', title: 'Background Verified', desc: 'Trained, police-verified technicians. 100% safe.' },
  { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Repair se pehle full estimate. Koi surprise nahi.' },
  { icon: '✅', title: '30-Day Warranty', desc: 'Same issue dobara aaye toh free repair — guaranteed.' },
];

export default function ServiceCityPage({ service, city }) {
  const url = `https://homerepairpro.in/${service.slug}-${city.slug}`;

  const serviceFaqs = [
    {
      q: `${city.name} mein ${service.name} ke liye kitna charge hai?`,
      a: `${city.name} mein ${service.name} starting ₹${service.price} se hoti hai. Visiting charge ₹99 hai jo service pe adjust ho jaata hai. Parts alag se charge hote hain.`,
    },
    {
      q: `${city.name} mein same day ${service.name} milegi?`,
      a: `Haan! ${city.name} mein hum same day service provide karte hain. Usually 30-60 minutes mein technician pahunch jaata hai.`,
    },
    {
      q: `Kya ${service.name} ke baad warranty milegi?`,
      a: `Haan, ${service.name} pe 30-day warranty milti hai. Same problem dobara aaye toh free service milegi.`,
    },
    {
      q: `Kya aap ${city.name} mein sab brands repair karte ho?`,
      a: `Haan, hum ${city.name} mein LG, Samsung, Whirlpool, Voltas, Daikin, Carrier, Godrej, Haier aur sabhi major brands ki ${service.name} karte hain.`,
    },
    {
      q: `${service.name} ke liye appointment kaise lein?`,
      a: `Sirf call ya WhatsApp karo +91 88895 39174 pe — ya neeche form fill karo. 30 minute mein callback milega.`,
    },
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const activePlans = service.plans ?? pricingPlans;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema(service.name, city.name, url)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(serviceFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} in ${city.name}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* layered gradients: dark bottom for text, subtle left vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12 pt-24">

          {/* breadcrumb */}
          <p className="text-white/50 text-xs mb-4 font-medium tracking-wide">
            Home &rsaquo; {city.name} &rsaquo; {service.name}
          </p>

          {/* availability badge + google rating — side by side on sm+ */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
              Available Today in {city.name}
            </span>

            {/* Google rating badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-2.5">
              <GoogleGIcon className="w-8 h-8 flex-shrink-0" />
              <div>
                <p className="text-white font-black text-sm leading-none mb-1">Excellent</p>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FBBC05] text-sm leading-none">★</span>
                  ))}
                  <span className="text-white/80 text-xs font-bold ml-1">4.8</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white/50 text-[10px]">5,000+ reviews on</span>
                  <GoogleWordmark />
                </div>
              </div>
            </div>
          </div>

          {/* heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-3">
            {service.name}<br />
            <span className="text-[#F97316]">in {city.name}</span>
          </h1>

          {/* subtext */}
          <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl leading-relaxed">
            Certified technicians at your door in 30–60 mins &mdash; Same day, GST invoice, 30-day warranty.
          </p>

          {/* inline stats */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { val: '4.8★', label: 'Google Rating' },
              { val: '30 Min', label: 'Avg Response' },
              { val: `₹${service.price}`, label: 'Starting Price' },
              { val: '5,000+', label: 'Repairs Done' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center">
                <p className="text-white font-black text-base leading-tight">{val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="tel:+918889539174"
              className="flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-orange-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-xl shadow-orange-500/40"
            >
              <span className="text-xl">📞</span>
              <span>
                <span className="block text-xs font-semibold opacity-80 leading-none mb-0.5">Call for Free Estimate</span>
                <span className="block leading-none">88895 39174</span>
              </span>
            </a>
            <a
              href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-green-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-xl shadow-green-500/40"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>
                <span className="block text-xs font-semibold opacity-80 leading-none mb-0.5">Chat on WhatsApp</span>
                <span className="block leading-none">Instant Reply</span>
              </span>
            </a>
            <a
              href="#book"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-6 rounded-2xl text-sm transition-all"
            >
              📋 Get Free Estimate
            </a>
          </div>

          {/* social proof */}
          <p className="text-white/50 text-xs flex items-center gap-1.5">
            <span className="text-[#25D366]">✓</span>
            200+ customers served in {city.name} this month &nbsp;·&nbsp; No spam calls guaranteed
          </p>
        </div>
      </section>

      {/* ── Trust cards bar ── */}
      <section className="bg-[#1B4FD8] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-3">
            {[
              { val: 'Same Day',        label: 'Service Guaranteed' },
              { val: 'Verified',        label: 'Technicians Only'   },
              { val: `₹${service.price}`, label: 'Starting Price'  },
              { val: 'GST',             label: 'Invoice Included'   },
              { val: '30 Days',         label: 'Repair Warranty'    },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-2.5 text-center min-w-[100px]"
              >
                <p className="text-white font-black text-base leading-tight">✓ {val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us cards ── */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Why HomeRepairPro
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              {service.name} in {city.name} —<br className="hidden md:block" /> Kyon Choose Karein?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-4 md:p-5 border border-gray-200 hover:border-[#1B4FD8] hover:shadow-md transition-all text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 space-y-3 text-gray-700 text-sm leading-relaxed">
            <p>
              {city.name} mein {service.name} ke liye HomeRepairPro sabse trusted naam hai. 2019 se hum {city.name} ke hazaron ghar mein service de rahe hain — hamare sab technicians trained aur background-verified hain.
            </p>
            <p>
              Hum same day service guarantee karte hain. Subah call karo, dopahar tak technician aapke ghar pe hoga. Emergency service bhi available hai — Sunday aur holidays pe bhi.
            </p>
            <p>
              Har {service.name} ke baad proper GST invoice milti hai. Pricing transparent hai — koi hidden charges nahi. Service starting ₹{service.price} se, aur repair start se pehle complete estimate dete hain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
            <div>
              <span className="inline-block bg-blue-50 text-[#1B4FD8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Areas We Cover in {city.name}
              </h2>
            </div>
            <p className="text-gray-400 text-sm">{city.localities.length} localities covered</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {city.localities.map((area) => (
              <span key={area} className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-[#1B4FD8] rounded-full text-xs md:text-sm border border-blue-100 font-medium hover:bg-blue-100 transition-colors">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
            <div>
              <span className="inline-block bg-orange-50 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                All Brands
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Brands We Repair
              </h2>
            </div>
            <p className="text-gray-400 text-sm">{service.brands.length} brands supported</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.brands.map((brand) => (
              <span key={brand} className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs md:text-sm border border-gray-200 font-medium hover:border-[#F97316] hover:text-[#F97316] transition-colors">
                ✓ {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {service.name} Price in {city.name}
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — koi hidden charges nahi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {activePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 transition-all ${
                  plan.popular
                    ? 'bg-[#1B4FD8] text-white shadow-xl shadow-blue-200 pt-9 scale-[1.02]'
                    : 'bg-white border border-gray-200 text-gray-900 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F97316] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`font-bold text-base mb-3 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <p className={`text-4xl font-black mb-0.5 ${plan.popular ? 'text-white' : 'text-[#1B4FD8]'}`}>
                  ₹{plan.price}
                </p>
                <p className={`text-xs mb-5 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>onwards</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex gap-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className={`font-bold flex-shrink-0 ${plan.popular ? 'text-[#F97316]' : 'text-[#16A34A]'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+918889539174"
                  className={`block text-center w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? 'bg-white text-[#1B4FD8] hover:bg-blue-50'
                      : 'bg-[#1B4FD8] text-white hover:bg-blue-700'
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Form ── */}
      <section className="py-12 bg-orange-50 border-b border-orange-100" id="book">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Free Estimate
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {service.name} Book Karo
            </h2>
            <p className="text-orange-700 text-sm">{city.name} mein 30 minute mein callback</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
            <LeadForm defaultCity={city.name} defaultService={service.name} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={serviceFaqs} title={`${service.name} ${city.name} — FAQs`} />

      {/* ── Related Services ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-black text-gray-900 mb-5">
            Aur Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-${city.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#1B4FD8] hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm group-hover:text-[#1B4FD8] transition-colors">{s.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Starting ₹{s.price}</p>
                </div>
                <span className="ml-auto text-gray-300 group-hover:text-[#1B4FD8] transition-colors text-lg">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
