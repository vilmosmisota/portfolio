import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import "../assets/styles/projects.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
// import useWindowSize from "../helper/windowSize"

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
  // const windowSize = useWindowSize()

  // const checkWindowSize = () => {
  //   if (windowSize.width < 930) {
  //     return 2
  //   } else {
  //     return 0
  //   }
  // }

  const [current, setCurrent] = useState(0)
  const [readMore, setReadMore] = useState(false)

  const length = 5

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const handleClick = () => {
    setReadMore(!readMore)
  }

  const toggleReadMore = () => {
    if (!readMore) {
      return "read-more-wrapper"
    } else {
      return "read-more-wrapper read-more-active"
    }
  }

  const toggleReadMoreBtn = () => {
    if (!readMore) {
      return "Read More"
    } else {
      return "Read Less"
    }
  }

  // console.log(current)
  // console.log(checkWindowSize())

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
                onClick={nextSlide}
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
            <article className={toggleReadMore()}>
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
              <button onClick={handleClick} className="long-btn">
                {toggleReadMoreBtn()}
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
