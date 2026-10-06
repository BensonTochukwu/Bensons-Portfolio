import { Helmet } from 'react-helmet-async'

export default function SEO({ title = 'Tochukwu Teco-Benson — Software Engineer & Vaulta Co-founder', description = 'I build full-stack platforms for real work. Explore Vaulta Workspace, Babcock Operations, NYSC NIN Submission and Zinny Food Zone.', path = '/', image = '/images/social-card.png' }) {
  const url = `https://bensons-portfolio.vercel.app${path}`
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={`https://bensons-portfolio.vercel.app${image}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://bensons-portfolio.vercel.app${image}`} />
  </Helmet>
}
