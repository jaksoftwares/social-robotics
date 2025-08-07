// app/responsible-computing/page.tsx

"use client";
import { rccProjects } from "@/constants/rcc-projects";
import { studentDesignedProjects } from "@/constants/student-designed-projects";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import { AnimatePresence, motion } from "framer-motion";
// import { NextSeo } from "next-seo";

export default function ResponsibleComputingPage() {
  return (

    <>
      {/* <NextSeo
        title="Responsible Computing – JKUAT Social Robotics Lab"
        description="Explore our commitment to responsible computing through innovative projects, student designs, and collaborative events at JKUAT."
        canonical="https://www.jkuatsocialroboticslab.com/responsible_computing"
        openGraph={{
          url: 'https://www.jkuatsocialroboticslab.com/responsible_computing',
          title: 'Responsible Computing – JKUAT Social Robotics Lab',
          description:
            'Explore our commitment to responsible computing through innovative projects, student designs, and collaborative events at JKUAT.',
          siteName: 'JKUAT Social Robotics Lab',
          images: [
            {
              url: 'https://www.jkuatsocialroboticslab.com/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Responsible Computing Projects',
            },
          ],
        }}
      /> */}


    <div className="bg-white">
      <Banner 
        title="Responsible Computing"
      />

     {/* RCC Projects Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900 mb-4">
        RCC Projects
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Explore our research initiatives that integrate responsible computing principles
      </p>
    </div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {rccProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group">
              {/* Cover Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-custom-lintingGreenDark/90 text-white">
                    RCC Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-raleway font-bold text-gray-900 mb-3 group-hover:text-custom-lintingGreenDark transition-colors">
                  {project.title}
                </h3>
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: project.short_description }}
                />

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    href={`/rcc-projects/${project.title || project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium"
                  >
                    Explore Project
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
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>

      {/* Student Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900 mb-4">
              Student Innovations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Projects designed by our talented students applying responsible computing principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentDesignedProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 relative">
                  <Image
                    src={project.cover_image || "/img/core/default-image.png"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-raleway font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {"short_description" in project && project.short_description
                      ? project.short_description
                      : "No description available."}
                  </p>
                  <Link
                    href={project.title}
                    className="inline-flex items-center text-custom-lintingGreenDark font-semibold hover:text-custom-lintingGreenDark/80 transition-colors"
                  >
                    View Details
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900 mb-4">
              Recent Events
            </h2>
           <div className="w-20 h-1 bg-gradient-to-r from-customLintingGreenDark to-gray-600 mx-auto rounded-full"></div>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our latest activities and collaborations in responsible computing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-64 relative">
                  <Image
                    src="/img/Responsible-1.jpeg"
                    alt="Mozilla support event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-64 relative">
                  <Image
                    src="/img/Responsible-2.jpeg"
                    alt="Mozilla workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Partnership
                  </span>
                  <span className="ml-3 text-sm text-gray-500">Feb 28, 2024</span>
                </div>
                <h3 className="text-2xl font-raleway font-bold text-gray-900 mb-4">
                  Mozilla Supports JKUAT in Responsible Computing
                </h3>
                <p className="text-gray-600 mb-6">
                  During a visit to the university, Dr. Mbogho revealed developments
                  from JKUAT&apos;s successful acquisition of two Mozilla grants.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://youtu.be/0Poy3Iavmeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5z" />
                    </svg>
                    Watch Video
                  </Link>
                  <Link
                    href="https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 19h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-14-7v12h-2v-12h2zm14-5h-12v1h12v-1zm0 3h-12v1h12v-1zm0 3h-12v1h12v-1z" />
                    </svg>
                    Read Article
                  </Link>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <section>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="h-64 relative">
                  <Image
                    src="/img/Responsible-3.jpeg"
                    alt="Ethics in robotics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-64 relative">
                  <Image
                    src="/img/ethics.jpg"
                    alt="Curriculum development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Education
                  </span>
                  <span className="ml-3 text-sm text-gray-500">Ongoing</span>
                </div>
                <h3 className="text-2xl font-raleway font-bold text-gray-900 mb-4">
                  Ethics in Robotics Curriculum
                </h3>
                <p className="text-gray-600 mb-6">
                  JKUAT is cultivating RCC values by introducing undergraduates to ethical
                  perspectives within Computer Science and Technology courses.
                </p>
                <Link
                  href="https://www.linkedin.com/posts/jkuat_mozilla-has-pledged-to-support-jomo-kenyatta-activity-7170346068797337600-qY-Y?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View on LinkedIn
                </Link>
              </div>
            </div>
          </section>
        </div>
        </div>
      </section>
    </div>
    </>
  );
}