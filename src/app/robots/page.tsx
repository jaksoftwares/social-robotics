// app/robots/page.tsx
import React from "react";
import { robots } from "@/constants/robots";
import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";
import { ReadMoreText } from "@/components/ReadMore";

interface Robot {
  title: string;
  description: string;
  cover_image: string;
  external_link: string;
  specialty: string;
}

const RobotsPage = () => {
  return (
    <div className="bg-gray-50">
      <Banner title="Robots" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {robots.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">
              No robots added yet
            </h3>
            <p className="mt-2 text-gray-400">
              Check back later for our latest robotic innovations
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {robots.map((robot: Robot, index: number) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Robot Image */}
                  <div className="lg:w-1/3 h-80 relative">
                    <Image
                      src={robot.cover_image || "/img/core/default-image.png"}
                      alt={robot.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>

                  {/* Robot Content */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-raleway font-bold text-gray-900 mb-2">
                        {robot.title}
                      </h2>
                      {robot.specialty && (
                        <span className="inline-block px-3 py-1 bg-custom-lintingGreenDark/10 text-custom-lintingGreenDark rounded-full text-sm font-medium">
                          {robot.specialty}
                        </span>
                      )}
                    </div>

                    <div className="mb-6">
                      <ReadMoreText 
                        text={robot.description} 
                        maxChars={200}
                        mobileBreakpoint={1024} // Adjust breakpoint to match your layout
                        className="text-gray-600 text-base leading-relaxed"
                      />
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={robot.external_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors"
                      >
                        Learn More
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RobotsPage;