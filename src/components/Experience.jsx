import { motion } from "framer-motion"
import { MapPin, Home, TrendingUp } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Experience = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  const locations = [
    {
      city: "London",
      properties: "150+",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
      popular: true,
    },
    {
      city: "Manchester",
      properties: "85+",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&q=80",
      popular: true,
    },
    {
      city: "Edinburgh",
      properties: "65+",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
      popular: false,
    },
    {
      city: "Birmingham",
      properties: "70+",
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=400&q=80",
      popular: false,
    },
    {
      city: "Bristol",
      properties: "55+",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&q=80",
      popular: false,
    },
    {
      city: "Leeds",
      properties: "45+",
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400&q=80",
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <MapPin size={16} />
            <span>Nationwide Coverage</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-4">
            Our Locations Across the UK
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium rental homes in the UK's most vibrant cities. From bustling London to historic Edinburgh, find your perfect home away from home.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-12"
        >
          {locations.map((location, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col items-center"
            >
              {/* Circular Image Container */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-brand-green rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Image Circle */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Popular Badge */}
                  {location.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="absolute top-2 right-2 bg-brand-yellow text-brand-green p-1.5 rounded-full shadow-lg"
                    >
                      <TrendingUp size={14} strokeWidth={3} />
                    </motion.div>
                  )}
                </motion.div>

                {/* Property Count Badge */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-brand-green/20"
                >
                  <div className="flex items-center gap-1">
                    <Home size={12} className="text-brand-green" />
                    <span className="text-xs font-bold text-brand-green">
                      {location.properties}
                    </span>
                  </div>
                </div>
              </div>

              {/* City Name */}
              <h3 className="text-lg sm:text-xl font-bold text-brand-green group-hover:text-brand-yellow transition-colors duration-300">
                {location.city}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-brand-green mb-2">470+</div>
            <div className="text-sm sm:text-base text-gray-600">Properties Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-brand-green mb-2">6</div>
            <div className="text-sm sm:text-base text-gray-600">Major Cities</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-brand-green mb-2">98%</div>
            <div className="text-sm sm:text-base text-gray-600">Guest Satisfaction</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-600 mb-6">
            Don't see your city? We're expanding rapidly across the UK.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 shadow-lg"
          >
            Request a Location
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
