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
          <p className="eyebrow-warm">Lower Burmaik &middot; Munsong</p>
          <h1 className="banner-heading">Our Himalayan Story</h1>
          <p className="banner-sub">
            Learn about our family heritage, authentic hill hospitality, and why Blue Ice at 3,800 ft is a sanctuary like no other.
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
