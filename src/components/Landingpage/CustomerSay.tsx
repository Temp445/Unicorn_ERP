'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Production Manager',
    feedback:
      'These parts are built to exact specifications, boosting our production efficiency like never before.',
  },
  {
    name: 'Priya Singh',
    role: 'Quality Head',
    feedback:
      'Every batch meets the highest standards. The consistency in the manufacturing process gives us complete confidence.',
  },
  {
    name: 'Mohan Das',
    role: 'Supply Chain Director',
    feedback:
      'Timely delivery and accurate specifications make working with this manufacturer seamless. Parts arrive ready to use every time.',
  },
];

const CustomerSay = () => {
  return (
      <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
       
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#071520]">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-[#205057] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See how our high-quality parts make a difference in modern manufacturing.
          </p>
        </motion.div>

      
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
             
              <div className="absolute -top-5 left-6 bg-[#447c73] p-3 rounded-full shadow-md">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerSay;
