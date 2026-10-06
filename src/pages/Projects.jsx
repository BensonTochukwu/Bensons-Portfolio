import SEO from '../components/SEO'
import { SelectedWork, MoreWork } from '../components/Work'
import Contact from '../components/Contact'

export default function Projects() {
  return <div className="work-page"><SEO title="Selected Work — Tochukwu Teco-Benson" path="/projects" /><SelectedWork showFilters /><MoreWork /><Contact /></div>
}
