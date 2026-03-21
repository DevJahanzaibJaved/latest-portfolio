import { motion } from 'framer-motion'

const companies = [
  { name: 'Systems Ltd', emoji: '🏢' },
  { name: 'BIRS', emoji: '🔬' },
  { name: 'Tech Alps', emoji: '🏔️' },
  { name: 'Visionet Systems', emoji: '👁️' },
  { name: 'Blackstack', emoji: '⬛' },
  { name: 'ForceBrands', emoji: '💪' },
  { name: 'Experfy', emoji: '🧬' },
]

// Duplicate for seamless loop
const marqueeItems = [...companies, ...companies]

export default function Companies({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'
  const bg = darkMode ? 'bg-[#111111]' : 'bg-white'
  const cardBg = darkMode
    ? 'rgba(255,255,255,0.04)'
    : 'rgba(0,0,0,0.03)'
  const cardBorder = darkMode
    ? 'rgba(255,255,255,0.07)'
    : 'rgba(0,0,0,0.07)'

  return (
    <section className={`py-20 ${bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className={`font-heading font-bold text-3xl ${headColor}`}>Companies I&apos;ve Worked With</h2>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: darkMode
            ? 'linear-gradient(to right, #111111, transparent)'
            : 'linear-gradient(to right, #ffffff, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: darkMode
            ? 'linear-gradient(to left, #111111, transparent)'
            : 'linear-gradient(to left, #ffffff, transparent)' }} />

        <motion.div
          className="flex gap-6"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl whitespace-nowrap"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                minWidth: '180px',
              }}
            >
              <span className="text-2xl">{company.emoji}</span>
              <span className={`font-heading font-semibold text-sm ${headColor}`}>
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
