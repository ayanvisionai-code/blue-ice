import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import StaysPage from './pages/StaysPage';
import ExperiencesPage from './pages/ExperiencesPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  /* ── Navbar shrink on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Scroll Reveal Observer ── */
  useEffect(() => {
    const triggerObserver = () => {
      const els = document.querySelectorAll('[data-reveal]');
      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const children = entry.target.querySelectorAll(
                '.moment-card, .room-card, .why-card, .act-chip, .gallery-item, .amenity-pill, .contact-card'
              );
              if (children.length > 0) {
                children.forEach((child, i) => {
                  setTimeout(() => {
                    child.style.opacity   = '1';
                    child.style.transform = 'translateY(0)';
                  }, i * 80);
                });
              }
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      );

      els.forEach((el) => observer.observe(el));
    };

    const timer = setTimeout(triggerObserver, 100);
    return () => clearTimeout(timer);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  /* ── Lightbox keyboard controls ── */
  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape')     setLightboxIdx(null);
      if (e.key === 'ArrowLeft')  setLightboxIdx((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setLightboxIdx((i) => Math.min(5, i + 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx]);

  return (
    <Router>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>

      <Navbar onOpenMobile={() => setMobileOpen(true)} />
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/story" element={<StoryPage onOpenLightbox={(i) => setLightboxIdx(i)} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {lightboxIdx !== null && (
        <LightboxModal
          activeIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => Math.max(0, i - 1))}
          onNext={() => setLightboxIdx((i) => Math.min(5, i + 1))}
        />
      )}
    </Router>
  );
}
