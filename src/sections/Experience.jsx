import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const mono = 'JetBrains Mono, monospace'

function ExperienceRow({ item, index, onClick }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        cursor: 'pointer',
        position: 'relative',
      }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', x: 3 }}
    >
      {/* Thumbnail */}
      <div style={{
        aspectRatio: '4/3',
        background: 'rgba(255,255,255,0.03)',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {item.image ? (
          <img src={item.image} alt={item.org}
            style={{ width: '100%', height: '100%', objectFit: item.imageFit || 'cover', opacity: item.imageFit === 'contain' ? 0.85 : 0.7 }} />
        ) : (
          <>
            <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ opacity: 0.08, position: 'absolute', inset: 0 }}>
              <rect x="20" y="20" width="160" height="110" rx="2" stroke="white" strokeWidth="0.8" fill="none" />
              <line x1="20" y1="50" x2="180" y2="50" stroke="white" strokeWidth="0.4" />
              <line x1="70" y1="20" x2="70" y2="130" stroke="white" strokeWidth="0.4" />
              <circle cx="100" cy="90" r="22" stroke="white" strokeWidth="0.8" fill="none" />
            </svg>
            <span style={{ position: 'relative', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: mono, color: 'rgba(255,255,255,0.38)' }}>
              {item.orgShort}
            </span>
          </>
        )}
        <div style={{ position: 'absolute', top: 12, left: 14, fontSize: 9, letterSpacing: '0.1em', fontFamily: mono, color: 'rgba(255,255,255,0.35)' }}>
          {num}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14, minHeight: 140 }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
            <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', fontFamily: mono }}>
              {item.category || 'EXPERIENCE'}
            </p>
            <p style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', fontFamily: mono, whiteSpace: 'nowrap' }}>
              {item.period}
            </p>
          </div>
          <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 600, letterSpacing: '-0.4px', lineHeight: 1.2, color: '#ffffff', marginBottom: 6 }}>
            {item.role}
          </h3>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>
            {item.orgShort}
          </p>
          <p style={{ fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.28)', fontFamily: mono, marginBottom: 12 }}>
            {item.location}
          </p>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 380 }}>
            {item.shortDesc}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.28)', fontFamily: mono }}>
            {item.techLine}
          </span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.55)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: mono }}>
            <span>View</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const navigate = useNavigate()

  return (
    <section id="experience" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-8 md:px-14" style={{ paddingTop: 96, paddingBottom: 96 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>

          {/* LEFT: sticky heading */}
          <div style={{ position: 'sticky', top: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: mono }}>03</span>
              <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: mono }}>Experience</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: 1.05, color: '#ffffff', marginBottom: 20 }}>
              Where I've<br />Worked
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              Research labs, a student robotics team, and industry, across autonomy, embedded firmware, and perception.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: 9, letterSpacing: '0.1em', fontFamily: mono, color: 'rgba(255,255,255,0.28)', marginBottom: 6 }}>
                TOTAL ROLES
              </p>
              <p style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '-1px' }}>
                {String(experience.length).padStart(2, '0')}
              </p>
            </motion.div>
          </div>

          {/* RIGHT: experience rows */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {experience.map((item, i) => (
              <ExperienceRow
                key={item.slug}
                item={item}
                index={i}
                onClick={() => navigate(`/experience/${item.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
