import React, {useEffect, useState} from "react";
import "./QuizDetails.css";
// import {questionsJSON} from "../../../data/questionsJSON";
import Question from "../Question";
import {useNavigate} from "react-router-dom";
import { questionsFoodJSON,questionsCultureJSON,questionsHealthJSON,questionsMusicJSON,questionsSportJSON,questionsTechnologyJSON,questionsWorldJSON,questionsLiteratureJSON} from "../../../data/questionsJSON";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";

const QuizDetails = ({quizCategory}) => {
    /* ZMIENIĆ TU DUŻO
    * KOLEJNOŚĆ PYTAŃ I ODPOWIEDZI MA BYĆ LOSOWA
    * INNY KOLOR PO POPRAWNEJ ODPOWIEDZI I NIEPOPRAWNEJ
    * WYGLĄD WSZYSTKIEGO
    * ŻEBY ODPOWIEDZI NIE BYŁY WYPISANE PO KOLEI
    * */
    const [questionsJSON, setQuestionsJSON] = useState([questionsTechnologyJSON]);
    const navigate = useNavigate();
    const[questionIndex, setQuestionIndex] = useState(0);
    const[result, setResult] = useState(0);
    const[showResult, setShowResult] = useState(false);
    const[isOptionSelected, setIsOptionSelected] = useState(false);
    const [user, setUser] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const [category, setCategory] = useState("x");

    useEffect(() => {
        console.log("NAME: " + quizCategory);
        if (quizCategory==="World") {  setQuestionsJSON(questionsWorldJSON)};
        if (quizCategory==="Sport") { setQuestionsJSON(questionsSportJSON)};
        if (quizCategory==="Literature") {setQuestionsJSON(questionsLiteratureJSON)};
        if (quizCategory==="Music") { setQuestionsJSON(questionsMusicJSON)};
        if (quizCategory==="Technology") { setQuestionsJSON(questionsTechnologyJSON)};
        if (quizCategory==="Health") { setQuestionsJSON(questionsHealthJSON)};
        if (quizCategory==="Food") { setQuestionsJSON(questionsFoodJSON)};
    }, [] );



    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            console.log("decodedToken: " + decodedToken);
            setUser(decodedToken);
            setUserEmail(decodedToken.sub);
            console.log("user: " + user);
            console.log("user email: " + userEmail);
            setCategory(quizCategory);
        }
    }, [] );

    const saveQuizResultToLocalStorage = () => {
        const quizResultData = {
            quizType: "Quiz",
            result: result,
            category: quizCategory
        };

        const storedQuizResults = JSON.parse(localStorage.getItem("userQuizResults")) || {};
        const updatedQuizResults = {
            ...storedQuizResults,
            [userEmail]: [...(storedQuizResults[userEmail] || []), quizResultData]
        };

        localStorage.setItem("userQuizResults", JSON.stringify(updatedQuizResults));
        setIsSaved(true);
    };

    const handleNextQuestion = () => {
        if(questionIndex < questionsJSON.length-1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setShowResult(true);
        }
    }



    const handlePrevQuestion = () => {
        if(questionIndex>0) {
            setQuestionIndex(questionIndex - 1);
        }
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
        <div className="quiz-bg">
        <div className="box">
            {questionIndex === questionsJSON.length-1 ? (
                <div className="question-place">
                    {isSaved === false ? (
                        <button style={{margin: "10px"}} className="button-signup" onClick={saveQuizResultToLocalStorage}> SAVE</button>
                    ) : <></>}
                    <h3> Your result: {result} </h3>
                    <button onClick={resetQuiz}> TRY AGAIN</button>
                    <button onClick={goHome}> HOME</button>
                </div>


            ) : (
                <Question
                    question={questionsJSON[questionIndex]}
                    onAnswer={validateAnswer}
                    onNext={handleNextQuestion}
                    onPrev={handlePrevQuestion}
                    questionNumber={questionIndex + 1}
                    totalQuestions={questionsJSON.length}
                    result={"result: " + result}
                />
            )}
        </div>
        </div>
    );
};


    // return (
    //     <div className="container">
    //         <div> QuizDetails </div>



            {/*{questionsJSON.map((item, quizCategory) => {*/}
            {/*    if (quizCategory === questionIndex) {*/}
            {/*        return (*/}
            {/*            <>*/}
            {/*                <div className="question-place">*/}
            {/*                    <h2> {quizCategory + 1}/{questionsJSON.length}. {item.question}</h2>*/}
            {/*                    <h4> result: {result}</h4>*/}
            {/*                    <div className="buttons">*/}
            {/*                        <button onClick={() => {validateAnswer(item.answers[0], item.correct_answer)}}> {item.answers[0]}</button>*/}
            {/*                        <button onClick={() => {validateAnswer(item.answers[1], item.correct_answer)}}> {item.answers[1]}</button>*/}
            {/*                        <button onClick={() => {validateAnswer(item.answers[2], item.correct_answer)}}> {item.answers[2]}</button>*/}
            {/*                        <button onClick={() => {validateAnswer(item.answers[3], item.correct_answer)}}> {item.answers[3]}</button>*/}

            {/*                    </div>*/}
            {/*                    <div className="next-button">*/}
            {/*                        <button onClick={handlePrevQuestion}>PREV</button>*/}
            {/*                        <button onClick={handleNextQuestion}>NEXT</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </>*/}
            {/*        )*/}
            {/*    } else {*/}
            {/*        return null;*/}
            {/*    }*/}
            {/*})}*/}

{/*        </div>*/}
{/*    )*/}
{/*}*/}

export default QuizDetails;
