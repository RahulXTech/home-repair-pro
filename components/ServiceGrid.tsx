import Link from 'next/link';
import { services } from '@/lib/data';

export default function ServiceGrid() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Home Appliance Repair Services — Indore & Bhopal
        </h2>
        <p className="text-center text-gray-500 mb-8">
          AC • Fridge • Washing Machine • Geyser — All brands, same day, starting ₹299
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}-indore`}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="text-3xl mb-2">{s.emoji}</div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight group-hover:text-[#1B4FD8] transition-colors">
                {s.name}
              </h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">{s.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[#1B4FD8] font-bold text-sm">From ₹{s.price}</span>
                <span className="text-[#F97316] text-sm font-semibold">Book →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
