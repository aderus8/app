import React from 'react';
import "./Card.css";
import QuizDetails from "../../../pages/quiz/quizDetails/QuizDetails";

const Card = ({image, title, description, onClick}) => {

    return(
        <div className="cards" onClick={onClick} >
            <img className="cardsImg" src={image} />
            <div className="cardsOverlay">
                <div className="cardTitle">{title}</div>
                <div className="cardDescription">{description}</div>
            </div>
        </div>
    )
}

export default Card;
