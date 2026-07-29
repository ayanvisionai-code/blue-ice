import React from 'react';
import Hero from '../components/Hero';
import { 
  HomeWelcomeTeaser, 
  HomeExperiencesTeaser,
  HomeStaysTeaser, 
  HomeWhyTeaser 
} from '../components/HomeTeasers';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <HomeWelcomeTeaser />
      <HomeExperiencesTeaser />
      <HomeStaysTeaser />
      <HomeWhyTeaser />
      <FinalCTA />
    </div>
  );
}
