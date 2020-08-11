import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "../../components/Grid";
import { Link, Redirect } from "react-router-dom";
import { Connections } from "../../components/ConnectionsBox"

class Music extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <div className="search">
                    <input className="search-input" type="text" placeholder="Search music..."></input>
                    <button className="music-search">Search</button>
                </div>
                <div className="results"></div>
            </Container>
        );
    }
}

export default Music;