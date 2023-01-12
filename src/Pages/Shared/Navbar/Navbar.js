import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/services'>Documentation</Link></li>
        <li><Link to='/contact'>Community Support</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        
        
    </>

    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Codinglab</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;