import React, { useState } from "react";
import axios from 'axios';
import "../../components/form/Forms.css";
import "./SignUp.css"
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
    const [account, setAccount] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState("");

    const validate = () => {
        const errors = {};
        if (account.email.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors || {});
        if (validationErrors) return;

        axios.post("http://localhost:8080/user/login", {
            email: account.email,
            password: account.password
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));

                const decodedToken = jwt_decode(response.data.token);
                console.log("decodedT: " + decodedToken);
                setUser(decodedToken);
                window.location.reload();
                if(decodedToken.role==="admin"){
                    window.location.assign("http://localhost:3000/adminhome");
                } else if(decodedToken.role === "user"){
                    window.location.assign("http://localhost:3000/exercises");
                }
            })
            .catch((error) => {
                const errors = {};
                errors.password = 'Given email doesn\'t exist or the password is wrong!';
                setErrors(errors);
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAccount((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (

        <div className="all-login">
            <div className="form-box">
                <form className="form" onSubmit={handleSubmit}>
                    <i className="fas fa-user"></i>
                    <h1 className="title">LOGIN</h1>

                    <input
                        value={account.email}
                        name="email"
                        onChange={handleChange}
                        type="text"
                        id="email"
                        placeholder="email"
                    />
                    {errors.email && <div className="message">{errors.email}</div>}

                    <input
                        value={account.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                    />
                    {errors.password && <div className="alert aleranger">{errors.password}</div>}

                    <button className="submit-button" type="submit">LOGIN</button>
                    <Link to="/signup"><p> Do you not have an account? Sign up</p></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
