import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks'
import CtaForm from './components/CtaForm'
import Footer from './components/Footer' // 1. Yeni bileşeni import et

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <CtaForm />
      </main>
      <Footer /> {/* 2. Yeni bileşeni <main> etiketinden sonra ekle */}
    </div>
  )
}

export default App