import React, { useState, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'

const Hero = () => {
  const [windowSize, setWindowSize] = useState(null)
  const parallax = useParallax({
    scale: windowSize > 700 ? [0.8, 2] : [0.6, 1],
    speed: -20,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("/blured.png")`,
        backgroundPosition: '-590px 30px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img ref={parallax.ref} src="/space.svg" className="max-w-sm " />
        <div>
          <p className="text-2xl font-bold">Hi there !</p>
          <h1 className="font-bold">I&apos;m Salim.</h1>
          <p className="py-4 text-center">
            A passionate, ambitious & self taught software developer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
