import React, {useEffect, useState} from 'react';
import './Game.css';
import { wordsData } from './wordPairs';
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode"; // Zaimportowanie danych słów

const Game = () => {

    const navigate = useNavigate();
    const [words, setWords] = useState(wordsData);
    const [words2, setWords2] = useState(wordsData);
    const [polishWords, setPolishWords] = useState([]);
    const [selectedWordEnglish, setSelectedWordEnglish] = useState(null);
    const [selectedWordPolish, setSelectedWordPolish] = useState(null);
    const [score, setScore] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [usedWords, setUsedWords] = useState([]);
    const [remainingWords, setRemainingWords] = useState(words);
    const [user, setUser] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        // Pomieszanie słów w tablicy przed ich użyciem
        const shuffledWords = shuffleArray(wordsData);
        setWords(shuffledWords);
        const shuffledWords2 = shuffleArray(wordsData);
        setWords2(shuffledWords2);

    }, []);

    const shuffleArray = (array) => {
        const shuffled = array.slice(); // Stworzenie kopii tablicy
        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }
        return shuffled;
    };

    const handleEnglishWordClick = (word) => {
        if (!selectedWordEnglish && !usedWords.includes(word.englishWord)) {
            setSelectedWordEnglish(word);
        } else {
            alert("Wybierz teraz slowo po polsku");
        }
    };

    const handlePolishWordClick = (word) => {
        if (!selectedWordPolish && !usedWords.includes(word.polishTranslation)) {
            setSelectedWordPolish(word);
        } else {
            alert("Wybierz teraz slowo po angielsku");
        }
    };


    const checkIfWordsAreCorrect = () => {
        if(selectedWordEnglish && selectedWordPolish) {
            const indexEnglish = words.findIndex(word => word.englishWord === selectedWordEnglish.englishWord);
            const indexPolish = words.findIndex(word => word.polishTranslation === selectedWordPolish.polishTranslation);

            if(indexEnglish === indexPolish && indexEnglish !== -1) {
                console.log("Correct match!");
                setScore(score + 1);
                setMatchedPairs([...matchedPairs, selectedWordEnglish.englishWord, selectedWordPolish.polishTranslation]);
                setUsedWords([...usedWords, selectedWordEnglish.englishWord, selectedWordPolish.polishTranslation]);

                const filteredWords = remainingWords.filter(word =>
                    word.englishWord !== selectedWordEnglish.englishWord &&
                    word.polishTranslation !== selectedWordPolish.polishTranslation
                );
                setRemainingWords(filteredWords);

                setSelectedWordEnglish(null);
                setSelectedWordPolish(null);
            } else {
                console.log("Incorrect match!");
                setScore(score - 1);
                setSelectedWordEnglish(null);
                setSelectedWordPolish(null);
            }
        } else {
            console.log("Please select both English and Polish words.");
        }
    };

    const checkIfAllPairsMatched = () => {
        return matchedPairs.length === wordsData.length * 2;
    };

    const goHome = () => {
        navigate("/");
    };

    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            setUser(decodedToken);
            setUserEmail(decodedToken.sub);
        }
    }, [] );

    const saveExResultToLocalStorage = () => {
        const exResultData = {
            what: "Exercises",
            exType: "Game",
            result: score
        };

        const storedExResults = JSON.parse(localStorage.getItem("userExResults")) || {};
        const updatedExResults = {
            ...storedExResults,
            [userEmail]: [...(storedExResults[userEmail] || []), exResultData]
        };

        localStorage.setItem("userExResults", JSON.stringify(updatedExResults));
        setIsSaved(true);
    };

    return (
        <div className="game-container">

            {!checkIfAllPairsMatched() && (
            <div>
            <h1>Match English Words with their Polish Translations</h1>
            <div className="score">Score: {score}</div>
            <div className="word-grid">
                {remainingWords.map((word, index) => (
                    <div
                        key={index}
                        className={`word-card ${selectedWordEnglish === word ? 'selected' : ''} ${matchedPairs.includes(word.englishWord) ? 'matched' : ''}`}
                        onClick={() => handleEnglishWordClick(word)}
                    >
                        <div className="english-word">{word.englishWord}</div>
                    </div>
                ))}
            </div>

            <div className="word-grid">
                {remainingWords.map((word, index) => (
                    <div
                        key={index}
                        className={`word-card ${selectedWordPolish === word ? 'selected-pl' : ''} ${matchedPairs.includes(word.polishTranslation) ? 'matched' : ''}`}                        onClick={() => handlePolishWordClick(word)}
                    >
                        <div className="polish-translation">{word.polishTranslation}</div>
                    </div>
                ))}
            </div>
            <div>
                <button className="button-signup" onClick={() => checkIfWordsAreCorrect(selectedWordEnglish, selectedWordPolish)}> CHECK </button>
            </div>
            </div>
                )}

            {checkIfAllPairsMatched() && (
                <div className="game-box">
                    <div className="result">
                        <h2>Congratulations! You have matched all pairs!</h2>
                        <p>Your final score is: {score}</p>
                        <div className="game-box-buttons">
                            {isSaved === false ? (
                                    <button style={{width: "auto", margin: "8px"}}  className="button-signup" onClick={saveExResultToLocalStorage}> SAVE </button>) : <></>}
                            <button style={{width: "auto", margin: "8px"}} className="button-signup" onClick={() => window.location.reload()}> TRY AGAIN </button>
                            <button style={{width: "auto", margin: "8px"}}  className="button-signup" onClick={goHome}> HOME </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
