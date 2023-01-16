import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import styles from '../../../style';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

    let [open, setOpen] =useState(false);

    const [fix, setFix] = useState(false);
  useEffect(() => {
    const fixedHeader = () => {
      if (window.scrollY >= 80) {
        console.log('setting')
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);
    return () => window.removeEventListener("scroll", fixedHeader);
  }, []);

    return (
        <div className={` w-full z-10 top-0 left-0 ${fix ? "fixed top-0 z-10 transition-all duration-300 ease-in-out navglassmorphism " : "relative"} `} >
          <div className="absolute w-[50% inset-0 gradient-01" />
            <div className={`${styles.boxWidth} mx-auto sm:px-10 xs:px-5 px-0 `}>
            <div className="flex justify-between py-4 ">
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 xs:scale-100 scale-90 transition-all duration-300 ease-in-out'>
                    <span className='text-3xl text-secondary  pt-2'>
                        <ion-icon name="logo-slack"></ion-icon>
                    </span>
                    <h1 className='text-white'>Coders<span className='text-secondary'>StackBox</span></h1>
                </div>
                <div onClick={() =>setOpen(!open)} className='text-3xl text-white absolute right-8 top-6
                cursor-pointer md:hidden block
                '>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0
                pb-12 absolute md:static text-white z-10 
                w-full md:w-auto transition-all duration-500 ease-in
                ${open ?'top-20 opacity-100 navglassmorphism p-5 ':'top-[-490px]'} `}>
                        <li><Link className="lg:ml-8 ml-0" to='/'>Home</Link></li>
                        <li><Link className="lg:ml-8 ml-0" to='/about'>About Us</Link></li>
                        <li><Link className="lg:ml-8 ml-0" to='/documentation'>Documentation</Link></li>
                        <li><Link className="lg:ml-8 ml-0" to='/community'>Community Support</Link></li>
                        <li className="lg:ml-8 ml-0">
                          {
                            user?.uid ? 
                            <li><button onClick={handleLogOut}>Log Out</button></li>
                            :
                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                          }
                        </li>
                    </ul>
            </div>
            </div>

        </div>
    );
};

export default Navbar;