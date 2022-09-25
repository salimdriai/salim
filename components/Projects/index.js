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
      <div className="container mx-auto  relative">
        <h2 className="text-center pt-24">
          Projects{' '}
          <span className="font-thin" style={{ fontSize: 32 }}>
            i&apos;m proud to be part of.
          </span>
        </h2>
        <div
          ref={parallax.ref}
          className="my-8 md:my-16 flex  flex-col md:flex-row items-center justify-center gap-16"
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
        <div className="pb-10 flex justify-end">
          <div>
            <h3>
              <span className="text-primary">Open source</span>{' '}
              <span className="font-thin" style={{ fontSize: 32 }}>
                Personal projects.{' '}
              </span>
            </h3>

            <div className="mt-4">
              <button className="btn btn-secondary btn-outline">
                Githuib
                <div className="ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
