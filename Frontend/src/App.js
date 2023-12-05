import {Route, Routes, useNavigate} from "react-router-dom";
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
import {useState} from "react";
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
import PrivateRoute from "./PrivateRoute";
import AuthService from "./auth/AuthService";

function App() {
    const navigate = useNavigate();
    const [side, setSide] = useState(false);
    const currentUser = AuthService.getCurrentUserToken();
    const userRole = currentUser ? currentUser.role : "guest";

    function handleSideMenu() {
        console.log("side przekazywany: "+ side);
        setSide((prevState) => !prevState);
    }

    const checkAccess = (allowedRoles) => {
        console.log("current role: "+ currentUser.role);
        if (!currentUser || (allowedRoles && !allowedRoles.includes(userRole))) {
            navigate("/login"); // Przekierowanie do strony logowania lub innej strony w przypadku braku dostępu
        }
    };

    // const [isDarkMode, setIsDarkMode] = useState(false);
    //
    // const toggleDarkMode = () => {
    //     setIsDarkMode((prevState) => !prevState);
    // };
  return (
      <>
          <Navbar isSide={side} onSideMenuToggle={handleSideMenu} />
          <div className={side ? 'blur-bg' : 'normal-bg'}>
              <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/signup" element={<SignUp/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/users" element={<Users/>}/>
                      <Route path="/words" element={<Words/>}/>
                      <Route path="/definitions" element={<Definitions/>}/>
                      <Route path="/quiz" element={<QuizDetails/>}/>
                      <Route path="/irregularverbs" element={<IrregularVerbs/>}/>
                      <Route path="/account" element={<Account/>} />
                      <Route path="/quizpage" element={<QuizPage/>}/>
                      <Route path="/exercises" element={<Exercises/>}/>
                      <Route path="/adminhome" element={<AdminHome/>}/>
                      <Route path="/userhome" element={<UserHome/>}/>
                      <Route path="/tests" element={<Test/>}/>
                      <Route path="/testDetails" element={<TestDetails/>}/>
                      <Route path="/grammar" element={<Grammar/>}/>
                      <Route path="/reading" element={<Reading/>}/>
                      <Route path="/others" element={<Others/>}/>
                      <Route path="/game" element={<Game/>}/>
             </Routes>
          </div>
      </>

  );
}

export default App;
