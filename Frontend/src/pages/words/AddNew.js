import React, {useEffect, useState} from "react";
import "./AddNew.css";
import {Languages} from "../../components/card/Languages";

const AddNew = () => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [level, setLevel] = useState('A1');
    const [words, setWords] = useState([]);
    const [languageID, setLanguageID] = useState('1');
    const [isAdded, setIsAdded] = useState(false);



    useEffect(() => {

        const wordsFromStorage = JSON.parse(localStorage.getItem('words')) || [];
        setWords(wordsFromStorage);
        console.log("WFS: " + wordsFromStorage);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!word || !translation || !level || !languageID) {
            alert('Please fill in all fields.');
            return;
        }

        const newWord = {
            id: words.length + 1,
            word,
            translation,
            languageId: languageID,
            level,
        };

        const updatedWords = [...words, newWord];
        setWords(updatedWords);
        localStorage.setItem('words', JSON.stringify(updatedWords));


        setWord('');
        setTranslation('');
        setLevel('A1');
        setLanguageID('1'); // Domyślnie ustawiany na angielski czyli 1
        setIsAdded(false);
    };


    const handleDelete = (id) => {
        const updatedWords = words.filter((item) => item.id !== id);
        setWords(updatedWords);
        localStorage.setItem('words', JSON.stringify(updatedWords));
    };





    return(
        <div className="addnew-page">

            {isAdded===true && (
            <div className="addnew-form-place">
                    <form onSubmit={handleSubmit}>
                       <h1> ADD NEW WORD</h1>
                        <input
                            className="addnew-field"
                            type="text"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            placeholder="Word"
                        />
                        <input
                            className="addnew-field"
                            type="text"
                            value={translation}
                            onChange={(e) => setTranslation(e.target.value)}
                            placeholder="Translation"
                        />
                        <select placeholder="level"
                                className="addnew-field"

                                value={level} onChange={(e) => setLevel(e.target.value)}>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                        </select>
                        <select
                            className="addnew-field"
                            value={languageID} onChange={(e) => setLanguageID(e.target.value)}>
                            <option value="1">English</option>
                            <option value="2">Spanish</option>
                            <option value="3">French</option>
                            <option value="4">Italian</option>
                        </select>
                        <button style={{width: "50%", marginLeft: "0", marginTop: "40px"}} className="button-signup" type="submit">ADD WORD</button>
                    </form>
            </div>
            )}

            {isAdded===false && (

                <div className="addnew-list">
                <button style={{marginLeft: "42vw", marginBottom: "20px", width: "220px"}} className="button-signup" onClick={() => setIsAdded(true)}> ADD NEW WORD </button>
                <div className="add-word-list-container">
                    <h1>WORD LIST</h1>
                    <div className="add-word-list">
                        <div className="add-word-item-2" >
                            <div className="add-word-column-2">
                                <p> id </p>
                            </div>
                            <div className="add-word-column-2">
                                <p> language </p>
                            </div>
                            <div className="add-word-column-2">
                                <p> word </p>
                            </div>
                            <div className="add-word-column-2">
                                <p> translation </p>
                            </div>
                                <div className="add-word-column-2">
                                    <p> level </p>
                                </div>
                                <div className="add-word-column-2">
                                    <p> delete </p>
                                </div>
                        </div>
                        {words.map((item) => (
                            <div className="add-word-item" key={item.id}>
                                <div className="add-word-column">
                                    <p>{item.id}</p>
                                </div>

                                <div className="add-word-column">
                                    {item.languageId-1===0 && (
                                        <div className="image-addword" style={{backgroundImage: `url(${Languages[0].image})`}}/>
                                        )}
                                    {item.languageId-1===1 && (
                                        <div className="image-addword" style={{backgroundImage: `url(${Languages[1].image})`}}/>
                                    )}
                                    {item.languageId-1===2 && (
                                        <div className="image-addword" style={{backgroundImage: `url(${Languages[2].image})`}}/>
                                    )}
                                    {item.languageId-1===3 && (
                                        <div className="image-addword" style={{backgroundImage: `url(${Languages[3].image})`}}/>
                                    )}
                                </div>
                                <div className="add-word-column">
                                <p>{item.word}</p>
                                </div>
                                <div className="add-word-column">
                                    <p> {item.translation}</p></div>
                                <div className="add-word-column">
                                    <p> {item.level}</p></div>
                                <div className="add-word-column">
                                    <button onClick={() => handleDelete(item.id)}>DELETE</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                )}
            </div>
    )
}

export default AddNew;
