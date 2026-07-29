import React from 'react';
import FinalCTA from '../components/FinalCTA';
import { StarIcon, ZapIcon } from '../components/Icons';

export default function ContactPage() {
  return (
    <div className="page-contact page-padding-top">
      <div className="page-banner">
        <div className="banner-inner" data-reveal="fade-up">
          <p className="eyebrow-warm">Plan Your Himalayan Journey</p>
          <h1 className="banner-heading">Reserve Your Stay</h1>
          <p className="banner-sub">
            We host limited guests at a time to keep your experience intimate, peaceful, and truly personalized. Reach out to plan your stay directly with us.
          </p>
        </div>
      </div>

      <section className="contact-details-section">
        <div className="section-inner">
          <div className="contact-cards-grid" data-reveal="fade-up">
            <div className="contact-card">
              <span className="cc-badge"><ZapIcon size={14} color="var(--amber-light)" /> Fast Booking</span>
              <h3>Direct WhatsApp</h3>
              <p>Chat directly with your hosts for instant availability, custom room selection, and local travel advice.</p>
              <a
                href="https://wa.me/919800000000?text=Hello!%20I%20would%20like%20to%20plan%20my%20stay%20at%20Lakhey%20Lachen%20Homestay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-warm"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">Direct Line</span>
              <h3>Phone &amp; Call</h3>
              <p>Prefer to speak with us over a call? Give us a ring anytime between 8:00 AM and 8:00 PM IST.</p>
              <a href="tel:+919800000000" className="btn-outline-warm">
                Call +91 98000 00000
              </a>
            </div>

            <div className="contact-card">
              <span className="cc-badge">Email Us</span>
              <h3>Email Inquiry</h3>
              <p>For long-stay inquiries, corporate retreats, or special group bookings, send us an email.</p>
              <a href="mailto:blueicemunsong@gmail.com" className="btn-outline-warm">
                Send Email &rarr;
              </a>
            </div>
          </div>

          <div className="location-guide-box" data-reveal="fade-up">
            <div className="lgb-header">
              <h2>Getting to Lower Burmaik, Munsong</h2>
              <p>Nestled 3,800 ft above sea level in the quiet hills of Kalimpong district.</p>
            </div>
            <div className="lgb-grid">
              <div className="lgb-item">
                <strong>By Air (Bagdogra Airport - IXB)</strong>
                <p>Approx. 85 km / 3 hours scenic drive via Teesta River valley.</p>
              </div>
              <div className="lgb-item">
                <strong>By Train (NJP Railway Station)</strong>
                <p>Approx. 80 km / 2.5–3 hours drive via Sevoke Bridge &amp; Kalimpong route.</p>
              </div>
              <div className="lgb-item">
                <strong>Homestay Pickup Service</strong>
                <p>We arrange private pre-booked cabs directly from NJP, Bagdogra, or Siliguri to our doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
