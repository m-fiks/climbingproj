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
    //convert to lat, long using geolocation api???
    //look at first proj
      this.setState({location: e.target.value})
  }

  searchLocation = () => {
    console.log(this.state.location)
    let url = `http://www.mapquestapi.com/geocoding/v1/address?key=e9qM1hzBzG6h2nSfjN3sOrrRoKhUnUHO&location=${this.state.location}`
    fetch(url)
    .then(results => results.json())
    .then(data => {
        let latLng = data.results[0].locations[0].latLng;
        console.log(latLng)
        this.setState({
            lat: latLng.lat,
            long: latLng.lng
        })
        this.lookUp();
    })
  }
      
  

  getLocation = () => {
    //directly get lat & long
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({lat: position.coords.latitude})
          this.setState({long: position.coords.longitude})
          this.lookUp();
        });
    };
  }

  lookUp = () => {
    //find routes nearby and display to DOM
    console.log(this.state)
    fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${this.state.lat}&lon=${this.state.long}&maxDistance=50&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf`)
    .then(results => {
        return results.json();
    })
    .then(data => {
        console.log(data)
        this.setState({routes: data.routes})
    })
  }

  render() {
    return (
        <div className="ui grid container">
            <Header/>
            <div className="ui eight wide column routeList">
                <ol className="ui list">
                    {(this.state.routes).slice(0,25).map(route => 
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
                searchLocation = {this.searchLocation}
           />
       </div>
    );
  }
}

export default Main;