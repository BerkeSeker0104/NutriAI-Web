import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Trust from './components/Trust'

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Trust />
      </main>
    </div>
  )
}

export default App