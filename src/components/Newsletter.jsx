import { motion } from "framer-motion"
import { Mail, Gift, Bell, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { useState } from "react"

const Newsletter = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  })

  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    // Add your newsletter signup logic here
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side - Image */}
          <motion.div 
            className="relative h-64 sm:h-80 lg:h-full min-h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
              alt="Beautiful rental home"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 to-transparent" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isIntersecting ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-6 left-6 bg-brand-yellow text-brand-green px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2"
            >
              <Gift size={16} />
              <span>Exclusive Deals</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="p-8 sm:p-10 lg:p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isIntersecting ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Bell size={16} />
              <span>Stay Updated</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-green mb-4 leading-tight">
              Get Special Offers & More from AJ & J Homes
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Subscribe to see secret deals and prices drop the moment you sign up! Be the first to know about exclusive offers and new properties.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                "Exclusive early access to new properties",
                "Special discounts for subscribers only",
                "Weekly property recommendations",
                "No spam, unsubscribe anytime"
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Email Form */}
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-green outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.form>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from AJ & J Homes.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Newsletter