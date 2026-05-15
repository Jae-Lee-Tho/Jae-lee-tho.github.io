import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const d = (delay) => ({ duration: 0.9, delay: delay, ease: 'easeOut' })

function DroneBlueprintSVG() {
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 500 }}>

      {/* Subtle grid */}
      <defs>
        <pattern id="bpgrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="500" height="320" fill="url(#bpgrid)" />

      {/* Divider between views */}
      <motion.line x1="238" y1="50" x2="238" y2="280" stroke="white" strokeWidth="0.3" strokeDasharray="2 6"
        initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} transition={d(0.2)} />

      {/* ═══ FRONT ELEVATION ═══ */}

      {/* Top housing */}
      <motion.rect x="95" y="127" width="50" height="11" rx="2" stroke="white" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.35)} />

      {/* Body */}
      <motion.rect x="82" y="138" width="76" height="30" rx="4" stroke="white" strokeWidth="1.0"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.3)} />

      {/* Left arm */}
      <motion.rect x="26" y="146" width="56" height="14" rx="3" stroke="white" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.45)} />

      {/* Right arm */}
      <motion.rect x="158" y="146" width="56" height="14" rx="3" stroke="white" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.45)} />

      {/* Left motor */}
      <motion.circle cx="26" cy="153" r="14" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.52)} />

      {/* Right motor */}
      <motion.circle cx="214" cy="153" r="14" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.52)} />

      {/* Left prop (flat ellipse, viewed from front) */}
      <motion.ellipse cx="26" cy="136" rx="34" ry="6" stroke="white" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.62)} />

      {/* Right prop */}
      <motion.ellipse cx="214" cy="136" rx="34" ry="6" stroke="white" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.62)} />

      {/* Landing gear left */}
      <motion.path d="M 90,168 L 83,205 M 108,168 L 101,205" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.78)} />
      <motion.line x1="83" y1="205" x2="101" y2="205" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.83)} />

      {/* Landing gear right */}
      <motion.path d="M 132,168 L 139,205 M 150,168 L 157,205" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.78)} />
      <motion.line x1="139" y1="205" x2="157" y2="205" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.83)} />

      {/* Camera gimbal */}
      <motion.circle cx="120" cy="174" r="10" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.88)} />
      <motion.circle cx="120" cy="174" r="4" stroke="white" strokeWidth="0.6"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.93)} />

      {/* L dimension */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.38 }} transition={d(1.2)}>
        <line x1="82" y1="220" x2="158" y2="220" stroke="white" strokeWidth="0.4" />
        <line x1="82" y1="216" x2="82" y2="224" stroke="white" strokeWidth="0.4" />
        <line x1="158" y1="216" x2="158" y2="224" stroke="white" strokeWidth="0.4" />
        <text x="120" y="232" textAnchor="middle" fill="white" fontSize="8" fontFamily="JetBrains Mono, monospace">L</text>
      </motion.g>

      {/* Front elevation label */}
      <motion.text x="120" y="268" textAnchor="middle" fill="white" fontSize="7.5"
        fontFamily="JetBrains Mono, monospace" letterSpacing="1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 0.32 }} transition={d(1.3)}>
        FRONT ELEVATION
      </motion.text>

      {/* ═══ PLAN VIEW (TOP) ═══ */}

      {/* Body octagon */}
      <motion.path d="M 348,132 L 390,132 L 407,152 L 407,177 L 390,197 L 348,197 L 331,177 L 331,152 Z"
        stroke="white" strokeWidth="1.0"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.3)} />

      {/* Center detail rect */}
      <motion.rect x="348" y="150" width="42" height="30" rx="2" stroke="white" strokeWidth="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.5)} />

      {/* NW arm */}
      <motion.line x1="339" y1="140" x2="285" y2="86" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.55)} />
      {/* NE arm */}
      <motion.line x1="399" y1="140" x2="453" y2="86" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.55)} />
      {/* SW arm */}
      <motion.line x1="339" y1="189" x2="285" y2="243" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.6)} />
      {/* SE arm */}
      <motion.line x1="399" y1="189" x2="453" y2="243" stroke="white" strokeWidth="0.9"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.6)} />

      {/* Motor housings */}
      {[[285,86],[453,86],[285,243],[453,243]].map(([cx,cy], i) => (
        <motion.circle key={`m${i}`} cx={cx} cy={cy} r="13" stroke="white" strokeWidth="0.9"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.65, delay: 0.68 + i * 0.05, ease: 'easeOut' }} />
      ))}

      {/* Prop sweep circles (dashed) */}
      {[[285,86],[453,86],[285,243],[453,243]].map(([cx,cy], i) => (
        <motion.circle key={`ps${i}`} cx={cx} cy={cy} r="30" stroke="white" strokeWidth="0.55"
          strokeDasharray="2.5 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay: 0.8 + i * 0.05, ease: 'easeOut' }} />
      ))}

      {/* Prop blades (cross through each motor) */}
      {[[285,86],[453,86],[285,243],[453,243]].map(([cx,cy], i) => (
        <motion.g key={`pb${i}`}
          initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
          transition={{ delay: 1.0 + i * 0.04 }}>
          <line x1={cx-20} y1={cy} x2={cx+20} y2={cy} stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <line x1={cx} y1={cy-20} x2={cx} y2={cy+20} stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </motion.g>
      ))}

      {/* Center camera top view */}
      <motion.circle cx="369" cy="164" r="9" stroke="white" strokeWidth="0.7"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.92)} />
      <motion.circle cx="369" cy="164" r="3.5" stroke="white" strokeWidth="0.6"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={d(0.97)} />

      {/* D horizontal dimension */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.38 }} transition={d(1.2)}>
        <line x1="272" y1="60" x2="466" y2="60" stroke="white" strokeWidth="0.4" />
        <line x1="272" y1="55" x2="272" y2="65" stroke="white" strokeWidth="0.4" />
        <line x1="466" y1="55" x2="466" y2="65" stroke="white" strokeWidth="0.4" />
        <text x="369" y="53" textAnchor="middle" fill="white" fontSize="8" fontFamily="JetBrains Mono, monospace">D</text>
      </motion.g>

      {/* D vertical dimension */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.38 }} transition={d(1.25)}>
        <line x1="259" y1="73" x2="259" y2="256" stroke="white" strokeWidth="0.4" />
        <line x1="255" y1="73" x2="263" y2="73" stroke="white" strokeWidth="0.4" />
        <line x1="255" y1="256" x2="263" y2="256" stroke="white" strokeWidth="0.4" />
        <text x="250" y="168" textAnchor="middle" fill="white" fontSize="8" fontFamily="JetBrains Mono, monospace">D</text>
      </motion.g>

      {/* Plan view label */}
      <motion.text x="369" y="268" textAnchor="middle" fill="white" fontSize="7.5"
        fontFamily="JetBrains Mono, monospace" letterSpacing="1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 0.32 }} transition={d(1.3)}>
        PLAN VIEW
      </motion.text>

      {/* Title top-left */}
      <motion.text x="22" y="24" fill="white" fontSize="8.5"
        fontFamily="JetBrains Mono, monospace" letterSpacing="2"
        initial={{ opacity: 0 }} animate={{ opacity: 0.42 }} transition={d(0.1)}>
        QUADROcopter
      </motion.text>

      {/* Spec notes */}
      <motion.text x="490" y="296" textAnchor="end" fill="white" fontSize="7"
        fontFamily="JetBrains Mono, monospace"
        initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} transition={d(1.35)}>
        REV 03 / 2025
      </motion.text>
      <motion.text x="490" y="308" textAnchor="end" fill="white" fontSize="7"
        fontFamily="JetBrains Mono, monospace"
        initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} transition={d(1.4)}>
        UNIT: mm
      </motion.text>
    </svg>
  )
}

