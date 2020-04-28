import React from "react"

import "./TodoItem.css"

function TodoItem(props) {
  return(
    <div className="todo-item">
      <input type="checkbox" checked={!props.item.isCompleted}></input>
      <p>{props.item.task}</p>
    </div>
  )
}

export default TodoItem