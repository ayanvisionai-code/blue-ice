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
      <div className="mobile-menu-bg" onClick={onClose}></div>
      <button className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>✕</button>

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

      <Link to="/contact" className="btn-warm mobile-cta" onClick={onClose}>Plan My Stay &rarr;</Link>

      <p className="mobile-footer-note">Lakhey Lachen &middot; Munsong &middot; 3,800 ft</p>
    </div>
  );
}
