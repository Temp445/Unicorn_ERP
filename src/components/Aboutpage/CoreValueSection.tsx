'use client';
import { motion } from 'framer-motion';
import { Eye, Target, Flag, UserStar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2 }
  })
};

const CoreValueSection = () => {
  const sections = [
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: 'Our Vision',
      text: 'To empower businesses of all sizes with intelligent ERP solutions that simplify operations, drive efficiency, and unlock sustainable growth in a connected world.',
      colors: 'from-blue-50 to-sky-100',
      iconBg: 'from-blue-400 to-blue-600',
      align: 'left'
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Our Mission',
      text: 'To deliver innovative, scalable, and user-friendly ERP software that integrates every aspect of business management—finance, operations, sales, and beyond—enabling our clients to focus on what matters most: achieving their goals.',
      colors: 'from-emerald-50 to-teal-50',
      iconBg: 'from-emerald-500 to-teal-600',
      align: 'right'
    },
    {
      icon: <Flag className="w-8 h-8 text-white" />,
      title: 'Our Goals',
      list: [
        'Customer Success – Ensure every client achieves measurable improvements in productivity, accuracy, and decision-making.',
        'Innovation First – Continuously evolve our ERP platform with the latest technologies and industry best practices.',
        'Global Reach – Expand our solutions to serve businesses across multiple sectors and geographies.'
      ],
      colors: 'from-orange-50 to-red-50',
      iconBg: 'from-orange-500 to-red-500',
      align: 'left'
    },
    {
      icon: <UserStar className="w-8 h-8 text-white" />,
      title: 'Our Values',
      list: [
        'Integrity – We build trust by delivering on our promises with honesty and transparency.',
        'Innovation – We embrace change, explore new ideas, and continuously improve our solutions.',
        'Customer-Centricity – Our clients are at the heart of everything we do.'
      ],
      colors: 'from-pink-50 to-rose-50',
      iconBg: 'from-cyan-600 to-cyan-500',
      align: 'right'
    }
  ];

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
            What Drives Us
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="space-y-10 md:space-y-24">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                item.align === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {item.align === 'left' && <div className="hidden lg:block"></div>}
              <div
                className={`bg-gradient-to-br ${item.colors} backdrop-blur-sm border border-gray-400 rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-100`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.iconBg} mb-6 shadow-lg`}
                >
                  {item.icon}
                </div>
                <h3 className=" text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                )}
                {item.list && (
                  <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
                    {item.list.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              {item.align === 'right' && <div className="hidden lg:block"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;
