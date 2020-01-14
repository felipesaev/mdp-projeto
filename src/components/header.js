import { Link } from "gatsby"
import React from "react"
import Jump from 'react-reveal/Jump';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'




const Logo = styled(Img)`
  height: 3.75rem;
  top: 8px;
  margin: 2rem;
  width: 3.75rem;
  ${media.lessThan('large')`
    height: 2.875rem;
    width: 2.875rem;
  `}
`

const LogoP = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "logop.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <LogoP fluid={avatarImage.childImageSharp.fluid} />
}

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <LogoP/>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/aboutBlurb">Sobre nós</Link>
            <Link to="/work">Blog</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/contact"><Jump>Participe</Jump></Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
