import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Trust from './components/Trust'
import HowItWorks from './components/HowItWorks' // 1. Yeni bileşeni import et

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <HowItWorks /> {/* 2. Yeni bileşeni buraya ekle */}
      </main>
    </div>
  )
}

export default App