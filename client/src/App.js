import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'; 

import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
  
function App(props) {

    const [token, setToken] = useState({
        isLoggedIn: false,
        isAdmin: false,
        Username: ""
    });

    function getToken() {
        let url = 'http://localhost:3001/login'; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json()).then((receivedData) => setToken(receivedData));    
    }

    useEffect( () => getToken(), [] );

    return (
        <div className='App'>
        <Header />
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route exact path='/' element={<Home isAdmin={props.isAdmin}/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    
                    {
                        token.isLoggedIn === true?
                        <Route path='/logout'/>
                        : <Route path='/login' element={<Login token={token} isAdmin={token.isAdmin} />} />
                    }
                
                </Routes>
            </Router>
        <Footer/>
        </div>
    );
}
      
export default App;