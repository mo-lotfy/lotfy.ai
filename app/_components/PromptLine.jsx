'use client'

import { useEffect, useRef } from 'react'

export default function PromptLine() {
  const cmdRef = useRef(null)

  useEffect(() => {
    const el = cmdRef.current
    if (!el) return
    const full = 'whoami'
    el.textContent = ''
    let i = 0
    let timer
    const tick = () => {
      if (i <= full.length) {
        el.textContent = full.slice(0, i)
        i++
        timer = setTimeout(tick, 45)
      }
    }
    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="prompt-line">
      <span className="user">lotfy</span>
      <span className="at">@</span>
      <span className="host">lotfy.ai</span>
      <span className="at">:</span>
      <span className="host">~</span>
      <span className="at">$</span>{' '}
      <span className="cmd" ref={cmdRef}>
        whoami
      </span>
    </div>
  )
}
