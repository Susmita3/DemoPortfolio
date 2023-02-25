import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Navbar/Footer';
import Navbar from '../Pages/Navbar/Nav';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;