import React from 'react';

const lightboxPhotos = [
  { src: 'images/hero_himalayan_sunrise.png', caption: 'No alarm clock needed here.' },
  { src: 'images/experience_tea_garden.png', caption: 'Tea gardens at first fog.' },
  { src: 'images/experience_bonfire.png', caption: 'Evenings that never really end.' },
  { src: 'images/experience_waterfall.png', caption: 'Where the mountain exhales.' },
  { src: 'images/story_mountain_path.png', caption: 'Every trail leads somewhere worth finding.' },
  { src: 'images/guest_hospitality_meal.png', caption: 'Cooked with love, every time.' },
];

export default function LightboxModal({ activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null) return null;
  const photo = lightboxPhotos[activeIndex] || lightboxPhotos[0];

  return (
    <div className="lightbox active" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" aria-label="Close" onClick={onClose}>✕</button>
        <button className="lightbox-prev" aria-label="Previous" onClick={onPrev}>‹</button>
        <button className="lightbox-next" aria-label="Next" onClick={onNext}>›</button>
        <img src={photo.src} alt={photo.caption} className="lightbox-img" />
        <p className="lightbox-caption">{photo.caption}</p>
        <p className="lightbox-counter">{activeIndex + 1} / {lightboxPhotos.length}</p>
      </div>
    </div>
  );
}
