import { useEffect } from 'react'

export function useMotion(pathname) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const nodes = [...document.querySelectorAll('[data-reveal]')]
    let observer
    const revealAll = () => nodes.forEach(node => node.classList.add('is-visible'))
    if ((media.matches || document.documentElement.dataset.motion==='off') || !('IntersectionObserver' in window)) revealAll()
    else {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.08 })
      nodes.forEach(node => { node.classList.add('will-reveal'); observer.observe(node) })
    }
    media.addEventListener('change', revealAll)
    window.addEventListener('portfolio-motion-change',revealAll)
    const progress = document.querySelector('.scroll-progress')
    const root = document.documentElement
    let scrollbarTimer
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (progress) progress.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`
    }
    const onScroll = () => {
      updateProgress()
      root.classList.add('benson-scroll-active')
      clearTimeout(scrollbarTimer)
      scrollbarTimer = setTimeout(() => root.classList.remove('benson-scroll-active'), 700)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    updateProgress()
    return () => {
      observer?.disconnect()
      media.removeEventListener('change', revealAll)
      window.removeEventListener('portfolio-motion-change',revealAll)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(scrollbarTimer)
      root.classList.remove('benson-scroll-active')
    }
  }, [pathname])
}

export function trackPointer(event) {
  if (document.documentElement.dataset.motion==='off') return
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  element.style.setProperty('--pointer-x', `${x * 100}%`)
  element.style.setProperty('--pointer-y', `${y * 100}%`)
  element.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`)
  element.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`)
}

export function resetPointer(event) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg')
  event.currentTarget.style.setProperty('--tilt-y', '0deg')
}
