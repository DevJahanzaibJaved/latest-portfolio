import { motion } from 'framer-motion'
import { FiLayers, FiShoppingCart, FiZap, FiServer, FiBookOpen, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    number: '01',
    icon: FiLayers,
    title: 'Web Development',
    desc: 'Custom full-stack web applications built with Ruby on Rails and the MERN stack. Scalable, performant, and production-ready from day one.',
    tags: ['Rails', 'React', 'Node.js', 'PostgreSQL'],
    color: '#6C63FF',
    lightColor: 'rgba(108,99,255,0.12)',
    borderColor: 'rgba(108,99,255,0.35)',
    glowColor: 'rgba(108,99,255,0.18)',
  },
  {
    number: '02',
    icon: FiShoppingCart,
    title: 'Ecommerce Solutions',
    desc: 'High-converting Shopify stores and WooCommerce sites. Custom themes, apps, payment integrations, and conversion optimisation.',
    tags: ['Shopify', 'WordPress', 'WooCommerce', 'Liquid'],
    color: '#00D4FF',
    lightColor: 'rgba(0,212,255,0.12)',
    borderColor: 'rgba(0,212,255,0.35)',
    glowColor: 'rgba(0,212,255,0.18)',
  },
  {
    number: '03',
    icon: FiZap,
    title: 'AI-Powered Development',
    desc: 'Building intelligent applications using OpenAI, Claude, and automation tools. Chatbots, AI workflows, and smart features that save time and cost.',
    tags: ['OpenAI', 'Claude', 'LangChain', 'Zapier'],
    color: '#F97316',
    lightColor: 'rgba(249,115,22,0.12)',
    borderColor: 'rgba(249,115,22,0.35)',
    glowColor: 'rgba(249,115,22,0.18)',
  },
  {
    number: '04',
    icon: FiServer,
    title: 'Deployments & DevOps',
    desc: 'End-to-end cloud deployments on AWS, Heroku, and VPS. Docker containerisation, CI/CD pipelines, and ongoing server management.',
    tags: ['AWS', 'Docker', 'Heroku', 'GitHub Actions'],
    color: '#10B981',
    lightColor: 'rgba(16,185,129,0.12)',
    borderColor: 'rgba(16,185,129,0.35)',
    glowColor: 'rgba(16,185,129,0.18)',
  },
  {
    number: '05',
    icon: FiBookOpen,
    title: 'Tutoring & Mentorship',
    desc: 'One-on-one coding sessions for Ruby on Rails, MERN Stack, and general programming. From absolute beginners to advanced developers.',
    tags: ['Rails', 'MERN', 'Beginner Friendly', '1-on-1'],
    color: '#EC4899',
    lightColor: 'rgba(236,72,153,0.12)',
    borderColor: 'rgba(236,72,153,0.35)',
    glowColor: 'rgba(236,72,153,0.18)',
  },
]

function ServiceCard({ service, index, darkMode }) {
  const Icon = service.icon
  const headColor = darkMode ? '#FFFFFF' : '#0A0A0A'
  const cardBg = darkMode ? 'rgba(18,18,18,0.85)' : 'rgba(255,255,255,0.95)'
  const defaultBorder = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const dividerColor = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{
        background: cardBg,
        border: `1px solid ${defaultBorder}`,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${service.borderColor}`
        e.currentTarget.style.boxShadow = `0 20px 60px ${service.glowColor}, 0 0 0 1px ${service.borderColor}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${defaultBorder}`
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent stripe */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${service.color}, ${service.color}44)`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        ref={(el) => {
          if (!el) return
          const parent = el.closest('.group')
          if (!parent) return
          const show = () => { el.style.opacity = '1' }
          const hide = () => { el.style.opacity = '0' }
          parent.addEventListener('mouseenter', show)
          parent.addEventListener('mouseleave', hide)
        }}
      />

      <div className="relative p-7 flex flex-col flex-1">
        {/* Large background number */}
        <span
          className="absolute top-4 right-5 font-heading font-black select-none pointer-events-none"
          style={{
            fontSize: '5.5rem',
            lineHeight: 1,
            color: service.color,
            opacity: 0.06,
            letterSpacing: '-0.04em',
          }}
        >
          {service.number}
        </span>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
          style={{
            background: service.lightColor,
            border: `1px solid ${service.borderColor}`,
            color: service.color,
            transition: 'all 0.3s ease',
          }}
        >
          <Icon size={24} strokeWidth={1.8} />
        </div>

        {/* Number label */}
        <span
          className="font-heading font-bold text-xs uppercase tracking-widest mb-2"
          style={{ color: service.color, opacity: 0.7 }}
        >
          {service.number}
        </span>

        {/* Title */}
        <h3
          className="font-heading font-bold text-xl mb-3 transition-colors duration-200 group-hover:text-accent"
          style={{ color: headColor }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm leading-relaxed mb-5 flex-1" style={{ color: darkMode ? '#808080' : '#666' }}>
          {service.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-heading font-semibold"
              style={{
                background: service.lightColor,
                border: `1px solid ${service.borderColor}`,
                color: service.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="pt-4 flex items-center justify-between"
          style={{ borderTop: `1px solid ${dividerColor}` }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold transition-all duration-200 group-hover:gap-2.5"
            style={{ color: service.color }}
          >
            Get in touch <FiArrowRight size={13} />
          </a>

          {/* Decorative dot */}
          <div
            className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: service.color }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'

  return (
    <section id="services" className={`py-24 px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">What I Offer</p>
          <h2 className={`section-heading ${headColor}`}>Services</h2>
          <p className="section-subheading mx-auto text-center">
            From idea to launch — I cover every layer of your product.
          </p>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        {/* Top 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom 2 cards — centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[calc(66.666%+12px)] mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 3} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  )
}
