/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../style';

const Footer = () => {
    return (
        
            <footer className={`${styles.boxWidth} mx-auto footer p-10 text-white relative flex justify-between `}>
            <div className="footer-gradient" />
                <div>
                    <span className="footer-title text-secondary">Services</span>
                    <ul>
                    <li><Link to=''>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''>Documentation</Link></li>
                        <li><Link to=''>Community Support</Link></li>
                        <li><Link to=''>Login</Link></li>
                        <li><Link to="">Sign Up</Link></li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title text-secondary">Company</span>
                   <div>
                   <a className='mr-5' href=""><ion-icon name="logo-github"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-facebook"></ion-icon></a>
                   <a className='mr-5' href=""><ion-icon name="logo-twitter"></ion-icon></a>
                   </div>
                </div>
                
                <div>
                    <span className="footer-title text-secondary">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
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
