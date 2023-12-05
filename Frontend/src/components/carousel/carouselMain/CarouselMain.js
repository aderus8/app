import "./CarouselMain.css";
import React, {useEffect, useState} from "react";
import PhotoMain from "./photoMain/PhotoMain";
import {Photos} from "./photoMain/Photos";

const CarouselMain = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Photos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
            <PhotoMain photo={Photos[index]} />
    );
}

export default CarouselMain;
