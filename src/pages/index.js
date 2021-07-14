import React from "react"
import "../assets/styles/main.css"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"
import Introduction from "../components/Introduction"
import LoadingScreen from "../components/LoadingScreen"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import OnGoingProjects from "../components/OnGoingProjects"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Layout>
        <Seo title="Home" />
        <header className="header-wrapper">
          <aside className="largescreen-icons-wrapper">
            <ul className="largescreen-icons">
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
          </aside>
          <section className="intro-wrapper">
            <Introduction />
          </section>
          <figure className="header-img-wrapper">
            <StaticImage
              src="../assets/images/header_portrait.JPG"
              alt="portrait image"
              width={550}
              layout="constrained"
              quality={100}
              className="header-img"
              placeholder="none"
            />
          </figure>
        </header>
        <main className="main-content">
          <h1 className="main-header about-name">Projects</h1>
          <Projects />
          <h1 className="main-header about-name">On-Going Projects</h1>

          <OnGoingProjects />
        </main>
      </Layout>
    </>
  )
}
