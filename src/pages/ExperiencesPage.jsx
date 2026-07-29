import React from 'react';
import FeaturedExperiences from '../components/FeaturedExperiences';
import FinalCTA from '../components/FinalCTA';

export default function ExperiencesPage() {
  return (
    <div className="page-experiences page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Unforgettable Horizons</p>
          <h1 className="banner-heading">Himalayan Experiences</h1>
          <p className="banner-sub">
            From sunrise tea above the cloudline to starlit bonfires and quiet tea-garden walks — immerse yourself in the living rhythm of Munsong.
          </p>
        </div>
      </div>

      <FeaturedExperiences />
      <FinalCTA />
    </div>
  );
}
