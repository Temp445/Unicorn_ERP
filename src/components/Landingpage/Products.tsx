"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Adapter from "@/assets/products/Adapter.png";
import BaseShellFront from "@/assets/products/BaseShellFront.png";
import BleedScrew from "@/assets/products/BleedScrew.png";
import BodyMachining from "@/assets/products/BodyMachining.png";
import CenterPlate from "@/assets/products/CenterPlate.png";
import ControlPlunger from "@/assets/products/ControlPlunger.png";
import EndPlug from "@/assets/products/EndPlug.png";
import Eye from "@/assets/products/Eye.png";
import image1 from "@/assets/products/UNICORN_PRODUCT_IMAGES-2.png"

const products = [
  { src: Adapter, name: "Adapter", link: "/products" },
  { src: BaseShellFront, name: "Base Shell Front", link: "/products" },
  { src: BleedScrew, name: "Bleed Screw", link: "/products" },
  { src: BodyMachining, name: "Body Machining", link: "/products" },
  // { src: CenterPlate, name: "Center Plate", link: "/products" },
  // { src: ControlPlunger, name: "Control Plunger", link: "/products" },
  // { src: EndPlug, name: "End Plug", link: "/products" },
  // { src: Eye, name: "EYE", link: "/products" },
  // { src: image1, name: "EYE", link: "/products" },
];

const Products = () => {
  const router = useRouter();

  return (
    <section className="relative py-10 bg-[#205057] overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-white mb-6">
        Our Products
      </h2>
      <p className="text-center text-[#e5e5e5] mb-10 max-w-2xl mx-auto md:text-lg">
        Designed with accuracy and strength in mind, these products deliver exceptional industrial quality.
      </p>

      <div className="sm:hidden overflow-hidden relative mb-8">
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
              className="flex-shrink-0 w-48 bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer"
              onClick={() => router.push(product.link)}
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>


      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 ">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-md bg-white p-6 flex flex-col items-center cursor-pointer group"
            onClick={() => router.push(product.link)}
          >
            <div className="w-32 h-32 relative mb-6">
              <Image src={product.src} alt={product.name} fill className="object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-[#071520] group-hover:text-[#205057]">{product.name}</h3>
             <div className="w-10 h-1 mt-1 rounded bg-[#205057] group-hover:w-16 mx-auto transition-all duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => router.push("/products")}
          className="px-8 py-3 bg-[#e5e5e5] text-[#205057] rounded-full font-semibold"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Products;
