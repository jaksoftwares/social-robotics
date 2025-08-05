'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="my-8 md:my-12 font-lato px-4 md:px-8 lg:px-16 xl:px-40">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section with animation */}
        <div className="w-full md:w-1/3 h-64 md:h-auto opacity-0 transform -translate-x-20 transition-all duration-[1500ms] delay-[2000ms] ease-out animate-fadeInLeft">
          <Image
            src="/img/about/about-1.jpeg"
            alt="About JKUAT Social Robotics"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section with animation */}
        <div className="w-full md:w-2/3 opacity-0 transform translate-x-20 transition-all duration-[1500ms] delay-[2000ms] ease-out animate-fadeInRight">
          <h2 className="text-2xl md:text-3xl font-raleway text-gray-800 mb-4 font-bold">
            ABOUT JKUAT SOCIAL ROBOTICS
          </h2>
          <p className="text-gray-600 text-lg text-justify leading-relaxed mb-6">
            At JKUAT Social Robotics Lab, we aim to design and develop robots that learn to interact socially in human environments.
            The research work at the lab focuses on the following areas: Education, Social Training, Assistive Robots, and Responsible Computing.
            We aim to embed human-centered and responsible computing principles — Inclusivity and Accessibility, Ethical Design — to build effective, intuitive and empathetic interactions between people and robotic technologies in human environments.
          </p>
          <Link
            href="/about"
            className="p-4 bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark rounded-lg hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center"
          >
            <span className="text-xl">Learn More</span>
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
