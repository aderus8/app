import React, {useEffect, useState} from "react";
import "./Account.css";
import AuthService from "../../auth/AuthService";


const Account = () => {
    const[email, setEmail] = useState([]);
    const[role, setRole] = useState("guest");

    useEffect(() => {
        const decoded = AuthService.getMailAndRole();
        setRole(decoded.role);
        setEmail(decoded.sub);
    }, [] );

    return(
        <div className="page">
        {/*<div>*/}

            <h1>email: {email} </h1>
            <h1> role: {role}</h1>
            {/*<div className="zero"> </div>*/}
            {/*<div className="first">*/}
            {/*    <div className="first-1"> 1 </div>*/}
            {/*    <div className="first-2"> 2 </div>*/}

            {/*</div>*/}
            {/*<div className="second">*/}
            {/*    <div className="second-1"> 1</div>*/}
            {/*    <div className="second-1"> 2</div>*/}
            {/*    <div className="second-1"> 3</div>*/}
            {/*</div>*/}
            {/*<div className="third">*/}
            {/*    <div className="third-1"> 1</div>*/}
            {/*    <div className="third-2"> 1</div>*/}
            {/*</div>*/}

        </div>
    )
}

export default Account;
