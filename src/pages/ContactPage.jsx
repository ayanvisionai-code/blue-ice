import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { ZapIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function ContactPage() {
  const { lang } = useLanguage();
  const tx = t[lang].contactPage;

  return (
    <div className="page-contact page-padding-top">
      <div className="page-banner">
        <div className="page-banner-bg" style={{ backgroundImage: "url('images/village_valley_view.png')" }}></div>
        <div className="page-banner-overlay"></div>
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h1 className="banner-heading">{tx.h1}</h1>
          <p className="banner-sub">{tx.sub}</p>
        </div>
      </div>

      <section className="contact-details-section">
        <div className="section-inner">
          <div className="contact-cards-grid" data-reveal="fade-up">
            <div className="contact-card">
              <span className="cc-badge"><ZapIcon size={14} color="var(--amber-light)" /> {tx.card1badge}</span>
              <h3>{tx.card1h3}</h3>
              <p>{tx.card1p}</p>
              <a
                href="https://wa.me/919800000000?text=Hello!%20I%20would%20like%20to%20reserve%20my%20stay%20at%20Lakhey%20Lachen%20Homestay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-warm"
              >
                {tx.card1cta}
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">{tx.card2badge}</span>
              <h3>{tx.card2h3}</h3>
              <p>{tx.card2p}</p>
              <a href="tel:+919800000000" className="btn-outline-warm">
                {tx.card2cta}
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">{tx.card3badge}</span>
              <h3>{tx.card3h3}</h3>
              <p>{tx.card3p}</p>
              <a href="mailto:blueicemunsong@gmail.com" className="btn-outline-warm">
                {tx.card3cta}
              </a>
            </div>
          </div>

          <div className="location-guide-box" data-reveal="fade-up">
            <div className="lgb-header">
              <h2>{tx.locationH2}</h2>
              <p>{tx.locationSub}</p>
            </div>
            <div className="lgb-grid">
              <div className="lgb-item">
                <strong>{tx.loc1h}</strong>
                <p>{tx.loc1p}</p>
              </div>
              <div className="lgb-item">
                <strong>{tx.loc2h}</strong>
                <p>{tx.loc2p}</p>
              </div>
              <div className="lgb-item">
                <strong>{tx.loc3h}</strong>
                <p>{tx.loc3p}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
