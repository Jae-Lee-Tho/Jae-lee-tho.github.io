import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import { contactInfo } from '../data/contact'

const NAV_LINKS = [
  { label: 'About',        id: 'about' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
]

function LiveTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => {
      const now = new Date()
      return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    }
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return <span>{time}</span>
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(['home', ...NAV_LINKS.map(l => l.id)])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function scrollTo(id) {
    setMenuOpen(false)
    if (!isHome) { navigate('/'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100) }
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-14 flex items-center justify-between" style={{ height: 52 }}>
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="text-white font-bold text-base tracking-tight">
          JL.
        </button>

        {/* Center: live time (desktop) */}
        <div className="hidden md:block" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, letterSpacing: '0.06em', fontFamily: 'JetBrains Mono, monospace' }}>
          <LiveTime />
        </div>

        {/* Right: nav links + resume */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isHome && active === id ? '#ffffff' : 'rgba(255,255,255,0.35)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = isHome && active === id ? '#ffffff' : 'rgba(255,255,255,0.35)'}
            >
              {label}
            </button>
          ))}
          <a href={contactInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: '6px 14px', fontSize: 10 }}>
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block h-px w-5 bg-current my-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            className="md:hidden px-8 py-5 flex flex-col gap-4"
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)}
                style={{ textAlign: 'left', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}>
                {label}
              </button>
            ))}
            <a href={contactInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost" style={{ width: 'fit-content' }}>Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
