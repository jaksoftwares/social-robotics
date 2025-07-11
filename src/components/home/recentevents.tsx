'use client';

import React from 'react';
import Image from 'next/image';
import { recentEvents, latestEvents } from '@/constants/events';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Event = {
  title: string;
  description: string;
  coverImage?: string;
  location: string;
  externalLink: string;
  dateStarting: string;
  dateEnding?: string;
};

const EventCarousel: React.FC<{ title: string; events: Event[]; navId: string }> = ({
  title,
  events,
  navId,
}) => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold tracking-wide" style={{ color: '#1f2937' }}>
          {title.split(' ').map((word, index) => (
            <span key={index} style={{ color: index === 1 ? undefined : '#1f2937' }}>
              {index === 1 ? <span className="text-customLintingGreenDark">{word}</span> : word}
              {index < title.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="relative mb-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `#nextBtn-${navId}`,
            prevEl: `#prevBtn-${navId}`,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col group">
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-raleway font-bold text-gray-800 mb-4 group-hover:text-customLintingGreenDark transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  {event.coverImage && (
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl flex-shrink-0">
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        fill
                        className="object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-4 flex-shrink-0">
                    <div className="flex items-center gap-2 text-customCyanBlue font-medium">
                      <i className="fa fa-calendar text-sm flex-shrink-0"></i>
                      <span className="text-sm md:text-base">
                        {event.dateStarting}
                        {event.dateEnding && ` - ${event.dateEnding}`}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="fa fa-map-marker-alt text-sm flex-shrink-0"></i>
                      <span className="text-sm md:text-base line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm md:text-base font-inter leading-relaxed mb-6 flex-1 line-clamp-4">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a
                      href={event.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden w-full justify-center
                               bg-customLintingGreenDark text-white border-2 border-customLintingGreenDark 
                               hover:bg-white hover:text-customLintingGreenDark hover:border-customLintingGreenDark group-hover:bg-white group-hover:text-customLintingGreenDark"
                    >
                      <span className="text-sm md:text-base relative z-10">Learn More</span>
                      <i className="fa fa-external-link ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                      
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Navigation Buttons - Free floating */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-between px-0 z-20 pointer-events-none">
          <button
            id={`prevBtn-${navId}`}
            className="bg-customLintingGreenDark text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-gray-600 hover:scale-110 transition-all duration-300 pointer-events-auto -translate-x-16"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            id={`nextBtn-${navId}`}
            className="bg-customLintingGreenDark text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-xl hover:bg-gray-600 hover:scale-110 transition-all duration-300 pointer-events-auto translate-x-16"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

const RecentEvents: React.FC = () => {
  const events: Event[] = [...recentEvents, ...latestEvents];
  const today = new Date();

  const upcomingEvents = events.filter((e) => new Date(e.dateStarting) >= today);
  const pastEvents = events.filter((e) => new Date(e.dateStarting) < today);

  return (
    <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Subtle Hexagonal Hive Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          background: `
            radial-gradient(circle at 25% 25%, transparent 15%, rgba(34, 197, 94, 0.1) 21%, rgba(34, 197, 94, 0.1) 25%, transparent 26%),
            radial-gradient(circle at 75% 25%, transparent 15%, rgba(34, 197, 94, 0.1) 21%, rgba(34, 197, 94, 0.1) 25%, transparent 26%),
            radial-gradient(circle at 25% 75%, transparent 15%, rgba(34, 197, 94, 0.1) 21%, rgba(34, 197, 94, 0.1) 25%, transparent 26%),
            radial-gradient(circle at 75% 75%, transparent 15%, rgba(34, 197, 94, 0.1) 21%, rgba(34, 197, 94, 0.1) 25%, transparent 26%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 0, 0 40px, 40px 40px'
        }}></div>
        
        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0" style={{
          background: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              transparent 60deg,
              rgba(34, 197, 94, 0.08) 60deg,
              rgba(34, 197, 94, 0.08) 61deg,
              transparent 61deg,
              transparent 120deg
            )
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Enhanced Animated Robotics Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 800" className="w-full h-full text-customLintingGreenDark/60">
          {/* Advanced hexagon pattern for robotics */}
          <defs>
            <pattern id="robotics-hexagon-animated" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon 
                points="40,8 65,25 65,50 40,67 15,50 15,25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.8"
                className="animate-pulse"
                style={{animationDuration: '3s'}}
              />
              <polygon 
                points="40,15 58,27 58,45 40,57 22,45 22,27" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.4"
                opacity="0.6"
                className="animate-pulse"
                style={{animationDuration: '4s', animationDelay: '1s'}}
              />
              <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.3">
                <animate attributeName="r" values="2;4;2" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite" />
              </circle>
            </pattern>
            
            {/* Animated gradient for robotics neural network paths */}
            <linearGradient id="roboticsNeuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="currentColor" stopOpacity="1">
                <animate attributeName="stop-opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            {/* Radial gradient for AI processing nodes */}
            <radialGradient id="aiNodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1">
                <animate attributeName="stop-opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
              </stop>
            </radialGradient>
            
            {/* Circuit board pattern */}
            <pattern id="circuit-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="15" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2">
                <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="30" y1="15" x2="30" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2">
                <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="6s" repeatCount="indefinite" begin="1s" />
              </line>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#robotics-hexagon-animated)" />
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" opacity="0.3" />
          
          {/* Neural network connection paths */}
          <path 
            d="M 50 400 Q 200 200, 400 350 Q 600 500, 800 300 Q 1000 100, 1150 250"
            stroke="url(#roboticsNeuralGradient)"
            strokeWidth="2"
            strokeDasharray="8,4"
            fill="none"
            opacity="0.8"
          >
            <animate attributeName="stroke-dashoffset" values="0;-50;0" dur="8s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M 100 600 Q 300 400, 500 550 Q 700 700, 900 500 Q 1100 300, 1200 450"
            stroke="url(#roboticsNeuralGradient)"
            strokeWidth="1.5"
            strokeDasharray="6,6"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="0;-40;0" dur="10s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M 0 150 Q 200 50, 400 150 Q 600 250, 800 150 Q 1000 50, 1200 150"
            stroke="url(#roboticsNeuralGradient)"
            strokeWidth="1.2"
            strokeDasharray="4,8"
            fill="none"
            opacity="0.7"
          >
            <animate attributeName="stroke-dashoffset" values="0;-36;0" dur="12s" repeatCount="indefinite" />
          </path>
          
          {/* AI Processing nodes with complex animations */}
          <circle cx="300" cy="200" r="8" fill="url(#aiNodeGradient)" opacity="0.8">
            <animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" values="0 300 200;360 300 200" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="400" r="10" fill="url(#aiNodeGradient)" opacity="0.9">
            <animate attributeName="r" values="10;20;10" dur="3s" repeatCount="indefinite" begin="1s" />
            <animateTransform attributeName="transform" type="rotate" values="0 600 400;-360 600 400" dur="25s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="200" r="8" fill="url(#aiNodeGradient)" opacity="0.8">
            <animate attributeName="r" values="8;16;8" dur="4s" repeatCount="indefinite" begin="2s" />
            <animateTransform attributeName="transform" type="rotate" values="0 900 200;360 900 200" dur="18s" repeatCount="indefinite" />
          </circle>
          
          {/* Robotic sensor network connections */}
          <line x1="300" y1="200" x2="600" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;-16;0" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="600" y1="400" x2="900" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;-16;0" dur="6s" repeatCount="indefinite" begin="1s" />
          </line>
          <line x1="300" y1="200" x2="900" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6,3" opacity="0.4">
            <animate attributeName="stroke-dashoffset" values="0;-18;0" dur="8s" repeatCount="indefinite" begin="2s" />
          </line>
          
          {/* Orbital sensor satellites */}
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 600 400;360 600 400" dur="15s" repeatCount="indefinite" />
            <circle cx="650" cy="350" r="3" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="550" cy="450" r="3" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="650" cy="450" r="2" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="1s" />
            </circle>
          </g>
          
          <g>
            <animateTransform attributeName="transform" type="rotate" values="0 300 200;-360 300 200" dur="18s" repeatCount="indefinite" />
            <circle cx="330" cy="170" r="2" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="230" r="2" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
            </circle>
          </g>
          
          {/* Data flow particles simulating robot communication */}
          <circle r="2" fill="currentColor" opacity="0.8">
            <animateMotion dur="12s" repeatCount="indefinite">
              <path d="M 50 400 Q 200 200, 400 350 Q 600 500, 800 300 Q 1000 100, 1150 250" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="12s" repeatCount="indefinite" />
          </circle>
          
          <circle r="1.5" fill="currentColor" opacity="0.6">
            <animateMotion dur="15s" repeatCount="indefinite" begin="3s">
              <path d="M 100 600 Q 300 400, 500 550 Q 700 700, 900 500 Q 1100 300, 1200 450" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="15s" repeatCount="indefinite" begin="3s" />
          </circle>
          
          <circle r="1.5" fill="currentColor" opacity="0.6">
            <animateMotion dur="18s" repeatCount="indefinite" begin="6s">
              <path d="M 0 150 Q 200 50, 400 150 Q 600 250, 800 150 Q 1000 50, 1200 150" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0.8;0" dur="18s" repeatCount="indefinite" begin="6s" />
          </circle>
          
          {/* Robotic grid scanning effect */}
          <g opacity="0.3">
            <rect x="0" y="0" width="1200" height="2" fill="currentColor">
              <animate attributeName="y" values="0;798;0" dur="20s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0" dur="20s" repeatCount="indefinite" />
            </rect>
            <rect x="0" y="0" width="2" height="800" fill="currentColor">
              <animate attributeName="x" values="0;1198;0" dur="25s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0" dur="25s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Pulsing AI clusters */}
          <g opacity="0.7">
            <circle cx="150" cy="150" r="4" fill="currentColor">
              <animate attributeName="r" values="4;8;4" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="1050" cy="650" r="3" fill="currentColor">
              <animate attributeName="r" values="3;7;3" dur="7s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="7s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="200" cy="600" r="5" fill="currentColor">
              <animate attributeName="r" values="5;10;5" dur="8s" repeatCount="indefinite" begin="4s" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="8s" repeatCount="indefinite" begin="4s" />
            </circle>
          </g>
          
          {/* Enhanced connecting lines with animation */}
          <line x1="600" y1="150" x2="400" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="600" y1="150" x2="800" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </line>
          <line x1="300" y1="500" x2="500" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1s" />
          </line>
          <line x1="700" y1="350" x2="900" y2="500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
            <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </line>
          
          {/* Enhanced pulsing nodes with scaling animation */}
          <circle cx="600" cy="150" r="5" fill="currentColor" opacity="0.8">
            <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="350" r="4" fill="currentColor" opacity="0.7">
            <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="800" cy="350" r="4" fill="currentColor" opacity="0.7">
            <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="1s" />
          </circle>
          
          {/* Floating orbiting elements */}
          <circle cx="500" cy="250" r="3" fill="currentColor" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" values="0 500 250;360 500 250" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="250" r="3" fill="currentColor" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" values="0 700 250;-360 700 250" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Additional snake-like animated paths */}
          <path 
            d="M 50 100 Q 300 50, 600 100 Q 900 150, 1150 100"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,4"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="0;-50;0" dur="6s" repeatCount="indefinite" />
          </path>
          
          <path 
            d="M 100 700 Q 400 650, 700 700 Q 1000 750, 1200 700"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6,6"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="stroke-dashoffset" values="0;-40;0" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        /* Only keep basic CSS for any remaining elements */
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {upcomingEvents.length > 0 && (
          <EventCarousel title="UPCOMING EVENTS" events={upcomingEvents} navId="upcoming" />
        )}
        {pastEvents.length > 0 && (
          <EventCarousel title="RECENT EVENTS" events={pastEvents} navId="recent" />
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
