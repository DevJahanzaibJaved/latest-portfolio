import { motion } from 'framer-motion'
import {
  SiRubyonrails,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiShopify,
  SiWordpress,
  SiOpenai,
  SiNodedotjs,
} from 'react-icons/si'
import { FiCloud } from 'react-icons/fi'

const leftColumn = [
  {
    Icon: SiRubyonrails,
    color: '#CC0000',
    title: 'Ruby on Rails',
    years: '7 yrs',
    desc: 'APIs, MVC architecture, background jobs with Sidekiq, microservices, ActionCable WebSockets.',
  },
  {
    Icon: SiNodedotjs,
    color: '#5FA04E',
    title: 'MERN Stack',
    years: '5 yrs',
    desc: 'MongoDB, Express.js, React, Node.js — REST APIs, GraphQL, real-time apps, scalable backends.',
  },
  {
    Icon: SiReact,
    color: '#61DAFB',
    title: 'React Ecosystem',
    years: '6 yrs',
    desc: 'Redux Toolkit, Context API, hooks, React Query, Next.js SSR/SSG, performance optimisation.',
  },
  {
    Icon: SiPostgresql,
    color: '#4169E1',
    title: 'Database Design',
    years: '7 yrs',
    desc: 'PostgreSQL & MongoDB schema design, indexing strategies, complex queries and migrations.',
  },
]

const rightColumn = [
  {
    Icon: SiShopify,
    color: '#7AB55C',
    title: 'Shopify Development',
    years: '4 yrs',
    desc: 'Custom Liquid themes, Shopify apps, Storefront API integrations, headless commerce.',
  },
  {
    Icon: SiWordpress,
    color: '#21759B',
    title: 'WordPress & WooCommerce',
    years: '6 yrs',
    desc: 'Custom plugins & themes, REST API, WooCommerce extensions, performance tuning and security.',
  },
  {
    Icon: SiOpenai,
    color: '#10A37F',
    title: 'AI-Integrated Applications',
    years: '2 yrs',
    desc: 'Building apps with OpenAI, Claude, LangChain; AI workflows, chatbots, automation pipelines.',
  },
  {
    Icon: FiCloud,
    color: '#F59E0B',
    title: 'Cloud & CI/CD',
    years: '5 yrs',
    desc: 'AWS (EC2, S3, RDS), Heroku, Docker, GitHub Actions, Capistrano deployments, server management.',
  },
]

function ExpertiseItem({ item, index, darkMode }) {
  const { Icon, color, title, years, desc } = item
  const headColor = darkMode ? '#FFFFFF' : '#0A0A0A'
  const descColor = darkMode ? '#707070' : '#666'
  const cardBg    = darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
  const cardBorder = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ x: 4 }}
      className="group relative flex items-start gap-4 p-5 rounded-xl overflow-hidden"
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderLeft: `3px solid ${color}55`,
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${color}08`
        e.currentTarget.style.borderColor = `${color}35`
        e.currentTarget.style.borderLeftColor = color
        e.currentTarget.style.boxShadow = `0 4px 24px ${color}14`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = cardBg
        e.currentTarget.style.borderColor = cardBorder
        e.currentTarget.style.borderLeftColor = `${color}55`
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center mt-0.5"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
          color,
        }}
      >
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4
            className="font-heading font-bold text-base leading-tight group-hover:text-accent transition-colors duration-200"
            style={{ color: headColor }}
          >
            {title}
          </h4>
          <span
            className="flex-shrink-0 text-xs font-heading font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: `${color}12`,
              border: `1px solid ${color}30`,
              color,
            }}
          >
            {years}
          </span>
        </div>
        <p className="font-body text-sm leading-relaxed" style={{ color: descColor }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

function ColumnHeader({ label, gradient, darkMode }) {
  const headColor = darkMode ? '#FFFFFF' : '#0A0A0A'
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-5"
    >
      <div className="w-1 h-7 rounded-full" style={{ background: gradient }} />
      <h3 className="font-heading font-bold text-lg" style={{ color: headColor }}>
        {label}
      </h3>
    </motion.div>
  )
}

export default function Expertise({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'

  return (
    <section id="expertise" className={`py-24 px-6 ${darkMode ? 'bg-[#111111]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">What I Do Best</p>
          <h2 className={`section-heading ${headColor}`}>Areas of Expertise</h2>
          <p className="section-subheading mx-auto text-center">
            7+ years across the full stack — from backend APIs to storefronts to AI-powered workflows.
          </p>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <ColumnHeader
              label="Full-Stack Expertise"
              gradient="linear-gradient(180deg, #6C63FF, #00D4FF)"
              darkMode={darkMode}
            />
            <div className="space-y-3">
              {leftColumn.map((item, i) => (
                <ExpertiseItem key={item.title} item={item} index={i} darkMode={darkMode} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <ColumnHeader
              label="Specialised Skills"
              gradient="linear-gradient(180deg, #00D4FF, #10B981)"
              darkMode={darkMode}
            />
            <div className="space-y-3">
              {rightColumn.map((item, i) => (
                <ExpertiseItem key={item.title} item={item} index={i} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
