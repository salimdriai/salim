import React from 'react'
import Link from 'next/link'
import Feedback from './Feedback'
import Slider from 'react-slick'

import { feedbacks, carouselSettings } from './data'

const Feedbacks = () => {
  return (
    <div
      className="min-h-screen bg-base-100"
      style={{
        backgroundImage: `url("/cell.svg")`,
        backgroundPosition: '-290px 0px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto ">
        <div className="py-16">
          <h2>
            <span className="font-thin" style={{ fontSize: 32 }}>
              Some cool
            </span>{' '}
            Feedbacks.
          </h2>
        </div>
        <Slider {...carouselSettings}>
          {feedbacks.map((f) => (
            <Feedback
              key={f.name}
              name={f.name}
              country={f.country}
              flag={f.flag}
              time={f.time}
              feedback={f.feedback}
            />
          ))}
        </Slider>
        <div className="my-10 flex justify-end">
          <div>
            <h3>
              <span className="font-thin" style={{ fontSize: 32 }}>
                Check them on
              </span>{' '}
              <span className="text-primary">Fiverr</span>
            </h3>
            <div className="mt-4">
              <Link href="https://www.fiverr.com/iskandar447">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-secondary btn-outline">
                    Fiverr
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

export default Feedbacks
