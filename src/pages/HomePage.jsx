import { Home } from 'lucide-react'
import React from 'react'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import FeaturedHomes from '../components/FeaturedHomes'
import Audience from '../components/Audience'
import Experience from '../components/Experience'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Trust/>
        <FeaturedHomes/>
        <Audience/>
        <Experience/>
        <HowItWorks/>
        <CTA/>
    </div>
  )
}

export default HomePage