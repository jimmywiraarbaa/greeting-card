import { useState } from 'react'

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    setTimeout(onOpen, 900)
  }

  return (
    <div className="envelope-scene">
      <div className="env-intro">
        <p className="for-label">Sepucuk surat untuk</p>
        <h1 className="env-name">Sindu Aulizahra</h1>
      </div>

      <div className={`envelope ${opening ? 'opening' : ''}`}>
        <div className="env-flap" />
        <div className="env-pocket" />
        <div className="env-seal">💜</div>
      </div>

      <button className="open-btn" onClick={handleOpen} disabled={opening}>
        {opening ? 'Membuka…' : 'Buka Kartu 💜'}
      </button>
      <p className="env-hint">ketuk untuk membuka &amp; memulai musik</p>
    </div>
  )
}
