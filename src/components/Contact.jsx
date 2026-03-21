import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const serviceOptions = [
  'Web Development',
  'MERN Stack App',
  'Ruby on Rails App',
  'Shopify Store',
  'AI Integration',
  'Tutoring',
  'Deployment',
]

export default function Contact({ darkMode }) {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const headColor = darkMode ? 'text-white' : 'text-gray-900'
  const inputBg = darkMode ? 'bg-[#1A1A1A] border-[#2A2A2A] text-white' : 'bg-white border-gray-200 text-gray-900'
  const labelColor = darkMode ? 'text-textSecondary' : 'text-gray-600'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
      )
      setStatus('success')
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`py-24 px-6 ${darkMode ? 'bg-[#111111]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Let&apos;s Build Together</p>
          <h2 className={`section-heading ${headColor}`}>Get In Touch</h2>
          <p className="section-subheading mx-auto text-center">
            Have a project in mind? Let&apos;s talk about how I can help you ship it.
          </p>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-heading font-semibold text-sm">Available for Freelance Projects</span>
            </div>

            <p className={`font-body text-base leading-relaxed ${darkMode ? 'text-textSecondary' : 'text-gray-600'}`}>
              I&apos;m currently accepting new clients and projects. Whether you need a full-stack app, a Shopify store,
              AI integration, or deployment help — I&apos;m here to help.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+923244966088"
                className={`flex items-center gap-4 p-4 rounded-xl transition-all glow-border glass-card group`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(108,99,255,0.15)' }}>
                  <FiPhone className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-xs font-body text-textSecondary">Phone / WhatsApp</p>
                  <p className={`font-heading font-semibold text-sm group-hover:text-accent transition-colors ${headColor}`}>
                    +92 324 4966088
                  </p>
                </div>
              </a>

              <a
                href="mailto:Jahanzaibjaved44@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all glow-border glass-card group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,212,255,0.15)' }}>
                  <FiMail style={{ color: '#00D4FF' }} size={18} />
                </div>
                <div>
                  <p className="text-xs font-body text-textSecondary">Email</p>
                  <p className={`font-heading font-semibold text-sm group-hover:text-accentAlt transition-colors ${headColor}`}>
                    Jahanzaibjaved44@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com', label: 'GitHub', color: '#6C63FF' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0077B5' },
                { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/923244966088', label: 'WhatsApp', color: '#25D366' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    color: darkMode ? '#A0A0A0' : '#666',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${social.color}20`
                    e.currentTarget.style.borderColor = `${social.color}60`
                    e.currentTarget.style.color = social.color
                    e.currentTarget.style.boxShadow = `0 0 15px ${social.color}30`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                    e.currentTarget.style.borderColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
                    e.currentTarget.style.color = darkMode ? '#A0A0A0' : '#666'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl glow-border glass-card"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={`text-xs font-heading font-semibold uppercase tracking-wider mb-2 block ${labelColor}`}>
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body outline-none transition-all duration-200 focus:border-accent ${inputBg}`}
                    style={{ background: darkMode ? 'rgba(26,26,26,0.8)' : undefined }}
                  />
                </div>
                <div>
                  <label className={`text-xs font-heading font-semibold uppercase tracking-wider mb-2 block ${labelColor}`}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body outline-none transition-all duration-200 focus:border-accent ${inputBg}`}
                    style={{ background: darkMode ? 'rgba(26,26,26,0.8)' : undefined }}
                  />
                </div>
              </div>

              <div>
                <label className={`text-xs font-heading font-semibold uppercase tracking-wider mb-2 block ${labelColor}`}>
                  Service
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-body outline-none transition-all duration-200 focus:border-accent ${inputBg}`}
                  style={{ background: darkMode ? 'rgba(26,26,26,0.8)' : undefined }}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`text-xs font-heading font-semibold uppercase tracking-wider mb-2 block ${labelColor}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-body outline-none transition-all duration-200 focus:border-accent resize-none ${inputBg}`}
                  style={{ background: darkMode ? 'rgba(26,26,26,0.8)' : undefined }}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-body"
                >
                  <FiCheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-body"
                >
                  <FiAlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
