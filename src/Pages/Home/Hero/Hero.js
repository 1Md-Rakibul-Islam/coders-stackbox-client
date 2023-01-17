import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../../assets/heroImage.gif";
import Button from "../../../components/Buttons/Button";

const Hero = () => {
  return (
    <header className="my-10 ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:mt-24 text-white gap-10 mx-5 items-center justify-center ">
        <div className="">
          <h1 className="text-5xl font-bold mr-5 font-italic">C<span className='text-secondary text-6xl'>o</span>ders Stack<span className='text-secondary'>Box</span> is the best place to build, test, and discover front-end code.</h1>
          <p className="my-10 text-justify">Build your Fron-End Web Application. Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all  under wraps? Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.</p>
          <Button>Start Coding <FaArrowRight className='ml-2'></FaArrowRight> </Button>

        </div>
        <div className="overflow">
          <img className="w-full shadow-green-500 shadow-2xl rounded-xl" src={heroImage} alt="" />
        </div>
        </div>
        </header>
    );
};

export default Hero;
