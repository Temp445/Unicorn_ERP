'use client';
import { motion } from 'framer-motion';
import { Eye, Target, Flag, UserStar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const CoreValueSection = () => {
  return (
    <section className="relative overflow-hidden py-10 xl:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            What Drives <span className='text-orange-600'> Us</span>
          </h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute rounded left-1/2 top-0 h-full w-1 mt-7  bg-gradient-to-b from-orange-400 to-red-500 transform -translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-24">
            {/* Vision */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="hidden lg:block"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-sky-100 backdrop-blur-sm border border-gray-400 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100">
                <div className="absolute -left-8 top-6 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-blue-500'>Vision</span></h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses of all sizes with intelligent ERP solutions that simplify
                  operations, drive efficiency, and unlock sustainable growth in a connected world.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse"
            >
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-sm border border-gray-400 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100">
                <div className="absolute -right-[80px] top-6 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-teal-700'>Mission</span></h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver innovative, scalable, and user-friendly ERP software that integrates every aspect of business management—finance, operations, sales, and beyond—enabling our clients to focus on what matters most: achieving their goals.
                </p>
              </div>
              <div className="hidden lg:block"></div>
            </motion.div>

            {/* Goals */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="hidden lg:block"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 backdrop-blur-sm border border-gray-400 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100">
                <div className="absolute -left-8 top-6 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Flag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-orange-700'>Goals</span></h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>Customer Success – Ensure every client achieves measurable improvements in productivity, accuracy, and decision-making.</li>
                  <li>Innovation First – Continuously evolve our ERP platform with the latest technologies and industry best practices.</li>
                  <li>Global Reach – Expand our solutions to serve businesses across multiple sectors and geographies.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.6}
              className="grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse"
            >
              <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 backdrop-blur-sm border border-gray-400 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100">
                <div className="absolute -right-[80px] top-6 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <UserStar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-cyan-700'>Values</span></h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>Integrity – We build trust by delivering on our promises with honesty and transparency.</li>
                  <li>Innovation – We embrace change, explore new ideas, and continuously improve our solutions.</li>
                  <li>Customer-Centricity – Our clients are at the heart of everything we do.</li>
                </ul>
              </div>
              <div className="hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
