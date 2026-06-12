'use client';
import Image from 'next/image';

export default function HeroParallax() {
  return (
    <>
      <style>{`
        @keyframes heroPan {
          0%   { transform: scale(1.12) translateX(0%); }
          100% { transform: scale(1.12) translateX(-5%); }
        }
        .hero-pan {
          animation: heroPan 18s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
      <div className="hero-pan absolute inset-0">
        <Image
          src="/images/hero-main.png"
          alt="HomeRepairPro technician repairing AC unit"
          fill
          priority
          quality={100}
          className="object-cover object-[center_15%]"
          sizes="100vw"
        />
      </div>
    </>
  );
}
