import Flag from "../flag/flagMain/FlagMain";
import {Languages} from "../card/Languages";
import {useEffect, useState} from "react";

const CarouselFlag = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Languages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        <Flag language={Languages[index]}/>
        // <img src={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"}/>
    );
}

export default CarouselFlag;
