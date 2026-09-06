import Section from './Section';

export default function About() {
  return (
    <Section id="about" number="01" title="About" intro="A new chapter. A solid foundation.">
      <div className="aboutGrid">
        <p className="statement">Bringing accountability and a team-first mindset to software development.</p>
        <div className="prose">
          <p>I'm a Junior Software Developer transitioning from a career as a Military Officer in the Hellenic Army. My focus is backend and full-stack development, working with Java, Spring Boot, JavaScript, React, Node.js and relational databases.</p>
          <p>My previous career has taught me to take responsibility, communicate clearly and make decisions under pressure. I bring those habits to the way I learn, solve problems and work with others.</p>
          <p>I'm currently attending Coding Factory at Athens University of Economics and Business, continuing my technical education and building practical projects as I prepare for my first professional software development role.</p>
        </div>
      </div>
    </Section>
  );
}