import Section from './Section';

export default function About() {
  return (
    <Section id="about" number="03" title="About" intro="A little about me.">
      <div className="aboutGrid">
        <p className="statement">A software developer with a background in leadership and teamwork.</p>
        <div className="prose">
          <p>I'm developing my software skills through hands-on projects, from web applications to desktop software. I'm also completing the Software Development program at Coding Factory, Athens University of Economics and Business (AUEB).</p>
          <p>My previous experience as a Military Officer in the Hellenic Army strengthened my teamwork, accountability, decision-making and problem-solving under pressure.</p>
        </div>
      </div>
    </Section>
  );
}
