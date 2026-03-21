import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const leftColumn = [
  {
    title: 'Ruby on Rails',
    desc: 'APIs, MVC architecture, background jobs with Sidekiq, microservices, ActionCable (WebSockets)',
  },
  {
    title: 'MERN Stack',
    desc: 'MongoDB, Express.js, React, Node.js — REST APIs, GraphQL, real-time apps, scalable backends',
  },
  {
    title: 'React Ecosystem',
    desc: 'Redux Toolkit, Context API, hooks, React Query, Next.js, performance optimisation',
  },
  {
    title: 'Database Design',
    desc: 'PostgreSQL & MongoDB schema design, indexing strategies, complex queries and migrations',
  },
]

const rightColumn = [
  {
    title: 'Shopify Development',
    desc: 'Custom Liquid themes, Shopify apps, storefront API integrations, headless commerce',
  },
  {
    title: 'WordPress & WooCommerce',
    desc: 'Custom plugins & themes, REST API, WooCommerce extensions, performance tuning',
  },
  {
    title: 'AI-Integrated Applications',
    desc: 'Building apps with OpenAI, Claude, LangChain; AI workflows, chatbots, automation pipelines',
  },
  {
    title: 'Cloud & CI/CD',
    desc: 'AWS (EC2, S3, RDS), Heroku, Docker, GitHub Actions, Capistrano deployments, server management',
  },
]

function ExpertiseCard({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 p-5 rounded-xl glow-border glass-card group hover:scale-[1.01] transition-transform"
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(108,99,255,0.2)' }}>
          <FiCheck size={14} className="text-accent" />
        </div>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-base text-white mb-1 group-hover:text-accent transition-colors">
          {item.title}
        </h4>
        <p className="text-textSecondary text-sm font-body leading-relaxed">{item.desc}</p>
      </div>
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
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-8 accent-gradient rounded-full" />
              <h3 className={`font-heading font-bold text-xl ${headColor}`}>Full-Stack Expertise</h3>
            </motion.div>
            <div className="space-y-4">
              {leftColumn.map((item, i) => (
                <ExpertiseCard key={item.title} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #00D4FF, #6C63FF)' }} />
              <h3 className={`font-heading font-bold text-xl ${headColor}`}>Specialised Skills</h3>
            </motion.div>
            <div className="space-y-4">
              {rightColumn.map((item, i) => (
                <ExpertiseCard key={item.title} item={item} delay={i * 0.1 + 0.05} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
