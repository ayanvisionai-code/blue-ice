import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import FeaturedStay from '../components/FeaturedStay';
import FeaturedExperiences from '../components/FeaturedExperiences';
import WhyBlueIce from '../components/WhyBlueIce';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <Introduction />
      <FeaturedStay />
      <FeaturedExperiences />
      <WhyBlueIce />
      <FinalCTA />
    </div>
  );
}
