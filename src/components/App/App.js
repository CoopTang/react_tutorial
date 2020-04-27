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
        <TodoItem task="do this"/>
        <TodoItem task="do that"/>
        <TodoItem task="do nothing"/>
      </body>
      <Footer />
    </div>
  );
}

export default App;
