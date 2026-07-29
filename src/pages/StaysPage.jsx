import React from 'react';
import FeaturedStay from '../components/FeaturedStay';
import FinalCTA from '../components/FinalCTA';

export default function StaysPage() {
  return (
    <div className="page-stays page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Lakhey Lachen Homestay</p>
          <h1 className="banner-heading">Our Stay Collection</h1>
          <p className="banner-sub">
            Handcrafted mountain suites designed with local cedar wood, warm fireplaces, and unfiltered vistas of the Kanchenjunga range.
          </p>
        </div>
      </div>

      <FeaturedStay />
      <FinalCTA />
    </div>
  );
}
