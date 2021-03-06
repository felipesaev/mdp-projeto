import { Link } from "gatsby"
import React from "react"
import Jump from 'react-reveal/Jump';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'




const LogoWapper = styled(Img)`
  height: 3.75rem;
  top: 8px;
  margin: 2rem;
  width: 3.75rem;
  ${media.lessThan('large')`
    height: 2.875rem;
    width: 2.875rem;
  `}
`

const Logo = () => {
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

  return <LogoWapper fluid={avatarImage.childImageSharp.fluid} />
}

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Logo/>
        </div>
        <div className="navigation">
          <nav>
          <Link to="#about">Sobre</Link>

            <Link to="#blog">Blog</Link>
            <Link to="#contact">Contato</Link>
            <Link to="#participe"><Jump>Participe</Jump></Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
