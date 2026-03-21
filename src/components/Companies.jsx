import { motion } from 'framer-motion'

const companies = [
  {
    name: 'Systems Ltd',
    initials: 'SL',
    descriptor: 'Enterprise Software',
    color: '#6C63FF',
  },
  {
    name: 'BIRS',
    initials: 'BI',
    descriptor: 'Research & Analytics',
    color: '#0EA5E9',
  },
  {
    name: 'Tech Alps',
    initials: 'TA',
    descriptor: 'Technology Solutions',
    color: '#10B981',
  },
  {
    name: 'Visionet Systems',
    initials: 'VS',
    descriptor: 'IT Services & BPO',
    color: '#8B5CF6',
  },
  {
    name: 'Blackstack',
    initials: 'BS',
    descriptor: 'Tech Agency',
    color: '#64748B',
  },
  {
    name: 'ForceBrands',
    initials: 'FB',
    descriptor: 'Talent Marketplace',
    color: '#F97316',
  },
  {
    name: 'Experfy',
    initials: 'EX',
    descriptor: 'AI & Data Platform',
    color: '#00D4FF',
  },
]

// Triplicate for a seamless loop with enough visual weight
const marqueeItems = [...companies, ...companies, ...companies]

function CompanyCard({ company, cardBg, cardBorder, headColor, subColor }) {
  return (
    <div
      className="flex items-center gap-4 px-5 py-4 rounded-2xl whitespace-nowrap flex-shrink-0"
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        minWidth: '220px',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Monogram badge */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-black text-sm"
        style={{
          background: `${company.color}18`,
          border: `1px solid ${company.color}35`,
          color: company.color,
          letterSpacing: '-0.03em',
        }}
      >
        {company.initials}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className="font-heading font-bold text-sm leading-tight"
          style={{ color: headColor }}
        >
          {company.name}
        </span>
        <span
          className="font-body text-xs mt-0.5"
          style={{ color: subColor }}
        >
          {company.descriptor}
        </span>
      </div>
    </div>
  )
}

export default function Companies({ darkMode }) {
  const headColor = darkMode ? '#FFFFFF' : '#0A0A0A'
  const subColor = darkMode ? '#606060' : '#999'
  const bg = darkMode ? '#111111' : '#ffffff'
  const cardBg = darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.025)'
  const cardBorder = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'
  const fadeLeft = darkMode
    ? 'linear-gradient(to right, #111111 0%, transparent 100%)'
    : 'linear-gradient(to right, #ffffff 0%, transparent 100%)'
  const fadeRight = darkMode
    ? 'linear-gradient(to left, #111111 0%, transparent 100%)'
    : 'linear-gradient(to left, #ffffff 0%, transparent 100%)'

  return (
    <section className="py-20 overflow-hidden" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Experience</p>
          <h2
            className="font-heading font-bold text-3xl"
            style={{ color: headColor }}
          >
            Companies I&apos;ve Worked With
          </h2>
          <p
            className="font-body text-sm mt-3"
            style={{ color: subColor }}
          >
            Across startups, scale-ups, and enterprises in 12+ countries
          </p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden py-2">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: fadeLeft }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: fadeRight }}
        />

        <motion.div
          className="flex gap-4"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', `-${100 / 3}%`] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((company, i) => (
            <CompanyCard
              key={`${company.name}-${i}`}
              company={company}
              cardBg={cardBg}
              cardBorder={cardBorder}
              headColor={headColor}
              subColor={subColor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
