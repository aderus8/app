import React from "react";
import "./PhotoShadowHoverSmall.css";
import {Link} from "react-router-dom";

const PhotoShadowHoverSmall = ({image, title,link}) => {

    return (
            <div className="photo-bg-small" style={{backgroundImage: `url(${image})`}}>
                <Link to={link}>
                <div className="shadow">
                   <h1 className="shadow-text"> {title} </h1>
                </div>
                </Link>
            </div>

    )
}

export default PhotoShadowHoverSmall;
