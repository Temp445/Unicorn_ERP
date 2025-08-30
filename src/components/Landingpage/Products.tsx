"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import image1 from "@/assets/products/PRODUCT_IMAGES-1.jpg";
import image2 from "@/assets/products/PRODUCT_IMAGES-2.png";
import image3 from "@/assets/products/PRODUCT_IMAGES-3.png";

const products = [
  { src: image1, link: "/products" },
  { src: image2, link: "/products" },
  { src: image3, link: "/products" },
];

const Products = () => {
  const router = useRouter();

  return (
    <div className="bg-[#205057] relative">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 border-2 border-[#e5e5e5]/10 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 border-2 border-[#e5e5e5]/10 rounded-full" />
      </div>

      <section className="relative py-16 container mx-auto overflow-hidden">
      
        <div className="flex flex-col items-start ml-10 lg:ml-20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-white rounded-full hidden md:block" />
            <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-white uppercase ">
              Our Products
            </h2>
          </div>
          <p className="text-[#e5e5e5] mt-4 max-w-2xl text-sm uppercase md:text-lg leading-relaxed">
            Designed with accuracy and strength in mind, these products deliver
            exceptional industrial quality.
          </p>
        </div>

        {/* Mobile */}
        <div className="sm:hidden overflow-hidden relative mt-10 mb-12">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...products, ...products].map((product, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 bg-white/95 backdrop-blur rounded-2xl shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => router.push(product.link)}
              >
                <div className="w-40 h-32 relative mb-3">
                  <Image src={product.src} alt="product image" fill className="" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-5 gap-8 lg:px-20 mx-auto px-6 mt-14">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-xl 
                bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] transition-transform duration-500 border-4 border-[#e5e5e5]
                hover:scale-[1.03] hover:shadow-2xl
                ${idx === 0 ? "col-span-3 row-span-2 h-[500px]" : "col-span-2 h-[240px]"}
              `}
              onClick={() => router.push(product.link)}
            >
              <Image
                src={product.src}
                alt="product image"
                fill
                className=" group-hover:scale-110 transition-transform duration-700"
              />
          
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <button className="mt-4 px-6 py-2 text-sm font-medium bg-white text-[#1c3d43] rounded-full shadow-md hover:bg-[#1c3d43] hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => router.push("/products")}
            className="px-10 py-3 border border-white/40 text-[#e5e5e5] rounded-full font-semibold tracking-wide 
            hover:bg-white hover:text-[#205057] transition-colors duration-300 shadow-md"
          >
            Explore All Products
          </button>
        </div>
            <div className="w-16 h-1 right-10 absolute bg-white rounded-full hidden" />

      </section>
    </div>
  );
};

export default Products;
