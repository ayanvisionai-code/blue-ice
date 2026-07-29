import React from 'react';
import FeaturedExperiences from '../components/FeaturedExperiences';
import FinalCTA from '../components/FinalCTA';

export default function ExperiencesPage() {
  return (
    <div className="page-experiences page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Unhurried Himalayan Life</p>
          <h1 className="banner-heading">Moments Written in Mist &amp; Light</h1>
          <p className="banner-sub">
            From sunrise tea above the cloudline to starlit wood bonfires and quiet tea-garden walks &mdash; step into the living rhythm of Lower Burmaik.
          </p>
        </div>
      </div>

      <FeaturedExperiences />
      <FinalCTA />
    </div>
  );
}
