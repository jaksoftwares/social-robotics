"use client";

import Hero from '@/components/home/hero';
import AboutSection from '@/components/home/about';
import RecentEvents from '@/components/home/recentevents';
import PartnersSection from '@/components/home/partners';
import NewsSection from '@/components/home/news';


export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RecentEvents />
      <NewsSection limit={2} />    
      <PartnersSection />

     
     

    </>
  );
}
