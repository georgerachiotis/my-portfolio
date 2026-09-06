export default function ExternalLink({ href, children, className = 'textLink' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}