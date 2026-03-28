import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const education = [
  {
    degree: 'BSc in Electrical & Computer Engineering',
    school: 'University of Washington, Seattle',
    period: '2025 – Expected Jun 2027',
    note: "Dean's List (Dec 2025)",
  },
  {
    degree: 'BSc in Computer Engineering',
    school: 'University of Maryland, College Park',
    period: 'Sep 2023 – May 2025',
    note: "Dean's List (Dec 2023, May 2024)",
  },
]

const experience = [
  {
    role: 'Undergraduate Researcher',
    org: 'Autonomous Robot Intelligence Lab, SNU',
    period: 'Mar 2026 – Present',
    location: 'Seattle, WA',
  },
  {
    role: 'Undergraduate Researcher',
    org: 'Autonomous Robot Intelligence Lab, SNU',
    period: 'May 2025 – Sep 2025',
    location: 'Seoul, South Korea',
  },
  {
    role: 'K-Capstone Industry Collaboration',
    org: 'Security Robotics / U.S. Expansion Project',
    period: 'Nov 2025 – Mar 2026',
    location: 'Seattle, WA',
  },
]

const areas = ['Robotics', 'Embedded', 'Full-Stack', 'AI/ML', 'FPGA']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle=""
        />

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left: bio + cards */}
          <div className="md:col-span-2 space-y-8">
            {/* Bio */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </span>
                <h3 className="font-bold text-slate-700 text-lg">Bio</h3>
              </div>
              <p className="text-slate-500 leading-relaxed">
                ECE student at the University of Washington with a passion for building intelligent autonomous
                systems. My research spans vision-based drone navigation and humanoid robotics, while my
                project work spans full-stack AI apps, FPGA design, and embedded systems. I thrive at
                the intersection of hardware and software.
              </p>
            </motion.div>

            {/* Education + Experience cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div {...fadeUp(0.1)} className="card space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </span>
                  <h3 className="font-bold text-slate-700">Education</h3>
                </div>
                {education.map((e, i) => (
                  <div key={i}>
                    <p className="font-semibold text-slate-800 text-sm leading-snug">{e.degree}</p>
                    <p className="text-accent text-xs mt-0.5">{e.school}</p>
                    <p className="text-slate-400 text-xs">{e.period}</p>
                    {e.note && <p className="text-slate-400 text-xs italic">{e.note}</p>}
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.15)} className="card space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  </span>
                  <h3 className="font-bold text-slate-700">Experience</h3>
                </div>
                {experience.map((e, i) => (
                  <div key={i}>
                    <p className="font-semibold text-slate-800 text-sm leading-snug">{e.role}</p>
                    <p className="text-accent text-xs mt-0.5">{e.org}</p>
                    <p className="text-slate-400 text-xs">{e.period} · {e.location}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: profile card */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-5">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border-4 border-blue-100 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden shadow-lg">
                {/* REPLACE src with your actual photo */}
                <img
                  src="https://ui-avatars.com/api/?name=JL&background=2563eb&color=fff&size=176&bold=true&font-size=0.4"
                  alt="Jaegyoon Lee"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-2 right-0 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                UW ECE
              </span>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl text-slate-800">Jaegyoon Lee</p>
              <p className="text-slate-500 text-sm">ECE Student &amp; Researcher</p>
            </div>

            {/* Area tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {areas.map((a) => (
                <span key={a} className="tag">{a}</span>
              ))}
            </div>

            {/* Resume download */}
            <a
              href="#"
              className="btn-primary w-full justify-center text-sm mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
