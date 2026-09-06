import { links } from '../data/profile';
import ExternalLink from './ExternalLink';

export default function Contact() {
  return <section id="contact" className="contact section" aria-labelledby="contact-title">
    <p className="eyebrow">06 / Contact</p><h2 id="contact-title">Let's start a conversation.</h2>
    <p>I'm looking for a Junior Software Developer or Junior Full-Stack Developer role where I can contribute, learn from a team and build useful software.</p>
    <a className="btn btnPrimary" href={links.email}>Email Me <span aria-hidden="true">↗</span></a>
    <div className="contactSocials"><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink></div>
  </section>;
}