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
    capacity: '2 Guests &middot; King Bed',
    size: '320 sq.ft',
    desc: 'Floor-to-ceiling glass framing the Kanchenjunga horizon. Fall asleep to mountain crickets, wake to soft clouds drifting past your windowsill.',
    features: ['Private Verandah', 'Farm Breakfast Included', 'Heated Electric Blanket', 'Unfiltered Mountain Panorama'],
    img: 'images/stay_room_suite.png',
  },
  {
    id: '02',
    name: 'Heritage Loft',
    tag: 'Signature Haven',
    tagClass: 'tag-signature',
    price: '\u20B94,500',
    capacity: '2\u20133 Guests &middot; Queen + Daybed',
    size: '410 sq.ft',
    desc: 'Reclaimed cedar woodwork, hand-loomed hill textiles, and a private stone fireplace carrying the warmth of mountain winters past.',
    features: ['Stone Fireplace', 'Handcrafted Cedar Details', 'Verandah Tea Lounge', 'All Meals Included Option'],
    img: 'images/room_cozy_warm.png',
  },
  {
    id: '03',
    name: 'Forest Cottage',
    tag: 'Rhododendron Sanctuary',
    tagClass: 'tag-forest',
    price: '\u20B93,200',
    capacity: '2 Guests &middot; Double Bed',
    size: '280 sq.ft',
    desc: 'Tucked beneath ancient rhododendron trees. A quiet, secluded corner where wild birdsong is your only morning alarm.',
    features: ['Pine Forest View', 'Private Entrance', 'Continuous Hot Water', 'Birdwatching Porch'],
    img: 'images/village_valley_view.png',
  },
];

const amenities = [
  { icon: <KitchenIcon size={20} color="var(--amber-light)" />, label: 'Home-cooked Organic Meals' },
  { icon: <ElevationIcon size={20} color="var(--amber-light)" />, label: '3,800 ft Cloudline Vistas' },
  { icon: <FireIcon size={20} color="var(--amber-light)" />, label: 'Nightly Wood Bonfire' },
  { icon: <WifiIcon size={20} color="var(--amber-light)" />, label: 'High-Speed Fiber WiFi' },
  { icon: <CarIcon size={20} color="var(--amber-light)" />, label: 'Private Airport Pickup Available' },
  { icon: <TeaIcon size={20} color="var(--amber-light)" />, label: 'Fresh Local Tea Service' },
];

export default function FeaturedStay() {
  return (
    <section id="stays" className="stays-section" aria-label="Stay Collection">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Crafted for Rest &amp; Reflection</p>
          <h2 className="section-heading">
            Sanctuaries in <em>the Clouds</em>
          </h2>
          <p className="section-sub">Thoughtfully designed mountain rooms built with natural cedar timber and genuine Himalayan warmth.</p>
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
                <Link to="/contact" className="btn-warm rc-btn">Reserve This Suite &rarr;</Link>
              </div>
            </article>
          ))}
        </div>

        {/* Amenities Bar */}
        <div className="amenities-bar" data-reveal="fade-up">
          <p className="amenities-title">Included With Every Stay</p>
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
          <Link to="/contact" className="btn-outline-warm">Check Custom Availability &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
