import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./Pronunciation.css";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";

const Pronunciation = () => {

    const navigate = useNavigate();
    const [wordList, setWordList] = useState([
        { id: 1, word: 'start' },
        { id: 2, word: 'auto' },
        { id: 3, word: 'milk' },
        { id: 4, word: 'prove' }
    ]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [points, setPoints] = useState(0); // Liczba punktów
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [startExercise, setStartExercise] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [listenNow, setListenNow] = useState(false);
    const [isStartButton, setIsStartButton] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);



    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            setUserEmail(decodedToken.sub);
        }
    }, [] );

    const saveProResultToLocalStorage = () => {
        const proResultData = {
            what: "Exercises",
            exType: "Pronunciation",
            result: points
        };

        const storedProResults = JSON.parse(localStorage.getItem("userExResults")) || {};
        const updatedProResults = {
            ...storedProResults,
            [userEmail]: [...(storedProResults[userEmail] || []), proResultData]
        };

        localStorage.setItem("userExResults", JSON.stringify(updatedProResults));
        setIsSaved(true);
    };



    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true });
        setListenNow(true);
        setIsStartButton(false);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        checkPronunciation();
        resetTranscript();
        setListenNow(false);
    };

    // Funkcja sprawdzająca poprawność wymowy
    const checkPronunciation = () => {
        const wordToPronounce = wordList[currentWordIndex].word.toLowerCase().trim();
        let spokenWordTrimmed = transcript.toLowerCase().trim();

        // Usunięcie kropki na końcu wypowiedzi, jeśli istnieje
        if (spokenWordTrimmed.endsWith('.')) {
            spokenWordTrimmed = spokenWordTrimmed.slice(0, -1); //
        }

        if (wordToPronounce === spokenWordTrimmed) {
            setIsCorrect(true);
            setPoints((prevPoints) => prevPoints + 1);
        } else {
            setIsCorrect(false);
        }
    };

    // Przejdź do następnego słowa
    const nextWord = () => {
        setIsCorrect(null);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1 < wordList.length ? prevIndex + 1 : 0));
        if(currentWordIndex+1===wordList.length){
            setShowResult(true);
        }
        setIsStartButton(true);
    };

    const goHome = () => {
        navigate("/userhome");
    };

    return (
        <div  className="pro-bg">
            <div style={{width: "100%", height: "90px"}}> </div>
            {!showResult && (
                <div>
                    {!startExercise && (
                        <div style={{width: "100%", padding: "50px"}}>
                        <h1 style={{color: "white", marginTop: "100px"}}>Pronunciation exercise. Pronounce the word you see.</h1>
                            <button className="button-signup" onClick={() => setStartExercise(true)}>START </button> </div>
                        )}

                    {startExercise && (
                    <div className="pro-exercise">
                        <h1 style={{marginBottom: "40px"}}>Pronunciation Exercise</h1>
                        {wordList.length === 0 && (
                            <p>No words in the list. Add words to practice pronunciation.</p>
                        )}
                            <div className="pro-w">
                                <h1>Pronounce the word: {wordList[currentWordIndex].word}</h1>
                                {listenNow ===true  && (
                                    <div>
                                        <h1> Recording... </h1>
                                    </div>
                                )}
                                <h1>{transcript.toLowerCase().trim()}</h1>
                                {isCorrect !== null && (
                                    <p>{isCorrect ? 'Correct pronunciation!' : 'Incorrect pronunciation!'}</p>
                                )}
                                <div className="pro-buttons">
                                    {isStartButton===true ? (
                                        <button style={{width: "auto"}} className="button-signup"  onClick={startListening}>START</button>

                                    ) : (
                                <button style={{width: "auto"}}  className="button-signup"  onClick={stopListening}>STOP</button> )}
                                <button style={{width: "auto"}}  className="button-signup"  onClick={nextWord}>NEXT WORD</button>
                                </div>
                                <h1>Points: {points}</h1>


                            </div>
                    </div>
                    )}


                </div>
                )}

            {showResult && (
                <div className="pro-exercise">
                    <h1 style={{marginBottom: "40px", marginTop: "60px"}}>Points: {points}</h1>
                    <div className="pro-buttons">
                        {isSaved === false ? (
                                <button style={{width: "auto"}}  className="button-signup" onClick={saveProResultToLocalStorage} >
                            SAVE
                        </button>) : <></>}
                        <button className="button-signup" onClick={() => window.location.reload()}> TRY AGAIN </button>
                        <button style={{width: "auto"}} className="button-signup" onClick={() => window.location.reload()}>
                            GO HOME
                        </button>
                    </div>

                </div>
            )}
       </div>
    );
};

export default Pronunciation;
