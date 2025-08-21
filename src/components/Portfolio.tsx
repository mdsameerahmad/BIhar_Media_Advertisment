// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { ArrowRight, ExternalLink, Eye, X } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// import { FaRocket, FaArrowRight, FaEye } from "react-icons/fa";

// export function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [isVisible, setIsVisible] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const sectionRef = useRef(null);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const categories = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'ooh', label: 'OOH Advertising' },
//     { id: 'digital', label: 'Digital Campaigns' },
//     { id: 'mall', label: 'Mall Branding' },
//     { id: 'print', label: 'Print Media' }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: 'Patna Mall Billboard Campaign',
//       category: 'ooh',
//       description: 'High-impact billboard campaign for major retail launch',
//       image: 'https://images.unsplash.com/photo-1613053745430-553b050dd3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsYm9hcmQlMjBhZHZlcnRpc2luZyUyMG91dGRvb3J8ZW58MXx8fHwxNzU1MzQ2MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'City Mall',
//       impact: '+40% Footfall',
//       featured: true,
//       details: "This campaign transformed the visual landscape of Patna with strategically placed billboards that captured attention and drove significant foot traffic to the new retail location. Our team designed eye-catching visuals that resonated with the local audience.",
//       images: [
//         'https://images.unsplash.com/photo-1613053745430-553b050dd3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsYm9hcmQlMjBhZHZlcnRpc2luZyUyMG91dGRvb3J8ZW58MXx8fHwxNzU1MzQ2MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Digital Marketing Campaign',
//       category: 'digital',
//       description: 'Comprehensive social media and digital advertising strategy',
//       image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU1NDU5OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'Tech Startup',
//       impact: '300% ROI',
//       featured: false,
//       details: "Our digital marketing strategy leveraged the power of social media, targeted ads, and content marketing to achieve an impressive 300% ROI for our tech startup client. We created a cohesive brand message across all digital platforms.",
//       images: [
//         'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU1NDU5OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Premium Mall Activation',
//       category: 'mall',
//       description: 'Complete mall branding and customer experience activation',
//       image: 'https://images.unsplash.com/photo-1713937187304-65ae0120e978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBicmFuZGluZyUyMHJldGFpbHxlbnwxfHx8fDE3NTU0NTk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'P&M Mall',
//       impact: '+60% Sales',
//       featured: true,
//       details: "This comprehensive mall activation transformed the shopping experience, resulting in a 60% increase in sales. We designed immersive brand experiences, wayfinding systems, and promotional materials that enhanced customer engagement.",
//       images: [
//         'https://images.unsplash.com/photo-1713937187304-65ae0120e978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBicmFuZGluZyUyMHJldGFpbHxlbnwxfHx8fDE3NTU0NTk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     },
//     {
//       id: 4,
//       title: 'Brand Identity Design',
//       category: 'print',
//       description: 'Complete brand redesign with print collateral',
//       image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NTQ1OTk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'Local Business',
//       impact: 'Award Winner',
//       featured: false,
//       details: "We developed a comprehensive brand identity system for a local business, including logo design, color palette, typography, and print collateral. The project received industry recognition for its innovative approach to local branding.",
//       images: [
//         'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMglkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NTQ1OTk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1432888622747-4eb9a07a?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     },
//     {
//       id: 5,
//       title: 'Highway Billboard Series',
//       category: 'ooh',
//       description: 'Strategic highway advertising campaign across Bihar',
//       image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYmlsbGJvYXJkfGVufDF8fHx8MTc1NTQ1OTk2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'Auto Brand',
//       impact: '+25% Awareness',
//       featured: false,
//       details: "Our highway billboard campaign reached millions of commuters across Bihar, increasing brand awareness by 25%. The strategic placement along major highways ensured maximum visibility for our automotive client.",
//       images: [
//         'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYmlsbGJvYXJkfGVufDF8fHx8MTc1NTQ1OTk2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     },
//     {
//       id: 6,
//       title: 'E-commerce Campaign',
//       category: 'digital',
//       description: 'Multi-channel digital campaign for online store',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTU0NTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       client: 'Fashion Brand',
//       impact: '+150% Conversion',
//       featured: true,
//       details: "This multi-channel e-commerce campaign resulted in a 150% increase in conversion rates for our fashion client. We implemented targeted social media ads, email marketing, and influencer collaborations to drive sales.",
//       images: [
//         'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTU0NTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//         'https://images.unsplash.com/photo-1432888622747-4eb9a07a?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//       ]
//     }
//   ];

//   const filteredProjects = activeCategory === 'all'
//     ? projects
//     : projects.filter(project => project.category === activeCategory);

//   const handleShowModal = (project) => {
//     setSelectedProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section id="portfolio" className="py-12 md:py-20 bg-gray-50" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <span className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 text-sm md:text-lg font-semibold shadow-sm rounded-full bg-violet-100 text-violet-600 animate-pulse">
//             <Eye size={16} className="md:size-5" />
//             Our Portfolio
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//             <span className="block">Success stories that</span>
//             <span className="block bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
//               speak for themselves
//             </span>
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
//             Explore our portfolio of successful advertising campaigns across Bihar. From billboards to digital campaigns, see how we've helped brands achieve remarkable results.
//           </p>
//         </div>

