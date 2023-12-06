import React, {useEffect, useState} from "react";
import "./Words.css"
import RotatingCard from "../../components/card/rotatingCard/RotatingCard";
import {WordsJSON} from "../../data/wordsJSON";
import {Languages} from "../../components/card/Languages";
import FlagCard from "../../components/card/flagCard/FlagCard";

const Words = () => {
    const[level, setLevel] = useState('');
    const [languageID, setLanguageID] = useState('');
    const [words, setWords] = useState([]);



    useEffect(() => {
        const wordsFromStorage = JSON.parse(localStorage.getItem('words')) || [];
        setWords(wordsFromStorage);
        console.log(words[0])
    }, []);

    return (
        <div className="words-bg">
             <div className="chooselevel">
               <h1> CHOOSE YOUR LEVEL AND LANGUAGE </h1>
                <button onClick={() => {setLevel('A1')}}>
                <img src={require('../../assets/icons/blueGradient/book.png')}/>
                    A1
                </button>
                 <button onClick={() => {setLevel('A2')}}>
                     <img src={require('../../assets/icons/blueGradient/education.png')}/>
                     A2
                 </button>
                 <button onClick={() => {setLevel('B1')}}>
                     <img src={require('../../assets/icons/blueGradient/notebook.png')}/>
                     B1 </button>
                <button onClick={() => {setLevel('B2')}}>
                    <img src={require('../../assets/icons/blueGradient/pencil-case.png')}/>
                    B2 </button>
                <button onClick={() => {setLevel('C1')}}>
                    <img src={require('../../assets/icons/blueGradient/graduation.png')}/>
                    C1 </button>
                <button onClick={() => {setLevel('C2')}}>
                    <img src={require('../../assets/icons/blueGradient/school.png')}/>
                    C2 </button>
            </div>
                <div className="chooselevel2">

                    {Languages.map((item, index) => {
                        return(
                            <FlagCard key={item.title} title={item.title} image={item.image} index={index} onClick={() => setLanguageID(item.description)}/>
                        )
                    })}
                </div>



            <div className="container-words">
                {words.map((item, index) => {
                    if (item.level === level && item.languageId==languageID) {
                            return <RotatingCard key={index} word={item.word}
                                                 translation={item.translation}/>

                    } else {
                        return null;
                        return <RotatingCard key={index} word={item.word + item.languageId}
                                                 translation={item.translation}/>
                        }
                })}

            </div>


                    {/*<div className="container-words">*/}
                    {/*    {WordsJSON.map((item, index) => {*/}
                    {/*        if (item.level === level) {*/}
                    {/*            return <RotatingCard key={index} word={item.word}  translation={item.translation}/>*/}
                    {/*        } else {*/}
                    {/*            return null;*/}
                    {/*        }*/}
                    {/*    })}*/}
                    {/*</div>*/}


        </div>
    )
}

export default Words;


