import React, { useState } from "react"

function Introduction() {
  const [phase, setPhase] = useState("firstPhase")

  const clickToSecondPhase = () => {
    setPhase("secondPhase")
  }

  const ShowIntroduction = () => {
    if (phase === "firstPhase") {
      return (
        <>
          <h1>Hello,</h1>
          <h1>
            I am Vilmos, <br /> a web developer with a passion to create and the
            will to progress
          </h1>
        </>
      )
    } else if (phase === "secondPhase") {
      return (
        <>
          <p>
            Awesome. Would you like to know more about my coding background or
            interested in what I do when I am not in front of a laptop?
          </p>
        </>
      )
    }
  }

  const ShowBtns = () => {
    if (phase === "firstPhase") {
      return (
        <>
          <button onClick={clickToSecondPhase} className="black-btn">
            More
          </button>
        </>
      )
    } else if (phase === "secondPhase") {
      return (
        <>
          <button className="black-btn">Code</button>
          <button className="black-btn">No Code</button>
        </>
      )
    }
  }

  return (
    <>
      <div className="intro">
        <ShowIntroduction />
      </div>
      <div className="intro-btn-wrapper">
        <ShowBtns />
      </div>
    </>
  )
}

export default Introduction
