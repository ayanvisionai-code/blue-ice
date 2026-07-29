import React from 'react';
import { 
  SunIcon, FireIcon, LeafIcon, WaterIcon, 
  TrekIcon, ViewpointIcon, MonasteryIcon, FarmIcon, StargazingIcon, KitchenIcon 
} from './Icons';

const moments = [
  {
    icon: <SunIcon size={24} color="var(--amber-light)" />,
    num: '01',
    title: 'Sunrise Above the Clouds',
    desc: 'Wake before the world stirs. Watch gold pour over the Kanchenjunga range from your private verandah. A cup of Darjeeling tea in hand.',
    img: 'images/experience_sunrise_tea.png',
    tag: 'Every Morning',
  },
  {
    icon: <FireIcon size={24} color="var(--amber-light)" />,
    num: '02',
    title: 'Bonfire Evenings',
    desc: 'As the valley fills with night mist, gather around a wood fire under a sky blazing with stars. No city lights for 80 kilometres.',
    img: 'images/experience_bonfire.png',
    tag: 'Every Night',
  },
  {
    icon: <LeafIcon size={24} color="var(--amber-light)" />,
    num: '03',
    title: 'Tea Garden Walks',
    desc: "Walk the misty terraced slopes of Munsong's tea gardens. Pick fresh leaves. Breathe air that tastes like green hills and rain.",
    img: 'images/experience_tea_garden.png',
    tag: '2 km from Home',
  },
  {
    icon: <WaterIcon size={24} color="var(--amber-light)" />,
    num: '04',
    title: 'Hidden Waterfalls',
    desc: 'Follow secret trails to gorges the maps have never named. Hidden cascades where the mountain breathes and time slows down.',
    img: 'images/experience_waterfall.png',
    tag: 'Off the Trail',
  },
];

const quickActs = [
  { icon: <TrekIcon size={20} color="var(--amber-light)" />, title: 'Forest Treks', detail: '1.5 hrs · 2 km' },
  { icon: <ViewpointIcon size={20} color="var(--amber-light)" />, title: 'Teesta Viewpoint', detail: '20 min drive' },
  { icon: <MonasteryIcon size={20} color="var(--amber-light)" />, title: 'Monastery Visit', detail: '30 min drive' },
  { icon: <FarmIcon size={20} color="var(--amber-light)" />, title: 'Organic Farm', detail: 'In Homestay' },
  { icon: <StargazingIcon size={20} color="var(--amber-light)" />, title: 'Stargazing', detail: 'Every Clear Night' },
  { icon: <KitchenIcon size={20} color="var(--amber-light)" />, title: 'Mountain Kitchen', detail: 'Daily · Home-cooked' },
];

export default function FeaturedExperiences() {
  return (
    <section id="moments" className="moments-section" aria-label="Mountain Moments">
      <div className="section-inner">
        {/* Header */}
        <div className="section-header" data-reveal="fade-up">
          <p className="eyebrow-warm">Mountain Moments</p>
          <h2 className="section-heading">
            What Will You<br/><em>Feel Here?</em>
          </h2>
          <p className="section-sub">Every hour in Lower Burmaik carries its own magic.</p>
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
          <p className="acts-label">Also at Lakhey Lachen</p>
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
          <a href="#cta" className="btn-warm">Plan Your Experience &rarr;</a>
        </div>
      </div>
    </section>
  );
}
