// app/publications/page.tsx
import React from "react";
import Banner from "@/components/Banner";
import { publications } from "@/constants/publications";
import Image from "next/image";
import Link from "next/link";

interface Publication {
  title: string;
  cover_image: string;
  external_link: string;
  description: string;
  type?: string;
  year?: number;
  tags?: string[];
}

const PublicationsPage = () => {
  return (
    <div className="bg-gray-50">
      <Banner title="Publications" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {publications.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">
              No publications added yet
            </h3>
            <p className="mt-2 text-gray-400">
              Check back later for our latest research
            </p>
          </div>
        ) : (
          <>
            {/* Publications Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((publication: Publication, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Publication Cover Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={
                        publication.cover_image.startsWith("http")
                          ? publication.cover_image
                          : publication.cover_image.replace("./../static", "/img")
                      }
                      alt={publication.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Publication Content */}
                  <div className="p-6">
                    {(publication.type || publication.year) && (
                      <div className="flex items-center mb-3">
                        {publication.type && (
                          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {publication.type}
                          </span>
                        )}
                        {publication.year && (
                          <span className="text-xs text-gray-500 ml-2">
                            {publication.year}
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="text-xl font-raleway font-bold text-gray-900 mb-2 group-hover:text-custom-lintingGreenDark transition-colors">
                      {publication.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {publication.description}
                    </p>

                    {publication.tags && publication.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {publication.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6">
                      <Link
                        href={publication.external_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-custom-lintingGreenDark hover:text-custom-lintingGreenDark/80 transition-colors"
                      >
                        Read Publication
                        <svg
                          className="w-4 h-4 ml-1"
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
              ))}
            </div>

            {/* Pagination (optional) */}
            {publications.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded-md bg-custom-lintingGreenDark text-white">
                    1
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;