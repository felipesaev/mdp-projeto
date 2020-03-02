import React from "react"
import "../styles/styles.scss"



//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import VideoSection from "../components/videoSection"
import IndexPage from '../components/formParticipe';

import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />   
    <IndexPage/> 
    <VideoSection />   
    <Footer />
  </div>
)

export default IndexPage
