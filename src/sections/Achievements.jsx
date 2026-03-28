import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { achievements } from '../data/achievements'

function AchievementCard({ achievement, index }) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(37,99,235,0.12)' }}
      onClick={() => navigate(`/achievements/${achievement.slug}`)}
      className="flex-shrink-0 w-80 bg-white rounded-2xl border border-slate-100 p-6 cursor-pointer transition-shadow duration-300 flex flex-col"
    >
      {/* Icon + year */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: achievement.iconColor + '18' }}
        >
          <svg
            width="22" height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={achievement.iconColor}
            strokeWidth="2"
          >
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <span className="text-slate-400 text-sm font-mono">{achievement.year}</span>
      </div>

      <h3 className="font-bold text-slate-800 text-base leading-snug mb-2">{achievement.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">{achievement.description}</p>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-50">
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: achievement.iconColor + '15', color: achievement.iconColor }}
        >
          {achievement.category}
        </span>
        {achievement.certificateUrl ? (
          <a
            href={achievement.certificateUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-accent text-xs font-semibold flex items-center gap-1 hover:underline"
          >
            View Certificate
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ) : (
          <span className="text-slate-400 text-xs">Click for details →</span>
        )}
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  const trackRef = useRef(null)

  return (
    <section id="achievements" className="bg-surface">
      <div className="section-container">
        <SectionTitle
          title="Achievements"
          subtitle="A collection of my academic awards and professional accomplishments earned throughout my journey."
        />

        <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>
          Drag to explore
        </p>

        {/* Draggable carousel */}
        <motion.div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={trackRef}
          style={{ scrollbarWidth: 'none' }}
        >
          {achievements.map((a, i) => (
            <AchievementCard key={a.slug} achievement={a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
