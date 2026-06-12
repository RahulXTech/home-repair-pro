
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ({
  items,
  title = 'Frequently Asked Questions',
}) {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-3">
            FAQ
          </span>

          <h2 className="text-2xl md:text-4xl font-black text-gray-900">
            {title}
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Quick answers to common customer questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="
                bg-white/80
                backdrop-blur-sm
                border
                border-blue-100
                rounded-2xl
                shadow-lg
                overflow-hidden
              "
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  px-5
                  py-4
                  font-semibold
                  text-gray-900
                "
              >
                <span className="pr-4 text-sm md:text-base">
                  {item.q}
                </span>

                <motion.div
                  animate={{
                    rotate: open === i ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    bg-blue-100
                    text-[#2563EB]
                    text-lg
                    font-bold
                    flex-shrink-0
                  "
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-100 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>

        {/* Bottom Trust Text */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            🔒 Trusted by 10,000+ Customers • ⭐ 4.9 Rating • 🛡️ Warranty Support
          </p>
        </div>

      </div>
    </section>
  );
}