import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Body from './components/Body'
import Search from './components/Search'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="ui grid container">
            <Header/>
            <Body/>
            <Search/>
          </div>
    );
  }
}

export default App;
