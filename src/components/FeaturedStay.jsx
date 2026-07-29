import React from 'react';
import { Link } from 'react-router-dom';
import { KitchenIcon, ElevationIcon, FireIcon, WifiIcon, CarIcon, TeaIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const roomMeta = [
  { id: '01', price: '\u20B93,800', tagClass: 'tag-gold', img: 'images/stay_room_suite.png' },
  { id: '02', price: '\u20B94,500', tagClass: 'tag-signature', img: 'images/room_cozy_warm.png' },
  { id: '03', price: '\u20B93,200', tagClass: 'tag-forest', img: 'images/village_valley_view.png' },
];

const amenityIcons = [
  <KitchenIcon size={20} color="var(--amber-light)" />,
  <ElevationIcon size={20} color="var(--amber-light)" />,
  <FireIcon size={20} color="var(--amber-light)" />,
  <WifiIcon size={20} color="var(--amber-light)" />,
  <CarIcon size={20} color="var(--amber-light)" />,
  <TeaIcon size={20} color="var(--amber-light)" />,
];

export default function FeaturedStay() {
  const { lang } = useLanguage();
  const tx = t[lang].featuredStay;

  return (
    <section id="stays" className="stays-section" aria-label="Stay Collection">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">{tx.eyebrow}</p>
          <h2 className="section-heading">
            {tx.h2line1} <em>{tx.h2line2}</em>
          </h2>
          <p className="section-sub">{tx.sub}</p>
        </div>

        {/* Room Cards */}
        <div className="stays-grid" data-reveal="fade-up">
          {tx.rooms.map((room, i) => (
            <article key={roomMeta[i].id} className="room-card">
              <div className="rc-img-wrap">
                <img src={roomMeta[i].img} alt={room.name} className="rc-img" loading="lazy" />
                <div className="rc-img-overlay"></div>
                <span className={`rc-tag ${roomMeta[i].tagClass}`}>{room.tag}</span>
                <span className="rc-price">{roomMeta[i].price}<small>/night</small></span>
              </div>
              <div className="rc-body">
                <div className="rc-meta">
                  <span className="rc-num">{roomMeta[i].id}</span>
                  <div className="rc-specs">
                    <span>{room.capacity}</span>
                    <span>{room.size}</span>
                  </div>
                </div>
                <h3 className="rc-name">{room.name}</h3>
                <p className="rc-desc">{room.desc}</p>
                <div className="rc-features">
                  {room.features.map((f, fi) => (
                    <span key={fi} className="rc-feature">&check; {f}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-warm rc-btn">{tx.ctaCard}</Link>
              </div>
            </article>
          ))}
        </div>

        {/* Amenities Bar */}
        <div className="amenities-bar" data-reveal="fade-up">
          <p className="amenities-title">{tx.amenitiesTitle}</p>
          <div className="amenities-row">
            {tx.amenities.map((label, i) => (
              <div key={i} className="amenity-pill">
                <span className="ap-icon">{amenityIcons[i]}</span>
                <span className="ap-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-outline-warm">{tx.ctaBottom}</Link>
        </div>
      </div>
    </section>
  );
}
