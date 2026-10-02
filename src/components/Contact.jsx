import { useEffect, useRef, useState } from 'react';
import { links } from '../data/profile';
import ExternalLink from './ExternalLink';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('Copy Email');
  const resetTimer = useRef(null);
  const emailAddress = links.email.replace('mailto:', '');

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Email Copied');
    } catch {
      setCopyStatus('Copy Failed');
    }

    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyStatus('Copy Email'), 2200);
  }

  return <section id="contact" className="contact section" aria-labelledby="contact-title">
    <p className="eyebrow">06 / Contact</p><h2 id="contact-title">Get in touch.</h2>
    <p>Interested in working together? I'd be glad to hear from you.</p>
    <div className="contactActions">
      <a className="btn btnPrimary" href={links.email}>Email Me <span aria-hidden="true">↗</span></a>
      <button className="btn" type="button" onClick={copyEmail}>
        <span aria-live="polite">{copyStatus}</span>
        <span aria-hidden="true">{copyStatus === 'Email Copied' ? '✓' : '⧉'}</span>
      </button>
    </div>
    <div className="contactSocials">
      <ExternalLink href={links.linkedin} icon="linkedin">LinkedIn</ExternalLink>
      <ExternalLink href={links.github} icon="github">GitHub</ExternalLink>
    </div>
  </section>;
}
