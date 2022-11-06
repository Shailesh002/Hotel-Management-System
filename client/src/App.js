import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar'; 

import Home from "./Pages/Home";
// import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Rooms from './Pages/Rooms';
import SignUp from './Pages/SignUp';
  
function App(props) {

    const [TOKEN, setToken] = useState([]);

    useEffect(() => {
        const receiveData = localStorage.getItem('TOKEN');
        
        console.log('TOKEN = ')
        console.log(receiveData)

        if (receiveData) {
            setToken(receiveData);
        }
    }, []);

    return (
        <div className='App'>
        <Header />
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route exact path='/' element={<Home TOKEN={TOKEN} />} />
                    <Route path='/rooms' element={<Rooms />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/login' element={<Login TOKEN={TOKEN} />} />
                    <Route path='/signup' element={<SignUp TOKEN={TOKEN} />} />
                </Routes>
            </Router>
        <Footer/>
        </div>
    );
}
      
export default App;