import React from 'react';
import "./RotatingCard.css";

const RotatingCard = ({word, translation, definition}) => {

    return(
        <div className="card-container">
            <div className="card">
                <div className="front">
                    <h2>{word}</h2>
                    <h5> {definition}</h5>
                </div>
                <div className="back">
                    <h5>{translation}</h5>
                </div>
            </div>
        </div>

    )
}

export default RotatingCard;
