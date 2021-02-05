import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `#A9A9A9`,
      marginTop: `2rem`,
      color: `white`,
      textDecoration: `none`,
      fontFamily: 'raleway',
      fontSize: '.65rem'
    }}
  >
     
    © {new Date().getFullYear()}, Built by Tahmina Ringer
    <p>206-962-7695</p>
    <p>tahmina.ringer@gmail.com</p>
    <a 
    href="https://www.linkedin.com/in/tahmina-ringer/"
    style={{
      color: `white`,
      textDecoration: `none`,
      fontFamily: 'raleway',
    }}>LinkedIn</a>
  </footer>
)


export default Footer