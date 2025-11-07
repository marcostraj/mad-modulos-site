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
import CarrinhoLateral from './components/carrinhoLateral'

function App() {

  return (
    <>
      <Navbar />
      <CarrinhoLateral />
      <Hero />
      <VideoSection />
      <WhySection />
      <section id='carrosselId'>
        <CarrosselModulos />
      </section>
      <BenefitsSection />
      <section id='combinationsId'>
        <CombinationsSection />
      </section>
      <CombinacoesSection />
      <GallerySection />
      <section id='projeto3dId'>
        <Projeto3DSection />
      </section>
      <Footer />
    </>
  )
}

export default App
