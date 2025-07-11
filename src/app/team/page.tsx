import React from "react";
import Link from "next/link";
import Image from "next/image";
import { people, Person } from "@/constants/people";
import Banner from "@/components/Banner";

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

  // Create slug fallback for linking (since Person has no slug)
  const makeSlug = (person: Person) =>
    slugify(`${person.first_name} ${person.last_name}`);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ marginBottom: '-150px', paddingBottom: '150px' }}>
      {/* Background Effects (match About/Home) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-customCyanBlue/10 via-white to-custom-lintingGreenDark/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-customCyanBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-custom-lintingGreenDark/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-customCyanBlue/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.08) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
      </div>
      {/* Remove snake lines and add a soft geometric pattern background */}
      <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 1440 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Subtle repeating hexagon pattern */}
        <defs>
          <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
            <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.17" />
          </pattern>
        </defs>
        <rect width="1440" height="1200" fill="url(#hexPattern)" />
        {/* Add a few floating blurred circles for depth */}
        <circle cx="300" cy="200" r="80" fill="#22d3ee" opacity="0.18" filter="url(#blur1)" />
        <circle cx="1200" cy="900" r="100" fill="#16a34a" opacity="0.017" filter="url(#blur2)" />
        <defs>
          <filter id="blur1"><feGaussianBlur stdDeviation="30" /></filter>
          <filter id="blur2"><feGaussianBlur stdDeviation="40" /></filter>
        </defs>
      </svg>
      <Banner title="Our Team" />
      <div className="container mx-auto font-lato px-4 py-0 overflow-visible">
        {/* Principal Investigator */}
        {principalInvestigator && (
          <>
            <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
              <div className="flex items-center mb-4">
                <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
                  PRINCIPAL <span className="text-custom-lintingGreenDark">INVESTIGATOR</span>
                </h2>
                <div className="w-[120px] h-[2px] bg-customCyanBlue ml-4"></div>
              </div>
            </div>
            <div className="my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-customCyanBlue/20 group">
                <Image
                src={getProfilePicture(principalInvestigator)}
                alt={`${principalInvestigator.first_name} ${principalInvestigator.last_name}`}
                fill
                sizes="(min-width: 768px) 256px, 192px"
                style={{ objectFit: "cover" }}
                priorit
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-5 w-full md:w-2/3">
                <div>
                  <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    {(principalInvestigator.title ?? "")} {principalInvestigator.first_name} {principalInvestigator.last_name}
                  </h2>
                </div>
                <div>
                  <p
                    className="text-gray-600 text-justify break-words"
                    dangerouslySetInnerHTML={{ __html: principalInvestigator.focus_long || "" }}
                  />
                </div>
                <Link
                  href={`/team/${makeSlug(principalInvestigator)}`}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group overflow-hidden
                    bg-customCyanBlue text-white border-2 border-customCyanBlue 
                    hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue min-w-0 w-auto max-w-[140px]"
                  style={{ minWidth: '0', width: 'auto', maxWidth: '140px', height: '40px' }}
                >
                  <span className="relative z-10">View Profile</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                  {/* Animated background sweep */}
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 -right-2 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="border my-8"></div>
          </>
        )}
        {/* Professor */}
        {prof && (
          <>
            <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
              <div className="flex items-center mb-4">
                <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
                  SUPERVISOR / <span className="text-custom-lintingGreenDark">PROFESSOR</span>
                </h2>
                <div className="w-[120px] h-[2px] bg-customCyanBlue ml-4"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-customCyanBlue/20 bg-gray-100 flex items-center justify-center group">
                <Image
                  src={getProfilePicture(prof)}
                  alt={`${prof.first_name} ${prof.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority
                  className="transition-transform duration-500 group-hover:scale-110"
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
                  <p className="text-gray-600 text-justify break-words">{prof.focus_long}</p>
                </div>
                <Link
                  href={`/team/${makeSlug(prof)}`}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group overflow-hidden
                    bg-customCyanBlue text-white border-2 border-customCyanBlue 
                    hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue min-w-0 w-auto max-w-[140px]"
                  style={{ minWidth: '0', width: 'auto', maxWidth: '140px', height: '40px' }}
                >
                  <span className="relative z-10">View Profile</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                  {/* Animated background sweep */}
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="border my-8"></div>
          </>
        )}
        {/* Admin */}
        {admin && (
          <>
            <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
              <div className="flex items-center mb-4">
                <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
                  <span className="text-custom-lintingGreenDark">ADMINISTRATION</span>
                </h2>
                <div className="w-[120px] h-[2px] bg-customCyanBlue ml-4"></div>
              </div>
            </div>
            <div className="my-8 md:my-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-customCyanBlue/20 group">
                <Image
                  src={getProfilePicture(admin)}
                  alt='{`${principalInvestigator.first_name} ${principalInvestigator.last_name}`}'
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority
                  className="transition-transform duration-500 group-hover:scale-110"
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
                  <p className="text-gray-600 text-justify break-words">{admin.focus_long}</p>
                </div>
                <Link
                  href={`/team/${makeSlug(admin)}`}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group overflow-hidden
                    bg-customCyanBlue text-white border-2 border-customCyanBlue 
                    hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue min-w-0 w-auto max-w-[140px]"
                  style={{ minWidth: '0', width: 'auto', maxWidth: '140px', height: '40px' }}
                >
                  <span className="relative z-10">View Profile</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                  {/* Animated background sweep */}
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
            <div className="border"></div>
          </>
        )}
        {/* Postgraduate Students */}
        <div className="flex flex-col items-center text-center mb-8 mt-4 md:mt-8">
          <div className="flex items-center mb-4">
            <div className="w-[120px] h-[2px] bg-customCyanBlue mr-4"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-raleway">
              POSTGRADUATE <span className="text-custom-lintingGreenDark">STUDENTS</span>
            </h2>
            <div className="w-[120px] h-[2px] bg-customCyanBlue ml-4"></div>
          </div>
        </div>
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
                  <p className="text-gray-600 text-justify break-words">{postgrad.focus_long}</p>
                </div>
                <Link
                  href={`/team/${makeSlug(postgrad)}`}
                  className="relative inline-flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group overflow-hidden
                    bg-customCyanBlue text-white border-2 border-customCyanBlue 
                    hover:bg-white hover:text-customCyanBlue hover:border-customCyanBlue min-w-0 w-auto max-w-[140px]"
                  style={{ minWidth: '0', width: 'auto', maxWidth: '140px', height: '40px' }}
                >
                  <span className="relative z-10">View Profile</span>
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10"></i>
                  {/* Animated background sweep */}
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-customCyanBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-customCyanBlue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                </Link>
              </div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-customCyanBlue/20 group">
                <Image
                  src={getProfilePicture(postgrad)}
                  alt={`${postgrad.first_name} ${postgrad.last_name}`}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  style={{ objectFit: "cover" }}
                  priority={i < 3}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            {i !== postgraduates.length - 1 && (
              <div className="border my-8 md:my-16"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
