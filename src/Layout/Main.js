import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import styles from "../style";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
