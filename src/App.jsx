import { useState, useRef } from 'react'
import Envelope from './components/Envelope.jsx'
import MessageCard from './components/MessageCard.jsx'
import FloatingPetals from './components/FloatingPetals.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

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
      <FloatingPetals />
      <audio ref={audioRef} src="/100x.mp3" loop preload="auto" />
      {opened ? <MessageCard /> : <Envelope onOpen={handleOpen} />}
      {opened && (
        <button className="mute-btn" onClick={toggleMute} aria-label="Musik">
          {muted ? '🔇' : '🔊'}
        </button>
      )}
    </>
  )
}
