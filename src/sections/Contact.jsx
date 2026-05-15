import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '../data/contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mailto = `mailto:${contactInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
    window.open(mailto)
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="section-container">
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>06</span>
          <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>Contact</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left: heading + info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.0, color: '#ffffff', marginBottom: 24 }}>
              Let's<br />Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.42)', marginBottom: 44 }}>
              Open to internship opportunities, research collaborations, and interesting engineering challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              {[
                ['Email', contactInfo.email],
                ['Location', contactInfo.location],
                ['LinkedIn', 'linkedin.com/in/jaegyoon-lee'],
                ['GitHub', 'github.com/Jae-Lee-Tho'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '12px 0' }}>
                  <span style={{ width: 90, flexShrink: 0, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', fontFamily: 'JetBrains Mono, monospace' }}>{k}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'JetBrains Mono, monospace' }}>{v}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            {sent ? (
              <div style={{ paddingTop: 48 }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                  Email client opened. Looking forward to connecting.
                </p>
                <button onClick={() => setSent(false)} className="btn-ghost" style={{ marginTop: 24, fontSize: 10 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                <div>
                  <label className="spec-label" style={{ display: 'block', marginBottom: 10 }}>Name</label>
                  <input
                    className="input-technical"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="spec-label" style={{ display: 'block', marginBottom: 10 }}>Email</label>
                  <input
                    className="input-technical"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="spec-label" style={{ display: 'block', marginBottom: 10 }}>Message</label>
                  <textarea
                    className="input-technical"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={5}
                    required
                    style={{ resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-ghost" style={{ fontSize: 10, alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
