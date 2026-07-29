import React from 'react';
import { HomeIcon, CloudIcon, MapIcon, StarIcon } from './Icons';

const pillars = [
  {
    num: '01',
    icon: <HomeIcon size={26} color="var(--amber-light)" />,
    title: 'Stay Like Family',
    desc: 'Not a commercial hotel. A real home — farm-grown meals from our hearth, hosts who remember your name, and warmth no resort can replicate.',
    img: 'images/guest_hospitality_meal.png',
  },
  {
    num: '02',
    icon: <CloudIcon size={26} color="var(--amber-light)" />,
    title: 'Wake Above the Clouds',
    desc: 'At 3,800 ft, Lower Burmaik sits above the valley mist. Your morning view is an unfiltered horizon stretching across Kanchenjunga.',
    img: 'images/hero_himalayan_sunrise.png',
  },
  {
    num: '03',
    icon: <MapIcon size={26} color="var(--amber-light)" />,
    title: 'The Hidden Himalayas',
    desc: 'Munsong remains untouched by crowded tourist buses. Secret waterfalls, tea garden trails, and mountain silence right outside your porch.',
    img: 'images/story_mountain_path.png',
  },
];

const stats = [
  { val: '100%', label: 'Organic Farm Kitchen' },
  { val: '3,800 ft', label: 'Cloudline Elevation' },
  { val: <span>4.9 <StarIcon size={14} color="var(--amber-light)" /></span>, label: 'Guest Hospitality Rating' },
  { val: '\u221E', label: 'Unbroken Stillness' },
];

export default function WhyBlueIce() {
  return (
    <section id="why" className="why-section" aria-label="Why Blue Ice">
      <div className="section-inner">
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Why Guests Return</p>
          <h2 className="section-heading">
            Three Pillars of<br/>Our Mountain<br/><em>Sanctuary</em>
          </h2>
        </div>

        <div className="why-grid" data-reveal="fade-up">
          {pillars.map((p) => (
            <article key={p.num} className="why-card">
              <div className="wc-img-wrap">
                <img src={p.img} alt={p.title} className="wc-img" loading="lazy" />
                <div className="wc-img-fog"></div>
              </div>
              <div className="wc-body">
                <span className="wc-num">{p.num}</span>
                <span className="wc-icon">{p.icon}</span>
                <h3 className="wc-title">{p.title}</h3>
                <p className="wc-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Stats ribbon */}
        <div className="why-stats" data-reveal="fade-up">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="ws-item">
                <span className="ws-val">{s.val}</span>
                <span className="ws-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="ws-sep" aria-hidden="true"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
