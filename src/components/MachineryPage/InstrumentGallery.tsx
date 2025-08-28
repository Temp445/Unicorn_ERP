"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import image1 from "@/assets/Instruments/image1.png";
import image2 from "@/assets/Instruments/image2.png";
import image3 from "@/assets/Instruments/image3.jpg";
import image4 from "@/assets/Instruments/image4.jpg";
import image5 from "@/assets/Instruments/image5.jpg";
import image6 from "@/assets/Instruments/image6.jpg";
import image7 from "@/assets/Instruments/image7.jpg";
import image8 from "@/assets/Instruments/image8.jpg";
import image9 from "@/assets/Instruments/image9.jpg";

interface Instrument {
  src: StaticImageData;
  alt: string;
  brand: string;
}

const instruments: Instrument[] = [
  { src: image1, alt: "PROFILE PROJECTOR ​", brand: "MITIYO  INSTRUMENTS"},
  { src: image4, alt: "TACHO METER​", brand: "HDM-560​" },
  { src: image3, alt: "PLATING THICKNESS METER​", brand: "MESTECH​" },
  { src: image2, alt: "ROCKWELL HARDNESS TESTER​", brand: "TRS INSTRUMENTS" },
  { src: image5, alt: "LUX METER​", brand: "HTC​" },
  { src: image6, alt: "MICROMETER", brand: "INSIZE​" },
  { src: image7, alt: "SNAP GAUGE​", brand: "AMS" },
  { src: image8, alt: "DIGITAL VERNIER​", brand: "INSIZE​" },
  { src: image9, alt: "PLUG GAUGE​", brand: "AMS" },
];

const InstrumentGallery = () => {
  return (
    <section className=" py-10 md:mb-20">
      <div className="container mx-auto px-0  lg:px-5">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
            Our Measuring & Inspection Instruments
          </h2>
        
        </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-4 auto-rows-[300px] md:auto-rows-[200px] grid-flow-dense">
  {instruments.map((inst, idx) => {
    
    const isLarge = idx === 0 || idx === 3; 
    return (
      <div
        key={idx}
        className={`relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-all duration-500 hover:scale-105 hover:shadow-xl
          ${isLarge ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"}`}
      >
        <div className="absolute top-4 left-4 z-20 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
          {inst.brand}
        </div>

        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={inst.src}
            alt={inst.alt}
            className="w-full h-full  transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>


        <div className="absolute bottom-0 w-full bg-black/80 p-2 ">
  <h3 className="text-white font-semibold text-base">{inst.alt}</h3>
</div>

      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default InstrumentGallery;
