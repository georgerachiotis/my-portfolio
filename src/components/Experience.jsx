import Section from './Section';

export default function Experience() {
  return <Section id="experience" number="05" title="Experience" intro="Professional experience.">
    <article className="timelineRow">
      <p className="timelineDate">Nov 2026 — Present</p>
      <div><h3>Volunteer Backend Developer</h3><p className="organization">FlameVerse AI · Remote</p>
        <ul className="experienceList">
          <li>Contributing to backend development using Node.js, Express.js and Firebase / Firestore.</li>
          <li>Developing and maintaining backend functionality, with a focus on API development, data handling and application reliability.</li>
          <li>Collaborating with a development team using Git, feature branches, pull requests and code reviews.</li>
        </ul>
      </div>
    </article>
    <article className="timelineRow">
      <p className="timelineDate">Jun 2018 — Present</p>
      <div><h3>Officer</h3><p className="organization">Hellenic Army</p>
        <ul className="experienceList">
          <li>Led and coordinated teams in demanding environments with clear communication and accountability.</li>
          <li>Planned activities and allocated personnel and resources against time-sensitive priorities.</li>
          <li>Made decisions and solved problems under pressure, adapting to changing circumstances.</li>
          <li>Trained and mentored personnel while maintaining professional standards.</li>
        </ul>
      </div>
    </article>
  </Section>;
}
