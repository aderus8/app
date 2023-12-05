import React, {useState} from "react";
import "./Grammar.css";
import CardRow from "../../components/row/cardRow/CardRow";
import {grammarJSON} from "../../components/row/CardsJSON";
import CardRowGrammar from "../../components/row/cardRowGrammar/CardRowGrammar";
import GrammarCard from "../../components/card/grammarCard/GrammarCard";
import YoutubeVideo from "../../components/YouTubeVideo";


const Grammar = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

return(
    <div className="bg-gradient-1">
        <div className='div1-quiz' style={{borderRadius: "15px"}}>
            <div className='div2-grammar' style={{borderRadius: "15px", backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}  ></div>
            <div>
                <div className='div3-quiz' style={{borderRadius: "15px"}}></div>
                <div className="div4-quiz">
                    <div className="div5-quiz">
                        <div className='div6-quiz '>
                            <h1 className='h1-div6-quiz'>  </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {expandedIndex == null && (
        <div className="page-grammar">
            <div className="cardContainer-grammar">
                {grammarJSON.map((card, index) => (
                    <GrammarCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={expandedIndex}
                        onClick={() => setExpandedIndex(index)}
                    />
                ))}
            </div>
        </div>     )}

        {expandedIndex !== null && (
            <div className="page-grammar-2">
            <div className="expanded-content">
              <div className="titleandbutton">
                  <button className="button-signup" onClick={() => setExpandedIndex(null)}> BACK </button>
                  <h2>  {grammarJSON[expandedIndex].title}</h2>

              </div>
         <YoutubeVideo videoID={grammarJSON[expandedIndex].videoID}/>
            </div>
            </div>
        )}



    </div>
)}
export default Grammar;
