import React from 'react';
import Navber from '../../components/Navber/Navber'
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;