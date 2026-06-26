import { useEffect, useState, useRef } from 'react'

export default function useTypewriter(text, speed = 26, start = true) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!start) return
    setOutput('')
    setDone(false)
    let i = 0
    ref.current = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(ref.current)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(ref.current)
  }, [text, speed, start])

  const skip = () => {
    if (ref.current) clearInterval(ref.current)
    setOutput(text)
    setDone(true)
  }

  return { output, done, skip }
}
