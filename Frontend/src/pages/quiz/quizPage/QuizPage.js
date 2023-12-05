import React, {useRef, useState} from "react";
import "./QuizPage.css";
import "../../../components/photos/photoShadow/PhotoShadow.css";
import CardRow from "../../../components/row/cardRow/CardRow";
import {cardsJSON} from "../../../components/row/CardsJSON";
import "./QuizPage.css"
import { questionsFoodJSON,questionsCultureJSON,questionsHealthJSON,questionsMusicJSON,questionsSportJSON,questionsTechnologyJSON,questionsWorldJSON,questionsLiteratureJSON} from "../../../data/questionsJSON";
import Card from "../../../components/card/card/Card";
import QuizDetails from "../quizDetails/QuizDetails";

const QuizPage = () => {
    const [selectedQuestions, setSelectedQuestions] = useState("0");
    const [allQ, setAllQ] = useState(true);

    const handleCardClick = (questions) => {
        setSelectedQuestions(questions);
        console.log("SC: " + selectedQuestions);
        setAllQ(false);
    };

    const rowRef = useRef(null);

    const scrollLeft = () => {
        rowRef.current.scrollLeft -= 300;
    };

    const scrollRight = () => {
        rowRef.current.scrollLeft += 300;
    };

    return(
        <>
        {allQ ===true ?  (

            <div className="bg-gradient-1">
            <div className='div1-quiz' style={{borderRadius: "15px"}}>
                <div className='div2-quiz' style={{borderRadius: "15px", backgroundImage: "url('https://d-tm.ppstatic.pl/kadry/c6/42/3afceb88dc08dfee43861a492a5c.1000.jpg')"}}  ></div>
                <div>
                    <div className='div3-quiz' style={{borderRadius: "15px"}}></div>
                    <div className="div4-quiz">
                        <div className="div5-quiz">
                            <div className='div6-quiz '>
                                <h1 className='h1-div6-quiz'> WYBIERZ QUIZ </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page">
                {/*<CardRow cards={cardsJSON} onCardClick={handleCardClick} />*/}
                <div className="cardRow">
                    <div className="scrollButtons">
                        <button onClick={scrollLeft} className="scrollButton left">
                            &lt;
                        </button>
                        <button onClick={scrollRight} className="scrollButton right">
                            &gt;
                        </button>
                    </div>
                    <div ref={rowRef} className="cardContainer">
                        {cardsJSON.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                onClick={() => handleCardClick(card.title)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
            ) : (

            <QuizDetails quizCategory={selectedQuestions}/>

            )}
            </>
    )
}

export default QuizPage;
