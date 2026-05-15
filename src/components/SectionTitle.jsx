import { motion } from 'framer-motion'

export default function SectionTitle({ number, label, title, subtitle }) {
  return (
    <div style={{ marginBottom: 56 }}>
      {number && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>{number}</span>
          <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
          {label && <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>}
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff', marginBottom: subtitle ? 12 : 0 }}>
        {title}
      </motion.h2>
      {subtitle && (
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{subtitle}</p>
      )}
    </div>
  )
}
