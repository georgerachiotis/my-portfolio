import Section from './Section';

export default function About() {
  return (
    <Section id="about" number="03" title="About" intro="A little about me.">
      <div className="aboutGrid">
        <p className="statement">I'm a Software Developer transitioning from an eight-year career as a Hellenic Army Officer.</p>
        <div className="prose">
          <p>I'm building my technical skills through hands-on projects, ranging from interactive web applications to desktop software. Alongside my studies at Coding Factory, Athens University of Economics and Business (AUEB), I'm gaining practical backend development experience as a volunteer at FlameVerse AI, working with Node.js, Express.js and Firebase.</p>
          <p>My military background has equipped me with strong problem-solving, teamwork, leadership and decision-making skills, which I bring into software development.</p>
        </div>
      </div>
    </Section>
  );
}
