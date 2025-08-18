'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

      <div className="container mx-auto px-2 md:px-6 h-fit py-10 lg:py-32 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-widest text-orange-600 font-semibold text-sm">
            About Us
          </p>
          <h1 className="mt-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
            Turning Business Challenges into <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Growth</span> Opportunities 
          </h1>
          <p className="mt-6 text-sm text-justify md:text-lg text-gray-600 leading-relaxed px-5">
          At <span className='bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent'>Unicorn ERP </span>, we believe every business can grow faster and operate more efficiently when equipped with the right tools and support. Our <span className='bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent'>ERP software</span> provides a simple, all-in-one system to manage finance, sales, inventory, HR, and operations, helping businesses stay connected, organized, and prepared for the future.          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Contact Us
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300"
            >
              Our Products
            </motion.a>
          </div>
        </motion.div>

        {/* Optional Hero Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14"
        >
          <Image
            src="/images/about-hero.png"
            alt="About Hero"
            width={850}
            height={550}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div> */}
      </div>
    </section>
  );
}

export default AboutHero