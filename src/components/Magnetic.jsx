import { trackPointer, resetPointer } from '../hooks/useMotion'

export default function Magnetic({ children, className = '' }) {
  const move = event => {
    trackPointer(event)
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off') return
    const element=event.currentTarget, rect=element.getBoundingClientRect()
    element.style.setProperty('--magnet-x',`${(event.clientX-rect.left-rect.width/2)*0.15}px`)
    element.style.setProperty('--magnet-y',`${(event.clientY-rect.top-rect.height/2)*0.15}px`)
  }
  const leave = event => { resetPointer(event);event.currentTarget.style.setProperty('--magnet-x','0px');event.currentTarget.style.setProperty('--magnet-y','0px') }
  return <span className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={leave}>{children}</span>
}
