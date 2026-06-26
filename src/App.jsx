import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Envelope from './components/Envelope.jsx'
import LetterScroll from './components/LetterScroll.jsx'
import FloatingPetals from './components/FloatingPetals.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  const handleOpen = () => {
    setOpened(true)
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.5
      audio.play().catch(() => {})
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    const next = !muted
    setMuted(next)
    audio.muted = next
  }

  return (
    <>
      <FloatingPetals count={opened ? 22 : 16} />
      <audio ref={audioRef} src="/100x.mp3" loop preload="auto" />

      {opened && <motion.div className="progress" style={{ scaleX: progress }} />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="env"
            className="screen"
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Envelope onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <LetterScroll />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <button className="mute-btn" onClick={toggleMute} aria-label="Musik">
          {muted ? '🔇' : '🔊'}
        </button>
      )}
    </>
  )
}
