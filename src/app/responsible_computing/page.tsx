// app/responsible-computing/page.tsx

"use client";
import { rccProjects } from "@/constants/rcc-projects";
import { studentDesignedProjects } from "@/constants/student-designed-projects";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import { AnimatePresence, motion } from "framer-motion";

export default function ResponsibleComputingPage() {
  return (
<<<<<<< Updated upstream
    <>
      <Banner title="Responsible Computing" />
      <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-customCyanBlue/10 via-white to-custom-lintingGreenDark/10" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
        
        
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-customCyanBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-custom-lintingGreenDark/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-customCyanBlue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 py-10 font-lato text-gray-800 relative z-10">
=======
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
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream




          {/* Styled Header Section Like About Page */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center mb-6">
              <p className="text-gray-600 mr-4">What we do at Jkuat Social Robotics Lab</p>
              <div className="w-[150px] h-[2px] bg-custom-lintingGreenDark"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              RESPONSIBLE <span className="text-custom-lintingGreenDark">COMPUTING</span>
            </h2>
          </div>

          {/* RCC Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">RCC Projects</h2>
            <div className="w-24 h-1.5 bg-custom-lintingGreenDark rounded-full mx-auto mb-12"></div>

            {rccProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-12 hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <div
                  className={`flex flex-col md:flex-row ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  } items-center md:items-start gap-6`}
                >
                  {/* Content */}
                  <div className="flex-grow w-full md:w-1/2 text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-red-800 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div
                      className="text-gray-600 text-justify leading-relaxed mb-6 tracking-wide space-y-4"
                      dangerouslySetInnerHTML={{ __html: project.short_description }}
                    />

                    {project.title && (
                      <Link
                        href={project.title}
                        className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                               bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                               hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark"
                      >
                        <span className="relative z-10">Learn More</span>
                        <span className="text-xl relative z-10 ml-2">↗</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                    )}
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <Image
                      src={project.cover_image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto md:h-[400px] object-cover rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Student-Designed Projects Section */}
          <section className="projects-bg py-10 mb-20 rounded-xl">
            <div className="mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Students&apos; <span className="text-custom-lintingGreenDark">Designed</span> Projects</h2>
              <div className="w-24 h-1.5 bg-customCyanBlue rounded-full mx-auto mb-12"></div>

              {studentDesignedProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6 mb-10 hover:shadow-2xl transition-all duration-300 ease-in-out"
                >
                  {/* Text */}
                  <div className="flex-grow w-full sm:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-red-800 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-justify leading-relaxed mb-6 tracking-wide">
                      {"short_description" in project && project.short_description
                        ? project.short_description
                        : "No description available."}
                    </p>
                    {project.title && (
                      <Link
                        href={project.title}
                        className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden
                               bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                               hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark"
                      >
                        <span className="relative z-10">Learn More</span>
                        <span className="text-xl relative z-10 ml-2">↗</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                    )}
                  </div>

                  {/* Image */}
                  <div className="w-full sm:w-1/3">
                    <Image
                      src={project.cover_image || "/img/core/default-image.png"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto sm:h-[400px] object-cover rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section className="my-14 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Recent <span className="text-custom-lintingGreenDark">Events</span></h2>
           <div className="w-24 h-1.5 bg-custom-lintingGreenDark rounded-full mx-auto mb-12 "></div>

            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
              {/* Left Block */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Image
                    src="/img/Responsible-1.jpeg"
                    alt="Responsible-Computing-1"
                    width={400}
                    height={250}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/img/Responsible-2.jpeg"
                    alt="Responsible-Computing-2"
                    width={400}
                    height={250}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Mozilla pledges to support JKUAT in training to enhance Responsible Computing (RCC) capacity.
                  </h3>
                  <p className="text-gray-600 text-lg">
                    During a visit to the university on Wednesday, February 28, 2024, Dr. Mbogho revealed developments
                    stemming from JKUAT&apos;s successful acquisition of two Mozilla grants. Click {" "}
                    <a
                      href="https://youtu.be/0Poy3Iavmeg"
                      className="underline text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}for more.
                  </p>
                  {/* Read More Link - 1 */}
                    <a
                      href="https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group overflow-hidden
                       bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                      hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark mt-4 w-fit"
                    >
                      <span className="relative z-10">Read More</span>
                      <span className="text-xl relative z-10 ml-2">↗</span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>

                </div>
              </div>

              {/* Right Block */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Image
                    src="/img/Responsible-3.jpeg"
                    alt="Responsible-Computing-3"
                    width={400}
                    height={250}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                  />
                  <Image
                    src="/img/Responsible-3.jpeg"
                    alt="Responsible-Computing-4"
                    width={400}
                    height={250}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Integrating ethical perspectives within robotics curriculum</h3>
                  <p className="text-gray-600 text-lg">
                    JKUAT is successfully cultivating the core values of RCC by introducing undergraduates to ethical
                    perspectives within BSc Computer Science and BSc Technology courses.
                  </p>
              {/* Read More Link - 2 */}
                  <a
                     href="https://www.linkedin.com/posts/jkuat_mozilla-has-pledged-to-support-jomo-kenyatta-activity-7170346068797337600-qY-Y"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group overflow-hidden
                               bg-custom-lintingGreenDark text-white border-2 border-custom-lintingGreenDark 
                              hover:bg-white hover:text-custom-lintingGreenDark hover:border-custom-lintingGreenDark mt-4 w-fit"
                  >
                       <span className="relative z-10">Read More</span>
                       <span className="text-xl relative z-10 ml-2">↗</span>
                       <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>

                </div>
              </div>
=======
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
>>>>>>> Stashed changes
            </div>
          </section>
        </div>
<<<<<<< Updated upstream
      </main>
    </>
=======
      </section>
    </div>
>>>>>>> Stashed changes
  );
}