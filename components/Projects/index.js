import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import ProjectCard from '../ProjectCard'

const projects = [
  {
    title: 'ActiList',
    description:
      'A secret NFT auction platform built on secret network blockchain.',
    src: '/logo-acti.png',
    link: 'https://www.test.actilist.co',
  },
  {
    title: 'Eland',
    description:
      'Multi users property management platform built with Next.js & Typescrpit.',
    src: '/eland-logo-04.png',
    link: 'https://www.eland.pk',
  },
  {
    title: 'Enviroblocks',
    description:
      'Gaming web application on top of the WAX blockchain built with React.',
    src: '/enviro-logo.png',
    link: 'https://www.enviroblocks.io',
  },
]
const Projects = () => {
  const parallax = useParallax({
    speed: 30,
  })

  return (
    <div className="min-h-screen bg-base-300">
      <div className="container mx-auto py-24 relative">
        <h2 className="text-center">
          Projects{' '}
          <span className="font-thin" style={{ fontSize: 32 }}>
            i&apos;m proud to be part of.
          </span>
        </h2>
        <div
          ref={parallax.ref}
          className=" my-16 flex  flex-col md:flex-row items-center justify-center gap-16"
        >
          {projects.map(({ title, description, src, link }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              src={src}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
