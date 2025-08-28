import AboutHero from '@/components/Aboutpage/AboutHero'
import CardSection from '@/components/Aboutpage/CardSection'
import MilestoneSection from '@/components/Aboutpage/MilestoneSection'
import CountSection from '@/components/Aboutpage/CountSection'
import WhyChooseUs from '@/components/Aboutpage/WhyChooseUs'
import StorySection from '@/components/Aboutpage/StorySection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next';
import Founder from '@/components/Aboutpage/Founder'
import VisionSection from '@/components/Aboutpage/VisionSection'

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

export const metadata: Metadata = {
  title: 'About Unicorn (Bangalore) Pvt. Ltd',
  description: 'Unicorn (Bangalore) Pvt. Ltd',
  openGraph: {
    title: 'About Unicorn (Bangalore) Pvt. Ltd',
    description: 'Unicorn (Bangalore) Pvt. Ltd',
    url: `${domainUrl}/about`,
    siteName: 'Unicorn (Bangalore) Pvt. Ltd',
    images: [
      {
        url: `${domainUrl}/og-images/AceLogo.png`, 
        width: 1200,
        height: 630,
        alt: 'Unicorn (Bangalore) Pvt. Ltd',
      },
    ],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
  <>
  <Navbar/>
  <AboutHero/>
  <StorySection/>
  <CountSection/>
  <VisionSection/>
  <MilestoneSection/>
  <Founder/>
  <WhyChooseUs/>
  <CardSection/>
  <Footer/>
  </>
  )
}
