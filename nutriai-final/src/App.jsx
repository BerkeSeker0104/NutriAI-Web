// src/App.jsx

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks'
import Experts from './components/Experts' 
import CtaForm from './components/CtaForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Experts /> {/* Yeni bölümü buraya ekledik */}
        <CtaForm />
      </main>
      <Footer />
    </div>
  )
}

export default App