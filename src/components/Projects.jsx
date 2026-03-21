import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    name: 'ForceBrands',
    type: 'Web App',
    category: 'Rails',
    desc: 'Full-stack talent recruitment marketplace for the CPG industry connecting brands with top-tier professionals.',
    tech: ['Ruby on Rails', 'JavaScript', 'jQuery', 'Sass'],
    link: 'https://forcebrands.com/',
    color: '#6C63FF',
    pattern: 'dots',
  },
  {
    name: 'FlipDeals',
    type: 'Ecommerce',
    category: ['MERN', 'Ecommerce'],
    desc: 'Dynamic online deals & shopping platform with real-time inventory, user auth, and seamless checkout.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://flipdeals.com/',
    color: '#00D4FF',
    pattern: 'grid',
  },
  {
    name: 'Kulta Properties',
    type: 'Real Estate',
    category: ['Rails', 'Deployments'],
    desc: 'Finnish real estate platform with advanced property listings, search filters, and agent dashboards.',
    tech: ['Ruby on Rails', 'JavaScript', 'jQuery', 'PostgreSQL'],
    link: 'https://kultaproperties.com/',
    color: '#F59E0B',
    pattern: 'diagonal',
  },
  {
    name: 'FromThePage',
    type: 'Web App',
    category: 'Rails',
    desc: 'Collaborative transcription platform enabling communities to transcribe and index historical documents.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
    link: 'https://fromthepage.com/',
    color: '#8B5CF6',
    pattern: 'circles',
  },
  {
    name: 'Dear Brightly',
    type: 'SaaS / Ecommerce',
    category: 'MERN',
    desc: 'Custom retinoid skincare subscription platform with AI-driven product recommendations and telemedicine integrations.',
    tech: ['React', 'Rails', 'Microservices', 'Stripe'],
    link: 'https://www.dearbrightly.com/',
    color: '#EC4899',
    pattern: 'dots',
  },
  {
    name: 'Doctors Galaxy',
    type: 'HealthTech',
    category: 'MERN',
    desc: 'Healthcare ecosystem connecting patients with medical professionals for appointments, records, and consultations.',
    tech: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
    link: 'https://www.doctorsgalaxy.com/',
    color: '#10B981',
    pattern: 'grid',
  },
  {
    name: 'WellFunded',
    type: 'FinTech / SaaS',
    category: 'Rails',
    desc: 'Philanthropy and Donor Advised Fund platform for Canadian nonprofits with automated compliance reporting.',
    tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'Stripe'],
    link: 'https://www.wellfunded.io/',
    color: '#3B82F6',
    pattern: 'diagonal',
  },
  {
    name: 'Catalister',
    type: 'AI Tool',
    category: 'AI',
    desc: 'AI-powered product research and listing expert that automates marketplace content generation.',
    tech: ['Node.js', 'OpenAI API', 'React', 'MongoDB'],
    link: 'https://catalister.com/',
    color: '#F97316',
    pattern: 'circles',
  },
  {
    name: 'BooqX',
    type: 'SaaS',
    category: 'Rails',
    desc: 'Appointment automation system for German service businesses with smart scheduling and calendar sync.',
    tech: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Stripe'],
    link: 'https://booqx.de/',
    color: '#6366F1',
    pattern: 'dots',
  },
  {
    name: 'Diyas Direct',
    type: 'Shopify',
    category: ['Shopify', 'Ecommerce', 'Deployments'],
    desc: 'Premium Asian bridal and groomswear Shopify store for UK market with custom Liquid theme and UX.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    link: 'https://diyasdirect.co.uk/',
    color: '#E11D48',
    pattern: 'grid',
  },
  {
    name: 'Experfy',
    type: 'Platform',
    category: 'Rails',
    desc: 'AI and big data talent marketplace — built and maintained backend APIs for matching algorithms.',
    tech: ['Ruby on Rails', 'APIs', 'PostgreSQL', 'AWS'],
    link: 'https://www.experfy.com/',
    color: '#0EA5E9',
    pattern: 'diagonal',
  },
  {
    name: 'A&A Services',
    type: 'Charity',
    category: 'Deployments',
    desc: 'West Midlands charity services website providing accessible resources and donation management.',
    tech: ['WordPress', 'PHP', 'CSS', 'MySQL'],
    link: 'https://aandaserviceswestmidlands.co.uk/',
    color: '#84CC16',
    pattern: 'circles',
  },
]

