import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import BackToTop from "@/components/BackToTop";

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  title: 'Unicorn (Bangalore) Pvt. Ltd',
  description: "Unicorn (Bangalore) Pvt. Ltd",
   keywords: "Unicorn (Bangalore) Pvt. Ltd ",
   openGraph: { 
    title: 'Unicorn (Bangalore) Pvt. Ltd',
    description: 'Unicorn (Bangalore) Pvt. Ltd',
    url: `${domainUrl}`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href="/AceLogo.png" />
       </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <AuthProvider>
        {children}
        <BackToTop/>
        </AuthProvider>
      </body>
    </html>
  );
}
