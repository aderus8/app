import React, {useEffect, useState} from 'react';
import AuthService from "../../../auth/AuthService";
import "./AdminHome.css";
import {Link} from "react-router-dom";

const AdminHome = () => {
    const [account, setAccount] = useState({
        email: "",
        role: ""
    });

    useEffect(() => {
        setAccount(AuthService.getMailAndRole());
    }, []);



    return (

        <div className="admin-home">
                <div className="first-column">
                    <Link to={"/account"} className="admin-card">
                        <img src={require('../../../assets/admin.png')}/>
                        <h2> {account.role.toUpperCase()}</h2>
                        {/*<h6> {account.sub} </h6>*/}
                    </Link>
                </div>

                <div className="second-column">
                    <div className="admin-cards">

                    <Link to={"/users"} className="admin-cards-2">
                        <img src={require('../../../assets/user.png')}/>
                        <h2> Użytkownicy </h2>
                    </Link>

                    <div className="admin-cards-2">
                        <img src={require('../../../assets/approval.png')}/>
                        <h2> Testy </h2>
                    </div>

                    <div className="admin-cards-2">
                        <img src={require('../../../assets/quiz.png')}/>
                        <h2> Quizy </h2>
                    </div>
                    </div>

                </div>

        </div>
    )
}
export default AdminHome;
