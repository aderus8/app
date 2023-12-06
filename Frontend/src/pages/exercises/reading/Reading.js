import React, {useEffect, useState} from "react";
import "./Reading.css";
import {
    textB1,
    questionsB1,
    textB1Spanish,
    textB1French,
    textB1Italian,
    questionsB1Spanish,
    questionsB1French,
    questionsB1Italian
} from "./readingQuestionsJSON";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";
import {Languages} from "../../../components/card/Languages";
import FlagCard from "../../../components/card/flagCard/FlagCard";

const Reading = () => {

    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const totalQuestions = questionsB1.reduce((acc, set) => acc + set.questions.length, 0);
    const [user, setUser] = useState([]);
    const [testLevel, setTestLevel] = useState("0");
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const [languageID, setLanguageID] = useState(0);



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
        navigate("/userhome");
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
                <>
                {languageID===0 && (
                    <div className="all-box-reading">
                        <h1> CHOOSE LANGUAGE </h1>
                        {Languages.map((item, index) => {
                            return(
                                <FlagCard key={item.title} title={item.title} image={item.image} index={index} onClick={() => setLanguageID(item.description)}/>
                            )
                        })}
                    </div>
                )}
                </>
                {languageID!==0 && (
                <>
                {!showScore ? (
                    <div>
                    <>
                        {languageID===1 && (
                            <div className="reading-text">
                                {textB1.map((item, index) => ( <p key={index}>{item.text}</p> ))}
                            </div>
                        )}
                    </>
                    <>
                        {languageID===2 && (
                            <div className="reading-text">
                                {textB1Spanish.map((item, index) => ( <p key={index}>{item.text}</p> ))}
                            </div>
                        )}
                    </>
                        <>
                            {languageID===3 && (
                                <div className="reading-text">
                                    {textB1French.map((item, index) => ( <p key={index}>{item.text}</p> ))}
                                </div>
                            )}
                        </>
                        <>
                            {languageID===4 && (
                                <div className="reading-text">
                                    {textB1Italian.map((item, index) => ( <p key={index}>{item.text}</p> ))}
                                </div>
                            )}
                        </>
                    </div>
                ) : ( <></> )} </> )}


                {showScore===true && (
                <div className="reading-questions">
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
                    )}
                </div>
                )}


                {languageID===1 && showScore!==true && (
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
                        </div>
                    ))
                )}
                {languageID===2 && showScore!==true && (
                    questionsB1Spanish.map((questionSet, setIndex) => (
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
                        </div>
                    ))
                )}
                {languageID===3 && showScore!==true && (
                    questionsB1French.map((questionSet, setIndex) => (
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
                        </div>
                    ))
                )}
                {languageID===4 && showScore!==true && (
                    questionsB1Italian.map((questionSet, setIndex) => (
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
                        </div>
                    ))
                )}

                {languageID!==0 && showScore!==true && (
                    <div className="div-button">
                        <button style={{width: "auto", opacity: "1"}} className="button-signup" onClick={showResult}>SHOW RESULT</button>
                    </div>
                    )}

            </div>
        </div>
    );
};

export default Reading;
