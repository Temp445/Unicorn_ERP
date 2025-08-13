'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bg from '@/assets/bg.jpg';
import erp1 from '@/assets/Erp1.jpg';
import erp2 from '@/assets/Erp3.jpg';
import erp3 from '@/assets/Erp3.jpg';
import WhatIsERP from './WhatIsERP';
import WhoWe from './WhoWe';
import BusinessSector from './BusinessSector';
import CustomerSay from './CustomerSay';

export default function HeroSection() {
  return (
    <>
      <section className="relative py-14 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
   

        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-14 relative z-10">
 
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className=" w-fit gap-3 px-5 py-1.5 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full mb-5 shadow-sm flex">
          All-in-One ERP Solution
            </span>
            <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering Businesses with Next-Gen ERP  <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Solutions for Growth</span>
            </h1>
            <p className="mt-6 md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 text-left">
              Manage finance, inventory, sales, HR, and more — all from a single powerful dashboard designed for scalability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-105 hover:shadow-orange-300/50 transition"
              >
                Explore Product <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 hover:scale-105 shadow-md transition"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 grid grid-cols-2 gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
            }}
          >
            <div className="flex flex-col gap-5">
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={bg}
                  alt="ERP Analytics"
                  className="rounded-xl shadow-2xl object-cover w-full h-56 border-4 border-orange-200"
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={erp1}
                  alt="ERP Reports"
                  className="rounded-xl shadow-2xl object-cover w-full h-48 border-4 border-orange-100"
                />
              </motion.div>
            </div>

            <div className="flex flex-col gap-5">
              <motion.div
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={erp2}
                  alt="ERP Dashboard"
                  className="rounded-xl shadow-2xl object-cover w-full h-64 border-4 border-orange-200"
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={erp3}
                  alt="ERP Inventory"
                  className="rounded-xl shadow-2xl object-cover w-full h-40 border-4 border-orange-100"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatIsERP />
      <BusinessSector />
      <WhoWe />
      <CustomerSay />
    </>
  );
}
