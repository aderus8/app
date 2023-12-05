import React, {useEffect, useState} from "react";
import "./Reading.css";
import { textB1, questionsB1 } from "./readingQuestionsJSON";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";

const Reading = () => {

    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const totalQuestions = questionsB1.reduce((acc, set) => acc + set.questions.length, 0);
    const [user, setUser] = useState([]);
    const [testLevel, setTestLevel] = useState("0");
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);


    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            setUser(decodedToken);
            setUserEmail(decodedToken.sub);
        }
    }, [] );

    //nie dziala to. juz dziala
    const saveExResultToLocalStorage = () => {
        const exResultData = {
            what: "Exercises",
            exType: "Reading",
            result: displayScore
        };

        const storedExResults = JSON.parse(localStorage.getItem("userExResults")) || {};
        const updatedExResults = {
            ...storedExResults,
            [userEmail]: [...(storedExResults[userEmail] || []), exResultData]
        };

        localStorage.setItem("userExResults", JSON.stringify(updatedExResults));
        setIsSaved(true);
    };

    const handleAnswerSelection = (questionId, selectedOption) => {
        const updatedAnswers = [...selectedAnswers];
        const existingAnswerIndex = updatedAnswers.findIndex((answer) => answer.questionId === questionId);

        if (existingAnswerIndex !== -1) {
            updatedAnswers[existingAnswerIndex].selectedOption = selectedOption;
        } else {
            updatedAnswers.push({ questionId, selectedOption });
        }

        setSelectedAnswers(updatedAnswers);
    };

    const calculateScore = () => {
        if (selectedAnswers.length === totalQuestions) {
            let score = 0;
            selectedAnswers.forEach((answer) => {
                questionsB1.forEach((set) => {
                    set.questions.forEach((question) => {
                        if (question.id === answer.questionId && question.correctAnswer === answer.selectedOption) {
                            score++;
                        }
                    });
                });
            });
            return score;
        }
        return null;
    };

    const displayScore = calculateScore();

    const showResult = () => {
        if (selectedAnswers.length !== totalQuestions) {
            alert("Please answer all the questions before viewing the score.");
        } else {
            setShowScore(true);
            scrollToTop();
        }
    };

    const goHome = () => {
        navigate("/");
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Dodaje płynne przewijanie
        });
    };


    return (
        <div className="reading-bg">
            <div className="reading-shadow">

                {!showScore ? (
                    <div className="reading-text">
                    {/* Wyświetlenie tekstu */}
                    {textB1.map((item, index) => (
                        <p key={index}>{item.text}</p>
                    ))}
                </div> ) : ( <></> )}

                <div className="reading-questions">
                    {showScore ? (
                        <div className="reading-box">
                         <div className="reading-results">
                            <div>
                            <h2>Your Score: {displayScore}/{totalQuestions}</h2>
                            </div>
                             <div className="reading-buttons">
                            {isSaved === false ? (
                                    <button style={{width: "auto"}} className="button-signup" onClick={saveExResultToLocalStorage}>
                                SAVE
                            </button>   ) : <></>}

                            <button style={{width: "auto"}} className="button-signup" onClick={() => window.location.reload()}>
                                TRY AGAIN
                            </button>
                            <button style={{width: "auto"}}  className="button-signup" onClick={goHome}>
                                HOME
                            </button>
                             </div>
                         </div>
                        </div>
                    ) : (
                        // Wyświetlanie pytań
                        questionsB1.map((questionSet, setIndex) => (
                            <div key={setIndex} className="question-set">
                                {questionSet.questions.map((question) => (
                                    <div key={question.id} className="reading-question1">
                                        <p className="question-reading">Question: {question.question}</p>
                                        <ul>
                                            {/* Wyświetlenie opcji odpowiedzi */}
                                            {question.options.map((option, optionIndex) => (
                                                <li key={optionIndex} style={{ listStyle: "none", padding: "3px" }}>
                                                    <label>
                                                        <input
                                                            className="question-answer"
                                                            type="radio"
                                                            name={`question_${question.id}`}
                                                            value={option}
                                                            onChange={() =>
                                                                handleAnswerSelection(question.id, option)
                                                            }
                                                            checked={
                                                                selectedAnswers.find(
                                                                    (answer) => answer.questionId === question.id
                                                                )?.selectedOption === option
                                                            }
                                                        />
                                                        {option}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <div className="div-button">
                                    <button style={{width: "auto", opacity: "1"}} className="button-signup" onClick={showResult}>SHOW RESULT</button>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
};

export default Reading;
