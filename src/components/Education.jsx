import { training } from '../data/profile';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" number="05" title="Education" intro="Continuing to learn, every day.">
      <article className="timelineRow">
        <div><span className="badge current">In progress</span></div>
        <div>
          <h3>Coding Factory</h3>
          <p className="organization">Athens University of Economics and Business</p>
          <p>Software Development</p>
        </div>
      </article>
      <article className="timelineRow">
        <p className="timelineDate">2014 — 2018</p>
        <div>
          <h3>Hellenic Army Academy</h3>
          <p className="organization">Bachelor's Degree</p>
          <p>Military Science and Operational Studies</p>
        </div>
      </article>
      <details className="training">
        <summary>
          Additional training
          <span className="small">Java, web development &amp; databases</span>
          <span className="detailsIcon" aria-hidden="true">+</span>
        </summary>
        <div className="trainingGrid">
          {training.map((group) => (
            <div key={group.provider}>
              <h3>{group.provider}</h3>
              <ul>{group.courses.map((course) => <li key={course}>{course}</li>)}</ul>
            </div>
          ))}
        </div>
      </details>
    </Section>
  );
}