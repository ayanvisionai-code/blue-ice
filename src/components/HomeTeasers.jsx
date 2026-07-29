import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, FireIcon, LeafIcon, WaterIcon, StarIcon } from './Icons';

export function HomeWelcomeTeaser() {
  return (
    <section className="home-welcome-section">
      <div className="section-inner" data-reveal="fade-up">
        <div className="hw-grid">
          <div className="hw-text">
            <p className="eyebrow-warm">Welcome to Lakhey Lachen</p>
            <h2 className="section-heading">
              A Quiet Haven<br/><em>Above the Cloudline</em>
            </h2>
            <p className="hw-desc">
              Perched at 3,800 ft in Lower Burmaik, Munsong, our homestay is a sanctuary where time slows down. Wake up to gold light pouring over the Kanchenjunga peaks, share home-cooked meals by the hearth, and experience genuine Himalayan warmth.
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
      desc: 'Wake before the world stirs. Watch gold pour over Kanchenjunga with hot Darjeeling tea in hand.',
      img: 'images/experience_sunrise_tea.png',
      tag: 'Every Morning',
      icon: <SunIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '02',
      title: 'Bonfire Evenings',
      desc: 'As valley mist rolls in, gather around a wood fire under a sky blazing with stars.',
      img: 'images/experience_bonfire.png',
      tag: 'Every Night',
      icon: <FireIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '03',
      title: 'Tea Garden Walks',
      desc: "Stroll the terraced slopes of Munsong's tea gardens and breathe fresh pine-scented rain.",
      img: 'images/experience_tea_garden.png',
      tag: '2 km from Home',
      icon: <LeafIcon size={20} color="var(--amber-light)" />,
    },
    {
      num: '04',
      title: 'Hidden Waterfalls',
      desc: 'Follow secret forest trails to unmapped mountain gorges where cascades tumble quietly.',
      img: 'images/experience_waterfall.png',
      tag: 'Off the Trail',
      icon: <WaterIcon size={20} color="var(--amber-light)" />,
    },
  ];

  return (
    <section className="home-exp-teaser-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Himalayan Moments</p>
          <h2 className="section-heading">
            What Will You <em>Feel Here?</em>
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

export function HomeStaysTeaser() {
  const teaserRooms = [
    {
      id: '01',
      name: 'Cloudline Suite',
      tag: 'Mountain View',
      price: '\u20B93,800/night',
      desc: 'Wall-to-wall windows opening to the Himalayas. Fall asleep to crickets, wake to clouds past your sill.',
      img: 'images/stay_room_suite.png',
    },
    {
      id: '02',
      name: 'Heritage Loft',
      tag: 'Signature Stay',
      price: '\u20B94,500/night',
      desc: 'Hand-painted wooden ceilings, antique hill furniture, and a cozy fireplace for cold mountain nights.',
      img: 'images/room_cozy_warm.png',
    },
  ];

  return (
    <section className="home-stays-teaser-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Accommodations</p>
          <h2 className="section-heading">
            Featured <em>Stay Collection</em>
          </h2>
          <p className="section-sub">Handcrafted rooms with panoramic views and warm hill hospitality.</p>
        </div>

        <div className="hst-grid" data-reveal="fade-up">
          {teaserRooms.map((room) => (
            <article key={room.id} className="hst-card">
              <div className="hst-img-wrap">
                <img src={room.img} alt={room.name} className="hst-img" loading="lazy" />
                <span className="hst-tag">{room.tag}</span>
                <span className="hst-price">{room.price}</span>
              </div>
              <div className="hst-body">
                <h3 className="hst-title">{room.name}</h3>
                <p className="hst-desc">{room.desc}</p>
                <Link to="/stays" className="hst-link">
                  View Room Details &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/stays" className="btn-outline-warm">
            Explore All Rooms &amp; Rates &rarr;
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
            <p className="eyebrow-warm">Why Choose Us</p>
            <h2>Authentic Himalayan Hospitality</h2>
            <p>100% Organic Farm Meals &middot; 3,800 ft Cloudline Vistas &middot; 4.9 Guest Rating</p>
          </div>
          <Link to="/story" className="btn-outline-warm">
            Learn Why Guests Love Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
