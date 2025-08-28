
import HeroSection from "@/components/MachineryPage/HeroSection";
import MachineGallery from "@/components/MachineryPage/MachineGallery";
import InstrumentGallery from "@/components/MachineryPage/InstrumentGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardSection from "@/components/MachineryPage/CardSection";

const InfrastructurePage = () => {
  return (
     <div>
     <Navbar/>
     <HeroSection />
     <MachineGallery />
     <InstrumentGallery/>
     <CardSection/>
     <Footer/>
     </div>
  );
};

export default InfrastructurePage;
