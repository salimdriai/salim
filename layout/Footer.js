import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="contact" className="link link-hover">
          Contact
        </Link>
        <Link href="blog" className="link link-hover">
          Blog
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.twitter.com">
            <img src="/twitter.svg" width={40} />
          </Link>
          <Link href="https://www.whatsapp.com">
            <img src="/whatsapp.svg" width={40} />
          </Link>
          <Link href="https://www.linkedin.com">
            <img src="/linkedin.svg" width={40} />
          </Link>
          <Link href="https://www.instagram.com">
            <img src="/instagram.svg" width={40} />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Salim.D</p>
      </div>
    </footer>
  )
}

export default Footer
