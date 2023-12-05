import React from "react";
import "./Others.css";
import {TypesOfExercises} from "./TypesOfExercises";
import PhotoShadowHover from "../../components/photos/photoShadowHover/PhotoShadowHover";
import PhotoShadowHoverSmall from "../../components/photos/photoShadowHoverSmall/PhotoShadowHoverSmall";
import Card from "../../components/card/card/Card";
import GrammarCard from "../../components/card/grammarCard/GrammarCard";
import {redirect, useNavigate} from "react-router-dom";

const Others = () => {
    const navigate = useNavigate();

    const goToCard = (path) => {
        navigate(path);
    }

    return (
        <div className="background-others">
            <div className="all-page-photos-others">

                {TypesOfExercises.map((item, index) => {
                    return (
                        <GrammarCard image={item.image} title={item.title}  onClick={() => goToCard(item.url)}/>
                    )
                })}
            </div>
        </div>

    )
}

export default Others;
