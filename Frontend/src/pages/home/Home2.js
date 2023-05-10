import React from "react";
import "./Home2.css";
import {Photos} from "../../components/carousel/carouselMain/photoMain/Photos";
import PhotoShadowHover from "../../components/photos/photoShadowHover/PhotoShadowHover";

const Home2 = () => {

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

export default Home2;
