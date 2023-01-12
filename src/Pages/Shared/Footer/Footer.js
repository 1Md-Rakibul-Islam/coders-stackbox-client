import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/documentation'>Documentation</Link></li>
                        <li><Link to='/community'>Community Support</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                   <div>
                   <a className='mr-5' href=""><ion-icon name="logo-github"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-facebook"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-twitter"></ion-icon></a>
                   </div>
                </div>
                
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-outline absolute top-0 right-0 rounded-l-none">Sign Up</button>
                        </div>
                    </div>
                </div>
            </footer>
        
    );
};

export default Footer;
