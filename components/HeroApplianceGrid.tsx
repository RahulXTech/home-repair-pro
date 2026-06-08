'use client';
import Image from 'next/image';

const appliances = [
  { name: 'AC Repair',        image: '/ac-repair.png',        emoji: '❄️', color: 'from-sky-400 to-blue-500',    delay: '0s'    },
  { name: 'Washing Machine',  image: '/washing-machine.png',  emoji: '🫧', color: 'from-indigo-400 to-violet-500', delay: '0.4s'  },
  { name: 'Refrigerator',     image: '/refrigerator.png',     emoji: '🧊', color: 'from-cyan-400 to-teal-500',   delay: '0.8s'  },
  { name: 'Geyser',           image: '/geyser.png',           emoji: '🔥', color: 'from-orange-400 to-red-500',  delay: '0.2s'  },
  { name: 'Microwave',        image: '/microwave.png',        emoji: '📻', color: 'from-yellow-400 to-orange-500', delay: '0.6s' },
  { name: 'Chimney',          image: '/chimney.png',          emoji: '🔧', color: 'from-emerald-400 to-green-500', delay: '1.0s' },
];

export default function HeroApplianceGrid() {
  return (
    <>
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); }
          50%       { box-shadow: 0 0 20px 6px rgba(255,255,255,0.25); }
        }
        .appliance-card {
          animation: floatCard 3.5s ease-in-out infinite;
        }
      `}</style>

      <div className="grid grid-cols-3 gap-3 p-4">
        {appliances.map((a) => (
          <div
            key={a.name}
            className="appliance-card bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 flex flex-col items-center pt-3 pb-2 px-1"
            style={{ animationDelay: a.delay }}
          >
            {/* Gradient badge */}
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center text-lg mb-2 shadow-lg`}>
              {a.emoji}
            </div>
            {/* Appliance image */}
            <div className="relative w-16 h-16">
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-contain drop-shadow-xl"
                sizes="64px"
              />
            </div>
            {/* Label */}
            <p className="text-white text-[10px] font-semibold text-center mt-1 leading-tight opacity-90">
              {a.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom badge */}
      <div className="flex justify-center pb-3">
        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-xs font-semibold">6 Services • Same Day • Starting ₹299</span>
        </div>
      </div>
    </>
  );
}
