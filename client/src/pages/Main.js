import React, { Component } from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Search from '../components/Search'

class Main extends Component {

  state = {
      location : null
  }

  getInput = e => {
      console.log(e.target.value)
      this.setState({location: e.target.value})
  }
      
  getLocation = () => {
    console.log(this.state.location)
    //convert to lat, long using geolocation api???
    //look at first proj
    //this needs to be sent to Main.js?
  }

  render() {
    return (
        <div className="ui grid container">
            <Header/>
            <Body/>
            <Search
                getInput = {this.getInput}
                getLocation = {this.getLocation}
           />
        </div>
    );
  }
}

export default Main;