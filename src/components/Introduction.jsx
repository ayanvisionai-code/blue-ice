import React from 'react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section id="story" className="story-section" aria-label="Our Story">
      <div className="section-inner">
        <div className="story-inner" data-reveal="fade-up">
          {/* Left Column: Image Frame */}
          <div className="story-img-frame">
            <img src="images/story_mountain_path.png" alt="Mountain Path in Munsong" className="story-img" loading="lazy" />
            <div className="story-badge">
              <span className="sb-num">3,800</span>
              <span className="sb-unit">FT</span>
              <span className="sb-label">Lower Burmaik &middot; Munsong</span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="story-text">
            <p className="eyebrow-warm">The Lakhey Heritage</p>
            <h2 className="story-heading">
              More Than a Stay.<br/>
              <em>A Himalayan Home.</em>
            </h2>

            <p className="story-para story-lead">
              For generations, our family has called these mist-wrapped ridges home. We built Blue Ice not as a commercial resort, but as an open-hearted hearth for travelers seeking authentic Sikkim warmth.
            </p>

            <p className="story-para">
              Here, meals are prepared with vegetables picked fresh from our own organic terrace farm. Conversations unfold over wood-fired tea, and your hosts remember your name, your preferences, and your stories.
            </p>

            <div className="story-stats-row">
              <div className="story-stat">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Organic Farm Kitchen</span>
              </div>
              <div className="stat-divider"></div>
              <div className="story-stat">
                <span className="stat-num">4.9&starf;</span>
                <span className="stat-lbl">Guest Hospitality Rating</span>
              </div>
              <div className="stat-divider"></div>
              <div className="story-stat">
                <span className="stat-num">0</span>
                <span className="stat-lbl">City Noise &amp; Traffic</span>
              </div>
            </div>

            <div className="story-action">
              <Link to="/contact" className="btn-warm">Plan Your Journey &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
