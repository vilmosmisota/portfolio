import React from "react"
import "../assets/styles/main.css"
import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
