import { motion } from "framer-motion"
import { Search, FileCheck, Key, Home, MessageCircle, CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const steps = [
  { 
    step: "01", 
    icon: Search,
    title: "Browse & Search", 
    text: "Explore our curated collection of verified properties across the UK. Filter by location, price, and amenities to find your perfect match.",
    color: "from-blue-500 to-blue-600"
  },
  { 
    step: "02", 
    icon: MessageCircle,
    title: "Enquire & View", 
    text: "Contact our friendly team to arrange a viewing. Ask questions and get all the details you need to make an informed decision.",
    color: "from-purple-500 to-purple-600"
  },
  { 
    step: "03", 
    icon: FileCheck,
    title: "Book & Verify", 
    text: "Complete a simple online booking process. We'll verify your details and send you a secure tenancy agreement to review and sign.",
    color: "from-green-500 to-green-600"
  },
  { 
    step: "04", 
    icon: Key,
    title: "Move In", 
    text: "Collect your keys and move into your fully furnished home. Our team ensures everything is ready for your arrival.",
    color: "from-orange-500 to-orange-600"
  },
]

const HowItWorks = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <CheckCircle size={16} />
            <span>Simple Process</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From browsing to moving in, we've made renting a home as simple and stress-free as possible
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-2xl font-bold text-brand-green">
                  {step.step}
                </span>
              </div>

              {/* Icon Container */}
              <div className="mb-6 mt-4">
                <div className="relative inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className={`relative bg-gradient-to-br ${step.color} p-4 rounded-2xl shadow-lg`}>
                    <step.icon
                      size={32}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.text}
              </p>

              {/* Connecting Line (except last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-brand-green to-transparent" />
              )}

              {/* Bottom Accent */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} rounded-b-3xl`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Card */}
        <motion.div 
          className="bg-gradient-to-br from-brand-green to-brand-green-light rounded-3xl p-8 sm:p-10 md:p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Home size={48} className="mx-auto mb-6 text-brand-yellow" strokeWidth={1.5} />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to guide you through every step. Start your journey today and experience hassle-free renting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-brand-green px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg"
            >
              Start Searching
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-green transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HowItWorks
