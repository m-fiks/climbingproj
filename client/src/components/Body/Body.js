import React, { Component } from "react";
import axios from 'axios';


class Body extends Component {

    state = {
        routeNames: []
    }
    
    componentDidMount() {
        fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.301167&lon=-92.534088&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf')
        .then(results => {
            return results.json();
        })
        .then(data => {
            //console.log(data.routes)
            let routes = data.routes;
            let routeNames = routes.map(route => route.name)
            console.log(routeNames)
            this.setState({routeNames: routeNames})
        })
    }

    render () {
        return (
            <div className="six wide column">
               {this.state.routeNames}
            </div>
        )
    }
}

export default Body;