import React from "react"
import "../assets/styles/main.css"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <header className="header-wrapper">
        <aside className="largescreen-icons-wrapper">
          <ul className="largescreen-icons">
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
        </aside>
        <section className="intro-wrapper">
          <div className="intro">
            <h1>Hello,</h1>
            <h1>
              I am Vilmos, <br /> a web developer with a passion to create and
              the will to progress
            </h1>
          </div>
          <div>
            <button className="black-btn">More</button>
          </div>
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
        <h1 className="main-header">Projects</h1>
        <article className="project-wrapper">
          <h2 className="project-title">The SurfSkate Academy</h2>
          <section className="overview-wrapper"></section>
          <section className="img-preview-wrapper"></section>
          <section className="main-features-wrapper"></section>
          <section className="icon-wrapper"></section>
        </article>
      </main>
    </Layout>
  )
}
