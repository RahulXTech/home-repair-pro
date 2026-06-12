
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-slate-50 min-h-[60vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold uppercase text-[#F97316]">
            About Us
          </h2>

          <div className="w-16 h-1 bg-slate-800 mx-auto mt-3 rounded-full" />
        </div>

        {/* <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center"> */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-4xl font-black leading-tight text-slate-900">
              Trusted Home Appliance
              <span className="text-[#F97316]">
                {' '}Repair Experts{' '}
              </span>
              At Your Doorstep
            </h3>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-6">
              HomeRepairPro provides fast, affordable and reliable repair
              services for ACs, Refrigerators, Washing Machines,
              Microwaves, Geysers and other home appliances.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-6">
              Our certified technicians deliver same-day service,
              genuine spare parts and transparent pricing with
              complete customer satisfaction.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-5">

              <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                <h4 className="text-lg md:text-2xl font-black text-[#F97316]">
                  10K+
                </h4>
                <p className="text-[11px] md:text-sm text-gray-500">
                  Customers
                </p>
              </div>

              <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                <h4 className="text-lg md:text-2xl font-black text-[#F97316]">
                  4.9★
                </h4>
                <p className="text-[11px] md:text-sm text-gray-500">
                  Rating
                </p>
              </div>

              <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                <h4 className="text-lg md:text-2xl font-black text-[#F97316]">
                  24x7
                </h4>
                <p className="text-[11px] md:text-sm text-gray-500">
                  Support
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-5 bg-[#F97316] hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More →
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
        <img
  src="https://t3.ftcdn.net/jpg/08/27/24/76/360_F_827247685_QROnH7A08AiXvYr1fZmAt6ktkCn2Skxl.jpg"
  alt="Home Appliance Repair"
  className="rounded-3xl shadow-xl w-full max-h-[320px] object-cover"
/>

              {/* Floating Experience Card */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3">
                <h4 className="text-xl font-black text-[#F97316]">
                  10+
                </h4>

                <p className="text-xs text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
