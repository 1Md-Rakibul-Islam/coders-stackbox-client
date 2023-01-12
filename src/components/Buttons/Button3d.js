import React from "react";

const Button3d = ({ styles, children }) => (
  <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none btn-3d ${styles}`}>
    {children}
  </button>
);

export default Button3d;