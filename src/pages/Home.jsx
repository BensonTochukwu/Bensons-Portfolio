import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCode, FiDatabase, FiLayers, FiShield, FiPlus, FiMinus } from 'react-icons/fi'
import SEO from '../components/SEO'
import Contact from '../components/Contact'
import { SelectedWork } from '../components/Work'
import Sculpture from '../components/Sculpture'
import Magnetic from '../components/Magnetic'
import { trackPointer, resetPointer } from '../hooks/useMotion'

function Hero() {
  return <section id="intro" className="hero" data-chapter="01">
    <div className="hero-gridlines" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="hero-meta container"><span className="eyebrow">INDEPENDENT SOFTWARE ENGINEER</span><span className="eyebrow">LAGOS, NIGERIA / PORTFOLIO ’26</span></div>
    <div className="hero-main container">
      <div className="hero-name-wrap"><h1><span className="hero-name-top"><span>TOCHUKWU</span><sup>’26</sup></span><span className="hero-name-bottom">BENSON<span className="hero-name-dot">.</span></span></h1></div>
      <Sculpture />
      <div className="hero-identity"><span className="hero-small-cross" aria-hidden="true">✳</span><p>Full-stack developer.<br /><Link to="/#vaulta">Vaulta co-founder.</Link><br /><span>Building things people use.</span></p></div>
      <div className="hero-note"><span className="eyebrow">CODE / SYSTEMS / EXPERIENCE</span><p>Thoughtful on the outside.<br />Solid on the inside.</p><a href="/Tochukwu-Teco-Benson-CV.pdf" className="text-link" target="_blank" rel="noreferrer">View my CV <FiArrowUpRight /></a></div>
      <Magnetic className="hero-work-link"><a href="#work" className="round-button"><FiArrowDown /><span>EXPLORE<br />THE WORK</span></a></Magnetic>
    </div>
    <div className="hero-base container"><span>TOCHUKWU TECO-BENSON</span><span>SCROLL TO DISCOVER <FiArrowDown /></span><span>SELECTED WORK / 01—04</span></div>
    <div className="hero-marquee" aria-hidden="true"><div>{[0,1].map(i=><span key={i}>FULL-STACK DEVELOPMENT <b>✳</b> REAL-WORLD SYSTEMS <b>✳</b> FOUNDER MINDSET <b>✳</b> </span>)}</div></div>
  </section>
}

function IntroStatement() {
  return <section className="intro-statement container section-space">
    <span className="eyebrow" data-reveal><span className="small-cross">✳</span> A LITTLE CONTEXT</span>
    <div className="intro-statement-grid"><h2 className="statement-words" data-reveal>{'I build the experience people see, and the systems that make it work.'.split(' ').map((word,index)=><span key={index} style={{'--word':index}}>{word} </span>)}</h2><div data-reveal><p>Dashboards. Portals. Payments. Data.<br />From the first interface to the workflow behind it, I turn business needs into working software.</p><a className="text-link" href="#about">A bit more about me <FiArrowUpRight /></a></div></div>
    <div className="proof-grid" data-reveal><div><strong>2,262<span>+</span></strong><span>NYSC submissions supported</span></div><div><strong>400<span>+</span></strong><span>Zinny platform users</span></div><div><strong>7</strong><span>Babcock business units</span></div><div><strong>2 + 4</strong><span>Co-founders + Vaulta team members</span></div></div>
  </section>
}

const founderFeatures = [
  { label:'The workspace', text:'Client projects, assigned tasks, content calendars and creative reviews, all together. I built the complete platform independently.' },
  { label:'The access', text:'Invitation-based authentication and server-enforced roles, with a separate client portal. The right experience for the people doing the work.' },
  { label:'The infrastructure', text:'Next.js, TypeScript and Supabase. PostgreSQL records, secure file storage and version history, connected through Supabase APIs.' },
]

