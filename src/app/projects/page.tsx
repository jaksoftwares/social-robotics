// app/projects/page.tsx

import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

export default function ProjectsPage() {
  return (
    <div className="projects-bg bg-[#FAFAFA] min-h-screen w-full" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
      <Banner title="Projects" />

      {/* Section Header with Line */}
      <div className="flex flex-col items-center text-center mb-8 mt-10">
        <div className="flex items-center mb-3">
          <p className="text-gray-600 mr-3 text-sm md:text-base">Discover our innovations</p>
          <div className="w-[120px] h-[2px] bg-custom-lintingGreenDark"></div>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          PROJECT <span className="text-customCyanBlue">HIGHLIGHTS</span>
        </h2>
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 md:px-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative backdrop-blur-xl bg-white/85 rounded-xl p-4 md:p-6 shadow-xl border border-white/40 transition-all duration-500 mb-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Project Image with glow */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-customCyanBlue/20 to-custom-lintingGreenDark/20 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={`/${project.cover_image.replace(/^(.?\/)+/, "")}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Project Description */}
              <div className="w-full md:w-1/2 text-left relative z-10">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-customCyanBlue/60 to-transparent"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>

                <div
                  className="text-gray-700 text-base md:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                <div className="mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group overflow-hidden
                               bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                               hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark z-10"
                  >
                    <span className="relative z-10">Learn More</span>
                    <i className="fas fa-flask ml-3 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 rounded-lg pointer-events-none"></span>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-custom-lintingGreenDark/30 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
