import React from 'react';
import { Link } from 'react-router';
import logoimage from '../../assets/logo.png'
const Navber = () => {
    const link = [
        <Link to="/home"  className='me-4 focus:text-[#7A42E9] lg:focus:border-b lg:focus:border-[#7A42E9] hover:text-[#7A42E9] lg:hover:border-b-1 lg:hover:border-[#7A42E9]' ><li>Home</li></Link>,
        <Link to="/app"  className='me-4 focus:text-[#7A42E9] lg:focus:border-b lg:focus:border-[#7A42E9] hover:text-[#7A42E9] lg:hover:border-b-1 lg:hover:border-[#7A42E9]' ><li>App Page</li></Link>,
        <Link to="/installation"  className='me-4 focus:text-[#7A42E9] lg:focus:border-b lg:focus:border-[#7A42E9] hover:text-[#7A42E9] lg:hover:border-b-1 lg:hover:border-[#7A42E9]' ><li>Installation</li></Link>

    ]
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link to="/home" className='text-[#7A42E9] text-lg font-bold'><img src={logoimage} className='h-10 w-10 inline'  alt="" /> <span className='lg:inline hidden'>App World</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;