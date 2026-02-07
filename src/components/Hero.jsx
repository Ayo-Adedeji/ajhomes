import { useRef, useState, useEffect } from "react"
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
} from "lucide-react"
import video from "../assets/video.mp4"
import aj_logo from "../assets/aj_logo.png"

const Hero = () => {
  const videoRef = useRef(null)

  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [filters, setFilters] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  })

  useEffect(() => {
    setTimeout(() => setShowSearch(true), 300)
  }, [])

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
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 text-white">
        <img src={aj_logo} alt="logo" className="w-20" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm">
          {["Home", "Listings", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-brand-yellow transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-green/95 backdrop-blur-lg z-10 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-white">
            {["Home", "Listings", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="text-lg hover:text-brand-yellow"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-12 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Feel at Home <br />
            <span className="text-brand-yellow">
              Even When You're Away!
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-white/90">
            Clean, Comfortable Spaces for Families, Relocators, Solo Travelers,
            and Everyone in Between.
          </p>

          {/* Search Bar */}
          <div
            className={`mt-10 transition-all duration-700 ease-out ${
              showSearch
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
              
              {/* Location */}
              <div className="flex gap-3 items-start">
                <MapPin className="mt-1 text-brand-green" size={18} />
                <div className="w-full">
                  <p className="text-xs font-semibold">Location</p>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full bg-transparent outline-none text-sm"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Check in */}
              <div className="flex gap-3 items-start">
                <Calendar className="mt-1 text-brand-green" size={18} />
                <div className="w-full">
                  <p className="text-xs font-semibold">Check in</p>
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-sm"
                    value={filters.checkIn}
                    onChange={(e) =>
                      setFilters({ ...filters, checkIn: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Check out */}
              <div className="flex gap-3 items-start">
                <Calendar className="mt-1 text-brand-green" size={18} />
                <div className="w-full">
                  <p className="text-xs font-semibold">Check out</p>
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-sm"
                    value={filters.checkOut}
                    onChange={(e) =>
                      setFilters({ ...filters, checkOut: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex gap-3 items-start">
                <Users className="mt-1 text-brand-green" size={18} />
                <div className="w-full">
                  <p className="text-xs font-semibold">Guests</p>
                  <select
                    className="w-full bg-transparent outline-none text-sm"
                    value={filters.guests}
                    onChange={(e) =>
                      setFilters({ ...filters, guests: e.target.value })
                    }
                  >
                    {[1, 2, 3, 4, 5].map((g) => (
                      <option key={g} value={g}>
                        {g} guest{g > 1 && "s"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-brand-green text-white rounded-xl flex items-center justify-center hover:bg-brand-yellow hover:text-black transition"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-3">
        <button
          onClick={toggleMute}
          className="bg-black/60 p-2 rounded-full hover:bg-black transition"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={togglePlay}
          className="bg-black/60 p-2 rounded-full hover:bg-black transition"
        >
          {paused ? <Play size={18} /> : <Pause size={18} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 animate-bounce">
        <ChevronDown size={24} />
        <span className="text-xs mt-1">Scroll</span>
      </div>
    </section>
  )
}

export default Hero
