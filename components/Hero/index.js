import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const Component = () => {
  const parallax = useParallax({
    rotate: [0, 360],
  })
  return (
    <div ref={parallax.ref} className="spinner">
      <img className="gmail" src="/gmail.svg" width={40} height={40} />

      <div className="telegram">
        <img src="/whatsapp.svg" width={40} height={40} />
      </div>
      <div className="twitter">
        <img src="/twitter.svg" width={40} height={40} />
      </div>
      <div className="instagram">
        <img src="/instagram.svg" width={40} height={40} />
      </div>
      <div className="linkedin">
        <img src="/linkedin.svg" width={40} height={40} />
      </div>
    </div>
  )
}

const Hero = () => {
  /* const parallax = useParallax({
    translateX: [-30, 40],
  }) */
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("/blured.png")`,
        backgroundPositionX: '900px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero  min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row p-0 md:mt-24">
          <div className="mb-16 md:mb-0">
            <Component />
          </div>
          <div /* ref={parallax.ref} */>
            <p className="text-2xl font-bold">Hello there !</p>
            <h1 className="font-bold">I&apos;m Salim.</h1>
            <p className="py-4">
              A passionate, ambitious & self taught software developer, with
              commercial background ( 7 years ). <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
