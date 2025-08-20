import React from "react";
import { Play } from "lucide-react";
import Link from "next/link";

interface ProductProps {
  product: {
    productName: string;
    description: string;
    productLink?: string;
    calendlyUrl?: string;
    mainImage?: string[];
  };
}

const Hero = ({ product }: ProductProps) => {

  return (
    <section className="relative h-fit flex-col flex md:flex-row items-center overflow-hidden">
      <div className="absolute inset-0 bg-orange-50"></div>

      <div className="relative z-10 w-full lg:w-1/2 p-4 lg:p-20 order-2 md:order-1">
        <div className="max-w-xl space-y-8">
          <h1 className="text-2xl md:text-3xl 2xl:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            {product.productName}
          </h1>

          <p className="text-base 2xl:text-xl mb-8 text-gray-800">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fadeInUp delay-300">
            {product.productLink && (
              <a
                href={product.productLink}
                className=" px-4 py-2 lg:px-6 lg:py-3 flex gap-2 bg-white border rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-6 h-6" />
                <span>Watch Demo</span>
              </a>
            )}
            {product.calendlyUrl ? (
              <Link
                href={product.calendlyUrl}
                className="px-4 py-3 lg:px-6 lg:py-3 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
            ): 
               <Link
                href="/contact"
                className="px-6 py-3 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>}
          </div>
        </div>
      </div>

      {product.mainImage?.[0] && (
        <div className="relative w-full lg:w-1/2 h-[500px] 2xl:h-[600px] md:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] md:shadow-2xl shadow-amber-500 order-1 md:order-2">
          <img
            src={product.mainImage[0]}
            alt={product.productName}
            className="md:absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-out px-4 rounded md:px-0 md:rounded-none"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
