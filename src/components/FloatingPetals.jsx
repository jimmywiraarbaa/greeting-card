import { useMemo } from 'react'

const GLYPHS = ['🌸', '💜', '✦', '🌺', '💜', '✿']

export default function FloatingPetals({ count = 24 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * -20,
        duration: 12 + Math.random() * 14,
        drift: (Math.random() - 0.5) * 130,
        glyph: GLYPHS[i % GLYPHS.length],
        opacity: 0.5 + Math.random() * 0.5,
      })),
    [count],
  )

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
            '--o': p.opacity,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  )
}
