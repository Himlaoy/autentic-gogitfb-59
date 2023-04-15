import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.config';

const Register = () => {
    const [success, setSuccess] = useState()
    const [error, setError] = useState()


    const auth = getAuth(app)


    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(event.target.email.value)

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                setSuccess('log in successfully')
                setError('')
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error)
                setSuccess('')
                setError(error.message)
            })
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
                </div>
            </div>
        </div>
    );
};

export default Register;