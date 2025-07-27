// app/responsible-computing/page.tsx

import { rccProjects } from "@/constants/rcc-projects";
import { studentDesignedProjects } from "@/constants/student-designed-projects";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function ResponsibleComputingPage() {
  return (
    
    <>
    <Banner title="Responsible Computing" />
    <div className="w-full py-10 px-4">
      {/* RCC Projects Section */}
<section>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">RCC Projects</h2>
  <hr className="border-t-4 border-red-700 w-full mx-auto mb-8" />

  {rccProjects.map((project, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-lg p-6 mb-12 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <div
        className={`flex flex-col md:flex-row ${
          idx % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-center md:items-start gap-6`}
      >
        {/* Content */}
        <div className="flex-grow w-full md:w-1/2 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 hover:text-red-800 transition-colors duration-300">
            {project.title}
          </h3>

          <div
            className="text-gray-600 text-justify leading-relaxed mb-6 tracking-wide space-y-4"
            dangerouslySetInnerHTML={{ __html: project.short_description }}
          />

          {/* {project.title && (
            <Link
              href={project.title}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
            >
              Learn More »
            </Link>
          )} */}
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
      <section className="projects-bg bg-gray-50 py-10">
        <div className="mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            STUDENTS&apos; DESIGNED PROJECTS
          </h2>
          <hr className="border-t-4 border-red-700 w-full mx-auto mb-8" />

          {studentDesignedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-start gap-6 mb-8 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              {/* Text */}
              <div className="flex-grow w-full sm:w-2/3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 hover:text-red-800 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed mb-6 tracking-wide">
                  {"short_description" in project && project.short_description
                    ? project.short_description
                    : "No description available."}
                </p>
                {/* {project.title && (
                  <Link
                    href={project.title}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-300"
                  >
                    Learn More »
                  </Link>
                )} */}
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Recent Events</h2>
        <hr className="border" />

        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8">
          {/* Left Block */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col sm:flex-row gap-4">
              <Image
                src="/img/Responsible-1.jpeg"
                alt="Responsible-Computing-1"
                width={400}
                height={250}
                className="w-full h-48 lg:h-64 object-cover"
              />
              <Image
                src="/img/Responsible-2.jpeg"
                alt="Responsible-Computing-2"
                width={400}
                height={250}
                className="w-full h-48 lg:h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Mozilla pledges to support JKUAT in training to enhance Responsible Computing (RCC) capacity.
              </h3>
              <p className="text-gray-600 text-lg">
                During a visit to the university on Wednesday, February 28, 2024, Dr. Mbogho revealed developments
                stemming from JKUAT&apos;s successful acquisition of two Mozilla grants: Teaching Responsible Computing
                Using Robotics and Mainstreaming Responsible Computing in ICT Student Innovations. Click{" "}
                <a
                  href="https://youtu.be/0Poy3Iavmeg"
                  className="underline text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                for more.
              </p>
              <a
                href="https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-green-700 hover:underline hover:text-red-600 font-medium"
              >
                Read more <i className="ml-2 fa fa-external-link" aria-hidden="true"></i>
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
                className="w-full h-48 lg:h-64 object-cover"
              />
              <Image
                src="/img/Responsible-3.jpeg"
                alt="Responsible-Computing-4"
                width={400}
                height={250}
                className="w-full h-48 lg:h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Integrating ethical perspectives within robotics curriculum</h3>
              <p className="text-gray-600 text-lg">
                JKUAT is successfully cultivating the core values of RCC by introducing undergraduates to ethical
                perspectives within BSc Computer Science and BSc Technology courses. Their goal? Equipping the next
                generation of tech builders with the critical skills to develop more inclusive, healthier, and safer
                digital tools.
              </p>
              <a
                href="https://www.linkedin.com/posts/jkuat_mozilla-has-pledged-to-support-jomo-kenyatta-activity-7170346068797337600-qY-Y?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-green-700 hover:underline hover:text-red-600 font-medium"
              >
                Read more <i className="ml-2 fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
