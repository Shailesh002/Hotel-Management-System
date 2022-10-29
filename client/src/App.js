import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';  

import Home from "./Pages/Home"
import Login from './Pages/Login';

  
function App(props) {
    return (
        <div className='App'>
        <Header />
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route exact path='/' element={<Home isAdmin={props.isAdmin}/>} />
                    <Route path='/login' element={<Login isAdmin={props.isAdmin}/>} />
                </Routes>
            </Router>
        <Footer/>
        </div>
    );
}
      
export default App;