import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      style={{ zIndex: 10000 }}
      className="  py-8 fixed right-0 left-0  backdrop-blur-2xl	"
    >
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <a className="font-bold text-lg cursor-pointer"> &#128187; SALIM.D</a>
        </Link>
        <ul className="flex justify-between gap-10">
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
        <div className="cursor-pointer">
          <a
            href="https://www.github.com/iskandar47"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" width={50} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
