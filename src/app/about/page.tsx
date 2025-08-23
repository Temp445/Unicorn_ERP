import AboutHero from '@/components/Aboutpage/AboutHero'
import CardSection from '@/components/Aboutpage/CardSection'
import CoreValueSection from '@/components/Aboutpage/CoreValueSection'
import CountSection from '@/components/Aboutpage/CountSection'
import WhyChooseUs from '@/components/Aboutpage/WhyChooseUs'
import StorySection from '@/components/Aboutpage/StorySection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next';
import Founder from '@/components/Aboutpage/Founder'

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

export const metadata: Metadata = {
  title: 'About Unicorn ERP',
  description: 'Unicorn ERP',
  openGraph: {
    title: 'About Unicorn ERP',
    description: 'Unicorn ERP',
    url: `${domainUrl}/about`,
    siteName: 'Unicorn ERP',
    images: [
      {
        url: `${domainUrl}/og-images/AceLogo.png`, 
        width: 1200,
        height: 630,
        alt: 'Unicorn ERP',
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
  <CoreValueSection/>
  <WhyChooseUs/>
  <Founder/>
  <CardSection/>
  <Footer/>
  </>
  )
}
