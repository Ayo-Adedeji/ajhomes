// import { motion } from 'framer-motion'
// import { ArrowRight, Sparkles } from 'lucide-react'
// import useIntersectionObserver from '../hooks/useIntersectionObserver'

// const CTA = () => {
//   const [ref, isIntersecting] = useIntersectionObserver({
//     threshold: 0.2,
//     triggerOnce: false
//   })

//   return (
//     <section 
//       ref={ref}
//       className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark text-white overflow-hidden"
//     >
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//       </div>

//       {/* Dotted pattern overlay */}
//       <div className="absolute inset-0 opacity-5" style={{
//         backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//         backgroundSize: '30px 30px'
//       }}></div>

//       <div className="relative max-w-4xl mx-auto text-center">
//         {/* Sparkle icon */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={isIntersecting ? { 
//             scale: 1, 
//             rotate: 0,
//             transition: { duration: 0.6, ease: "easeOut" }
//           } : { 
//             scale: 0, 
//             rotate: -180,
//             transition: { duration: 0.4 }
//           }}
//           className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-brand-yellow/20 rounded-full backdrop-blur-sm border border-brand-yellow/30"
//         >
//           <Sparkles className="w-8 h-8 text-brand-yellow" />
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={isIntersecting ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { duration: 0.6, delay: 0.2 }
//           } : { 
//             opacity: 0, 
//             y: 30,
//             transition: { duration: 0.4 }
//           }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
//         >
//           Ready to Find Your Perfect Home?
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={isIntersecting ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { duration: 0.6, delay: 0.3 }
//           } : { 
//             opacity: 0, 
//             y: 20,
//             transition: { duration: 0.4 }
//           }}
//           className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
//         >
//           Join thousands of satisfied guests who've found their ideal rental home with us. Start your journey today.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isIntersecting ? { 
//             opacity: 1, 
//             y: 0,
//             transition: { duration: 0.6, delay: 0.4 }
//           } : { 
//             opacity: 0, 
//             y: 20,
//             transition: { duration: 0.4 }
//           }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           {/* Primary button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative px-8 py-4 bg-brand-yellow text-brand-green-dark rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
//           >
//             <span className="relative z-10">Browse All Homes</span>
//             <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//             <div className="absolute inset-0 bg-brand-yellow-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//           </motion.button>

//           {/* Secondary button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
//           >
//             Contact Us
//           </motion.button>
//         </motion.div>

//         {/* Trust indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isIntersecting ? { 
//             opacity: 1,
//             transition: { duration: 0.6, delay: 0.6 }
//           } : { 
//             opacity: 0,
//             transition: { duration: 0.4 }
//           }}
//           className="mt-8 flex items-center justify-center gap-2 text-white/80 text-sm"
//         >
//           <div className="flex -space-x-2">
//             {[1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-yellow to-brand-yellow-dark border-2 border-brand-green-dark flex items-center justify-center text-xs font-bold text-brand-green-dark"
//               >
//                 {String.fromCharCode(64 + i)}
//               </div>
//             ))}
//           </div>
//           <span>Join 2,500+ happy guests</span>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

const CTA = () => {
  return null
}

export default CTA
