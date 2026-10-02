function SocialIcon({ name }) {
  if (name === 'linkedin') return <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10H5.67v8h2.67v-8Zm-1.33-1.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.33 13.4c0-2.42-1.29-3.55-3.01-3.55a2.6 2.6 0 0 0-2.34 1.29V10h-2.66v8h2.66v-4.1c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.23 1.34 2.19V18h2.67v-4.6Z"/></svg>;
  if (name === 'github') return <svg className="socialIcon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.61 1.21 3.25.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.5.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  return null;
}

export default function ExternalLink({ href, children, className = 'textLink', icon }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{icon && <SocialIcon name={icon} />}{children}<span aria-hidden="true"> ↗</span></a>;
}
