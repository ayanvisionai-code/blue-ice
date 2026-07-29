/*
  Translations for Blue Ice — Lakhey Lachen Homestay
  Bengali copy is written for emotional resonance, not literal translation.
  It reads as original professional copywriting crafted for Bengali-speaking visitors.
*/

const t = {
  en: {
    /* ─── NAV ────────────────────────────────────────────── */
    nav: {
      home: 'Home',
      stays: 'Stays',
      experiences: 'Experiences',
      story: 'Our Story',
      contact: 'Contact',
      book: 'Book Your Stay',
      langLabel: 'বাং',
      langFull: 'বাংলা',
    },

    /* ─── HERO ───────────────────────────────────────────── */
    hero: {
      location: 'Lower Burmaik · Munsong · 3,800 ft',
      line1: 'Where the Clouds Rest',
      line2: '& Your Soul Breathes.',
      sub: 'Perched at 3,800 feet in Munsong. A private family sanctuary built on warm hearths, home-grown meals, and unfiltered mountain silence.',
      cta1: 'Reserve Your Stay',
      cta2: 'Explore Our Story',
      trust1: '4.9 Guest Rating',
      trust2: '3,800 ft Cloudline',
      trust3: 'Authentic Family Home',
    },

    /* ─── HOME: WELCOME TEASER ───────────────────────────── */
    welcome: {
      eyebrow: 'A Private Himalayan Sanctuary',
      h2line1: 'Slow Down.',
      h2line2: 'You\u2019ve Reached the Ridge.',
      desc: 'Lower Burmaik isn\u2019t just a destination on a map \u2014 it\u2019s a feeling you carry home. Here at 3,800 feet above sea level, the clamor of city life quietly dissolves into wood-smoke, pine-scented rain, and the first golden rays spilling across the Kanchenjunga horizon.',
      cta: 'Discover Our Full Story \u2192',
      badge: '3,800 ft Elevation',
      badgeSub: 'Lower Burmaik · Kalimpong',
    },

    /* ─── HOME: EXPERIENCES TEASER ──────────────────────── */
    expTeaser: {
      eyebrow: 'Life at Altitude',
      h2line1: 'Moments That',
      h2line2: 'Stay With You',
      sub: 'Immerse yourself in the living rhythm of Lower Burmaik.',
      cta: 'Explore All Experiences & Treks \u2192',
      moments: [
        {
          num: '01', tag: 'Every Morning',
          title: 'Sunrise Above the Clouds',
          desc: 'Wake before the valley stirs. Watch liquid gold pour across snow-capped peaks with a piping cup of local hill tea.',
        },
        {
          num: '02', tag: 'Every Night',
          title: 'Starlit Bonfire Evenings',
          desc: 'As evening mist rolls through the pine trees, gather by a crackling timber fire beneath an unfiltered canopy of stars.',
        },
        {
          num: '03', tag: '2 km from Home',
          title: 'Misty Tea Garden Trails',
          desc: 'Wander quiet terraced slopes where rain smells of wild pine and fresh tea leaves, guided only by gentle mountain breeze.',
        },
        {
          num: '04', tag: 'Off the Trail',
          title: 'Hidden Mountain Cascades',
          desc: 'Follow secret forest paths to quiet mountain waterfalls known only to local village elders.',
        },
      ],
    },

    /* ─── HOME: GALLERY STRIP ────────────────────────────── */
    galleryStrip: {
      eyebrow: 'Signature Impressions',
      h2line1: 'Glimpses of',
      h2line2: 'Stillness',
      sub: 'A visual glimpse into our mountain homestay.',
      cta: 'Read Our Full Story & Heritage \u2192',
      photos: [
        { caption: 'No alarm clocks. Just mountain light.' },
        { caption: 'Where morning fog embraces the ridge.' },
        { caption: 'Trails paved with quiet reflection.' },
        { caption: 'Fired by wood, served with love.' },
        { caption: 'Constellations unmarred by city lights.' },
        { caption: 'The gentle whisper of mountain streams.' },
      ],
    },

    /* ─── HOME: WHY TEASER ───────────────────────────────── */
    whyTeaser: {
      eyebrow: 'The Lakhey Promise',
      h2: 'Not a Hotel. A Home That Remembers You.',
      sub: '100% Organic Farm Kitchen · 3,800 ft Cloudline Vistas · Genuine Sikkim Hospitality',
      cta: 'Discover Why Guests Return \u2192',
    },

    /* ─── STAYS PAGE ─────────────────────────────────────── */
    staysPage: {
      eyebrow: 'Sanctuaries Above the Mist',
      h1: 'Crafted for Rest & Reflection',
      sub: 'Handcrafted cedar suites designed with natural warmth, private verandahs, and unfiltered vistas of the Kanchenjunga horizon.',
    },
    featuredStay: {
      eyebrow: 'Crafted for Rest & Reflection',
      h2line1: 'Sanctuaries in',
      h2line2: 'the Clouds',
      sub: 'Thoughtfully designed mountain rooms built with natural cedar timber and genuine Himalayan warmth.',
      amenitiesTitle: 'Included With Every Stay',
      ctaCard: 'Reserve This Suite \u2192',
      ctaBottom: 'Check Custom Availability \u2192',
      rooms: [
        {
          name: 'Cloudline Suite',
          tag: 'Mountain View',
          capacity: '2 Guests · King Bed',
          size: '320 sq.ft',
          desc: 'Floor-to-ceiling glass framing the Kanchenjunga horizon. Fall asleep to mountain crickets, wake to soft clouds drifting past your windowsill.',
          features: ['Private Verandah', 'Farm Breakfast Included', 'Heated Electric Blanket', 'Unfiltered Mountain Panorama'],
        },
        {
          name: 'Heritage Loft',
          tag: 'Signature Haven',
          capacity: '2–3 Guests · Queen + Daybed',
          size: '410 sq.ft',
          desc: 'Reclaimed cedar woodwork, hand-loomed hill textiles, and a private stone fireplace carrying the warmth of mountain winters past.',
          features: ['Stone Fireplace', 'Handcrafted Cedar Details', 'Verandah Tea Lounge', 'All Meals Included Option'],
        },
        {
          name: 'Forest Cottage',
          tag: 'Rhododendron Sanctuary',
          capacity: '2 Guests · Double Bed',
          size: '280 sq.ft',
          desc: 'Tucked beneath ancient rhododendron trees. A quiet, secluded corner where wild birdsong is your only morning alarm.',
          features: ['Pine Forest View', 'Private Entrance', 'Continuous Hot Water', 'Birdwatching Porch'],
        },
      ],
      amenities: [
        'Home-cooked Organic Meals',
        '3,800 ft Cloudline Vistas',
        'Nightly Wood Bonfire',
        'High-Speed Fiber WiFi',
        'Private Airport Pickup Available',
        'Fresh Local Tea Service',
      ],
    },

    /* ─── EXPERIENCES PAGE ───────────────────────────────── */
    expPage: {
      eyebrow: 'Unhurried Himalayan Life',
      h1: 'Moments Written in Mist & Light',
      sub: 'From sunrise tea above the cloudline to starlit wood bonfires and quiet tea-garden walks \u2014 step into the living rhythm of Lower Burmaik.',
    },
    featuredExp: {
      eyebrow: 'Immersive Mountain Life',
      h2line1: 'What Will You',
      h2line2: 'Feel Here?',
      sub: 'Every hour in Lower Burmaik carries its own quiet, unhurried magic.',
      actsLabel: 'Curated Activities at Lakhey Lachen',
      cta: 'Plan Your Himalayan Journey \u2192',
      moments: [
        {
          num: '01', tag: 'Every Morning',
          title: 'Sunrise Above the Clouds',
          desc: 'Wake before the valley stirs. Watch gold pour over the Kanchenjunga range from your private verandah with a steaming cup of fresh-brewed hill tea.',
        },
        {
          num: '02', tag: 'Every Night',
          title: 'Starlit Bonfire Evenings',
          desc: 'As night mist settles across the pine ridges, gather around a wood hearth beneath an endless sea of stars unmarred by city lights.',
        },
        {
          num: '03', tag: '2 km from Home',
          title: 'Misty Tea Garden Trails',
          desc: 'Walk the terraced slopes of Munsong\u2019s tea gardens. Pluck fresh leaves, breathe rain-washed air, and listen to the whisper of mountain breeze.',
        },
        {
          num: '04', tag: 'Off the Trail',
          title: 'Hidden Mountain Cascades',
          desc: 'Follow secret forest trails to secluded gorges known only to village elders \u2014 quiet spots where mountain streams tumble clear and cold.',
        },
      ],
      acts: [
        { title: 'Pine Forest Treks', detail: '1.5 hrs · Local trails' },
        { title: 'Teesta River View', detail: '20 min scenic drive' },
        { title: 'Monastery Visits', detail: '30 min drive' },
        { title: 'Organic Farm Harvest', detail: 'In Homestay Garden' },
        { title: 'Night Stargazing', detail: 'Clear Sky Nights' },
        { title: 'Hearth Cooking', detail: 'Daily Home Meals' },
      ],
    },

    /* ─── STORY PAGE ─────────────────────────────────────── */
    storyPage: {
      eyebrow: 'Lower Burmaik · Munsong · 3,800 ft',
      h1: 'Our Family Story & Heritage',
      sub: 'For generations, our family has guarded these quiet ridges. Discover our heritage, farm-to-table kitchen, and open-hearted hill hospitality.',
    },
    introduction: {
      eyebrow: 'The Lakhey Heritage',
      h2line1: 'More Than a Stay.',
      h2line2: 'A Himalayan Home.',
      lead: 'For generations, our family has called these mist-wrapped ridges home. We built Blue Ice not as a commercial resort, but as an open-hearted hearth for travelers seeking authentic Sikkim warmth.',
      body: 'Here, meals are prepared with vegetables picked fresh from our own organic terrace farm. Conversations unfold over wood-fired tea, and your hosts remember your name, your preferences, and your stories.',
      stat1: '100%', stat1Label: 'Organic Farm Kitchen',
      stat2: '4.9★', stat2Label: 'Guest Hospitality Rating',
      stat3: '0', stat3Label: 'City Noise & Traffic',
      cta: 'Plan Your Journey \u2192',
      badgeAlt: '3,800', badgeUnit: 'FT',
      badgeLabel: 'Lower Burmaik · Munsong',
    },
    gallery: {
      eyebrow: 'Signature Gallery',
      h2line1: 'Moments Captured in',
      h2line2: 'Stillness',
      sub: 'A visual journey through Lakhey Lachen.',
      cta: 'Plan Your Journey \u2192',
      photos: [
        { caption: 'No alarm clocks. Just mountain light.' },
        { caption: 'Where morning fog embraces the ridge.' },
        { caption: 'Evenings warmed by crackling timber.' },
        { caption: 'Where the mountain exhales.' },
        { caption: 'Trails paved with quiet reflection.' },
        { caption: 'Fired by wood, served with love.' },
      ],
    },
    whyBlueIce: {
      eyebrow: 'Why Guests Return',
      h2line1: 'Three Pillars of',
      h2line2: 'Our Mountain',
      h2line3: 'Sanctuary',
      stat1: '100%', stat1Label: 'Organic Farm Kitchen',
      stat2: '3,800 ft', stat2Label: 'Cloudline Elevation',
      stat3: '4.9', stat3Label: 'Guest Hospitality Rating',
      stat4: '\u221E', stat4Label: 'Unbroken Stillness',
      pillars: [
        {
          title: 'Stay Like Family',
          desc: 'Not a commercial hotel. A real home \u2014 farm-grown meals from our hearth, hosts who remember your name, and warmth no resort can replicate.',
        },
        {
          title: 'Wake Above the Clouds',
          desc: 'At 3,800 ft, Lower Burmaik sits above the valley mist. Your morning view is an unfiltered horizon stretching across Kanchenjunga.',
        },
        {
          title: 'The Hidden Himalayas',
          desc: 'Munsong remains untouched by crowded tourist buses. Secret waterfalls, tea garden trails, and mountain silence right outside your porch.',
        },
      ],
    },

    /* ─── CONTACT PAGE ───────────────────────────────────── */
    contactPage: {
      eyebrow: 'Your Table by the Fire is Waiting',
      h1: 'Reserve Your Sanctuary',
      sub: 'We host only a few guests at a time to preserve the peace, warmth, and intimacy of a true family home. Reach out directly to plan your dates with us.',
      card1badge: 'Instant Host Chat',
      card1h3: 'WhatsApp Booking',
      card1p: 'Chat directly with your hosts for instant room confirmation, personalized meal preferences, and hill travel advice.',
      card1cta: 'Chat on WhatsApp \u2192',
      card2badge: 'Direct Line',
      card2h3: 'Speak With Us',
      card2p: 'Prefer a voice call? Reach us between 8:00 AM and 8:00 PM IST for any questions before you travel.',
      card2cta: 'Call +91 98000 00000',
      card3badge: 'Email Inquiry',
      card3h3: 'Custom Inquiries',
      card3p: 'For extended work-from-mountains stays, family reunions, or custom retreat bookings, drop us an email.',
      card3cta: 'Send Email \u2192',
      locationH2: 'Finding Lower Burmaik, Munsong',
      locationSub: 'Nestled 3,800 feet high in the quiet green hills of Kalimpong district.',
      loc1h: 'By Air \u2014 Bagdogra Airport (IXB)',
      loc1p: 'Approx. 85 km / 3 hours scenic drive through the Teesta River valley.',
      loc2h: 'By Rail \u2014 NJP Station',
      loc2p: 'Approx. 80 km / 2.5\u20133 hours drive via Sevoke Bridge & Kalimpong route.',
      loc3h: 'Private Homestay Transfer',
      loc3p: 'We arrange private pre-booked cabs directly from NJP or Bagdogra straight to our doorstep.',
    },

    /* ─── FINAL CTA ──────────────────────────────────────── */
    finalCta: {
      eyebrow: 'Your Mountain Escape Awaits',
      h2line1: 'Ready to Step Above',
      h2line2: 'the Clouds?',
      sub: 'Reserve your suite directly with your hosts. No middlemen, no automated portals \u2014 just personal Sikkim warmth from the moment you inquire.',
      cta1: 'Reserve via WhatsApp',
      cta2: 'Call Host +91 98000 00000',
      trust1: 'Instant Availability Check',
      trust2: '100% Home-Cooked Meals',
      trust3: 'Free Cancellation Option',
    },

    /* ─── FOOTER ─────────────────────────────────────────── */
    footer: {
      tagline: 'A family home in Lower Burmaik, Munsong, Kalimpong \u2014 where strangers become family.',
      colExplore: 'Explore',
      colContact: 'Contact',
      linkHome: 'Home',
      linkStays: 'Stay Collection',
      linkExp: 'Experiences',
      linkStory: 'Our Story',
      linkContact: 'Contact & Book',
      linkWhatsApp: 'Reserve via WhatsApp',
      copyright: '\u00A9 2025 Lakhey Lachen Homestay by Blue Ice · All Rights Reserved',
      madeWith: 'Crafted with',
      madeIn: 'in the Himalayas',
    },

    /* ─── MOBILE MENU ────────────────────────────────────── */
    mobileMenu: {
      links: [
        { label: 'Home', sub: 'Welcome & Overview' },
        { label: 'Stay Collection', sub: 'Suites & Accommodations' },
        { label: 'Himalayan Experiences', sub: 'Moments & Excursions' },
        { label: 'Our Story & Legacy', sub: 'Heritage & Gallery' },
        { label: 'Contact & Reservations', sub: 'Direct Booking' },
      ],
      cta: 'Plan Your Stay \u2192',
      location: 'Lower Burmaik · Munsong · Kalimpong',
    },
  },

  /* ════════════════════════════════════════════════════════
     BENGALI — Written as original professional copywriting,
     emotionally resonant for Bengali-speaking visitors.
     ════════════════════════════════════════════════════════ */
  bn: {
    /* ─── NAV ────────────────────────────────────────────── */
    nav: {
      home: 'হোম',
      stays: 'থাকার ব্যবস্থা',
      experiences: 'অভিজ্ঞতা',
      story: 'আমাদের গল্প',
      contact: 'যোগাযোগ',
      book: 'আপনার থাকা বুক করুন',
      langLabel: 'EN',
      langFull: 'English',
    },

    /* ─── HERO ───────────────────────────────────────────── */
    hero: {
      location: 'লোয়ার বর্মায়েক · মুনসং · ৩,৮০০ ফুট',
      line1: 'যেখানে মেঘ বিশ্রাম নেয়',
      line2: 'আর আত্মা নিঃশ্বাস ফেলে।',
      sub: 'মুনসং-এর ৩,৮০০ ফুট উচ্চতায় — পাহাড়ের নিজস্ব উষ্ণতায়, ঘরের রান্নায়, আর হিমালয়ের নিঃশব্দতায় গড়া এক পারিবারিক আশ্রয়।',
      cta1: 'আপনার থাকা নিশ্চিত করুন',
      cta2: 'আমাদের গল্প জানুন',
      trust1: '৪.৯ অতিথি রেটিং',
      trust2: '৩,৮০০ ফুট উচ্চতা',
      trust3: 'খাঁটি পারিবারিক গৃহ',
    },

    /* ─── HOME: WELCOME TEASER ───────────────────────────── */
    welcome: {
      eyebrow: 'একটি ব্যক্তিগত হিমালয়ান আশ্রয়',
      h2line1: 'একটু থামুন।',
      h2line2: 'আপনি পৌঁছে গেছেন।',
      desc: 'লোয়ার বর্মায়েক শুধু একটি গন্তব্য নয় — এটি এমন একটি অনুভূতি যা বাড়ি ফেরার পরেও মনে থেকে যায়। সমুদ্রপৃষ্ঠ থেকে ৩,৮০০ ফুট উপরে, শহরের কোলাহল মিলিয়ে যায় কাঠের ধোঁয়া, পাইনের বৃষ্টিজল আর কাঞ্চনজঙ্ঘার সোনালি প্রথম আলোয়।',
      cta: 'আমাদের সম্পূর্ণ গল্প জানুন →',
      badge: '৩,৮০০ ফুট উচ্চতা',
      badgeSub: 'লোয়ার বর্মায়েক · কালিম্পং',
    },

    /* ─── HOME: EXPERIENCES TEASER ──────────────────────── */
    expTeaser: {
      eyebrow: 'উচ্চতার জীবন',
      h2line1: 'যে মুহূর্তগুলো',
      h2line2: 'থেকে যায় মনে',
      sub: 'লোয়ার বর্মায়েকের প্রতিটি মুহূর্তে নিজেকে হারিয়ে ফেলুন।',
      cta: 'সমস্ত অভিজ্ঞতা ও ট্রেক দেখুন →',
      moments: [
        {
          num: '০১', tag: 'প্রতিটি ভোরে',
          title: 'মেঘের উপর সূর্যোদয়',
          desc: 'উপত্যকা জাগার আগেই জেগে উঠুন। পাহাড়ি চায়ের কাপ হাতে কাঞ্চনজঙ্ঘার শৃঙ্গে সোনালি আলো ঢেলে পড়া দেখুন।',
        },
        {
          num: '০২', tag: 'প্রতিটি রাতে',
          title: 'তারায় ভরা আগুনের সন্ধ্যা',
          desc: 'পাইন গাছের ভেতর দিয়ে সন্ধ্যার কুয়াশা নামলে, কাঠের আগুনের পাশে জড়ো হন — মাথার উপর অগণিত তারা।',
        },
        {
          num: '০৩', tag: 'বাড়ি থেকে ২ কিমি',
          title: 'কুয়াশায় ঢাকা চা-বাগানের পথ',
          desc: 'মুনসং-এর ধাপে ধাপে সাজানো চা-বাগানে হাঁটুন। বৃষ্টি-ধোয়া বাতাসে পাইন আর তাজা চায়ের পাতার সুবাস।',
        },
        {
          num: '০৪', tag: 'পথের বাইরে',
          title: 'গোপন পাহাড়ি ঝরনা',
          desc: 'গ্রামের বয়স্কদের চেনা গোপন বনপথ ধরে এগিয়ে যান — যেখানে পাহাড়ি ঝরনা শান্তভাবে বয়ে চলে।',
        },
      ],
    },

    /* ─── HOME: GALLERY STRIP ────────────────────────────── */
    galleryStrip: {
      eyebrow: 'বিশেষ মুহূর্তের ছবি',
      h2line1: 'নিস্তব্ধতার',
      h2line2: 'একটু আভাস',
      sub: 'আমাদের পাহাড়ি হোমস্টের এক দৃশ্যময় ঝলক।',
      cta: 'আমাদের সম্পূর্ণ গল্প ও ঐতিহ্য পড়ুন →',
      photos: [
        { caption: 'ঘড়ির অ্যালার্ম নয় — শুধু পাহাড়ের আলো।' },
        { caption: 'যেখানে সকালের কুয়াশা পাহাড়কে আলিঙ্গন করে।' },
        { caption: 'নীরব চিন্তার পথ।' },
        { caption: 'কাঠের আগুনে রান্না, ভালোবাসায় পরিবেশন।' },
        { caption: 'শহরের আলো ছাড়া আকাশভরা তারা।' },
        { caption: 'পাহাড়ি ঝরনার মৃদু ফিসফিস।' },
      ],
    },

    /* ─── HOME: WHY TEASER ───────────────────────────────── */
    whyTeaser: {
      eyebrow: 'লাখে লাচেনের প্রতিশ্রুতি',
      h2: 'শুধু হোটেল নয়। একটি ঘর — যা আপনাকে মনে রাখে।',
      sub: '১০০% জৈব খামারের রান্নাঘর · ৩,৮০০ ফুট মেঘের সৌন্দর্য · খাঁটি সিকিমি আতিথেয়তা',
      cta: 'কেন অতিথিরা ফিরে আসেন জানুন →',
    },

    /* ─── STAYS PAGE ─────────────────────────────────────── */
    staysPage: {
      eyebrow: 'কুয়াশার উপরের আশ্রয়',
      h1: 'বিশ্রাম ও নিস্তব্ধতার জন্য তৈরি',
      sub: 'প্রাকৃতিক উষ্ণতা, ব্যক্তিগত বারান্দা আর কাঞ্চনজঙ্ঘার দৃশ্য সহ হাতে তৈরি দেবদারু কাঠের স্যুট।',
    },
    featuredStay: {
      eyebrow: 'বিশ্রাম ও নিস্তব্ধতার জন্য তৈরি',
      h2line1: 'মেঘের মাঝে',
      h2line2: 'আশ্রয়',
      sub: 'প্রাকৃতিক দেবদারু কাঠ আর খাঁটি হিমালয়ের উষ্ণতায় তৈরি পাহাড়ি কক্ষ।',
      amenitiesTitle: 'প্রতিটি থাকার সাথে যা পাবেন',
      ctaCard: 'এই স্যুটটি বুক করুন →',
      ctaBottom: 'কাস্টম উপলব্ধতা দেখুন →',
      rooms: [
        {
          name: 'ক্লাউডলাইন স্যুট',
          tag: 'পাহাড়ের দৃশ্য',
          capacity: '২ অতিথি · কিং বেড',
          size: '৩২০ বর্গফুট',
          desc: 'মেঝে থেকে ছাদ পর্যন্ত কাচের ভেতর দিয়ে কাঞ্চনজঙ্ঘার দৃশ্য। পাহাড়ের ঝিঁঝিঁ পোকার শব্দে ঘুমিয়ে পড়ুন, জানালার বাইরে ভেসে যাওয়া মেঘ দেখে জেগে উঠুন।',
          features: ['ব্যক্তিগত বারান্দা', 'খামারের নাস্তা অন্তর্ভুক্ত', 'গরম বৈদ্যুতিক কম্বল', 'অবাধ পাহাড়ি দৃশ্য'],
        },
        {
          name: 'হেরিটেজ লফট',
          tag: 'বিশেষ আশ্রয়',
          capacity: '২–৩ অতিথি · কুইন + ডে-বেড',
          size: '৪১০ বর্গফুট',
          desc: 'পুনর্ব্যবহৃত দেবদারু কাঠের কাজ, হাতে বোনা পাহাড়ি কাপড় আর পাথরের আগুনকুণ্ড — যেন পুরোনো পাহাড়ি শীতের উষ্ণতা।',
          features: ['পাথরের আগুনকুণ্ড', 'হাতে তৈরি দেবদারু বিবরণ', 'বারান্দার চা-লাউঞ্জ', 'সমস্ত খাবার অন্তর্ভুক্তির বিকল্প'],
        },
        {
          name: 'ফরেস্ট কটেজ',
          tag: 'রডোডেনড্রন আশ্রয়',
          capacity: '২ অতিথি · ডাবল বেড',
          size: '২৮০ বর্গফুট',
          desc: 'পুরনো রডোডেনড্রন গাছের ছায়ায় লুকানো। একটি শান্ত, নিভৃত কোণে যেখানে বনের পাখির গান আপনার সকালের আলার্ম।',
          features: ['পাইন বনের দৃশ্য', 'ব্যক্তিগত প্রবেশদ্বার', 'অবিরাম গরম পানি', 'পাখি দেখার বারান্দা'],
        },
      ],
      amenities: [
        'জৈব হোম-কুকড খাবার',
        '৩,৮০০ ফুট মেঘরেখার দৃশ্য',
        'প্রতি রাতে কাঠের আগুন',
        'উচ্চগতির ফাইবার ইন্টারনেট',
        'ব্যক্তিগত বিমানবন্দর পিকআপ',
        'তাজা স্থানীয় চা পরিষেবা',
      ],
    },

    /* ─── EXPERIENCES PAGE ───────────────────────────────── */
    expPage: {
      eyebrow: 'ধীর হিমালয়ের জীবন',
      h1: 'কুয়াশা ও আলোয় লেখা মুহূর্তসমূহ',
      sub: 'মেঘরেখার উপরে সূর্যোদয়ের চা থেকে শুরু করে তারার আলোয় কাঠের আগুন — লোয়ার বর্মায়েকের জীবনের ছন্দে পা দিন।',
    },
    featuredExp: {
      eyebrow: 'পাহাড়ের নিমজ্জিত জীবন',
      h2line1: 'এখানে আপনি',
      h2line2: 'কী অনুভব করবেন?',
      sub: 'লোয়ার বর্মায়েকের প্রতিটি মুহূর্তে আছে নিজস্ব শান্ত, তাড়াহীন যাদু।',
      actsLabel: 'লাখে লাচেনের বিশেষ কার্যক্রম',
      cta: 'আপনার হিমালয় যাত্রা পরিকল্পনা করুন →',
      moments: [
        {
          num: '০১', tag: 'প্রতিটি ভোরে',
          title: 'মেঘের উপর সূর্যোদয়',
          desc: 'উপত্যকা জাগার আগেই জেগে উঠুন। বারান্দায় বসে গরম পাহাড়ি চায়ের কাপ হাতে কাঞ্চনজঙ্ঘায় সোনালি আলো ছড়িয়ে পড়া দেখুন।',
        },
        {
          num: '০২', tag: 'প্রতিটি রাতে',
          title: 'তারায় ভরা আগুনের সন্ধ্যা',
          desc: 'পাইন পাহাড়ে রাতের কুয়াশা নামলে কাঠের আগুনের চারপাশে বসুন — মাথার উপর শহরের আলো ছাড়া অসংখ্য তারার সমুদ্র।',
        },
        {
          num: '০৩', tag: 'বাড়ি থেকে ২ কিমি',
          title: 'কুয়াশায় ঢাকা চা-বাগানের পথ',
          desc: 'মুনসং-এর চা-বাগানের ধাপে হাঁটুন। তাজা পাতা তুলুন, বৃষ্টি-ধোয়া বাতাসে শ্বাস নিন, পাহাড়ি হাওয়ার ফিসফিস শুনুন।',
        },
        {
          num: '০৪', tag: 'পথের বাইরে',
          title: 'গোপন পাহাড়ি ঝরনা',
          desc: 'গ্রামের বয়স্কদের চেনা গোপন বনপথ ধরে যান — শান্ত ঝরনার কাছে, যেখানে পাহাড়ের ঠান্ডা স্বচ্ছ জল বয়ে চলে।',
        },
      ],
      acts: [
        { title: 'পাইন বনে ট্রেকিং', detail: '১.৫ ঘন্টা · স্থানীয় পথ' },
        { title: 'তিস্তা নদীর দৃশ্য', detail: '২০ মিনিটের সুন্দর ড্রাইভ' },
        { title: 'বৌদ্ধ মনাস্ট্রি ভ্রমণ', detail: '৩০ মিনিটের ড্রাইভ' },
        { title: 'জৈব খামারে ফসল তোলা', detail: 'হোমস্টের বাগানে' },
        { title: 'রাতে তারা দেখা', detail: 'পরিষ্কার আকাশের রাতে' },
        { title: 'উনুনে রান্না', detail: 'প্রতিদিনের ঘরের খাবার' },
      ],
    },

    /* ─── STORY PAGE ─────────────────────────────────────── */
    storyPage: {
      eyebrow: 'লোয়ার বর্মায়েক · মুনসং · ৩,৮০০ ফুট',
      h1: 'আমাদের পারিবারিক গল্প ও ঐতিহ্য',
      sub: 'প্রজন্মের পর প্রজন্ম ধরে আমাদের পরিবার এই শান্ত পাহাড়ের রক্ষক। আমাদের ঐতিহ্য, খামার-থেকে-রান্নাঘরের খাবার, আর উন্মুক্ত আতিথেয়তার গল্প জানুন।',
    },
    introduction: {
      eyebrow: 'লাখে পরিবারের ঐতিহ্য',
      h2line1: 'শুধু থাকা নয়।',
      h2line2: 'একটি হিমালয়ান ঘর।',
      lead: 'প্রজন্মের পর প্রজন্ম ধরে আমাদের পরিবার এই কুয়াশামোড়া পাহাড়কে নিজের ঘর বলে আসছে। ব্লু আইস আমরা গড়েছি কোনো বাণিজ্যিক হোটেল হিসেবে নয় — বরং খাঁটি সিকিমি উষ্ণতার খোঁজে আসা পথিকদের জন্য এক উন্মুক্ত হৃদয়ের আশ্রয় হিসেবে।',
      body: 'এখানে আমাদের নিজের জৈব ছাদ-বাগান থেকে তুলে আনা সবজি দিয়ে রান্না হয়। কাঠের আগুনে চায়ের সাথে গল্প জমে। আর এখানকার আতিথেয়রা আপনার নাম, আপনার পছন্দ এবং আপনার গল্প মনে রাখেন।',
      stat1: '১০০%', stat1Label: 'জৈব খামারের রান্নাঘর',
      stat2: '৪.৯★', stat2Label: 'অতিথি আতিথেয়তার রেটিং',
      stat3: '০', stat3Label: 'শহরের কোলাহল ও যানজট',
      cta: 'আপনার যাত্রা পরিকল্পনা করুন →',
      badgeAlt: '৩,৮০০', badgeUnit: 'ফুট',
      badgeLabel: 'লোয়ার বর্মায়েক · মুনসং',
    },
    gallery: {
      eyebrow: 'বিশেষ গ্যালারি',
      h2line1: 'নিস্তব্ধতায়',
      h2line2: 'ধরা মুহূর্তসমূহ',
      sub: 'লাখে লাচেনের এক দৃশ্যময় যাত্রা।',
      cta: 'আপনার যাত্রা পরিকল্পনা করুন →',
      photos: [
        { caption: 'ঘড়ির অ্যালার্ম নয় — শুধু পাহাড়ের আলো।' },
        { caption: 'যেখানে সকালের কুয়াশা পাহাড়কে আলিঙ্গন করে।' },
        { caption: 'কাঠের আগুনের উষ্ণতায় বেড়ে যাওয়া সন্ধ্যা।' },
        { caption: 'যেখানে পাহাড় শ্বাস ফেলে।' },
        { caption: 'নীরব চিন্তার পথ।' },
        { caption: 'কাঠের আগুনে রান্না, ভালোবাসায় পরিবেশন।' },
      ],
    },
    whyBlueIce: {
      eyebrow: 'কেন অতিথিরা ফিরে আসেন',
      h2line1: 'আমাদের পাহাড়ি',
      h2line2: 'আশ্রয়ের তিনটি',
      h2line3: 'মূল স্তম্ভ',
      stat1: '১০০%', stat1Label: 'জৈব খামারের রান্নাঘর',
      stat2: '৩,৮০০ ফুট', stat2Label: 'মেঘরেখার উচ্চতা',
      stat3: '৪.৯', stat3Label: 'অতিথি আতিথেয়তার রেটিং',
      stat4: '∞', stat4Label: 'অবিরাম প্রশান্তি',
      pillars: [
        {
          title: 'পরিবারের মতো থাকুন',
          desc: 'কোনো বাণিজ্যিক হোটেল নয়। একটি সত্যিকারের ঘর — খামারের উনুনে রান্না, আতিথেয়রা আপনার নাম মনে রাখেন, কোনো রিসোর্ট যা দিতে পারে না।',
        },
        {
          title: 'মেঘের উপরে জেগে উঠুন',
          desc: '৩,৮০০ ফুটে লোয়ার বর্মায়েক উপত্যকার কুয়াশার উপরে। আপনার সকালের দৃশ্য কাঞ্চনজঙ্ঘার অবাধ দিগন্ত।',
        },
        {
          title: 'লুকানো হিমালয়',
          desc: 'মুনসং ভিড় পর্যটনের মানচিত্রে নেই। গোপন ঝরনা, চা-বাগানের পথ, আর পাহাড়ের নিস্তব্ধতা — আপনার বারান্দার ঠিক বাইরে।',
        },
      ],
    },

    /* ─── CONTACT PAGE ───────────────────────────────────── */
    contactPage: {
      eyebrow: 'আপনার আগুনের পাশের জায়গা অপেক্ষা করছে',
      h1: 'আপনার আশ্রয় নিশ্চিত করুন',
      sub: 'একটি সত্যিকারের পারিবারিক ঘরের শান্তি ও উষ্ণতা রক্ষা করতে আমরা একসাথে অল্প কয়েকজন অতিথিকে স্থান দিই। আপনার তারিখ ঠিক করতে সরাসরি আমাদের সাথে যোগাযোগ করুন।',
      card1badge: 'তাৎক্ষণিক হোস্ট চ্যাট',
      card1h3: 'হোয়াটসঅ্যাপ বুকিং',
      card1p: 'তাৎক্ষণিক রুম নিশ্চিতকরণ, ব্যক্তিগত খাবারের পছন্দ এবং পাহাড়ি ভ্রমণ পরামর্শের জন্য সরাসরি আমাদের হোস্টদের সাথে চ্যাট করুন।',
      card1cta: 'হোয়াটসঅ্যাপে চ্যাট করুন →',
      card2badge: 'সরাসরি লাইন',
      card2h3: 'আমাদের সাথে কথা বলুন',
      card2p: 'ভয়েস কল পছন্দ করেন? ভ্রমণের আগে যেকোনো প্রশ্নের জন্য সকাল ৮টা থেকে রাত ৮টা পর্যন্ত আমাদের কাছে পৌঁছান।',
      card2cta: 'কল করুন +৯১ ৯৮০০০ ০০০০০',
      card3badge: 'ইমেইল জিজ্ঞাসা',
      card3h3: 'বিশেষ অনুরোধ',
      card3p: 'পাহাড়ে দীর্ঘ কাজের থাকা, পারিবারিক মিলনমেলা বা কাস্টম রিট্রিট বুকিংয়ের জন্য আমাদের ইমেইল করুন।',
      card3cta: 'ইমেইল পাঠান →',
      locationH2: 'লোয়ার বর্মায়েক, মুনসং খুঁজে পাওয়া',
      locationSub: 'কালিম্পং জেলার শান্ত সবুজ পাহাড়ে ৩,৮০০ ফুট উচ্চতায় বাসা।',
      loc1h: 'বিমানে — বাগডোগরা বিমানবন্দর (IXB)',
      loc1p: 'প্রায় ৮৫ কিমি / তিস্তা নদীর উপত্যকা দিয়ে ৩ ঘন্টার সুন্দর ড্রাইভ।',
      loc2h: 'ট্রেনে — NJP স্টেশন',
      loc2p: 'প্রায় ৮০ কিমি / সেবক ব্রিজ ও কালিম্পং রুট দিয়ে ২.৫–৩ ঘন্টার ড্রাইভ।',
      loc3h: 'ব্যক্তিগত হোমস্টে ট্রান্সফার',
      loc3p: 'NJP বা বাগডোগরা থেকে সরাসরি আমাদের দরজায় আসার জন্য আমরা প্রাক-বুক করা প্রাইভেট ক্যাবের ব্যবস্থা করি।',
    },

    /* ─── FINAL CTA ──────────────────────────────────────── */
    finalCta: {
      eyebrow: 'আপনার পাহাড়ি পলায়ন অপেক্ষা করছে',
      h2line1: 'মেঘের উপরে পা দিতে',
      h2line2: 'কি আপনি প্রস্তুত?',
      sub: 'সরাসরি আপনার হোস্টদের সাথে আপনার স্যুট বুক করুন। কোনো মধ্যস্থতাকারী নেই, কোনো স্বয়ংক্রিয় পোর্টাল নেই — প্রথম জিজ্ঞাসার মুহূর্ত থেকেই খাঁটি সিকিমি উষ্ণতা।',
      cta1: 'হোয়াটসঅ্যাপে বুক করুন',
      cta2: 'হোস্টকে কল করুন +৯১ ৯৮০০০ ০০০০০',
      trust1: 'তাৎক্ষণিক উপলব্ধতা যাচাই',
      trust2: '১০০% ঘরে রান্না করা খাবার',
      trust3: 'বিনামূল্যে বাতিলের বিকল্প',
    },

    /* ─── FOOTER ─────────────────────────────────────────── */
    footer: {
      tagline: 'লোয়ার বর্মায়েক, মুনসং, কালিম্পং-এ একটি পারিবারিক ঘর — যেখানে অপরিচিতরা পরিবার হয়ে যায়।',
      colExplore: 'অন্বেষণ করুন',
      colContact: 'যোগাযোগ',
      linkHome: 'হোম',
      linkStays: 'থাকার সংগ্রহ',
      linkExp: 'অভিজ্ঞতা',
      linkStory: 'আমাদের গল্প',
      linkContact: 'যোগাযোগ ও বুকিং',
      linkWhatsApp: 'হোয়াটসঅ্যাপে বুক করুন',
      copyright: '© ২০২৫ লাখে লাচেন হোমস্টে by ব্লু আইস · সর্বস্বত্ব সংরক্ষিত',
      madeWith: 'তৈরি হয়েছে',
      madeIn: 'হিমালয়ের হৃদয় থেকে',
    },

    /* ─── MOBILE MENU ────────────────────────────────────── */
    mobileMenu: {
      links: [
        { label: 'হোম', sub: 'স্বাগত ও সংক্ষিপ্ত বিবরণ' },
        { label: 'থাকার সংগ্রহ', sub: 'স্যুট ও আবাসন' },
        { label: 'হিমালয়ান অভিজ্ঞতা', sub: 'মুহূর্ত ও ভ্রমণ' },
        { label: 'আমাদের গল্প ও ঐতিহ্য', sub: 'ঐতিহ্য ও গ্যালারি' },
        { label: 'যোগাযোগ ও রিজার্ভেশন', sub: 'সরাসরি বুকিং' },
      ],
      cta: 'আপনার থাকা পরিকল্পনা করুন →',
      location: 'লোয়ার বর্মায়েক · মুনসং · কালিম্পং',
    },
  },
};

export default t;
