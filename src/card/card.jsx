import React from "react";
import './card.css';

const Card = (props) => (
    <div className = "card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="back">
                <div className="asl">{props.asl}</div>

            </div>
        </div>
    </div>
)

export default Card