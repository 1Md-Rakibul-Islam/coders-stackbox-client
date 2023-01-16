import React from "react";
import ContactUs from "./ContactUs";
import HelpCategories from "./HelpCategories/HelpCategories";

const CommunitySupport = () => {
  return (
    <div className="mt-12">
      <h2 className="font-bold text-6xl text-white text-center">
        How can we{" "}
        <span className="border-b-2 border-secondary">help you?</span>
      </h2>
      <HelpCategories></HelpCategories>
      <ContactUs></ContactUs>
    </div>
  );
};

export default CommunitySupport;
