import React, {useState} from "react";
import "./Words.css"
import RotatingCard from "../../components/card/rotatingCard/RotatingCard";
import {WordsJSON} from "../../data/wordsJSON";

const Words = () => {
    const[level, setLevel] = useState('');

    return (
        <div className="words-bg">
             <div className="chooselevel">

               <h1> CHOOSE YOUR LEVEL </h1>
                <button onClick={() => {setLevel('A1')}}>
                <img src={require('../../assets/icons/blueGradient/book.png')}/>
                    A1
                </button>
                 <button onClick={() => {setLevel('A2')}}>
                     <img src={require('../../assets/icons/blueGradient/education.png')}/>
                     A2
                 </button>
                 <button onClick={() => {setLevel('B1')}}>
                     <img src={require('../../assets/icons/blueGradient/notebook.png')}/>
                     B1 </button>
                <button onClick={() => {setLevel('B2')}}>
                    <img src={require('../../assets/icons/blueGradient/pencil-case.png')}/>
                    B2 </button>
                <button onClick={() => {setLevel('C1')}}>
                    <img src={require('../../assets/icons/blueGradient/graduation.png')}/>
                    C1 </button>
                <button onClick={() => {setLevel('C2')}}>
                    <img src={require('../../assets/icons/blueGradient/school.png')}/>
                    C2 </button>
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
