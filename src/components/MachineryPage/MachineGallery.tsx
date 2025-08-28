"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import image1 from "@/assets/Machine/image1.png";
import image2 from "@/assets/Machine/image2.png";
import image3 from "@/assets/Machine/image3.png";
import image4 from "@/assets/Machine/image4.png";
import image5 from "@/assets/Machine/image5.png";
import image6 from "@/assets/Machine/image6.png";
import image7 from "@/assets/Machine/image7.png";

interface MachineProps {
  src: StaticImageData;
  alt: string;
  brand: string;
}

const machineImages: MachineProps[] = [
  { src: image1, alt: "MULTI SPINDLE MACHINE 1” – 6 SPINDLE", brand: "WICKMAN" },
  { src: image2, alt: "TRAUB – A60 MACHINE​", brand: "PMT/DEEM/SGS/ARROW" },
  { src: image3, alt: "TRAUB – A25 MACHINE​", brand: "PMT/DEEM/SGS/ARROW" },
  { src: image4, alt: "CAPSTON MACHINE​", brand: "GEEDEWEILER/SGS/ARROW" },
  { src: image6, alt: "CENTRELESS GRINDING MACHINE​", brand: "MTE PRECISION" },
  { src: image7, alt: "THREAD ROLLING MACHINE​", brand: "MTR -15T" },
  { src: image5, alt: "DRILLING & TAPPING MACHINE​", brand: "THAKOOR" },

];

const MachineGallery = () => {
  return (
    <section className="py-5 xl:py-20">
      <div className="container mx-auto px-2 lg:px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
            Our Advanced Machinery
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of precision equipment designed for excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr auto-flow-dense">
          {machineImages.map((img, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-400 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                {img.brand}
              </div>

              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
        <div className="w-full h-0.5 bg-orange-500 group-hover:block"></div>

              <div className=" p-2 md:p-4 relative text-center">
                <h3 className="text-black font-semibold text-sm md:text-lg mb-1 group-hover:text-orange-600 transition-colors">
                  {img.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineGallery;
