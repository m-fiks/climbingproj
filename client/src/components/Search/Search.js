import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <div className="ui form">
                <div className="field">
                    <label>Find Routes!</label>
                    <input type="text"/>
                </div>
                <button className="ui inverted violet tiny button">Search Bro</button>
            </div>
        )
    }
}

export default Search;