import React from "react"
import "../assets/styles/footer.css"

import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer>
      <ul className="footer-icons">
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
          <Link to="/contact">
            <FaEnvelopeSquare />
          </Link>
        </li>
      </ul>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} <span>Vilmos Misota</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
