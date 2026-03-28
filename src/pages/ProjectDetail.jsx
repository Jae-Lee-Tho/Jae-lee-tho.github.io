import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 text-lg">Project not found.</p>
        <button onClick={() => navigate('/')} className="btn-primary">← Back Home</button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Navbar />

      <main className="pt-16 bg-surface min-h-screen">
        {/* Hero banner */}
        <div
          className="w-full py-20 flex items-center justify-center relative overflow-hidden"
          style={{ background: project.bgColor || '#2563eb', minHeight: 240 }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 60%)' }}
          />
          <div className="relative text-center px-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}
            >
              {project.period}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-14 space-y-10">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="btn-outline gap-2 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Projects
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div className="card">
                <h2 className="font-bold text-lg text-slate-800 mb-3">Overview</h2>
                <p className="text-slate-500 leading-relaxed">{project.description}</p>
              </div>

              {/* Key highlights */}
              <div className="card">
                <h2 className="font-bold text-lg text-slate-800 mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Tech stack */}
              <div className="card">
                <h3 className="font-bold text-sm text-slate-700 mb-3 uppercase tracking-wide">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="card">
                <h3 className="font-bold text-sm text-slate-700 mb-3 uppercase tracking-wide">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="card space-y-3">
                <h3 className="font-bold text-sm text-slate-700 mb-1 uppercase tracking-wide">Links</h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline w-full justify-center text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
