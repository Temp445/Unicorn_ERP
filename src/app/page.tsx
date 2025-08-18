import Footer from "@/components/Footer";
import BusinessSector from "@/components/Landingpage/BusinessSector";
import CustomerSay from "@/components/Landingpage/CustomerSay";
import Hero from "@/components/Landingpage/Hero";
import WhatIsERP from "@/components/Landingpage/WhatIsERP";
import WhoWe from "@/components/Landingpage/WhoWeSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <WhatIsERP />
  <BusinessSector />
  <WhoWe />
  <CustomerSay />
  <Footer/>
  </>
  );
}
