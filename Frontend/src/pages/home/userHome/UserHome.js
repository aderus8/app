import React, {useEffect, useState} from 'react';
import AuthService from "../../../auth/AuthService";
import "./UserHome.css";
import {Link} from "react-router-dom";
import CarouselMain from "../../../components/carousel/carouselMain/CarouselMain";
import PhotoMain from "../../../components/carousel/carouselMain/photoMain/PhotoMain";
import {Photos} from "../../../components/carousel/carouselMain/photoMain/Photos";
import PhotoShadowHover from "../../../components/photos/photoShadowHover/PhotoShadowHover";

const UserHome = () => {
    const [account, setAccount] = useState({
        email: "",
        role: ""
    });

    useEffect(() => {
        setAccount(AuthService.getMailAndRole());
    }, []);


    return(
        <div className="user-home">
            <CarouselMain/>

            <div className="all-page-photos-user">
                <PhotoShadowHover title="Ćwiczenia"
                                  image={"https://c0.wallpaperflare.com/preview/922/269/165/coffee-women-laptop-computer.jpg"}
                                  link={"/exercises"} />
                <div className="photo-bg2">
                    <h1> Ćwiczenia </h1>
                    <p> Ćwiczenia są narzędziami, które umożliwiają użytkownikom utrwalanie i doskonalenie swoich umiejętności językowych. Oferują one różnorodne zadania i interaktywne ćwiczenia, które umożliwiają praktykę i aplikację wiedzy językowej w praktyce</p>
                </div>
                <div className="photo-bg2">
                    <h1> Testy </h1>
                    <p> Testy są narzędziami służącymi do oceny i pomiaru wiedzy językowej użytkownika. Oferują one zestawy pytań i zadań, które sprawdzają różne aspekty języka, takie jak słownictwo, gramatyka, czy rozumienie tekstu.</p>
                </div>
                <PhotoShadowHover title="Testy"
                                  image={"https://images.unsplash.com/photo-1508014924734-d75124b0f402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}
                                  link={"/exercises"} />
            </div>
            <div className="all-page-photos-user">
                <PhotoShadowHover title="Quizy"
                                  image={"https://s.tvp.pl/images/d/d/3/uid_dd37c4c3f35a40059967dc4314c01623_width_500_play_0_pos_0_gs_0_height_281.jpg"}
                                  link={"/exercises"}/>
                <div className="photo-bg2">
                    <h1> Quizy </h1>
                    <p> Quizy to interaktywne narzędzia, które umożliwiają użytkownikom rozwijanie swoich umiejętności językowych poprzez testowanie i utrwalanie wiedzy w sposób przyjemny i skuteczny. W aplikacji można znaleźć różnego rodzaju quizy, dostosowane do różnych poziomów zaawansowania oraz obszarów językowych</p>
                </div>
                <div className="photo-bg2">
                    <h1> Gramatyka </h1>
                    <p> Ćwiczenia gramatyczne w aplikacji do nauki języków stanowią ważny element procesu nauki i doskonalenia gramatyki. Oferują one różnorodne zadania i interaktywne ćwiczenia, które pomagają użytkownikom zrozumieć i stosować zasady gramatyczne w praktyce. </p>
                </div>
                <PhotoShadowHover title="Gramatyka"
                                  image={"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"}
                                  link={"/exercises"} />
            </div>

        </div>







    )}

export default UserHome;
