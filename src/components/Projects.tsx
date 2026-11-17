import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="projects-section page-shell" id="projetos" aria-labelledby="projects-title">
      <div className="section-heading" id="sobre">
        <div>
          <p className="eyebrow section-kicker">01 / TRABALHOS SELECIONADOS</p>
          <h2 id="projects-title">Projetos <span>selecionados.</span></h2>
        </div>
        <p className="section-description">
          Explorando ideias, construindo soluções e desenvolvendo produtos digitais.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
