"use client"

import Link from "next/link";
import { MoveRight } from 'lucide-react';

interface result {
  title: string;
  description?: string;
}

interface ProductProps {
  product: {
    productName: string;
    description: string;
    productLink?: string;
    productPath?: string;
    mainImage?: string[];
    Result?: result[]
  };
}

const Hero = ({ product }: ProductProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-10 pt-5">
      <div className="absolute inset-0 bg-orange-50"></div>

         <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-30 animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-25 animate-bounce delay-500"></div>
      </div>
    
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
          <div className="lg:col-span-6 text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-200 shadow-sm">
                 {product.Result && product.Result.length > 0 && (
              <div className="text-orange-600 font-semibold text-lg gap-2">
                <span>{product.Result[0].title}</span> {" "}
                <span className="text-sm font-medium text-gray-700">{product.Result[0].description}</span>
              </div>
            )}
              </div>
              
              <div className="overflow-hidden">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 animate-slide-up">
                  {product.productName}
                </h1>
              </div>
              
              <div className="overflow-hidden text-justify">
                <p className=" text-base md:text-lg 2xl:text-2xl text-gray-800 leading-relaxed max-w-2xl animate-slide-up delay-200">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-400 w-fit md:w-auto">
              <Link
                href="/contact"
                className="group relative px-6 py-4 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl overflow-hidden"
              >
                              
                <span className="relative flex items-center">
                  Contact Us 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block"><MoveRight/></span>
                </span>
              </Link>
            </div>
          </div>

          {product.mainImage?.[0] && (
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
            
                <div className="relative overflow-hidden rounded-3xl shadow-2xl z-20 border border-red-200 group bg-white">
                
                  <img
                    src={product.mainImage[0]}
                    alt={product.productName}
                    className="w-full h-[400px] lg:h-[550px]  hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20 rotate-12 animate-spin-slow hidden lg:block"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-15 animate-pulse hidden lg:block"></div>
                
              </div>
            </div>
          )}
        </div>
      </div>


    </section>
  );
};

export default Hero;