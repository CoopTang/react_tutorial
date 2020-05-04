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

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange() {
    this.setState(state => ({
      isCompleted: !state.isCompleted
    }))
  }
  
  render() {
    return(
      <div className="todo-item">
        <Checkbox 
          isChecked={this.state.isCompleted}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <p>{this.state.task}</p>
      </div>
    )
  }
}

export default TodoItem