function SpecRow({ label, value }) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '10px 0' }}>
      <span style={{ width: 110, flexShrink: 0, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontFamily: 'JetBrains Mono, monospace' }}>{value}</span>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 380], [1, 0])
  const translateY = useTransform(scrollY, [0, 380], [0, -50])

  return (
    <section id="home" ref={ref} style={{ minHeight: '100vh', background: '#0d0d0d', display: 'flex', flexDirection: 'column', paddingTop: 52 }}>
      <motion.div style={{ opacity, y: translateY, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Doc header strip */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 42 }}>
            <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'JetBrains Mono, monospace' }}>JAEGYOON LEE</span>
            <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>PORTFOLIO DETAILS</span>
            <span style={{ fontSize: 10, letterSpacing: '0.12em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.38)' }}>ECE-001</span>
          </div>
        </div>

        {/* Metadata strip */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ display: 'flex', gap: 28, alignItems: 'center', height: 34 }}>
            {[['STATUS', 'ACTIVE'], ['CLASS', 'ECE / RESEARCH'], ['VERSION', 'v2025.1'], ['LOCATION', 'SEA, USA']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>{k}</span>
                <span style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontFamily: 'JetBrains Mono, monospace' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 52, paddingBottom: 48 }}>
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 52 }}>
            <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>01</span>
            <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>Overview</span>
          </motion.div>

          {/* Two-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, flex: 1, alignItems: 'start' }}>
            {/* Left: spec sheet */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 700, letterSpacing: '-2.5px', lineHeight: 0.95, color: '#ffffff', marginBottom: 12 }}>
                Jaegyoon<br />Lee
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
                style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 44, fontFamily: 'JetBrains Mono, monospace' }}>
                Engineer · Researcher · Builder
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }}>
                <SpecRow label="Focus" value="ECE / Robotics / AI" />
                <SpecRow label="Education" value="Univ. of Washington" />
                <SpecRow label="Role" value="Engineer & Researcher" />
                <SpecRow label="Location" value="Seattle, WA" />
                <SpecRow label="Status" value="Seeking Internship" />
                <SpecRow label="Contact" value={contactInfo.email} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{ display: 'flex', gap: 12, marginTop: 44, flexWrap: 'wrap' }}>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-ghost" style={{ fontSize: 10 }}>
                  View Work
                </button>
                <a href={contactInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10 }}>
                  Resume
                </a>
              </motion.div>
            </div>

            {/* Right: drone blueprint */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1.0 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: 400 }}
              className="hidden md:flex">
              {/* Corner brackets */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 18, height: 18, borderTop: '1px solid rgba(255,255,255,0.22)', borderLeft: '1px solid rgba(255,255,255,0.22)' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: 18, height: 18, borderTop: '1px solid rgba(255,255,255,0.22)', borderRight: '1px solid rgba(255,255,255,0.22)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: 18, height: 18, borderBottom: '1px solid rgba(255,255,255,0.22)', borderLeft: '1px solid rgba(255,255,255,0.22)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 18, height: 18, borderBottom: '1px solid rgba(255,255,255,0.22)', borderRight: '1px solid rgba(255,255,255,0.22)' }} />

              <DroneBlueprintSVG />
            </motion.div>
          </div>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 52, paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontFamily: 'JetBrains Mono, monospace' }}>SCROLL TO EXPLORE</span>
            <span style={{ fontSize: 9, letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.2)' }}>© 2025 JAEGYOON LEE</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
