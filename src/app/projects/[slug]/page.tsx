"use client";

import { useParams } from "next/navigation";
import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();

  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const cleanSlug = slug ? decodeURIComponent(slug).toLowerCase().trim() : null;

  if (!cleanSlug) return notFound();

  const project = projects.find((p) => p.slug.toLowerCase().trim() === cleanSlug);

  if (!project) return notFound();

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/10 via-white to-custom-lintingGreenDark/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-customCyanBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-custom-lintingGreenDark/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-customCyanBlue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-10 font-lato text-gray-800 relative z-10">
        <div className="w-full max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-customCyanBlue/20 p-8 fade-in-card relative">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-customCyanBlue/40 rounded-tl-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-custom-lintingGreenDark/40 rounded-br-3xl pointer-events-none"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-customCyanBlue/60 rounded-full animate-pulse pointer-events-none"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-custom-lintingGreenDark/60 rounded-full animate-pulse animation-delay-1000 pointer-events-none"></div>
          <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 pointer-events-none">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/80 rounded-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm pointer-events-none"></div>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
            <div className="flex items-center mb-4">
              <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
                {project.title}
              </h1>
              <div className="w-[120px] h-[2px] bg-custom-lintingGreenDark ml-4"></div>
            </div>
          </div>

          {/* Image */}
          {project.cover_image && (
            <div className="relative w-full h-[300px] sm:h-[450px] overflow-hidden mb-8 rounded-xl shadow-lg">
              <Image
                src={`/${project.cover_image.replace(/^(.?\/)+/, "")}`}
                alt={project.title || "Project cover image"}
                fill
                className="object-cover rounded-xl scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-xl"></div>
            </div>
          )}

          {/* Description */}
          {project.description ? (
            <div
              className="text-gray-700 text-lg leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          ) : (
            <p className="text-gray-600 text-lg italic">
              No description available
            </p>
          )}

          {/* Back to Projects Button */}
          <div className="mt-10 text-left">
            <Link href="/projects">
              <button className="inline-flex items-center gap-2 px-6 py-2 bg-customCyanBlue text-white rounded-full shadow-md hover:bg-customCyanBlue/80 hover:scale-105 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
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
