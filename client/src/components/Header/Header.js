import React, { Component } from "react";
import './Header.css';

class Header extends Component {

    render () {
        return (
        <div className="row mainHeader">
            <div className="sixteen wide column">
                <h1 className="ui teal header">
                    find me something to climb
                </h1>
            
                <div className="ui medium breadcrumb">
                    <div className="section">main</div>
                    <div className="divider">/</div>
                    <div className="section">saved</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;