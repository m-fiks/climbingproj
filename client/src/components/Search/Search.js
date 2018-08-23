import React, { Component } from 'react';

const Search = props => (
        <div className="ten wide column">
            <div className="ui form">
                <div className="field">
                    <label>Find Routes!</label>
                    <input onChange={props.getInput} id="location" type="text" placeholder="Example City, MN"/>
                </div>
                <button onClick={props.getLocation} className="ui inverted violet tiny button">Search Bro</button>
            </div>
        </div>
)

export default Search;