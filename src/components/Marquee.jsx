const ITEMS = [
  'ECE', '·', 'ROBOTICS', '·', 'EMBEDDED SYSTEMS', '·', 'SIGNAL PROCESSING', '·',
  'PYTHON', '·', 'ARDUINO', '·', 'FPGA', '·', 'NEURAL NETWORKS', '·',
  'AUTONOMOUS SYSTEMS', '·', 'FLUTTER', '·', 'ROS2', '·', 'COMPUTER VISION', '·',
]

const STYLE = `
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 28s linear infinite;
  }
  .marquee-track:hover { animation-play-state: paused; }
`

export default function Marquee({ inverted = false }) {
  const repeated = [...ITEMS, ...ITEMS]
  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden',
      background: inverted ? 'rgba(255,255,255,0.03)' : 'transparent',
      padding: '14px 0',
    }}>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: item === '·' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.38)',
              fontFamily: '"JetBrains Mono", monospace',
              paddingRight: item === '·' ? 20 : 28,
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
