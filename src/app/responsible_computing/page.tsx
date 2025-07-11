// app/responsible-computing/page.tsx

import { rccProjects } from "@/constants/rcc-projects";
import { studentDesignedProjects } from "@/constants/student-designed-projects";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

export default function ResponsibleComputingPage() {
  return (
    <>
      <Banner title="Responsible Computing" />
      <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-customCyanBlue/10 via-white to-custom-lintingGreenDark/10" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
        
        
        {/* Background Blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-customCyanBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-custom-lintingGreenDark/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-customCyanBlue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 py-10 font-lato text-gray-800 relative z-10">






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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
