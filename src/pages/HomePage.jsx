import React from 'react';
import Hero from '../components/Hero';
import { 
  HomeWelcomeTeaser, 
  HomeStaysTeaser, 
  HomeExperiencesTeaser, 
  HomeWhyTeaser 
} from '../components/HomeTeasers';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="page-home">
      <Hero />
      <HomeWelcomeTeaser />
      <HomeStaysTeaser />
      <HomeExperiencesTeaser />
      <HomeWhyTeaser />
      <FinalCTA />
    </div>
  );
}
