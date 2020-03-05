import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import config from 'react-reveal/globals';
import Zoom from 'react-reveal/Zoom';

config({ ssrFadeout: true });

const AboutBlurb = () => {
  const data = useStaticQuery(
    graphql` query {
      flower: file(relativePath: { eq: "alineabout.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "home.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="about" className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
      
          <div className="content" 
          data-sal="slide-left"
          data-sal-duration="3s"
          data-sal-delay="500"
          data-sal-easing="ease-out-back"
          >
              <Zoom ssrFadeout>
           
            <h3>Todas por todas</h3>
            <p>
            Juntas seremos mais fortes, juntas criaremos um elo
            de amor que cobrirá toda dor e tristeza.<br/><br/>

            O projeto "Mulheres de peito" surgiu após minha grande 
            amiga Aline Bertholdo Tavolaro ser diagnosticada com 
            cancer de mama, o momento do encontro com as amigas , a 
            maquiagem e sorrisos, foram fundamentais para trazer 
            alegria e ainda ajuda-la no tratamento , hoje ela brilha no 
            céu. 
            </p>
            </Zoom>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images" 
             data-sal="slide-right"
             data-sal-duration="3s"
             data-sal-delay="500"
             data-sal-easing="ease-out-back"
          >
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"
        data-sal="slide-right"
        data-sal-duration="3s"
        data-sal-delay="500"
        data-sal-easing="ease-out-back"
      ></div>
      <div className="black-box overlay"
        data-sal="slide-right"
        data-sal-duration="3s"
        data-sal-delay="300"
        data-sal-easing="ease-out-back"
      ></div>
    </div>
  )
}

export default AboutBlurb
