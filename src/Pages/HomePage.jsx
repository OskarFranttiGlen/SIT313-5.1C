// src/Pages/HomePage.jsx
import React from 'react';
import FeaturedTutorials from '../Components/FeaturedTutorials';
import HeroImage from '../Components/HeroImage';
import NewsletterSignup
 from '../Components/NewsletterSignup';
const HomePage = () => {
  return (
    <div>
      {/* FeaturedTutorials is included here */}
      <HeroImage />
      
      <FeaturedTutorials />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;
