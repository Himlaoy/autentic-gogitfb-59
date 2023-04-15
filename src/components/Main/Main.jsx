import React from 'react';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;