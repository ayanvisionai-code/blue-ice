import React from 'react';
import { Link } from 'react-router-dom';
import { KitchenIcon, ElevationIcon, FireIcon, WifiIcon, CarIcon, TeaIcon } from './Icons';

const rooms = [
  {
    id: '01',
    name: 'Cloudline Suite',
    tag: 'Mountain View',
    tagClass: 'tag-gold',
    price: '\u20B93,800',
    capacity: '2 Guests · King Bed',
    size: '320 sq.ft',
    desc: 'Wall-to-wall windows opening to the Himalayas. Fall asleep to crickets, wake to clouds drifting past your sill.',
    features: ['Private Verandah', 'Free Breakfast', 'Heated Blanket', 'Kanchenjunga View'],
    img: 'images/stay_room_suite.png',
  },
  {
    id: '02',
    name: 'Heritage Loft',
    tag: 'Signature Stay',
    tagClass: 'tag-signature',
    price: '\u20B94,500',
    capacity: '2\u20133 Guests · Queen + Daybed',
    size: '410 sq.ft',
    desc: 'Hand-painted wooden ceilings, antique hill furniture, and a fireplace carrying the warmth of mountain winters past.',
    features: ['Fireplace', 'Handmade Woodwork', 'Verandah Lounge', 'Meals Included'],
    img: 'images/room_cozy_warm.png',
  },
  {
    id: '03',
    name: 'Forest Cottage',
    tag: 'Forest Retreat',
    tagClass: 'tag-forest',
    price: '\u20B93,200',
    capacity: '2 Guests · Double Bed',
    size: '280 sq.ft',
    desc: 'Surrounded by rhododendron trees and birdsong. Your own private corner of the Himalayan forest.',
    features: ['Forest View', 'Private Entrance', 'Hot Shower', 'Birdwatching Porch'],
    img: 'images/village_valley_view.png',
  },
];

const amenities = [
  { icon: <KitchenIcon size={20} color="var(--amber-light)" />, label: 'Home-cooked Meals' },
  { icon: <ElevationIcon size={20} color="var(--amber-light)" />, label: '3,800 ft Elevation' },
  { icon: <FireIcon size={20} color="var(--amber-light)" />, label: 'Evening Bonfire' },
  { icon: <WifiIcon size={20} color="var(--amber-light)" />, label: 'High-Speed WiFi' },
  { icon: <CarIcon size={20} color="var(--amber-light)" />, label: 'Free Pickup & Parking' },
  { icon: <TeaIcon size={20} color="var(--amber-light)" />, label: 'Daily Tea Service' },
];

export default function FeaturedStay() {
  return (
    <section id="stays" className="stays-section" aria-label="Stay Collection">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Stay Collection</p>
          <h2 className="section-heading">
            Spaces That<br/><em>Feel Like Home</em>
          </h2>
          <p className="section-sub">Handcrafted rooms with panoramic views and warm Himalayan hospitality.</p>
        </div>

        {/* Room Cards */}
        <div className="stays-grid" data-reveal="fade-up">
          {rooms.map((room) => (
            <article key={room.id} className="room-card">
              <div className="rc-img-wrap">
                <img src={room.img} alt={room.name} className="rc-img" loading="lazy" />
                <div className="rc-img-overlay"></div>
                <span className={`rc-tag ${room.tagClass}`}>{room.tag}</span>
                <span className="rc-price">{room.price}<small>/night</small></span>
              </div>
              <div className="rc-body">
                <div className="rc-meta">
                  <span className="rc-num">{room.id}</span>
                  <div className="rc-specs">
                    <span>{room.capacity}</span>
                    <span>{room.size}</span>
                  </div>
                </div>
                <h3 className="rc-name">{room.name}</h3>
                <p className="rc-desc">{room.desc}</p>
                <div className="rc-features">
                  {room.features.map((f, i) => (
                    <span key={i} className="rc-feature">&check; {f}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-warm rc-btn">Reserve This Room &rarr;</Link>
              </div>
            </article>
          ))}
        </div>

        {/* Amenities Bar */}
        <div className="amenities-bar" data-reveal="fade-up">
          <p className="amenities-title">Included in Every Stay</p>
          <div className="amenities-row">
            {amenities.map((a, i) => (
              <div key={i} className="amenity-pill">
                <span className="ap-icon">{a.icon}</span>
                <span className="ap-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-outline-warm">Check Room Availability &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
