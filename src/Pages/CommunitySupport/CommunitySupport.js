import React from 'react';
import FAQ from "./subsections/FAQ/FAQ";
import ContactUs from "./ContactUs";
import HelpCategories from "./HelpCategories/HelpCategories";

const CommunitySupport = () => {
  return (
    <div>
      <HelpCategories></HelpCategories>
      <ContactUs></ContactUs>
      <FAQ></FAQ>
    </div>
  );
};

export default CommunitySupport;