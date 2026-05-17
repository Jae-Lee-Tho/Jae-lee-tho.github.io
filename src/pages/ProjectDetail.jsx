import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#0d0d0d' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>Project not found.</p>
        <button onClick={() => navigate('/')} className="btn-ghost">← Back Home</button>
      </div>
    )
  }

  const projectIndex = projects.findIndex(p => p.slug === slug)
  const num = String(projectIndex + 1).padStart(2, '0')

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
          {/* Doc header */}
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 42, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>PROJECT DETAIL</span>
            <span style={{ fontSize: 10, letterSpacing: '0.12em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.2)' }}>PRJ-{num}</span>
          </div>

          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ paddingTop: 56, paddingBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>{num}</span>
              <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>Overview</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff', marginBottom: 16 }}>
              {project.title}
            </h1>
            <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>
              {project.period}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ paddingTop: 56, paddingBottom: 80 }}>
          {/* Back */}
          <button onClick={() => navigate(-1)} className="btn-ghost" style={{ fontSize: 10, marginBottom: 48 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Projects
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Main */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '28px' }}>
                <p className="spec-label" style={{ marginBottom: 14 }}>Overview</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: 14 }}>{project.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '28px' }}>
                <p className="spec-label" style={{ marginBottom: 18 }}>Key Highlights</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      style={{ display: 'flex', gap: 16, alignItems: 'flex-start', borderBottom: i < project.highlights.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', padding: '12px 0' }}>
                      <span style={{ fontSize: 10, fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.2)', flexShrink: 0, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '24px' }}>
                <p className="spec-label" style={{ marginBottom: 14 }}>Tech Stack</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tech.map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '24px' }}>
                <p className="spec-label" style={{ marginBottom: 14 }}>Topics</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: 9 }}>{t}</span>)}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', padding: '24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p className="spec-label" style={{ marginBottom: 8 }}>Links</p>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10, justifyContent: 'center' }}>
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 10, justifyContent: 'center' }}>
                    Live Demo →
                  </a>
                )}
                {!project.github && !project.live && (
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontFamily: 'JetBrains Mono, monospace' }}>Private / Internal</span>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Poster */}
        {project.poster && (
          <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ paddingBottom: 80 }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>Research Poster</span>
                <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.07)' }} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                style={{ border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                <img
                  src={project.poster}
                  alt={`${project.title} research poster`}
                  style={{ width: '100%', display: 'block', opacity: 0.9 }}
                />
              </motion.div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </motion.div>
  )
}