// Derive 2-letter initials from project name
function getInitials(name) {
  const words = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

// CSS background patterns per type
function getPattern(type, color) {
  const c = color + '28' // ~16% opacity
  switch (type) {
    case 'dots':
      return {
        backgroundImage: `radial-gradient(circle, ${c} 1.5px, transparent 1.5px)`,
        backgroundSize: '22px 22px',
      }
    case 'grid':
      return {
        backgroundImage: `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }
    case 'diagonal':
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${c} 0, ${c} 1px, transparent 0, transparent 50%)`,
        backgroundSize: '18px 18px',
      }
    case 'circles':
      return {
        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 30%, ${c} 31%, ${c} 32%, transparent 33%), radial-gradient(circle at 50% 50%, transparent 55%, ${c} 56%, ${c} 57%, transparent 58%)`,
        backgroundSize: '60px 60px',
      }
    default:
      return {}
  }
}

function ProjectThumbnail({ project }) {
  const initials = getInitials(project.name)
  const patternStyle = getPattern(project.pattern, project.color)

  return (
    <div
      className="relative h-40 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
      }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0" style={patternStyle} />

      {/* Radial glow behind initials */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 50% 60%, ${project.color}18 0%, transparent 70%)`,
        }}
      />

      {/* Mock browser chrome bar */}
      <div
        className="relative z-10 flex items-center gap-1.5 px-3 py-2 border-b"
        style={{ borderColor: `${project.color}20` }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div
          className="flex-1 mx-2 h-4 rounded-full flex items-center px-2"
          style={{ background: 'rgba(255,255,255,0.06)', maxWidth: '140px' }}
        >
          <span
            className="text-[9px] font-body truncate"
            style={{ color: `${project.color}80` }}
          >
            {project.link !== '#' ? project.link.replace('https://', '') : project.name.toLowerCase().replace(/\s/g, '') + '.com'}
          </span>
        </div>
      </div>

      {/* Initials */}
      <div className="absolute inset-0 flex items-center justify-center pt-3">
        <span
          className="font-heading font-black select-none"
          style={{
            fontSize: '4.5rem',
            lineHeight: 1,
            color: project.color,
            opacity: 0.22,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          {initials}
        </span>
      </div>

      {/* Centered project name label — small, clean */}
      <div className="absolute bottom-3 left-4 z-10">
        <span
          className="font-heading font-bold text-xs tracking-wide"
          style={{ color: project.color, opacity: 0.9 }}
        >
          {project.name}
        </span>
      </div>

      {/* Type badge */}
      <div className="absolute top-8 right-3 z-10">
        <span
          className="px-2 py-0.5 rounded text-xs font-heading font-semibold"
          style={{
            background: `${project.color}18`,
            border: `1px solid ${project.color}40`,
            color: project.color,
          }}
        >
          {project.type}
        </span>
      </div>
    </div>
  )
}

const filters = ['All', 'Rails', 'MERN', 'Ecommerce', 'Shopify', 'AI', 'Deployments']

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const headColor = darkMode ? 'text-white' : 'text-gray-900'

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) =>
        Array.isArray(p.category)
          ? p.category.includes(activeFilter)
          : p.category === activeFilter
      )

  return (
    <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-[#111111]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className={`section-heading ${headColor}`}>Selected Projects</h2>
          <p className="section-subheading mx-auto text-center">
            A curated showcase of real-world applications across diverse industries.
          </p>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300"
              style={{
                background: activeFilter === filter
                  ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                  : darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                color: activeFilter === filter
                  ? '#fff'
                  : darkMode ? '#A0A0A0' : '#666',
                border: activeFilter === filter
                  ? 'none'
                  : darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                boxShadow: activeFilter === filter ? '0 0 20px rgba(108,99,255,0.4)' : 'none',
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: darkMode ? 'rgba(26,26,26,0.8)' : 'rgba(255,255,255,0.95)',
                  border: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${project.color}55`
                  e.currentTarget.style.boxShadow = `0 0 25px ${project.color}22`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = darkMode
                    ? '1px solid rgba(255,255,255,0.06)'
                    : '1px solid rgba(0,0,0,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Project thumbnail */}
                <ProjectThumbnail project={project} />

                {/* Content */}
                <div className="p-5">
                  <h3 className={`font-heading font-bold text-lg mb-2 group-hover:text-accent transition-colors ${headColor}`}>
                    {project.name}
                  </h3>
                  <p className="text-textSecondary font-body text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold transition-colors"
                      style={{ color: project.color }}
                    >
                      View Live <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