function Founder() {
  const [feature,setFeature]=useState(0)
  return <section id="vaulta" className="founder-section" data-chapter="03">
    <div className="container founder-topline"><span className="eyebrow">THE FOUNDER CHAPTER</span><span className="eyebrow">EST. MARCH 2026 / CREATIVE + TECHNOLOGY</span></div>
    <div className="container"><div className="founder-title" data-reveal><h2>vaulta<span>.</span></h2><span className="founder-cross" aria-hidden="true">✳</span></div>
      <div className="founder-layout"><div className="founder-story" data-reveal><span className="eyebrow">CO-FOUNDER & SOFTWARE ENGINEER</span><h3>I build the product.<br />I help run the business.</h3><p>I co-founded Vaulta to bring creative work and technology together. My partner and I now work with a team of four across our agency.</p><p>I lead technical delivery: shaping requirements, building client projects and maintaining what we ship. Along the way, I built the workspace our team uses every day.</p><div className="founder-facts"><div><strong>4</strong><span>Client websites delivered</span></div><div><strong>6</strong><span>People building Vaulta</span></div></div><Magnetic><a href="https://vaulta.ng" target="_blank" rel="noreferrer" className="button button-primary">Meet the agency <FiArrowUpRight /></a></Magnetic></div>
      <div className="founder-product" onPointerMove={trackPointer} onPointerLeave={resetPointer} data-reveal><div className="founder-product-label"><span><i /> BUILT BY ME. USED BY US.</span><Link to="/projects/vaulta-workspace">Workspace case study <FiArrowUpRight /></Link></div><Link className="founder-screen" to="/projects/vaulta-workspace"><img src="/work/vaulta-workspace.webp" alt="Vaulta Workspace, the operations platform I built independently for our team" width="1600" height="911" loading="lazy" /></Link><div className="founder-tabs" role="tablist" aria-label="Inside Vaulta Workspace">{founderFeatures.map((item,index)=><button key={item.label} role="tab" id={`founder-tab-${index}`} aria-controls="founder-feature" aria-selected={feature===index} onClick={()=>setFeature(index)} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();const next=(feature+(event.key==='ArrowRight'?1:2))%3;setFeature(next);document.getElementById(`founder-tab-${next}`)?.focus()}}} tabIndex={feature===index?0:-1}>{item.label}</button>)}</div><div id="founder-feature" className="founder-feature" role="tabpanel" aria-labelledby={`founder-tab-${feature}`}><p key={feature}>{founderFeatures[feature].text}</p></div></div></div>
    </div><div className="founder-bottom container"><span>CREATIVE + TECHNOLOGY</span><Link to="/projects/vaulta-workspace">Built solo. Working daily. <FiArrowRight /></Link></div>
  </section>
}

const capabilities = [
  { icon: FiLayers, number: '01', title: 'Frontend & interfaces', text: 'Responsive storefronts, dashboards and portals. Clear forms, useful admin tools and thoughtful interactions.', tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: FiDatabase, number: '02', title: 'Data & operational systems', text: 'Database-backed workflows, record management, migrations, file storage and practical reporting tools.', tools: ['PostgreSQL', 'Prisma', 'MongoDB', 'Supabase'] },
  { icon: FiShield, number: '03', title: 'Authentication & permissions', text: 'Authentication, protected routes, server-enforced roles, approval workflows and traceable activity.', tools: ['Supabase Auth', 'Role-based access', 'Audit logs'] },
  { icon: FiCode, number: '04', title: 'APIs & integrations', text: 'Frontend-to-backend integration, REST APIs, verified payment webhooks, uploads and production deployment.', tools: ['Node.js', 'NestJS', 'Express', 'Paystack', 'S3 / R2'] },
]

