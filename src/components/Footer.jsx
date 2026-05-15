import { contactInfo } from '../data/contact'

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '40px 0' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-14" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', fontFamily: 'JetBrains Mono, monospace' }}>
          © 2025 Jaegyoon Lee
        </span>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {[
            ['GitHub', contactInfo.github],
            ['LinkedIn', contactInfo.linkedin],
            ['Resume', contactInfo.resumeUrl],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >
              {label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.14)', fontFamily: 'JetBrains Mono, monospace' }}>
          ECE-001
        </span>
      </div>
    </footer>
  )
}
