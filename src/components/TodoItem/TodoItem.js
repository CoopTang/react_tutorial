import React from "react"

import "./TodoItem.css"

function TodoItem() {
  return(
    <div className="todo-item">
      <input type="checkbox"></input>
      <p>This is an item to do</p>
    </div>
  )
}

export default TodoItem