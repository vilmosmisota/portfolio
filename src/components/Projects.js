import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import "../assets/styles/projects.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const query = graphql`
  {
    allContentfulProjects {
      nodes {
        mainFeatures {
          raw
        }
        title
        id
        sumupHeading
        images {
          gatsbyImageData(
            formats: AUTO
            height: 500
            quality: 100
            layout: CONSTRAINED
          )
        }
        overview {
          overview
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes

  console.log(projects)

  return (
    <>
      {projects.map(el => {
        return (
          <article className="project-wrapper" key={el.id}>
            <h2 className="project-title">{el.title}</h2>
            <p className="subheading">{el.sumupHeading}</p>
            <section className="overview-wrapper">
              <h3 className="overview-text">{el.overview.overview}</h3>
            </section>
            <figure className="project-img-wrapper">
              <GatsbyImage
                image={el.images[0].gatsbyImageData}
                alt={el.title}
                quality="100"
                className="project-img"
              />
            </figure>
            <section className="img-btn-wrapper">
              <button className="img-btn">
                <HiOutlineArrowNarrowLeft />
              </button>
              <button className="img-btn">
                <HiOutlineArrowNarrowRight />
              </button>
            </section>
            <section className="mainFeatures-wrapper">
              <pre className="mainFeatures">
                {renderRichText(el.mainFeatures)}
              </pre>
            </section>
            <section className="project-icon-wrapper">
              <button className="long-btn">Read more</button>
              <button className="short-btn">Live</button>
              <button className="short-btn">Code</button>
            </section>
          </article>
        )
      })}
    </>
  )
}

export default Projects
