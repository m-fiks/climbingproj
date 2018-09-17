import React, { Component } from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Search from '../components/Search'

class Main extends Component {

  state = {
      location : null,
      lat: null,
      long: null,
      routes: []
  }

  getInput = e => {
      //console.log(e.target.value)
      this.setState({location: e.target.value})
  }
      
  getLocation = () => {
    //convert to lat, long using geolocation api???
    //look at first proj
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({lat: position.coords.latitude})
          this.setState({long: position.coords.longitude})
        });
    };
  }

  lookUp = () => {
    console.log(this.state)
    fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${this.state.lat}&lon=${this.state.long}&maxDistance=50&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf`)
    .then(results => {
        return results.json();
    })
    .then(data => {
        this.setState({routes: data.routes})
    })
  }

  render() {
    return (
        <div className="ui grid container">
            <Header/>
            <Body
              location = {this.state.location}
              routes = {this.state.routes}
            />
            <Search
                getInput = {this.getInput}
                getLocation = {this.getLocation}
                location={this.location}
                lookUp={this.lookUp}
           />
       </div>
    );
  }
}

export default Main;