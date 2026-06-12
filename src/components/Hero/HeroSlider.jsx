'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { services, cities } from '@/utils/data';

const slides = [
  {
    badge: '⚡ Same Day Service · Starting ₹349',
    headline: 'Ghar Ki Har Repair',
    accent: 'Ek Call Mein!',
    sub: 'AC · Fridge · Washing Machine · Geyser · Microwave — Verified Technician, GST Invoice, 30-Day Warranty.',
    stats: [['5,000+', 'Repairs Done'], ['4.8/5', 'Google Rating'], ['30-Day', 'Warranty']],
    image: '/images/hero-all-appliances.png',
    imageAlt: 'HomeRepairPro — All Home Appliance Repair Services',
  },
  {
    badge: '🏆 Verified Technicians · All Brands',
    headline: 'AC Nahi Chal Raha?',
    accent: 'Hum Fix Karenge!',
    sub: 'Gas refill, PCB repair, deep clean — 20+ brands. 30–60 min mein expert aapke ghar.',
    stats: [['₹449+', 'AC Service'], ['30 Min', 'Response'], ['All Brands', 'Covered']],
    image: '/images/hero-ac-repair.png',
    imageAlt: 'AC Repair Service — HomeRepairPro Technician',
  },
];

export default function HeroSlider() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [city, setCity]       = useState('');

  const goTo = useCallback((idx) => {
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const handleBook = () => {
    const svc = service || 'home appliance repair';
    const cty = city    || 'my city';
    const ph  = phone   || 'abhi batata hun';
    const msg = `Hi HomeRepairPro! Mujhe ${svc} chahiye ${cty} mein. Mera number: ${ph}. Please call/WhatsApp karo.`;
    window.open(`https://wa.me/918889539174?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const s = slides[active];

  return (
    <section
      className="relative flex flex-col lg:flex-row min-h-[520px] lg:min-h-[600px] overflow-hidden bg-[#040d1f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ══ LEFT — FULL-BLEED IMAGE SLIDER (reference style) ══ */}
      <div className="relative flex-1 overflow-hidden min-h-[400px] lg:min-h-0">

        {/* Background image — full bleed, no heavy overlay */}
        <div key={`img-${animKey}`} className="absolute inset-0 hero-img-slide">
          <Image
            src={s.image}
            alt={s.imageAlt}
            fill
            priority={active === 0}
            quality={92}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>

        {/* Only a light gradient at bottom for text — image stays bright like reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* ── LEFT ARROW ── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xl font-bold transition-all duration-200 hover:scale-110 shadow-lg"
        >
          ‹
        </button>

        {/* ── RIGHT ARROW ── */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xl font-bold transition-all duration-200 hover:scale-110 shadow-lg"
        >
          ›
        </button>

        {/* ── BOTTOM CONTENT ── */}
        <div key={`txt-${animKey}`} className="absolute inset-x-0 bottom-0 z-10 px-5 sm:px-8 lg:px-10 pb-6 hero-text-slide">

          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/50 rounded-full px-3 py-1 mb-3 backdrop-blur-sm w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-orange-100 text-[11px] sm:text-xs font-semibold tracking-wide">{s.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-2 drop-shadow-lg">
            {s.headline}{' '}
            <span className="bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#FBBF24] bg-clip-text text-transparent">
              {s.accent}
            </span>
          </h1>

          {/* Sub text */}
          <p className="text-white/75 text-xs sm:text-sm mb-4 max-w-md leading-relaxed hidden sm:block">
            {s.sub}
          </p>

          {/* Stats + dots row */}
          <div className="flex items-center justify-between flex-wrap gap-3">

            {/* Stats */}
            <div className="flex items-center gap-5 sm:gap-8">
              {s.stats.map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-white font-black text-lg sm:text-xl leading-tight drop-shadow">{val}</p>
                  <p className="text-sky-300/80 text-[10px] sm:text-xs font-medium">{lbl}</p>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active
                      ? 'w-7 bg-[#F97316] shadow-[0_0_8px_rgba(249,115,22,0.8)]'
                      : 'w-2 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="flex gap-3 mt-4 lg:hidden">
            <a
              href="tel:+918889539174"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#ea6a10] text-white font-bold py-3 rounded-xl text-sm shadow-[0_4px_16px_rgba(249,115,22,0.45)] active:scale-95 transition-all"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C+I+need+appliance+repair+service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm shadow-[0_4px_14px_rgba(37,211,102,0.35)] active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══ RIGHT — BOOKING FORM (unchanged) ══ */}
      <div className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col justify-center px-5 sm:px-6 py-7 lg:py-10 relative z-20
        bg-gradient-to-br from-white via-[#f4f8ff] to-[#e8f0fe]
        border-t-2 lg:border-t-0 lg:border-l-2 border-[#F97316]/30
        shadow-[-8px_0_40px_rgba(6,17,42,0.4)]">

        {/* Decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#06112a] rounded-t" />

        {/* Form header */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#06112a] to-[#1e3a6e] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            Free Estimate
          </span>
          <h2 className="text-xl font-black text-[#06112a] leading-snug">
            Repair Book Karein
          </h2>
          <p className="text-gray-500 text-sm mt-1">30 min mein callback — No spam</p>
        </div>

        {/* Form fields */}
        <div className="space-y-3">
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">— Select Service —</option>
              {services.map((svc) => (
                <option key={svc.slug} value={svc.name}>
                  {svc.emoji} {svc.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
          </div>

          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">— Select City —</option>
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
          </div>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="📱 Mobile Number"
            className="w-full border-2 border-blue-100 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white transition-colors"
          />

          <button
            onClick={handleBook}
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea6a10] hover:from-[#fb923c] hover:to-[#F97316] active:scale-95 text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_4px_28px_rgba(249,115,22,0.65)]"
          >
            Get Free Estimate →
          </button>

          <div className="flex gap-2">
            <a
              href="tel:+918889539174"
              className="flex-1 flex items-center justify-center gap-1.5 border-2 border-[#06112a] text-[#06112a] hover:bg-[#06112a] hover:text-white font-bold py-2.5 rounded-xl text-xs transition-all duration-200"
            >
              📞 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C+I+need+appliance+repair+service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-green-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-[0_2px_10px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5 pt-4 border-t border-blue-100">
          {['✅ No Spam', '🔒 Secure', '⚡ 30 Min Callback', '🛡️ 30-Day Warranty'].map((item) => (
            <span key={item} className="text-[#06112a]/50 text-[11px] font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
