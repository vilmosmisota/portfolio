import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import "../assets/styles/CV.css"

function cv() {
  return (
    <>
      <Layout>
        <Seo title="CV" />
        <main className="cv-wrapper">
          <h1 className="main-header">curriculum vitae</h1>
          <a
            href="https://drive.google.com/file/d/1EPJu8_3tidbz-T4aZfmV1fW8S7u945BX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            download
          </a>
          <div className="cvs-container">
            <section>
              <StaticImage
                src="../assets/cv/VilmosMisotaCv.png"
                alt="curriculum vitae"
                width={900}
                layout="constrained"
                quality={100}
                placeholder="none"
              />
            </section>
            <section>
              <StaticImage
                src="../assets/cv/VilmosMisotaCv2.png"
                alt="curriculum vitae"
                width={900}
                layout="constrained"
                quality={100}
                placeholder="none"
              />
            </section>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default cv
