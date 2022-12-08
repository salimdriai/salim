import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div
      style={{ zIndex: 10000 }}
      className="py-4 md:py-8 fixed right-0 left-0  backdrop-blur-2xl	"
    >
      <div className=" flex justify-between items-center container mx-auto">
        <Link href="/">
          <a className="font-bold text-lg cursor-pointer"> &#128187; SALIM.D</a>
        </Link>
        <ul className="hidden md:flex justify-between gap-10">
          <li className="hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="  cursor-pointer">
          <label className=" md:hidden btn btn-circle swap swap-rotate">
            <input
              type="checkbox"
              onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
            />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <a
            className="hidden md:block"
            href="https://www.github.com/iskandar47"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" width={50} />
          </a>
        </div>
      </div>
      <div
        className="flex flex-col  lg:hidden  items-center gap-8 flex-1 z-9"
        style={{
          height: mobileMenuOpen ? '100vh' : '0vh',
          transition: 'all 250ms linear',
          transform: `translateY(${mobileMenuOpen ? '0vh' : '-50vh'})`,
        }}
      >
        <ul className="text-center text-xl mt-8">
          <li className="hover:text-primary my-2">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-primary my-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="flex justify-center">
            <a
              href="https://github.com/salimdriai"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/github.png" width={50} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
