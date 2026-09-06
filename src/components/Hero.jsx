import profilePic from '../assets/profilepic.jpg';
import { links } from '../data/profile';
import ExternalLink from './ExternalLink';

export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="heroText">
        <p className="availability"><span /> Open to junior developer opportunities</p>
        <p className="heroName">Georgios Rachiotis</p>
        <h1>Junior Software<br /><span>Developer.</span></h1>
        <p className="heroFocus">Full-Stack Development · Backend Focus</p>
        <p className="lead">Building practical software with a thoughtful approach to code, a willingness to learn, and a strong sense of responsibility.</p>
        <p className="heroStack">Java <span>·</span> Spring Boot <span>·</span> JavaScript <span>·</span> React <span>·</span> Node.js</p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#projects">View Projects <span aria-hidden="true">↗</span></a>
          <a className="btn" href="#contact">Contact Me <span aria-hidden="true">→</span></a>
        </div>
        <div className="heroSocials">
          <ExternalLink href={links.github}>GitHub</ExternalLink>
          <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={import.meta.env.BASE_URL + 'cv.pdf'}>View CV</ExternalLink>
        </div>
      </div>
      <figure className="portrait">
        <div className="portraitFrame"><img src={profilePic} alt="Georgios Rachiotis" width="420" height="500" fetchPriority="high" /></div>
        <figcaption><span>Learning. Building. Moving forward.</span><span aria-hidden="true">↗</span></figcaption>
      </figure>
      <div className="heroBottom"><span>Professional experience. A new technical direction.</span><a href="#about">Get to know me <span aria-hidden="true">↓</span></a></div>
    </header>
  );
}
