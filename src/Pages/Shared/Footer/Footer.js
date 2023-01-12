import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full flex text-center '>

            <div className=''>
                <ul className=' items-center m-8 text-xl'>
                    <span className="footer-title">Services</span>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/documentation'>Documentation</Link></li>
                    <li><Link to='/community'>Community Support</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
            <div className=''>
                <span className="footer-title text-xl">Social</span>
                <div className='grid sm:grid-cols-1 '>
                    <a className="mr-5" href=""><ion-icon name="logo-github"></ion-icon></a>
                    <a className="mr-5" href=""><ion-icon name="logo-stackoverflow"></ion-icon></a>
                    <a className="mr-5" href=""><ion-icon name="logo-whatsapp"></ion-icon></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;