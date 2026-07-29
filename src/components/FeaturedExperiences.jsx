import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SunIcon, FireIcon, LeafIcon, WaterIcon, 
  TrekIcon, ViewpointIcon, MonasteryIcon, FarmIcon, StargazingIcon, KitchenIcon 
} from './Icons';

const moments = [
  {
    icon: <SunIcon size={24} color="var(--amber-light)" />,
    num: '01',
    title: 'Sunrise Above the Clouds',
    desc: 'Wake before the valley stirs. Watch gold pour over the Kanchenjunga range from your private verandah with a steaming cup of fresh-brewed hill tea.',
    img: 'images/experience_sunrise_tea.png',
    tag: 'Every Morning',
  },
  {
    icon: <FireIcon size={24} color="var(--amber-light)" />,
    num: '02',
    title: 'Starlit Bonfire Evenings',
    desc: 'As night mist settles across the pine ridges, gather around a wood hearth beneath an endless sea of stars unmarred by city lights.',
    img: 'images/experience_bonfire.png',
    tag: 'Every Night',
  },
  {
    icon: <LeafIcon size={24} color="var(--amber-light)" />,
    num: '03',
    title: 'Misty Tea Garden Trails',
    desc: 'Walk the terraced slopes of Munsong’s tea gardens. Pluck fresh leaves, breathe rain-washed air, and listen to the whisper of mountain breeze.',
    img: 'images/experience_tea_garden.png',
    tag: '2 km from Home',
  },
  {
    icon: <WaterIcon size={24} color="var(--amber-light)" />,
    num: '04',
    title: 'Hidden Mountain Cascades',
    desc: 'Follow secret forest trails to secluded gorges known only to village elders — quiet spots where mountain streams tumble clear and cold.',
    img: 'images/experience_waterfall.png',
    tag: 'Off the Trail',
  },
];

const quickActs = [
  { icon: <TrekIcon size={20} color="var(--amber-light)" />, title: 'Pine Forest Treks', detail: '1.5 hrs &middot; Local trails' },
  { icon: <ViewpointIcon size={20} color="var(--amber-light)" />, title: 'Teesta River View', detail: '20 min scenic drive' },
  { icon: <MonasteryIcon size={20} color="var(--amber-light)" />, title: 'Monastery Visits', detail: '30 min drive' },
  { icon: <FarmIcon size={20} color="var(--amber-light)" />, title: 'Organic Farm Harvest', detail: 'In Homestay Garden' },
  { icon: <StargazingIcon size={20} color="var(--amber-light)" />, title: 'Night Stargazing', detail: 'Clear Sky Nights' },
  { icon: <KitchenIcon size={20} color="var(--amber-light)" />, title: 'Hearth Cooking', detail: 'Daily Home Meals' },
];

export default function FeaturedExperiences() {
  return (
    <section id="moments" className="moments-section" aria-label="Mountain Moments">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Immersive Mountain Life</p>
          <h2 className="section-heading">
            What Will You <em>Feel Here?</em>
          </h2>
          <p className="section-sub">Every hour in Lower Burmaik carries its own quiet, unhurried magic.</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="moments-grid" data-reveal="fade-up">
          {moments.map((m, i) => (
            <article key={i} className="moment-card">
              <div className="mc-img-wrap">
                <img src={m.img} alt={m.title} className="mc-img" loading="lazy" />
                <div className="mc-img-overlay"></div>
                <span className="mc-tag">{m.tag}</span>
              </div>
              <div className="mc-body">
                <div className="mc-icon-num">
                  <span className="mc-icon">{m.icon}</span>
                  <span className="mc-num">{m.num}</span>
                </div>
                <h3 className="mc-title">{m.title}</h3>
                <p className="mc-desc">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Activities Chips */}
        <div className="acts-wrap" data-reveal="fade-up">
          <p className="acts-label">Curated Activities at Lakhey Lachen</p>
          <div className="acts-chips">
            {quickActs.map((a, i) => (
              <div key={i} className="act-chip">
                <span className="ac-icon">{a.icon}</span>
                <div className="ac-text">
                  <strong>{a.title}</strong>
                  <span>{a.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta-row" data-reveal="fade-up">
          <Link to="/contact" className="btn-warm">Plan Your Himalayan Journey &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
