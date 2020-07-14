import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Connections(props) {
    return(
        <Col>
            <div className="connections" {...props}/>
        </Col>
    )
};