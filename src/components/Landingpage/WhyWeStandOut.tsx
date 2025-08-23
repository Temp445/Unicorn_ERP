'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import image1 from '@/assets/operator3.jpg';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'High Precision Production',
  'Cost Efficiency',
  'Scalable Operations',
  'Enhanced Safety',
  'Real-time Monitoring'
];

const WhyWeStandOut = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.5, when: 'beforeChildren' } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 pt-10 md:pt-14 md:py-10">
        <motion.div
          className="text-center mb-24 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-black text-gray-900 mb-8 leading-tight"
            variants={itemVariants}
          >
            Why We {' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
             Stand Out
            </span>
          </motion.h2>

          <motion.p
            className="md:text-lg text-gray-700 leading-relaxed mb-12 max-w-6xl mx-auto font-medium text-justify"
            variants={itemVariants}
          >
           Our automobile manufacturing facilities produce a wide range of high-quality spare parts. With advanced production lines, automation, and strict quality control, we ensure every component meets the highest standards of performance and durability.          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mb-16 flex-wrap"
            variants={containerVariants}
          >
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit} 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex border gap-3 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                style={{ originX: 0.5 }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto " />
                <span className="font-bold text-gray-800 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="p-8 lg:p-16 relative overflow-hidden shadow-2xl rounded-lg mb-20 bg-[url('/bg1.jpg')] bg-cover bg-center">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="w-full lg:w-1/2 flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={image1} 
                alt="Automobile Manufacturing" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" 
              />
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
                  Experience Excellence in{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Automotive Production
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>

              <p className="md:text-lg leading-relaxed text-gray-700 font-medium bg-gray-50 text-justify">
                Our manufacturing plants leverage cutting-edge technology and automation to produce vehicles with unmatched precision, efficiency, and safety standards. Each process is designed for scalability and real-time operational insights.
              </p>

              <div className="pt-4">   
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-3 py-1 text-orange-700 bg-orange-100 rounded-full text-sm font-medium">
                    Automation
                  </span>
                  <span className="px-3 py-1 text-orange-700 bg-orange-100 rounded-full text-sm font-medium">
                    Quality Control
                  </span>
                  <span className="px-3 py-1 text-orange-700 bg-orange-100 rounded-full text-sm font-medium">
                    Safety Standards
                  </span>
                </div>

                <Link href="/products"
                  className="text-gray-800 bg-white px-5 py-2.5 rounded-lg font-semibold border transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeStandOut;
