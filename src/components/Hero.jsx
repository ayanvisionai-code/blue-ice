import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function Hero() {
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  return (
    <section id="hero" className="hero" aria-label="Lakhey Lachen Homestay">
      <div className="hero-bg" style={{ backgroundImage: "url('images/hero_himalayan_sunrise.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-sun-glow" aria-hidden="true"></div>
      <div className="hero-mist hero-mist-1" aria-hidden="true"></div>
      <div className="hero-mist hero-mist-2" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-location">{tx.location}</p>
        <h1 className="hero-headline">
          {tx.line1}<br/>
          <em>{tx.line2}</em>
        </h1>
        <p className="hero-sub">{tx.sub}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn-warm" id="btn-plan">{tx.cta1}</Link>
          <Link to="/story" className="btn-outline-warm">{tx.cta2}</Link>
        </div>
        <div className="hero-trust">
          <span><StarIcon size={14} color="var(--amber-light)" /> {tx.trust1}</span>
          <span className="ht-sep">&middot;</span>
          <span>{tx.trust2}</span>
          <span className="ht-sep">&middot;</span>
          <span>{tx.trust3}</span>
        </div>
      </div>

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
