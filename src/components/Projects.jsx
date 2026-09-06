import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  return <Section id="projects" number="03" title="Projects" intro="Putting learning into practice.">
    <p className="sectionDescription">A decision-making tool for the browser and a Java desktop game — two ways I put software development into practice.</p>
    <div className="projectsGrid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
  </Section>;
}
