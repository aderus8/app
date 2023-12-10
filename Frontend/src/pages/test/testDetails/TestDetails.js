import React, {useEffect, useState} from "react";
import "./TestDetails.css";
import Question from "../../quiz/Question";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";
import axios from "axios";

const TestDetails = ({questions, level}) => {


    const navigate = useNavigate();
    const[questionIndex, setQuestionIndex] = useState(0);
    const[result, setResult] = useState(0);
    const[showResult, setShowResult] = useState(false);
    const[isOptionSelected, setIsOptionSelected] = useState(false);
    const [user, setUser] = useState([]);
    const [testLevel, setTestLevel] = useState("0");
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            console.log("decodedToken: " + decodedToken);
            setUser(decodedToken);
            setUserEmail(decodedToken.sub);
            console.log("user: " + user);
            console.log("user email: " + userEmail);
            setTestLevel(level)
        }
    }, [] );

    //nie dziala to. juz dziala
    const saveTestResultToLocalStorage = () => {
        const testResultData = {
            testType: "Test",
            result: result,
            level: testLevel
        };

        const storedTestResults = JSON.parse(localStorage.getItem("userTestResults")) || {};
        const updatedTestResults = {
            ...storedTestResults,
            [userEmail]: [...(storedTestResults[userEmail] || []), testResultData]
        };

        localStorage.setItem("userTestResults", JSON.stringify(updatedTestResults));
        setIsSaved(true);
    };

    const handleNextQuestion = () => {
        if(questionIndex < questions.length-1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowResult(true);
        }
    }

    const handlePrevQuestion = () => {
        alert("You can't go back to the previous question")
    }

    const validateAnswer = (yourAnswer, correctAnswer) => {
        if(yourAnswer === correctAnswer) {
            setResult(result + 1);
        }
    }

    const resetQuiz = () => {
        setQuestionIndex(0);
        setResult(0);
        setShowResult(false);
    };

    const goHome = () => {
        navigate("/");
        setQuestionIndex(0);
        setResult(0);
        setShowResult(false);
    };


    return (
        <div>
            <div className="test-box">
                {questionIndex === questions.length-1 ? (
                    <div className="test-result-page">
                        <h3> Test level: {testLevel}</h3>
                        <h3> Your result: {result} </h3>
                        <div className="test-buttons">
                            {isSaved === false ? (
                                <button style={{margin: "10px"}} className="button-signup" onClick={saveTestResultToLocalStorage}> SAVE</button>
                            ) : <></>}
                            <button style={{margin: "10px"}} className="button-signup" onClick={resetQuiz}> TRY AGAIN</button>
                            <button style={{margin: "10px"}} className="button-signup" onClick={goHome}> HOME</button>
                        </div>
               </div>


                ) : (
                    <Question
                        question={questions[questionIndex]}
                        onAnswer={validateAnswer}
                        onNext={handleNextQuestion}
                        onPrev={handlePrevQuestion}
                        questionNumber={questionIndex + 1}
                        totalQuestions={questions.length}
                        result={""}
                    />
                )}
            </div>
        </div>
    );
};



export default TestDetails;
