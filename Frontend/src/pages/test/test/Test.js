import React, {useState} from "react";
import "./Test.css"
import TestDetails from "../testDetails/TestDetails";
import {questionsC1} from "../testJSON/questionsC1";
import {questionsA1} from "../testJSON/questionsA1";
import {questionsA2} from "../testJSON/questionsA2";
import {questionsB1} from "../testJSON/questionsB1";
import {questionsB2} from "../testJSON/questionsB2";
import {questionsC2} from "../testJSON/questionsC2";

const Test = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [testLevel, setTestLevel] = useState(null);

    const handleCardClick = (index, questions, level) => {
        setExpandedIndex(index);
        setQuestions(questions);
        setTestLevel(level);
    }
    return(

        <div className="bg-gradient-1">

            {expandedIndex == null && (
                <div className='div1-quiz' style={{borderRadius: "15px"}}>
                 <div className='div2-quiz-test' style={{borderRadius: "15px",top: "-30vh", height: "130vh", backgroundImage: "url('https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}  ></div>
                     <div>
                         <div className='div3-quiz' style={{borderRadius: "15px"}}></div>
                            <div className="div4-quiz">
                               <div className="div5-quiz">
                                   <div className='div6-quiz '>

                                {/*{expandedIndex == null && (*/}

                                    <h1 className='h1-div6-quiz'> WYBIERZ POZIOM </h1>
                                {/*)}*/}
                                {/*{expandedIndex !== null && (*/}
                                {/*    <div>*/}
                                {/*        <button className="button-signup" onClick={() => setExpandedIndex(null)}> BACK </button>*/}
                                {/*        <h1> {expandedIndex}</h1>*/}
                                {/*        <TestDetails questions={questionsC1}/>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                     </div>
                              </div>
                         </div>
                    </div>


            </div>
                )}
            <div className="page-cards">
                <div className="test-card"  onClick={()=>handleCardClick(1, questionsA1, "A1")}>
                    <div className="cardsImg1" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"A1"}</div>
                    </div>
                </div>

                <div className="test-card"  onClick={()=>handleCardClick(2, questionsA2, "A2")}>
                    <div className="cardsImg2" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"A2"}</div>
                    </div>
                </div>

                <div className="test-card"  onClick={()=>handleCardClick(3, questionsB1, "B1")}>
                    <div className="cardsImg3" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"B1"}</div>
                    </div>
                </div>

                <div className="test-card"  onClick={()=>handleCardClick(4, questionsB2, "B2")}>
                    <div className="cardsImg4" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"B2"}</div>
                    </div>
                </div>

                <div className="test-card"  onClick={()=>handleCardClick(5, questionsC1, "C1")}>
                    <div className="cardsImg5" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"C1"}</div>
                    </div>
                </div>

                <div className="test-card"  onClick={()=>handleCardClick(6, questionsC2, "C2")}>
                    <div className="cardsImg6" />
                    <div className="test-cardsOverlay">
                        <div className="cardTitle">{"C2"}</div>
                    </div>
                </div>
            </div>
            )}

            {expandedIndex !== null && (

            <div className='div1-quiz' style={{borderRadius: "15px"}}>
                <div className='div2-quiz-test' style={{borderRadius: "15px",top: "-30vh", height: "130vh", backgroundImage: "url('https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}  ></div>
                <div>
                    <div className="div4-quiz">
                        <div className="div5-quiz">
                            <div className='div6-quiz '>

                                    <div>

                                      <TestDetails questions={questions} level={testLevel}/>
                                        {/*TEGO NIE WIDAĆ A MA BYĆ !!!!!!!!*/}
                                        <button className="button-signup" onClick={() => setExpandedIndex(null)}> BACK </button>
                                        <h1> {expandedIndex}</h1>

                                    </div>

                            </div>
                        </div>
                    </div>
                </div>

                </div>
            )}
        </div>

    )
}

export default Test;
