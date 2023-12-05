import React from "react";
import "./PhotoShadow.css";
import {Link} from "react-router-dom";

const PhotoShadow = ({image, buttonText, buttonText2, mainText, secondText, buttonOnClick}) => {

    return(

        <div className='div1'>
            <div className='div2' style={{ backgroundImage: `url(${image})`}}  >

            </div>
            <div>
                <div className='div3'></div>
                <div className="div4">
                    <div className="div5">
                        <div className='div6 '>
                            <h1 className='h1-div6'> {mainText} </h1>
                            <h2 className='h2-div6'> {secondText} </h2>
                            <Link to="/signup">
                                <button className='photo-button-zk' onClick={buttonOnClick}> {buttonText} </button>
                            </Link>

                            <Link to="/login">
                                <button className='photo-button-zk' onClick={buttonOnClick}> {buttonText2} </button>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )}

export default PhotoShadow;
