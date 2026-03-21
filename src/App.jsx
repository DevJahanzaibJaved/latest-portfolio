import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Companies from './components/Companies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <div className={darkMode ? 'bg-bg text-textPrimary' : 'bg-gray-50 text-gray-900'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Expertise darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <AISection darkMode={darkMode} />
      <Companies darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <WhatsAppButton />
    </div>
  )
}
