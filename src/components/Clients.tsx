'use client'

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import image1 from "@/assets/clients/client1.png";
import image2 from "@/assets/clients/client2.png";
import image3 from "@/assets/clients/client3.png";
import image4 from "@/assets/clients/client4.png";
import image5 from "@/assets/clients/client5.png";
import image6 from "@/assets/clients/client6.png";
import image7 from "@/assets/clients/client7.png";
import image8 from "@/assets/clients/client8.png";

const clients = [
  { image: image1, name: "Client 1" },
  { image: image2, name: "Client 2" },
  { image: image3, name: "Client 3" },
  { image: image4, name: "Client 4" },
  { image: image5, name: "Client 5" },
  { image: image6, name: "Client 6" },
  { image: image7, name: "Client 7" },
  { image: image8, name: "Client 8" },
];

const Clients = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-orange-200 ">
     <div className="absolute inset-0 left-0 top-0 bg-orange-800 rounded-b-full w-20 h-60  transition-opacity duration-300"></div>
     <div className="absolute inset-0 left-16 top-0 bg-orange-800 rounded-b-full w-20 h-36  transition-opacity duration-300"></div>
     <div className="absolute inset-0 left-32 top-0 bg-orange-800 rounded-b-full w-20 h-20  transition-opacity duration-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 gap-1 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-gray-200/50">
            <div className="w-2 h-2 bg-orange-500 rounded-full  mr-2" />
            <span className="text-sm font-medium text-orange-700 tracking-wide uppercase">
              Trusted By Industry Leaders
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Clients
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're proud to work with forward-thinking companies that trust us to deliver 
            exceptional results and drive innovation in their industries.
          </p>
        </div>

        <div className="relative">
       
          <Marquee 
            gradient={false} 
            pauseOnHover={true} 
            speed={50}
            className="py-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0 mx-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50 hover:border-orange-200/50 hover:bg-white"
              >
                <div className="relative">                  
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={140}
                    height={140}
                    className="mx-auto relative z-10 transition-all duration-500 group-hover:scale-105"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;