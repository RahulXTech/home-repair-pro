'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const certs = [
  {
    img: '/images/cert-police-hq.png',
    category: 'Government — Police HQ',
    client: 'IG Headquarter, Bhopal',
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    glow: 'hover:shadow-blue-200',
    icon: '🏛️',
    alt: 'Certificate of Service Completion - Police Headquarters Bhopal',
  },
  {
    img: '/images/cert-nfsu.png',
    category: 'Central University',
    client: 'National Forensic Sciences University',
    badge: 'bg-purple-100 text-purple-800 border-purple-200',
    glow: 'hover:shadow-purple-200',
    icon: '🎓',
    alt: 'Certificate of Service Completion - NFSU Bhopal Campus',
  },
  {
    img: '/images/cert-nibav.png',
    category: 'Corporate — Pvt. Ltd.',
    client: 'Nibav Lifts Pvt. Ltd.',
    badge: 'bg-teal-100 text-teal-800 border-teal-200',
    glow: 'hover:shadow-teal-200',
    icon: '🏢',
    alt: 'Certificate of Service Completion - Nibav Lifts Pvt. Ltd.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CertifiedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-14 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-green-200">
            ✅ Verified Completed Work
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">
            Government &amp; Corporate Projects —{' '}
            <span className="text-[#F97316]">Done</span>
          </h2>
          <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
          <p className="text-gray-500 text-sm">
            GST invoice ke saath completed — 100% verified work records
          </p>
        </motion.div>

        {/* ── Certificate Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.client}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`cursor-pointer group rounded-2xl bg-white shadow-md ${cert.glow} hover:shadow-xl transition-shadow duration-300`}
              onClick={() => setSelected(cert)}
              role="button"
              aria-label={`View certificate: ${cert.client}`}
            >
              {/* Certificate image */}
              <div className="relative rounded-t-2xl overflow-hidden">
                <Image
                  src={cert.img}
                  alt={cert.alt}
                  width={420}
                  height={594}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                {/* Tap-to-view overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 text-gray-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    🔍 Tap to Zoom
                  </span>
                </div>
              </div>

              {/* Info strip below image */}
              <div className="px-4 py-3 border-t border-gray-100 rounded-b-2xl">
                <div className="flex items-center justify-between mb-1">
                  <span className={`inline-flex items-center gap-1 ${cert.badge} text-[10px] font-bold px-2.5 py-1 rounded-full border`}>
                    {cert.icon} {cert.category}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200">
                    ✓ Completed
                  </span>
                </div>
                <p className="text-gray-700 text-xs font-semibold mt-1 leading-tight">{cert.client}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom Note ── */}
        <motion.p
          className="text-center text-gray-400 text-xs mt-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          🔒 Sabhi projects mein proper{' '}
          <strong className="text-gray-600">GST Tax Invoice</strong> issue ki gayi &nbsp;•&nbsp;
          GSTIN: <strong className="text-gray-600">23DNCPG4775E1Z7</strong> &nbsp;•&nbsp;
          MSME: UDYAM-MP-10-0042011
        </motion.p>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm"
              initial={{ scale: 0.75, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-lg flex items-center justify-center transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close certificate"
              >
                ✕
              </button>

              {/* Certificate image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selected.img}
                  alt={selected.alt}
                  width={420}
                  height={594}
                  className="w-full h-auto"
                />
              </div>

              {/* Caption */}
              <div className="mt-3 text-center">
                <span className={`inline-flex items-center gap-1 ${selected.badge} text-xs font-bold px-3 py-1.5 rounded-full border`}>
                  {selected.icon} {selected.client}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
