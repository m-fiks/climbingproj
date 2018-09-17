import React, { Component } from 'react';
import Header from '../components/Header'
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
            <div className="ui eight wide column routeList">
                <ol className="ui list">
                    {(this.state.routes).map(route => 
                        <li key={route.id}> {route.name}
                                {'     '}
                             <a target="_blank" href={route.url}>LINK </a>
                        </li>

                    )}
                </ol>
            </div>
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