import React from 'react';
import './App.css';

import { Header } from "../Header"

function App() {
  return (
    <div>
      <Header />
      <input type="checkbox" id="1" name="groceries"></input>
      <label for="1">Buy groceries</label><br></br>
      <input type="checkbox" id="2" name="laundry"></input>
      <label for="2">Do laundry</label><br></br>
      <input type="checkbox" id="3" name="dog"></input>
      <label for="3">Walk dog</label><br></br>
    </div>
  );
}

export default App;
