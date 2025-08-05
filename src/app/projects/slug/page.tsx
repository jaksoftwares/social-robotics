"use client";

import { useParams } from "next/navigation";
import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();

  // ✅ Ensure `slug` is always a string
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const cleanSlug = slug ? decodeURIComponent(slug).toLowerCase().trim() : null;

  if (!cleanSlug) return notFound();

  const project = projects.find((p) => p.slug.toLowerCase().trim() === cleanSlug);

  if (!project) return notFound();

  return (
    <div className="bg-[#FAFAFA] min-h-screen w-full px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {project.cover_image && (
          <div className="relative w-full h-[280px] sm:h-[420px]">
            <Image
              src={project.cover_image}
              alt={project.title || "Project cover image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
            {project.title}
          </h1>
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
        </div>
      </div>
    </div>
  );
}
