import React, { useState } from "react"
import "../assets/styles/navbar.css"

import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"
import { Link } from "gatsby"

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const setToggleFalse = () => {
    setToggle(false)
  }

  const toggleNavlists = () => {
    if (toggle === false) {
      return "nav-lists-wrapper"
    } else {
      return "nav-lists-wrapper active"
    }
  }

  const toggleHamburger = () => {
    if (toggle === false) {
      return "nav-icon"
    } else {
      return "nav-icon open"
    }
  }

  const active = {
    color: "#cf8d88",
    fontWeight: "bold",
  }

  return (
    <nav>
      <section className="logo-wrapper">
        <Link onClick={setToggleFalse} to="/">
          <svg
            width="77"
            height="42"
            viewBox="0 0 77 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5864 41.34C22.4764 41.6333 22.3664 41.8167 22.2564 41.89C22.1464 41.9267 21.9631 41.945 21.7064 41.945H16.9214C16.6648 41.945 16.4814 41.9267 16.3714 41.89C16.2614 41.8167 16.1514 41.6333 16.0414 41.34L1.02645 1.245C0.953113 0.988331 0.953113 0.804998 1.02645 0.694997C1.09978 0.54833 1.39311 0.474997 1.90645 0.474997H6.63645C6.92978 0.474997 7.13145 0.511664 7.24145 0.584999C7.35145 0.621665 7.44311 0.768331 7.51645 1.025L19.2314 33.035L31.0564 1.025C31.1664 0.768331 31.2764 0.621665 31.3864 0.584999C31.4964 0.511664 31.6981 0.474997 31.9914 0.474997H36.7214C37.1981 0.474997 37.4731 0.54833 37.5464 0.694997C37.6564 0.804998 37.6748 0.988331 37.6014 1.245L22.5864 41.34ZM71.0973 41.945C70.804 41.945 70.6206 41.9083 70.5473 41.835C70.474 41.725 70.4373 41.56 70.4373 41.34V11.475L58.5023 41.23C58.429 41.4133 58.3373 41.5233 58.2273 41.56C58.154 41.5967 57.934 41.615 57.5673 41.615H53.1673C52.8006 41.615 52.5623 41.5967 52.4523 41.56C52.379 41.5233 52.3056 41.4133 52.2323 41.23L40.2973 11.475V41.34C40.2973 41.56 40.2606 41.725 40.1873 41.835C40.114 41.9083 39.9306 41.945 39.6373 41.945H34.5223C34.0823 41.945 33.8623 41.7433 33.8623 41.34V1.63C33.8623 1.11667 33.9173 0.804998 34.0273 0.694997C34.1373 0.54833 34.4856 0.474997 35.0723 0.474997H41.6173C41.874 0.474997 42.0206 0.529997 42.0573 0.639998C42.1306 0.713331 42.2223 0.878331 42.3323 1.135L55.3673 33.475L68.4023 1.135C68.5123 0.878331 68.5856 0.713331 68.6223 0.639998C68.6956 0.529997 68.8606 0.474997 69.1173 0.474997H75.6623C76.249 0.474997 76.5973 0.54833 76.7073 0.694997C76.8173 0.804998 76.8723 1.11667 76.8723 1.63V41.34C76.8723 41.7433 76.6523 41.945 76.2123 41.945H71.0973Z"
              fill="#F0EBE0"
            />
          </svg>
        </Link>
      </section>
      <section className={toggleNavlists()}>
        <ul className="nav-items">
          <Link to="/projects" activeStyle={active} onClick={setToggleFalse}>
            <li>Projects</li>
          </Link>
          <Link to="/about" activeStyle={active} onClick={setToggleFalse}>
            <li>About</li>
          </Link>
          <li>CV</li>
        </ul>
        <div className="smallscreen-icons-wrapper">
          <ul className="smallscreen-icons">
            <li>
              <a
                href="https://github.com/vilmosmisota"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vilmos-misota-586204210/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <Link to="/contact" onClick={setToggleFalse}>
                <FaEnvelopeSquare />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div
        role="button"
        tabIndex={0}
        className={toggleHamburger()}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
