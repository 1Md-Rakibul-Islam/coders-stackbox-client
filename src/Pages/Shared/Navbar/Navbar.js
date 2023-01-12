import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed z-10 top-0 left-0 '>
            <div className="md:flex justify-between py-4 bg-white md:px-10 px-7">
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="logo-slack"></ion-icon>
                    </span>
                    Coddinglab
                </div>
                <div onClick={() =>setOpen(!open)} className='text-3xl absolute right-8 top-6
                cursor-pointer md:hidden block
                '>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`lg:flex md:items-center md:pb-0
                pb-12 absolute md:static bg-white z-10 
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                ${open ?'top-20 opacity-100':'top-[-490px]'} `}>
                        <li><Link className="ml-8" to='/'>Home</Link></li>
                        <li><Link className="ml-8" to='/about'>About Us</Link></li>
                        <li><Link className="ml-8" to='/documentation'>Documentation</Link></li>
                        <li><Link className="ml-8" to='/community'>Community Support</Link></li>
                        <li><Link className="ml-8" to='/login'>Login</Link></li>
                        <li><Link className="ml-8" to="/signup">Sign Up</Link></li>
                    </ul>
            </div>

        </div>
    );
};

export default Navbar;