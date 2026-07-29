import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SunIcon, FireIcon, LeafIcon, WaterIcon, 
  TrekIcon, ViewpointIcon, MonasteryIcon, FarmIcon, StargazingIcon, KitchenIcon 
} from './Icons';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const expIcons = [
  <SunIcon size={24} color="var(--amber-light)" />,
  <FireIcon size={24} color="var(--amber-light)" />,
  <LeafIcon size={24} color="var(--amber-light)" />,
  <WaterIcon size={24} color="var(--amber-light)" />,
];

const expImages = [
  'images/experience_sunrise_tea.png',
  'images/experience_bonfire.png',
  'images/experience_tea_garden.png',
  'images/experience_waterfall.png',
];

const actIcons = [
  <TrekIcon size={20} color="var(--amber-light)" />,
  <ViewpointIcon size={20} color="var(--amber-light)" />,
  <MonasteryIcon size={20} color="var(--amber-light)" />,
  <FarmIcon size={20} color="var(--amber-light)" />,
  <StargazingIcon size={20} color="var(--amber-light)" />,
  <KitchenIcon size={20} color="var(--amber-light)" />,
];

export default function FeaturedExperiences() {
  const { lang } = useLanguage();
  const tx = t[lang].featuredExp;

  return (
    <section id="moments" className="moments-section" aria-label="Mountain Moments">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h2 className="section-heading">
            {tx.h2line1} <em>{tx.h2line2}</em>
          </h2>
          <p className="section-sub">{tx.sub}</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="moments-grid" data-reveal="fade-up">
          {tx.moments.map((m, i) => (
            <article key={i} className="moment-card">
              <div className="mc-img-wrap">
                <img src={expImages[i]} alt={m.title} className="mc-img" loading="lazy" />
                <div className="mc-img-overlay"></div>
                <span className="mc-tag">{m.tag}</span>
              </div>
              <div className="mc-body">
                <div className="mc-icon-num">
                  <span className="mc-icon">{expIcons[i]}</span>
                  <span className="mc-num">{m.num}</span>
                </div>
                <h3 className="mc-title">{m.title}</h3>
                <p className="mc-desc">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Activities Chips */}
        <div className="acts-wrap" data-reveal="fade-up">
          <p className="acts-label">{tx.actsLabel}</p>
          <div className="acts-chips">
            {tx.acts.map((a, i) => (
              <div key={i} className="act-chip">
                <span className="ac-icon">{actIcons[i]}</span>
                <div className="ac-text">
                  <strong>{a.title}</strong>
                  <span>{a.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-warm">{tx.cta}</Link>
        </div>
      </div>
    </section>
  );
}
