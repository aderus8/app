import React, { useEffect, useState} from "react";
import "./Navbar.css";
import {Link, useNavigate} from "react-router-dom"
import {Menu} from "./menu/Menu";
import {UserMenu} from "./menu/UserMenu";
import {SidebarMenu, SidebarMenuGuest, SidebarMenuAdmin} from "./menu/SidebarMenu";
import jwt_decode from "jwt-decode";
import AuthService from "../../auth/AuthService";
import {AdminMenu} from "./menu/AdminMenu";


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
    const [loggedUser, setLoggedUser] = useState("false");
    const [user, setUser] = useState([]);
    const [role, setRole] = useState("guest");
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            console.log("decodedToken: " + decodedToken);
            setUser(decodedToken);
            console.log(user);
            setRole(decodedToken.role);
            console.log("role: " + role);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            setIsSidebar(isSide);
        };
    }, [] );

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
        console.log("handle clicl");
        if(!isSidebar) {
            setClicked(!clicked);
            const nav = document.querySelector(".toggle-side-button");
            if (!clicked) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        }
    };

    const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
        onSideMenuToggle();
        setClicked(false);
        console.log("clicked w sidebarze na: " + clicked);
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

    const logout = () => {
        AuthService.logout();
        setLoggedUser('');
        setRole("guest");
        setUser([]);
        navigate("/");
    }

        return (
            <div className={isSidebar ? 'sidebar open' : 'sidebar'}>
                {role==='user' && (
                    <>
                    {SidebarMenu.map((item, index) => {
                    return(
                        <ul key={index}>
                            <li key={index}>
                                <a className="sidebar-a" href={item.url}> <i className={item.icon}></i>{item.title}</a></li>
                        </ul>
                    )
                })}
                    </>
                )}
                {role==='guest' && (
                    <>
                        {SidebarMenuGuest.map((item, index) => {
                            return(
                                <ul key={index}>
                                    <li key={index}>
                                        <a className="sidebar-a" href={item.url}> <i className={item.icon}></i>{item.title}</a></li>
                                </ul>
                            )
                        })}
                    </>
                )}
                {role==='admin' && (
                    <>
                        {SidebarMenuAdmin.map((item, index) => {
                            return(
                                <ul key={index}>
                                    <li key={index}>
                                        <a className="sidebar-a" href={item.url}> <i className={item.icon}></i>{item.title}</a></li>
                                </ul>
                            )
                        })}
                    </>
                )}


                <nav className="navbar-items">
                    <button className="toggle-side-button" onClick={toggleSidebar}>
                        <i className={sidebarIcon}></i>
                    </button>

                    <div className="role"> {role.toUpperCase()}</div>

                    <div className="menu-icons" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-arrow-down" } ></i>
                    </div>



                    {role==='admin' && (
                    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                        {AdminMenu.map((item, index) => {
                            return(
                                <li key={index}>
                                        <Link className={item.cName}
                                              to={item.url}>
                                            {item.title}
                                        </Link>
                                </li>
                            )
                        })}
                        <li key={"logout"}>
                            <button className="button-signup"
                                  onClick={logout}>
                                LOGOUT
                            </button>
                        </li>
                    </ul>
                        )}


                    {role==='user' && (
                        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                            {UserMenu.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <Link className={item.cName}
                                              to={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li key={"logout"}>
                                <button className="button-signup"
                                        onClick={logout}>
                                    LOGOUT
                                </button>
                            </li>
                        </ul>
                    )}


                    {role==='guest' && (
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
                    )}
                </nav>
                </div>
    )}

export default Navbar;

