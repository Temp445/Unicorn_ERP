'use client';
import { motion } from 'framer-motion';
import { Eye, Target, Flag,UserCog } from 'lucide-react';

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
            What Drives <span className='text-orange-600'>Us</span>
          </h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute hidden lg:block rounded left-1/2 top-0 h-full w-1 mt-7 bg-gradient-to-b from-orange-400 to-red-500 transform -translate-x-1/2"></div>

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
                <div className="absolute hidden -left-8 top-6 transform -translate-x-1/2 lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-blue-500'>Vision</span></h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading manufacturer of high-quality auto-turned parts and precision components, delivering products that set industry standards for accuracy, reliability, and performance.
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
                <div className="absolute hidden -right-[78px] top-6 transform -translate-x-1/2 lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-teal-700'>Mission</span></h3>
                <p className="text-gray-700 leading-relaxed">
                  To manufacture precision auto-turned parts using advanced technologies, ensuring every component meets stringent quality standards, and enabling our clients to improve performance, efficiency, and reliability in their automotive operations.
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
                <div className="absolute hidden -left-8 top-6 transform -translate-x-1/2 lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <Flag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-orange-700'>Goals</span></h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>Precision Manufacturing – Deliver components with the highest accuracy and quality.</li>
                  <li>Customer Satisfaction – Ensure clients receive reliable, durable products that meet their needs.</li>
                  <li>Innovation – Continuously adopt advanced technologies and best practices in manufacturing.</li>
                </ul>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.6}
              className="grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse"
            >
              <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 backdrop-blur-sm border border-gray-400 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100">
                <div className="absolute hidden -right-[80px] top-6 transform -translate-x-1/2 lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg z-10">
                  <UserCog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our <span className='text-cyan-700'>Values</span></h3>
                <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                  <li>Integrity – We uphold honesty and reliability in every product we deliver.</li>
                  <li>Excellence – Strive for precision and quality in all aspects of manufacturing.</li>
                  <li>Customer-Centric – Our clients’ success drives every decision and process.</li>
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
