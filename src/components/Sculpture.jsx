import { useEffect, useRef } from 'react'
import { mountSculpture } from '../lib/sculpture'

export default function Sculpture() {
  const canvas = useRef(null)
  useEffect(() => mountSculpture(canvas.current), [])
  return <div className="sculpture-shell" aria-hidden="true"><div className="sculpture-halo" /><div className="sculpture-fallback"><img src="/images/sculpture-fallback.webp" alt="" width="700" height="700" fetchPriority="high" /></div><canvas ref={canvas} className="sculpture-canvas" /><span className="sculpture-coordinate">X / 06° &nbsp; Y / 26°</span></div>
}
