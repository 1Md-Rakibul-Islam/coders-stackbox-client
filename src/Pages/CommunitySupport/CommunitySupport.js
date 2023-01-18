import React from 'react';
import ContactUs from '../Home/ConactUs/ContactUs';
import FAQ from "./subsections/FAQ/FAQ";
import HelpCategories from './subsections/HelpCategories/HelpCategories';

const CommunitySupport = () => {
  return (
    <div>
      <HelpCategories></HelpCategories>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
    </div>
  );
};

export default CommunitySupport;