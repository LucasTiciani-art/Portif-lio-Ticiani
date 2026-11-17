import { useState } from 'react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [hasImage, setHasImage] = useState(false)

  return (
    <article className="project-card">
      <div className="project-image-frame">
        <div className="project-image-placeholder" aria-hidden="true">
          <span className="project-placeholder-number">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>Imagem do projeto</span>
        </div>
        <img
          className={`project-image${hasImage ? ' is-visible' : ''}`}
          src={project.image}
          alt={hasImage ? `Prévia do projeto ${project.name}` : ''}
          aria-hidden={!hasImage}
          onLoad={(event) => {
            const image = event.currentTarget
            setHasImage(image.naturalWidth > 1 && image.naturalHeight > 1)
          }}
          onError={() => setHasImage(false)}
        />
      </div>

      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{project.name}</h3>
          </div>
          <a
            className="project-open"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Acessar repositório ${project.name} no GitHub`}
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        {project.description && <p className="project-description">{project.description}</p>}

        {(project.category || project.technologies?.length) && (
          <div className="project-card-meta">
            {project.category && <span>{project.category}</span>}
            {project.technologies?.length ? (
              <span>{project.technologies.join(' · ')}</span>
            ) : null}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
