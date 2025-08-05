"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { news, NewsItem } from "@/constants/news";
import { ExternalLink } from "lucide-react";

interface NewsSectionProps {
  limit?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ limit }) => {
  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <section className="pt-16 pb-8 md:pb-12 px-8 bg-custom-lightGray relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "50px 50px, 80px 80px, 30px 30px",
            backgroundPosition: "0 0, 25px 25px, 15px 15px",
          }}
        />
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-customLintingGreenDark/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-customLintingGreenDark/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-customLintingGreenDark/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-customLintingGreenDark/25 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-raleway text-gray-800 font-bold">
            LATEST NEWS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg text-justify leading-relaxed mb-6 mx-auto max-w-2xl">
            Stay updated with the latest developments and achievements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {displayedNews.length > 0 ? (
            displayedNews.map((item: NewsItem, index: number) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col group"
              >
                <h3 className="text-lg md:text-xl font-raleway font-bold text-gray-800 mb-3 group-hover:text-customLintingGreenDark transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-customCyanBlue font-medium mb-4">
                  <i className="fa fa-calendar text-sm"></i>
                  <span className="text-sm">
                    Published on {item.datePublished}
                  </span>
                </div>

                <div className="relative w-full mb-4 overflow-hidden rounded-xl aspect-[5/2] flex-shrink-0">
                  <Image
                    src={item.coverImage.replace("/static", "/img")}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                </div>

                <p className="text-gray-600 text-lg text-justify leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.externalLink?.trim() && (
                  <div className="mt-auto flex justify-center">
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden w-3/4 justify-center
                        bg-customLintingGreenDark text-white border-2 border-customLintingGreenDark 
                        hover:bg-white hover:text-customLintingGreenDark hover:border-customLintingGreenDark"
                    >
                      <span className="text-sm md:text-base relative z-10">
                        Read More
                      </span>
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customLintingGreenDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customLintingGreenDark rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                      <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce"></div>
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <i className="fa fa-newspaper text-3xl text-gray-400 mb-3"></i>
                <h3 className="text-lg font-raleway font-semibold text-gray-600 mb-2">
                  No News Available
                </h3>
                <p className="text-gray-500 font-inter text-sm">
                  Check back soon for the latest updates and announcements.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* View All News Button (if limited) */}
        {limit && news.length > limit && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/news"
              className="inline-block px-6 py-3 bg-customLintingGreenDark text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-customLintingGreenDark border-2 border-customLintingGreenDark transition"
            >
              View All News →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
