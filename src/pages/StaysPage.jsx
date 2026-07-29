import React from 'react';
import FeaturedStay from '../components/FeaturedStay';
import FinalCTA from '../components/FinalCTA';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function StaysPage() {
  const { lang } = useLanguage();
  const tx = t[lang].staysPage;

  return (
    <div className="page-stays page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h1 className="banner-heading">{tx.h1}</h1>
          <p className="banner-sub">{tx.sub}</p>
        </div>
      </div>

      <FeaturedStay />
      <FinalCTA />
    </div>
  );
}
