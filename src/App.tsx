import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import VideoSection from './components/videoSection'
import WhySection from './components/whySection'
import BenefitsSection from './components/benefitsSection'
import CombinationsSection from './components/combinationsSection'
import CombinacoesSection from './components/combinacoesSection'
import GallerySection from './components/gallerySection'
import Projeto3DSection from './components/projeto3DSection'
import Footer from './components/footer'
import CarrosselModulos from './components/carrosselModulosSection' 

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <WhySection />
      <CarrosselModulos />
      <BenefitsSection />
      <CombinationsSection />
      <CombinacoesSection />
      <GallerySection />
      <Projeto3DSection />
      <Footer />
    </>
  )
}

export default App
