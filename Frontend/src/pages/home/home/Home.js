import React, {useEffect, useState} from "react";
import "./Home.css";
import PhotoShadow from "../../../components/photos/photoShadow/PhotoShadow";
import {Languages} from "../../../components/card/Languages";
import FlagCard from "../../../components/card/flagCard/FlagCard";

import axios from "axios";
const API_URL = "http://localhost:8080/user/";

const Home = () => {

    const [userCounter, setUserCounter] = useState('');
    //userCounter.counter żeby wyświetlić

    useEffect(() => {
        countUsers();
    }, [] );

    const countUsers = ()=>{
        axios.get(API_URL + 'counter')
            .then(response => {
                setUserCounter(response.data);
            })
    }

    return (
        <div className="page1">
            {/*<CarouselFlag/>*/}
            {/*<CarouselMain/>*/}
                <PhotoShadow image={"https://images.unsplash.com/photo-1549314662-c81dcbec48a8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                             mainText={""}
                             buttonText={"Zaloz konto"}
                             buttonText2={"Zaloguj się"}
                />

                {/*<CarouselMain/>*/}
            <div className="home-second-div">
                <h1> POZIOMY NAUKI  </h1>
                <p> Poziomy nauki języka są zazwyczaj opisywane przy użyciu Skali Wspólnego Języka Europejskiego (CEFR - Common European Framework of Reference for Languages). Skala CEFR składa się z sześciu poziomów, które oznaczane są literami od A1 do C2. Każdy poziom opisuje określone umiejętności językowe.</p>

                <div className="levels">
                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/book.png')} alt="icon"/>
                        <h1> A1  </h1>
                        <p> Na poziomie A1 uczący się jest w stanie komunikować się na bardzo podstawowym poziomie. Ma ograniczoną liczbę słownictwa i zna podstawowe struktury gramatyczne. Może porozumieć się w prostych sytuacjach, takich jak przedstawianie się, pytanie o drogę, składanie zamówienia w restauracji itp.</p>
                    </div>
                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/pencil-case.png')} alt="icon"/>
                        <h1> A2  </h1>
                        <p> Na poziomie A2 uczący się ma większe zrozumienie języka i jest w stanie komunikować się w prostych, codziennych sytuacjach. Poszerza swoje słownictwo i zdolności gramatyczne. Może opowiedzieć o swoich zainteresowaniach, rodzinie, pracy itp.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/education.png')} alt="icon"/>
                        <h1> B1  </h1>
                        <p>Na poziomie B1 uczący się jest w stanie prowadzić rozmowy na różne tematy. Potrafi zrozumieć i używać języka w sytuacjach codziennych i podróżnych. Posiada większe zasoby słownictwa i bardziej skomplikowane struktury gramatyczne. Może czytać i rozumieć proste teksty.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/pencil-case.png')}  alt="icon"/>
                        <h1> B2  </h1>
                        <p>Na poziomie B2 uczący się jest w stanie komunikować się płynnie i swobodnie. Posiada rozległe słownictwo i zna bardziej zaawansowane struktury gramatyczne. Może uczestniczyć w dyskusjach na różne tematy, czytać i rozumieć teksty z zakresu zainteresowań i pracy.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/graduation.png')} alt="icon" />
                        <h1> C1  </h1>
                        <p>Na poziomie C1 uczący się posiada wysoki poziom języka. Może swobodnie komunikować się zarówno w sytuacjach formalnych, jak i nieformalnych. Posiada rozległe słownictwo i biegłość w stosowaniu skomplikowanych struktur gramatycznych. Może czytać i rozumieć zaawansowane teksty.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/icons/blueGradient/school.png')} alt="icon"/>
                        <h1> C2  </h1>
                        <p>Poziom C2 oznacza biegłość językową na poziomie native speakera. Uczący się jest w stanie porozumiewać się płynnie i precyzyjnie we wszystkich sytuacjach. Posiada rozbudowane słownictwo, doskonałą gramatykę i jest w stanie czytać i rozumieć zaawansowane teksty akademickie czy literaturę.</p>
                    </div>
                </div>
            </div>



            <div className="all-box">
                <h1> {userCounter.counter} </h1>
                <h1> WYBIERZ JĘZYK </h1>
                {Languages.map((item, index) => {
                    return(
                        <FlagCard key={item.title} title={item.title} image={item.image} index={index}/>
                    )
                })}
            </div>


        </div>
    )
}

export default Home;
