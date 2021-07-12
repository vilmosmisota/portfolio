import React from "react"
import "../assets/styles/main.css"
import Footer from "./Footer"
import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
