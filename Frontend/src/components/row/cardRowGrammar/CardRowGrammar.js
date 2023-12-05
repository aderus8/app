import React, { useRef } from 'react';
import Card from '../../card/card/Card';
import '../cardRow/CardRow.css';
import GrammarCard from "../../card/grammarCard/GrammarCard";

const CardRow = ({ cards }) => {
    const rowRef = useRef(null);

    const scrollLeft = () => {
        rowRef.current.scrollLeft -= 300;
    };

    const scrollRight = () => {
        rowRef.current.scrollLeft += 300;
    };

    return (
        <div className="cardRow-grammar">
            {/*<div className="scrollButtons">*/}
            {/*    <button onClick={scrollLeft} className="scrollButton left">*/}
            {/*        &lt;*/}
            {/*    </button>*/}
            {/*    <button onClick={scrollRight} className="scrollButton right">*/}
            {/*        &gt;*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div ref={rowRef} className="cardContainer-grammar">
                {cards.map((card, index) => (
                    <GrammarCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardRow;
