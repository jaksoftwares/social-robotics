'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="my-8 md:my-12 font-lato px-8 relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #000 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #000 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, #000 0.5px, transparent 0.5px),
            radial-gradient(circle at 60% 60%, #000 0.8px, transparent 0.8px)
          `,
          backgroundSize: '40px 40px, 60px 60px, 30px 30px, 50px 50px',
          backgroundPosition: '0 0, 20px 20px, 10px 10px, 30px 30px'
        }}></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-black/30 animate-pulse">✦</div>
        <div className="absolute top-20 right-20 text-black/20 animate-ping">✧</div>
        <div className="absolute bottom-20 left-20 text-black/25 animate-bounce">✦</div>
        <div className="absolute bottom-10 right-10 text-black/30 animate-pulse">✧</div>
        <div className="absolute top-1/2 left-1/4 text-black/15 animate-ping">✦</div>
        <div className="absolute top-1/3 right-1/3 text-black/20 animate-pulse">✧</div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section with enhanced styling */}
          <div className="w-full md:w-1/3 opacity-0 transform -translate-x-20 transition-all duration-[1500ms] delay-[2000ms] ease-out animate-fadeInLeft">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Image
                src="/img/about/about-1.jpeg"
                alt="About JKUAT Social Robotics"
                width={600}
                height={400}
                className="relative w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Text Section with centered styling */}
          <div className="w-full md:w-2/3 text-center opacity-0 transform translate-x-20 transition-all duration-[1500ms] delay-[2000ms] ease-out animate-fadeInRight">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway text-gray-900 font-bold tracking-wide mx-auto">
                  ABOUT <span className="text-customLintingGreenDark">JKUAT</span>
                  <br />
                  <span className="text-customLintingGreenDark">SOCIAL ROBOTICS</span>
                </h2>
              </div>
              
              <div className="w-24 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <p className="text-gray-700 text-base md:text-lg font-inter leading-relaxed max-w-4xl mx-auto mb-6">
                  At <span className="font-semibold text-customCyanBlue">JKUAT Social Robotics Lab</span>, we aim to design and develop robots that learn to interact socially in human environments.
                  The research work at the lab focuses on the following areas: <span className="font-medium text-gray-800">Education, Social Training, Assistive Robots, and Responsible Computing</span>.
                </p>
                
                <div className="mt-6 p-4 bg-gray-50/80 rounded-xl">
                  <p className="text-gray-600 text-sm md:text-base font-inter leading-relaxed">
                    We aim to embed <span className="font-semibold text-customCyanBlue">human-centered and responsible computing principles</span> — 
                    Inclusivity and Accessibility, Ethical Design — to build effective, intuitive and empathetic interactions between people and robotic technologies in human environments.
                  </p>
                </div>
              </div>

              <div className="pt-4">
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
      </div>
    </section>
  );
};

export default AboutSection;
