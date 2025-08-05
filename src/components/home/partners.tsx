"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/constants/partners";

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-custom-lightGray">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-raleway text-center mb-10 font-bold">
          OUR PARTNERS / FUNDERS
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {partner.website ? (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={120}
                    className="h-32 w-auto object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={120}
                  className="h-32 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
