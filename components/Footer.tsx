import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Image from 'next/image';
import { services, cities } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo-round.png"
                alt="HomeRepairPro"
                width={72}
                height={72}
                className="rounded-full"
                loading="lazy"
              />
            </Link>
            <p className="text-sm mb-4 leading-relaxed">
              Ghar Ki Har Repair — Ek Call Mein. Verified technicians, same day service, GST & MSME registered.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+918889539174" className="flex items-center gap-2 text-[#F97316] font-bold hover:text-orange-400">
                📞 +91 88895 39174
              </a>
              <a
                href="https://wa.me/918889539174"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-bold hover:text-green-400"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}-indore`} className="text-sm hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Cities</h4>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/ac-repair-${c.slug}`} className="text-sm hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/government-contracts" className="text-sm hover:text-white transition-colors">Government Contracts</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-4">
              <span>✓ GST No: 23DNCPG4775E1Z7</span>
              <span>✓ MSME | Udyam No: UDYAM-MP-10-0042011</span>
              <span>✓ Verified Service Provider</span>
            </div>
            <p>© 2025 HomeRepairPro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
