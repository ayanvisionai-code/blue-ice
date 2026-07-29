import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, FireIcon, LeafIcon, HomeIcon, StarIcon } from './Icons';

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

export function HomeExperiencesTeaser() {
  const teaserMoments = [
    {
      icon: <SunIcon size={22} color="var(--amber-light)" />,
      title: 'Sunrise Above Clouds',
      desc: 'Watch gold light pour over Kanchenjunga from your private verandah with hot Darjeeling tea.',
    },
    {
      icon: <FireIcon size={22} color="var(--amber-light)" />,
      title: 'Bonfire Evenings',
      desc: 'Gather around a wood fire under a sky blazing with stars as valley mist rolls in.',
    },
    {
      icon: <LeafIcon size={22} color="var(--amber-light)" />,
      title: 'Tea Garden Walks',
      desc: 'Stroll through misty terraced slopes and breathe air scented with pine and fresh tea leaves.',
    },
  ];

  return (
    <section className="home-exp-teaser-section">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Mountain Life</p>
          <h2 className="section-heading">
            Unforgettable <em>Moments</em>
          </h2>
          <p className="section-sub">Every hour in Lower Burmaik carries its own quiet magic.</p>
        </div>

        <div className="het-grid" data-reveal="fade-up">
          {teaserMoments.map((m, i) => (
            <div key={i} className="het-card">
              <div className="het-icon-wrap">{m.icon}</div>
              <h3 className="het-title">{m.title}</h3>
              <p className="het-desc">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/experiences" className="btn-warm">
            View All Experiences &amp; Treks &rarr;
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
