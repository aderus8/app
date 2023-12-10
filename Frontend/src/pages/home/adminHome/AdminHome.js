import React, {useEffect, useState} from 'react';
import AuthService from "../../../auth/AuthService";
import "./AdminHome.css";
import {Link} from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:8080/user/";

const AdminHome = () => {
    const [account, setAccount] = useState({
        email: "",
        role: ""
    });
    const [userCounter, setUserCounter] = useState('');
    //userCounter.counter żeby wyświetlić

    useEffect(() => {
        setAccount(AuthService.getMailAndRole());
        // countUsers();
    }, []);



    return (

        <div className="admin-home">
            <div className="box-admin">
                <div className="first-column">
                    <Link to={"/account"} className="admin-cards-2">
                        <img src={require('../../../assets/icons/admin.jpg')}/>
                        <h2> {account.role.toUpperCase()}</h2>
                        {/*<h6> {account.sub} </h6>*/}
                    </Link>
                </div>

                <div className="second-column">
                    <div className="admin-cards">

                    <Link to={"/users"} className="admin-cards-2">
                        <img src={require('../../../assets/icons/blueGradient/user.png')}/>
                        <h2> Użytkownicy </h2>
                        <h2> {userCounter.counter} </h2>

                    </Link>

                        <Link to={"/tests"}>
                            <div className="admin-cards-2">
                                <img src={require('../../../assets/icons/blueGradient/approval.png')}/>
                                <h2> Testy </h2>
                            </div>
                        </Link>

                        <Link to={"/quizpage"}>
                            <div className="admin-cards-2">
                                <img src={require('../../../assets/icons/blueGradient/quiz.png')}/>
                                <h2> Quizy </h2>
                            </div>
                        </Link>


                        <Link to={"/addnewword"}>
                            <div className="admin-cards-2">
                                <img src={require('../../../assets/icons/blueGradient/approval.png')}/>
                                <h2> Dodaj nowe słowo </h2>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AdminHome;
