import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function Introduction() {
  const { lang } = useLanguage();
  const tx = t[lang].introduction;

  return (
    <section id="story" className="story-section" aria-label="Our Story">
      <div className="section-inner">
        <div className="story-inner" data-reveal="fade-up">
          {/* Left Column: Image Frame */}
          <div className="story-img-frame">
            <img src="images/story_mountain_path.png" alt="Mountain Path in Munsong" className="story-img" loading="lazy" />
            <div className="story-badge">
              <span className="sb-num">{tx.badgeAlt}</span>
              <span className="sb-unit">{tx.badgeUnit}</span>
              <span className="sb-label">{tx.badgeLabel}</span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="story-text">
            <p className="eyebrow-warm">{tx.eyebrow}</p>
            <h2 className="story-heading">
              {tx.h2line1}<br/>
              <em>{tx.h2line2}</em>
            </h2>

            <p className="story-para story-lead">{tx.lead}</p>
            <p className="story-para">{tx.body}</p>

            <div className="story-stats-row">
              <div className="story-stat">
                <span className="stat-num">{tx.stat1}</span>
                <span className="stat-lbl">{tx.stat1Label}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="story-stat">
                <span className="stat-num">{tx.stat2}</span>
                <span className="stat-lbl">{tx.stat2Label}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="story-stat">
                <span className="stat-num">{tx.stat3}</span>
                <span className="stat-lbl">{tx.stat3Label}</span>
              </div>
            </div>

            <div className="story-action">
              <Link to="/contact" className="btn-warm">{tx.cta}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
