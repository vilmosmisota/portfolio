import React from "react"
import "../assets/styles/navbar.css"

import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export default function Navbar() {
  return (
    <nav>
      <section className="logo-wrapper">
        <h1>VM</h1>
      </section>
      <section className="nav-lists-wrapper">
        <ul className="nav-items">
          <li className="hide-li">
            <button className="close-btn">
              <AiOutlineClose />
            </button>
          </li>
          <li>Projects</li>
          <li>About</li>
          <li>CV</li>
        </ul>
        <div className="smallscreen-icons-wrapper">
          <ul className="smallscreen-icons">
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaEnvelopeSquare />
            </li>
          </ul>
        </div>
      </section>
      <button className="hamburger-btn">
        <GiHamburgerMenu />
      </button>
    </nav>
  )
}
