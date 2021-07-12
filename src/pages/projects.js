import React from "react"
import "../assets/styles/main.css"
import Layout from "../components/layout"
import Projects from "../components/Projects"

function projects() {
  return (
    <>
      <Layout>
        <main className="main-content">
          <h1 className="main-header" id="projects">
            Projects
          </h1>
          <Projects />
        </main>
      </Layout>
    </>
  )
}

export default projects
