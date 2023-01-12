import React from "react";

const Button = ({ styles, children }) => (
  <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-white  custom-btn  btn rounded-[10px] after:rounded-[10px] outline-none relative bg-transparent transition-all duration-300 ease-linear after:absolute z-[1] after:z-[-1] bg-secondary after:bg-primary after:w-0
  after:h-full after:top-0 after:right-0 after:transition-all after:duration-500 after:ease-in-out  ${styles}`}>
    {children}
  </button>
);

export default Button;