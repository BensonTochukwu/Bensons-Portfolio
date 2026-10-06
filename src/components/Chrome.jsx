import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMenu, FiX, FiPause, FiPlay } from 'react-icons/fi'

import Flower from './Flower'

const links = [['Work', '/#work'], ['Vaulta', '/#vaulta'], ['About', '/#about']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [motionOff,setMotionOff]=useState(()=>{try{return localStorage.getItem('benson-motion')==='off'}catch{return false}})
  useEffect(()=>{document.documentElement.dataset.motion=motionOff?'off':'on';window.dispatchEvent(new Event('portfolio-motion-change'));try{localStorage.setItem('benson-motion',motionOff?'off':'on')}catch{/* Optional preference storage. */}},[motionOff])
  const toggle = useRef(null)
  const nav = useRef(null)
  const location = useLocation()
  useEffect(() => {
    if (!open) return
    const onKey = event => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
      if (event.key === 'Tab') {
        const targets = [toggle.current, ...nav.current.querySelectorAll('a,button')]
        const first = targets[0], last = targets[targets.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    const onResize = () => { if (window.innerWidth > 760) setOpen(false) }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    const priorOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); document.body.style.overflow = priorOverflow }
  }, [open])
  const close = () => setOpen(false)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="scroll-progress" aria-hidden="true" />
    <header className={`site-header ${location.pathname === '/' ? 'header-home' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="nav-shell">
        <Link to="/" className="wordmark" onClick={close} aria-label="Benson, homepage">tb<Flower /></Link>
        <span className="nav-location">LAGOS, NG <span className="location-dot" /></span>
        <button className="menu-toggle icon-button" ref={toggle} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
        <nav id="primary-nav" ref={nav} className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">
          {links.map(([name, to]) => <Link key={name} to={to} onClick={close} className={location.hash === to.slice(1) ? 'nav-active' : ''}>{name}</Link>)}
          <button className="motion-toggle icon-button" onClick={()=>setMotionOff(!motionOff)} aria-pressed={motionOff} aria-label={motionOff?'Enable decorative motion':'Pause decorative motion'}>{motionOff?<FiPlay />:<FiPause />}</button>
          <Link to="/#contact" className="nav-contact" onClick={close}>Let’s talk <FiArrowUpRight /></Link>
        </nav>
      </div>
    </header>
  </>
}

export function Footer() {
  return <footer className="site-footer container">
    <div><Link to="/" className="wordmark">tb<Flower /></Link><p>Built with intention. Always evolving.</p></div>
    <div className="footer-links"><a href="https://github.com/BensonTochukwu" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/tochukwu-teco-benson/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="/Tochukwu-Teco-Benson-CV.pdf" target="_blank" rel="noreferrer">View CV <FiArrowUpRight /></a></div>
    <div className="footer-meta"><span>© {new Date().getFullYear()} Tochukwu Teco-Benson</span><a href="#main">Back to top ↑</a></div>
  </footer>
}

export function ChapterDock() {
  const location=useLocation()
  const [active,setActive]=useState('intro')
  useEffect(()=>{
    if(location.pathname!=='/')return
    const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id)},{rootMargin:'-15% 0px -65% 0px',threshold:0})
    const sections=[...document.querySelectorAll('[data-chapter]')]
    sections.forEach(section=>observer.observe(section))
    return()=>observer.disconnect()
  },[location.pathname])
  if(location.pathname!=='/')return null
  return <nav className="chapter-dock" aria-label="Portfolio chapters">{[['intro','01','Index'],['work','02','Work'],['vaulta','03','Vaulta'],['about','04','About'],['contact','05','Contact']].map(([id,number,label])=><Link key={id} to={`/#${id}`} aria-current={active===id?'location':undefined} className={active===id?'is-active':''}><span>{number}</span><span>{label}</span></Link>)}</nav>
}
