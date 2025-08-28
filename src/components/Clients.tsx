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
    <section className="relative py-20 overflow-hidden bg-[#205057] ">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
     
          <h2 className="text-4xl md:text-5xl font-bold text-white  leading-tight">
            Our Clients
          </h2>
          <div className='w-32 h-1 mx-auto bg-white rounded-full mb-6'></div>
          
          <p className="text-lg text-[#e5e5e5] max-w-2xl mx-auto leading-relaxed">
            We're proud to work with forward-thinking companies that trust us to deliver 
            exceptional results and drive innovation in their industries.
          </p>
        </div>

        <div className="relative">
       
          <Marquee 
            gradient={false} 
            pauseOnHover={true} 
            speed={50}
            className="py-10"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0 mx-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50 hover:border-orange-200/50 hover:bg-white"
              >
                <div className="relative">                  
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={160}
                    height={160}
                    className="mx-auto relative z-10 transition-all duration-500 group-hover:scale-105 rounded"
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