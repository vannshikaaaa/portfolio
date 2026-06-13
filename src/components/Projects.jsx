import { projects } from '../data/portfolio';
import useInView from '../hooks/useInView';
import { revealClass, staggerDelay } from '../utils/animation';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="section section-separated" ref={ref}>
      <div className="container">
        <SectionHeading title="Featured Projects" isInView={isInView} />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card ${revealClass(isInView)}`}
              style={staggerDelay(index, 140)}
            >
              <div className="project-card-inner">
                {project.status ? <span className="project-status">{project.status}</span> : null}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((item) => (
                    <span key={item} className="project-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.live ? (
                    <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-live-soon">Live demo available on request</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="coming-soon-note">More polished builds and case studies are on the way...</p>
      </div>
    </section>
  );
};

export default Projects;
