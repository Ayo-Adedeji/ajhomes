import { motion } from "framer-motion"
import { MapPin, Star, Heart, Bed, Bath, Users } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { useState } from "react"

const homes = [
  {
    id: 1,
    name: "Elegant Kensington Apartment",
    location: "Kensington, London",
    price: "£185",
    period: "night",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    beds: 2,
    baths: 2,
    guests: 4,
    featured: true,
  },
  {
    id: 2,
    name: "Modern Manchester Loft",
    location: "City Centre, Manchester",
    price: "£125",
    period: "night",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    beds: 1,
    baths: 1,
    guests: 2,
    featured: false,
  },
  {
    id: 3,
    name: "Cosy Edinburgh Townhouse",
    location: "Old Town, Edinburgh",
    price: "£145",
    period: "night",
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    beds: 3,
    baths: 2,
    guests: 6,
    featured: true,
  },
]

const FeaturedHomes = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
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
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-3 sm:mb-4">
            Featured Properties
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium homes across the UK
          </p>
        </motion.div>

        {/* Property Cards Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {homes.map((home) => (
            <motion.div
              key={home.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <motion.img
                  src={home.image}
                  alt={home.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {home.featured && (
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 left-4 bg-brand-yellow text-brand-green px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                  >
                    Featured
                  </motion.div>
                )}

                {/* Favorite Button */}
                <motion.button
                  onClick={() => toggleFavorite(home.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart
                    size={20}
                    className={`transition-all duration-300 ${
                      favorites.includes(home.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </motion.button>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={14} className="fill-brand-yellow text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-green">
                    {home.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({home.reviews})
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Title & Location */}
                <h3 className="font-bold text-lg sm:text-xl text-brand-green mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                  {home.name}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-600 mb-4">
                  <MapPin size={16} className="text-brand-green" />
                  <p className="text-sm">{home.location}</p>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bed size={16} className="text-brand-green" />
                    <span className="text-sm">{home.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bath size={16} className="text-brand-green" />
                    <span className="text-sm">{home.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Users size={16} className="text-brand-green" />
                    <span className="text-sm">{home.guests}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-brand-green">
                      {home.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      / {home.period}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-green text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 shadow-md"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Bottom Accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-brand-green text-brand-green px-8 py-3 rounded-full font-semibold hover:bg-brand-green hover:text-white transition-all duration-300 shadow-md"
          >
            View All Properties
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedHomes
