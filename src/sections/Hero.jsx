import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

const codeLines = [
  { type: 'comment', text: '// Researcher & Engineer' },
  { parts: [
    { cls: 'code-keyword', t: 'const' },
    { cls: '',             t: ' engineer = {' },
  ]},
  { parts: [
    { cls: '',           t: '  ' },
    { cls: 'code-var',   t: 'name' },
    { cls: '',           t: ': ' },
    { cls: 'code-string',t: "'Jaegyoon Lee'" },
    { cls: '',           t: ',' },
  ]},
  { parts: [
    { cls: '',           t: '  ' },
    { cls: 'code-var',   t: 'skills' },
    { cls: '',           t: ': [' },
    { cls: 'code-string',t: "'Software'" },
    { cls: '',           t: ', ' },
    { cls: 'code-string',t: "'ROS2'" },
    { cls: '',           t: ', ' },
    { cls: 'code-string',t: "'Controls'" },
    { cls: '',           t: ',' },
  ]},
  { parts: [
    { cls: '',           t: '  ' },
    { cls: 'code-var',   t: 'focus' },
    { cls: '',           t: ': [' },
    { cls: 'code-string',t: "'Robotics'" },
    { cls: '',           t: ', ' },
    { cls: 'code-string',t: "'Embedded Systems'" },
    { cls: '',           t: '],' },
  ]},
  { parts: [
    { cls: '',           t: '  ' },
    { cls: 'code-var',   t: 'learning' },
    { cls: '',           t: ': ' },
    { cls: 'code-string',t: "'Always'" },
  ]},
  { parts: [{ cls: '', t: '};' }] },
]

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden w-full max-w-md"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-slate-400 font-mono">engineer.js</span>
      </div>
      {/* Code */}
      <div className="p-5 font-mono text-sm leading-7 text-slate-700">
        {codeLines.map((line, i) => (
          <div key={i}>
            {line.type === 'comment' ? (
              <span className="code-comment">{line.text}</span>
            ) : line.type === 'text' ? (
              <span>&nbsp;</span>
            ) : (
              <span>
                {line.parts.map((p, j) => (
                  <span key={j} className={p.cls}>{p.t}</span>
                ))}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-surface flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-lg mb-4"
          >
            Hello! I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-extrabold text-slate-800 leading-tight mb-2"
          >
            Jaegyoon{' '}
            <span className="text-accent">Lee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-medium text-slate-500 mb-5"
          >
            Engineer &amp; Researcher
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-500 text-lg leading-relaxed max-w-md mb-8"
          >
            Building intelligent autonomous systems at the intersection of
            robotics, embedded engineering, and full-stack software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button onClick={() => scrollTo('contact')} className="btn-primary">
              Contact Me
            </button>
            <button onClick={() => scrollTo('projects')} className="btn-outline">
              View Projects
            </button>

            {/* Social icons */}
            <div className="flex gap-3 ml-2">
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-accent hover:border-accent transition-colors shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-accent hover:border-accent transition-colors shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-accent hover:border-accent transition-colors shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: code card */}
        <div className="flex justify-center md:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
