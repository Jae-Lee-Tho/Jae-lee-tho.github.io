import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { achievements } from '../data/achievements'

function AchievementRow({ achievement, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: 28,
        alignItems: 'center',
        padding: '24px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        cursor: 'pointer',
        transition: 'background 0.2s',
      }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
    >
      {/* Year */}
      <span style={{ fontSize: 10, letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}>
        {achievement.year}
      </span>

      {/* Title + issuer */}
      <div>
        <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: 4, letterSpacing: '-0.2px' }}>
          {achievement.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>
            {achievement.issuer}
          </span>
          <span className="tag" style={{ fontSize: 9 }}>{achievement.category}</span>
        </div>
      </div>

      {/* Arrow */}
      <div style={{ color: 'rgba(255,255,255,0.25)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  const navigate = useNavigate()

  return (
    <section id="achievements" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container">
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>05</span>
          <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>Achievements</span>
        </div>

        {/* Heading */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff' }}>
            Awards &<br />Recognition
          </motion.h2>
        </div>

        {/* List */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {achievements.map((a, i) => (
            <AchievementRow
              key={a.slug}
              achievement={a}
              index={i}
              onClick={() => navigate(`/achievements/${a.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
