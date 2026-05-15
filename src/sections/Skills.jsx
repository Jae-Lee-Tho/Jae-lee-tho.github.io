import { useRef } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

const icons = {
  languages: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  backend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
    </svg>
  ),
  databases: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  robotics: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><line x1="12" y1="7" x2="12" y2="11" /><line x1="8" y1="16" x2="8" y2="16" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="16" x2="12" y2="16" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="16" x2="16" y2="16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  tools: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '28px 24px',
        border: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'border-color 0.2s, background 0.2s',
      }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: 'rgba(255,255,255,0.02)' }}
    >
      {/* Icon */}
      <div style={{ color: 'rgba(255,255,255,0.5)', width: 24, height: 24 }}>
        {icons[category.id] || icons.tools}
      </div>

      {/* Title */}
      <div>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', marginBottom: 4, letterSpacing: '-0.2px' }}>
          {category.title}
        </h3>
        <p style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
          {category.skills.length} technologies
        </p>
      </div>

      {/* Skills list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
        {category.skills.map(skill => (
          <span key={skill} className="tag" style={{ fontSize: 9 }}>{skill}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container">
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>04</span>
          <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>Skills</span>
        </div>

        {/* Heading */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff' }}>
            Technical<br />Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontSize: 11, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', maxWidth: 320, lineHeight: 1.7, textAlign: 'right' }}>
            Tools, languages, and frameworks across hardware and software.
          </motion.p>
        </div>

        {/* 3-col grid (2-col on md, 1-col on sm) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
          {skillCategories.map((cat, i) => (
            <div key={cat.id} style={{ background: '#0d0d0d' }}>
              <SkillCard category={cat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
