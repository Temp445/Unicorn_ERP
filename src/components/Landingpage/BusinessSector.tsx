'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Users, Factory, ClipboardList, Briefcase, BarChart3, ArrowRight} from 'lucide-react';
import Link from 'next/link';

const cards = [
  { 
    name: "Finance & Accounting", 
    icon: DollarSign, 
    desc: "Manage budgets, accounts, and transactions in one place.",
    link: "#"
  },
  { 
    name: "HR & Payroll", 
    icon: Users, 
    desc: "Streamline employee data, attendance, and payroll processing.",
    link: "#"
  },
  { 
    name: "Manufacturing", 
    icon: Factory, 
    desc: "Plan, schedule, and monitor production processes.",
    link: "#"
  },
  { 
    name: "Sales & Order Management", 
    icon: ClipboardList, 
    desc: "Manage quotes, orders, invoices, and sales pipelines.",
    link: "#"
  },
  { 
    name: "Project Management", 
    icon: Briefcase, 
    desc: "Organize tasks, timelines, and team collaboration.",
    link: "#"
  },
  { 
    name: "Analytics & Reporting", 
    icon: BarChart3, 
    desc: "Get real-time insights and make data-driven decisions.",
    link: "#"
  },
];

 const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

   const productVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

const BusinessSector = () => {
      const [activeIndex, setActiveIndex] = useState(0);
      const [hoverIndex, setHoverIndex] = useState<number | null>(null);
      const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return; 
  const timer = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000);
  return () => clearInterval(timer);
}, [isPaused, cards.length]);

  return (
    <div className='container mx-auto px-6 lg:px-12 pb-10'>
             <motion.div
          className="mb-20 px-4 mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className=" text-2xl md:text-4xl font-extrabold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Solutions for Your {' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Business Sector
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-16 max-w-6xl mx-auto text-justify"
            variants={itemVariants}
          >
        Providing customized solutions that address the specific needs of your industry.
Our team blends deep domain expertise with innovative technology to maximize efficiency.
From planning to execution, we ensure every solution drives measurable business growth.
          </motion.p>

      
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
               {cards.map((card, index) => {
               const isActive = hoverIndex === index || (hoverIndex === null && activeIndex === index);

                return (
                  <motion.div
                    key={index}
                    className={`relative p-10 rounded-xl border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? `bg-[#2C74B3] border-white/30 scale-105 shadow-lg`
                        : 'bg-white border-gray-500 hover:bg-white/10'
                    } group`}
                     onMouseEnter={() => {
                    setHoverIndex(index);
                   setIsPaused(true);
                     }}
                  onMouseLeave={() => {
                   setHoverIndex(null);
                   setIsPaused(false);
                 }}
                    variants={productVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                    transition={{ duration: 0.5 }}
                  >
                 <Link href={card.link}>
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex gap-4">
                        <h3
                          className={`text-xl font-semibold text-left ${
                            isActive ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          {card.name}
                        </h3>
                      </div>
                      <p
                        className={`text-base font-medium leading-relaxed text-left ${
                          isActive ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                 </Link>

                    <Link href={card.link} className="absolute bottom-3 right-4 transition-transform duration-300 group-hover:translate-x-2">
                      <div className="w-10 h-10 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-md">
                        <ArrowRight className={`w-6 h-6 text-orange-600`} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

          {/* banner */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-t from-orange-400 via-orange-500 to-orange-500 rounded-3xl p-5 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-xl lg:text-4xl font-black mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-12 text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                Discover how our comprehensive ERP solution can streamline your operations, 
                boost productivity, and drive sustainable growth for your organization.
              </p>
              
              <div className="flex sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-white text-gray-900  px-5 py-3 md:px-10 md:py-5 rounded-xl font-black text-sm md:text-base hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Products
                </motion.button>
                <motion.button
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-base hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default BusinessSector