import React, {useEffect, useState} from 'react';
import './Game.css';
import { wordsData } from './wordPairs';
import {useNavigate} from "react-router-dom";
import AuthService from "../../../auth/AuthService";
import jwt_decode from "jwt-decode";
import {Languages} from "../../../components/card/Languages";
import FlagCard from "../../../components/card/flagCard/FlagCard"; // Zaimportowanie danych słów

const Game = () => {

    const navigate = useNavigate();
    const [words, setWords] = useState(wordsData);
    const [words2, setWords2] = useState(wordsData);
    const [polishWords, setPolishWords] = useState([]);
    const [selectedWordEnglish, setSelectedWordEnglish] = useState(null);
    const [selectedWordSpanish, setSelectedWordSpanish] = useState(null);
    const [selectedWordPolish, setSelectedWordPolish] = useState(null);
    const [selectedWordFrench, setSelectedWordFrench] = useState(null);
    const [selectedWordItalian, setSelectedWordItalian] = useState(null);
    const [score, setScore] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [usedWords, setUsedWords] = useState([]);
    const [remainingWords, setRemainingWords] = useState(words);
    const [user, setUser] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const [languageID, setLanguageID] = useState(0);

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

    const handleSpanishWordClick = (word) => {
        if (!selectedWordSpanish && !usedWords.includes(word.spanishWord)) {
            setSelectedWordSpanish(word);
        } else {
            alert("Wybierz teraz slowo po polsku");
        }
    };

    const handleFrenchWordClick = (word) => {
        if (!selectedWordFrench && !usedWords.includes(word.frenchWord)) {
            setSelectedWordFrench(word);
        } else {
            alert("Wybierz teraz slowo po polsku");
        }
    };

    const handleItalianWordClick = (word) => {
        if (!selectedWordItalian && !usedWords.includes(word.italianWord)) {
            setSelectedWordItalian(word);
        } else {
            alert("Wybierz teraz slowo po polsku");
        }
    };


    const checkIfWordsAreCorrect = () => {
        if(languageID===1) {
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
        } else if (languageID===2){
            if(selectedWordSpanish && selectedWordPolish) {
                const indexSpanish = words.findIndex(word => word.spanishWord === selectedWordSpanish.spanishWord);
                const indexPolish = words.findIndex(word => word.polishTranslation === selectedWordPolish.polishTranslation);

                if(indexSpanish === indexPolish && indexSpanish !== -1) {
                    console.log("Correct match!");
                    setScore(score + 1);
                    setMatchedPairs([...matchedPairs, selectedWordSpanish.spanishWord, selectedWordPolish.polishTranslation]);
                    setUsedWords([...usedWords, selectedWordSpanish.spanishWord, selectedWordPolish.polishTranslation]);

                    const filteredWords = remainingWords.filter(word =>
                        word.spanishWord !== selectedWordSpanish.spanishWord &&
                        word.polishTranslation !== selectedWordPolish.polishTranslation
                    );
                    setRemainingWords(filteredWords);

                    setSelectedWordSpanish(null);
                    setSelectedWordPolish(null);
                } else {
                    console.log("Incorrect match!");
                    setScore(score - 1);
                    setSelectedWordSpanish(null);
                    setSelectedWordPolish(null);
                }
            } else {
                console.log("Please select both Spanish and Polish words.");
            }
        } else if(languageID===3){
            if(selectedWordFrench && selectedWordPolish) {
                const indexFrench = words.findIndex(word => word.frenchWord === selectedWordFrench.frenchWord);
                const indexPolish = words.findIndex(word => word.polishTranslation === selectedWordPolish.polishTranslation);

                if(indexFrench === indexPolish && indexFrench !== -1) {
                    console.log("Correct match!");
                    setScore(score + 1);
                    setMatchedPairs([...matchedPairs, selectedWordFrench.frenchWord, selectedWordPolish.polishTranslation]);
                    setUsedWords([...usedWords, selectedWordFrench.frenchWord, selectedWordPolish.polishTranslation]);

                    const filteredWords = remainingWords.filter(word =>
                        word.frenchWord !== selectedWordFrench.frenchWord &&
                        word.polishTranslation !== selectedWordPolish.polishTranslation
                    );
                    setRemainingWords(filteredWords);
                    setSelectedWordFrench(null);
                    setSelectedWordPolish(null);
                } else {
                    console.log("Incorrect match!");
                    setScore(score - 1);
                    setSelectedWordFrench(null);
                    setSelectedWordPolish(null);
                }
            } else {
                console.log("Please select both French and Polish words.");
            }
        }  else if(languageID===4){
        if(selectedWordItalian && selectedWordPolish) {
            const indexItalian = words.findIndex(word => word.italianWord === selectedWordItalian.italianWord);
            const indexPolish = words.findIndex(word => word.polishTranslation === selectedWordPolish.polishTranslation);

            if(indexItalian === indexPolish && indexItalian !== -1) {
                console.log("Correct match!");
                setScore(score + 1);
                setMatchedPairs([...matchedPairs, selectedWordItalian.italianWord, selectedWordPolish.polishTranslation]);
                setUsedWords([...usedWords, selectedWordItalian.italianWord, selectedWordPolish.polishTranslation]);

                const filteredWords = remainingWords.filter(word =>
                    word.italianWord !== selectedWordItalian.italianWord &&
                    word.polishTranslation !== selectedWordPolish.polishTranslation
                );
                setRemainingWords(filteredWords);
                setSelectedWordItalian(null);
                setSelectedWordPolish(null);
            } else {
                console.log("Incorrect match!");
                setScore(score - 1);
                setSelectedWordItalian(null);
                setSelectedWordPolish(null);
            }
        } else {
            console.log("Please select both French and Polish words.");
        }
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

            {languageID===0 && (
            <div className="all-box-game">
                <h1> CHOOSE LANGUAGE </h1>
                {Languages.map((item, index) => {
                    return(
                        <FlagCard key={item.title} title={item.title} image={item.image} index={index} onClick={() => setLanguageID(item.description)}/>
                    )
                })}
            </div>
            )}

            {!checkIfAllPairsMatched() && (
            <div>

            <h1>Match  Words with their Polish Translations</h1>
            <div className="score">Score: {score}</div>

                {languageID===1 && (
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
                )}

                {languageID===2 && (
                    <div className="word-grid">
                        {remainingWords.map((word, index) => (
                            <div
                                key={index}
                                className={`word-card ${selectedWordSpanish === word ? 'selected' : ''} ${matchedPairs.includes(word.spanishWord) ? 'matched' : ''}`}
                                onClick={() => handleSpanishWordClick(word)}
                            >
                                <div className="english-word">{word.spanishWord}</div>
                            </div>
                        ))}
                    </div>
                )}

                {languageID===3 && (
                    <div className="word-grid">
                        {remainingWords.map((word, index) => (
                            <div
                                key={index}
                                className={`word-card ${selectedWordFrench === word ? 'selected' : ''} ${matchedPairs.includes(word.frenchWord) ? 'matched' : ''}`}
                                onClick={() => handleFrenchWordClick(word)}
                            >
                                <div className="english-word">{word.frenchWord}</div>
                            </div>
                        ))}
                    </div>
                )}

                {languageID===4 && (
                    <div className="word-grid">
                        {remainingWords.map((word, index) => (
                            <div
                                key={index}
                                className={`word-card ${selectedWordItalian === word ? 'selected' : ''} ${matchedPairs.includes(word.italianWord) ? 'matched' : ''}`}
                                onClick={() => handleItalianWordClick(word)}
                            >
                                <div className="english-word">{word.italianWord}</div>
                            </div>
                        ))}
                    </div>
                )}


                {languageID !==0 && (

                    <div className="word-grid">
                {remainingWords.map((word, index) => (
                    <div
                        key={index}
                        className={`word-card ${selectedWordPolish === word ? 'selected-pl' : ''} ${matchedPairs.includes(word.polishTranslation) ? 'matched' : ''}`}                        onClick={() => handlePolishWordClick(word)}
                    >
                        <div className="polish-translation">{word.polishTranslation}</div>
                    </div>
                ))}
            </div> )}

                {!languageID===0 && (
            <div>
                <button className="button-signup" onClick={() => checkIfWordsAreCorrect()}> CHECK </button>
            </div>
                    )}
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
