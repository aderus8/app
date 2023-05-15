import React, {Component} from "react";
import axios from 'axios'
import "../../components/form/Forms.css";
import {Link, Router} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {withRouter} from "../../common/WithRouter";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: {
                email: "",
                password: ""
            },
            errors: {},
            token: "",
            users: "",
            user: "",
            currentUser: ""
        };
    }

    validate = () => {
        const errors = {};
        const {account} = this.state;
        if (account.email.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }
        return Object.keys(errors).length === 0 ? null
            : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'http://localhost:8080/user/login',
            data: {
                email: this.state.account.email,
                password: this.state.account.password
            }
        }).then((response) => {
            localStorage.setItem('token',
                response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            const decodedToken = jwt_decode(response.data.token);
            console.log("decodedT: " + decodedToken);
            this.setState({user: decodedToken});
            // this.props.router.navigate('/account');
            window.location.reload();

        }).catch((error) => {
            const errors = {};
            errors.password = 'Given email doesnt exists or password is wrong!';
            this.setState({errors: errors || {}});
            console.log(error);

        });
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] =
            event.currentTarget.value;
        this.setState({account});
    };
    render() {
        return (
            <div className="all">

                    <div className="form-box">
                <form className="form" onSubmit={this.handleSubmit}>
                    <i className="fas fa-user"></i>
                    <h1 className="title">LOGIN</h1>

                    <input
                            value={this.state.account.email}
                            name="email"
                            onChange={this.handleChange}
                            type="text"
                            id="email"
                        placeholder="email"/>
                        {this.state.errors.email &&
                            <div className="message">{this.state.errors.email}</div>}


                        <input
                            value={this.state.account.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            placeholder="Password"/>
                        {this.state.errors.password &&
                            <div className="alert aleranger">{this.state.errors.password}</div>}

                    <button className="submit-button" type="submit">LOGIN</button>
                    <Link to="/signup"> <p> Do you not have account? Sign up</p></Link>
                </form>
            </div>
    </div>
        );
    }
}
export default Login;//
//
// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import "./SignUp.css"
// import UserForm from "../../components/form/UserForm";
// import axios from "axios";
//
// const Login = () => {
//
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     const[name, setName] = useState('');
//     const[user, setUser] =useState([]);
//     const[user2, setUser2] =useState(['name', 'name2']);
//     const[user3, setUser3] =useState(['1', '2']);
//     const navigate = useNavigate();
//
//     const login = () => {
//         return axios.post("http://localhost:8080/user/login",{
//             "email": email,
//             "password": password
//         }).then(response => {
//             console.log("token: " + response.data.token);
//             if(response.data.token){
//                 localStorage.setItem('user', JSON.stringify(response.data));
//                 setUser(response.data);
//                 console.log(response.data);
//                 // alert("login ok");
//                 // navigate("/home");
//             }
//         })
//     }
//     const handleUser = () => {
//         setUser2(JSON.parse(localStorage.getItem("user")));
//         setUser3(localStorage.getItem('user'));
//     }
//
//     return(
//         <div>
//             {/*<img className="img" src={require('../../assets/login.jpg')}/>*/}
//             <UserForm newUser={false}
//                       onChangeEmail={(e) => setEmail(e.target.value)}
//                       onChangePassword={(e) => setPassword(e.target.value)}
//                       onSubmit={login}
//             />
//
//
//             <button onClick={handleUser}>click</button>
//             <h1> {user2}</h1>
//             <h1> {user3}</h1>
//         </div>
//     )
// }
//
// export default Login;
