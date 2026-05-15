import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const categoryLabel = {
  'drone-control': 'EMBEDDED SYSTEMS',
  'fpga-slot-machine': 'DIGITAL HARDWARE',
  'teragotchi': 'AI / MOBILE',
  'ai-compatibility': 'MACHINE LEARNING',
  'food-chatbot': 'BACKEND / NLP',
  'otv': 'ROBOTICS',
}

const techLabel = {
  'drone-control': 'Python · Arduino · EMG',
  'fpga-slot-machine': 'SystemVerilog · FPGA',
  'teragotchi': 'Flutter · FastAPI · OpenAI',
  'ai-compatibility': 'TensorFlow · Django · AWS',
  'food-chatbot': 'DialogFlow · FastAPI',
  'otv': 'Jetson · Arduino · C++',
}

function ProjectRow({ project, index, onClick }) {
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
      }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
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
        {project.image ? (
          <img src={project.image} alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        ) : (
          <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ opacity: 0.08 }}>
            <rect x="20" y="20" width="160" height="110" rx="2" stroke="white" strokeWidth="0.8" fill="none" />
            <line x1="20" y1="50" x2="180" y2="50" stroke="white" strokeWidth="0.4" />
            <line x1="70" y1="20" x2="70" y2="130" stroke="white" strokeWidth="0.4" />
            <circle cx="100" cy="90" r="22" stroke="white" strokeWidth="0.8" fill="none" />
          </svg>
        )}
        <div style={{ position: 'absolute', top: 12, left: 14, fontSize: 9, letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.35)' }}>
          {num}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14, minHeight: 140 }}>
        <div>
          <p style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 10 }}>
            {categoryLabel[project.slug] || 'PROJECT'}
          </p>
          <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 600, letterSpacing: '-0.4px', lineHeight: 1.2, color: '#ffffff', marginBottom: 10 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: 380 }}>
            {project.shortDesc}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>
            {techLabel[project.slug]}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.45)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span>View</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section id="projects" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-8 md:px-14" style={{ paddingTop: 96, paddingBottom: 96 }}>

        {/* Sticky + cards layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>

          {/* LEFT: sticky heading */}
          <div style={{ position: 'sticky', top: 72 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>03</span>
              <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>Projects</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: 1.05, color: '#ffffff', marginBottom: 20 }}>
              Selected<br />Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
              Hardware, AI, and software systems built at the intersection of research and engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ fontSize: 9, letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.28)', marginBottom: 6 }}>
                TOTAL PROJECTS
              </p>
              <p style={{ fontSize: 28, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '-1px' }}>
                {String(projects.length).padStart(2, '0')}
              </p>
            </motion.div>
          </div>

          {/* RIGHT: project rows */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {projects.map((project, i) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={i}
                onClick={() => navigate(`/projects/${project.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
