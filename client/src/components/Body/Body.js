import React, { Component } from "react";
import './Body.css'
import Search from '../Search';
import axios from 'axios';


class Body extends Component {

    state = {
        routes: []
    }
    
    componentDidMount() {
        fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.301167&lon=-92.534088&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf')
        .then(results => {
            return results.json();
        })
        .then(data => {
            let routesData = data.routes;
            let routes = routesData.map(route => route)
            this.setState({routes: routes})
            console.log(this.state.routes)
        })
    }

    render () {
        return (
            <div className="six wide column main">
                <ol className="ui list">
                    {(this.state.routes).map(route => 
                        <li> {route.name} </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Body;