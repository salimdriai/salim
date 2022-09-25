import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import SkillCard from '../SkillCard'

const skills = [
  {
    label: 'Javascript',
    src: '/icons8-javascript.svg',
    percentage: 90,
    text: 'My proffession',
  },
  {
    label: 'React ',
    src: '/icons8-react.svg',
    percentage: 85,
    text: 'I also do Next.js',
  },
  {
    label: 'AWS',
    src: '/icons8-amazon-web-services.svg',
    percentage: 60,
    text: 'Comfortable with Amplify',
  },
  {
    label: 'Node.js',
    src: '/icons8-nodejs.svg',
    percentage: 70,
    text: 'Something i love',
  },
  {
    label: 'C++',
    src: '/icons8-cpp.svg',
    percentage: 50,
    text: 'To solve challenges',
  },
  {
    label: 'Web3',
    src: '/icons8-ethereum.svg',
    percentage: 50,
    text: 'Used to blockchain',
  },
]

const tools = [
  {
    label: 'Git',
    src: '/icons8-git.svg',
    percentage: 80,
    text: 'This is so important',
  },
  {
    label: 'Slack',
    src: '/icons8-slack-new.svg',
    percentage: 90,
    text: 'A team player',
  },
  {
    label: 'Visual studio',
    src: '/icons8-visual-studio-2019.svg',
    percentage: 85,
    text: 'Home',
  },
]

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
