import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1
      style={{
        fontFamily: 'raleway',
        fontSize: '1.25rem',
        color: '#000000',
      }}>Dev Projects</h1>
    <p
      style={{
        fontFamily: 'raleway',
        fontSize: '.85rem',
        color: '#696969',
      }}>Below are some examples of projects I have built ranging from my recent dev experience to my past floral design endeavours</p>
    <Link to="/"
      style={{
        color: `#000000`,
        textDecoration: `none`,
        fontFamily: 'raleway',
        float: `right`,
      }}>Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
