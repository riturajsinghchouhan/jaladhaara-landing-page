import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import StatsBar from './components/StatsBar'
import CtaTestimonial from './components/CtaTestimonial'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <div id="how-it-works">
          <Solution />
        </div>
        <StatsBar />
        <CtaTestimonial />
      </main>
      <Footer />
    </div>
  )
}
