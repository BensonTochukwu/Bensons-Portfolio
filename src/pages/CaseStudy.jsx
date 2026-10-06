import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiMaximize2, FiX } from 'react-icons/fi'
import { projects } from '../data/projects'
import SEO from '../components/SEO'
import Contact from '../components/Contact'
import NotFound from './NotFound'

function Screenshot({ project }) {
  const dialog = useRef(null)
  useEffect(() => {
    const element = dialog.current
    let previousOverflow = ''
    const restore = () => { document.body.style.overflow = previousOverflow }
    const lock = () => { previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden' }
    element.addEventListener('close', restore)
    element.addEventListener('portfolio-open', lock)
    return () => { element.removeEventListener('close', restore); element.removeEventListener('portfolio-open', lock); if (element.open) restore() }
  }, [])
  const open = () => { dialog.current.showModal(); dialog.current.dispatchEvent(new Event('portfolio-open')) }
  return <>
    <button className="case-screenshot" onClick={open} aria-label={`Enlarge ${project.name} screenshot`}><img src={project.image} alt={project.imageAlt} width="1600" height="911" /><span><FiMaximize2 /> Explore the screen</span></button>
    <dialog className="image-dialog" ref={dialog} aria-label={`${project.name} screenshot`} onClick={event => { if (event.target === dialog.current) dialog.current.close() }}>
      <div className="dialog-toolbar"><span>{project.name}</span><button className="icon-button" onClick={() => dialog.current.close()} aria-label="Close screenshot"><FiX /></button></div>
      <img src={project.image} alt={project.imageAlt} width="1600" height="911" />
    </dialog>
  </>
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <NotFound />
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return <div className="case-study" style={{ '--project-color': project.color }}>
    <SEO title={`${project.name} — Tochukwu Teco-Benson`} description={project.summary} path={`/projects/${project.slug}`} image={project.image} />
    <section className="case-header container"><Link to="/projects" className="text-link"><FiArrowLeft /> All work</Link><div className="case-heading"><span className="eyebrow">CASE STUDY {project.number} / {project.category}</span><h1>{project.name}<span>.</span></h1><p className="case-headline">{project.headline}</p><p className="case-summary">{project.summary}</p></div><div className="case-meta"><div><span className="eyebrow">MY ROLE</span><strong>{project.role}</strong></div><div><span className="eyebrow">STATUS</span><strong>{project.status}</strong></div><a href={project.url} className="button button-primary" target="_blank" rel="noreferrer">{project.urlLabel} <FiArrowUpRight /></a></div></section>
    <div className="container"><Screenshot project={project} /></div>
    <section className="case-body container section-space"><aside className="case-sidebar"><span className="eyebrow">UNDER THE HOOD</span><div className="case-stack">{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div><span className="eyebrow">WHAT THIS DEMONSTRATES</span><div className="case-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p className="case-proof">{project.proof}</p></aside><div className="case-narrative"><article data-reveal><span className="eyebrow">01 / THE CONTEXT</span><h2>The work it needed to do.</h2><p>{project.context}</p></article><article data-reveal><span className="eyebrow">02 / MY CONTRIBUTION</span><h2>What I built.</h2><p>{project.contribution}</p></article><article data-reveal><span className="eyebrow">03 / THE FUNCTIONALITY</span><h2>The workflows behind the screens.</h2><div className="case-features">{project.features.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></article><article data-reveal><span className="eyebrow">04 / THE ENGINEERING</span><h2>How it connects.</h2><p>{project.technical}</p></article><article className="case-outcome" data-reveal><span className="eyebrow">05 / WHERE IT STANDS</span><h2>The result.</h2><p>{project.outcome}</p></article></div></section>
    <Link className="next-project container" to={`/projects/${next.slug}`}><div><span className="eyebrow">UP NEXT / {next.number}</span><h2>{next.name}</h2></div><FiArrowRight /></Link><Contact />
  </div>
}
