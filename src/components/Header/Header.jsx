import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='d-flex justify-content-center mt-5 mx-auto'>
           <Link to="/" className='mr-3 fs-4'>Home</Link>
           <Link to="/register" className='mr-3 fs-4'>Register</Link>
           <Link to="/login" className='mr-3 fs-4'>Login</Link>
        </nav>
    );
};

export default Header;