import React, { useEffect, useState } from "react"
import "../assets/styles/loadingscreen.css"

function LoadingScreen() {
  const [showLoadingScreen, setLoadingScreen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingScreen(false)
    }, 4000)
    return () => clearTimeout(timer)
  })

  const Loading = () => {
    if (showLoadingScreen === false) {
      return null
    } else {
      return (
        <section className="loader-wrapper">
          <div className="loading-text">
            <h1 className="name">Vilmos Misota</h1>
            <h1 className="subhead">Portfolio Website</h1>
          </div>
        </section>
      )
    }
  }

  return (
    <>
      <Loading />
    </>
  )
}

export default LoadingScreen
