import { motion } from 'framer-motion'

const LINES = [
  { hero: true, eyebrow: 'sepucuk surat untuk', text: 'Sindu Aulizahra' },
  { text: 'ada satu warna yang kuingat setiap kali namamu terlintas —' },
  { text: 'lilac.', accent: true, big: true },
  { text: 'lembut, persis seperti senyummu.' },
  { text: 'sejak kau hadir,' },
  { text: 'hal-hal kecil terasa indah lagi.' },
  { text: 'tertawa tanpa alasan,' },
  { text: 'diam yang terasa hangat,' },
  { text: 'dan waktu yang berlalu terlalu cepat.' },
  { text: 'terima kasih sudah menjadi' },
  { text: 'tempat pulang paling kusuka.', accent: true },
  { text: 'selalu, untukmu.', big: true, accent: true },
]

const reveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function LetterScroll() {
  return (
    <div className="letter">
      {LINES.map((l, i) => {
        const cls = ['line-text', l.accent && 'is-accent', l.big && 'is-big', l.hero && 'is-hero']
          .filter(Boolean)
          .join(' ')

        return (
          <section className="letter-section" key={i}>
            {l.eyebrow && (
              <motion.span
                className="line-eyebrow"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
              >
                {l.eyebrow}
              </motion.span>
            )}
            <motion.p
              className={cls}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            >
              {l.text}
              {l.emoji ? ` ${l.emoji}` : ''}
            </motion.p>
            {i === 0 && (
              <motion.div
                className="scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                scroll 💜
              </motion.div>
            )}
          </section>
        )
      })}
    </div>
  )
}
