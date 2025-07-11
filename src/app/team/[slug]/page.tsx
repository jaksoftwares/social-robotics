"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { people } from "@/constants/people";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function PersonDetailPage() {
  const params = useParams();

  //  Ensure `slug` is always a string
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const cleanSlug = slug ? decodeURIComponent(slug).toLowerCase().trim() : null;

  if (!cleanSlug) return notFound();

  const person = people.find((p) => p.slug === cleanSlug);

  if (!person) return notFound();

  const {
    first_name,
    last_name,
    title,
    profile_picture,
    specialty,
    focus_long,
    focus_short,
    focus_title,
    quote,
    bio,
    degree,
    pursuing,
    linked_in_link,
  } = person;

  const fullName = `${title ?? ""} ${first_name} ${last_name ?? ""}`.trim();

  return (
    <main className="relative min-h-screen overflow-x-hidden"style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
      {/* Background Effects (match About/Home/Team) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/10 via-white to-custom-lintingGreenDark/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-customCyanBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-custom-lintingGreenDark/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-customCyanBlue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
      </div>


      <div className="container mx-auto px-4 py-10 font-lato text-gray-800 relative z-10" >



        



        
        <div className="w-full max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-customCyanBlue/20 p-8 fade-in-card relative">
          {/* Enhanced Decorative corner elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-customCyanBlue/40 rounded-tl-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-custom-lintingGreenDark/40 rounded-br-3xl pointer-events-none"></div>
          {/* Additional decorative circles */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-customCyanBlue/60 rounded-full animate-pulse pointer-events-none"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000 pointer-events-none"></div>
          {/* Decorative dots pattern */}
          <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 pointer-events-none">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/80 rounded-full"></div>
            ))}
          </div>
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm pointer-events-none"></div>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
            <div className="flex items-center mb-4">
              <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
                {title && <span className="mr-2">{title}</span>}
                {first_name} {last_name && <span>{last_name}</span>}
              </h1>
              <div className="w-[120px] h-[2px] bg-custom-lintingGreenDark ml-4"></div>
            </div>
          </div>
          {/* Inserted: Image and Text Content Container */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/50">
            {/* Image Container with decorative effects */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl border-4 border-white group md:order-1">
              {/* Background gradient swirl */}
              <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/30 via-white/10 to-custom-lintingGreenDark/30 opacity-70 blur-md z-0 animate-pulse-slow"></div>
              {/* Animated floating sparkles */}
              <div className="absolute left-2 top-2 w-3 h-3 bg-white/70 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute right-4 bottom-4 w-2 h-2 bg-customCyanBlue/60 rounded-full blur-[2px] animate-bounce"></div>
              <div className="absolute left-8 bottom-6 w-1.5 h-1.5 bg-custom-lintingGreenDark/60 rounded-full blur-[1px] animate-ping"></div>
              {/* The Image component */}
              <Image
                src={profile_picture || "/img/core/default-image.png"}
                alt={fullName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
              />
              {/* Decorative corner elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-customCyanBlue/40 rounded-tl-2xl z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-custom-lintingGreenDark/40 rounded-br-2xl z-10"></div>
              {/* Decorative circles */}
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-customCyanBlue/60 rounded-full animate-pulse z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-7 h-7 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000 z-10"></div>
              {/* Decorative dots pattern */}
              <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 z-10">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white/80 rounded-full"></div>
                ))}
              </div>
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm z-10"></div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-2 flex-1">
              {specialty && (
                <h3 className="text-xl md:text-2xl text-custom-red font-semibold">
                  {specialty}
                </h3>
              )}
              {degree && <p className="text-gray-600">Degree: {degree}</p>}
              {pursuing && <p className="text-gray-600">Pursuing: {pursuing}</p>}
              {linked_in_link && (
                <p className="text-gray-600">
                  🔗{" "}
                  <a
                    href={linked_in_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-10"></div>
          {/* Bio */}
          {bio && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="block w-2 h-8 bg-custom-lintingGreenDark rounded-full mr-2"></span>
                <span>About</span>
                <span className="w-16 h-[2px] bg-customCyanBlue inline-block"></span>
              </h2>
              <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                {bio}
              </p>
            </section>
          )}
          {/* Focus */}
          {(focus_title || focus_short || focus_long) && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="block w-2 h-8 bg-custom-lintingGreenDark rounded-full mr-2"></span>
                <span>Research & Focus</span>
                <span className="w-16 h-[2px] bg-customCyanBlue inline-block"></span>
              </h2>
              {focus_title && (
                <h3 className="text-base md:text-lg font-semibold text-custom-red mb-2 italic">
                  {focus_title}
                </h3>
              )}
              {focus_short && (
                <p className="text-gray-700 font-medium mb-2">{focus_short}</p>
              )}
              {focus_long && (
                <p
                  className="text-gray-700 text-justify leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: focus_long }}
                />
              )}
            </section>
          )}
          {/* Quote */}
          {quote && (
            <section className="my-12 p-6 rounded-lg bg-gray-100 border-l-4 border-custom-lintingGreenDark">
              <blockquote className="text-base md:text-lg italic text-gray-800 text-center">
                “{quote}”
              </blockquote>
            </section>
          )}

                    {/* Back to teams Button */}
          <div className="mt-10 text-left">
            <Link href="/team">
              <button className="inline-flex items-center gap-2 px-6 py-2 bg-customCyanBlue text-white rounded-full shadow-md hover:bg-customCyanBlue/80 hover:scale-105 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
                Back to Team
              </button>
            </Link>
          </div>
        </div>
      </div>




      <style jsx global>{`
        .fade-in-card {
          animation: fadeInCard 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}

