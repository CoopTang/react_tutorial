import React from "react"

import "./TodoItem.css"
import { Checkbox } from "../Checkbox"

const TodoItem = (props) => {
  let style;
  if (props.item.isCompleted) { style = {textDecoration: "line-through"} }

  return(
    <div className="todo-item" onClick={() => props.handleClick(props.item.id)}>
      <Checkbox isChecked={props.item.isCompleted} />
      <p className="todo-text" style={style}>{props.item.task}</p>
    </div>
  )
}
export default TodoItem