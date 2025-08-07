'use client';

import { useState } from 'react';
import { projects } from '@/constants/projects';
import Banner from '@/components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// import { NextSeo } from 'next-seo';

// Extract unique categories from the project list
const categories = Array.from(
  new Map(
    projects.map((p) => [
      p.categorySlug,
      {
        name: p.category,
        slug: p.categorySlug,
        coverImage: p.coverImage,
        description: p.categoryDescription || '',
        projectCount: projects.filter(proj => proj.categorySlug === p.categorySlug).length,
      },
    ])
  ).values()
);

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = categories.filter((cat) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      cat.name.toLowerCase().includes(search) ||
      cat.description.toLowerCase().includes(search);
    const matchesCategory = selectedCategory ? cat.slug === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
       <>
     {/* <NextSeo
        title="Projects – JKUAT Social Robotics Lab"
        description="Browse innovative student and faculty-led social robotics research projects at JKUAT, focused on AI, responsible computing, and human-centered design."
        canonical="https://www.jkuatsocialroboticslab.com/projects"
        openGraph={{
          url: 'https://www.jkuatsocialroboticslab.com/projects',
          title: 'Projects – JKUAT Social Robotics Lab',
          description:
            'Browse innovative student and faculty-led social robotics research projects at JKUAT, focused on AI, responsible computing, and human-centered design.',
          siteName: 'JKUAT Social Robotics Lab',
          images: [
            {
              url: 'https://www.jkuatsocialroboticslab.com/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Social Robotics Projects',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@JKUATRobotics',
        }}
      /> */}

     
    <div className="bg-gray-50">
      <Banner 
        title="Our Projects" 
        subtitle="Explore our innovative research and development initiatives"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search project categories..."
                  className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-custom-lintingGreenDark text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-custom-lintingGreenDark text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          {filtered.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {filtered.map((cat) => (
                  <motion.div
                    key={cat.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      href={`/projects/${cat.slug}`}
                      className="group block h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                      <div className="relative h-60 w-full">
                        <Image
                          src={cat.coverImage || '/placeholder.jpg'}
                          alt={cat.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-custom-lintingGreenDark/90 text-white">
                            {cat.projectCount} {cat.projectCount === 1 ? 'Project' : 'Projects'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h2 className="text-xl font-raleway font-bold text-gray-900 mb-3 group-hover:text-custom-lintingGreenDark transition-colors">
                          {cat.name}
                        </h2>
                        {cat.description && (
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {cat.description}
                          </p>
                        )}
                        <div className="mt-auto">
                          <div className="inline-flex items-center justify-center w-full px-4 py-3 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium">
                            View Projects
                            <svg
                              className="w-4 h-4 ml-2"
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
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                No categories found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                className="mt-4 px-4 py-2 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>

  </>

  );
}