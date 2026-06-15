'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';

const SOCIALS = [
  { icon: FaFacebookF,  href: '#', label: 'Facebook', hoverBg: 'hover:bg-[#1877F2]' },
  { icon: FaInstagram,  href: '#', label: 'Instagram', hoverBg: 'hover:bg-gradient-to-br hover:from-[#E4405F] hover:to-[#F77737]' },
  { icon: FaYoutube,    href: '#', label: 'YouTube',   hoverBg: 'hover:bg-[#FF0000]' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn',  hoverBg: 'hover:bg-[#0A66C2]' },
  { icon: FaGoogle,     href: '#', label: 'Google',    hoverBg: 'hover:bg-[#4285F4]' },
];

export default function TopHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#0c2340] via-[#153f70] to-[#1a4f8a] border-b border-sky-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-9">

          {/* Left — brand + hours */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="font-bold text-white tracking-wide hidden sm:inline">
              HomeRepairPro
            </span>
            <span className="hidden sm:block h-3 w-px bg-white/20" />
            <span className="flex items-center gap-1 text-sky-300 hidden md:flex">
              <FaClock className="text-[9px]" />
              <span>All &nbsp; Days &nbsp; - 24X7</span>
            </span>
          </div>

          {/* Right — email + phone + socials */}
          <div className="flex items-center gap-2 text-[11px]">

            {/* Email */}
            <a
              href="mailto:info@sintereeors.com"
              className="hidden lg:flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope className="text-sky-400 text-[10px]" />
              info@sintereeors.com
            </a>

            <span className="hidden lg:block h-3 w-px bg-white/20" />

            {/* Phone */}
            <a
              href="tel:+91 8889539174"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition-colors duration-200"
            >
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-sky-500/30 border border-sky-500/50">
                <FaPhoneAlt className="text-sky-300 text-[8px]" />
              </span>
              <span className="hidden sm:inline">+91 8889539174</span>
            </a>

            <span className="h-3 w-px bg-white/20" />

            {/* Social icons */}
            <div className="flex items-center gap-1">
              {SOCIALS.map(({ icon: Icon, href, label, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white ${hoverBg} transition-all duration-200 hover:scale-110`}
                >
                  <Icon className="text-[9px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
    </div>
  );
}
