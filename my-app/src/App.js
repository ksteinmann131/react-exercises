import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import GreetingContainer from './GreetingContainer.js';
import CounterList from './CounterList.js';
import Counter from './Counter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GreetingContainer />
        <CounterList/>
      </div>
    );
  }
}

export default App;
