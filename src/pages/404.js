import React from "react"
import {Link} from 'gatsby'


const NotFoundPage = () => {
  return (
    <div className="notFound">
      <p>Parece que acessou um endereço incorreto.<br/> Volte para<Link to="#home">pagina inicial </Link></p>
    </div>
  )
}

export default NotFoundPage
