import React from 'react';

const photos = [
  { src: 'images/hero_himalayan_sunrise.png', alt: 'Himalayan sunrise', caption: 'No alarm clock needed.' },
  { src: 'images/experience_tea_garden.png', alt: 'Tea gardens', caption: 'Tea gardens at first fog.' },
  { src: 'images/experience_bonfire.png', alt: 'Bonfire evening', caption: 'Evenings that never end.' },
  { src: 'images/experience_waterfall.png', alt: 'Hidden waterfall', caption: 'Where the mountain exhales.' },
  { src: 'images/story_mountain_path.png', alt: 'Mountain path', caption: 'Every trail leads somewhere worth it.' },
  { src: 'images/guest_hospitality_meal.png', alt: 'Homemade meal', caption: 'Cooked with love, every time.' },
];

export default function SignatureGallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="gallery-section" aria-label="Photo Gallery">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Signature Gallery</p>
          <h2 className="section-heading">
            Is It Really<br/><em>This Beautiful?</em>
          </h2>
          <p className="section-sub">Decide for yourself.</p>
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
                <span className="gi-zoom">⊕</span>
              </div>
            </button>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <a href="#cta" className="btn-warm">Book a Stay to Live It →</a>
        </div>
      </div>
    </section>
  );
}
