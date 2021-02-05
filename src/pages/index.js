import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `160px`, marginRight: `1.45rem`, marginTop: `.75rem`, float: 'left' }}>
      <Image />
    </div>
    <h1
    style={{
      fontFamily: 'raleway',
      fontSize: '1.5rem',
      color: '#000000',
      marginTop: '1.5rem'
    }}>Welcome, I am Tahmina, a full stack Javascript developer.</h1>
    <p
    style={{
      fontFamily: 'raleway',
      fontSize: '.75rem',
      color: '#696969',
    }}>Before software development I spent 20yrs in the floral and event industry. The past five, I successfully owned and operated a floral and event design company I built from the ground up.</p>
     <p
    style={{
      fontFamily: 'raleway',
      fontSize: '.75rem',
      color: '#696969',
    }}>When Covid hit, my industry was hit really hard and I found myself needing to make the difficult decision to pursue a different career path.</p>
     <p
    style={{
      fontFamily: 'raleway',
      fontSize: '.75rem',
      color: '#696969',
    }}>I was drawn to the tech industry, because I thrive by being part of a supportive, team environment that is working towards a collaborative, innovative, solution and goals.</p>
     <p
    style={{
      fontFamily: 'raleway',
      fontSize: '.75rem',
      color: '#696969',
    }}>I was inspired by the positive industry environment, continuous learning atmosphere and passion for growth and problem solving. I believe tech is the key to solving many big ticket problems our world faces and am driven to make an impact and create positive change.</p>
     <p
    style={{
      fontFamily: 'raleway',
      fontSize: '.75rem',
      color: '#696969',
    }}>My passions include my wildly energetic 5 year old identical twins, consistent curiosity, creative endeavours, designing and building things from scratch out of what most would consider garbage, establishing lasting relationships with my customer base and researching and brainstorming projects into reality that exceed original expectations. </p>

  </Layout>
)

export default IndexPage
