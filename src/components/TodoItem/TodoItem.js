import React from "react"

import "./TodoItem.css"

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return(
      <div className="todo-item">
        <input type="checkbox" checked={!this.props.item.isCompleted}></input>
        <p>{this.props.item.task}</p>
      </div>
    )
  }
}

export default TodoItem