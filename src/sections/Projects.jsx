import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

const INITIAL_SHOW = 3

    function ProjectCard({ project, index }) {
      const navigate = useNavigate()

      return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ y: -4, boxShadow: '0 12px 40px -8px rgba(37,99,235,0.15)' }}
          onClick={() => navigate(`/projects/${project.slug}`)}
          className="bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer transition-shadow duration-300 flex flex-col"
        >
          {/* Image / Colour banner */}
    <div
      className="h-44 flex items-center justify-center relative overflow-hidden"
      style={{ background: project.bgColor || '#2563eb' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
        }}
      />

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.2"
          className="relative z-10"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      )}
    </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-slate-800 mb-2 leading-snug">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-outline text-xs py-2 px-4 gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-outline text-xs py-2 px-4 gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW)

  return (
    <section id="projects" className="bg-surface">
      <div className="section-container">
        <SectionTitle
          title="Projects"
          subtitle="Here are some of the projects I've worked on, showcasing my skills in robotics, embedded systems, and full-stack development."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > INITIAL_SHOW && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline gap-2"
            >
              {showAll ? 'Show Less' : `Show All (${projects.length})`}
              <svg
                width="16" height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
