
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
  { src: image1, alt: "PROFILE PROJECTOR", brand: "MITIYO  INSTRUMENTS" },
  { src: image8, alt: "DIGITAL VERNIER​", brand: "INSIZE​" },
  { src: image9, alt: "PLUG GAUGE​", brand: "AMS" },
  { src: image2, alt: "ROCKWELL HARDNESS TESTER​", brand: "TRS INSTRUMENTS" },
  { src: image6, alt: "MICROMETER", brand: "INSIZE​" },
  { src: image3, alt: "PLATING THICKNESS METER​", brand: "MESTECH​" },
  { src: image5, alt: "LUX METER​", brand: "HTC​" },
  { src: image4, alt: "TACHO METER​", brand: "HDM-560​" },
  { src: image7, alt: "SNAP GAUGE​", brand: "AMS" },
];

const InstrumentGallery = () => {
  return (
    <section className=" py-10 md:mb-20 bg-[#205057]">
      <div className="container mx-auto px-0  lg:px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white  font-extrabold mb-6">
            Our{" "}
            <span className="">
              Measuring & Inspection Instruments
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-2 auto-rows-[300px] md:auto-rows-[250px] grid-flow-dense">
          {instruments.map((inst, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={idx}
                className={`relative bg-white border-2 border-[#e5e5e5] rounded overflow-hidden  transition-all duration-500 hover:shadow-xl group
          ${
            isLarge
              ? "md:col-span-4 md:row-span-2"
              : "md:col-span-2 md:row-span-1"
          }`}
              >
                <div className="absolute top-2 left-2 z-20 bg-[#205057] text-white text-xs px-3 py-1 rounded-full hidden group-hover:block">
                  {inst.brand}
                </div>

                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={inst.src}
                    alt={inst.alt}
                    className="w-full h-full"
                    priority
                  />
                </div>

                <div className="absolute bottom-0 w-full bg-[#205057] p-2 hidden group-hover:block">
                  <h3 className="text-white font-semibold text-base">
                    {inst.alt}
                  </h3>
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
