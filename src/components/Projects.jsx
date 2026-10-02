import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  return <Section id="projects" number="01" title="Projects" intro="Things I've built.">
    <p className="sectionDescription">A web application and a desktop game, built to solve practical problems and explore different parts of software development.</p>
    <div className="projectsGrid">{orderedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
  </Section>;
}
