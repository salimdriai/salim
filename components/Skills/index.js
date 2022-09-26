import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import SkillCard from './Skill'
import { skills, tools } from './data'

const Skills = () => {
  const parallax = useParallax({
    scale: [1, 0.5],
  })

  return (
    <div className="container mx-auto min-h-screen sticky -top-1/2 md:-top-96 -z-50">
      <div className="py-8 md:py-16 md:flex">
        <div>
          <h2 className="text-secondary">
            Skills{' '}
            <span className="font-thin" style={{ fontSize: 32 }}>
              i have,
            </span>
            <br /> tools{' '}
            <span className="font-thin" style={{ fontSize: 32 }}>
              i use.
            </span>
          </h2>
          <div
            className="py-10"
            style={{ backgroundImage: `url("/planets.svg")` }}
          >
            <p>Front end</p>
            <progress
              className="progress progress-accent w-full"
              value="80"
              max="100"
            ></progress>
            <p>Back end</p>
            <progress
              className="progress progress-primary w-full"
              value="60"
              max="100"
            ></progress>
            <p>Mobile</p>
            <progress
              className="progress progress-success w-full"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="flex flex-wrap gap-4 justify-center md:justify-end ">
            {skills.map(({ label, src, percentage, text }) => (
              <SkillCard
                key={label}
                label={label}
                src={src}
                percentage={percentage}
                text={text}
              />
            ))}
          </div>
        </div>
      </div>
      <div ref={parallax.ref} className="hidden md:flex md:justify-center mb-4">
        <div className="stats bg-base-300 md:my-10">
          {tools.map(({ label, src, percentage, text }) => (
            <div key={label} className="stat">
              <SkillCard
                label={label}
                src={src}
                percentage={percentage}
                text={text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