// const initialWords = [
// Angielski
//     { id: 1, word: 'prolific', translation: 'produktywny', languageId: '1', level: 'C2' },
//     { id: 2, word: 'ubiquitous', translation: 'wszechobecny', languageId: '1', level: 'C2' },
//     { id: 3, word: 'ephemeral', translation: 'efemeryczny', languageId: '1', level: 'C2' },
//     { id: 4, word: 'serendipity', translation: 'szczęśliwy zbieg okoliczności', languageId: '1', level: 'C2' },
//     { id: 5, word: 'equanimity', translation: 'spokój umysłu', languageId: '1', level: 'C2' },
//     { id: 6, word: 'indefatigable', translation: 'niezmordowany', languageId: '1', level: 'C2' },
//     { id: 7, word: 'pulchritudinous', translation: 'piękny', languageId: '1', level: 'C2' },
//     { id: 8, word: 'verisimilitude', translation: 'prawdopodobieństwo', languageId: '1', level: 'C2' },
//     { id: 9, word: 'cogent', translation: 'przekonujący', languageId: '1', level: 'C2' },
//     { id: 10, word: 'capricious', translation: 'kapryśny', languageId: '1', level: 'C2' },
//
//     // Hiszpański
//     { id: 11, word: 'eficiente', translation: 'wydajny', languageId: '2', level: 'C2' },
//     { id: 12, word: 'perspicaz', translation: 'przenikliwy', languageId: '2', level: 'C2' },
//     { id: 13, word: 'efímero', translation: 'efemeryczny', languageId: '2', level: 'C2' },
//     { id: 14, word: 'serendipia', translation: 'szczęśliwy zbieg okoliczności', languageId: '2', level: 'C2' },
//     { id: 15, word: 'equanimidad', translation: 'spokój umysłu', languageId: '2', level: 'C2' },
//     { id: 16, word: 'incansable', translation: 'niezmordowany', languageId: '2', level: 'C2' },
//     { id: 17, word: 'pulcro', translation: 'piękny', languageId: '2', level: 'C2' },
//     { id: 18, word: 'verosimilitud', translation: 'prawdopodobieństwo', languageId: '2', level: 'C2' },
//     { id: 19, word: 'coherente', translation: 'spójny', languageId: '2', level: 'C2' },
//     { id: 20, word: 'caprichoso', translation: 'kapryśny', languageId: '2', level: 'C2' },
//
//     // Francuski
//     { id: 21, word: 'prolifique', translation: 'produktywny', languageId: '3', level: 'C2' },
//     { id: 22, word: 'ubiquitaire', translation: 'wszechobecny', languageId: '3', level: 'C2' },
//     { id: 23, word: 'éphémère', translation: 'efemeryczny', languageId: '3', level: 'C2' },
//     { id: 24, word: 'sérendipité', translation: 'szczęśliwy zbieg okoliczności', languageId: '3', level: 'C2' },
//     { id: 25, word: 'équanimité', translation: 'spokój umysłu', languageId: '3', level: 'C2' },
//     { id: 26, word: 'infatigable', translation: 'niezmordowany', languageId: '3', level: 'C2' },
//     { id: 27, word: 'pulchritudineux', translation: 'piękny', languageId: '3', level: 'C2' },
//     { id: 28, word: 'vraisemblance', translation: 'prawdopodobieństwo', languageId: '3', level: 'C2' },
//     { id: 29, word: 'convaincant', translation: 'przekonujący', languageId: '3', level: 'C2' },
//     { id: 30, word: 'capricieux', translation: 'kapryśny', languageId: '3', level: 'C2' },
//
//     // Włoski
//     { id: 31, word: 'prolifico', translation: 'produktywny', languageId: '4', level: 'C2' },
//     { id: 32, word: 'ubiquitario', translation: 'wszechobecny', languageId: '4', level: 'C2' },
//     { id: 33, word: 'effimero', translation: 'efemeryczny', languageId: '4', level: 'C2' },
//     { id: 34, word: 'serendipità', translation: 'szczęśliwy zbieg okoliczności', languageId: '4', level: 'C2' },
//     { id: 35, word: 'equanimità', translation: 'spokój umysłu', languageId: '4', level: 'C2' },
//     { id: 36, word: 'indefesso', translation: 'niezmordowany', languageId: '4', level: 'C2' },
//     { id: 37, word: 'pulchritudinoso', translation: 'piękny', languageId: '4', level: 'C2' },
//     { id: 38, word: 'verosimiglianza', translation: 'prawdopodobieństwo', languageId: '4', level: 'C2' },
//     { id: 39, word: 'coerente', translation: 'spójny', languageId: '4', level: 'C2' },
//     { id: 40, word: 'capriccioso', translation: 'kapryśny', languageId: '4', level: 'C2' },
//     { id: 42, word: 'proficient', translation: 'biegły', languageId: '1', level: 'C1' },
//     { id: 43, word: 'ubiquity', translation: 'wszechobecność', languageId: '1', level: 'C1' },
//     { id: 44, word: 'transient', translation: 'przelotny', languageId: '1', level: 'C1' },
//     { id: 45, word: 'serene', translation: 'spokojny', languageId: '1', level: 'C1' },
//     { id: 46, word: 'equable', translation: 'równy', languageId: '1', level: 'C1' },
//     { id: 47, word: 'indefatigably', translation: 'niezmordowanie', languageId: '1', level: 'C1' },
//     { id: 48, word: 'pulchritude', translation: 'piękno', languageId: '1', level: 'C1' },
//     { id: 49, word: 'plausibility', translation: 'wiarygodność', languageId: '1', level: 'C1' },
//     { id: 50, word: 'cogency', translation: 'siła przekonywania', languageId: '1', level: 'C1' },
//
//     // Hiszpański
//     { id: 51, word: 'competente', translation: 'kompetentny', languageId: '2', level: 'C1' },
//     { id: 52, word: 'ubiquidad', translation: 'wszechobecność', languageId: '2', level: 'C1' },
//     { id: 53, word: 'transitorio', translation: 'przelotny', languageId: '2', level: 'C1' },
//     { id: 54, word: 'sereno', translation: 'spokojny', languageId: '2', level: 'C1' },
//     { id: 55, word: 'equitativo', translation: 'równy', languageId: '2', level: 'C1' },
//     { id: 56, word: 'incansablemente', translation: 'niezmordowanie', languageId: '2', level: 'C1' },
//     { id: 57, word: 'pulcritud', translation: 'piękno', languageId: '2', level: 'C1' },
//     { id: 58, word: 'plausibilidad', translation: 'wiarygodność', languageId: '2', level: 'C1' },
//     { id: 59, word: 'coherencia', translation: 'spójność', languageId: '2', level: 'C1' },
//
//     // Francuski
//     { id: 60, word: 'compétent', translation: 'kompetentny', languageId: '3', level: 'C1' },
//     { id: 61, word: 'ubiquité', translation: 'wszechobecność', languageId: '3', level: 'C1' },
//     { id: 62, word: 'transitoire', translation: 'przelotny', languageId: '3', level: 'C1' },
//     { id: 63, word: 'serein', translation: 'spokojny', languageId: '3', level: 'C1' },
//     { id: 64, word: 'équitable', translation: 'równy', languageId: '3', level: 'C1' },
//     { id: 65, word: 'inlassablement', translation: 'niezmordowanie', languageId: '3', level: 'C1' },
//     { id: 66, word: 'pulcritude', translation: 'piękno', languageId: '3', level: 'C1' },
//     { id: 67, word: 'plausibilité', translation: 'wiarygodność', languageId: '3', level: 'C1' },
//     { id: 68, word: 'cohérence', translation: 'spójność', languageId: '3', level: 'C1' },
//
//     // Włoski
//     { id: 69, word: 'competente', translation: 'kompetentny', languageId: '4', level: 'C1' },
//     { id: 70, word: 'ubiquità', translation: 'wszechobecność', languageId: '4', level: 'C1' },
//     { id: 71, word: 'transitorio', translation: 'przelotny', languageId: '4', level: 'C1' },
//     { id: 72, word: 'sereno', translation: 'spokojny', languageId: '4', level: 'C1' },
//     { id: 73, word: 'equabile', translation: 'równy', languageId: '4', level: 'C1' },
//     { id: 74, word: 'indefessabile', translation: 'niezmordowanie', languageId: '4', level: 'C1' },
//     { id: 75, word: 'pulcritudine', translation: 'piękno', languageId: '4', level: 'C1' },
//     { id: 76, word: 'plausibilità', translation: 'wiarygodność', languageId: '4', level: 'C1' },
//     { id: 77, word: 'coerenza', translation: 'spójność', languageId: '4', level: 'C1' },
//     { id: 79, word: 'proficient', translation: 'biegły', languageId: '1', level: 'B2' },
//     { id: 80, word: 'ubiquitous', translation: 'wszechobecny', languageId: '1', level: 'B2' },
//     { id: 81, word: 'transient', translation: 'przelotny', languageId: '1', level: 'B2' },
//     { id: 82, word: 'serene', translation: 'spokojny', languageId: '1', level: 'B2' },
//     { id: 83, word: 'equable', translation: 'równy', languageId: '1', level: 'B2' },
//     { id: 84, word: 'indefatigable', translation: 'niezmordowany', languageId: '1', level: 'B2' },
//     { id: 85, word: 'pulchritude', translation: 'piękno', languageId: '1', level: 'B2' },
//     { id: 86, word: 'plausibility', translation: 'wiarygodność', languageId: '1', level: 'B2' },
//     { id: 87, word: 'cogency', translation: 'siła przekonywania', languageId: '1', level: 'B2' },
//
//     // Hiszpański
//     { id: 88, word: 'competente', translation: 'kompetentny', languageId: '2', level: 'B2' },
//     { id: 89, word: 'ubiquidad', translation: 'wszechobecność', languageId: '2', level: 'B2' },
//     { id: 90, word: 'transitorio', translation: 'przelotny', languageId: '2', level: 'B2' },
//     { id: 91, word: 'sereno', translation: 'spokojny', languageId: '2', level: 'B2' },
//     { id: 92, word: 'equitativo', translation: 'równy', languageId: '2', level: 'B2' },
//     { id: 93, word: 'incansablemente', translation: 'niezmordowanie', languageId: '2', level: 'B2' },
//     { id: 94, word: 'pulcritud', translation: 'piękno', languageId: '2', level: 'B2' },
//     { id: 95, word: 'plausibilidad', translation: 'wiarygodność', languageId: '2', level: 'B2' },
//     { id: 96, word: 'coherencia', translation: 'spójność', languageId: '2', level: 'B2' },
//
//     // Francuski
//     { id: 97, word: 'compétent', translation: 'kompetentny', languageId: '3', level: 'B2' },
//     { id: 98, word: 'ubiquité', translation: 'wszechobecność', languageId: '3', level: 'B2' },
//     { id: 99, word: 'transitoire', translation: 'przelotny', languageId: '3', level: 'B2' },
//     { id: 100, word: 'serein', translation: 'spokojny', languageId: '3', level: 'B2' },
//     { id: 101, word: 'équitable', translation: 'równy', languageId: '3', level: 'B2' },
//     { id: 102, word: 'inlassablement', translation: 'niezmordowanie', languageId: '3', level: 'B2' },
//     { id: 103, word: 'pulcritude', translation: 'piękno', languageId: '3', level: 'B2' },
//     { id: 104, word: 'plausibilité', translation: 'wiarygodność', languageId: '3', level: 'B2' },
//     { id: 105, word: 'cohérence', translation: 'spójność', languageId: '3', level: 'B2' },
//
//     // Włoski
//     { id: 106, word: 'competente', translation: 'kompetentny', languageId: '4', level: 'B2' },
//     { id: 107, word: 'ubiquità', translation: 'wszechobecność', languageId: '4', level: 'B2' },
//     { id: 108, word: 'transitorio', translation: 'przelotny', languageId: '4', level: 'B2' },
//     { id: 109, word: 'sereno', translation: 'spokojny', languageId: '4', level: 'B2' },
//     { id: 110, word: 'equabile', translation: 'równy', languageId: '4', level: 'B2' },
//     { id: 111, word: 'indefessabile', translation: 'niezmordowanie', languageId: '4', level: 'B2' },
//     { id: 112, word: 'pulcritudine', translation: 'piękno', languageId: '4', level: 'B2' },
//     { id: 113, word: 'plausibilità', translation: 'wiarygodność', languageId: '4', level: 'B2' },
//     { id: 114, word: 'coerenza', translation: 'spójność', languageId: '4', level: 'B2' },
//     { id: 116, word: 'adept', translation: 'biegły', languageId: '1', level: 'B1' },
//     { id: 117, word: 'omnipresent', translation: 'wszechobecny', languageId: '1', level: 'B1' },
//     { id: 118, word: 'ephemeral', translation: 'przelotny', languageId: '1', level: 'B1' },
//     { id: 119, word: 'calm', translation: 'spokojny', languageId: '1', level: 'B1' },
//     { id: 120, word: 'steady', translation: 'równy', languageId: '1', level: 'B1' },
//     { id: 121, word: 'tireless', translation: 'niezmordowany', languageId: '1', level: 'B1' },
//     { id: 122, word: 'beauty', translation: 'piękno', languageId: '1', level: 'B1' },
//     { id: 123, word: 'plausibility', translation: 'wiarygodność', languageId: '1', level: 'B1' },
//     { id: 124, word: 'coherence', translation: 'spójność', languageId: '1', level: 'B1' },
//
//     // Hiszpański
//     { id: 125, word: 'experto', translation: 'biegły', languageId: '2', level: 'B1' },
//     { id: 126, word: 'omnipresente', translation: 'wszechobecny', languageId: '2', level: 'B1' },
//     { id: 127, word: 'efímero', translation: 'przelotny', languageId: '2', level: 'B1' },
//     { id: 128, word: 'sereno', translation: 'spokojny', languageId: '2', level: 'B1' },
//     { id: 129, word: 'estable', translation: 'równy', languageId: '2', level: 'B1' },
//     { id: 130, word: 'incansable', translation: 'niezmordowany', languageId: '2', level: 'B1' },
//     { id: 131, word: 'belleza', translation: 'piękno', languageId: '2', level: 'B1' },
//     { id: 132, word: 'plausibilidad', translation: 'wiarygodność', languageId: '2', level: 'B1' },
//     { id: 133, word: 'coherencia', translation: 'spójność', languageId: '2', level: 'B1' },
//
//     // Francuski
//     { id: 134, word: 'habile', translation: 'biegły', languageId: '3', level: 'B1' },
//     { id: 135, word: 'omniprésent', translation: 'wszechobecny', languageId: '3', level: 'B1' },
//     { id: 136, word: 'éphémère', translation: 'przelotny', languageId: '3', level: 'B1' },
//     { id: 137, word: 'calme', translation: 'spokojny', languageId: '3', level: 'B1' },
//     { id: 138, word: 'stable', translation: 'równy', languageId: '3', level: 'B1' },
//     { id: 139, word: 'infatigable', translation: 'niezmordowany', languageId: '3', level: 'B1' },
//     { id: 140, word: 'beauté', translation: 'piękno', languageId: '3', level: 'B1' },
//     { id: 141, word: 'plausibilité', translation: 'wiarygodność', languageId: '3', level: 'B1' },
//     { id: 142, word: 'cohérence', translation: 'spójność', languageId: '3', level: 'B1' },
//
//     // Włoski
//     { id: 143, word: 'abile', translation: 'biegły', languageId: '4', level: 'B1' },
//     { id: 144, word: 'onnipresente', translation: 'wszechobecny', languageId: '4', level: 'B1' },
//     { id: 145, word: 'effimero', translation: 'przelotny', languageId: '4', level: 'B1' },
//     { id: 146, word: 'calmo', translation: 'spokojny', languageId: '4', level: 'B1' },
//     { id: 147, word: 'stabile', translation: 'równy', languageId: '4', level: 'B1' },
//     { id: 148, word: 'instancabile', translation: 'niezmordowany', languageId: '4', level: 'B1' },
//     { id: 149, word: 'bellezza', translation: 'piękno', languageId: '4', level: 'B1' },
//     { id: 150, word: 'plausibilità', translation: 'wiarygodność', languageId: '4', level: 'B1' },
//     { id: 151, word: 'coerenza', translation: 'spójność', languageId: '4', level: 'B1' },
//
//     { id: 153, word: 'basic', translation: 'podstawowy', languageId: '1', level: 'A2' },
//     { id: 154, word: 'common', translation: 'powszechny', languageId: '1', level: 'A2' },
//     { id: 155, word: 'temporary', translation: 'tymczasowy', languageId: '1', level: 'A2' },
//     { id: 156, word: 'quiet', translation: 'cichy', languageId: '1', level: 'A2' },
//     { id: 157, word: 'even', translation: 'nawet', languageId: '1', level: 'A2' },
//     { id: 158, word: 'tireless', translation: 'niezmordowany', languageId: '1', level: 'A2' },
//     { id: 159, word: 'beauty', translation: 'piękno', languageId: '1', level: 'A2' },
//     { id: 160, word: 'plausibility', translation: 'wiarygodność', languageId: '1', level: 'A2' },
//     { id: 161, word: 'coherence', translation: 'spójność', languageId: '1', level: 'A2' },
//
//     // Hiszpański
//     { id: 162, word: 'básico', translation: 'podstawowy', languageId: '2', level: 'A2' },
//     { id: 163, word: 'común', translation: 'powszechny', languageId: '2', level: 'A2' },
//     { id: 164, word: 'temporal', translation: 'tymczasowy', languageId: '2', level: 'A2' },
//     { id: 165, word: 'tranquilo', translation: 'cichy', languageId: '2', level: 'A2' },
//     { id: 166, word: 'incluso', translation: 'nawet', languageId: '2', level: 'A2' },
//     { id: 167, word: 'incansable', translation: 'niezmordowany', languageId: '2', level: 'A2' },
//     { id: 168, word: 'belleza', translation: 'piękno', languageId: '2', level: 'A2' },
//     { id: 169, word: 'plausibilidad', translation: 'wiarygodność', languageId: '2', level: 'A2' },
//     { id: 170, word: 'coherencia', translation: 'spójność', languageId: '2', level: 'A2' },
//
//     // Francuski
//     { id: 171, word: 'basique', translation: 'podstawowy', languageId: '3', level: 'A2' },
//     { id: 172, word: 'commun', translation: 'powszechny', languageId: '3', level: 'A2' },
//     { id: 173, word: 'temporaire', translation: 'tymczasowy', languageId: '3', level: 'A2' },
//     { id: 174, word: 'calme', translation: 'cichy', languageId: '3', level: 'A2' },
//     { id: 175, word: 'même', translation: 'nawet', languageId: '3', level: 'A2' },
//     { id: 176, word: 'infatigable', translation: 'niezmordowany', languageId: '3', level: 'A2' },
//     { id: 177, word: 'beauté', translation: 'piękno', languageId: '3', level: 'A2' },
//     { id: 178, word: 'plausibilité', translation: 'wiarygodność', languageId: '3', level: 'A2' },
//     { id: 179, word: 'cohérence', translation: 'spójność', languageId: '3', level: 'A2' },
//
//     // Włoski
//     { id: 180, word: 'basico', translation: 'podstawowy', languageId: '4', level: 'A2' },
//     { id: 181, word: 'comune', translation: 'powszechny', languageId: '4', level: 'A2' },
//     { id: 182, word: 'temporaneo', translation: 'tymczasowy', languageId: '4', level: 'A2' },
//     { id: 183, word: 'calmo', translation: 'cichy', languageId: '4', level: 'A2' },
//     { id: 184, word: 'anche', translation: 'nawet', languageId: '4', level: 'A2' },
//     { id: 185, word: 'instancabile', translation: 'niezmordowany', languageId: '4', level: 'A2' },
//     { id: 186, word: 'bellezza', translation: 'piękno', languageId: '4', level: 'A2' },
//     { id: 187, word: 'plausibilità', translation: 'wiarygodność', languageId: '4', level: 'A2' },
//     { id: 188, word: 'coerenza', translation: 'spójność', languageId: '4', level: 'A2' },
//     { id: 190, word: 'hello', translation: 'cześć', languageId: '1', level: 'A1' },
//     { id: 191, word: 'goodbye', translation: 'do widzenia', languageId: '1', level: 'A1' },
//     { id: 192, word: 'yes', translation: 'tak', languageId: '1', level: 'A1' },
//     { id: 193, word: 'no', translation: 'nie', languageId: '1', level: 'A1' },
//     { id: 194, word: 'please', translation: 'proszę', languageId: '1', level: 'A1' },
//     { id: 195, word: 'thank you', translation: 'dziękuję', languageId: '1', level: 'A1' },
//     { id: 196, word: 'sorry', translation: 'przepraszam', languageId: '1', level: 'A1' },
//     { id: 197, word: 'excuse me', translation: 'przepraszam', languageId: '1', level: 'A1' },
//     { id: 198, word: 'help', translation: 'pomoc', languageId: '1', level: 'A1' },
//
//     // Hiszpański
//     { id: 199, word: 'hola', translation: 'cześć', languageId: '2', level: 'A1' },
//     { id: 200, word: 'adiós', translation: 'do widzenia', languageId: '2', level: 'A1' },
//     { id: 201, word: 'sí', translation: 'tak', languageId: '2', level: 'A1' },
//     { id: 202, word: 'no', translation: 'nie', languageId: '2', level: 'A1' },
//     { id: 203, word: 'por favor', translation: 'proszę', languageId: '2', level: 'A1' },
//     { id: 204, word: 'gracias', translation: 'dziękuję', languageId: '2', level: 'A1' },
//     { id: 205, word: 'lo siento', translation: 'przepraszam', languageId: '2', level: 'A1' },
//     { id: 206, word: 'permiso', translation: 'przepraszam', languageId: '2', level: 'A1' },
//     { id: 207, word: 'ayuda', translation: 'pomoc', languageId: '2', level: 'A1' },
//
//     // Francuski
//     { id: 208, word: 'bonjour', translation: 'cześć', languageId: '3', level: 'A1' },
//     { id: 209, word: 'au revoir', translation: 'do widzenia', languageId: '3', level: 'A1' },
//     { id: 210, word: 'oui', translation: 'tak', languageId: '3', level: 'A1' },
//     { id: 211, word: 'non', translation: 'nie', languageId: '3', level: 'A1' },
//     { id: 212, word: 's’il vous plaît', translation: 'proszę', languageId: '3', level: 'A1' },
//     { id: 213, word: 'merci', translation: 'dziękuję', languageId: '3', level: 'A1' },
//     { id: 214, word: 'pardon', translation: 'przepraszam', languageId: '3', level: 'A1' },
//     { id: 215, word: 'excusez-moi', translation: 'przepraszam', languageId: '3', level: 'A1' },
//     { id: 216, word: 'aide', translation: 'pomoc', languageId: '3', level: 'A1' },
//
//     // Włoski
//     { id: 217, word: 'ciao', translation: 'cześć', languageId: '4', level: 'A1' },
//     { id: 218, word: 'arrivederci', translation: 'do widzenia', languageId: '4', level: 'A1' },
//     { id: 219, word: 'sì', translation: 'tak', languageId: '4', level: 'A1' },
//     { id: 220, word: 'no', translation: 'nie', languageId: '4', level: 'A1' },
//     { id: 221, word: 'per favore', translation: 'proszę', languageId: '4', level: 'A1' },
//     { id: 222, word: 'grazie', translation: 'dziękuję', languageId: '4', level: 'A1' },
//     { id: 223, word: 'mi dispiace', translation: 'przepraszam', languageId: '4', level: 'A1' },
//     { id: 224, word: 'scusate', translation: 'przepraszam', languageId: '4', level: 'A1' },
//     { id: 225, word: 'aiuto', translation: 'pomoc', languageId: '4', level: 'A1' },
// ];
