import React from 'react';
import Introduction from '../components/Introduction';
import SignatureGallery from '../components/SignatureGallery';
import WhyBlueIce from '../components/WhyBlueIce';
import FinalCTA from '../components/FinalCTA';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function StoryPage({ onOpenLightbox }) {
  const { lang } = useLanguage();
  const tx = t[lang].storyPage;

  return (
    <div className="page-story page-padding-top">
      <div className="page-banner">
        <div className="page-banner-bg" style={{ backgroundImage: "url('images/story_mountain_path.png')" }}></div>
        <div className="page-banner-overlay"></div>
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h1 className="banner-heading">{tx.h1}</h1>
          <p className="banner-sub">{tx.sub}</p>
        </div>
      </div>

      <Introduction />
      <SignatureGallery onOpenLightbox={onOpenLightbox} />
      <WhyBlueIce />
      <FinalCTA />
    </div>
  );
}
