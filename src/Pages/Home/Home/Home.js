import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
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
        <OurTeam />

        <div className="gradient-04 z-0" />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
