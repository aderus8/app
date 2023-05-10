import React from 'react';
import "./FlagCard.css";

const FlagCard = ({image, title, index, description}) => {

    return(
        <div className="flag-box" key={index}>
            <img src={image} />
            <h5> {title}</h5>
        </div>
    )
}

export default FlagCard;
