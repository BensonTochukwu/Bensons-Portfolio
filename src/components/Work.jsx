import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiArrowUpRight, FiGithub, FiGrid, FiList } from 'react-icons/fi'
import { projects, experiments } from '../data/projects'
import { trackPointer, resetPointer } from '../hooks/useMotion'
import Magnetic from './Magnetic'

export function ProjectCard({ project }) {
  return <article className="project-card" style={{ '--project-color': project.color }} data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}>
    <Link to={`/projects/${project.slug}`} className="project-visual" aria-label={`Read the ${project.name} case study`}><div className="visual-caption"><span>{project.category}</span><span>{project.number} / 04</span></div><div className="project-screen"><div className="window-bar" aria-hidden="true"><i /><i /><i /><span>{project.name}</span></div><img src={project.image} alt={project.imageAlt} loading="lazy" width="1600" height="911" /></div><span className="visual-open" aria-hidden="true"><FiArrowUpRight /></span></Link>
    <div className="project-info"><span className="project-status"><i />{project.status}</span><Link to={`/projects/${project.slug}`} className="project-title"><h3>{project.name}</h3><FiArrowUpRight /></Link><p>{project.summary}</p><div className="project-tags">{project.stack.slice(0,4).map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-bottom"><span>{project.role}</span><Link to={`/projects/${project.slug}`}>Case study <FiArrowRight /></Link></div></div>
  </article>
}

export function WorkShowcase() {
  const root=useRef(null), track=useRef(null)
  const [active,setActive]=useState(0)
  useEffect(()=>{
    const section=root.current, element=track.current
    const media=matchMedia('(min-width: 1000px) and (min-height: 860px)')
    const reduced=matchMedia('(prefers-reduced-motion: reduce)')
    let frame=0
    const update=()=>{
      frame=0
      const enabled=media.matches && !reduced.matches
      section.classList.toggle('is-pinned',enabled)
      if(!enabled){element.style.transform='';section.style.setProperty('--work-progress','0');return}
      const rect=section.getBoundingClientRect(), pin=section.querySelector('.work-pin')
      const range=section.offsetHeight-pin.offsetHeight
      const progress=Math.max(0,Math.min(1,(88-rect.top)/Math.max(1,range)))
      element.style.transform=`translate3d(${-progress*(element.scrollWidth-element.clientWidth)}px,0,0)`
      section.style.setProperty('--work-progress',String(progress))
      setActive(Math.min(3,Math.round(progress*3)))
    }
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)}
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule)
    window.addEventListener('portfolio-motion-change',schedule);reduced.addEventListener('change',schedule);media.addEventListener('change',schedule)
    update()
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);window.removeEventListener('portfolio-motion-change',schedule);reduced.removeEventListener('change',schedule);media.removeEventListener('change',schedule)}
  },[])
  const select=(index,keyboard=false)=>{
    setActive(index)
    const section=root.current
    const behavior=keyboard || matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion==='off'?'instant':'smooth'
    if(!section.classList.contains('is-pinned')){section.querySelector(`[data-project="${index}"]`).scrollIntoView({behavior,block:'start'});return}
    const pin=section.querySelector('.work-pin')
    window.scrollTo({top:window.scrollY+section.getBoundingClientRect().top-88+index/3*(section.offsetHeight-pin.offsetHeight),behavior})
  }
  return <section id="work" className="work-showcase" ref={root} data-chapter="02"><div className="work-pin"><div className="work-stage-heading container"><div><span className="eyebrow">SELECTED WORK / 2026</span><h2>Built. Shipped.<br /><em>Put to work.</em></h2></div><div><span className="work-count">0{active+1}<i>/ 04</i></span><Link className="text-link" to="/projects">View work index <FiArrowUpRight /></Link></div></div>
    <div className="work-stage container"><div className="work-track" ref={track}>{projects.map((project,index)=><article className="work-scene" key={project.slug} data-project={index} onFocusCapture={event=>{if(root.current.classList.contains('is-pinned') && event.target.matches(':focus-visible'))select(index,true)}} style={{'--project-color':project.color}}><div className="scene-copy"><span className="eyebrow">{project.number} / {project.category}</span><h3>{project.name}</h3><p>{project.summary}</p><span className="scene-status"><i />{project.status}</span><div className="scene-tools">{project.stack.slice(0,4).map(tool=><span key={tool}>{tool}</span>)}</div><div className="scene-action"><Magnetic><Link className="scene-button" to={`/projects/${project.slug}`} aria-label={`Read the ${project.name} case study`}><FiArrowUpRight /></Link></Magnetic><Link className="text-link" to={`/projects/${project.slug}`}>Inside the build <FiArrowRight /></Link></div></div><Link className="scene-image" to={`/projects/${project.slug}`} aria-label={`Explore ${project.name}`}><span className="scene-image-index">0{index+1}</span><div className="scene-browser"><div className="window-bar" aria-hidden="true"><i /><i /><i /><span>{project.name}</span></div><img src={project.image} alt={project.imageAlt} width="1600" height="911" loading="lazy" /></div><span className="scene-proof">{project.proof}</span></Link></article>)}</div></div><div className="work-stage-bottom container"><span>SCROLL THROUGH THE BUILDS <FiArrowRight /></span><div className="work-pagination" aria-label="Jump to a project">{projects.map((project,index)=><button key={project.slug} aria-label={`Jump to ${project.name}`} aria-current={active===index?'step':undefined} onClick={()=>select(index)} className={active===index?'is-active':''}>0{index+1}</button>)}</div><span>FOUR PLATFORMS. REAL RESPONSIBILITIES.</span></div></div></section>
}

