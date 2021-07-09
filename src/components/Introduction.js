import React, { useState, useRef, useEffect } from "react"

function Introduction() {
  const [phase, setPhase] = useState("firstPhase")
  let countCodingPhase = useRef(0)

  useEffect(() => {
    countCodingPhase.current = countCodingPhase.current + 1
  })

  const ShowIntroduction = () => {
    if (phase === "firstPhase") {
      return (
        <>
          <h1>Hello,</h1>
          <h1>
            I am Vilmos, <br /> a web developer with a passion to create and
            progress
          </h1>
        </>
      )
    } else if (phase === "secondPhase") {
      return (
        <>
          <p>
            I am glad you would like to learn more about me. <br /> Is it
            something coding related you are interested in or something that I
            do when I am not in front of a laptop?
          </p>
        </>
      )
    } else if (phase === "coding") {
      return (
        <>
          <p>
            I am a self-thought developer striving to gain more and more
            knowledge and experience. <br /> On the front end, I am most
            familiar with Javascript and its framework React. On the back end:
            Node and Postgresql.
          </p>
        </>
      )
    } else if (phase === "non-coding") {
      return (
        <>
          <p>
            I spend most of my time in the outdoors surfing waves, climbing
            rocks and hiking. I also have a passionate pursuit of an art form
            called photography.
          </p>
        </>
      )
    } else if (phase === "end-phase") {
      return (
        <>
          <p>
            I am thrilled you still want to know more. <br /> If you haven't
            already, scroll down to see what I have built so far.
          </p>
        </>
      )
    }
  }

  const ShowBtns = () => {
    if (countCodingPhase.current === "[object HTMLDivElement]111") {
      return (
        <>
          <button onClick={() => setPhase("end-phase")} className="black-btn">
            More???
          </button>
        </>
      )
    } else if (phase === "firstPhase") {
      return (
        <>
          <button onClick={() => setPhase("secondPhase")} className="black-btn">
            More
          </button>
        </>
      )
    } else if (phase === "secondPhase") {
      return (
        <>
          <button onClick={() => setPhase("coding")} className="black-btn">
            Coding
          </button>
          <button onClick={() => setPhase("non-coding")} className="black-btn">
            Non-Coding
          </button>
        </>
      )
    } else if (phase === "coding") {
      return (
        <>
          <button onClick={() => setPhase("non-coding")} className="black-btn">
            Non-Coding
          </button>
        </>
      )
    } else if (phase === "non-coding") {
      return (
        <>
          <button onClick={() => setPhase("coding")} className="black-btn">
            Coding
          </button>
        </>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <div ref={countCodingPhase} className="intro">
        <ShowIntroduction />
      </div>
      <div className="intro-btn-wrapper">
        <ShowBtns />
      </div>
    </>
  )
}

export default Introduction
