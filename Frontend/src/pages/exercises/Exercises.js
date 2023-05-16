import React from "react";
import "./Exercises.css";
import {Photos} from "../../components/carousel/carouselMain/photoMain/Photos";
import PhotoShadowHover from "../../components/photos/photoShadowHover/PhotoShadowHover";

const Exercises = () => {

    return (
        <div className="all-page-photos">
            {Photos.map((item, index) => {
                return (
                    <PhotoShadowHover image={item.image} title={item.title} link={item.url}/>
                )
            })}
        </div>
    )
}

export default Exercises;
