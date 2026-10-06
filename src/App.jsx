import { useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar, Footer, ChapterDock } from './components/Chrome'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import { useMotion } from './hooks/useMotion'

function Layout() {
  const location = useLocation()
  const previousPath=useRef(null)
  useMotion(location.pathname)
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null
      if (target) target.scrollIntoView({ behavior: previousPath.current===location.pathname && document.documentElement.dataset.motion!=='off' && !matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant', block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
      previousPath.current=location.pathname
      if (!location.hash) document.getElementById('main')?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash, location.key])
  return <><Navbar /><main id="main" tabIndex={-1} className="page-content" key={location.pathname}><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<CaseStudy />} /><Route path="/skills" element={<Navigate replace to="/#capabilities" />} /><Route path="/services" element={<Navigate replace to="/#capabilities" />} /><Route path="/about" element={<Navigate replace to="/#about" />} /><Route path="/contact" element={<Navigate replace to="/#contact" />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /><ChapterDock /></>
}

export default function App() {
  return <HelmetProvider><BrowserRouter><Layout /></BrowserRouter></HelmetProvider>
}
