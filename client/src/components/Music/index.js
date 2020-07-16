import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Music(props) {
    return(
        <Col>
            <div className="music">
                <div className="controls">
                    <i class="fas fa-step-backward"></i>
                    {/* <i class="fas fa-pause"></i> */}
                    <i class="fas fa-play"></i>
                    <i class="fas fa-step-forward"></i>
                </div>
            </div>
        </Col>
    )
};