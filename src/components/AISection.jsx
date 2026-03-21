import { motion } from 'framer-motion'
import {
  SiOpenai,
  SiAnthropic,
  SiGithub,
  SiWebflow,
  SiShopify,
  SiZapier,
} from 'react-icons/si'

// Clean SVG lettermark for tools without a simple-icon
function Lettermark({ letters, color, size = 32 }) {
  const fontSize = size * 0.38
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8"
        fill={color} fillOpacity="0.12"
        stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <text
        x="16" y="16"
        dominantBaseline="central"
        textAnchor="middle"
        fill={color}
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="800"
        fontSize={fontSize}
        letterSpacing="-0.5"
      >
        {letters}
      </text>
    </svg>
  )
}

// Cursor — actual arrow cursor SVG
function CursorIcon({ color, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 3L19 10.5L12.5 12.5L10.5 19L5 3Z"
        fill={color}
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Make (Integromat) — interlocking circles
function MakeIcon({ color, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="16" r="6" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="21" cy="16" r="6" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  )
}

// Bubble — stylised speech bubble
function BubbleIcon({ color, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.24 5.12 3.2 6.8L4 22l4.8-1.6C9.8 20.8 10.88 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9z"
        fill={color} fillOpacity="0.2"
        stroke={color} strokeWidth="1.5"
      />
      <circle cx="8" cy="11" r="1.2" fill={color} />
      <circle cx="12" cy="11" r="1.2" fill={color} />
      <circle cx="16" cy="11" r="1.2" fill={color} />
    </svg>
  )
}

// Lovable — heart shape
function LovableIcon({ color, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color} fillOpacity="0.25"
        stroke={color} strokeWidth="1.5"
      />
    </svg>
  )
}

const aiTools = [
  {
    name: 'ChatGPT',
    color: '#10A37F',
    icon: (size) => <SiOpenai size={size} />,
  },
  {
    name: 'Claude',
    color: '#C96442',
    icon: (size) => <SiAnthropic size={size} />,
  },
  {
    name: 'Cursor',
    color: '#6C63FF',
    icon: (size) => <CursorIcon color="#6C63FF" size={size} />,
  },
  {
    name: 'GitHub Copilot',
    color: '#4078C0',
    icon: (size) => <SiGithub size={size} />,
  },
  {
    name: 'Midjourney',
    color: '#E879F9',
    icon: (size) => <Lettermark letters="MJ" color="#E879F9" size={size} />,
  },
  {
    name: 'Stable Diffusion',
    color: '#0EA5E9',
    icon: (size) => <Lettermark letters="SD" color="#0EA5E9" size={size} />,
  },
]

const noCodeTools = [
  {
    name: 'Lovable',
    color: '#9333EA',
    icon: (size) => <LovableIcon color="#9333EA" size={size} />,
  },
  {
    name: 'Emergent',
    color: '#F97316',
    icon: (size) => <Lettermark letters="EM" color="#F97316" size={size} />,
  },
  {
    name: 'Bubble',
    color: '#1D4ED8',
    icon: (size) => <BubbleIcon color="#1D4ED8" size={size} />,
  },
  {
    name: 'Webflow',
    color: '#4353FF',
    icon: (size) => <SiWebflow size={size} />,
  },
  {
    name: 'Shopify',
    color: '#7AB55C',
    icon: (size) => <SiShopify size={size} />,
  },
  {
    name: 'Zapier',
    color: '#FF4A00',
    icon: (size) => <SiZapier size={size} />,
  },
  {
    name: 'Make',
    color: '#7B2FBE',
    icon: (size) => <MakeIcon color="#7B2FBE" size={size} />,
  },
]

function ToolCard({ tool, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default"
      style={{
        background: `${tool.color}0D`,
        border: `1px solid ${tool.color}25`,
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${tool.color}18`
        e.currentTarget.style.borderColor = `${tool.color}60`
        e.currentTarget.style.boxShadow = `0 8px 30px ${tool.color}25`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `${tool.color}0D`
        e.currentTarget.style.borderColor = `${tool.color}25`
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `${tool.color}15`,
          border: `1px solid ${tool.color}30`,
          color: tool.color,
        }}
      >
        {tool.icon(28)}
      </div>

      {/* Name */}
      <span
        className="font-heading font-semibold text-xs text-center leading-tight"
        style={{ color: tool.color }}
      >
        {tool.name}
      </span>
    </motion.div>
  )
}

export default function AISection({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'
  const textColor = darkMode ? 'text-textSecondary' : 'text-gray-600'
  const dividerColor = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'

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
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: dividerColor }} />
            <h3 className={`font-heading font-semibold text-sm uppercase tracking-widest ${darkMode ? 'text-textSecondary' : 'text-gray-500'}`}>
              AI Tools
            </h3>
            <div className="flex-1 h-px" style={{ background: dividerColor }} />
          </div>
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
          className="mt-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: dividerColor }} />
            <h3 className={`font-heading font-semibold text-sm uppercase tracking-widest ${darkMode ? 'text-textSecondary' : 'text-gray-500'}`}>
              No-Code Platforms
            </h3>
            <div className="flex-1 h-px" style={{ background: dividerColor }} />
          </div>
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
