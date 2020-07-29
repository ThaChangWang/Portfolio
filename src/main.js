import React from "react"
import Login from "./login"

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      page: "main"
    }
  }


  render() {

    if (this.state.page === "main") {

      return (
        <div>

          <button onClick={() => this.setState({ page: "login" })}>login</button>
          <button onClick={() => this.setState({ page: "register" })}>register</button>

        </div>
      )
    }

    else if (this.state.page === "login") {

      return (
        <div>

          <button onClick={() => this.setState({ page: "login" })}>login</button>
          <button onClick={() => this.setState({ page: "register" })}>register</button>

          <Login />

        </div>
      )
    }

    else if (this.state.page === "register") {

      return (
        <div>

          <button onClick={() => this.setState({ page: "login" })}>login</button>
          <button onClick={() => this.setState({ page: "register" })}>register</button>

          <h1>{this.state.page}</h1>        

        </div>
      )
    }

    
  }
}

export default Main