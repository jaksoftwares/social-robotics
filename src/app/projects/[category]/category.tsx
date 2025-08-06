// 'use client';

// import { projects } from '@/constants/projects';
// import Banner from '@/components/Banner';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// export default function CategoryPage({ params }: { params: { category: string } }) {
//   const category = decodeURIComponent(params.category);
//   const matchedProjects = projects.filter((p) => p.categorySlug === category);
//   const [searchTerm, setSearchTerm] = useState('');

//   if (matchedProjects.length === 0) return notFound();

//   const { category: categoryTitle, coverImage } = matchedProjects[0];

//   // Collect all projects from all projects in this category
//   const allSubProjects = matchedProjects.flatMap(project => 
//     project.subProjects?.map(sub => ({
//       ...sub,
//       parentProject: project.title,
//       parentCoverImage: project.coverImage || coverImage
//     })) || []
//   );

//   const filteredSubProjects = allSubProjects.filter(subProject => {
//     const search = searchTerm.toLowerCase();
//     return (
//       subProject.code.toLowerCase().includes(search) ||
//       subProject.description.toLowerCase().includes(search) ||
//       (subProject.students && subProject.students.toLowerCase().includes(search)) ||
//       (subProject.fundedBy && subProject.fundedBy.toLowerCase().includes(search))
//     );
//   });

//   return (
//     <div className="bg-gray-50">
//       <Banner 
//         title={ `Projects / ${categoryTitle} ` }



//       />

//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Search */}
//           <div className="mb-12">
//             <div className="relative max-w-md mx-auto">
//               <input
//                 type="text"
//                 placeholder={`Search ${categoryTitle} projects...`}
//                 className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-lintingGreenDark focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <svg
//                 className="absolute right-4 top-3.5 h-5 w-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Parent Project Info */}
//           {matchedProjects.map(project => (
//             <div key={project.slug} className="mb-12 p-6 bg-white rounded-xl shadow-sm">
//               <h2 className="text-2xl font-raleway font-bold text-gray-900 mb-3">
//                 {project.title}
//               </h2>
//               <p className="text-gray-600 whitespace-pre-line">
//                 {project.summary}
//               </p>
//             </div>
//           ))}

//           {/* Sub Projects Grid */}
//           {filteredSubProjects.length > 0 ? (
//             <>
//               <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">
//                 {categoryTitle} Projects
//               </h3>
//               <motion.div 
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <AnimatePresence>
//                   {filteredSubProjects.map((subProject, index) => (
//                     <motion.div
//                       key={`${subProject.code}-${index}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.3 }}
//                       whileHover={{ y: -5 }}
//                       className="group"
//                     >
//                       <div className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
//                         {/* Cover Image */}
//                         <div className="relative h-60 w-full">
//                           <Image
//                             src={subProject.parentCoverImage || '/placeholder.jpg'}
//                             alt={subProject.code}
//                             fill
//                             className="object-cover transition-transform duration-500 group-hover:scale-105"
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                           <div className="absolute bottom-4 left-4">
//                             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-custom-lintingGreenDark/90 text-white">
//                               {subProject.code}
//                             </span>
//                           </div>
//                         </div>

//                         {/* Content */}
//                         <div className="p-6 flex flex-col flex-1">
//                           <h4 className="text-lg font-raleway font-bold text-gray-900 mb-3 group-hover:text-custom-lintingGreenDark transition-colors">
//                             {subProject.code}
//                           </h4>
//                           <p className="text-gray-600 mb-4 line-clamp-3">
//                             {subProject.description}
//                           </p>

//                           {/* Project Details */}
//                           <div className="mt-auto space-y-2">
//                             {subProject.students && (
//                               <p className="text-sm text-gray-700">
//                                 <span className="font-medium">Students:</span> {subProject.students}
//                               </p>
//                             )}
//                             {subProject.fundedBy && (
//                               <p className="text-sm text-gray-700">
//                                 <span className="font-medium">Funded by:</span> {subProject.fundedBy}
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </motion.div>
//             </>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="text-center py-16"
//             >
//               <h3 className="text-xl font-medium text-gray-500 mb-2">
//                 No projects found
//               </h3>
//               <p className="text-gray-400">
//                 Try adjusting your search criteria
//               </p>
//               <button
//                 onClick={() => setSearchTerm('')}
//                 className="mt-4 px-4 py-2 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium"
//               >
//                 Reset search
//               </button>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }