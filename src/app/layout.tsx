// app/layout.tsx

import './globals.css';
import '@/styles/globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social Robotics Lab – JKUAT',
  description:
    'Explore the Social Robotics Lab at JKUAT – pioneering research, innovation, and responsible computing in Kenya.',
  keywords: [
    'JKUAT',
    'Social Robotics',
    'AI',
    'Robots',
    'Kenya',
    'Computing',
    'Research Lab',
    'Machine Learning',
    'STEM',
    'Ethical AI',
    'Responsible Computing',
  ],
  authors: [{ name: 'Dr. Eunice Njeri', url: 'https://www.jkuat.ac.ke' }],
  creator: 'JKUAT Social Robotics Lab',
  metadataBase: new URL('https://www.jkuatsocialroboticslab.com'),
  openGraph: {
    title: 'Social Robotics Lab – JKUAT',
    description:
      'Discover robotics innovation at JKUAT. Research, Activities, Projects, and more.',
    url: 'https://www.jkuatsocialroboticslab.com/',
    siteName: 'JKUAT Social Robotics Lab',
    images: [
      {
        url: 'https://www.jkuatsocialroboticslab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Social Robotics Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Robotics Lab – JKUAT',
    description: 'Explore cutting-edge robotics research at JKUAT.',
    images: ['https://www.jkuatsocialroboticslab.com/og-image.png'],
    site: '@JKUATRobotics',
    creator: '@JKUATRobotics',
  },
  themeColor: '#0077B6',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0077B6" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Eunice Njeri" />
      </head>
      <body className={inter.className + ' bg-white text-gray-900'}>
        <header>
          <Header />
        </header>

        <main className="min-h-screen w-full">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
