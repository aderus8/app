import React, { useRef } from 'react';
import Card from '../../card/card/Card';
import './CardRow.css';

const CardRow = ({ cards, onCardClick }) => {
    const rowRef = useRef(null);

    const scrollLeft = () => {
        rowRef.current.scrollLeft -= 300;
    };

    const scrollRight = () => {
        rowRef.current.scrollLeft += 300;
    };

    return (
        <div className="cardRow">
            {/*<div className="scrollButtons">*/}
            {/*    /!*<button onClick={scrollLeft} className="scrollButton left">*!/*/}
            {/*    /!*    &lt;*!/*/}
            {/*    /!*</button>*!/*/}
            {/*    /!*<button onClick={scrollRight} className="scrollButton right">*!/*/}
            {/*    /!*    &gt;*!/*/}
            {/*    /!*</button>*!/*/}
            {/*</div>*/}
            <div ref={rowRef} className="cardContainer">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        onClick={() => onCardClick(card.questions)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardRow;
