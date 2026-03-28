import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import { contactInfo } from '../data/contact'

const NAV_LINKS = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollTo(id) {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="text-accent font-bold text-2xl tracking-tight">
          JL.
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                ${isHome && active === id ? 'text-accent' : 'text-slate-600 hover:text-accent hover:bg-blue-50'}`}
            >
              {label}
              {isHome && active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Resume button */}
        <a
          href={contactInfo.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-slate-700 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-slate-700 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-slate-700 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left px-4 py-2.5 text-sm font-medium text-slate-700 rounded-xl hover:bg-blue-50 hover:text-accent transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={contactInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 btn-primary text-sm justify-center"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
