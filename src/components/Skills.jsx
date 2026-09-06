import { mainTechnologies, skills } from '../data/profile';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" number="02" title="Technical skills" intro="The tools behind the work.">
      <div className="skillsGrid">
        {skills.map((group, index) => (
          <article className="skillCard" key={group.title}>
            <span className="cardIndex" aria-hidden="true">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p className="small">{group.description}</p>
            <ul className="tags">
              {group.items.map((item) => (
                <li className={mainTechnologies.includes(item) ? 'emphasis' : ''} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}