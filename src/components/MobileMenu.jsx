import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

const routes = ['/', '/stays', '/experiences', '/story', '/contact'];

export default function MobileMenu({ onClose }) {
  const { lang, setLang } = useLanguage();
  const tx = t[lang].mobileMenu;
  const navTx = t[lang].nav;

  const toggleLang = () => setLang(lang === 'en' ? 'bn' : 'en');

  return (
    <div className="mobile-menu open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mobile-menu-backdrop" onClick={onClose}></div>
      <div className="mobile-menu-glow" aria-hidden="true"></div>

      <div className="mobile-menu-content">
        {/* Top Header Bar */}
        <div className="mm-header">
          <div className="mm-logo">
            <span className="mml-main">Blue<span>Ice</span></span>
            <span className="mml-sub">Lakhey Lachen &middot; 3,800 ft</span>
          </div>
          <div className="mm-header-actions">
            {/* Language Toggle — prominently placed in mobile menu */}
            <button
              type="button"
              className="lang-toggle mm-lang-toggle"
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'en' ? 'Bengali' : 'English'}`}
            >
              <span className="lt-dot"></span>
              {navTx.langFull}
            </button>
            <button className="mm-close-btn" aria-label="Close menu" onClick={onClose}>
              &times;
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="mm-nav">
          <div className="mm-nav-list">
            {tx.links.map(({ label, sub }, i) => (
              <NavLink
                key={routes[i]}
                to={routes[i]}
                end={routes[i] === '/'}
                className={({ isActive }) => `mm-nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <span className="mmn-num">0{i + 1}</span>
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
            {tx.cta}
          </Link>
          <div className="mm-trust">{tx.location}</div>
        </div>
      </div>
    </div>
  );
}
