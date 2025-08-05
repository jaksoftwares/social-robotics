'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '@/components/Banner';
import { news as newsData } from '@/constants/news';
import { NewsItem } from '@/constants/news';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Process news data
  const { categories, upcomingEvents, pastEvents } = useMemo(() => {
    const cats = Array.from(new Set(newsData.map((news) => news.category)));
    const now = new Date();

    const upcoming = newsData.filter(
      (item) => item.category === "Events" &&
        new Date(item.datePublished) > now
    );

    const past = newsData.filter(
      (item) => item.category === "Events" &&
        new Date(item.datePublished) <= now
    );

    return { categories: cats, upcomingEvents: upcoming, pastEvents: past };
  }, []);

  const filteredNews = newsData.filter((news) => {
  const matchesCategory = selectedCategory ? news.category === selectedCategory : true;
  const matchesSearch = searchTerm
    ? news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(searchTerm.toLowerCase())
    : true;

  const isEvent = news.category === "Events";
  const isPast = new Date(news.datePublished) <= new Date();
  const isUpcoming = new Date(news.datePublished) > new Date();

  // Events filtering when "Events" tab is selected
  if (selectedCategory === "Events") {
    return showPastEvents
      ? isEvent && isPast && matchesSearch
      : isEvent && isUpcoming && matchesSearch;
  }

  // For "All News", exclude events that are already shown elsewhere
  if (!selectedCategory && isEvent) return false;

  return matchesCategory && matchesSearch;
});


  return (
    <div className="bg-gray-50">
      <Banner
        title="Latest News & Updates"
        subtitle="Stay informed about our research, events, and breakthroughs in social robotics"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
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
                onClick={() => {
                  setSelectedCategory(null);
                  setShowPastEvents(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-custom-lintingGreenDark text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                All News
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category !== "Events") setShowPastEvents(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-custom-lintingGreenDark text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events Toggle (only when Events is selected) */}
          {selectedCategory === "Events" && (
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setShowPastEvents(false)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  !showPastEvents
                    ? "bg-custom-lintingGreenDark text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setShowPastEvents(true)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  showPastEvents
                    ? "bg-custom-lintingGreenDark text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Past Events
              </button>
            </div>
          )}

          {/* Featured Stories */}
          {filteredNews.some((news) => news.isFeatured) && (
            <div className="mb-12">
              <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">Featured Stories</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredNews
                  .filter((news) => news.isFeatured)
                  .map((news) => (
                    <NewsCard key={news.id} news={news} featured />
                  ))}
              </div>
            </div>
          )}

          {/* Upcoming Events Section */}
          {!selectedCategory && upcomingEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <NewsCard key={event.id} news={event} eventTag="Upcoming" />
                ))}
              </div>
            </div>
          )}

          {/* Past Events Section (when not filtered) */}
          {!selectedCategory && pastEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">Past Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <NewsCard key={event.id} news={event} eventTag="Past" />
                ))}
              </div>
            </div>
          )}


          {/* Main Section */}
          <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">
            {selectedCategory 
              ? `${selectedCategory} ${selectedCategory === "Events" ? (showPastEvents ? "Past" : "Upcoming") : ""}`
              : "All News"}
          </h3>

          {filteredNews.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {filteredNews
                  .filter((news) => !news.isFeatured)
                  .map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <EmptyState 
              onReset={() => {
                setSearchTerm('');
                setSelectedCategory(null);
                setShowPastEvents(false);
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
}

// Card component
const NewsCard = ({
  news,
  featured = false,
  eventTag = null,
}: {
  news: NewsItem;
  featured?: boolean;
  eventTag?: string | null;
}) => {
  const isEvent = news.category === "Events";
  const isPastEvent = isEvent && new Date(news.datePublished) < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link
        href={`/news/${news.slug}`}
        className={`group block h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
          featured ? "lg:min-h-[400px]" : ""
        }`}
      >
        <div className={`relative w-full ${featured ? "h-64" : "h-48"}`}>
          <Image
            src={news.coverImage}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-custom-lintingGreenDark/90 text-white">
                Featured
              </span>
            )}
            {isEvent && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                isPastEvent 
                  ? "bg-gray-500/90 text-white" 
                  : "bg-blue-500/90 text-white"
              }`}>
                {eventTag || (isPastEvent ? "Past Event" : "Upcoming")}
              </span>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{news.category}</span>
            <span className="mx-2">•</span>
            <span>{new Date(news.datePublished).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>
          <h3 className={`font-raleway font-bold text-gray-900 mb-3 group-hover:text-custom-lintingGreenDark transition-colors ${
            featured ? "text-xl" : "text-lg"
          }`}>
            {news.title}
          </h3>
          <p className={`text-gray-600 ${featured ? "" : "line-clamp-2"}`}>
            {news.description}
          </p>
          {isEvent && !isPastEvent && (
            <div className="mt-4 text-sm text-custom-lintingGreenDark font-medium">
              {calculateDaysUntil(news.datePublished)}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

// Empty state component
const EmptyState = ({ onReset }: { onReset: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="text-center py-16"
  >
    <h3 className="text-xl font-medium text-gray-500 mb-2">
      No news found
    </h3>
    <p className="text-gray-400">
      Try adjusting your search or filter criteria
    </p>
    <button
      onClick={onReset}
      className="mt-4 px-4 py-2 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium"
    >
      Reset filters
    </button>
  </motion.div>
);

// Countdown helper
function calculateDaysUntil(eventDate: string): string {
  const today = new Date();
  const event = new Date(eventDate);
  const diffTime = event.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Event passed";
  if (diffDays === 0) return "Today!";
  if (diffDays === 1) return "Tomorrow!";
  return `In ${diffDays} days`;
}
