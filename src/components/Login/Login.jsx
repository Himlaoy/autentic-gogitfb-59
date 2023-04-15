import React, { useState } from 'react';
import app from '../../firebase.config';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { Link } from 'react-router-dom';



const Login = () => {
    const [error, setError] = useState()
    const [success , setSuccess] =useState()


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


    const handleSubmit=(event)=>{
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user)
            setSuccess('login successfully')
            setError('')
            event.target.reset()
        })
        .catch(error=>{
            setSuccess('')
            setError(error.message)
        })


    }



    return (
        <div className='d-flex justify-content-center '>
            <div>
                <button onClick = {loginGoogle} className='text-success text-center mt-5'>Google Login</button>
                <button onClick = {handleGithub} className='text-success text-center mt-5'>Github Login</button>
                <form onSubmit={handleSubmit} className='p-4 '>
                    <input type="email" required className='mb-3 rounded p-2 ' name="email" id="email" />
                    <br />
                    <input type="password" required className='mb-3 rounded p-2 ' name="password" id="password" />
                    <br />
                    <input  type="submit" className='mb-3 rounded p-2 ' value="Sign in" />
                </form>
                <p>Don't have account? please <Link to="/register">Register</Link></p>
                <p>{success}</p>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;