import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import ProjectCard from './Card'
import { projects } from './data.js'
import Link from 'next/link'

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
          {projects.map(({ title, description, src, link, role }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              src={src}
              link={link}
              role={role}
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
              <Link href="https://github.com/iskandar47">
                <a target="_blank" rel="noopener noreferrer">
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
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
