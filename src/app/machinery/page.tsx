"use client";

import HeroSection from "@/components/MachineryPage/HeroSection";
import MachineGallery from "@/components/MachineryPage/MachineGallery";
import InstrumentGallery from "@/components/MachineryPage/InstrumentGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InfrastructurePage = () => {
  return (
     <div>
        <Navbar/>
     <div className="relative overflow-hidden bg-orange-50 text-black">
      <div className="relative z-10 container mx-auto px-4 md:px-6 xl:px-20 py-10">
        <HeroSection />
        <MachineGallery />
        <InstrumentGallery/>
      </div>
    </div>
        <Footer/>
     </div>
  );
};

export default InfrastructurePage;
