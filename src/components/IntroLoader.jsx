import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  { text: 'you are entering', delay: 0.6, size: 'sm' },
  { text: "Jaegyoon Lee's", delay: 1.4, size: 'lg' },
  { text: 'Portfolio', delay: 2.0, size: 'xl' },
]

export default function IntroLoader({ onComplete }) {
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(true)
  const [textPhase, setTextPhase] = useState(false)

  useEffect(() => {
    /* Start text phase shortly after mount */
    const t1 = setTimeout(() => setTextPhase(true), 400)

    /* Exit after ~4.2 s */
    const t2 = setTimeout(() => {
      setVisible(false)
    }, 4200)

    /* Notify parent after exit animation finishes */
    const t3 = setTimeout(() => {
      onComplete?.()
    }, 5000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background video */}
          <video
            ref={videoRef}
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            loop
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.45,
            }}
          />

          {/* Dark cinematic vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Cinematic letterbox bars */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10vh', background: '#000', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10vh', background: '#000', zIndex: 1 }} />

          {/* Text */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}>
            {textPhase && LINES.map(({ text, delay, size }) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: '#ffffff',
                  fontFamily: '"JetBrains Mono", monospace',
                  letterSpacing: size === 'sm' ? '0.32em' : size === 'lg' ? '0.18em' : '0.25em',
                  textTransform: 'uppercase',
                  fontSize: size === 'sm' ? 11 : size === 'lg' ? 'clamp(18px, 3vw, 32px)' : 'clamp(26px, 4vw, 48px)',
                  fontWeight: size === 'sm' ? 400 : size === 'lg' ? 300 : 700,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                {text}
              </motion.p>
            ))}

            {/* Thin separator line */}
            {textPhase && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  marginTop: 24,
                  height: 1,
                  width: 120,
                  background: 'rgba(255,255,255,0.35)',
                  transformOrigin: 'center',
                }}
              />
            )}

            {/* Enter hint */}
            {textPhase && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.0 }}
                style={{
                  marginTop: 16,
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontWeight: 400,
                }}
              >
                ECE-001 · Seattle, WA
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
