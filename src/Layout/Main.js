import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import styles from "../style";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Outlet />
        </div>
      </div>
          <Footer />
    </div>
  );
};

export default Main;
