import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    icon: '🔷',
    label: 'Backend',
    pills: ['Ruby on Rails', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
    type: 'accent',
  },
  {
    icon: '🔷',
    label: 'Frontend',
    pills: ['React.js', 'Vue.js', 'JavaScript', 'Stimulus.js', 'jQuery', 'Tailwind CSS', 'Sass'],
    type: 'accent',
  },
  {
    icon: '🔷',
    label: 'Ecommerce & CMS',
    pills: ['Shopify', 'WordPress', 'WooCommerce'],
    type: 'alt',
  },
  {
    icon: '🔷',
    label: 'DevOps & Cloud',
    pills: ['Supabase', 'Heroku', 'AWS', 'Docker', 'GitHub'],
    type: 'alt',
  },
]

const aiTools = ['ChatGPT', 'Claude AI', 'Cursor', 'GitHub Copilot', 'Lovable', 'Emergent', 'Bubble', 'Webflow', 'Zapier', 'Make (Integromat)']

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About({ darkMode }) {
  const textColor = darkMode ? 'text-textSecondary' : 'text-gray-600'
  const headColor = darkMode ? 'text-white' : 'text-gray-900'
  const cardBg = darkMode ? 'glass-card' : 'bg-white shadow-sm border border-gray-100'

  return (
    <section id="about" className={`py-24 px-6 relative ${darkMode ? 'bg-[#0A0A0A]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
            <h2 className={`section-heading ${headColor}`}>The Developer Behind the Work</h2>
            <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          </div>
        </FadeUp>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Avatar placeholder */}
          <FadeUp delay={0.1}>
            <div className="relative">
              <div className={`rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto relative glow-border ${cardBg}`}>
                {/* Placeholder avatar with initials */}
                <div className="w-full h-full flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 100%)' }}>
                  <div className="text-8xl font-heading font-bold text-gradient mb-3">JJ</div>
                  <p className="text-accent font-heading text-lg font-semibold">Jahanzaib Javed</p>
                  <p className={`text-sm font-body mt-1 ${textColor}`}>Senior Full-Stack Developer</p>
                </div>
                {/* Glow accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30"
                  style={{ background: '#6C63FF' }} />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 md:right-4 glass-card rounded-xl px-4 py-3 glow-border text-center"
              >
                <div className="text-2xl font-heading font-bold text-gradient">7+</div>
                <div className={`text-xs font-body ${textColor}`}>Years Exp.</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:left-4 glass-card rounded-xl px-4 py-3 glow-border text-center"
              >
                <div className="text-2xl font-heading font-bold text-gradient">180+</div>
                <div className={`text-xs font-body ${textColor}`}>Projects</div>
              </motion.div>
            </div>
          </FadeUp>

          {/* Right: Bio */}
          <FadeUp delay={0.2}>
            <div className="space-y-5">
              <h3 className={`font-heading font-bold text-2xl ${headColor}`}>
                Hi, I&apos;m Jahanzaib 👋
              </h3>
              <p className={`font-body text-base leading-relaxed ${textColor}`}>
                I&apos;m a Senior Full-Stack Developer with over <strong className="text-accent">7 years of professional experience</strong> (since 2017),
                specialising in building high-performance web applications and scalable digital products.
              </p>
              <p className={`font-body text-base leading-relaxed ${textColor}`}>
                My core expertise spans <strong className={headColor}>Ruby on Rails</strong> and the{' '}
                <strong className={headColor}>MERN Stack</strong> (MongoDB, Express.js, React, Node.js),
                with deep hands-on experience in <strong className={headColor}>React, Shopify, and WordPress</strong>.
              </p>
              <p className={`font-body text-base leading-relaxed ${textColor}`}>
                I&apos;m now fully equipped with the latest <strong className="text-accent">AI tools</strong> — ChatGPT, Claude, Cursor,
                GitHub Copilot, and Midjourney — and <strong className={headColor}>no-code platforms</strong> like Lovable,
                Emergent, Bubble, and Webflow to ship products up to <strong className="text-gradient">3x faster</strong>.
              </p>
              <p className={`font-body text-base leading-relaxed ${textColor}`}>
                I&apos;ve had the privilege of working with clients from{' '}
                <strong className={headColor}>USA, UK, Canada, Finland, Germany, and Pakistan</strong>,
                delivering value across HealthTech, FinTech, E-Commerce, Real Estate, and more.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇫🇮 Finland', '🇩🇪 Germany', '🇵🇰 Pakistan'].map((c) => (
                  <span key={c} className="skill-pill text-xs">{c}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Skills Grid */}
        <FadeUp delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-5 ${cardBg} glow-border`}
              >
                <h4 className={`font-heading font-semibold text-sm uppercase tracking-wider mb-4 ${
                  group.type === 'accent' ? 'text-accent' : 'text-accentAlt'
                }`}>
                  {group.icon} {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      className={group.type === 'accent' ? 'skill-pill' : 'skill-pill-alt'}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* AI & No-Code Stack */}
        <FadeUp delay={0.2}>
          <div className="rounded-2xl p-8 glow-border"
            style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.05) 100%)' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🤖</span>
              <h3 className={`font-heading font-bold text-xl ${headColor}`}>AI & No-Code Stack</h3>
              <span className="px-3 py-1 rounded-full text-xs font-heading font-bold"
                style={{ background: 'rgba(255,165,0,0.15)', border: '1px solid rgba(255,165,0,0.4)', color: '#FFA500' }}>
                Superpower
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <span key={tool} className="ai-pill">{tool}</span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
