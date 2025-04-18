import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Hero />
      <About />
      <Projects />
      <Certification />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