export function Capabilities() {
  const [active,setActive]=useState(0)
  return <section id="capabilities" className="capabilities container section-space"><div className="section-intro" data-reveal><div><span className="eyebrow">THE TOOLKIT</span><h2>From screen<br />to <em>system.</em></h2></div><p>Good software needs both.<br />Here’s where I spend my time.</p></div><div className="capabilities-layout"><div className="capability-visual" data-reveal aria-hidden="true"><div className={`capability-orb orb-mode-${active}`}><i /><i /><i /></div><span>FRONTEND ↔ BACKEND</span><span className="capability-visual-number">0{active+1}</span></div><div className="capability-list">{capabilities.map(({icon,number,title,text,tools},index)=>{const Icon=icon;return <article className={`capability-row ${active===index?'is-active':''}`} key={number} data-reveal><button aria-expanded={active===index} aria-controls={`capability-${number}`} onClick={()=>setActive(active===index?null:index)}><span>{number}</span><h3>{title}</h3>{active===index?<FiMinus />:<FiPlus />}</button><div id={`capability-${number}`} className="capability-detail" hidden={active!==index}><Icon /><div><p>{text}</p><div className="capability-tools">{tools.map(tool=><span key={tool}>{tool}</span>)}</div></div></div></article>})}</div></div></section>
}

const experiences=[
  {date:'MAR 2026 — PRESENT',role:'Co-founder & Software Engineer',company:'Vaulta',type:'Building',text:'Lead technical delivery across client projects, collaborate with creative and marketing teams, and build the tools we use to run the agency.'},
  {date:'OCT 2024 — PRESENT',role:'Independent Web Developer',company:'Client projects',type:'Engineering',text:'Develop responsive websites and full-stack platforms, taking work from requirements through frontend development, backend integration and delivery.'},
  {date:'JUL 2026 — PRESENT',role:'Service Delivery Specialist',company:'eTranzact International PLC',type:'Operations',text:'Coordinate technical support tickets in ManageEngine ServiceDesk, assign requests, track resolution and compile bi-weekly departmental reports for management.'},
  {date:'MAY — OCT 2024',role:'Software Developer Intern · Backend',company:'eTranzact International PLC',type:'Engineering',text:'Worked in a three-person team on Java APIs, Swagger UI documentation and unit tests, with contributions to Spring Security integration.'},
]

function About() {
  return <section id="about" className="about-section container section-space" data-chapter="04"><div className="section-intro" data-reveal><div><span className="eyebrow">THE PERSON BEHIND THE BUILDS</span><h2>A little more<br /><em>Tochukwu.</em></h2></div><a className="text-link" href="https://www.linkedin.com/in/tochukwu-teco-benson/" target="_blank" rel="noreferrer">Find me on LinkedIn <FiArrowUpRight /></a></div><div className="about-grid"><div className="portrait-composition" data-reveal onPointerMove={trackPointer} onPointerLeave={resetPointer}><span className="portrait-type" aria-hidden="true">TB.</span><div className="portrait-panel"><img src="/images/benson.webp" alt="Portrait of Tochukwu Teco-Benson" width="780" height="736" loading="lazy" /><div className="portrait-caption"><span>LAGOS, NIGERIA</span><span>✳</span></div></div><span className="portrait-sticker">ENGINEER<br />& CO-FOUNDER <FiArrowUpRight /></span></div><div className="about-story" data-reveal><h3>I care about what happens<br />after the website goes live.</h3><p>My work has grown from responsive websites into full-stack applications: operational dashboards, public submission flows, client portals and commerce platforms.</p><p>Building Vaulta has added another perspective. I think about who uses a product, how a team manages it, and what needs to keep working after delivery.</p><div className="education"><span className="eyebrow">EDUCATION</span><strong>B.Sc. Computer Science</strong><span>Caleb University · 2021–2025</span></div><div className="certifications"><span>freeCodeCamp</span><p>Responsive Web Design · 2025<br />JavaScript Algorithms & Data Structures · 2026</p></div></div></div>
    <div id="experience" className="experience-list"><div className="experience-heading" data-reveal><span className="eyebrow">THE PATH SO FAR</span><h3>Experience</h3></div>{experiences.map((item,index)=><details className="experience-item" key={item.role} open={index===0} data-reveal><summary><span className="experience-date">{item.date}</span><div><h4>{item.role}</h4><span className="experience-company">{item.company}</span></div><span className="experience-type">{item.type}</span><FiPlus /></summary><p>{item.text}</p></details>)}</div></section>
}

export default function Home() {
  return <><SEO /><Hero /><IntroStatement /><SelectedWork /><Founder /><Capabilities /><About /><Contact /></>
}
