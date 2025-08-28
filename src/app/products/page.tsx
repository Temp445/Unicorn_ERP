import type { Metadata } from 'next';
import ProductListClient from './ProductListClient';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

export const metadata: Metadata = {
  title: 'Products | Unicorn (Bangalore) Pvt. Ltd',
  description: 'Unicorn (Bangalore) Pvt. Ltd',
  openGraph: {
    title: 'Products | Unicorn (Bangalore) Pvt. Ltd',
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
  return <ProductListClient />;
}