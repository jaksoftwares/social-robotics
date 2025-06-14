'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      const section = document.getElementById('mainfooter');
      if (section) {
        section.classList.add('fade-in-active');
      }
    }
  }, [inView]);

  return (
    <footer
      id="mainfooter"
      ref={ref}
      className="bg-[#003B6D] text-white py-8 mt-[150px] relative fade-in-section"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 lg:space-x-20">
          {/* Contact Info */}
          <div className="text-left w-full md:w-auto">
            <h3 className="text-xl font-bold mb-2">Reach out to us</h3>
            <div>
              Social Robotics Lab
              <br />
              Computing Department, JKUAT
              <br />
              Juja, Nairobi, Kenya
            </div>
            <div className="mt-4 space-y-2">
              <span className="block contact-item">
                <i className="fa-solid fa-envelope"></i> eunice.njeri@jkuat.ac.ke
              </span>
              <span className="block contact-item">
                <i className="fa-solid fa-phone"></i> Dr. Eunice Njeri +254 721 284110
              </span>
            </div>
            <div className="mt-4">
              <div>
                JKUAT Computing Department
                <br />
                P.O. BOX 62000-00200
                <br />
                NAIROBI – KENYA
              </div>
              <span className="block contact-item mt-2">
                <i className="fa-solid fa-envelope"></i> 067587001/2345
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="text-left w-full md:w-auto">
            <h3 className="text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="/about" className="target-link">About</Link></li>
              <li><Link href="/team" className="target-link">Team</Link></li>
              <li><Link href="/activities" className="target-link">Activities</Link></li>
              <li><Link href="/projects" className="target-link">Projects</Link></li>
              <li><Link href="/publications" className="target-link">Publications</Link></li>
              <li><Link href="/responsible-computing" className="target-link">Responsible Computing</Link></li>
              <li><Link href="/robots" className="target-link">Robots</Link></li>
            </ul>
          </div>

          {/* Robot Image */}
          <div className="relative md:flex-1 text-left md:text-center" id="footer-robot">
            <Image
              src="/img/core/nao-sitted.png"
              alt="Robot"
              width={440}
              height={400}
              className="robot-image mx-auto"
              id="footer-robot-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-active {
          opacity: 1;
          transform: translateY(0);
        }

        .target-link {
          color: #b0b0b0;
          text-decoration: none;
          transition: color 0.3s ease, border-bottom 0.3s ease;
        }

        .target-link:hover {
          color: #ffffff;
          border-bottom: 2px solid #ffffff;
        }

        .contact-item {
          transition: color 0.3s ease, transform 0.2s ease-in-out;
          display: inline-block;
        }

        .contact-item:hover {
          color: #ffffff;
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  );
}
