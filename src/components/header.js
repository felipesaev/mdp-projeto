import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/home">ODUNSI</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">Sobre nós</Link>
            <Link to="/work">Blog</Link>
            <Link to="/contact">Contato</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
