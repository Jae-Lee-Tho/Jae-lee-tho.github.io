import { motion } from 'framer-motion'

const bio = `ECE student and researcher at the University of Washington, focused on the intersection of robotics, embedded systems, and AI. I build things that move, think, and communicate — from assistive drone control systems to AI-powered wellness apps. Currently seeking internship opportunities in hardware, robotics, and intelligent systems.`

const roles = ['Researcher', 'Engineer', 'Builder']

const timeline = [
  { year: '2024–', label: 'University of Washington', sub: 'B.S. Electrical & Computer Engineering' },
  { year: '2023', label: 'University of Maryland', sub: 'Transfer — Engineering' },
  { year: '2023', label: 'OTV Robotics Team', sub: 'Autonomous Vehicle Prototype' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container">

        {/* Section label — matches all other sections */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>02</span>
          <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>About</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff', marginBottom: 56 }}>
          About Me
        </motion.h2>

        {/* Two-col layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* Left: photo + timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Photo + identity */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
              <div style={{
                width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <img
                  src="/jae-photo.jpeg"
                  alt="Jaegyoon Lee"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div style={{ paddingTop: 10 }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 4, letterSpacing: '-0.3px' }}>Jaegyoon Lee</p>
                <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 14 }}>ECE · UW Seattle</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {roles.map(r => (
                    <span key={r} className="tag">{r}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <p className="spec-label" style={{ marginBottom: 18 }}>Timeline</p>
              {timeline.map(({ year, label, sub }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    display: 'flex', gap: 20,
                    paddingBottom: 18,
                    borderBottom: i < timeline.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    marginBottom: i < timeline.length - 1 ? 18 : 0,
                  }}>
                  <span style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.35)', width: 44, flexShrink: 0, paddingTop: 2 }}>{year}</span>
                  <div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: bio + spec table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            <p style={{ fontSize: 15, lineHeight: 1.78, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {bio}
            </p>

            {/* Spec table */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
              {[
                ['Degree', 'B.S. Electrical & Computer Engineering'],
                ['University', 'University of Washington'],
                ['Focus', 'Robotics, AI, Embedded Systems'],
                ['Languages', 'Python, C/C++, JavaScript, SystemVerilog'],
                ['Interests', 'Autonomous Systems, Signal Processing, MLOps'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '11px 0' }}>
                  <span style={{ width: 100, flexShrink: 0, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', fontFamily: 'JetBrains Mono, monospace' }}>{k}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/Jae-Lee-Tho" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10 }}>GitHub</a>
              <a href="https://linkedin.com/in/jaegyoon-lee" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10 }}>LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