export function SelectedWork({showFilters=false}) {
  const [filter,setFilter]=useState('All work'),[view,setView]=useState('index'),[hover,setHover]=useState(null)
  const filtered=projects.filter(project=>filter==='All work'||project.category===filter)
  if(!showFilters)return <WorkShowcase />
  return <section id="work" className="work-section container section-space"><div className="section-intro" data-reveal><div><span className="eyebrow">SELECTED WORK / 2026</span><h2>The work<br /><em>in detail.</em></h2></div><p>Four platforms. Different challenges.<br />Clear contributions behind every build.</p></div><div className="work-controls"><div className="work-filters" role="group" aria-label="Filter projects">{['All work','Operations','Public service','Commerce'].map(label=><button key={label} className={filter===label?'is-active':''} aria-pressed={filter===label} onClick={()=>{setFilter(label);setHover(null)}}>{label}</button>)}</div><div className="work-view-switch" role="group" aria-label="Project layout"><button aria-label="Index view" aria-pressed={view==='index'} onClick={()=>setView('index')}><FiList /></button><button aria-label="Grid view" aria-pressed={view==='grid'} onClick={()=>setView('grid')}><FiGrid /></button></div></div>
  {view==='grid'?<div className="projects-grid" key={filter}>{filtered.map(project=><ProjectCard key={project.slug} project={project} />)}</div>:<div className="work-index"><div className="work-index-heading"><span>PROJECT</span><span>MY ROLE</span><span>STATUS</span></div>{filtered.map(project=><Link key={project.slug} className="work-index-row" to={`/projects/${project.slug}`} onPointerEnter={()=>setHover(project.slug)} onPointerLeave={()=>setHover(null)} onFocus={()=>setHover(project.slug)} onBlur={()=>setHover(null)} style={{'--project-color':project.color}}><span className="index-title"><sup>{project.number}</sup>{project.name}</span><span className="index-role">{project.role}</span><span className="index-status">{project.status}</span><FiArrowUpRight /></Link>)}<div className={`index-image-preview ${hover?'is-visible':''}`} aria-hidden="true">{projects.map(project=><div key={project.slug} className={hover===project.slug?'is-active':''} style={{'--project-color':project.color}}><img src={project.image} alt="" width="1600" height="911" loading="lazy" /><span>{project.name} <FiArrowUpRight /></span></div>)}</div></div>}
  </section>
}

export function MoreWork() {
  return <section className="more-work container section-space" aria-labelledby="more-work-title"><div className="section-intro" data-reveal><div><span className="eyebrow">THE EXPLORATIONS</span><h2 id="more-work-title">Off the<br /><em>workbench.</em></h2></div><p>Personal builds and websites that helped shape my approach.</p></div><div className="experiment-grid">{experiments.map(project=><article className="experiment-card" key={project.name} data-reveal><a className="experiment-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><img src={project.image} alt={`${project.name} interface`} width="1280" height="720" loading="lazy" /><FiArrowUpRight /></a><div className="experiment-info"><span className="eyebrow">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><span className="experiment-stack">{project.stack}</span><div className="experiment-links"><a href={project.url} target="_blank" rel="noreferrer">Live site <FiArrowUpRight /></a>{project.github&&<a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> Source code</a>}</div></div></article>)}</div></section>
}
