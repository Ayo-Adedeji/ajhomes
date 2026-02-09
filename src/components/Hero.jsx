import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronDown,
  Menu,
  X,
  User,
  LogIn,
} from "lucide-react"
import video from "../assets/video.mp4"
import aj_logo from "../assets/aj_logo.png"
import { animations, transitions } from "../utils/animations"
import { useIsMobile, useIsTablet, usePrefersReducedMotion } from "../hooks/useMediaQuery"
import "./Hero.css"
import PremiumDatePicker from "./ui/PremiumDatePicker"

const Hero = () => {
  const videoRef = useRef(null)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const prefersReducedMotion = usePrefersReducedMotion()

  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const [filters, setFilters] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  })

  useEffect(() => {
    // Adjust animation timing based on device and preferences
    const contentDelay = prefersReducedMotion ? 100 : (isMobile ? 300 : 500)
    const searchDelay = prefersReducedMotion ? 200 : (isMobile ? 600 : 1200)
    
    setTimeout(() => setShowContent(true), contentDelay)
    setTimeout(() => setShowSearch(true), searchDelay)
  }, [isMobile, prefersReducedMotion])

  const toggleMute = () => {
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  const togglePlay = () => {
    if (paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    setPaused(!paused)
  }

  const handleSearch = () => {
    console.log("Search filters:", filters)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Responsive Video */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ 
          objectPosition: 'center center',
        }}
      />

      {/* Enhanced Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Responsive Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 text-white"
      >
        <motion.img 
          src={aj_logo} 
          alt="logo" 
          className="w-16 sm:w-18 md:w-20 lg:w-22"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        {/* Desktop Nav */}
        <motion.ul 
          className="hidden lg:flex gap-6 xl:gap-8 text-sm lg:text-base items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["Home", "Listings", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="cursor-pointer hover:text-brand-yellow transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
          
          {/* Desktop Login Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="ml-4 flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 px-3 lg:px-4 py-2 rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 group"
          >
            <LogIn size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium">Login</span>
          </motion.button>
        </motion.ul>

        {/* Tablet Nav (md to lg) */}
        <motion.ul 
          className="hidden md:flex lg:hidden gap-4 text-sm items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["Home", "Listings", "About"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="cursor-pointer hover:text-brand-yellow transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
          
          {/* Tablet Login Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="ml-2 flex items-center gap-1 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 px-3 py-2 rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 group"
          >
            <LogIn size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs font-medium">Login</span>
          </motion.button>
        </motion.ul>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden relative z-30 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="sm:w-7 sm:h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Responsive Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 sm:top-20 left-0 w-full bg-brand-green/95 backdrop-blur-lg z-20 md:hidden"
          >
            <motion.ul 
              className="flex flex-col items-center gap-4 sm:gap-6 py-6 sm:py-8 text-white px-4"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {["Home", "Listings", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  className="text-base sm:text-lg hover:text-brand-yellow transition-colors duration-300 cursor-pointer py-2"
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
              
              {/* Mobile Login */}
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 mt-2 sm:mt-4"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Login</span>
              </motion.button>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Hero Content - Properly positioned */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl text-white w-full pb-32 sm:pb-36 md:pb-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: showContent ? 0 : 50, opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block mb-2 sm:mb-3"
              >
                Feel at Home
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-brand-yellow"
              >
                Even When You're Away!
              </motion.span>
            </motion.h1>

            <motion.p 
              className="mt-5 sm:mt-5 md:mt-6 max-w-xl text-base sm:text-base md:text-lg text-white/90 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: showContent ? 0 : 30, opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Clean, Comfortable Spaces for Families, Relocators, Solo Travelers,
              and Everyone in Between.
            </motion.p>
          </motion.div>

          {/* Responsive Enhanced Search Bar with more gap */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ 
              y: showSearch ? 0 : 50, 
              opacity: showSearch ? 1 : 0,
              scale: showSearch ? 1 : 0.9
            }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 sm:mt-10 md:mt-12 max-w-4xl"
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-5 text-black border border-white/20"
              whileHover={{ scale: isMobile ? 1 : 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Compact Layout */}
              {isMobile ? (
                <div className="space-y-4">
                  {/* Row 1: Location */}
                  <motion.div 
                    className="flex gap-3 items-center group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={18} />
                    <div className="w-full min-w-0">
                      <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Location</p>
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        className="w-full bg-transparent outline-none text-sm font-medium placeholder-gray-400 focus:placeholder-gray-300 transition-colors duration-300 text-left"
                        value={filters.location}
                        onChange={(e) =>
                          setFilters({ ...filters, location: e.target.value })
                        }
                      />
                    </div>
                  </motion.div>

                  {/* Row 2: Dates */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      className="flex gap-2 items-center group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={16} />
                      <div className="w-full min-w-0">
                        <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Check in</p>
                        <input
                          type="date"
                          placeholder="Add date"
                          className="w-full bg-transparent outline-none text-xs font-medium focus:text-brand-green transition-colors duration-300 [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                          value={filters.checkIn}
                          onChange={(e) =>
                            setFilters({ ...filters, checkIn: e.target.value })
                          }
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex gap-2 items-center group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Calendar className="text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={16} />
                      <div className="w-full min-w-0">
                        <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Check out</p>
                        <input
                          type="date"
                          placeholder="Add date"
                          className="w-full bg-transparent outline-none text-xs font-medium focus:text-brand-green transition-colors duration-300 [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                          value={filters.checkOut}
                          onChange={(e) =>
                            setFilters({ ...filters, checkOut: e.target.value })
                          }
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Row 3: Guests and Search */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div 
                      className="col-span-1 flex gap-2 items-center group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={16} />
                      <div className="w-full min-w-0">
                        <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Guests</p>
                        <select
                          className="w-full bg-transparent outline-none text-xs font-medium focus:text-brand-green transition-colors duration-300"
                          value={filters.guests}
                          onChange={(e) =>
                            setFilters({ ...filters, guests: e.target.value })
                          }
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    <motion.button
                      onClick={handleSearch}
                      className="col-span-2 bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-xl flex items-center justify-center font-semibold shadow-lg relative overflow-hidden group h-12"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-yellow-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <motion.div
                        className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300"
                      >
                        <Search size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-semibold">Search</span>
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              ) : (
                /* Desktop/Tablet Layout */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                  {/* Location */}
                  <motion.div 
                    className="flex gap-3 items-start group sm:col-span-1 lg:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="mt-1 text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={18} />
                    <div className="w-full min-w-0">
                      <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Location</p>
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        className="w-full bg-transparent outline-none text-sm font-medium placeholder-gray-400 focus:placeholder-gray-300 transition-colors duration-300 truncate text-left"
                        value={filters.location}
                        onChange={(e) =>
                          setFilters({ ...filters, location: e.target.value })
                        }
                      />
                    </div>
                  </motion.div>

                  {/* Check in */}
                  <motion.div 
                    className="flex gap-3 items-start group sm:col-span-1 lg:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="mt-1 text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={18} />
                    <div className="w-full min-w-0">
                      <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Check in</p>
                      <input
                        type="date"
                        placeholder="Add date"
                        className="w-full bg-transparent outline-none text-sm font-medium focus:text-brand-green transition-colors duration-300 [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                        value={filters.checkIn}
                        onChange={(e) =>
                          setFilters({ ...filters, checkIn: e.target.value })
                        }
                      />
                    </div>
                  </motion.div>

                  {/* Check out */}
                  <motion.div 
                    className="flex gap-3 items-start group sm:col-span-1 lg:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="mt-1 text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={18} />
                    <div className="w-full min-w-0">
                      <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Check out</p>
                      <input
                        type="date"
                        placeholder="Add date"
                        className="w-full bg-transparent outline-none text-sm font-medium focus:text-brand-green transition-colors duration-300 [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                        value={filters.checkOut}
                        onChange={(e) =>
                          setFilters({ ...filters, checkOut: e.target.value })
                        }
                      />
                    </div>
                  </motion.div>

                  {/* Guests */}
                  <motion.div 
                    className="flex gap-3 items-start group sm:col-span-1 lg:col-span-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Users className="mt-1 text-brand-green group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0" size={18} />
                    <div className="w-full min-w-0">
                      <p className="text-xs font-semibold text-gray-600 mb-1 text-left">Guests</p>
                      <select
                        className="w-full bg-transparent outline-none text-sm font-medium focus:text-brand-green transition-colors duration-300"
                        value={filters.guests}
                        onChange={(e) =>
                          setFilters({ ...filters, guests: e.target.value })
                        }
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                          <option key={g} value={g}>
                            {g} guest{g > 1 && "s"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  {/* Enhanced Responsive Search Button */}
                  <motion.button
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-brand-green to-brand-green-light text-white rounded-xl flex items-center justify-center font-semibold shadow-lg relative overflow-hidden group sm:col-span-2 lg:col-span-1 h-12 sm:h-13"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-yellow-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.div
                      className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300"
                    >
                      <Search size={18} className="group-hover:rotate-12 transition-transform duration-300 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base font-semibold">Search</span>
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Enhanced Video Controls */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 flex gap-2 sm:gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.button
          onClick={toggleMute}
          className="bg-white/20 backdrop-blur-md border border-white/30 p-2 sm:p-3 rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 text-white group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: muted ? 0 : 360 }}
            transition={{ duration: 0.3 }}
          >
            {muted ? <VolumeX size={16} className="sm:w-5 sm:h-5" /> : <Volume2 size={16} className="sm:w-5 sm:h-5" />}
          </motion.div>
        </motion.button>

        <motion.button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-md border border-white/30 p-2 sm:p-3 rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 text-white group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ scale: paused ? 1.2 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {paused ? <Play size={16} className="sm:w-5 sm:h-5" /> : <Pause size={16} className="sm:w-5 sm:h-5" />}
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Responsive Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown size={20} className="sm:w-6 sm:h-6" />
          <span className="text-xs sm:text-sm mt-1 font-medium hidden sm:block">Scroll to explore</span>
          <span className="text-xs mt-1 font-medium sm:hidden">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
