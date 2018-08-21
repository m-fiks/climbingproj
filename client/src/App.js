import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/Main'
import Body from './components/Body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Main/>
        </header>
        <p className="App-intro">
         <Body/>
        </p>
      </div>
    );
  }
}

export default App;
