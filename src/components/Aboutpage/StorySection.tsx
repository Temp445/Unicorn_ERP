'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import about from "@/assets/operator2.jpg";

const StorySection = () => {
  return (
    <section className="bg-white relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
    
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              Our story began with a <span className="text-orange-500">passion for precision</span>
            </h2>
            <p className="mt-6 text-gray-700 md:text-lg leading-relaxed text-justify">
              <span className='text-orange-600'>UNICORN (BANGALORE) PRIVATE LIMITED</span> is dedicated to producing top-quality auto-turned parts and precision automotive components. Our commitment from the beginning has been to ensure every product meets exacting standards of precision and strength, supporting our clients in enhancing operational performance and vehicle reliability.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                'Precision-focused manufacturing',
                'High-quality materials and processes',
                'Reliable components for automotive applications'
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 hover:text-orange-600 transition-colors"
                >
                  <CheckCircle2 className="mt-1 text-orange-500" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-full max-w-2xl mx-auto aspect-[4/3] rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-600/20 via-orange-500/50 to-transparent p-1 shadow-lg">
              <div className="h-full w-full rounded-[22px] bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={about}
                  alt="About Us"
                  className="object-cover w-full h-full rounded-[22px]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
