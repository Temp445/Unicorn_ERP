'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Layers, Users, ShieldCheck, Zap } from 'lucide-react';

const points = [
  {
    icon: Layers,
    title: 'Comprehensive Manufacturing Expertise',
    text: 'From precision auto-turned parts to complex components, we cover all critical aspects of manufacturing with unmatched expertise.',
  },
  {
    icon: Zap,
    title: 'Customisable & Scalable Production',
    text: 'Our production lines and processes are adaptable to your unique requirements, ensuring scalability as your business grows.',
  },
  {
    icon: Users,
    title: 'Trusted by Automotive Leaders',
    text: 'We partner with leading automotive companies, delivering components that meet stringent industry standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for Reliability',
    text: 'Our manufacturing processes ensure consistent quality, durability, and performance for every component.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    text: 'Our precision parts enhance performance, efficiency, and operational reliability for automotive businesses.',
  },
  {
    icon: CheckCircle,
    title: 'Expert Engineering Team',
    text: 'Our engineers bring deep knowledge in precision manufacturing, ensuring your components meet exact specifications.',
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
            Excellence in Precision Auto-Turned Components
          </h2>
          <p className="mt-3 text-gray-600">
            We combine engineering excellence with advanced manufacturing technology to deliver precision auto-turned parts that meet the highest industry standards.
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

export default WhyChooseUs;
