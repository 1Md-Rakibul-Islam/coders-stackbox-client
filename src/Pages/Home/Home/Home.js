import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
import ContactUs from "../ConactUs/ContactUs";
import Hero from "../Hero/Hero";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <BestDeveloper></BestDeveloper>
      <OurTeam></OurTeam>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
