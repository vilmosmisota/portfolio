import React, { useState } from "react"
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
        test {
          website
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProjects.nodes

  const [current, setCurrent] = useState(0)
  const length = 5

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(projects)

  return (
    <>
      {projects.map(el => {
        return (
          <article className="project-wrapper" key={el.id}>
            <h2 className="project-title">{el.title}</h2>
            <p className="subheading">{el.sumupHeading}</p>
            <section className="overview-wrapper">
              <h4 className="overview-text">{el.overview.overview}</h4>
            </section>
            <figure className="project-img-wrapper">
              <GatsbyImage
                image={el.images[current].gatsbyImageData}
                alt={el.title}
                className="project-img"
              />
            </figure>
            <section className="img-btn-wrapper">
              <button className="img-btn">
                <HiOutlineArrowNarrowLeft onClick={prevSlide} />
              </button>
              <button className="img-btn">
                <HiOutlineArrowNarrowRight onClick={nextSlide} />
              </button>
            </section>
            <section className="mainFeatures-wrapper">
              <pre className="mainFeatures">
                {renderRichText(el.mainFeatures)}
              </pre>
            </section>
            <section className="project-icon-wrapper">
              <button className="long-btn">Read more</button>
              <a
                href={`"${el.github}"`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="short-btn">Live</button>
              </a>
              <a
                href={`"${el.test.website}"`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="short-btn">Code</button>
              </a>
            </section>
          </article>
        )
      })}
    </>
  )
}

export default Projects
