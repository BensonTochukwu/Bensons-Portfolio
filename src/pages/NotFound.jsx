import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return <section className="not-found container"><Helmet><title>Page not found — Benson</title><meta name="robots" content="noindex" /></Helmet><span className="eyebrow">404 / A LITTLE OFF TRACK</span><h1>Let’s get you<br /><em>back to the work.</em></h1><p>This page doesn’t exist. The projects are right over here.</p><Link className="button button-primary" to="/projects"><FiArrowLeft /> Explore projects</Link></section>
}
