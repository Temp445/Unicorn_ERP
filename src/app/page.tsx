import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Landingpage/HeroSection";
import ManufacturingSector from "@/components/Landingpage/ManufacturingSector";
import CustomerSay from "@/components/Landingpage/CustomerSay";
import WhyWeStandOut from "@/components/Landingpage/WhyWeStandOut";
import WhoWe from "@/components/Landingpage/WhoWeSection";
import Clients from "@/components/Landingpage/Clients";
import Products from "@/components/Landingpage/Products"
import Footer from "@/components/Footer";


export default function Home() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <WhyWeStandOut/>
  <Products/>
  <ManufacturingSector />
  <WhoWe />
  <Clients/>
  <CustomerSay />
  <Footer/>
  </>
  );
}
