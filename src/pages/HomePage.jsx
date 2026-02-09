import Hero from '../components/Hero'
import Trust from '../components/Trust'
import FeaturedHomes from '../components/FeaturedHomes'
import Audience from '../components/Audience'
import Experience from '../components/Experience'
import HowItWorks from '../components/HowItWorks'
import ReviewSection from '../components/ReviewSection'
import Newsletter from '../components/Newsletter'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WelcomeModal from '../components/WelcomeModal'
import FloatingButtons from '../components/FloatingButtons'

const HomePage = () => {
  return (
    <div>
        <WelcomeModal />
        <FloatingButtons />
        <Hero/>
        <Trust/>
        <FeaturedHomes/>
        <Audience/>
        <Experience/>
        <HowItWorks/>
        <ReviewSection/>
        <Newsletter/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default HomePage