import React from 'react';
import "./Card.css";

const Card = ({image, title, description}) => {

    return(
        <div className="cards">
            <img className="cardsImg" src={image} />
            <div className="cardsOverlay">
                <div className="cardTitle">{title}</div>
                <div className="cardDescription">{description}</div>
            </div>
        </div>
    )
}

export default Card;
