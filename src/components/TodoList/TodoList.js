import React, { Component } from "react"


import "./TodoList.css"
import { TodoItem } from "../TodoItem"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: this.props.todoData
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    const updatedTodos = this.state.todoItems.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })
    
    this.setState(() => {
      return { todoItems: updatedTodos }
    })

    // Why does this not work??
    // this.setState(state => {
    //   const updatedTodos = state.todoItems.map(item => {
    //     if (item.id === id) {
    //       item.isCompleted = !item.isCompleted
    //     }
    //     return item
    //   })
    //   return {
    //     todoItems: updatedTodos
    //   }
    // })
  }

  render() {
    const todoItemComponents = this.state.todoItems.map(item => 
      <TodoItem
        key={item.id}
        item={item}
        handleClick={this.handleClick}
      />
    ) 

    return(
      <div className="todo-list">
        {todoItemComponents}
      </div>
    )
  }
}

export default TodoList

