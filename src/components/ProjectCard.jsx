import ExternalLink from './ExternalLink';

export default function ProjectCard({ project }) {
  return (
    <article className="projectCard">
      {project.image && (
        <img className="projectImage" src={project.image} alt={project.imageAlt}
          loading="lazy" width="960" height="600" />
      )}
      <div className="projectContent">
        <div className="projectTop">
          <p className="eyebrow">{project.category}</p>
          {project.status && <span className="badge">{project.status}</span>}
        </div>
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        {project.highlights?.length > 0 && (
          <ul className="projectHighlights">
            {project.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <ul className="tags">
          {project.tech.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="projectLinks">
          {project.live && (
            <ExternalLink className="btn btnPrimary" href={project.live}>Live Demo</ExternalLink>
          )}
          {project.repositories?.map((repo) => (
            <ExternalLink key={repo.url} href={repo.url}>{repo.label}</ExternalLink>
          ))}
        </div>
        {!project.live && project.demoNote && <p className="demoNote">{project.demoNote}</p>}
      </div>
    </article>
  );
}