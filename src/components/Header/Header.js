import React, { Component } from "react"

import "./Header.css"

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return(
      <header className="navbar">Todo List</header>
    )
  }
}

export default Header