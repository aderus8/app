import React, {useEffect, useState} from "react";
import "./Account.css";
import AuthService from "../../auth/AuthService";
import jwt_decode from "jwt-decode";


const Account = () => {
    const[email, setEmail] = useState([]);
    const[role, setRole] = useState("guest");

    const [testResults, setTestResults] = useState([]);
    const [quizResults, setQuizResults] = useState([]);
    const [exResults, setExResults] = useState([]);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const currentUser = AuthService.getCurrentUserToken();
        if (currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            setUserEmail(decodedToken.sub);

            const storedTestResults = JSON.parse(localStorage.getItem("userTestResults")) || {};
            setTestResults(storedTestResults[userEmail] || []);
            console.log("STORED: "+ storedTestResults.level)

            const storedQuizResults = JSON.parse(localStorage.getItem("userQuizResults")) || {};
            setQuizResults(storedQuizResults[userEmail] || []);

            const storedExResults = JSON.parse(localStorage.getItem("userExResults")) || {};
            setExResults(storedExResults[userEmail] || []);
            console.log("EX: " + storedExResults.result);
        }
    }, [userEmail]);

    const displayTestResults = () => {
        if (testResults.length === 0) {
            return <p>No test results found.</p>;
        }
    }

    useEffect(() => {
        const decoded = AuthService.getMailAndRole();
        setRole(decoded.role);
        setEmail(decoded.sub);
    }, [] );

    return(
        <div className="account-page">
        {/*<div>*/}
            <div className="box-account">
                <div className="account-icon"></div>
                <div className="form-box-role">
                    <div className="mail-and-role">
                        <h1>email: {email} </h1>
                        <h1> role: {role}</h1>
                    </div>

                    <div className="tables-account">

                        <div style={{margin: "8px"}}>
                            <h4>Test Results</h4>
                            <table className="results-table">
                                <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Level</th>
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {testResults.map((testResult, index) => (
                                    <tr key={index}>
                                        <td> {testResult.testType}</td>
                                        <td> {testResult.level}</td>
                                        <td> {testResult.result}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{margin: "8px"}}>
                            <h4>Quiz Results</h4>
                            <table className="results-table">
                                <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Category</th>
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {quizResults.map((quizResult, index) => (
                                    <tr key={index}>
                                        <td>{quizResult.quizType}</td>
                                        <td>{quizResult.category}</td>
                                        <td>{quizResult.result}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div style={{margin: "8px"}}>
                            <h4>Exercises Results</h4>
                            <table className="results-table">
                                <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Type</th>
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {exResults.map((exResult, index) => (
                                    <tr key={index}>
                                        <td>{exResult.what}</td>
                                        <td>{exResult.exType}</td>
                                        <td>{exResult.result}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;
