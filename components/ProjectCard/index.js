import React from 'react'

const ProjectCard = ({ src, title, description, link }) => {
  return (
    <div
      style={{ height: '100%' }}
      className="card w-80 bg-base-100 shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102"
    >
      <figure className="bg-secondary p-16 h-40">
        <img src={src} alt="project" />
      </figure>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <div className="badge badge-accent">PRIVATE</div>
        </h5>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-sm btn-link">Link</button>
          </a>
          <button className="btn btn-sm btn-ghost">Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
