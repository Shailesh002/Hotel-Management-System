import NavSingle from "./NavSingle";
import React, {useState,useEffect} from 'react';
// import { redirect } from "react-router-dom";
import Logout from "./Logout";

function Navbar(props){
    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(localStorage.getItem('TOKEN'));
        console.log(TOKEN);
    }

    useEffect( () => getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [] );

    return(
        <div className="">
            <nav>
                <NavSingle URL="/" Title="Home"/>
                <NavSingle URL="/rooms" Title="Rooms"/>
                {/* <NavSingle URL="/contact" Title="Contact"/> */}
                <NavSingle URL="/about" Title="About"/>
                
                {
                    TOKEN === null ?
                    <NavSingle Title="Login" URL="/login" />
                    : 
                    <Logout/>
                }
            </nav>
        </div>
    );
}

export default Navbar;