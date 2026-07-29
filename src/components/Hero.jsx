import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Lakhey Lachen Homestay">
      {/* Background */}
      <div className="hero-bg" style={{ backgroundImage: "url('images/hero_himalayan_sunrise.png')" }}></div>
      <div className="hero-overlay"></div>

      {/* Warm golden glow in sky */}
      <div className="hero-sun-glow" aria-hidden="true"></div>

      {/* Mist layers */}
      <div className="hero-mist hero-mist-1" aria-hidden="true"></div>
      <div className="hero-mist hero-mist-2" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-location">Lower Burmaik &middot; Munsong &middot; 3,800 ft</p>
        <h1 className="hero-headline">
          Where Mountains<br/>
          <em>Whisper</em> &amp;<br/>
          Mornings Begin.
        </h1>
        <p className="hero-sub">
          A family homestay nestled above the clouds in the hidden Himalayas of Sikkim.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn-warm" id="btn-plan">Plan My Stay</a>
          <a href="#story" className="btn-outline-warm">Discover Our Story</a>
        </div>
        <div className="hero-trust">
          <span>&#11088; 4.9 Rating</span>
          <span className="ht-sep">&middot;</span>
          <span>3,800 ft Elevation</span>
          <span className="ht-sep">&middot;</span>
          <span>Authentic Family Home</span>
        </div>
      </div>

      {/* Mountain silhouette at bottom */}
      <div className="hero-mountain" aria-hidden="true">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,260 L0,180 L120,140 L200,165 L300,100 L400,145 L500,80 L600,125 L700,70 L800,115 L900,75 L1000,120 L1100,85 L1200,130 L1300,95 L1380,125 L1440,105 L1440,260 Z" fill="rgba(10,8,5,0.9)"/>
          <path d="M0,260 L0,220 L160,200 L320,218 L480,195 L640,215 L800,198 L960,218 L1120,202 L1280,220 L1440,208 L1440,260 Z" fill="rgba(6,5,3,1)"/>
        </svg>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-dot"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
