import React from 'react';
import app from '../../firebase.config';
import { getAuth, GoogleAuthProvider } from "firebase/auth"



const Login = () => {


    const auth = getAuth(app)
    const gProvider = new GoogleAuthProvider()





    return (
        <div className='d-flex  justify-content-center '>
            <div>
                <h2 className='text-success text-center mt-5'>Please Login</h2>
                <form className='p-4 '>
                    <input type="email" required className='mb-3 rounded p-2 ' name="email" id="email" />
                    <br />
                    <input type="password" required className='mb-3 rounded p-2 ' name="password" id="password" />
                    <br />
                    <input type="submit" className='mb-3 rounded p-2 ' value="Sign in" />
                </form> 
            </div>
        </div>
    );
};

export default Login;