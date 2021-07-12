import React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const error = () => {
  const myStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Layout>
      <Seo title="Error" description="No page found" />
      <div style={myStyle}>
        <h1 style={{ textTransform: "capitalize" }}>
          Ooops, No page found. 404 error.
        </h1>
      </div>
    </Layout>
  )
}

export default error
