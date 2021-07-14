import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import "../assets/styles/projects.css"

const myQuery = graphql`
  {
    allContentfulOnGoingProjects {
      nodes {
        github
        name
        sumupHeading
        mainFeatures {
          raw
        }
        images {
          gatsbyImageData(
            formats: AUTO
            height: 450
            quality: 100
            layout: CONSTRAINED
          )
        }
        id
        about {
          about
        }
        overview {
          overview
        }
      }
    }
  }
`

const OnGoingProjects = () => {
  const data = useStaticQuery(myQuery)
  const OnGoingProjects = data.allContentfulOnGoingProjects.nodes

  const initialStateForIds = OnGoingProjects.map(el => {
    const idFalse = { [el.id]: false }
    return idFalse
  })

  const [more, setMore] = useState(initialStateForIds)

  console.log(OnGoingProjects)

  return (
    <>
      {OnGoingProjects.map(el => {
        const onClick = () => {
          setMore(prev => ({ ...prev, [el.id]: !prev[el.id] }))
        }

        const ShowCodeBtn = () => {
          if (el.github === null) {
            return (
              <>
                <button className="short-btn">No Code</button>
              </>
            )
          } else {
            return (
              <>
                <a
                  href={el.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="short-btn"
                >
                  Code
                </a>
              </>
            )
          }
        }

        const ShowSecondImg = () => {
          if (el.images[1] === undefined) {
            return null
          } else {
            return (
              <>
                <GatsbyImage
                  image={el.images[1].gatsbyImageData}
                  alt={el.title}
                  className="project-img"
                />
              </>
            )
          }
        }

        return (
          <article className="project-wrapper" key={el.id}>
            <h2 className="project-title">{el.name}</h2>
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
              <ShowSecondImg />
            </figure>
            <article
              className={`${
                more[el.id]
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
                {`${more[el.id] ? "Read less" : "Read more"}`}
              </button>
              <button className="short-btn">No Live</button>
              <ShowCodeBtn />
            </section>
          </article>
        )
      })}
    </>
  )
}

export default OnGoingProjects
