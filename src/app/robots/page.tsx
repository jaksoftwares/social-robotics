// app/robots/page.tsx
import React from "react";
import { robots } from "@/constants/robots";
import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

const RobotsPage = () => {
  return (
    <>
      <div className="w-full">
        <Banner title="Robots" />
      </div>

      <div className="relative bg-custom-lightGray py-12 px-4 md:px-8" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
        {/* ---- Background Layer (same as About intro) ---- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/5 to-custom-lintingGreenDark/5" />

          {/* Floating dots */}
          <div className="absolute top-10 left-1/4 w-3 h-3 bg-customCyanBlue/30 rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-custom-lintingGreenDark/30 rounded-full animate-ping animation-delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-customCyanBlue/20 rounded-full animate-pulse" />
          <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-custom-lintingGreenDark/20 rounded-full animate-pulse animation-delay-2000" />

          {/* Grid */}
          <div className="absolute inset-0 grid grid-cols-6 gap-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-customCyanBlue/5 to-transparent" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-full h-px bg-gradient-to-r from-transparent via-custom-lintingGreenDark/5 to-transparent" />
            ))}
          </div>
        </div>

        {/* ---- Page Header ---- */}
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">Meet Our Intelligent Team</p>
              <div className="w-[150px] h-[2px] bg-custom-lintingGreenDark" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              OUR <span className="text-custom-lintingGreenDark">ROBOTS</span>
            </h2>
          </div>

          {/* ---- Robot Cards ---- */}
          {robots.map((robot, index) => (
            <div key={index} className="my-8 md:my-10 mx-5">
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 hover:bg-white/70 transition-all duration-500">
                {/* Decorative in‑card accents */}
                <div className="pointer-events-none select-none">
                  {/* Glowing gradient rim */}
                  <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/15 to-custom-lintingGreenDark/15 rounded-3xl blur-md" />

                  {/* Corner lines */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 border-customCyanBlue/30 rounded-tl-xl" />
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 border-custom-lintingGreenDark/30 rounded-br-xl" />

                  {/* Bubbles */}
                  <div className="absolute top-3 left-6 w-3 h-3 bg-customCyanBlue/30 rounded-full animate-ping" />
                  <div className="absolute top-10 right-8 w-2.5 h-2.5 bg-custom-lintingGreenDark/40 rounded-full animate-bounce" />
                  <div className="absolute bottom-6 left-8 w-4 h-4 bg-customCyanBlue/20 rounded-full animate-pulse animation-delay-700" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-custom-lintingGreenDark/30 rounded-full animate-ping animation-delay-500" />
                </div>

                {/* Card main flex */}
                <div
                  className={`relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-80 h-80 md:w-96 md:h-96 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={robot.cover_image || "/img/core/default-image.png"}
                      alt={robot.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3 text-center md:text-left items-center md:items-start">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {robot.title}
                      </h3>
                      {robot.specialty && (
                        <h4 className="text-custom-lintingGreenDark text-lg md:text-xl font-semibold">
                          {robot.specialty}
                        </h4>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed md:pr-10">
                      {robot.description}
                    </p>
                    <Link
                      href={robot.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group overflow-hidden bg-customCyanBlue text-white border-2 border-customCyanBlue hover:bg-white hover:text-customCyanBlue"
                    >
                      <span className="relative z-10">Learn More</span>
                      <i className="fas fa-external-link ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                      {/* Sweep */}
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RobotsPage;
