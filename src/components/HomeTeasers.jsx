import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, FireIcon, LeafIcon, WaterIcon } from './Icons';

export function HomeWelcomeTeaser() {
  return (
    <section className="home-welcome-section">
      <div className="section-inner" data-reveal="fade-up">
        <div className="hw-grid">
          <div className="hw-text">
            <p className="eyebrow-warm">A Private Himalayan Sanctuary</p>
            <h2 className="section-heading">
              Slow Down.<br/><em>You&rsquo;ve Reached the Ridge.</em>
            </h2>
            <p className="hw-desc">
              Lower Burmaik isn&rsquo;t just a destination on a map &mdash; it&rsquo;s a feeling you carry home. Here at 3,800 feet above sea level, the clamor of city life quietly dissolves into wood-smoke, pine-scented rain, and the first golden rays spilling across the Kanchenjunga horizon.
            </p>
            <Link to="/story" className="btn-warm">
              Discover Our Full Story &rarr;
            </Link>
          </div>
          <div className="hw-image-card">
            <img src="images/village_valley_view.png" alt="Munsong Valley View" className="hw-img" loading="lazy" />
            <div className="hw-badge">
              <span>3,800 ft Elevation</span>
              <small>Lower Burmaik &middot; Kalimpong</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeExperiencesTeaser() {
  const visualMoments = [
    {
      num: '01',
      title: 'Sunrise Above the Clouds',
      desc: 'Wake before the world wakes. Watch liquid gold pour across snow-capped peaks with a piping cup of local hill tea.',
      img: 'images/experience_sunrise_tea.png',
      tag: 'Every Morning',
      icon: <SunIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '02',
      title: 'Starlit Bonfire Evenings',
      desc: 'As evening mist rolls through the pine trees, gather by a crackling timber fire beneath an unfiltered canopy of stars.',
      img: 'images/experience_bonfire.png',
      tag: 'Every Night',
      icon: <FireIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '03',
      title: 'Misty Tea Garden Trails',
      desc: 'Wander quiet terraced slopes where rain smells of wild pine and fresh tea leaves, guided only by gentle mountain breeze.',
      img: 'images/experience_tea_garden.png',
      tag: '2 km from Home',
      icon: <LeafIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '04',
      title: 'Hidden Mountain Cascades',
      desc: 'Follow secret forest paths to quiet mountain waterfalls known only to local village elders.',
      img: 'images/experience_waterfall.png',
      tag: 'Off the Trail',
      icon: <WaterIcon size={20} color="var(--amber-light)" />,
    },
  ];

  return (
    <section className="home-exp-teaser-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Life at Altitude</p>
          <h2 className="section-heading">
            Moments That <em>Stay With You</em>
          </h2>
          <p className="section-sub">Immerse yourself in the living rhythm of Lower Burmaik.</p>
        </div>

        <div className="hexp-grid" data-reveal="fade-up">
          {visualMoments.map((m, i) => (
            <article key={i} className="hexp-card">
              <div className="hexp-img-wrap">
                <img src={m.img} alt={m.title} className="hexp-img" loading="lazy" />
                <div className="hexp-overlay"></div>
                <span className="hexp-tag">{m.tag}</span>
              </div>
              <div className="hexp-body">
                <div className="hexp-meta">
                  <span className="hexp-icon">{m.icon}</span>
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
            Explore All Experiences &amp; Treks &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Signature Gallery Strip — 6 photos */
const galleryPhotos = [
  { src: 'images/hero_himalayan_sunrise.png',    alt: 'Himalayan sunrise',    caption: 'No alarm clocks. Just mountain light.' },
  { src: 'images/experience_tea_garden.png',     alt: 'Tea gardens',          caption: 'Where morning fog embraces the ridge.' },
  { src: 'images/story_mountain_path.png',       alt: 'Mountain path',        caption: 'Trails paved with quiet reflection.' },
  { src: 'images/guest_hospitality_meal.png',    alt: 'Homemade meal',        caption: 'Fired by wood, served with love.' },
  { src: 'images/timeline_stargazing.png',       alt: 'Stargazing night',     caption: 'Constellations unmarred by city lights.' },
  { src: 'images/experience_waterfall.png',      alt: 'Hidden waterfall',     caption: 'The gentle whisper of mountain streams.' },
];

export function HomeGalleryStrip() {
  return (
    <section className="home-gallery-strip-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Signature Impressions</p>
          <h2 className="section-heading">
            Glimpses of <em>Stillness</em>
          </h2>
          <p className="section-sub">A visual glimpse into our mountain homestay.</p>
        </div>

        <div className="hgs-grid" data-reveal="fade-up">
          {galleryPhotos.map((photo, i) => (
            <div key={i} className={`hgs-item hgs-${i + 1}`}>
              <img src={photo.src} alt={photo.alt} className="hgs-img" loading="lazy" />
              <div className="hgs-overlay">
                <span className="hgs-caption">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/story" className="btn-outline-warm">
            Read Our Full Story &amp; Heritage &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeWhyTeaser() {
  return (
    <section className="home-why-teaser-section">
      <div className="section-inner" data-reveal="fade-up">
        <div className="hwt-banner">
          <div className="hwt-info">
            <p className="eyebrow-warm">The Lakhey Promise</p>
            <h2>Not a Hotel. A Home That Remembers You.</h2>
            <p>100% Organic Farm Kitchen &middot; 3,800 ft Cloudline Vistas &middot; Genuine Sikkim Hospitality</p>
          </div>
          <Link to="/story" className="btn-outline-warm">
            Discover Why Guests Return &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
