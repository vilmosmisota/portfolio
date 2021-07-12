import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Seo = ({ title, description }) => {
  const url = useLocation()
  const href = url.href

  const defaultDescription =
    "A web developer with a passion to create and progress"
  const metaDescription = description || defaultDescription
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | Vilmos Misota - Web Developer - Portfolio`}
      meta={[{ name: `description`, content: metaDescription }]}
    >
      <link rel="canonical" href={href} />
      <meta name="description" content={metaDescription} />
      <meta
        name="keywords"
        content="web development, coding, create, website, web developer, portfolio"
      />
      <meta property="og:title" content="Vilmos Misota - Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={href} />
    </Helmet>
  )
}

export default Seo
