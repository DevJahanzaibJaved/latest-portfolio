import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & No-Code', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer({ darkMode }) {
  const borderColor = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const textColor = darkMode ? 'text-textSecondary' : 'text-gray-500'
  const bg = darkMode ? 'bg-[#0A0A0A]' : 'bg-gray-50'

  return (
    <footer className={`${bg} py-12 px-6 border-t`} style={{ borderColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-xl mb-1">
              <span className="text-gradient">JJ</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}> Dev</span>
            </div>
            <p className={`text-xs font-body ${textColor}`}>
              Senior Full-Stack Developer
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                className={`text-sm font-heading font-medium transition-colors hover:text-accent ${textColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com' },
              { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/923244966088' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:text-accent ${textColor}`}
                style={{ background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: `1px solid ${borderColor}` }}>
          <p className={`text-xs font-body ${textColor}`}>
            © {new Date().getFullYear()} Jahanzaib Javed. Built with React + Vite + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
