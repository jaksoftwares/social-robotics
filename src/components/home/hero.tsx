'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      className="bg-customCyanBlue w-full h-auto md:h-[85vh] flex items-center py-10 md:py-0 relative overflow-visible mb-8 md:mb-12 rounded-b-[6rem] md:rounded-b-[8rem]"
      tabIndex={-1}
      style={{ marginTop: '-100px', paddingTop: '150px', paddingBottom: '80px', minHeight: 'calc(85vh + 100px)' }}
    >
      {/* Background extension to cover header area */}
      <div className="absolute top-0 left-0 w-full h-24 bg-customCyanBlue -translate-y-full z-0"></div>
      
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated balls - more variety */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-white/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-16 w-4 h-4 bg-white/15 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-10 left-1/2 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-400"></div>
        <div className="absolute top-3/4 left-1/5 w-5 h-5 bg-white/12 rounded-full animate-bounce delay-600"></div>
        
        {/* New floating bubbles */}
        <div className="absolute top-16 left-20 w-8 h-8 bg-white/8 rounded-full animate-pulse delay-800"></div>
        <div className="absolute bottom-16 right-32 w-7 h-7 bg-white/12 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/10 rounded-full animate-ping delay-900"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-white/18 rounded-full animate-pulse delay-1100"></div>
        <div className="absolute top-1/6 right-1/6 w-5 h-5 bg-white/14 rounded-full animate-bounce delay-1300"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-12 w-6 h-6 border border-white/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-16 w-8 h-8 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-white/10 transform rotate-45 animate-bounce delay-800"></div>
        <div className="absolute bottom-1/3 right-1/5 w-10 h-10 border-2 border-white/8 rounded-full animate-pulse delay-1400"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-white/20 transform rotate-45 animate-ping delay-1600"></div>
        
        {/* Grid lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
        
        {/* Radial gradients */}
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-radial from-white/5 to-transparent rounded-full animate-pulse delay-1200"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-gradient-radial from-white/3 to-transparent rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-gradient-radial from-white/4 to-transparent rounded-full animate-pulse delay-1800"></div>
        
        {/* Floating lines */}
        <div className="absolute top-1/6 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-300"></div>
        <div className="absolute bottom-1/6 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/2 left-1/3 w-28 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent animate-pulse delay-1400"></div>
        
        {/* Animated particles */}
        <div className="absolute top-12 right-12 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-12 left-12 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2200"></div>
        <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2400"></div>
      </div>

      {/* Page-wide container with reduced margins */}
      <div className="w-full px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12 md:gap-16">

          {/* Image Section - comes first on mobile */}
          <div className="w-full md:w-1/2">
            <div className="relative p-6 border-l-4 border-r-4 border-white rounded-2xl bg-gradient-to-br from-white/8 via-transparent to-white/8 backdrop-blur-sm shadow-2xl min-h-[700px] md:min-h-[600px]">
              {/* Incomplete top border - 3/4 width */}
              <div className="absolute top-0 left-0 w-3/4 h-1 bg-white rounded-l-2xl"></div>
              
              {/* Incomplete bottom border - 3/4 width */}
              <div className="absolute bottom-0 right-0 w-3/4 h-1 bg-white rounded-r-2xl"></div>
              
              {/* Cute floating dots */}
              <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              
              {/* Corner accent lines */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-lg"></div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center group">
                <Image
                  src="/img/image 19.png"
                  alt="Robot"
                  width={1100}
                  height={1400}
                  className="w-full max-w-[650px] h-auto relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-2xl filter group-hover:saturate-110"
                  priority
                />
                {/* Image glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                {/* Floating particles around image on hover */}
                <div className="absolute -top-4 -right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                <div className="absolute top-1/4 -right-6 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6 md:pr-6">
            <div className="space-y-4 relative">
              {/* Cute accent elements */}
              <div className="absolute -top-4 -left-2 w-6 h-6 border-2 border-gray-900/60 rounded-full shadow-lg"></div>
              <div className="absolute -top-2 -right-4 w-4 h-4 bg-gray-900/50 rounded-full shadow-md"></div>
              
              <h1 className="text-7xl md:text-5xl lg:text-9xl font-bold font-raleway leading-tight drop-shadow-lg">
                <span className="text-white">Welcome to </span><span className="text-gray-900 drop-shadow-xl filter brightness-110 saturate-150">JKUAT</span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-raleway font-bold tracking-wide relative">
                <span className="bg-gradient-to-r from-white via-gray-900 to-white bg-clip-text text-transparent filter brightness-125 saturate-200 animate-pulse">SOCIAL ROBOTICS LAB</span>
                {/* Enhanced underline with pulse */}
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900 via-white to-gray-900 rounded-full shadow-lg animate-pulse"></div>
                {/* Additional glow effect for visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 animate-pulse blur-sm"></div>
              </h2>
            </div>
            
            {/* Pioneering text section - no card, stylish and elegant */}
            <div className="space-y-4 pt-6 relative">
              {/* Stylish side accent */}
              <div className="absolute -left-6 top-4 w-1 h-16 bg-gradient-to-b from-green-300/60 via-white to-green-300/60 rounded-full"></div>
              
              {/* Elegant text with consistent stylish typography */}
              <div className="space-y-3">
                <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl italic tracking-wide">
                  <span className="text-xs md:text-sm lg:text-base font-light tracking-widest uppercase text-white drop-shadow-md">Pioneering</span>
                  <span className="text-white font-normal"> the future of human-robot interaction through cutting-edge research, 
                  innovative technology, and </span><span className="text-white font-medium drop-shadow-sm">responsible AI development</span>.
                </p>
                
                <p className="text-xs md:text-sm lg:text-base font-light leading-relaxed max-w-xl italic tracking-wide">
                  <span className="text-xs md:text-sm lg:text-base font-extralight tracking-widest uppercase text-white drop-shadow-md">Discover</span>
                  <span className="text-white font-normal"> how we&apos;re shaping tomorrow&apos;s </span><span className="text-white  drop-shadow-sm">robotic companions</span><span className="text-white font-normal"> and </span><span className="text-white font-medium drop-shadow-sm">assistive technologies</span>.
                </p>
              </div>
            </div>
          
          <div className="pt-6 relative">
            <Link
              href="/about"
              className="relative inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                         bg-customLintingGreenDark text-white border-2 border-customLintingGreenDark 
                         hover:bg-white hover:text-customLintingGreenDark hover:border-customLintingGreenDark"
            >
              <span className="text-xl relative z-10">Learn More</span>
              <i className="fa-solid fa-arrow-right-long ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
              
              {/* Animated background sweep */}
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customLintingGreenDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customLintingGreenDark rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
