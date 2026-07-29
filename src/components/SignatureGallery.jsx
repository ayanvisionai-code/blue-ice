import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const photoSources = [
  { src: 'images/hero_himalayan_sunrise.png', alt: 'Himalayan sunrise' },
  { src: 'images/experience_tea_garden.png', alt: 'Tea gardens' },
  { src: 'images/experience_bonfire.png', alt: 'Bonfire evening' },
  { src: 'images/experience_waterfall.png', alt: 'Hidden waterfall' },
  { src: 'images/story_mountain_path.png', alt: 'Mountain path' },
  { src: 'images/guest_hospitality_meal.png', alt: 'Homemade meal' },
];

export default function SignatureGallery({ onOpenLightbox }) {
  const { lang } = useLanguage();
  const tx = t[lang].gallery;

  return (
    <section id="gallery" className="gallery-section" aria-label="Photo Gallery">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h2 className="section-heading">
            {tx.h2line1}<br/><em>{tx.h2line2}</em>
          </h2>
          <p className="section-sub">{tx.sub}</p>
        </div>

        <div className="gallery-grid" data-reveal="fade-up">
          {tx.photos.map((photo, i) => (
            <button
              key={i}
              className={`gallery-item gi-${i + 1}`}
              onClick={() => onOpenLightbox(i)}
              aria-label={`View photo: ${photoSources[i].alt}`}
            >
              <img src={photoSources[i].src} alt={photoSources[i].alt} className="gi-img" loading="lazy" />
              <div className="gi-overlay">
                <span className="gi-caption">{photo.caption}</span>
                <span className="gi-zoom">&oplus;</span>
              </div>
            </button>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-warm">{tx.cta}</Link>
        </div>
      </div>
    </section>
  );
}
