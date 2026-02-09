import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const ReviewSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "London",
      rating: 5,
      text: "Absolutely wonderful experience! The flat was spotless, perfectly located, and the booking process was seamless. Highly recommend for anyone relocating to London.",
      image: "https://i.pravatar.cc/150?img=1",
      date: "January 2024"
    },
    {
      name: "James Thompson",
      location: "Manchester",
      rating: 5,
      text: "Professional service from start to finish. The property exceeded expectations and the team was incredibly responsive. Made my business relocation stress-free.",
      image: "https://i.pravatar.cc/150?img=3",
      date: "December 2023"
    },
    {
      name: "Emily Roberts",
      location: "Edinburgh",
      rating: 5,
      text: "Beautiful home in a fantastic location. Everything was as described and the check-in process was smooth. Will definitely use again for my next stay.",
      image: "https://i.pravatar.cc/150?img=5",
      date: "February 2024"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-white">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Star size={16} className="fill-brand-yellow text-brand-yellow" />
            <span>Trusted by Thousands</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-4">
            What Our Guests Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real people who've made our properties their home
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={48} className="text-brand-green" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-green/20"
                />
                <div>
                  <h4 className="font-semibold text-brand-green text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {review.location} • {review.date}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-12 sm:mt-16 bg-gradient-to-r from-brand-green to-brand-green-light rounded-2xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center text-white">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star size={24} className="fill-brand-yellow text-brand-yellow" />
                <span className="text-3xl sm:text-4xl font-bold">4.9</span>
              </div>
              <p className="text-sm sm:text-base text-white/90">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">2,500+</div>
              <p className="text-sm sm:text-base text-white/90">Happy Guests</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
              <p className="text-sm sm:text-base text-white/90">Would Recommend</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ReviewSection