'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      className="bg-customCyanBlue w-full h-auto md:h-[75vh] flex items-center py-10 md:py-0"
      tabIndex={-1}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-10 md:gap-0">

        {/* Image Section - comes first on mobile */}
        <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft animate__delay-1s">
          <Image
            src="/img/image 19.png"
            alt="Robot"
            width={900}
            height={900}
            className="mx-auto w-full max-w-[500px] md:max-w-[700px] h-auto"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-4 md:pr-12">
          <h1 className="text-4xl md:text-6xl font-bold font-raleway typing-effect">
            Welcome to JKUAT
          </h1>
          <h2 className="text-2xl md:text-4xl font-raleway typing-effect">
            SOCIAL ROBOTICS LAB
          </h2>
          <div className="pt-6">
            <Link
              href="/about"
              className="inline-block px-6 py-2 text-xl rounded-lg bg-customLintingGreenDark text-white border-2 border-custom-lintingGreenDark hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300"
            >
              About us
              <i className="fa-solid fa-arrow-right-long ml-3"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
