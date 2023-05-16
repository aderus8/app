import React from "react";
import "./Home.css";
import PhotoShadow from "../../../components/photos/photoShadow/PhotoShadow";
import {Languages} from "../../../components/card/Languages";
import FlagCard from "../../../components/card/flagCard/FlagCard";

const Home = () => {

    return (
        <div className="page1">
            {/*<CarouselFlag/>*/}
            {/*<CarouselMain/>*/}
                <PhotoShadow image={"https://st2.depositphotos.com/1411161/8600/i/950/depositphotos_86009122-stock-photo-languages-signpost.jpg"}
                             mainText={"Ucz się nowego języka"}
                             buttonText={"Zaloz konto"}/>
                {/*<CarouselMain/>*/}
            <div className="home-second-div">
                <h1> POZIOMY NAUKI  </h1>
                <p> Poziomy nauki języka są zazwyczaj opisywane przy użyciu Skali Wspólnego Języka Europejskiego (CEFR - Common European Framework of Reference for Languages). Skala CEFR składa się z sześciu poziomów, które oznaczane są literami od A1 do C2. Każdy poziom opisuje określone umiejętności językowe.</p>

                <div className="levels">
                    <div className="level">
                        <img src={require('../../../assets/book.png')} />
                        <h1> A1  </h1>
                        <p> Na poziomie A1 uczący się jest w stanie komunikować się na bardzo podstawowym poziomie. Ma ograniczoną liczbę słownictwa i zna podstawowe struktury gramatyczne. Może porozumieć się w prostych sytuacjach, takich jak przedstawianie się, pytanie o drogę, składanie zamówienia w restauracji itp.</p>
                    </div>
                    <div className="level">
                        <img src={require('../../../assets/pencil-case.png')} />
                        <h1> A2  </h1>
                        <p> Na poziomie A2 uczący się ma większe zrozumienie języka i jest w stanie komunikować się w prostych, codziennych sytuacjach. Poszerza swoje słownictwo i zdolności gramatyczne. Może opowiedzieć o swoich zainteresowaniach, rodzinie, pracy itp.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/education.png')} />
                        <h1> B1  </h1>
                        <p>Na poziomie B1 uczący się jest w stanie prowadzić rozmowy na różne tematy. Potrafi zrozumieć i używać języka w sytuacjach codziennych i podróżnych. Posiada większe zasoby słownictwa i bardziej skomplikowane struktury gramatyczne. Może czytać i rozumieć proste teksty.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/pencil-case.png')} />
                        <h1> B2  </h1>
                        <p>Na poziomie B2 uczący się jest w stanie komunikować się płynnie i swobodnie. Posiada rozległe słownictwo i zna bardziej zaawansowane struktury gramatyczne. Może uczestniczyć w dyskusjach na różne tematy, czytać i rozumieć teksty z zakresu zainteresowań i pracy.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/pencil-case.png')} />
                        <h1> C1  </h1>
                        <p>Na poziomie C1 uczący się posiada wysoki poziom języka. Może swobodnie komunikować się zarówno w sytuacjach formalnych, jak i nieformalnych. Posiada rozległe słownictwo i biegłość w stosowaniu skomplikowanych struktur gramatycznych. Może czytać i rozumieć zaawansowane teksty.</p>
                    </div>

                    <div className="level">
                        <img src={require('../../../assets/pencil-case.png')} />
                        <h1> C2  </h1>
                        <p>Poziom C2 oznacza biegłość językową na poziomie native speakera. Uczący się jest w stanie porozumiewać się płynnie i precyzyjnie we wszystkich sytuacjach. Posiada rozbudowane słownictwo, doskonałą gramatykę i jest w stanie czytać i rozumieć zaawansowane teksty akademickie czy literaturę.</p>
                    </div>
                </div>
            </div>



            {/*<div className="home-third-div">*/}
            {/*    <h1> jakis tekst2 </h1>*/}
            {/*</div>*/}

            <div className="all-box">
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
