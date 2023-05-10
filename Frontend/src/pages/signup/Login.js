import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./SignUp.css"
import UserForm from "../../components/form/UserForm";
const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const navigate = useNavigate();

    const signUp = () => {

    }

    return(
        <div>
            {/*<img className="img" src={require('../../assets/login.jpg')}/>*/}
            <UserForm newUser={false}/>
        </div>
    )
}

export default Login;
