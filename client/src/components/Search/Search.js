import React, { Component } from 'react';
import './Search.css';


const Search = props => (
    <div className="ui six wide column">
            <div className="ui form searchBar">
                <div className="field">
                    <label><h3>Find Routes!</h3></label>
                    <br/>
                    <input onChange={props.getInput} id="location" type="text" placeholder="Example City, MN"/>
                </div>
                <button onClick={props.getLocation} className="ui right floated inverted violet tiny button">Search Bro</button>
            </div>
    </div>
)

export default Search;