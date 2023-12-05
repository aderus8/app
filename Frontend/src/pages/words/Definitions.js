import React from "react";
import "./Words.css"
import RotatingCard from "../../components/card/rotatingCard/RotatingCard";
import {WordsJSON} from "../../data/wordsJSON";
const Definitions = () => {

    return (
        <div className="words-bg">
            <div className="chooselevel">     <h1> DEFINITIONS </h1>
            <div className="container-words">
                {WordsJSON.map((item, index) => {
                    return(
                        <RotatingCard  definition={item.definition} translation={item.word}/>
                    )
                })}

            </div>
            </div>

        </div>
    )
}

export default Definitions;
