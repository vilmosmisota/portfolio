import React from "react"
import "../assets/styles/main.css"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

function projects() {
  return (
    <>
      <Layout>
        <Seo title="Projects" />
        <main className="main-content">
          <h1 className="main-header">Projects</h1>
          <Projects />
        </main>
      </Layout>
    </>
  )
}

export default projects
