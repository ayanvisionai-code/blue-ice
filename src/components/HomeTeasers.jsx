import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, FireIcon, LeafIcon, WaterIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const expIcons = [
  <SunIcon size={20} color="var(--amber-light)" />,
  <FireIcon size={20} color="var(--amber-light)" />,
  <LeafIcon size={20} color="var(--amber-light)" />,
  <WaterIcon size={20} color="var(--amber-light)" />,
];

const expImages = [
  'images/experience_sunrise_tea.png',
  'images/experience_bonfire.png',
  'images/experience_tea_garden.png',
  'images/experience_waterfall.png',
];

const galleryImages = [
  'images/hero_himalayan_sunrise.png',
  'images/experience_tea_garden.png',
  'images/story_mountain_path.png',
  'images/guest_hospitality_meal.png',
  'images/timeline_stargazing.png',
  'images/experience_waterfall.png',
];

export function HomeWelcomeTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].welcome;

  return (
    <section className="home-welcome-section">
      <div className="section-inner" data-reveal="fade-up">
        <div className="hw-grid">
          <div className="hw-text">
            <p className="eyebrow-warm">{tx.eyebrow}</p>
            <h2 className="section-heading">
              {tx.h2line1}<br/><em>{tx.h2line2}</em>
            </h2>
            <p className="hw-desc">{tx.desc}</p>
            <Link to="/story" className="btn-warm">
              {tx.cta}
            </Link>
          </div>
          <div className="hw-image-card">
            <img src="images/village_valley_view.png" alt="Munsong Valley View" className="hw-img" loading="lazy" />
            <div className="hw-badge">
              <span>{tx.badge}</span>
              <small>{tx.badgeSub}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeExperiencesTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].expTeaser;

  return (
    <section className="home-exp-teaser-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h2 className="section-heading">
            {tx.h2line1} <em>{tx.h2line2}</em>
          </h2>
          <p className="section-sub">{tx.sub}</p>
        </div>

        <div className="hexp-grid" data-reveal="fade-up">
          {tx.moments.map((m, i) => (
            <article key={i} className="hexp-card">
              <div className="hexp-img-wrap">
                <img src={expImages[i]} alt={m.title} className="hexp-img" loading="lazy" />
                <div className="hexp-overlay"></div>
                <span className="hexp-tag">{m.tag}</span>
              </div>
              <div className="hexp-body">
                <div className="hexp-meta">
                  <span className="hexp-icon">{expIcons[i]}</span>
                  <span className="hexp-num">{m.num}</span>
                </div>
                <h3 className="hexp-title">{m.title}</h3>
                <p className="hexp-desc">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/experiences" className="btn-warm">
            {tx.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeGalleryStrip() {
  const { lang } = useLanguage();
  const tx = t[lang].galleryStrip;

  return (
    <section className="home-gallery-strip-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h2 className="section-heading">
            {tx.h2line1} <em>{tx.h2line2}</em>
          </h2>
          <p className="section-sub">{tx.sub}</p>
        </div>

        <div className="hgs-grid" data-reveal="fade-up">
          {tx.photos.map((photo, i) => (
            <div key={i} className={`hgs-item hgs-${i + 1}`}>
              <img src={galleryImages[i]} alt={`Gallery item ${i+1}`} className="hgs-img" loading="lazy" />
              <div className="hgs-overlay">
                <span className="hgs-caption">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/story" className="btn-outline-warm">
            {tx.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeWhyTeaser() {
  const { lang } = useLanguage();
  const tx = t[lang].whyTeaser;

  return (
    <section className="home-why-teaser-section">
      <div className="section-inner" data-reveal="fade-up">
        <div className="hwt-banner">
          <div className="hwt-info">
            <p className="eyebrow-warm">{tx.eyebrow}</p>
            <h2>{tx.h2}</h2>
            <p>{tx.sub}</p>
          </div>
          <Link to="/story" className="btn-outline-warm">
            {tx.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
