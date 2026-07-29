import React from 'react';
import { Link } from 'react-router-dom';

const photos = [
  { src: 'images/hero_himalayan_sunrise.png', alt: 'Himalayan sunrise', caption: 'No alarm clocks. Just mountain light.' },
  { src: 'images/experience_tea_garden.png', alt: 'Tea gardens', caption: 'Where morning fog embraces the ridge.' },
  { src: 'images/experience_bonfire.png', alt: 'Bonfire evening', caption: 'Evenings warmed by crackling timber.' },
  { src: 'images/experience_waterfall.png', alt: 'Hidden waterfall', caption: 'Where the mountain exhales.' },
  { src: 'images/story_mountain_path.png', alt: 'Mountain path', caption: 'Trails paved with quiet reflection.' },
  { src: 'images/guest_hospitality_meal.png', alt: 'Homemade meal', caption: 'Fired by wood, served with love.' },
];

export default function SignatureGallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="gallery-section" aria-label="Photo Gallery">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Signature Gallery</p>
          <h2 className="section-heading">
            Moments Captured in<br/><em>Stillness</em>
          </h2>
          <p className="section-sub">A visual journey through Lakhey Lachen.</p>
        </div>

        <div className="gallery-grid" data-reveal="fade-up">
          {photos.map((photo, i) => (
            <button
              key={i}
              className={`gallery-item gi-${i + 1}`}
              onClick={() => onOpenLightbox(i)}
              aria-label={`View photo: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} className="gi-img" loading="lazy" />
              <div className="gi-overlay">
                <span className="gi-caption">{photo.caption}</span>
                <span className="gi-zoom">&oplus;</span>
              </div>
            </button>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-warm">Plan Your Journey &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
