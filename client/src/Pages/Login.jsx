import React, { useState, useEffect} from "react";

import LoginForm from "../Components/LoginForm"

function Login(){
    return(
        <div className=''>
            <h1>Login</h1>
            <div className="">
                <div className="Center">
                <div className="FitInSizedBox Center neonBox FormBox">
                <LoginForm />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;