//         {/* Filter Navigation */}
//         <nav className="flex justify-center mb-8 md:mb-12">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
//             {categories.map((category, index) => (
//               <button
//                 key={category.id}
//                 className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium border filter-btn transition-all duration-300 ${activeCategory === category.id ? 'bg-blue-600 text-white border-none shadow-lg' : 'bg-transparent text-gray-500 border-gray-200 hover:bg-blue-50 hover:text-blue-600'} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//                 onClick={() => setActiveCategory(category.id)}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </nav>

//         {/* Portfolio Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`h-full bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden portfolio-card transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="relative overflow-hidden group">
//                 <ImageWithFallback
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full portfolio-image transition-transform duration-700 group-hover:scale-110"
//                   style={{ height: '240px', objectFit: 'cover' }}
//                 />
//                 {/* Overlay */}
//                 <div className="portfolio-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/70">
//                   <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <button
//                       className="bg-white rounded-full flex items-center justify-center w-10 h-10 shadow hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                       onClick={() => handleShowModal(project)}
//                     >
//                       <Eye size={16} />
//                     </button>
//                   </div>
//                 </div>
//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-semibold shadow animate-bounce-slow">
//                     ⭐ Featured
//                   </span>
//                 )}
//               </div>
//               <div className="p-5 md:p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h5 className="font-bold text-gray-900 mb-2 text-lg">{project.title}</h5>
//                     <p className="text-gray-500 mb-0 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <small className="text-gray-400 block">Client: {project.client}</small>
//                     <div className="font-semibold text-green-600 text-sm mt-1">{project.impact}</div>
//                   </div>
//                   <button
//                     className="border border-blue-600 text-blue-600 rounded-full flex items-center justify-center w-8 h-8 md:w-9 md:h-9 hover:bg-blue-600 hover:text-white transition-colors"
//                     onClick={() => handleShowModal(project)}
//                   >
//                     <ArrowRight size={14} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-600 via-blue-300 to-white text-gray-900">
//             <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/20"></div>
//             <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-violet-500/20"></div>

//             <div className="relative p-6 md:p-10 z-10">
//               <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4">
//                 <FaRocket className="text-blue-600 text-4xl md:text-5xl mb-1 animate-pulse" />
//                 <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Have a project in mind?</h3>
//                 <p className="text-sm md:text-base opacity-80 mx-auto max-w-lg">
//                   Let's bring your vision to life with a powerful advertising campaign that delivers real impact.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                   <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
//                     <FaArrowRight />
//                     Start Your Project
//                   </button>
//                   <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                     <FaEye />
//                     View More Work
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Project Detail Overlay */}
//         {showModal && selectedProject && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
//             onClick={handleCloseModal}
//           >
//             <div
//               className="bg-white rounded-lg p-4 max-w-xs w-full shadow-2xl transform transition-all duration-300 animate-scale-in"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
//                 onClick={handleCloseModal}
//               >
//                 <X size={18} />
//               </button>
//               <div className="relative">
//                 <div className="h-32 overflow-hidden rounded-t-lg">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 {selectedProject.featured && (
//                   <span className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white rounded-full text-xs font-semibold shadow">
//                     ⭐ Featured
//                   </span>
//                 )}
//               </div>
//               <div className="p-3">
//                 <h3 className="text-lg font-bold text-gray-900 mb-1">{selectedProject.title}</h3>
//                 <p className="text-gray-600 text-sm mb-2">{selectedProject.description}</p>
//                 <div className="mb-2">
//                   <h4 className="font-semibold text-gray-800 text-xs mb-1">Project Details</h4>
//                   <p className="text-gray-600 text-xs leading-tight">{selectedProject.details}</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2 mb-2">
//                   <div>
//                     <p className="text-xs text-gray-500">Client</p>
//                     <p className="font-medium text-sm">{selectedProject.client}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Impact</p>
//                     <p className="font-medium text-sm text-green-600">{selectedProject.impact}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 text-xs mb-1">Project Gallery</h4>
//                   <div className="grid grid-cols-3 gap-1">
//                     {selectedProject.images.slice(0, 3).map((img, idx) => (
//                       <div key={idx} className="aspect-square overflow-hidden rounded-sm">
//                         <img
//                           src={img}
//                           alt={`${selectedProject.title} ${idx + 1}`}
//                           className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-2 mt-2">
//                 <button
//                   className="text-sm text-blue-600 hover:underline"
//                   onClick={handleCloseModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Custom Styles */}
//         <style>{`
//           .filter-btn:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//           }
//           .portfolio-card {
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }
//           .portfolio-card:hover {
//             transform: translateY(-8px) scale(1.02);
//             box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
//           }
//           .portfolio-image {
//             transition: transform 0.7s ease;
//           }
//           .animate-gradient {
//             background-size: 200% auto;
//             animation: gradient 3s ease infinite;
//           }
//           @keyframes gradient {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           .animate-fade-in {
//             animation: fadeIn 0.6s ease forwards;
//           }
//           .animate-fade-in-up {
//             animation: fadeInUp 0.8s ease forwards;
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-bounce-slow {
//             animation: bounce 2s infinite;
//           }
//           @keyframes bounce {
//             0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
//             40% {transform: translateY(-10px);}
//             60% {transform: translateY(-5px);}
//           }
//           .animate-scale-in {
//             animation: scaleIn 0.3s ease-out;
//           }
//           @keyframes scaleIn {
//             from { transform: scale(0.9); opacity: 0; }
//             to { transform: scale(1); opacity: 1; }
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }