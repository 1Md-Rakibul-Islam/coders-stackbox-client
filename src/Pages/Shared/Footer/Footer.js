/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../style";

const Footer = () => {

    return (

        <footer className={`${styles.boxWidth} mx-auto relative text-center `}>
            <div className="footer-gradient" />
            <div className='w-full'>
                <div>

                    <ul className='lg:flex md:flex sm:flex items-center mt-10 text-bold justify-around text-white'>
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''><span className="text-white text-bold text-2xl">Services</span></Link></li>
                        <li><Link to=''>Documentation</Link></li>
                        <li><Link to=''>Community Support</Link></li>
                        {/* <li><Link to=''>Login</Link></li>
                        <li><Link to="">Sign Up</Link></li> */}
                    </ul>
                    <div className='mt-10 bg-gradient-to-r from-accent to-secondary ' style={{ height: "2px" }} />
                </div>
                <div className='text-white text-center'>
                    <div className='mt-5 mb-5 pt-10'>
                        <a className='mr-5 rounded-full ...' href=""><ion-icon name="logo-github"></ion-icon></a>
                        <a className='mr-5' href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a className='mr-5' href=""><ion-icon name="logo-facebook"></ion-icon></a>
                        <a className='mr-5' href=""><ion-icon name="logo-ionic"></ion-icon></a>

                    </div>
                    <div>
                        <a className='mt-5 mb-5 pt-10' href=""><ion-icon name="logo-edge"></ion-icon>  2010-2020 Privacy-Terms</a>
                    </div>
                </div>
            </div>
        </footer>

    );

}
export default Footer;
