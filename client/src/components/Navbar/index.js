import React from "react";
import "./style.css"

export function Navbar(props) {
    return(
        <div className="navbar">
            <a className="home" href="#" target="_blank">Home</a>
            <a className="link1" href="#" target="_blank">Link</a>
            <a className="link1" href="#" target="_blank">Link</a>
            <input className="search" type="text"{...props}/>
            <button className="search-btn">Search</button>
        </div>
    )
};