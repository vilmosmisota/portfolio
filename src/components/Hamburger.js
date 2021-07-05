import React, { useState } from "react"
import "../assets/styles/hamburger.css"

function Hamburger() {
  const [toggle, setToggle] = useState(false)

  const toggleHamburger = () => {
    if (!toggle) {
      return "nav-icon"
    } else {
      return "nav-icon open"
    }
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className={toggleHamburger()} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
