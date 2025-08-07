// app/about/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ReadMoreText } from "@/components/ReadMore";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Seo = dynamic(() => import('@/components/Seo'), { ssr: false });
export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);


  return (
    <>
    <Seo
        title="About Us – JKUAT Social Robotics Lab"
        description="Learn more about the team, responsible computing methodology, and impact of the Social Robotics Lab at JKUAT."
        canonical="https://www.jkuatsocialroboticslab.com/about"
        openGraph={{
          url: "https://www.jkuatsocialroboticslab.com/about",
          title: "About Us – JKUAT Social Robotics Lab",
          description:
            "Explore the team, mission, and methodology of the Social Robotics Lab at JKUAT. Discover how responsible computing is shaping the future.",
          siteName: "JKUAT Social Robotics Lab",
          images: [
            {
              url: "https://www.jkuatsocialroboticslab.com/og-image.png",
              width: 1200,
              height: 630,
              alt: "JKUAT Social Robotics Lab",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@JKUATRobotics",
        }}
      />
    <div className="bg-white text-gray-800 font-lato">
      {/* TEAM SECTION */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/img/image 3.jpg"
              alt="JKUAT Social Robotics Lab Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-raleway font-bold text-gray-900">OUR TEAM</h2>
            <ReadMoreText text="We have a team of five MSc. Engineering students at the Department of Computing, JKUAT, supported under the Social Robotics Lab. The team is led by Dr. Eunice Njeri in collaboration with faculty members from the Department of Computing. The lab's projects focus on designing intuitive social interactions by integrating human-centered design, responsible computing, artificial intelligence, machine learning, computer vision, natural language processing, and affective computing. Our goal is to address societal challenges in education, social training, and social care through innovative and impactful research." />
            <Link
              href="/people"
              className="font-lato inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-custom-lintingGreenDark border-2 border-custom-lintingGreenDark hover:bg-transparent hover:text-custom-lintingGreenDark transition duration-300"
            >
              <span className="text-lg">Discover Our Team</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE ROBOTICS SECTION */}
      <section className="bg-[#F8F9FB] py-16 px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-raleway font-bold text-gray-900">Responsible Robotics in Social Environments</h2>
            <ReadMoreText text="At the Social Robotics Lab, we are dedicated to designing robots that enhance social interaction and support human well-being through empathetic and inclusive design. Our research explores how robots can understand and respond to human social cues, promote social inclusion, and navigate the ethical challenges of robotic technology. We aim to advance the field of social robotics by developing innovative approaches that integrate robots into everyday environments—education, social training, homes, and healthcare settings—where they can assist with tasks, support learning, and provide companionship to individuals with specific needs." />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="/img/about/about-2.jpeg"
              alt="Social Robotics in Action"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/img/about/about-image.png"
              alt="Teaching Methodology"
              width={500}
              height={400}
              className="rounded-2xl shadow-md w-full h-auto md:h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-raleway font-bold text-gray-900">TEACHING RESPONSIBLE COMPUTING - METHODOLOGY</h2>
            <span className="italic font-semibold text-gray-700">Training Approach</span>
            <ReadMoreText text="Our methodology emphasizes hands-on learning and real-world design scenarios to make Responsible Computing (RC) and ethics both practical and engaging." />
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Team-Based RC Projects</strong> – Students collaborate in teams to design projects that integrate RC principles, fostering critical thinking and ethical awareness.
              </li>
              <li>
                <strong>Ethical Training Workshops</strong> – We conduct structured workshops incorporating design scenarios, case studies, and expert guest lectures to provide a comprehensive understanding of RC.
              </li>
              <li>
                <strong>Industry and Academic Engagement</strong> – Guest lecturers from both industry and academia share insights on responsible technology development.
              </li>
              <li>
                <strong>Applied Learning</strong> – Students apply the RC knowledge gained to their projects, enabling them to internalize ethical principles and implement them in real-world scenarios.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="bg-[#F8F9FB] py-16 px-4 md:px-8 lg:px-16 xl:px-40">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/img/impact-icon.png"
              alt="Impact Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-raleway font-bold text-gray-900">IMPACT AND OUTREACH</h2>
              <span className="italic text-lg md:text-xl text-gray-700">Transformative Outcomes</span>
            </div>
          </div>
          <ReadMoreText text="The JKUAT Social Robotics Lab initiative is already making significant strides. Currently, there are five ongoing MSc projects by Software Engineering students at the Department of Computing, JKUAT, supported under the Social Robotics Project. These projects explore various aspects of social robotics and machine learning, with a focus on education, social training, and social care. As part of our ongoing responsible computing project, we have trained ~150 students in Computer Science and Technology about robotics and responsible computing." />
          <p className="font-semibold text-gray-800 mb-4 mt-4">
            Explore some of the impact the lab has made:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              RCC programme{" "}
              <Link
                href="https://youtu.be/0Poy3Iavmeg"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Click here to see the video
              </Link>
            </li>
            <li>
              RCC programme and student impact{" "}
              <Link
                href="https://foundation.mozilla.org/en/blog/robotics-and-ethics-intersect-for-rcc-awardee-jomo-kenyatta-university/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Click here to see the blog
              </Link>
            </li>
            <li>
              Responsible AI webinar{" "}
              <Link
                href="https://discover.jkuat.ac.ke/responsible-ai-key-to-harnessing-its-potential/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Click here to see the blog
              </Link>
            </li>
            <li>
              Ethical design workshop{" "}
              <Link
                href="https://discover.jkuat.ac.ke/integrating-african-perspectives-in-technology-and-design-processes/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Click here to see the resource
              </Link>
            </li>
            <li>
              Girls in robotics{" "}
              <Link
                href="https://www.jkuat.ac.ke/programme-to-attract-young-women-to-stem-unveiled/"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Click here to see the resource
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
     </>

  );
}