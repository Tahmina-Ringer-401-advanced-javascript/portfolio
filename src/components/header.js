import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "@fontsource/raleway/500.css"


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "rose.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <header
      style={{
        background: `#A9A9A9`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2.75rem 1.0875rem`,
        }}
      >
        <div style={{ width: `80px`, marginTop: `-1rem`, float: 'left' }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontFamily: 'raleway',
              float: `right`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        {/* <Link to="/using-typescript/"
          style={{
            color: `white`,
            fontFamily: `raleway`,
            textDecoration: `none`,
            float: `right`,
          }}>Floral Portfolio</Link> */}
        <Link
          to="/page-2/"
          style={{
            color: `#000000`,
            fontFamily: `raleway`,
            textDecoration: `none`,
            float: `right`,
          }}>Dev Portfolio</Link> <br />
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
