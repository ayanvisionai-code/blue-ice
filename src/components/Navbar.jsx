import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ onOpenMobile }) {
  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="Blue Ice Homestay — Home">
          <span className="nav-logo-mark">Blue<span>Ice</span></span>
          <span className="nav-logo-sub">Lakhey Lachen &middot; Munsong</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          <li><NavLink to="/"            end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink></li>
          <li><NavLink to="/stays"           className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Stays</NavLink></li>
          <li><NavLink to="/experiences"     className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Experiences</NavLink></li>
          <li><NavLink to="/story"           className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Our Story</NavLink></li>
          <li><NavLink to="/contact"         className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink></li>
        </ul>

        <Link to="/contact" className="nav-cta btn-gold" id="nav-reserve-btn">Book Your Stay</Link>

        {/* Hamburger — type="button" prevents form submission; stops propagation */}
        <button
          type="button"
          className="nav-hamburger"
          id="nav-hamburger"
          aria-label="Open navigation menu"
          aria-expanded={false}
          onClick={(e) => {
            e.stopPropagation();
            onOpenMobile();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
