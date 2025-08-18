import AboutHero from '@/components/Aboutpage/AboutHero'
import CardSection from '@/components/Aboutpage/CardSection'
import CoreValueSection from '@/components/Aboutpage/CoreValueSection'
import CountSection from '@/components/Aboutpage/CountSection'
import WhyChooseUs from '@/components/Aboutpage/WhyChooseUs'
import StorySection from '@/components/Aboutpage/StorySection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
  <>
  <Navbar/>
  <AboutHero/>
  <StorySection/>
  <CountSection/>
  <CoreValueSection/>
  <WhyChooseUs/>
  <CardSection/>
  <Footer/>
  </>
  )
}
