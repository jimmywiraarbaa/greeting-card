import useTypewriter from '../hooks/useTypewriter.js'

const LETTER = `Ada warna yang selalu kuingat setiap kali namamu terlintas — lilac; lembut seperti senyummu, tenang seperti caramu menenangkan hari-hariku.

Mungkin ini hanya secarik kata, tapi aku ingin kau tahu: kehadiranmu adalah alasan kenapa hal-hal kecil terasa indah lagi. Tertawa yang tak perlu alasan, diam yang terasa hangat, dan waktu yang selalu kurasa berlalu terlalu cepat saat bersamamu.

Terima kasih sudah menjadi tempat pulang yang paling kusuka. Semoga setiap hari yang kau jalani sehangat dan sepelangi warna yang kau bawa ke dalam hidupku.

Selalu, untukmu. 💜`

export default function MessageCard() {
  const { output, done, skip } = useTypewriter(LETTER, 26)

  return (
    <div className="card-scene" onClick={done ? undefined : skip}>
      <article className="message-card">
        <header>
          <p className="card-eyebrow">Sepucuk surat untuk</p>
          <h1 className="card-name">Sindu Aulizahra</h1>
          <div className="card-divider">
            <span>💜</span>
          </div>
        </header>

        <p className="card-body">
          {output}
          {!done && <span className="cursor">▍</span>}
        </p>

        {!done ? (
          <p className="skip-hint">ketuk untuk membaca segera</p>
        ) : (
          <footer className="card-foot">🌸 💜 🌸</footer>
        )}
      </article>
    </div>
  )
}
