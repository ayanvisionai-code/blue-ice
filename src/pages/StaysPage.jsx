import React from 'react';
import FeaturedStay from '../components/FeaturedStay';
import FinalCTA from '../components/FinalCTA';

export default function StaysPage() {
  return (
    <div className="page-stays page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Sanctuaries Above the Mist</p>
          <h1 className="banner-heading">Crafted for Rest &amp; Reflection</h1>
          <p className="banner-sub">
            Handcrafted cedar suites designed with natural warmth, private verandahs, and unfiltered vistas of the Kanchenjunga horizon.
          </p>
        </div>
      </div>

      <FeaturedStay />
      <FinalCTA />
    </div>
  );
}
