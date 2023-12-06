import React from 'react';
import "./FlagCard.css";

const FlagCard = ({image, title, index, description, onClick}) => {

    return(
        <div className="flag-box" key={index} onClick={onClick}>
            <img src={image} />
        </div>
    )
}

export default FlagCard;
