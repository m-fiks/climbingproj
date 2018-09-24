import React from "react";
import './Body.css';

const Body = props => (
    <div className="ui eight wide column routeList">
    <ol className="ui list">
        {(props.routes).slice(0,25).map(route => 
            <li key={route.id}> {route.name} 
                    {'     '}
                 <a target="_blank" href={route.url}>LINK </a>
            </li>

        )}
    </ol>
</div>
)

export default Body;