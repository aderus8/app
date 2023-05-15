import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./SignUp.css"
import UserForm from "../../components/form/UserForm";
import axios from "axios";
import Confetti from 'react-confetti';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [id, setId] = useState('1');
    const navigate = useNavigate()


    const [showConfetti, setShowConfetti] = useState(false);
    const [confettiCompleted, setConfettiCompleted] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
    }, []);

    const handleConfettiComplete = () => {
        setConfettiCompleted(true);
    };

    const addNewUser = () => {
        axios.post("http://localhost:8080/user/signup", {
            "name": name,
            "email": email,
            "contactNumber": contactNumber,
            "password": password,
        })
            .then((response) => setId(response.data.token))
            .catch((err) => console.log(err));
        navigate("/login");
    }

    return(
        <div>
            {!confettiCompleted && (
                <Confetti
                    // width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    onConfettiComplete={handleConfettiComplete}
                />
            )}            <div className="img">
                <UserForm
                newUser={true}
                onSubmit={addNewUser}
                onChangeEmail={(e) => setEmail(e.target.value)}
                onChangePassword={(e) => setPassword(e.target.value)}
                onChangeName={(e) => setName(e.target.value)}
                onChangeContactNumber={(e) => setContactNumber(e.target.value)}
            />
            </div>
        </div>
    )
}

export default SignUp;
