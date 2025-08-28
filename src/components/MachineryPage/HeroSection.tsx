"use client";

import { ReactNode } from "react";
import { Factory, Wrench, Cog, Shield } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  gradient: string;
}

const highlights: HighlightCardProps[] = [
  {
    icon: <Factory className="w-12 h-12" />,
    title: "Modern Facility",
    desc: "State-of-the-art infrastructure with climate-controlled environments and advanced safety systems.",
    gradient: "from-orange-500 to-red-400",
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Ultra-High Precision",
    desc: "CNC machines and automated systems with tolerances up to ±0.001mm for perfect accuracy.",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: <Cog className="w-12 h-12" />,
    title: "Infinite Scalability",
    desc: "Modular production lines capable of handling prototypes to millions of units with ease.",
    gradient: "from-red-500 to-orange-400",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Premium Standards",
    desc: "Multiple ISO certifications, streamlined processes, and continuous quality monitoring.",
    gradient: "from-orange-600 to-yellow-400",
  },
];

const HeroSection = () => {
  return (
    <div className="mb-10">
        <div className="text-center mb-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-6 leading-tight">
        Our Machinery
      </h1>

      <p className="md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
        Powered by cutting-edge machinery and advanced technology, our world-class 
        manufacturing facility delivers unmatched precision, consistency, and quality 
        in every product we create.
      </p>

    </div>
    
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-8 bg-white border border-orange-200 rounded-2xl hover:shadow-xl hover:shadow-orange-200 transition-all duration-500 hover:scale-105"
          >
            <div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

<div className="relative mt-20">
  <div className="text-center bg-white border border-orange-200 rounded p-4 md:p-12">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
      Connect with Us Today
    </h2>
    <p className="md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
We’re here to assist you with tailored solutions for your business needs, providing expert guidance, personalized support, and innovative strategies to help your operations achieve maximum efficiency and growth.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/contact"
        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-orange-400/40 transition-all duration-300 hover:scale-105"
      >
        Contact Us
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>

      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-900 font-medium transition-colors duration-300 border border-orange-400 px-6 py-3 rounded-full bg-white"
      >
        Our Products
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
</div>


    </div>
  );
};

export default HeroSection;
