import React, { useState } from 'react';

export default function Navbar({ onOpenMobile }) {
  return (
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Lakhey Lachen Homestay Home">
          <span className="nav-logo-mark">Blue<span>Ice</span></span>
          <span className="nav-logo-sub">Lakhey Lachen · Munsong</span>
        </a>
        <ul className="nav-links" role="list">
          <li><a href="#story"   className="nav-link">Story</a></li>
          <li><a href="#moments" className="nav-link">Experiences</a></li>
          <li><a href="#stays"   className="nav-link">Stays</a></li>
          <li><a href="#why"     className="nav-link">Why Us</a></li>
        </ul>
        <a href="#cta" className="nav-cta btn-gold" id="nav-reserve-btn">Plan My Stay</a>
        <button className="nav-hamburger" id="nav-hamburger" aria-label="Open menu" onClick={onOpenMobile}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
