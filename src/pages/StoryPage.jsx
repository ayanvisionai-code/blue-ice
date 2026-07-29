import React from 'react';
import Introduction from '../components/Introduction';
import SignatureGallery from '../components/SignatureGallery';
import WhyBlueIce from '../components/WhyBlueIce';
import FinalCTA from '../components/FinalCTA';

export default function StoryPage({ onOpenLightbox }) {
  return (
    <div className="page-story page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Lower Burmaik &middot; Munsong &middot; 3,800 ft</p>
          <h1 className="banner-heading">Our Family Story &amp; Heritage</h1>
          <p className="banner-sub">
            For generations, our family has guarded these quiet ridges. Discover our heritage, farm-to-table kitchen, and open-hearted hill hospitality.
          </p>
        </div>
      </div>

      <Introduction />
      <SignatureGallery onOpenLightbox={onOpenLightbox} />
      <WhyBlueIce />
      <FinalCTA />
    </div>
  );
}
