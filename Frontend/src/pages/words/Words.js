import React, {useState} from "react";
import "./Words.css"
import RotatingCard from "../../components/card/rotatingCard/RotatingCard";
import {WordsJSON} from "../../data/wordsJSON";
import PhotoShadowHover from "../../components/photos/photoShadowHover/PhotoShadowHover";

const Words = () => {
    const[level, setLevel] = useState('');

    return (
        <div>
             <div className="chooselevel">

               <h1> Choose your level: </h1>
                <button onClick={() => {setLevel('A1')}}> A1 </button>
                <button onClick={() => {setLevel('A2')}}> A2 </button>
                <button onClick={() => {setLevel('B1')}}> B1 </button>
                <button onClick={() => {setLevel('B2')}}> B2 </button>
                <button onClick={() => {setLevel('C1')}}> C1 </button>
                <button onClick={() => {setLevel('C2')}}> C2 </button>
            </div>


                    <div className="container-words">
                        {WordsJSON.map((item, index) => {
                            if (item.level === level) {
                                return <RotatingCard key={index} word={item.word}  translation={item.translation}/>
                            } else {
                                return null;
                            }
                        })}
                    </div>


        </div>
    )
}

export default Words;
