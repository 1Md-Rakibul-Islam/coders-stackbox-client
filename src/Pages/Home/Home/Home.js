import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
import Collaboration from "../Collaboration/Collaboration";
import ContactUs from "../ConactUs/ContactUs";
import Hero from "../Hero/Hero";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <Services />

        <div className="gradient-03 z-0" />
        <BestDeveloper />
      </div>
      <div className="relative">
        <Collaboration />
        <div className="gradient-04 z-0" />
        <OurTeam />
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
