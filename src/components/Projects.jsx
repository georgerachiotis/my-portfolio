import { projects } from "../data/projects";

export default function Projects() {
    return (
        <>
        <h2>Projects</h2>

        <div className="grid reveal">
            {projects.map((project, index) => (
            <div key={index} className="card">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <p className="small">{project.tech}</p>

                <div className="btnRow">
                {project.live && (
                    <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    >
                    Live App
                    </a>
                )}

                {project.frontend && (
                    <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    >
                    Frontend Code
                    </a>
                )}

                {project.backend && (
                    <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    >
                    Backend Code
                    </a>
                )}

                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    >
                    Code
                    </a>
                )}
                </div>
            </div>
            ))}
        </div>
        </>
    );
}