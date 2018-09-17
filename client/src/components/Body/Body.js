import React, { Component } from "react";
import './Body.css'
import axios from 'axios';


class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            routes: this.props.routes,
            location: this.props.location
        }
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    //needs to be when user clicks search button dingus
    componentDidMount() {
        console.log(this.state)
        //lat and long will be something.props declared on main page or search page
        // fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=45.301167&lon=-92.534088&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200341001-eabe8c0fe32fc26aaa0ad951e62f04cf')
        // .then(results => {
        //     return results.json();
        // })
        // .then(data => {
        //     let routesData = data.routes;
        //     let routes = routesData.map(route => route)
        //     let newRoutes = routes.slice(0, 25)
        //     this.setState({routes: newRoutes})
        //     console.log(this.state.routes)
        // })
    }

    render () {
        return (
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
        )
    }
}

export default Body;