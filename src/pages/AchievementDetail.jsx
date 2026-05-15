import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { achievements } from '../data/achievements'

export default function AchievementDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const a = achievements.find(x => x.slug === slug)

  if (!a) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#0d0d0d' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>Achievement not found.</p>
        <button onClick={() => navigate('/')} className="btn-ghost">← Back Home</button>
      </div>
    )
  }

  const index = achievements.findIndex(x => x.slug === slug)
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ paddingTop: 52 }}>
        {/* Banner */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 42, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>ACHIEVEMENT DETAIL</span>
            <span style={{ fontSize: 10, letterSpacing: '0.12em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.2)' }}>ACH-{num}</span>
          </div>
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ paddingTop: 56, paddingBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>{num}</span>
              <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
              <span className="tag" style={{ fontSize: 9 }}>{a.category}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(24px, 4.5vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff', marginBottom: 16 }}>
              {a.title}
            </h1>
            <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>
              {a.issuer} · {a.year}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ paddingTop: 56, paddingBottom: 80 }}>
          <button onClick={() => navigate(-1)} className="btn-ghost" style={{ fontSize: 10, marginBottom: 48 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Achievements
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '28px' }}>
                <p className="spec-label" style={{ marginBottom: 14 }}>Summary</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: 14 }}>{a.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '28px' }}>
                <p className="spec-label" style={{ marginBottom: 14 }}>Details</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: 14 }}>{a.details}</p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p className="spec-label" style={{ marginBottom: 4 }}>Info</p>
                {[['Category', a.category], ['Issuer', a.issuer], ['Year', a.year]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 10 }}>
                    <span style={{ width: 80, flexShrink: 0, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>{k}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{v}</span>
                  </div>
                ))}
                {a.certificateUrl && (
                  <a href={a.certificateUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10, marginTop: 8, justifyContent: 'center' }}>
                    View Certificate →
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
