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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(pos)
        });
    };

    // const onGeolocationSuccess = function(pos) {
    //     coords = pos.coords;
    //     lat = coords.latitude;
    //     long = coords.longitude;
    //     $.ajax({
    //       url: `https://www.mapquestapi.com/geocoding/v1/reverse?key=dvGY3tGwYi2vg1NIbCfJFG3w96p4MhgJ&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`,
    //       method: 'GET',
    //     }).then(res => {
    //         console.log(res);
    //     })    
    // };

    // fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.301167&lon=-92.534088&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf')
    // .then(results => {
    //     return results.json();
    // })
  }

  render() {
    return (
        <div className="ui grid container">
            <Header/>
            <Body/>
            <Search
                getInput = {this.getInput}
                getLocation = {this.getLocation}
                location={this.location}
           />
       </div>
    );
  }
}

export default Main;