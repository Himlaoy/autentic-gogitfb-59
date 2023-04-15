import React from 'react';
import app from '../../firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"



const Login = () => {


    const auth = getAuth(app)
    const gProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()



    const loginGoogle=()=>{
        signInWithPopup(auth, gProvider)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleGithub =()=>{
        signInWithPopup(auth, gitProvider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    return (
        <div className='d-flex justify-content-center '>
            <div>
                <button onClick = {loginGoogle} className='text-success text-center mt-5'>Google Login</button>
                <button onClick = {handleGithub} className='text-success text-center mt-5'>Github Login</button>
                <form className='p-4 '>
                    <input type="email" required className='mb-3 rounded p-2 ' name="email" id="email" />
                    <br />
                    <input type="password" required className='mb-3 rounded p-2 ' name="password" id="password" />
                    <br />
                    <input  type="submit" className='mb-3 rounded p-2 ' value="Sign in" />
                </form> 
            </div>
        </div>
    );
};

export default Login;