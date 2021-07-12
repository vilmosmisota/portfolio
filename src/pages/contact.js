import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import Seo from "../components/Seo"

function contact() {
  return (
    <>
      <Layout>
        <Seo title="Contact" />
        <ContactForm />
      </Layout>
    </>
  )
}

export default contact
