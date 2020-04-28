import React from 'react';
import './App.css';

import { Header } from "../Header"
import { Footer } from '../Footer';
import { TodoItem } from "../TodoItem"

import todoData from "../../data/todoData"

function App() {
  const todoItemComponents = todoData.map(item => {
    return <TodoItem key={item.id} item={item} />
  })

  return (
    <div>
      <Header />
      <body className="todo-list">
        {todoItemComponents}
      </body>
      <Footer />
    </div>
  );
}

export default App;
