import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Students from './Students'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Gitam"/>
        </header>
        <Students/>
      </div>
    );
  }
}

export default App;
