import { motion } from 'framer-motion'

const aiTools = [
  { name: 'ChatGPT', emoji: '🤖', color: '#10A37F' },
  { name: 'Claude', emoji: '🧠', color: '#D4A574' },
  { name: 'Cursor', emoji: '⚡', color: '#6C63FF' },
  { name: 'GitHub Copilot', emoji: '🐙', color: '#4078c0' },
  { name: 'Midjourney', emoji: '🎨', color: '#E879F9' },
  { name: 'Stable Diffusion', emoji: '🌊', color: '#0EA5E9' },
]

const noCodeTools = [
  { name: 'Lovable', emoji: '💜', color: '#7C3AED' },
  { name: 'Emergent', emoji: '🚀', color: '#F97316' },
  { name: 'Bubble', emoji: '🫧', color: '#1E3A8A' },
  { name: 'Webflow', emoji: '🌐', color: '#4353FF' },
  { name: 'Shopify', emoji: '🛒', color: '#96BF48' },
  { name: 'Zapier', emoji: '⚡', color: '#FF4A00' },
  { name: 'Make', emoji: '⚙️', color: '#6D27D9' },
]

function ToolCard({ tool, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl cursor-default"
      style={{
        background: `${tool.color}12`,
        border: `1px solid ${tool.color}30`,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${tool.color}40`
        e.currentTarget.style.borderColor = `${tool.color}80`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = `${tool.color}30`
      }}
    >
      <span className="text-3xl">{tool.emoji}</span>
      <span className="text-xs font-heading font-semibold text-center" style={{ color: tool.color }}>
        {tool.name}
      </span>
    </motion.div>
  )
}

export default function AISection({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'
  const textColor = darkMode ? 'text-textSecondary' : 'text-gray-600'

  return (
    <section id="ai" className={`py-24 px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">AI-First Workflow</p>
          <h2 className={`section-heading ${headColor}`}>Building Smarter with AI</h2>
          <p className={`max-w-2xl mx-auto font-body text-base leading-relaxed mt-4 mb-6 ${textColor}`}>
            Jahanzaib combines 7+ years of hands-on development with cutting-edge AI tools to ship products{' '}
            <span className="text-gradient font-semibold">3x faster</span>, automate complex workflows, and build more
            intelligent applications — whether in Rails, MERN, or no-code platforms.
          </p>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        {/* AI Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className={`font-heading font-semibold text-lg mb-6 text-center ${headColor}`}>
            🤖 AI Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {aiTools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} delay={i * 0.07} />
            ))}
          </div>
        </motion.div>

        {/* No-Code Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`font-heading font-semibold text-lg mb-6 text-center ${headColor}`}>
            ⚡ No-Code Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
            {noCodeTools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} delay={i * 0.07} />
            ))}
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center py-10 px-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(0,212,255,0.07) 100%)',
            border: '1px solid rgba(108,99,255,0.25)',
          }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center accent-gradient">
            <span className="text-white font-bold text-lg">"</span>
          </div>
          <p className={`font-heading font-semibold text-xl md:text-2xl leading-relaxed ${headColor}`}>
            I don&apos;t just write code — I orchestrate AI to build{' '}
            <span className="text-gradient">smarter, faster, and better.</span>
          </p>
          <p className="text-accent font-body text-sm mt-4 font-medium">— Jahanzaib Javed</p>
        </motion.div>
      </div>
    </section>
  )
}
