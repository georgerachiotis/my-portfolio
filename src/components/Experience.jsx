import Section from './Section';

export default function Experience() {
  return <Section id="experience" number="04" title="Experience" intro="Experience that shapes how I work.">
    <article className="timelineRow">
      <p className="timelineDate">2018 — Present</p>
      <div><h3>Military Officer</h3><p className="organization">Hellenic Army</p>
        <ul className="experienceList">
          <li>Led and coordinated teams in demanding environments, with clear communication and shared responsibilities.</li>
          <li>Managed personnel, resources and time-sensitive tasks with accountability and attention to detail.</li>
          <li>Made decisions and solved problems under pressure, adapting as circumstances changed.</li>
          <li>Trained and mentored personnel, supporting teamwork and professional development.</li>
        </ul>
      </div>
    </article>
  </Section>;
}