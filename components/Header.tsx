'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { services } from '@/lib/data';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Nav bar */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-2">

        {/* Logo */}
        <Link href="/" onClick={close} className="-ml-5 translate-y-2 flex items-center overflow-hidden h-[56px] w-[215px] md:ml-0 md:translate-y-0 md:h-[60px] md:w-[260px] flex-shrink-0">
          <Image
            src="/logo.png"
            alt="HomeRepairPro"
            width={300}
            height={100}
            className="h-full w-full object-contain scale"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 mx-auto">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-[#1B4FD8] transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#1B4FD8] rounded-full transition-all duration-300 group-hover:w-4/5" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <a
            href="https://wa.me/918889539174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="tel:+918889539174"
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-white border-2 border-[#F97316] text-white hover:text-[#F97316] px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200"
          >
            📞 88895 39174
          </a>
        </div>

        {/* Mobile: call + hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <a
            href="tel:+918889539174"
            className="w-10 h-10 flex items-center justify-center bg-[#F97316] text-white rounded-lg text-lg flex-shrink-0"
            aria-label="Call us"
          >
            📞
          </a>
          <a
            href="#"
            role="button"
            onClick={(e) => { e.preventDefault(); setMenuOpen((v) => !v); }}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-gray-100 flex-shrink-0 cursor-pointer select-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-2xl border-t-2 border-[#1B4FD8]">

          {/* Nav links */}
          <div className="px-3 pt-2 pb-1">
            {[
              { label: '🏠 Home', href: '/' },
              { label: '🔧 Services', href: '/services' },
              { label: '👤 About Us', href: '/about' },
              { label: '📝 Blog', href: '/blog' },
              { label: '📞 Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between py-3 px-3 rounded-xl font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B4FD8] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-gray-300 text-lg">›</span>
              </Link>
            ))}
          </div>

          {/* Services chips */}
          <div className="px-3 pb-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-1 pt-3 pb-2">Our Services</p>
            <div className="grid grid-cols-2 gap-1.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-indore`}
                  onClick={close}
                  className="flex items-center gap-2 py-2.5 px-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                >
                  <span className="text-base">{s.emoji}</span>
                  <span className="text-xs font-semibold text-[#1B4FD8] leading-tight">
                    {s.name.replace(' Repair', '').replace(' Cleaning', '')}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="px-3 pb-4 pt-1 flex gap-2 border-t border-gray-100">
            <a
              href="tel:+918889539174"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#F97316] text-white py-3.5 rounded-xl font-bold text-sm"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918889539174"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
