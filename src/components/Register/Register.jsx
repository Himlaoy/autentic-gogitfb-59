import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
    const [success, setSuccess] = useState()
    const [error, setError] = useState()


    const auth = getAuth(app)


    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        if(!/(?=.*[A-Z])/.test(password)){
            setError('please put at least one uppercase latter')
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('please put at least one special character')
            return
        }
        else if (password.length < 6) {
            setError('please put at least 6 character')
            return
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                setSuccess('log in successfully')
                sendVerify(loggedUser)
                event.target.reset()
                setError('')
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                setSuccess('')
                setError(error.message)
            })


        const sendVerify = (user,) => {
            sendEmailVerification(user)
                .then(result => {
                    alert('check yor email')
                    console.log(result)
                })
                .catch(error => {
                    console.log(error.message)
                    setError(error.message)
                })
        }


    }



    return (
        <div >
            <h2 className='text-center text-success mt-4'>Please Register</h2>
            <div className="d-flex align-item-center justify-content-center">
                <div >
                    <form onSubmit={handleSubmit}>
                        <input type="email" required className='p-2 rounded mb-3' name="email" id="email" placeholder='Enter your email' />
                        <br />
                        <input type="password" required className='p-2 rounded mb-3' name="password" id="password" placeholder='Enter your password' />
                        <br />
                        <input type="submit" value="Register" className='p-2 rounded mb-3' />
                    </form>
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <p>Already have an account? please <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;