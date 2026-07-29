import React from 'react';
import FeaturedExperiences from '../components/FeaturedExperiences';
import FinalCTA from '../components/FinalCTA';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function ExperiencesPage() {
  const { lang } = useLanguage();
  const tx = t[lang].expPage;

  return (
    <div className="page-experiences page-padding-top">
      <div className="page-banner">
        <div className="page-banner-bg" style={{ backgroundImage: "url('images/experience_tea_garden.png')" }}></div>
        <div className="page-banner-overlay"></div>
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h1 className="banner-heading">{tx.h1}</h1>
          <p className="banner-sub">{tx.sub}</p>
        </div>
      </div>

      <FeaturedExperiences />
      <FinalCTA />
    </div>
  );
}
