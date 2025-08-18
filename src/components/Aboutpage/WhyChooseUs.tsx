'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Layers, Users, ShieldCheck, Zap } from 'lucide-react';

const points = [
  {
    icon: Layers,
    title: 'Comprehensive ERP Modules',
    text: 'From finance to manufacturing, we cover all core business processes in one integrated platform.',
  },
  {
    icon: Zap,
    title: 'Customisable & Scalable',
    text: 'Easily tailor workflows to your needs today, with room to grow as your business evolves.',
  },
  {
    icon: Users,
    title: 'Trusted by Industry Leaders',
    text: 'Trusted by industry leaders in manufacturing, retail, and services to run their core operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for uptime.',
    text: 'Continuous service, supported by robust systems and constant oversight.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Performance',
    text: 'Turning process optimisation into rapid results.',
  },
  {
    icon: CheckCircle,
    title: 'Expert Support Team',
    text: 'ERP specialists who understand your industry and speak your language.',
  },
];

const WhyChooseUs = () => {

  return (
    <section className="relative overflow-hidden ">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-500/20">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            ERP built for your growth
          </h2>
          <p className="mt-3 text-gray-600">
            We combine deep industry expertise with cutting-edge technology to deliver ERP solutions
            that scale with your ambitions.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <point.icon className="h-8 w-8 text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs
