// app/about/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white">
      
      
      {/* Banner */}
      <Banner title="ABOUT" />
      
      {/* Intro Section with Particle Effect Background */}
      <section className="relative bg-custom-lightGray py-12 px-4 md:px-8">
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced Background with Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/5 to-custom-lintingGreenDark/5"></div>
          
          {/* Animated particles */}
          <div className="absolute top-10 left-1/4 w-3 h-3 bg-customCyanBlue/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-custom-lintingGreenDark/30 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-customCyanBlue/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-custom-lintingGreenDark/20 rounded-full animate-pulse animation-delay-2000"></div>
          
          {/* Grid lines */}
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 gap-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-customCyanBlue/5 to-transparent"></div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full grid grid-rows-6 gap-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-custom-lintingGreenDark/5 to-transparent"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Updated intro section with styled header and short line */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">At Jkuat Social Robotics Lab</p>
              <div className="w-[150px] h-[2px] bg-custom-lintingGreenDark"></div>
            </div>
            
            {/* Header styled like home section headers */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              WHAT <span className="text-custom-lintingGreenDark">WE DO</span>
            </h2>
            
            
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side with Enhanced Decorative Effects */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                {/* Enhanced Decorative corner elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-customCyanBlue/40 rounded-tl-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-custom-lintingGreenDark/40 rounded-br-3xl"></div>
                
                {/* Additional decorative circles */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-customCyanBlue/60 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000"></div>
                
                {/* Decorative dots pattern */}
                <div className="absolute top-4 right-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white/80 rounded-full"></div>
                  ))}
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm"></div>
                
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/30 to-custom-lintingGreenDark/30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60"></div>
                  <Image
                    src="/img/about/about-1.jpeg"
                    alt="JKUAT Social Robotics Lab"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Enhanced floating accent images with more decoration */}
                <div className="absolute -bottom-10 -left-10 z-20 w-32 h-32 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 border-4 border-white/90">
                  <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/20 to-custom-lintingGreenDark/20"></div>
                  <Image
                    src="/img/pepper.png"
                    alt="PEPPER Robot"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Additional decorative floating elements */}
                <div className="absolute -top-8 right-8 w-4 h-4 bg-gradient-to-r from-customCyanBlue to-custom-lintingGreenDark rounded-full animate-bounce"></div>
                <div className="absolute bottom-8 -right-8 w-6 h-6 bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue rounded-full animate-bounce animation-delay-500"></div>
              </div>
            </div>
            
            {/* Text Content Side with Enhanced Typography */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="backdrop-blur-sm bg-white/50 rounded-3xl p-8 shadow-xl border border-white/20 hover:bg-white/60 transition-all duration-500">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold mb-6">
                  <span className="block">Pioneering</span> 
                  <span className="bg-gradient-to-r from-customCyanBlue to-custom-lintingGreenDark bg-clip-text text-transparent">Social Robotics Research</span>
                </h2>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Welcome to the JKUAT Social Robotics Lab, where innovation meets social impact. 
                  Our lab is dedicated to designing and implementing robotic solutions that enhance human experience 
                  through intuitive social interactions.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Established as a center of excellence in social robotics research in Kenya, we bring together experts 
                  in computing, engineering, psychology, and design to create robots that can effectively understand and 
                  respond to human social cues while addressing real societal challenges in education, social training, and healthcare.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/team" 
                    className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                               bg-customCyanBlue text-white border-2 border-customCyanBlue 
                               hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue"
                  >
                    <span className="relative z-10">Meet Our Team</span>
                    <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                    
                    {/* Animated background sweep */}
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    href="/projects" 
                    className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                               bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                               hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark"
                  >
                    <span className="relative z-10">Explore Projects</span>
                    <i className="fas fa-flask ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                    
                    {/* Animated background sweep */}
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-custom-lintingGreenDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-custom-lintingGreenDark rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section with Enhanced Futuristic Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Enhanced Gradient background with geometric patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/15 via-gray-50 to-custom-lintingGreenDark/15"></div>
          
          {/* Animated floating geometric shapes - More visible */}
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-customCyanBlue/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-custom-lintingGreenDark/40 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-customCyanBlue/50 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 border-2 border-custom-lintingGreenDark/50 transform rotate-12 animate-bounce animation-delay-1000"></div>
          
          {/* Additional geometric shapes */}
          <div className="absolute top-1/3 right-1/5 w-16 h-16 bg-customCyanBlue/20 rounded-full animate-pulse animation-delay-3000"></div>
          <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-custom-lintingGreenDark/20 rounded-full animate-pulse animation-delay-4000"></div>
          
          {/* Grid pattern overlay - More visible */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
              backgroundSize: '25px 25px'
            }}></div>
          </div>
          
          {/* Subtle light beams - More visible */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-customCyanBlue/30 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-custom-lintingGreenDark/30 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-customCyanBlue/20 to-transparent"></div>
          
          {/* Floating particles - More visible */}
          <div className="absolute top-20 left-1/3 w-3 h-3 bg-customCyanBlue/60 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-custom-lintingGreenDark/60 rounded-full animate-ping animation-delay-3000"></div>
          <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 bg-customCyanBlue/50 rounded-full animate-pulse animation-delay-1500"></div>
          <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-custom-lintingGreenDark/50 rounded-full animate-bounce animation-delay-2500"></div>
          
          {/* Diagonal lines for futuristic effect */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/25 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/25 to-transparent transform -rotate-12"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header with Line */}
          <div className="flex flex-col items-center text-left mb-16">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">Our core values and direction</p>
              <div className="w-[150px] h-[2px] bg-custom-lintingGreenDark"></div>
            </div>
            
            {/* Header styled like home section headers */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              VISION & <span className="text-custom-lintingGreenDark">MISSION</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision Card - Enhanced Futuristic Design */}
            <div className="group relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-customCyanBlue/5 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card content with futuristic glass morphism */}
              <div className="relative backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-2xl border border-white/30 h-full transition-all duration-500 group-hover:bg-white/80 group-hover:shadow-3xl group-hover:border-customCyanBlue/20 group-hover:transform group-hover:scale-[1.02]">
                
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/60 to-transparent"></div>
                
                {/* Enhanced icon with glow */}
                <div className="relative mb-6 mx-auto w-20 h-20 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-customCyanBlue/20 rounded-full blur-md group-hover:bg-customCyanBlue/40 transition-colors duration-300"></div>
                  <div className="relative bg-gradient-to-br from-customCyanBlue/30 to-customCyanBlue/10 w-20 h-20 rounded-full flex items-center justify-center border border-customCyanBlue/20 group-hover:border-customCyanBlue/40 transition-all duration-300">
                    <i className="fas fa-eye text-customCyanBlue text-2xl filter drop-shadow-sm"></i>
                  </div>
                </div>
                
                {/* Modern typography */}
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 relative">
                  <span className="relative z-10">Our Vision</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-customCyanBlue/30 rounded-full"></div>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    To be the leading center of excellence in social robotics in Africa, pioneering innovative solutions that enhance human well-being through empathetic and responsible robotic technology.
                  </p>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    We envision a future where robots seamlessly integrate into society, assisting humans in education, healthcare, and daily activities while maintaining the highest ethical standards and promoting inclusivity.
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Mission Card - Enhanced Futuristic Design */}
            <div className="group relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-custom-lintingGreenDark/20 to-custom-lintingGreenDark/5 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card content with futuristic glass morphism */}
              <div className="relative backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-2xl border border-white/30 h-full transition-all duration-500 group-hover:bg-white/80 group-hover:shadow-3xl group-hover:border-custom-lintingGreenDark/20 group-hover:transform group-hover:scale-[1.02]">
                
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/60 to-transparent"></div>
                
                {/* Enhanced icon with glow */}
                <div className="relative mb-6 mx-auto w-20 h-20 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-custom-lintingGreenDark/20 rounded-full blur-md group-hover:bg-custom-lintingGreenDark/40 transition-colors duration-300"></div>
                  <div className="relative bg-gradient-to-br from-custom-lintingGreenDark/30 to-custom-lintingGreenDark/10 w-20 h-20 rounded-full flex items-center justify-center border border-custom-lintingGreenDark/20 group-hover:border-custom-lintingGreenDark/40 transition-all duration-300">
                    <i className="fas fa-bullseye text-custom-lintingGreenDark text-2xl filter drop-shadow-sm"></i>
                  </div>
                </div>
                
                {/* Modern typography */}
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 relative">
                  <span className="relative z-10">Our Mission</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-custom-lintingGreenDark/30 rounded-full"></div>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    To advance the field of social robotics through innovative research, responsible development, and practical implementation of robots that understand human social contexts.
                  </p>
                  
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    We are committed to:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Conducting cutting-edge research in human-robot interaction",
                      "Designing robots that enhance learning and social development",
                      "Training the next generation of robotics engineers and researchers",
                      "Promoting responsible computing principles in AI and robotics",
                      "Creating inclusive technologies that address diverse societal needs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-custom-lintingGreenDark/20 to-custom-lintingGreenDark/10 flex-shrink-0 flex items-center justify-center mt-0.5 border border-custom-lintingGreenDark/20">
                          <i className="fas fa-check text-custom-lintingGreenDark text-xs"></i>
                        </div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      


      {/* Our Team Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* Enhanced Gradient background with geometric patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-lintingGreenDark/10 via-white to-customCyanBlue/10"></div>
          
          {/* Animated floating geometric shapes - More visible */}
          <div className="absolute top-16 left-12 w-32 h-32 border-2 border-custom-lintingGreenDark/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-12 w-24 h-24 border-2 border-customCyanBlue/30 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-custom-lintingGreenDark/40 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-customCyanBlue/40 transform rotate-12 animate-bounce animation-delay-1000"></div>
          
          {/* Additional geometric shapes */}
          <div className="absolute top-1/4 right-1/5 w-12 h-12 bg-custom-lintingGreenDark/20 rounded-full animate-pulse animation-delay-3000"></div>
          <div className="absolute bottom-1/3 left-1/5 w-14 h-14 bg-customCyanBlue/20 rounded-full animate-pulse animation-delay-4000"></div>
          
          {/* Grid pattern overlay - More visible */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Subtle light beams - More visible */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-custom-lintingGreenDark/25 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-customCyanBlue/25 to-transparent"></div>
          
          {/* Floating particles - More visible */}
          <div className="absolute top-24 left-1/3 w-2.5 h-2.5 bg-custom-lintingGreenDark/50 rounded-full animate-ping"></div>
          <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-customCyanBlue/50 rounded-full animate-ping animation-delay-3000"></div>
          
          {/* Diagonal lines for futuristic effect */}
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/20 to-transparent transform rotate-6"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/20 to-transparent transform -rotate-6"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header with Line */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center mb-6">
              <div className="w-[150px] h-[2px] bg-customCyanBlue mr-4"></div>
              <p className="text-gray-600 px-4">Meet the experts behind our research</p>
              <div className="w-[150px] h-[2px] bg-customCyanBlue ml-4"></div>
            </div>
            
            {/* Header styled like home section headers */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              OUR <span className="text-custom-lintingGreenDark">TEAM</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Team Content Card */}
            <div className="relative order-2 md:order-1">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-custom-lintingGreenDark/20 to-custom-lintingGreenDark/5 rounded-2xl blur-sm opacity-60 transition-opacity duration-500"></div>
              
              {/* Card content with futuristic glass morphism */}
              <div className="relative backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-2xl border border-white/30 h-full transition-all duration-500">
                
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/60 to-transparent"></div>
                
                {/* Enhanced icon with glow */}
                <div className="relative mb-6 mx-auto w-20 h-20 transition-transform duration-300">
                  <div className="absolute inset-0 bg-custom-lintingGreenDark/20 rounded-full blur-md transition-colors duration-300"></div>
                  <div className="relative bg-gradient-to-br from-custom-lintingGreenDark/30 to-custom-lintingGreenDark/10 w-20 h-20 rounded-full flex items-center justify-center border border-custom-lintingGreenDark/20 transition-all duration-300">
                    <i className="fas fa-users text-custom-lintingGreenDark text-2xl filter drop-shadow-sm"></i>
                  </div>
                </div>
                
                {/* Modern typography */}
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 relative">
                  <span className="relative z-10">Expert Leadership</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-custom-lintingGreenDark/30 rounded-full"></div>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Our multidisciplinary team brings together expertise in robotics, computer science, ethics, and human-computer interaction to advance the field of social robotics.
                  </p>
                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    From principal investigators to research assistants, every member contributes unique perspectives and skills essential for responsible innovation in robotics.
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    {[
                      { title: "Research Leaders", desc: "Experienced faculty guiding cutting-edge research projects" },
                      { title: "Graduate Students", desc: "Talented researchers pursuing advanced degrees in robotics" },
                      { title: "Industry Partners", desc: "Collaborators bringing real-world application insights" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">{item.title}:</span>
                          <span className="text-gray-700 ml-2">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Team navigation button */}
                <div className="mt-8">
                  <Link 
                    href="/team" 
                    className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                               bg-customCyanBlue text-white border-2 border-customCyanBlue 
                               hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue"
                  >
                    <span className="relative z-10">Meet Our Team</span>
                    <i className="fas fa-arrow-right ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                    
                    {/* Animated background sweep */}
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                  </Link>
                </div>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Team Image */}
            <div className="order-1 md:order-2 relative group">
              {/* Main image with enhanced effects */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-customCyanBlue/10 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <Image
                    src="/img/about/about-team.jpg"
                    alt="Our research team working on social robotics projects"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-customCyanBlue/60 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-customCyanBlue/30 rounded-full animate-pulse animation-delay-2000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-custom-lintingGreenDark/30 rounded-full animate-pulse animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </section>






      {/* Responsible Computing Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Enhanced Background Effects matching home page */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/8 via-gray-50 to-custom-lintingGreenDark/8"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-16 left-12 w-40 h-40 border-2 border-customCyanBlue/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-12 w-32 h-32 border-2 border-custom-lintingGreenDark/20 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-customCyanBlue/30 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-custom-lintingGreenDark/30 transform rotate-12 animate-bounce animation-delay-1000"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-1/3 w-3 h-3 bg-customCyanBlue/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-custom-lintingGreenDark/40 rounded-full animate-ping animation-delay-3000"></div>
          
          {/* Light beams */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-customCyanBlue/20 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-custom-lintingGreenDark/20 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header with Line */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">Our commitment to ethical technology</p>
              <div className="w-[150px] h-[2px] bg-custom-lintingGreenDark"></div>
            </div>
            
            {/* Header styled like home section headers */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              RESPONSIBLE <span className="text-custom-lintingGreenDark">COMPUTING</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Content */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm opacity-60 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-2xl border border-white/30 transition-all duration-500 hover:bg-white/80 hover:shadow-3xl">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/60 to-transparent"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                    Responsible Robotics in 
                    <span className="bg-gradient-to-r from-customCyanBlue to-custom-lintingGreenDark bg-clip-text text-transparent"> Social Environments</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      At the Social Robotics Lab, we are dedicated to designing robots that enhance social interaction and 
                      support human well-being through empathetic and inclusive design. Our research explores how robots can 
                      understand and respond to human social cues, promote social inclusion, and navigate the ethical 
                      challenges of robotic technology.
                    </p>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We aim to advance the field of social robotics by developing innovative 
                      approaches that integrate robots into everyday environments—education, social training, homes, and 
                      healthcare settings—where they can assist with tasks, support learning, and provide companionship to 
                      individuals with specific needs.
                    </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/30 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative group">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-customCyanBlue/30 rounded-tl-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-custom-lintingGreenDark/30 rounded-br-2xl"></div>
                
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/10 to-custom-lintingGreenDark/10 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/img/about/about-2.jpeg"
                    alt="Social Robotics in Action"
                    width={600}
                    height={400}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-customCyanBlue/60 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-lintingGreenDark/8 via-white to-customCyanBlue/8"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-16 w-36 h-36 border-2 border-custom-lintingGreenDark/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 border-2 border-customCyanBlue/20 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/4 left-1/5 w-20 h-20 border-2 border-custom-lintingGreenDark/30 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-customCyanBlue/30 transform rotate-12 animate-bounce animation-delay-1000"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 bg-custom-lintingGreenDark/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-customCyanBlue/40 rounded-full animate-ping animation-delay-3000"></div>
          
          {/* Light beams */}
          <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-custom-lintingGreenDark/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-customCyanBlue/20 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header with Line */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">Our educational approach</p>
              <div className="w-[150px] h-[2px] bg-customCyanBlue"></div>
            </div>
            
            {/* Header styled like home section headers */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              TEACHING <span className="text-custom-lintingGreenDark">METHODOLOGY</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-custom-lintingGreenDark/30 rounded-tl-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-customCyanBlue/30 rounded-br-2xl"></div>
                
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-custom-lintingGreenDark/10 to-customCyanBlue/10 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/img/about/about-image.png"
                    alt="Teaching Methodology"
                    width={500}
                    height={400}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-custom-lintingGreenDark/60 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-customCyanBlue/60 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-custom-lintingGreenDark/20 to-customCyanBlue/20 rounded-2xl blur-sm opacity-60 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative backdrop-blur-xl bg-white/70 rounded-2xl p-8 shadow-2xl border border-white/30 transition-all duration-500 hover:bg-white/80 hover:shadow-3xl">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/60 to-transparent"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    TEACHING 
                    <span className="bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue bg-clip-text text-transparent"> RESPONSIBLE COMPUTING</span>
                  </h3>
                  
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue text-white rounded-full text-sm font-semibold shadow-lg">
                      Training Approach
                    </span>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our methodology emphasizes hands-on learning and real-world design scenarios to make Responsible Computing (RC) and ethics both practical and engaging.
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "Team-Based RC Projects", desc: "Students collaborate in teams to design projects that integrate RC principles, fostering critical thinking and ethical awareness." },
                      { title: "Ethical Training Workshops", desc: "We conduct structured workshops incorporating design scenarios, case studies, and expert guest lectures to provide a comprehensive understanding of RC." },
                      { title: "Industry and Academic Engagement", desc: "Guest lecturers from both industry and academia share insights on responsible technology development." },
                      { title: "Applied Learning", desc: "Students apply the RC knowledge gained to their projects, enabling them to internalize ethical principles and implement them in real-world scenarios." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300 hover:scale-[1.02]">
                        <div className="w-2 h-2 bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* Impact & Outreach Section */}
      <section className="relative py-0 pt-16 md:py-14 px-2 md:px-0 overflow-visible bg-[#f7f8fa]" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `
            repeating-linear-gradient(120deg, #e5e7eb 0px, #e5e7eb 2px, transparent 2px, transparent 32px),
            repeating-linear-gradient(60deg, #e5e7eb 0px, #e5e7eb 2px, transparent 2px, transparent 32px),
            repeating-linear-gradient(0deg, #e5e7eb 0px, #e5e7eb 2px, transparent 2px, transparent 32px)
          `,
          backgroundSize: '56px 96px',
          opacity: 0.45
        }}></div>
        <div className="relative container mx-auto max-w-5xl z-10">
          {/* Section Header with Line */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            <div className="flex items-center mb-3 md:mb-4">
              <p className="text-gray-600 mr-3 text-sm md:text-base">Measuring our success and reach</p>
              <div className="w-[80px] md:w-[120px] h-[2px] bg-customCyanBlue"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
              IMPACT & <span className="text-custom-lintingGreenDark">OUTREACH</span>
            </h2>
          </div>
          <div className="relative group">
            {/* Main content card with compact styling */}
            <div className="relative backdrop-blur-xl bg-white/85 rounded-xl p-4 md:p-6 shadow-xl border border-white/40 transition-all duration-500">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 bg-customCyanBlue t rounded-xl flex items-center justify-center shadow-md border border-white/30">
                  <i className="fas fa-chart-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-1">
                    Transformative <span className="bg-gradient-to-r from-custom-lintingGreenDark to-customCyanBlue bg-clip-text text-transparent">Outcomes</span>
                  </h3>
                  <span className="inline-block px-3 py-1 bg-customCyanBlue text-white rounded-full text-xs font-semibold shadow">
                    Real-World Impact
                  </span>
                </div>
              </div>
              {/* Description */}
              <div className="mb-4 space-y-3">
                <div className="relative p-3 bg-gradient-to-r from-custom-lintingGreenDark/5 to-customCyanBlue/5 rounded-lg border border-white/30">
                  <p className="text-gray-700 text-base leading-relaxed">
                    The JKUAT Social Robotics Lab initiative is already making significant strides. Currently, there are five ongoing MSc projects by Software Engineering students at the Department of Computing, JKUAT, supported under the Social Robotics Project. These projects explore various aspects of social robotics and machine learning, with a focus on education, social training, and social care.
                  </p>
                </div>
                <div className="relative p-3 bg-gradient-to-r from-customCyanBlue/5 to-custom-lintingGreenDark/5 rounded-lg border border-white/30">
                  <p className="text-gray-700 text-base leading-relaxed">
                    As part of our ongoing responsible computing project, we have trained <span className="font-bold text-gray-900  ">~150 students</span> in Computer Science and Technology about robotics and responsible computing.
                  </p>
                </div>
              </div>
              {/* Call to Action */}
              <div className="mb-4">
                <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-custom-lintingGreenDark/10 to-customCyanBlue/10 rounded-lg border border-white/30">
                  <div className="w-1 h-6 bg-gradient-to-b from-custom-lintingGreenDark to-customCyanBlue rounded-full"></div>
                  <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    Explore some of the impact the lab has made:
                  </h4>
                </div>
              </div>
              {/* Impact Links */}
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "RCC Programme", desc: "Click here to see the video", url: "https://youtu.be/0Poy3Iavmeg", icon: "fa-play", color: "from-customCyanBlue to-customCyanBlue/80" },
                  { title: "RCC Programme and Student Impact", desc: "Click here to see the blog", url: "https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/", icon: "fa-blog", color: "from-customCyanBlue to-customCyanBlue" },
                  { title: "Responsible AI Webinar", desc: "Click here to see the blog", url: "https://discover.jkuat.ac.ke/responsible-ai-key-to-harnessing-its-potential/", icon: "fa-microphone", color: "from-customCyanBlue to-customCyanBlue" },
                  { title: "Ethical Design Workshop", desc: "Click here to see the resource", url: "https://discover.jkuat.ac.ke/integrating-african-perspectives-in-technology-and-design-processes/", icon: "fa-tools", color: "from-customCyanBlue to-customCyanBlue" },
                  { title: "Girls in Robotics", desc: "Click here to see the resource", url: "https://www.jkuat.ac.ke/programme-to-attract-young-women-to-stem-unveiled/", icon: "fa-users", color: "from-customCyanBlue to-customCyanBlue" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    className="relative p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-white/40 hover:bg-white/90 hover:border-custom-lintingGreenDark/30 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.01]"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow group-hover:scale-105 group-hover:shadow-md transition-all duration-300 mb-2`}>
                      <i className={`fas ${item.icon} text-white text-base`}></i>
                    </div>
                    <h5 className="font-bold text-gray-800 mb-1 group-hover:text-custom-lintingGreenDark transition-colors duration-300 text-sm">{item.title}</h5>
                    <p className="text-customCyanBlue group-hover:text-customCyanBlue font-semibold text-xs transition-colors duration-300">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
 
      


      
      {/* Robot-Shaped Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          {/* Robot Body */}
          <div className="relative">
            {/* Robot Head */}
            <div className="w-12 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-t-lg shadow-lg mb-1 relative">
              {/* Robot Eyes */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-500"></div>
              {/* Robot Antenna */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping"></div>
            </div>
            
            {/* Robot Body */}
            <div className="w-14 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg relative -ml-1">
              {/* Control Panel */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/30 rounded-sm"></div>
              <div className="absolute top-5 left-2 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute top-5 right-2 w-1.5 h-1.5 bg-white rounded-full"></div>
              
              {/* Up Arrow in chest */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                <i className="fas fa-arrow-up text-sm"></i>
              </div>
            </div>
            
            {/* Robot Arms */}
            <div className="absolute top-4 -left-2 w-3 h-6 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-md"></div>
            <div className="absolute top-4 -right-2 w-3 h-6 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-md"></div>
            
            {/* Robot Legs */}
            <div className="absolute -bottom-3 left-2 w-2.5 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-full shadow-md"></div>
            <div className="absolute -bottom-3 right-2 w-2.5 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-full shadow-md"></div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gray-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Floating Effect on Hover */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>
      )}


    </div>
  );
}
