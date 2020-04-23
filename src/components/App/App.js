import React from 'react';
import './App.css';

import { Header } from "../Header"
import { Footer } from '../Footer';
import { TodoItem } from "../TodoItem"

function App() {
  return (
    <div>
      <Header />
      <body className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </body>
      <Footer />
    </div>
  );
}

export default App;
