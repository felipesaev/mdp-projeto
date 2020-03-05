import React from "react"

export default class FormPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <section id ="participe"className="pageForm">
        <div className="imageForm">
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Primeiro Nome
          <input
              type="text"
              name="firstName"
              placeholder="Primeiro nome"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Sobrenome
          <input
              type="text"
              placeholder="Último nome"

              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Digite o motivo da sua participação
          <textarea
              type="text"
              placeholder="Digite aqui"

              name="participacao"
            //value={this.state.lastName}
            // onChange={this.handleInputChange}
            />
          </label>

          <label>
            Deixe seu numero, entraremos em contato
          <input
              placeholder="(xx) xxxxx-xxxx"
              type="number"
              name="tel"
            // value={this.state.lastName}
            // onChange={this.handleInputChange}
            />
          </label>
          <button className="buttonName" type="submit">Enviar</button>
        </form>
      </section>
    )
  }
}