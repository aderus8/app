import React, { useEffect, useState} from "react";
import "./Navbar.css";
import  {Link} from "react-router-dom"
import {Menu} from "./menu/Menu";
import {SidebarMenu} from "./menu/SidebarMenu";


// ZROBIĆ ŻEBY SIĘ ZAMYKAŁ NA ZMNIEJSZONYM EKRANIE AUTOMATYCZNIE
// PO  KLIKNIĘCIU NA COŚ BO SIĘ NIE ZAMYKA
// TYLKO STRONA SIĘ ZMIENIA A ON ZOSTAJE

//  TO PO BOKU MA SIĘ NIE OTWIERAĆ JAK MENU NA MNIEJSZYM EKRANIE JEST OTWARTE

// JKA SIĘ OTWORZY MENU NA ZMNIEJSZONYM EKRANIE I SIĘ GO ZWIĘKSZY TO
// WTEDY ONO ZOSTAJE  A POWINNO SIE ZAMKNĄĆ.
const Navbar = ({isSide, onSideMenuToggle}) => {
    const [clicked, setClicked] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [sidebarIcon, setSidebarIcon] = useState("fas fa-list");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            setIsSidebar(isSide);
        };

    }, []);

    const handleScroll = () => {
        const nav = document.querySelector(".navbar-items");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
            console.log("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    };

    const handleClick = () => {
        setClicked(!clicked);
        const nav = document.querySelector(".toggle-side-button");
        if(!clicked){
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
    };

    const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
        onSideMenuToggle();
        //ZROBIĆ TO JAKO OSOBNĄ FUNKCJE I DOPIERO TU DODAĆ
        const nav = document.querySelector(".navbar-items");

        if(!isSidebar){
            nav.classList.add("navmini");
            setSidebarIcon("fas fa-arrow-left")
        }
        else {
            nav.classList.remove("navmini");
            setSidebarIcon("fas fa-list");
        }
    };

        return (
            <div className={isSidebar ? 'sidebar open' : 'sidebar'}>
                {SidebarMenu.map((item, index) => {
                    return(
                        <ul>
                            <li key={index}>
                                <a className="sidebar-a" href={item.url}> <i className={item.icon}></i>{item.title}</a></li>
                        </ul>
                    )
                })}


                <nav className="navbar-items">
                    <button className="toggle-side-button" onClick={toggleSidebar}>
                        <i className={sidebarIcon}></i>
                    </button>
                    <div className="menu-icons" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-arrow-down" } ></i>
                    </div>
                    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                        {Menu.map((item, index) => {
                            return(
                                <li key={index}>
                                        <Link className={item.cName}
                                              to={item.url}>
                                            {/*<i className={item.sidebarIcon}></i>*/}
                                            {item.title}
                                        </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                </div>
    )}

export default Navbar;

