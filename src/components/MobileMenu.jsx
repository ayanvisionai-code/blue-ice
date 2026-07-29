import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MobileMenu({ onClose }) {
  const links = [
    { to: '/', num: '01', label: 'Home', sub: 'Welcome & Overview', end: true },
    { to: '/stays', num: '02', label: 'Stay Collection', sub: 'Suites & Accommodations' },
    { to: '/experiences', num: '03', label: 'Himalayan Experiences', sub: 'Moments & Excursions' },
    { to: '/story', num: '04', label: 'Our Story & Legacy', sub: 'Heritage & Gallery' },
    { to: '/contact', num: '05', label: 'Contact & Reservations', sub: 'Direct Booking' },
  ];

  return (
    <div className="mobile-menu open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      {/* Frosted dark glass overlay with warm ambient light */}
      <div className="mobile-menu-backdrop" onClick={onClose}></div>
      <div className="mobile-menu-glow" aria-hidden="true"></div>

      <div className="mobile-menu-content">
        {/* Top Header Bar */}
        <div className="mm-header">
          <div className="mm-logo">
            <span className="mml-main">Blue<span>Ice</span></span>
            <span className="mml-sub">Lakhey Lachen &middot; 3,800 ft</span>
          </div>
          <button className="mm-close-btn" aria-label="Close menu" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Navigation List */}
        <nav className="mm-nav">
          <div className="mm-nav-list">
            {links.map(({ to, num, label, sub, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `mm-nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <span className="mmn-num">{num}</span>
                <div className="mmn-text">
                  <span className="mmn-label">{label}</span>
                  <span className="mmn-sub">{sub}</span>
                </div>
                <span className="mmn-arrow">&rarr;</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Footer CTAs */}
        <div className="mm-footer">
          <Link to="/contact" className="btn-warm mm-cta" onClick={onClose}>
            Plan Your Stay &rarr;
          </Link>
          <div className="mm-trust">
            <span>Lower Burmaik</span> &middot; <span>Munsong</span> &middot; <span>Kalimpong</span>
          </div>
        </div>
      </div>
    </div>
  );
}
