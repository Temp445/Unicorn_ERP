'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Smile, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CountSection = () => {
  const stats = [
    { label: 'Years', value: '20+', icon: Rocket },
    { label: 'Live Users', value: '300+', icon: Users },
    { label: 'Satisfied Clients', value: '99.9%', icon: Smile },
    { label: 'Projects', value: '500+', icon: Award }, 
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = parseFloat(stat.value.replace(/[+%]/g, '')) || 0;
        const interval = setInterval(() => {
          start += Math.ceil(end / 50);
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative md:py-14 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const hasPlus = stat.value.includes('+');
            const hasPercent = stat.value.includes('%');
            const displayValue =
              counts[i] === 0
                ? '0' + (hasPlus ? '+' : hasPercent ? '%' : '')
                : counts[i] + (hasPlus ? '+' : hasPercent ? '%' : '');

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group bg-white rounded-3xl p-4 text-center xl:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-orange-400"
              >
                <div className="flex items-center gap-2 xl:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="rounded-full p-4 bg-gradient-to-tr from-orange-200 to-orange-300"
                  >
                    <Icon className="text-orange-600 w-5 h-5 xl:w-10 xl:h-10" />
                  </motion.div>
                  <div>
                    <p className="text-lg xl:text-4xl font-extrabold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {displayValue}
                    </p>
                    <p className=" xl:text-lg font-medium text-gray-500">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountSection;
