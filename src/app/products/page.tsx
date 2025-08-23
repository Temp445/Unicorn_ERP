import type { Metadata } from 'next';
import ProductListClient from './ProductListClient';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

export const metadata: Metadata = {
  title: 'Products | Unicorn ERP',
  description: 'Unicorn ERP',
  openGraph: {
    title: 'Products | Unicorn ERP',
    description: 'Unicorn ERP',
    url: `${domainUrl}/about`,
    siteName: 'Products | Unicorn ERP',
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
  return <ProductListClient />;
}