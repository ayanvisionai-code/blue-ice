import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import FeaturedExperiences from './components/FeaturedExperiences';
import FeaturedStay from './components/FeaturedStay';
import SignatureGallery from './components/SignatureGallery';
import WhyBlueIce from './components/WhyBlueIce';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState(null);
  const [navScrolled, setNavScrolled]   = useState(false);

  /* ── Navbar shrink on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 60);
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Scroll Reveal via IntersectionObserver ── */
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children inside grids
            const children = entry.target.querySelectorAll(
              '.moment-card, .room-card, .why-card, .act-chip, .gallery-item, .amenity-pill'
            );
            if (children.length > 0) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.style.opacity    = '1';
                  child.style.transform  = 'translateY(0)';
                }, i * 90);
              });
            }
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Stagger card initial state ── */
  useEffect(() => {
    const cards = document.querySelectorAll(
      '.moment-card, .room-card, .why-card, .gallery-item, .amenity-pill, .act-chip'
    );
    cards.forEach((card) => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(28px)';
      card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  /* ── Keyboard close for lightbox ── */
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
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <Navbar onOpenMobile={() => setMobileOpen(true)} />
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <main id="main-content">
        <Hero />
        <Introduction />
        <FeaturedExperiences />
        <FeaturedStay />
        <SignatureGallery onOpenLightbox={(i) => setLightboxIdx(i)} />
        <WhyBlueIce />
        <FinalCTA />
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
    </>
  );
}
