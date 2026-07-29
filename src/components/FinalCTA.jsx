import React from 'react';
import { StarIcon, ZapIcon } from './Icons';

export default function FinalCTA() {
  return (
    <section id="cta" className="cta-section" aria-label="Book Your Stay">
      <div className="cta-bg" style={{ backgroundImage: "url('images/hero_himalayan_sunrise.png')" }}></div>
      <div className="cta-overlay"></div>

      <div className="cta-inner" data-reveal="fade-up">
        <p className="eyebrow-gold">Your Mountain Escape Awaits</p>
        <h2 className="cta-heading">
          Ready to Step Above<br/>
          <em>the Clouds?</em>
        </h2>
        <p className="cta-sub">
          Reserve your suite directly with your hosts. No middlemen, no automated portals &mdash; just personal Sikkim warmth from the moment you inquire.
        </p>

        <div className="cta-actions">
          <a
            href="https://wa.me/919800000000?text=Hello!%20I%20would%20like%20to%20reserve%20a%20stay%20at%20Lakhey%20Lachen%20Homestay."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-big"
          >
            <ZapIcon size={18} color="var(--ink)" />
            Reserve via WhatsApp
          </a>

          <div className="cta-alt-actions">
            <a href="tel:+919800000000" className="btn-outline-warm">
              Call Host +91 98000 00000
            </a>
          </div>
        </div>

        <div className="cta-trust">
          <span><StarIcon size={13} color="var(--amber-light)" /> Instant Availability Check</span>
          <span className="ct-dot">&middot;</span>
          <span>100% Home-Cooked Meals</span>
          <span className="ct-dot">&middot;</span>
          <span>Free Cancellation Option</span>
        </div>
      </div>
    </section>
  );
}
