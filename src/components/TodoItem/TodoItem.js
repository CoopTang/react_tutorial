import React, { Component } from "react"

import "./TodoItem.css"
import "../Checkbox"
import { Checkbox } from "../Checkbox"

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCompleted: this.props.item.isCompleted,
      task: this.props.item.task
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isCompleted: !state.isCompleted
    }))
  }
  
  render() {
    return(
      <label className="todo-item" onClick={this.handleClick}>
        <Checkbox 
          isChecked={this.state.isCompleted}
        />
        <p className="todo-text">{this.state.task}</p>
      </label>
    )
  }
}

export default TodoItem