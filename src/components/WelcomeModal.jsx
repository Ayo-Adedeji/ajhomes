import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, Briefcase, Users, Sparkles } from 'lucide-react'

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setIsVisible(false)
  }

  const cards = [
    {
      icon: Home,
      title: "Guaranteed Rent for Landlords & Letting Agents",
      subtitle: "Own or manage property? Click here to learn how we guarantee your rent every month.",
      gradient: "from-brand-green via-brand-green-dark to-emerald-800",
      onClick: () => {
        console.log("Landlord/Letting Agent clicked")
        closeModal()
      }
    },
    {
      icon: Briefcase,
      title: "Book Direct and Get Discounts",
      subtitle: "Contractors accommodation. Are you booking stays for work? Get discounts when you book directly with us. We should make your stay memorable.",
      gradient: "from-brand-yellow via-amber-400 to-orange-500",
      onClick: () => {
        console.log("Contractor accommodation clicked")
        closeModal()
      }
    },
    {
      icon: Users,
      title: "General Guest Stay",
      subtitle: "Visiting for leisure or life changes? Discover our flexible service rooms.",
      gradient: "from-brand-green-dark via-teal-600 to-cyan-700",
      onClick: () => {
        console.log("General guest clicked")
        closeModal()
      }
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={closeModal}
        >
          {/* Decorative background elements - toned down */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-brand-yellow/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-white/3 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative bg-white sm:bg-white/90 sm:backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 sm:border-white/40 w-full max-w-sm sm:max-w-7xl h-fit max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 sm:bg-gray-100/80 hover:bg-gray-200 sm:hover:bg-gray-200/80 sm:backdrop-blur-sm border border-gray-200 sm:border-gray-200/50 flex items-center justify-center transition-all duration-300 z-10 group"
            >
              <X size={18} className="sm:w-5 sm:h-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header */}
            <div className="text-center pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-8 relative">
              {/* Sparkle decoration */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-gradient-to-br from-brand-yellow to-amber-400 rounded-full shadow-lg"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-green-dark via-brand-green to-teal-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                  Welcome to AJ & J Homes
                </h2>
                <p className="text-sm sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
                  Let's help you navigate our website and find exactly what you're looking for
                </p>
              </motion.div>
            </div>

            {/* Cards */}
            <div className="px-4 sm:px-8 pb-4 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                    onClick={card.onClick}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-white sm:bg-white/70 sm:backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full shadow-lg border border-gray-200 sm:border-gray-200/50 hover:bg-white sm:hover:bg-white/80 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden min-h-[240px] sm:min-h-[280px] flex flex-col">
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <card.icon size={20} className="sm:w-7 sm:h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative flex-1 flex flex-col">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-brand-green-dark transition-colors duration-300 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-1 text-xs sm:text-sm">
                          {card.subtitle}
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm sm:text-base text-brand-green font-semibold group-hover:text-brand-green-dark transition-colors duration-300">
                            Learn More
                          </span>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-green/10 group-hover:bg-brand-green group-hover:shadow-lg flex items-center justify-center transition-all duration-300">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-brand-yellow/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skip Button */}
            <div className="text-center pb-4 sm:pb-6">
              <button
                onClick={closeModal}
                className="text-sm sm:text-base text-gray-500 hover:text-brand-green-dark font-medium transition-colors duration-300 px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 sm:hover:bg-gray-100/50"
              >
                Skip and continue to homepage
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal