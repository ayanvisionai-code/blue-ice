import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { ZapIcon } from '../components/Icons';

export default function ContactPage() {
  return (
    <div className="page-contact page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Your Table by the Fire is Waiting</p>
          <h1 className="banner-heading">Reserve Your Sanctuary</h1>
          <p className="banner-sub">
            We host only a few guests at a time to preserve the peace, warmth, and intimacy of a true family home. Reach out directly to plan your dates with us.
          </p>
        </div>
      </div>

      <section className="contact-details-section">
        <div className="section-inner">
          <div className="contact-cards-grid" data-reveal="fade-up">
            <div className="contact-card">
              <span className="cc-badge"><ZapIcon size={14} color="var(--amber-light)" /> Instant Host Chat</span>
              <h3>WhatsApp Booking</h3>
              <p>Chat directly with your hosts for instant room confirmation, personalized meal preferences, and hill travel advice.</p>
              <a
                href="https://wa.me/919800000000?text=Hello!%20I%20would%20like%20to%20reserve%20my%20stay%20at%20Lakhey%20Lachen%20Homestay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-warm"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">Direct Line</span>
              <h3>Speak With Us</h3>
              <p>Prefer a voice call? Reach us between 8:00 AM and 8:00 PM IST for any questions before you travel.</p>
              <a href="tel:+919800000000" className="btn-outline-warm">
                Call +91 98000 00000
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">Email Inquiry</span>
              <h3>Custom Inquiries</h3>
              <p>For extended work-from-mountains stays, family reunions, or custom retreat bookings, drop us an email.</p>
              <a href="mailto:blueicemunsong@gmail.com" className="btn-outline-warm">
                Send Email &rarr;
              </a>
            </div>
          </div>

          <div className="location-guide-box" data-reveal="fade-up">
            <div className="lgb-header">
              <h2>Finding Lower Burmaik, Munsong</h2>
              <p>Nestled 3,800 feet high in the quiet green hills of Kalimpong district.</p>
            </div>
            <div className="lgb-grid">
              <div className="lgb-item">
                <strong>By Air &mdash; Bagdogra Airport (IXB)</strong>
                <p>Approx. 85 km / 3 hours scenic drive through the Teesta River valley.</p>
              </div>
              <div className="lgb-item">
                <strong>By Rail &mdash; NJP Station</strong>
                <p>Approx. 80 km / 2.5–3 hours drive via Sevoke Bridge &amp; Kalimpong route.</p>
              </div>
              <div className="lgb-item">
                <strong>Private Homestay Transfer</strong>
                <p>We arrange private pre-booked cabs directly from NJP or Bagdogra straight to our doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
