import { ShieldCheck, Sparkles, MapPin, Headphones } from "lucide-react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Trust = () => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
  })

  const items = [
    {
      icon: ShieldCheck,
      title: "Verified Homes",
      text: "Every property is inspected and maintained.",
    },
    {
      icon: Sparkles,
      title: "Spotless Spaces",
      text: "Professionally cleaned for every stay.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      text: "Live close to what matters most.",
    },
    {
      icon: Headphones,
      title: "Local Support",
      text: "Help when you need it, anytime.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
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
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-green mb-3">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality and service
          </p>
        </motion.div>

        {/* Trust Items Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon Container with Animation */}
              <motion.div
                className="relative inline-block mb-5"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-xl group-hover:bg-brand-yellow/30 transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-brand-green to-brand-green-light p-4 rounded-full">
                  <item.icon
                    size={32}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-bold text-lg sm:text-xl text-brand-green mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.text}
              </p>

              {/* Decorative Element */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Trust
