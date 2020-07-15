import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Connections(props) {
    return(
        <Col>
            <div className="connections">
                <i className="far fa-id-badge" {...props}/>
            </div>
        </Col>
    )
};