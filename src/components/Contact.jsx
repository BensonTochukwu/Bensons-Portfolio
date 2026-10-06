import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const timer = useRef(null)
  const request = useRef(null)
  useEffect(() => () => { clearTimeout(timer.current); request.current?.abort() }, [])
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tecotochukwu@gmail.com')
      setCopied(true); setCopyMessage('Email copied.')
      clearTimeout(timer.current)
      timer.current = setTimeout(() => { setCopied(false); setCopyMessage('') }, 2500)
    } catch { setCopyMessage('You can select the email address or use the email link to get in touch.') }
  }
  const submit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (!['name', 'email', 'message'].every(key => String(data.get(key)).trim())) {
      setStatus('error'); setMessage('Please fill in your name, email and message.'); return
    }
    setStatus('sending'); setMessage('Sending your message…')
    request.current = new AbortController()
    try {
      const response = await fetch('https://formspree.io/f/mjgannaj', { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: request.current.signal })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success'); setMessage('Message sent. Thanks for getting in touch.'); form.reset()
    } catch (error) {
      if (error.name !== 'AbortError') { setStatus('error'); setMessage('Your message could not be sent. Please try again or email me directly.') }
    }
  }
  return <section id="contact" className="contact-section section-space" data-chapter="05">
    <div className="container contact-grid">
      <div className="contact-copy" data-reveal><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>LET’S<br /><em>TALK.</em></h2><p>Have a platform in mind, a team to grow, or a problem worth solving? I’d like to hear about it.</p>
        <div className="email-row"><a href="mailto:tecotochukwu@gmail.com">tecotochukwu@gmail.com <FiArrowUpRight /></a><button className="icon-button" aria-label={copied ? 'Email copied' : 'Copy email address'} onClick={copyEmail}>{copied ? <FiCheck /> : <FiCopy />}</button></div><span className="copy-status" aria-live="polite">{copyMessage}</span>
        <a className="contact-phone" href="tel:+2349032675331">+234 903 267 5331</a>
      </div>
      <details className="contact-form-disclosure" data-reveal><summary>Prefer a form? <FiArrowUpRight /></summary><form className="contact-form" onSubmit={submit}>
        <div className="form-heading"><span>Tell me what you’re thinking.</span><FiArrowUpRight /></div>
        <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="How should I address you?" required maxLength={120} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></label></div>
        <label>A little about it<textarea name="message" rows={4} placeholder="The idea, the opportunity, or where you need a hand…" required maxLength={5000} /></label>
        <label className="honeypot" aria-hidden="true">Leave this empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
        <input type="hidden" name="_subject" value="New portfolio enquiry" />
        <button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <FiSend /></button>
        <p className={`form-status ${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">{message}</p>
      </form></details>
    </div>
  </section>
}
