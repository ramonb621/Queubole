import React from "react";
import { Container, Col, Row } from "../Grid";
import "./style.css"

export function Music(props) {
    return(
        <Col>
            <div className="music">
                <div className="controls">
                    <button><i class="fas fa-step-backward"></i></button>
                    {/* <i class="fas fa-pause"></i> */}
                    <button><i class="fas fa-play"></i></button>
                    <button><i class="fas fa-step-forward"></i></button>
                </div>
            </div>
        </Col>
    )
};