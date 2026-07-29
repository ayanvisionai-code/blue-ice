import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MobileMenu({ onClose }) {
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/stays', label: 'Stay Collection' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/story', label: 'Our Story' },
    { to: '/contact', label: 'Contact & Booking' },
  ];

  return (
    <div className="mobile-menu open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      {/* Background image & gradient overlay */}
      <div className="mobile-menu-bg-img" style={{ backgroundImage: "url('images/hero_himalayan_sunrise.png')" }}></div>
      <div className="mobile-menu-bg-overlay" onClick={onClose}></div>

      {/* Close button */}
      <button className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>
        <span>&times;</span>
      </button>

      {/* Brand Header */}
      <div className="mobile-brand-header">
        <span className="mbh-title">Blue<span>Ice</span></span>
        <span className="mbh-sub">Lakhey Lachen &middot; 3,800 ft</span>
      </div>

      <nav className="mobile-nav-links">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mobile-menu-footer">
        <Link to="/contact" className="btn-warm mobile-cta" onClick={onClose}>
          Plan My Stay &rarr;
        </Link>
        <p className="mobile-footer-note">Lower Burmaik &middot; Munsong &middot; Kalimpong</p>
      </div>
    </div>
  );
}
