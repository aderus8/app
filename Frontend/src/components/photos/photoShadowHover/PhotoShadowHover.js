import React from "react";
import "./PhotoShadowHover.css";
import {Link} from "react-router-dom";

const PhotoShadowHover = ({image, title,link}) => {

    return (
            <div className="photo-bg" style={{backgroundImage: `url(${image})`}}>
                <Link to={link}>
                <div className="shadow">
                   <h1 className="shadow-text"> {title} </h1>
                </div>
                </Link>
            </div>

    )
}

export default PhotoShadowHover;
