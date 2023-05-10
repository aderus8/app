import React from "react";
import "./Words.css"
import RotatingCard from "../../components/card/rotatingCard/RotatingCard";
import {WordsJSON} from "../../data/wordsJSON";
const Definitions = () => {

    return (
        <div>
            <h2> WORDS </h2>
            <div className="container-words">
                {WordsJSON.map((item, index) => {
                    return(
                        <RotatingCard  definition={item.definition} translation={item.word}/>
                    )
                })}

            </div>


        </div>
    )
}

export default Definitions;
