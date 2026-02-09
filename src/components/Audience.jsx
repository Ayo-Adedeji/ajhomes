import { Users, Plane, User, Briefcase, Home, Heart, Building2, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Audience = () => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
  })

  const groups = [
    { 
      icon: Users, 
      title: "Families", 
      text: "Spacious homes with gardens, perfect for creating lasting memories together.",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Briefcase, 
      title: "Business Professionals", 
      text: "Modern workspaces with high-speed WiFi, ideal for remote working.",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: GraduationCap, 
      title: "Students", 
      text: "Affordable, comfortable accommodation near universities and colleges.",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: Plane, 
      title: "Relocators", 
      text: "Fully furnished homes with flexible terms for smooth transitions.",
      color: "from-orange-500 to-orange-600"
    },
    { 
      icon: Heart, 
      title: "Couples", 
      text: "Romantic retreats and cosy apartments for two in charming locations.",
      color: "from-pink-500 to-pink-600"
    },
    { 
      icon: Building2, 
      title: "Corporate Housing", 
      text: "Premium serviced apartments for business travellers and executives.",
      color: "from-indigo-500 to-indigo-600"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Premium Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-dark to-brand-green-light">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 to-transparent" />
      </div>

      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto"
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
            className="inline-block mb-4"
          >
            <span className="bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-brand-yellow/30">
              Perfect for Everyone
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Homes Designed for Your Lifestyle
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Whether you're settling in for a few months or just passing through, we have the perfect space tailored to your needs
          </p>
        </motion.div>

        {/* Audience Groups Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {groups.map((group, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon Container with Gradient */}
              <motion.div
                className="relative inline-block mb-5"
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className={`relative bg-gradient-to-br ${group.color} p-4 rounded-2xl shadow-lg`}>
                  <group.icon
                    size={32}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-bold text-xl sm:text-2xl text-brand-green mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                {group.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {group.text}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-yellow/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Bottom Accent Line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${group.color} rounded-b-2xl`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white/90 text-base sm:text-lg mb-6">
            Can't find what you're looking for? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-yellow text-brand-green px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Audience
