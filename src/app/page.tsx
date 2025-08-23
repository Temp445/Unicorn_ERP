import Footer from "@/components/Footer";
import ManufacturingSector from "@/components/Landingpage/ManufacturingSector";
import CustomerSay from "@/components/Landingpage/CustomerSay";
import Hero from "@/components/Landingpage/Hero";
import WhyWeStandOut from "@/components/Landingpage/WhyWeStandOut";
import WhoWe from "@/components/Landingpage/WhoWeSection";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Products from "@/components/Landingpage/Products"


export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
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
