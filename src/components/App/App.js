import React, { Component } from 'react';
import './App.css';

import { Header } from "../Header"
import { Footer } from '../Footer';
import { TodoList } from "../TodoList"

import todoData from "../../data/todoData"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList todoData={todoData} />
        <Footer />
      </div>
    );
  }
}

export default App;
