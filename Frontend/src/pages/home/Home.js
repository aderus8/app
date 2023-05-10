import React from "react";
import "./Home.css";
import {Languages} from "../../components/card/Languages";
import FlagCard from "../../components/card/flagCard/FlagCard";
import PhotoShadow from "../../components/photos/photoShadow/PhotoShadow";

const Home = () => {

    return (
        <div className="page1">
            {/*<CarouselFlag/>*/}
            {/*<CarouselMain/>*/}
                <PhotoShadow image={"https://st2.depositphotos.com/1411161/8600/i/950/depositphotos_86009122-stock-photo-languages-signpost.jpg"}
                             mainText={"Ucz się nowego języka"}
                             buttonText={"Zaloz konto"}/>
                {/*<CarouselMain/>*/}

            <div className="h1">
                <h1> Wybierz język </h1>
            </div>

            <div className="all-box">

                {Languages.map((item, index) => {
                    return(
                        <FlagCard title={item.title} image={item.image} index={index}/>
                    )
                })}
            </div>

            {/*<div className="container-words">*/}
            {/*    {WordsJSON.map((item, index) => {*/}
            {/*            return <RotatingCard key={index} word={item.word}  translation={item.translation}/>*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    )
}

export default Home;
