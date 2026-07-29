import React from 'react';

export default function Introduction() {
  return (
    <section id="story" className="story-section" aria-label="Our Story">
      <div className="story-inner">
        <div className="story-img-col">
          <div className="story-img-frame" data-reveal="clip-up">
            <img src="images/story_mountain_path.png" alt="Morning path in Munsong" className="story-img" loading="lazy" />
            <div className="story-img-badge">
              <span className="sib-place">Lower Burmaik</span>
              <span className="sib-elev">3,800 ft · Dawn</span>
            </div>
          </div>
          <div className="story-stats-row" data-reveal="fade-up">
            <div className="story-stat">
              <span className="ss-num">4.9★</span>
              <span className="ss-label">Guest Rating</span>
            </div>
            <div className="story-stat-sep"></div>
            <div className="story-stat">
              <span className="ss-num">∞</span>
              <span className="ss-label">Horizons</span>
            </div>
            <div className="story-stat-sep"></div>
            <div className="story-stat">
              <span className="ss-num">1</span>
              <span className="ss-label">Family Home</span>
            </div>
          </div>
        </div>

        <div className="story-text-col">
          <p className="eyebrow-warm" data-reveal="fade-up">A Letter From The Mountains</p>
          <h2 className="story-heading" data-reveal="fade-up">
            We Didn't Build<br/>
            a Homestay.<br/>
            <em>We Opened Our Home.</em>
          </h2>
          <p className="story-body" data-reveal="fade-up">
            Perched above the valley mist in Lower Burmaik, Lakhey Lachen is a real family home — where mornings smell of Darjeeling tea, evenings glow with bonfire warmth, and strangers arrive only to leave as family.
          </p>
          <p className="story-body" data-reveal="fade-up">
            At 3,800 feet, you wake above the clouds. The Kanchenjunga range fills your window. This is the Himalayas before the crowds found it.
          </p>
          <p className="story-sig" data-reveal="fade-up">— The Blue Ice Family, Munsong</p>
          <a href="#cta" className="btn-warm story-cta" data-reveal="fade-up">Experience It Yourself →</a>
        </div>
      </div>
    </section>
  );
}
