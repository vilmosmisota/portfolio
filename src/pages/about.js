import React from "react"
import "../assets/styles/about.css"
import Layout from "../components/layout"

function about() {
  return (
    <>
      <Layout>
        <main className="about-container">
          <div className="about-header">
            <h1 className="about-name">Vilmos Misota</h1>
            <h1 className="about-subheading">Web developer</h1>
          </div>
          <div className="about-main">
            <p>
              Some time ago as a photographer, I built a website for my business
              using WordPress. Thinking back on the page and on WordPress with
              the knowledge I have now... It was bad and slow but it looked
              good. I always loved playing around with the design of it but at
              that time I never really got into the whole development process.
            </p>
            <p>
              At the beginning of Covid, I drifted away from Photography as a
              profession. It was the best time to pick up a new skill and with
              the little "development" experience I had building my pages I
              always felt like I would enjoy doing web development... and yes I
              do.
            </p>
            <p>
              First, I learnt the basics of HTML, CSS and JAVASCRIPT. Then I
              finished a Full-stack engineer career path at Codecademy where I
              learnt an exciting Javascript framework React and most of its
              necessary tools like Redux, react router dom. I also gained
              knowledge about back-end server NodeJS with Express and a
              relational database PostgreSQL. Quickly I found out the more I
              learn the more I am interested in this sector.
            </p>
            <p>
              Since, I have been learning and turning the knowledge into
              projects that sometimes end up in the real world and sometimes
              they just serve as a practice. My goal right now is to absorb as
              much as I can from those my senior and to become the best
              developer I can be. To work for a company using any of the
              Javascript frameworks would be a dream but honestly, I enjoy
              learning anything new.
            </p>
            <p>
              If you'd like to start a conversation or find out more please get
              in touch below and I get back to you as soon as possible
            </p>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default about
