import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & No-Code', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-xl bg-black/70 border-b border-white/5 shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="font-heading font-bold text-xl tracking-tight"
          >
            <span className="text-gradient">JJ</span>
            <span className={`ml-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className={`text-sm font-heading font-medium transition-colors duration-200 hover:text-accent ${
                  darkMode ? 'text-textSecondary' : 'text-gray-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? 'text-textSecondary hover:text-white hover:bg-white/10'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2"
            >
              Hire Me
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-all ${
                darkMode ? 'text-textSecondary hover:text-white' : 'text-gray-600'
              }`}
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[60px] left-0 right-0 z-40 backdrop-blur-xl border-b ${
              darkMode
                ? 'bg-black/90 border-white/5'
                : 'bg-white/95 border-gray-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className={`text-base font-heading font-medium py-2 border-b transition-colors ${
                    darkMode
                      ? 'text-textSecondary border-white/5 hover:text-white'
                      : 'text-gray-600 border-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                className="btn-primary text-sm text-center mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
