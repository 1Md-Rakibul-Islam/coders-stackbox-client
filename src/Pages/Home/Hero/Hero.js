import React from "react";
import Button from "../../../components/Buttons/Button";

const Hero = () => {
  return (
    <header className="my-10 ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:mt-24 text-white gap-6 mx-5 items-center justify-center ">
        <div className="">
          <h1 className="text-4xl font-bold">Coders StackBox is the best <br /> place to build, test, and discover <br /> front-end code.</h1>
          <p className="my-10">Build your Fron-End Web Application. Get work done quicker by building out <br /> entire projects or isolating code to test features and animations. Want to keep it all <br /> under wraps?
          <br /> <br /> Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.</p>
          <Button>Start Coding</Button>

        </div>
        <div className="overflow">
          <img className="w-full shadow-green-500 shadow-2xl rounded-xl" src="https://strongloop.com/blog-assets/2016/06/typehint-example-1a.gif" alt="" />
        </div>
      </div>

    </header>
  );
};

export default Hero;
