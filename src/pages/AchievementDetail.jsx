import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { achievements } from '../data/achievements'

export default function AchievementDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const a = achievements.find((x) => x.slug === slug)

  if (!a) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 text-lg">Achievement not found.</p>
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
        {/* Banner */}
        <div
          className="w-full py-20 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${a.iconColor}22 0%, ${a.iconColor}08 100%)` }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-md"
              style={{ background: a.iconColor + '20' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={a.iconColor} strokeWidth="1.8">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ background: a.iconColor + '18', color: a.iconColor }}
            >
              {a.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">{a.title}</h1>
            <p className="text-slate-500 mt-2">{a.issuer} · {a.year}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 space-y-8">
          <button onClick={() => navigate(-1)} className="btn-outline gap-2 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Achievements
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="card space-y-4"
          >
            <h2 className="font-bold text-lg text-slate-800">Summary</h2>
            <p className="text-slate-500 leading-relaxed">{a.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="card space-y-4"
          >
            <h2 className="font-bold text-lg text-slate-800">Details</h2>
            <p className="text-slate-500 leading-relaxed">{a.details}</p>
          </motion.div>

          {a.certificateUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={a.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View Certificate
              </a>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
