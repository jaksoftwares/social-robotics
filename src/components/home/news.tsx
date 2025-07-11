"use client";

import React from "react";
import Image from "next/image";
import { news, NewsItem } from "@/constants/news"; // Adjust the path as needed
import { ExternalLink } from "lucide-react";

const NewsSection: React.FC = () => {
  return (
    <section className="pt-16 pb-8 md:pb-12 px-8 bg-custom-lightGray relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '50px 50px, 80px 80px, 30px 30px',
          backgroundPosition: '0 0, 25px 25px, 15px 15px'
        }}></div>
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
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-gray-900 tracking-wide mb-3">
            LATEST <span className="text-customLintingGreenDark">NEWS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-base font-inter max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and breakthroughs from our Social Robotics Lab
          </p>
        </div>

        {/* News grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {news.length > 0 ? (
            news.map((item: NewsItem, index: number) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col group"
                style={{ minHeight: 'calc(100% + 20px)' }}
              >
                {/* Enhanced title with better typography */}
                <h3 className="text-lg md:text-xl font-raleway font-bold text-gray-800 mb-3 group-hover:text-customLintingGreenDark transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>
                
                {/* Styled date with icon */}
                <div className="flex items-center gap-2 text-customCyanBlue font-medium mb-4">
                  <i className="fa fa-calendar text-sm"></i>
                  <span className="text-sm">
                    Published on {item.datePublished}
                  </span>
                </div>
                
                {/* Enhanced image container */}
                <div className="relative w-full mb-4 overflow-hidden rounded-xl aspect-[5/2] flex-shrink-0">
                  <Image
                    src={item.coverImage.replace("/static", "/img")}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                </div>
                
                {/* Enhanced description */}
                <p className="text-gray-700 text-sm font-inter leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Consistent button styling */}
                {item.externalLink && item.externalLink.trim() !== "" && (
                  <div className="mt-auto flex justify-center">
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden w-3/4 justify-center
                                 bg-customLintingGreenDark text-white border-2 border-customLintingGreenDark 
                                 hover:bg-white hover:text-customLintingGreenDark hover:border-customLintingGreenDark group-hover:bg-white group-hover:text-customLintingGreenDark"
                    >
                      <span className="text-sm md:text-base relative z-10">Read More</span>
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                      
                      {/* Animated background sweep */}
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customLintingGreenDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      
                      {/* Sparkle effects */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customLintingGreenDark rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <i className="fa fa-newspaper text-3xl text-gray-400 mb-3"></i>
                <h3 className="text-lg font-raleway font-semibold text-gray-600 mb-2">No News Available</h3>
                <p className="text-gray-500 font-inter text-sm">Check back soon for the latest updates and announcements.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
