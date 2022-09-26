import React from 'react'

const ProjectCard = ({ src, title, description, link, role }) => {
  return (
    <div
      style={{ height: '100%', position: 'relative' }}
      className="card w-80 bg-base-100 shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102"
    >
      <div style={{ position: 'absolute', zIndex: 3 }}>
        <img src="/planets.svg" />
      </div>
      <figure
        className=" p-16 h-40  backdrop-blur-md	"
        style={{ backgroundColor: 'rgba(132, 208, 233, 0.4)', zIndex: 5 }}
      >
        <img src={src} alt="project" />
      </figure>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <div className="badge badge-accent">{role}</div>
        </h5>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-sm btn-link">
          <a href={link} target="_blank" rel="noreferrer">
                Link
          </a>
            </button>
          {/*  <button className="btn btn-sm btn-ghost">Learn more</button> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
