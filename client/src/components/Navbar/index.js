import React from "react";
import "./style.css"

export function Navbar(props) {
    return(
        <div className="navbar">
            <a className="home" href="/">Home</a>
            <a className="link1" href="/music">Music</a>
            <a className="link1" href="/profile">Profile</a>
            <input className="search" type="text"{...props}/>
            <button className="search-btn">Search</button>
        </div>
    )
};