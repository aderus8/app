import React from 'react';
import "./GrammarCard.css";

const GrammarCard = ({image, title, description, onClick}) => {

    return(
        <div className="grammar-cards" onClick={onClick}>
            <img className="grammar-cardsImg" src={image} />
            <div className="grammar-cardsOverlay">
                <div className="grammar-cardTitle">{title}</div>
                <div className="grammar-cardDescription">{description}</div>
            </div>
        </div>
    )
}

export default GrammarCard;
