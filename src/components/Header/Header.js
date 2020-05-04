import React from "react"

import "./Header.css"

class Header extends React.Component {
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