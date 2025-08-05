import React from "react";
import Link from "next/link";
import Image from "next/image";
import { people, Person } from "@/constants/people";
import Banner from "@/components/Banner";
import { ReadMoreText } from "@/components/ReadMore";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

// Helper to get profile picture or fallback
const getProfilePicture = (person: Person) =>
  person.profile_picture || "/img/core/default-image.png";

export default function TeamPage() {
  // Extract individuals by roles/categories
  const principalInvestigator = people.find((p) => p.category === "I"); // PI
  const prof = people.find((p) => p.category === "S"); // Supervisor/Prof
  const admin = people.find((p) => p.category === "A"); // Admin
  const postgraduates = people.filter((p) => p.category === "P");
  const undergraduates = people.filter((p) => p.category === "U");

  // Create slug fallback for linking (since Person has no slug)
  const makeSlug = (person: Person) =>
    slugify(`${person.first_name} ${person.last_name}`);

  return (
    <main>
      <Banner title="Our Team" />
      {/* Team Introduction */}
      <div className="container mx-auto font-lato px-4 py-8"> 
        {/* Principal Investigator */}
        {principalInvestigator && (
          <>
            <h2 className="mt-4 md:mt-8 text-xl md:text-3xl font-raleway text-gray-800 font-bold">
              PRINCIPAL INVESTIGATOR
            </h2>
            <div className="border my-4"></div>
            <div className="my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={getProfilePicture(principalInvestigator)}
                  alt={`${principalInvestigator.first_name} ${principalInvestigator.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {(principalInvestigator.title ?? "")}{" "}
                    {principalInvestigator.first_name} {principalInvestigator.last_name}
                  </h2>
                </div>
                <div>
                  <ReadMoreText 
                    text={principalInvestigator.focus_long || ""}
                    className="text-gray-600 text-lg text-justify leading-relaxed mb-6"
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(principalInvestigator)}`}
                  className="p-2 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center gap-2"
                >
                  <span className="text-xl">View Profile</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="border my-8"></div>
          </>
        )}

        {/* Professor */}
        {prof && (
          <>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={getProfilePicture(prof)}
                  alt={`${prof.first_name} ${prof.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {(prof.title ?? "")} {prof.first_name} {prof.last_name}
                  </h2>
                  {prof.specialty && (
                    <h4 className="text-custom-red text-lg md:text-xl">{prof.specialty}</h4>
                  )}
                </div>
                <div>
                  <h4 className="italic text-lg md:text-xl">Specialization</h4>
                  <ReadMoreText 
                    text={prof.focus_long || ""}
                    className="text-gray-600 text-lg text-justify leading-relaxed mb-6"
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(prof)}`}
                  className="p-2 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center gap-2"
                >
                  <span className="text-xl">View Profile</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="border my-8"></div>
          </>
        )}

        {/* Admin */}
        {admin && (
          <>
            <div className="my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={getProfilePicture(admin)}
                  alt={`${admin.first_name} ${admin.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {admin.first_name} {admin.last_name}
                  </h2>
                  {admin.specialty && (
                    <h4 className="text-custom-red text-lg md:text-xl">{admin.specialty}</h4>
                  )}
                </div>
                <div>
                  <h4 className="italic text-lg md:text-xl">Specialization</h4>
                  <ReadMoreText 
                    text={admin.focus_long || ""}
                    className="text-gray-600 text-lg text-justify leading-relaxed mb-6"
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(admin)}`}
                  className="p-2 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center gap-2"
                >
                  <span className="text-xl">View Profile</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="border"></div>
          </>
        )}

        {/* Postgraduate Students */}
        <h2 className="mt-4 md:mt-8 text-xl md:text-3xl font-raleway text-gray-800 font-bold">
          POSTGRADUATE STUDENTS
        </h2>
        <div className="border border-black mb-4"></div>

        {postgraduates.map((postgrad, i) => (
          <React.Fragment key={`${postgrad.first_name}-${postgrad.last_name}`}>
            <div
              className={`my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center ${
                (i + 1) % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {postgrad.first_name} {postgrad.last_name}
                  </h2>
                  {postgrad.specialty && (
                    <h4 className="text-custom-red text-lg md:text-xl">{postgrad.specialty}</h4>
                  )}
                </div>
                <div>
                  <h4 className="italic text-lg md:text-xl">Specialization</h4>
                  <ReadMoreText 
                    text={postgrad.focus_long || ""}
                    className="text-gray-600 text-lg text-justify leading-relaxed mb-6"
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(postgrad)}`}
                  className="p-2 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center gap-2"
                >
                  <span className="text-xl">View Profile</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={getProfilePicture(postgrad)}
                  alt={`${postgrad.first_name} ${postgrad.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority={i < 3}
                />
              </div>
            </div>
            
            {i !== postgraduates.length - 1 && (
              <div className="border border-black my-8 md:my-16"></div>
            )}
          </React.Fragment>
        ))}

        {/* Undergraduate Students */}
        <h2 className="mt-4 md:mt-8 text-xl md:text-3xl font-raleway text-gray-800 font-bold">
          UNDERGRADUATE STUDENTS
        </h2>
        <div className="border border-black mb-4"></div>

        {undergraduates.map((student, i) => (
          <React.Fragment key={`${student.first_name}-${student.last_name}`}>
            <div
              className={`my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center ${
                (i + 1) % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {student.first_name} {student.last_name}
                  </h2>
                  {student.specialty && (
                    <h4 className="text-custom-red text-lg md:text-xl">{student.specialty}</h4>
                  )}
                </div>
                <div>
                  <h4 className="italic text-lg md:text-xl">Focus Area</h4>
                  <ReadMoreText 
                    text={student.focus_long || ""}
                    className="text-gray-600 text-lg text-justify leading-relaxed mb-6"
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(student)}`}
                  className="p-2 w-fit bg-custom-lintingGreenDark text-white border-2 rounded-lg hover:bg-transparent hover:border-custom-lintingGreenDark hover:text-custom-lintingGreenDark transition duration-300 inline-flex items-center gap-2"
                >
                  <span className="text-xl">View Profile</span>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={getProfilePicture(student)}
                  alt={`${student.first_name} ${student.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority={i < 3}
                />
              </div>
            </div>

            {i !== undergraduates.length - 1 && (
              <div className="border border-black my-8 md:my-16"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}