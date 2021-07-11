import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import "../assets/styles/projects.css"

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
            height: 450
            quality: 100
            layout: CONSTRAINED
          )
        }
        overview {
          overview
        }
        github
        about {
          about
        }
        website
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes

  // Individual Read more/less button in the map function
  const initialStateForIds = projects.map(el => {
    const idFalse = { [el.id]: false }
    return idFalse
  })

  const [readMore, SetReadMore] = useState(initialStateForIds)

  return (
    <>
      {projects.map(el => {
        const onClick = () => {
          SetReadMore(prev => ({ ...prev, [el.id]: !prev[el.id] }))
        }

        return (
          <article className="project-wrapper" key={el.id}>
            <h2 className="project-title">{el.title}</h2>
            <p className="subheading">{el.sumupHeading}</p>
            <section className="overview-wrapper">
              <h4 className="overview-text">{el.overview.overview}</h4>
            </section>
            <figure className="project-img-wrapper">
              <GatsbyImage
                image={el.images[0].gatsbyImageData}
                alt={el.title}
                className="project-img"
              />
              <GatsbyImage
                image={el.images[2].gatsbyImageData}
                alt={el.title}
                className="project-img"
              />
            </figure>
            {/* <section className="img-btn-wrapper">
              <button className="img-btn">
                <HiOutlineArrowNarrowLeft />
              </button>
              <button className="img-btn">
                <HiOutlineArrowNarrowRight />
              </button>
            </section> */}
            <article
              className={`${
                readMore[el.id]
                  ? "read-more-wrapper read-more-active"
                  : "read-more-wrapper"
              }`}
            >
              <section className="about-wrapper">
                <h3>About</h3>
                <p className="about">{el.about.about}</p>
              </section>
              <section className="mainFeatures-wrapper">
                <h3>Features</h3>
                <pre className="mainFeatures">
                  {renderRichText(el.mainFeatures)}
                </pre>
              </section>
            </article>
            <section className="project-icon-wrapper">
              <button onClick={onClick} className="long-btn">
                {`${readMore[el.id] ? "Read less" : "Read more"}`}
              </button>
              <a
                href={el.website}
                target="_blank"
                rel="noopener noreferrer"
                className="short-btn"
              >
                Live
              </a>
              <a
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
                className="short-btn"
              >
                Code
              </a>
            </section>
          </article>
        )
      })}
    </>
  )
}

export default Projects
