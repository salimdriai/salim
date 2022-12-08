import React from 'react'

const ProjectCard = ({ src, title, description, link, role }) => {
  return (
    <div
      style={{ height: '350px', position: 'relative' }}
      className="card w-80 bg-base-100 shadow-sm cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102"
    >
      <div style={{ position: 'absolute', zIndex: 3 }}>
        <img src="/planets.svg" />
      </div>
      <figure
        className=" p-16 h-40  backdrop-blur-md	"
        style={{ backgroundColor: 'rgba(132, 208, 233, 0.4)', zIndex: 5 }}
      >
        {src === 'dexcube' ? (
          <h5 className=" rounded-sm px-2 bg-primary text-2xl text-white">
            DEXCUBE{' '}
            <span style={{ color: 'yellow', fontSize: '14px' }}>shop</span>
          </h5>
        ) : (
          <img src={src} alt="project" />
        )}
      </figure>
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <div
            className="badge badge-primary border-none"
            style={{
              backgroundColor: role === 'done' ? 'lightgreen' : 'lightblue',
            }}
          >
            {role}
          </div>
        </h5>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end" style={{ zIndex: 10 }}>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-sm btn-link">Link</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
