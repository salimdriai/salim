import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      style={{ zIndex: 10000 }}
      className="  py-8 fixed right-0 left-0  backdrop-blur-2xl	"
    >
      <div className="flex justify-between items-center container mx-auto">
        <p className="font-bold text-lg"> &#128187; SALIM.D</p>
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
        <div>
          <img src="/github.png" width={50} />
        </div>
      </div>
    </div>
  )
}

export default Header
