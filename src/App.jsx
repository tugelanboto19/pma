import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CVSection from './components/CVSection'
import Tools from './components/Tools'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Cyber Grid Background */}
      <div className="bg-cyber-grid" style={{ position: 'fixed', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <CVSection />
        <Tools />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App