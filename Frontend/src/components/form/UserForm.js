import React, {useState} from 'react';
import "./Forms.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const UserForm = ({newUser, onSubmit, onChangeName, onChangeEmail, onChangePassword, onChangeContactNumber}) => {

    return(
        <div className="all">
            <div className="form-box">
                    <form className="form" onSubmit={onSubmit}>
                        <i className="fas fa-user"></i>

                        {(newUser === true) ? (   <h1 className="title"> SIGN UP  </h1>  ) : (  <h1 className="title">  LOGIN</h1> )}

                        {(newUser === true) ? (
                            <>
                        <input
                            onChange={onChangeName}
                            type='text'
                            placeholder='Name'
                            required={true}
                            />
                        <input
                             onChange={onChangeContactNumber}
                             type='text'
                             placeholder='Contact Number'
                             required={true}
                             />
                        </> ) : (" ") }
                        <input
                            onChange={onChangeEmail}
                            type='email'
                            placeholder='Email'
                            required={true}
                        />

                        <input
                            onChange={onChangePassword}
                            type='password'
                            placeholder='Password'
                            required={true}
                            />
                        {(newUser === true) ? (
                            <>
                                <button className="submit-button"> SIGN UP </button>
                                <Link to="/login"> <p> Already have account? Login</p></Link>
                            </>) : (
                                <>
                                <button className="submit-button"> LOGIN </button>
                            <Link to="/signup"> <p> Do you not have account? Sign up</p></Link>
                             </>
                        )}

                    </form>
                </div>
            </div>

    )
}

export default UserForm;
