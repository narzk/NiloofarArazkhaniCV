import React from "react"

import Layout from "../components/layout/layout"
import Image from "../components/common/image"
import Emoji from "../components/common/emoji"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout classStyle="flex-center">
    <SEO title="Home" />
    <div className="intro">
      <section className="intro__welcome">
        <h1 className="intro__title">
          Hello World, I'm Niloofar Arazkhani{" "}
          <span className="hand-wave">
            <Emoji emoji="👋" label="Hand waving" />
          </span>
        </h1>
        <p style={{'text-align': 'justify'}}>
        I am a PhD candidate at Sharif University. My strengths are in research and problem-solving.  I specialise in Computational Geometry and have a good academic record from The Universities of Iran.  I have experience in front end programming,  My hobbies include Reading, country walks, photography and have a blog post. 
        </p>
      </section>
      <section className="card intro__card card--small">
        <Image className="img-round" />
        <h2 className="card__title">Niloofar Arazkhani</h2>
      </section>
    </div>
  </Layout>
)

export default IndexPage
