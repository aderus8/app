import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
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
import Home2 from "./pages/home/Home2";

function App() {
    const [side, setSide] = useState(false);
    function handleSideMenu() {
        console.log("side przekazywany: "+ side);
        setSide((prevState) => !prevState);
    }

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
                      <Route path="/account" element={<Account/>}/>
                      <Route path="/quizpage" element={<QuizPage/>}/>
                      <Route path="/home2" element={<Home2/>}/>
             </Routes>
          </div>
      </>

  );
}

export default App;
