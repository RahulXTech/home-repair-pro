import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utils/data';

export default function ServiceGrid() {
  return (
    <section className="py-14 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Home Appliance Repair — All Brands
          </h2>
          <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            AC • Fridge • Washing Machine • Geyser — Same day, starting ₹350
          </p>
        </div>

        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">      
        {services.map((s) => (
            
<Link
  key={s.slug}
  href={`/${s.slug}-indore`}
  className="group block bg-white rounded-[12px] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
>
  {/* Image */}
  <div className="relative h-72 md:h-60 overflow-hidden">
    <Image
      src={s.image}
      alt={s.name}
      fill
      sizes="100vw"
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Price Badge */}
    <div className="absolute top-4 right-4">
      <span className="bg-[#F97316] text-white px-4 py-2 rounded-full font-bold shadow-lg">
        ₹{s.price}+
      </span>
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
  </div>

  {/* Content */}
  <div className="p-6">
    {/* Title */}
    <h3 className="text-2xl font-black text-[#0F172A] mb-3">
      {s.name}
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed mb-5">
      {s.desc}
    </p>

    {/* Features */}
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="bg-orange-50 text-[#F97316] px-3 py-1 rounded-full text-xs font-semibold">
        Same Day Service
      </span>

      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
        Warranty
      </span>

      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
        Expert Technician
      </span>
    </div>

    {/* Bottom */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-3xl font-black text-[#0F172A]">
          ₹{s.price}
        </p>
        <span className="text-xs text-gray-400">
          Starting Price
        </span>
      </div>

      <div className="bg-[#F97316] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg group-hover:gap-3 transition-all">
        Book Now

        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
</Link>




          ))}
        </div>
      </div>
    </section>
  );
}
