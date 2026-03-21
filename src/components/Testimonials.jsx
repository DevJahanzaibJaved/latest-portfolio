import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Joseph Paul Silvashy',
    role: 'CTO, ForceBrands',
    avatar: 'JP',
    color: '#6C63FF',
    stars: 5,
    text: "Jahanzaib is an exceptional developer who consistently delivers high-quality work. His deep expertise in Ruby on Rails transformed our talent platform into a truly scalable marketplace. He's proactive, communicates clearly, and always goes beyond what's asked.",
  },
  {
    name: 'Jaspreet Sahota',
    role: 'Product Manager, BIRS',
    avatar: 'JS',
    color: '#00D4FF',
    stars: 5,
    text: "Working with Jahanzaib has been a pleasure. He quickly understood our complex requirements and delivered a robust, performant solution ahead of schedule. His knowledge of full-stack development and attention to detail are outstanding.",
  },
  {
    name: 'Darren B.',
    role: 'Co-Founder, Crowne Cards',
    avatar: 'DB',
    color: '#F97316',
    stars: 5,
    text: "Jahanzaib built our entire platform from scratch — clean architecture, beautiful UI, and rock-solid deployment. He's one of those rare developers who truly cares about the product, not just the code. Highly recommend for any serious project.",
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials({ darkMode }) {
  const headColor = darkMode ? 'text-white' : 'text-gray-900'

  return (
    <section className={`py-24 px-6 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Social Proof</p>
          <h2 className={`section-heading ${headColor}`}>What Clients Say</h2>
          <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: darkMode
                  ? 'rgba(26,26,26,0.7)'
                  : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}`,
                transition: 'all 0.3s ease',
                boxShadow: darkMode
                  ? '0 4px 24px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}55`
                e.currentTarget.style.boxShadow = `0 0 30px ${t.color}20`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = darkMode
                  ? 'rgba(255,255,255,0.07)'
                  : 'rgba(0,0,0,0.06)'
                e.currentTarget.style.boxShadow = darkMode
                  ? '0 4px 24px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.06)'
              }}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-5xl font-heading font-bold leading-none opacity-10"
                style={{ color: t.color }}>
                "
              </div>

              <Stars count={t.stars} />

              <p className="text-textSecondary font-body text-sm leading-relaxed italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm text-white"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className={`font-heading font-semibold text-sm ${headColor}`}>{t.name}</div>
                  <div className="text-textSecondary text-xs font-body">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
