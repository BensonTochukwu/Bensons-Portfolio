export default function Flower({ className = '' }) {
  return <span className={`flower-mark ${className}`.trim()} aria-hidden="true">
    <svg className="brand-flower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1em" height="1em" fill="currentColor" focusable="false" aria-hidden="true">
      {[0, 45, 90, 135].map(angle => <rect key={angle} x="30.7" y="8" width="2.6" height="48" rx="0" transform={`rotate(${angle} 32 32)`} />)}
    </svg>
  </span>
}
