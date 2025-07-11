"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/constants/partners";

const PartnersSection: React.FC = () => {
  return (
    <section className="py-0 pt-16 pb-0 px-8 bg-custom-lightGray relative overflow-visible" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
      {/* Background extension to cover footer margin */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-custom-lightGray"></div>
      {/* Enhanced Futuristic Background with Animated Lines and Effects */}
      <div className="absolute inset-0 opacity-30">
        {/* Circuit board grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
            linear-gradient(180deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.6) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.5) 1.5px, transparent 1.5px),
            radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 120px 120px, 160px 160px, 100px 100px',
          backgroundPosition: '0 0, 0 0, 0 0, 40px 40px, 60px 30px'
        }}></div>
        
        {/* Hexagonal tech pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              transparent 60deg,
              rgba(34, 197, 94, 0.25) 60deg,
              rgba(34, 197, 94, 0.25) 61deg,
              transparent 61deg,
              transparent 120deg
            )
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Advanced Animated Partnership Network Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1400 900" className="w-full h-full text-customLintingGreenDark/70">
          <defs>
            {/* Advanced gradient definitions */}
            <linearGradient id="partnershipFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="currentColor" stopOpacity="1">
                <animate attributeName="stop-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            {/* Data flow gradient */}
            <linearGradient id="dataStream" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2">
                <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            {/* Partnership node gradient */}
            <radialGradient id="partnerNode" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1">
                <animate attributeName="stop-opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" />
              </stop>
            </radialGradient>
          </defs>
          {/* Background circuit pattern */}
          <rect width="100%" height="100%" fill="url(#partnershipCircuit)" opacity="0.4" />
          
          {/* Main partnership connection lines - like train tracks */}
          <path 
            d="M 100 450 Q 300 200, 500 400 Q 700 600, 900 350 Q 1100 100, 1300 300"
            stroke="url(#partnershipFlow)"
            strokeWidth="3"
            strokeDasharray="12,8"
            fill="none"
            opacity="0.9"
          >
            <animate attributeName="stroke-dashoffset" values="0;-80;0" dur="6s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M 100 500 Q 300 250, 500 450 Q 700 650, 900 400 Q 1100 150, 1300 350"
            stroke="url(#partnershipFlow)"
            strokeWidth="2"
            strokeDasharray="8,12"
            fill="none"
            opacity="0.7"
          >
            <animate attributeName="stroke-dashoffset" values="0;-60;0" dur="8s" repeatCount="indefinite" />
          </path>
          
          {/* Secondary connection networks */}
          <path 
            d="M 200 700 Q 400 500, 600 650 Q 800 800, 1000 600 Q 1200 400, 1400 550"
            stroke="url(#dataStream)"
            strokeWidth="1.5"
            strokeDasharray="6,10"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="0;-48;0" dur="10s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M 0 200 Q 200 100, 400 200 Q 600 300, 800 200 Q 1000 100, 1200 200 Q 1400 300, 1400 250"
            stroke="url(#dataStream)"
            strokeWidth="1.2"
            strokeDasharray="4,12"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="stroke-dashoffset" values="0;-40;0" dur="12s" repeatCount="indefinite" />
          </path>
          
          {/* Partnership hub nodes */}
          <circle cx="500" cy="400" r="12" fill="url(#partnerNode)" opacity="0.8">
            <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" values="0 500 400;360 500 400" dur="15s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="350" r="10" fill="url(#partnerNode)" opacity="0.9">
            <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" begin="1s" />
            <animateTransform attributeName="transform" type="rotate" values="0 900 350;-360 900 350" dur="18s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="250" r="8" fill="url(#partnerNode)" opacity="0.7">
            <animate attributeName="r" values="8;15;8" dur="3.5s" repeatCount="indefinite" begin="2s" />
            <animateTransform attributeName="transform" type="rotate" values="0 300 250;360 300 250" dur="12s" repeatCount="indefinite" />
          </circle>
          
          {/* Inter-node connections */}
          <line x1="500" y1="400" x2="900" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="900" y1="350" x2="300" y2="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,6" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="4s" repeatCount="indefinite" begin="1s" />
          </line>
          <line x1="300" y1="250" x2="500" y2="400" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8,4" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;-30;0" dur="5s" repeatCount="indefinite" begin="2s" />
          </line>
          
          {/* Orbiting partnership satellites */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 500 400;360 500 400" dur="12s" repeatCount="indefinite" />
            <circle cx="530" cy="370" r="4" fill="currentColor" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="470" cy="430" r="3" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <circle cx="520" cy="420" r="2" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.6s" />
            </circle>
          </g>
          
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 900 350;-360 900 350" dur="16s" repeatCount="indefinite" />
            <circle cx="920" cy="330" r="3" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="880" cy="370" r="2.5" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" begin="0.4s" />
            </circle>
          </g>
          
          {/* Data packet trains moving along paths */}
          <circle r="3" fill="currentColor" opacity="0.9">
            <animateMotion dur="8s" repeatCount="indefinite">
              <path d="M 100 450 Q 300 200, 500 400 Q 700 600, 900 350 Q 1100 100, 1300 300" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="2.5" fill="currentColor" opacity="0.8">
            <animateMotion dur="10s" repeatCount="indefinite" begin="2s">
              <path d="M 100 500 Q 300 250, 500 450 Q 700 650, 900 400 Q 1100 150, 1300 350" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="10s" repeatCount="indefinite" begin="2s" />
          </circle>
          
          <circle r="2" fill="currentColor" opacity="0.7">
            <animateMotion dur="12s" repeatCount="indefinite" begin="4s">
              <path d="M 200 700 Q 400 500, 600 650 Q 800 800, 1000 600 Q 1200 400, 1400 550" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.7;0.7;0" dur="12s" repeatCount="indefinite" begin="4s" />
          </circle>
          

          
          {/* Partnership constellation clusters */}
          <g opacity="0.5">
            <circle cx="200" cy="150" r="5" fill="currentColor">
              <animate attributeName="r" values="5;10;5" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1200" cy="750" r="4" fill="currentColor">
              <animate attributeName="r" values="4;9;4" dur="5s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle cx="700" cy="150" r="6" fill="currentColor">
              <animate attributeName="r" values="6;12;6" dur="6s" repeatCount="indefinite" begin="3s" />
              <animate attributeName="opacity" values="0.5;1;0.5" dur="6s" repeatCount="indefinite" begin="3s" />
            </circle>
          </g>
          
          {/* Future-tech connecting web */}
          <line x1="200" y1="150" x2="700" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="3,7" opacity="0.4">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="150" x2="1200" y2="750" stroke="currentColor" strokeWidth="1" strokeDasharray="3,7" opacity="0.4">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </line>
          <line x1="1200" y1="750" x2="200" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.3">
            <animate attributeName="stroke-dashoffset" values="0;-25;0" dur="4s" repeatCount="indefinite" begin="1s" />
          </line>
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-customLintingGreenDark/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-customLintingGreenDark/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-customLintingGreenDark/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-customLintingGreenDark/25 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-gray-900 tracking-wide mt-4 mb-3">
            OUR <span className="text-customLintingGreenDark">PARTNERS</span> / <span className="text-customLintingGreenDark">FUNDERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base font-inter max-w-2xl mx-auto">
            Collaborating with leading organizations to advance social robotics research and education
          </p>
        </div>

        {/* Partners grid with enhanced styling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group min-h-[160px]"
            >
              {partner.website ? (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center h-full w-full group"
                >
                  <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-raleway font-semibold text-gray-700 text-center group-hover:text-customLintingGreenDark transition-colors duration-300">
                    {partner.name}
                  </h3>
                  {/* Link indicator */}
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fa fa-external-link text-customLintingGreenDark text-xs"></i>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-raleway font-semibold text-gray-700 text-center group-hover:text-customLintingGreenDark transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partnership statement */}
        <div className="mt-16 pb-16 text-center relative z-10">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-customCyanBlue to-transparent"></div>
          
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-raleway font-bold text-gray-800 mb-6">
              Building the <span className="text-customLintingGreenDark">Future Together</span>
            </h3>
            
            <p className="text-gray-700 text-base md:text-lg font-inter leading-relaxed max-w-4xl mx-auto px-4">
              <span className="font-semibold text-customCyanBlue">Partnerships</span> are at the heart of our mission. 
              We collaborate with global organizations, educational institutions, and funding bodies to drive innovation in 
              <span className="font-medium text-gray-800"> social robotics</span> and create meaningful impact in communities worldwide.
            </p>
            
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="w-8 h-px bg-customCyanBlue"></div>
              <div className="w-2 h-2 bg-customCyanBlue rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-customCyanBlue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
