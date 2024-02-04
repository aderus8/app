import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home/home/Home";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./pages/account/SignUp";
import Login from "./pages/account/Login";
import Users from "./pages/users/Users";
import Words from "./pages/words/Words";
import Definitions from "./pages/words/Definitions";
import "./App.css";
import QuizDetails from "./pages/quiz/quizDetails/QuizDetails";
import IrregularVerbs from "./pages/IrregularVerbs";
import {useEffect, useState} from "react";
import Account from "./pages/account/Account";
import QuizPage from "./pages/quiz/quizPage/QuizPage";
import Exercises from "./pages/exercises/Exercises";
import AdminHome from "./pages/home/adminHome/AdminHome";
import UserHome from "./pages/home/userHome/UserHome";
import Test from "./pages/test/test/Test";
import TestDetails from "./pages/test/testDetails/TestDetails";
import Grammar from "./pages/grammar/Grammar";
import Reading from "./pages/exercises/reading/Reading";
import Others from "./pages/others/Others";
import Game from "./pages/exercises/game/Game";
import AuthService from "./auth/AuthService";
import jwt_decode from "jwt-decode";
import AddNew from "./pages/words/AddNew";
import Pronunciation from "./pages/exercises/pronunciation/Pronunciation";

function App() {

    const navigate = useNavigate();
    const [side, setSide] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState([]);
    const [role, setRole] = useState("guest");

    const ProtectedUserRoute = ({ children }) => {
        return (checkIfUser() === true || checkIfAdmin() === true ) ? children : <Navigate to={"/"}/>;
    }

    const ProtectedAdminRoute = ({ children }) => {
        return checkIfAdmin() === true ? children : <Navigate to={"/"}/>;
    }

    const ProtectedGuestRoute = ({ children }) => {
        return checkIfGuest() === true ? children : <Navigate to={"/userhome"}/>;
    }


    useEffect(() => {
        checkRole();
        console.log("czy user: " + checkIfUser());
        console.log("czy admin:  " + checkIfAdmin());
        console.log("czy gosc: " + checkIfGuest());
        }, [] );

    const checkRole = () =>{
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            setUser(decodedToken);
            setRole(decodedToken.role);
            return(decodedToken.role);
        }
    }

    const checkIfUser = () => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            if(decodedToken.role === 'user') {
                return true;
            } else {
                return false;
            }
        }return false;
    }

    const checkIfAdmin = () => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            const decodedToken = jwt_decode(localStorage.getItem("token"));
            if(decodedToken.role === 'admin') {
                return true;
            } else {
                return false;
            }
        }return false;
    }

    const checkIfGuest = () => {
        const currentUser = AuthService.getCurrentUserToken();
        if(currentUser) {
            return false;
        } else {
            return true;
        }
    }


    function handleSideMenu() {
        console.log("side przekazywany: "+ side);
        setSide((prevState) => !prevState);
    }


  return (
      <>
          <Navbar isSide={side} onSideMenuToggle={handleSideMenu} />
          <div className={side ? 'blur-bg' : 'normal-bg'}>
              <Routes>
                      <Route path="/" element={
                          <ProtectedGuestRoute>
                              <Home/>
                          </ProtectedGuestRoute>}/>

                      <Route path="/signup" element={
                          <ProtectedGuestRoute>
                              <SignUp/>
                          </ProtectedGuestRoute>}/>

                      <Route path="/login" element={
                          <ProtectedGuestRoute>
                              <Login/>
                          </ProtectedGuestRoute>}/>

                      <Route path="/users" element={
                          <ProtectedAdminRoute>
                             <Users/>
                          </ProtectedAdminRoute>
                      }/>

                      <Route path="/words" element={<Words/>}/>

                      <Route path="/definitions" element={<Definitions/>}/>

                      <Route path="/quiz" element={
                          <ProtectedUserRoute>
                          <QuizDetails/>
                          </ProtectedUserRoute>}/>

                      <Route path="/irregularverbs" element={<IrregularVerbs/>}/>

                      <Route path="/account" element={
                          <ProtectedUserRoute>
                              <Account/>
                          </ProtectedUserRoute>} />

                      <Route path="/quizpage" element={
                          <ProtectedUserRoute>
                              <QuizPage/>
                           </ProtectedUserRoute>
                          }/>

                      <Route path="/exercises" element={
                          <ProtectedUserRoute>
                              <Exercises/>
                          </ProtectedUserRoute>}/>

                      <Route path="/adminhome" element={
                          <ProtectedAdminRoute>
                            <AdminHome/>
                          </ProtectedAdminRoute>}/>

                      <Route path="/userhome" element={
                          <ProtectedUserRoute>
                          <UserHome/>
                          </ProtectedUserRoute>}/>

                      <Route path="/tests" element={
                          <ProtectedUserRoute>
                              <Test/>
                          </ProtectedUserRoute>}/>

                      <Route path="/testDetails" element={
                          <ProtectedUserRoute>
                              <TestDetails/>
                          </ProtectedUserRoute>}/>

                      <Route path="/grammar" element={
                          <ProtectedUserRoute>
                              <Grammar/>
                          </ProtectedUserRoute>}/>

                      <Route path="/reading" element={
                          <ProtectedUserRoute>
                              <Reading/>
                          </ProtectedUserRoute>}/>

                      <Route path="/others" element={
                          <ProtectedUserRoute>
                              <Others/>
                          </ProtectedUserRoute>}/>

                      <Route path="/game" element={
                          <ProtectedUserRoute>
                              <Game/>
                          </ProtectedUserRoute>}/>

                      <Route path="/addnewword" element={
                          <ProtectedAdminRoute>
                              <AddNew/>
                          </ProtectedAdminRoute>}/>
                      <Route path="/pro" element={
                          <ProtectedUserRoute>
                              <Pronunciation/>
                          </ProtectedUserRoute>}/>
             </Routes>
          </div>
      </>

  );
}

export default App;
