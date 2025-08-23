'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import image1 from '@/assets/operator.jpg';
import { CalendarRange, Sparkles, Factory} from 'lucide-react';
import { MdEngineering } from "react-icons/md";

const WhoWeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div className="order-2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Who{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                We Are
              </span>
            </h2>
            <p className="md:text-lg text-gray-600 leading-relaxed text-justify md:text-left">
            We are a trusted manufacturing company focused on delivering precision, durability, and innovation. With advanced facilities and skilled teams, we design and produce high-quality components for industrial needs. Our commitment to excellence ensures every product meets the highest safety and performance standards.
            </p>

            <div className="my-8">
              <Link
                href="/about"
                className="text-gray-800 px-5 py-2.5 rounded-lg font-semibold border"
              >
                Learn More
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg hidden md:block order-1 lg:order-2"
          >
            <Image
              src={image1}
              alt="about manufacturing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>


        <div className="mt-5 md:mt-16 flex flex-wrap justify-center gap-5 lg:gap-12">
          <motion.div
            className="rounded-xl md:rounded-full md:mt-20 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-100 to-teal-50 shadow-lg md:rotate-45 border-sky-700 border md:border-0 md:border-x"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl md:rounded-full w-36 h-36 md:w-40 md:h-40 xl:w-52 xl:h-52 flex flex-col items-center justify-center p-4 gap-4 shadow-md md:-rotate-45">
              <CalendarRange className="w-14 h-12 text-sky-800" />
              <h3 className="md:text-lg font-semibold text-gray-700 text-center">
                31+ Years in Business
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl md:rounded-full w-36 h-36 md:w-40 md:h-40 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-100 to-teal-50 shadow-lg md:rotate-45 md:border-blue-700 border md:border-0 md:border-y"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl md:rounded-full w-36 h-36 md:w-40 md:h-40 xl:w-52 xl:h-52 flex flex-col items-center justify-center p-2 md:p-4 gap-4 shadow-md md:-rotate-45 border border-blue-700 md:border-0">
              <Sparkles className="w-12 h-12 text-blue-400 -rotate-6" />
              <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                99% Client Satisfaction
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl md:rounded-full md:mt-20 w-36 h-36 md:w-40 md:h-40 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-100 to-teal-50 shadow-lg md:rotate-45 md:border-violet-700 border md:border-0 md:border-x"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl md:rounded-full w-36 h-36 md:w-40 md:h-40 xl:w-52 xl:h-52 flex flex-col items-center justify-center p-2 gap-4 shadow-md md:-rotate-45 border border-violet-700 md:border-0">
              <MdEngineering  className="w-12 h-12 text-violet-800" />
              <h3 className="text-lg font-semibold text-gray-700 text-center">
              High-Quality Standards
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl md:rounded-full w-36 h-36 md:w-40 md:h-40 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-100 to-teal-50 shadow-lg md:rotate-45 md:border-orange-700 border md:border-0 md:border-y"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl md:rounded-full w-36 md:h-40 md:w-40 xl:w-52 xl:h-52 flex flex-col items-center justify-center gap-4 p-2 bg-white shadow-md md:-rotate-45 border border-orange-700 md:border-0">
              <Factory className="w-12 h-12 text-orange-800" />
              <h3 className="text-base md:text-lg font-semibold text-gray-700 text-center">
                Serving Multiple Industries
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeSection;
