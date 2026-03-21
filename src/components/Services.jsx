import { motion } from 'framer-motion'
import { FiGlobe, FiShoppingCart, FiCpu, FiCloud, FiBookOpen } from 'react-icons/fi'

const services = [
  {
    icon: <FiGlobe size={28} />,
    title: 'Web Development',
    desc: 'Custom full-stack web applications built with Ruby on Rails and the MERN stack. Scalable, performant, and production-ready from day one.',
    tags: ['Rails', 'React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-purple-500/20 to-indigo-500/20',
    border: 'rgba(108,99,255,0.4)',
    glow: 'rgba(108,99,255,0.2)',
  },
  {
    icon: <FiShoppingCart size={28} />,
    title: 'Ecommerce Solutions',
    desc: 'High-converting Shopify stores and WooCommerce sites. Custom themes, apps, payment integrations, and conversion optimisation.',
    tags: ['Shopify', 'WordPress', 'WooCommerce', 'Liquid'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'rgba(0,212,255,0.4)',
    glow: 'rgba(0,212,255,0.2)',
  },
  {
    icon: <FiCpu size={28} />,
    title: 'AI-Powered Development',
    desc: 'Building intelligent applications using OpenAI, Claude, and automation tools. Chatbots, AI workflows, and smart features that save time and cost.',
    tags: ['OpenAI', 'Claude', 'LangChain', 'Zapier'],
    gradient: 'from-orange-500/20 to-yellow-500/20',
    border: 'rgba(255,165,0,0.4)',
    glow: 'rgba(255,165,0,0.2)',
  },
  {
    icon: <FiCloud size={28} />,
    title: 'Deployments & DevOps',
    desc: 'End-to-end cloud deployments on AWS, Heroku, and VPS. Docker containerisation, CI/CD pipelines, and ongoing server management.',
    tags: ['AWS', 'Docker', 'Heroku', 'GitHub Actions'],
    gradient: 'from-green-500/20 to-teal-500/20',
    border: 'rgba(16,185,129,0.4)',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: <FiBookOpen size={28} />,
    title: 'Tutoring & Mentorship',
    desc: 'One-on-one coding sessions for Ruby on Rails, MERN Stack, and general programming. From absolute beginners to advanced developers.',
    tags: ['Rails', 'MERN', 'Beginner Friendly', '1-on-1'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'rgba(244,63,94,0.4)',
    glow: 'rgba(244,63,94,0.2)',
  },
]

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

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
              style={{
                background: darkMode ? 'rgba(26,26,26,0.6)' : 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1px solid ${service.border}`
                e.currentTarget.style.boxShadow = `0 0 30px ${service.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = darkMode
                  ? '1px solid rgba(255,255,255,0.06)'
                  : '1px solid rgba(0,0,0,0.06)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* BG gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `rgba(108,99,255,0.15)`, color: '#6C63FF' }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`font-heading font-bold text-xl mb-3 group-hover:text-accent transition-colors ${headColor}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-textSecondary font-body text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
