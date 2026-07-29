import React from 'react';

export default function MobileMenu({ onClose }) {
  const links = [
    { href: '#story',   label: 'Our Story' },
    { href: '#moments', label: 'Experiences' },
    { href: '#stays',   label: 'Stay Collection' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#why',     label: 'Why Blue Ice' },
  ];

  return (
    <div className="mobile-menu open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mobile-menu-bg" onClick={onClose}></div>
      <button className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>✕</button>

      <nav className="mobile-nav-links">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="mobile-nav-link" onClick={onClose}>{label}</a>
        ))}
      </nav>

      <a href="#cta" className="btn-warm mobile-cta" onClick={onClose}>Plan My Stay →</a>

      <p className="mobile-footer-note">Lakhey Lachen · Munsong · 3,800 ft</p>
    </div>
  );
}
