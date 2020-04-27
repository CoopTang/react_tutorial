import React from "react"

import "./TodoItem.css"

function TodoItem(props) {
  return(
    <div className="todo-item">
      <input type="checkbox"></input>
      <p>{props.task}</p>
    </div>
  )
}

export default TodoItem