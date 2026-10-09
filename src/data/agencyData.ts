import { ReelItem, CaseStudy, TeamMember, AgencyService } from '../types';

export const reelItems: ReelItem[] = [
  {
    id: 'reel-vaastu-white',
    client: 'Vaastu Italian Marble, Shamshabad',
    category: 'marble',
    title: 'How Many Looks Can White Marble Have?',
    hook: 'White marble... But how many different looks can white actually have?',
    views: '184.2K',
    inquiries: '52 Showroom Visits',
    thumbnail: '/src/assets/images/reel_vaastu_white_marble_1791312201547.jpg',
    videoSrc: '/videos/vaastu_white.mp4',
    aspectRatio: '9:16',
    duration: '0:24',
    adPlatform: 'Meta Ads (Instagram & Facebook Reels)',
    campaignOutcome: '84 qualified villa interior designer leads with ₹390 CPL.',
    language: 'English',
    audioTrack: 'upbeat',
    scriptSummary: 'A fast-paced visual journey through 9 rare white Italian marble varieties, showing how identical colors carry completely unique veins and character.',
    scenes: [
      { time: '0:00', label: 'The Big Question', subtitle: 'White marble... But how many different looks can white actually have?' },
      { time: '0:04', label: 'Angelo White & Golden Macabus', subtitle: 'Start with Angelo White. Then Golden Macabus.' },
      { time: '0:07', label: 'Golden Spider & Lilac', subtitle: 'Golden Spider. Lilac White.' },
      { time: '0:09', label: 'Lotus, Macchia Vecchia & Michelangelo', subtitle: 'Lotus White. Macchia Vecchia. Michelangelo.' },
      { time: '0:12', label: 'Statuario & Volakas', subtitle: 'Statuario. And Volakas marble.' },
      { time: '0:15', label: 'The Reveal', subtitle: 'The colour may be white, the character is never the same.' },
      { time: '0:19', label: 'Call to Visit', subtitle: 'See the difference in the actual slabs at Vaastu Italian Marble, Shamshabad.' }
    ]
  },
  {
    id: 'reel-vaastu-beige',
    client: 'Vaastu Italian Marble, Shamshabad',
    category: 'marble',
    title: 'The 7 Homogeneous Beige Marbles',
    hook: 'These are the 7 homogeneous beige marbles you should know from the Vaastu collection.',
    views: '142.5K',
    inquiries: '38 Showroom Consults',
    thumbnail: '/src/assets/images/reel_vaastu_beige_marbles_1791312215717.jpg',
    videoSrc: '/videos/vaastu_beige.mp4',
    aspectRatio: '9:16',
    duration: '0:52',
    adPlatform: 'Meta Ads + WhatsApp Click-to-Chat',
    campaignOutcome: 'Highest watch-through rate in Telangana marble category.',
    language: 'Telugu with English Subtitles',
    audioTrack: 'ambient',
    scriptSummary: 'Warehouse walkthrough comparing 7 beige marble slabs from Italy, Spain, and Turkey, explaining veining, warmth, and consistency for homeowners.',
    scenes: [
      { time: '0:00', label: 'Warehouse Walkthrough', subtitle: 'ఇవి మీరు తెలుసుకోవాల్సిన ఏడు homogeneous beige marbles (7 beige marbles you should know).' },
      { time: '0:05', label: 'Crema Bellissimo (Turkey)', subtitle: 'Soft, creamy beige with subtle movement from Turkey.' },
      { time: '0:10', label: 'Casanova Beige (Italy)', subtitle: 'Warmer beige with a refined natural pattern from Italy.' },
      { time: '0:15', label: 'Crema Marfil (Spain)', subtitle: 'Classic Spanish beige, known for clean, consistent character.' },
      { time: '0:21', label: 'Crema Alesya (Spain)', subtitle: 'Softer beige with delicate, elegant veining.' },
      { time: '0:26', label: 'Spider Latte & Vanilla Spider', subtitle: 'Spider Latte from Italy & Vanilla Spider with distinctive movement.' },
      { time: '0:35', label: 'Golden Breccia (Italy)', subtitle: 'Richer beige with a much more dramatic character.' },
      { time: '0:41', label: 'The Lesson', subtitle: 'Each marble has its own character. That difference makes the stone interesting.' },
      { time: '0:47', label: 'Visit Showroom', subtitle: 'Visit Vaastu Italian Marbles in Shamshabad to see this collection in actual slabs.' }
    ]
  },
  {
    id: 'reel-stone-culture',
    client: 'Stone Culture, Shamshabad',
    category: 'stone',
    title: 'Handcrafted Stone Art & Landscaping',
    hook: 'Timeless hand-carved stone statues, temple gazebos, and outdoor garden fountains.',
    views: '210.8K',
    inquiries: '64 Orders & Villa Projects',
    thumbnail: '/src/assets/images/reel_stone_culture_statues_1791312227339.jpg',
    videoSrc: '/videos/stone_culture.mp4',
    aspectRatio: '9:16',
    duration: '1:36',
    adPlatform: 'Meta Ads targeting Architects & Luxury Villa Owners',
    campaignOutcome: 'Secured 6 architectural firm supply retainers across Hyderabad.',
    language: 'Instrumental Music (Flute & Sitar)',
    audioTrack: 'traditional',
    scriptSummary: 'A cinematic visual showcase of authentic handcrafted stone statues, black stone Ganeshas, Radha Krishna murals, raw stone Buddha monoliths, and hand-carved outdoor gazebos in Shamshabad.',
    scenes: [
      { time: '0:00', label: 'Lord Ganesha in Black Stone', subtitle: 'Hand-carved black granite Ganesha with ornate detailing.' },
      { time: '0:03', label: 'Radha Krishna Marble Murtis', subtitle: 'Pure white polished marble Radha-Krishna deities.' },
      { time: '0:07', label: 'Meditating Buddha & Pebble Columns', subtitle: 'Sandstone Buddha seated before architectural pebble gabion columns.' },
      { time: '0:12', label: 'Lord Shiva & Wall Relief Mural', subtitle: 'Deep black stone Shiva in meditation and carved sandstone pastoral mural.' },
      { time: '0:18', label: 'Buddha Face in Raw Monolith', subtitle: 'Serene Buddha face sculpted into a raw chiseled sandstone pillar.' },
      { time: '0:24', label: 'Heritage Carvings & Triptychs', subtitle: 'Intricate stone work, traditional elephant carvings, and mandir pillars.' },
      { time: '0:44', label: 'Handcrafted Stone Gazebo (Mandapam)', subtitle: 'Full sandstone courtyard gazebo with carved jali work and stone bench.' },
      { time: '0:48', label: 'Italian Marble Water Fountain', subtitle: 'Triple-tier scalloped water fountain centerpiece for villas.' },
      { time: '0:51', label: 'Sculpted Stone Couple & Fluted Vases', subtitle: 'Abstract modern couple stone monolith and painted marble fluted vase.' },
      { time: '1:06', label: 'Stone Garden Swings & Courtyards', subtitle: 'Carved stone swing (Jhula) and outdoor seating for luxury landscaping.' }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-vaastu',
    clientName: 'Vaastu Italian Marble',
    location: 'Shamshabad, Hyderabad',
    industry: 'Luxury Italian Marble & Showroom',
    services: ['Videography', 'Digital Marketing', 'Social Media Management'],
    headline: 'Bringing High-Ticket Showroom Walk-Ins with Engaging Marble Reels',
    challenge: 'Vaastu Italian Marble stocks premium imported Italian marble slabs, but wanted more villa owners, architects, and interior designers discovering their collection online.',
    solution: 'We visited their Shamshabad warehouse with our gimbal and mobile setup to capture the natural veining, mirror polish, and massive inventory. Then we ran targeted Meta ad campaigns reaching homeowners and designers across Gachibowli, Jubilee Hills, and Kokapet.',
    metrics: [
      { label: 'Showroom Leads', value: '84+' },
      { label: 'Video Views', value: '326K+' },
      { label: 'Campaign Return', value: '5.2x' },
      { label: 'Cost Per Lead', value: '₹390' }
    ],
    quote: 'The team made our marble look stunning on Instagram. They brought serious villa builders and architects right to our showroom floor in Shamshabad.',
    spokesperson: 'Management, Vaastu Italian Marble'
  },
  {
    id: 'cs-stone-culture',
    clientName: 'Stone Culture',
    location: 'Shamshabad, Hyderabad',
    industry: 'Architectural Stone & Landscaping',
    services: ['Videography', 'Social Media Management', 'Digital Marketing'],
    headline: 'Building Regional Brand Recognition Across the Shamshabad Airport Corridor',
    challenge: 'Located in Shamshabad, Stone Culture crafts natural stone monuments, statues, and exterior cladding. They wanted local architects and villa owners in South Hyderabad to know their craftsmanship.',
    solution: 'We captured crisp, smooth gimbal walkthroughs of their outdoor yard, statues, gazebos, and stone textures, and ran local geo-targeted promotions reaching contractors and landscape designers.',
    metrics: [
      { label: 'Local Reach', value: '210K+' },
      { label: 'Contract Inquiries', value: '64' },
      { label: 'Architect Partners', value: '6 Firms' },
      { label: 'Google Search Share', value: '#1 Local' }
    ],
    quote: 'Gimbells gave our stone work great visibility. Clients now visit our Shamshabad yard saying they already saw our reels on Instagram.',
    spokesperson: 'Founding Partner, Stone Culture'
  },
  {
    id: 'cs-nest-fertility',
    clientName: 'Nest Fertility',
    location: 'Chandanagar, Hyderabad',
    industry: 'Healthcare & Family Wellness',
    services: ['Videography', 'Digital Marketing', 'WhatsApp Booking'],
    headline: 'Building Trust and Connection Through Helpful Doctor Insights',
    challenge: 'Fertility treatment is deeply personal and requires genuine emotional trust. Families need reassuring answers before scheduling a clinic visit.',
    solution: 'We recorded brief, warm doctor Q&A videos explaining patient questions in simple, compassionate language, paired with an easy WhatsApp appointment line.',
    metrics: [
      { label: 'Patient Consults', value: '110+' },
      { label: 'Lead Cost Reduction', value: '-62%' },
      { label: 'Video Retention', value: '74%' },
      { label: 'Reel Shares', value: '3,200+' }
    ],
    quote: 'Patients come in saying they already feel comfortable with our doctors after watching the videos. That trust makes all the difference.',
    spokesperson: 'Specialist Team, Nest Fertility'
  },
  {
    id: 'cs-local-services',
    clientName: 'Local Services & Real Estate',
    location: 'Telangana',
    industry: 'Home Services & Real Estate',
    services: ['Digital Marketing', 'Inbound Call Funnels'],
    headline: 'Generating Consistent Daily Inbound Phone Calls for Essential Services',
    challenge: 'Essential home services (like septic tank and sanitation) and real estate ventures need immediate phone calls from customers with urgent needs.',
    solution: 'We set up high-intent Google Search campaigns with fast direct-dial buttons and mobile walkthrough videos, delivering steady daily calls.',
    metrics: [
      { label: 'Daily Calls', value: '18-25' },
      { label: 'Average Lead Cost', value: '₹165' },
      { label: 'Real Estate Pipeline', value: '₹14Cr+' },
      { label: 'Customer Close Rate', value: '68%' }
    ],
    quote: 'The team understands that in real estate and urgent services, fast customer response is everything. The phone rings consistently with genuine inquiries.',
    spokesperson: 'Partner, Regional Services'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Koushik',
    role: 'Growth & Digital Marketing',
    description: 'Focuses on Meta and Google Ads, analytics, and ensuring every rupee of ad spend brings real customer inquiries to your phone.'
  },
  {
    name: 'Rohith',
    role: 'Operations & Local Lead Gen',
    description: 'Manages day-to-day client campaigns, direct inbound call channels, and operations across real estate and essential home services.'
  },
  {
    name: 'Krishna',
    role: 'Video Shooting & Editing',
    description: 'Captures smooth, vibrant reels on mobile with our gimbal setup, crafting clean edits, natural lighting, and audio that catch the eye.'
  }
];

export const agencyServices: AgencyService[] = [
  {
    id: 'srv-video',
    title: 'Videography',
    description: 'We visit your shop, showroom, hospital, or property and shoot clean, smooth reels using our mobile gimbal setup. Fast, friendly shoots that never disrupt your business.',
    deliverables: [
      'On-site video shooting with smooth 3-axis gimbal',
      'Engaging hooks designed to catch local customer interest',
      'Clean color correction, music selection, and sound polish',
      'Crisp subtitles and text overlays for easy watching'
    ]
  },
  {
    id: 'srv-ads',
    title: 'Digital Marketing',
    description: 'Targeted Meta Ads (Instagram & Facebook) and Google Search campaigns that put your business right in front of people actively searching for what you offer in your city.',
    deliverables: [
      'Laser-targeted local area ads (Hyderabad, Shamshabad, Chandanagar, etc.)',
      'Google Search campaigns for high-intent customer search',
      'Direct WhatsApp and phone call conversion buttons',
      'Weekly performance reports and budget monitoring'
    ]
  },
  {
    id: 'srv-allinone',
    title: 'Video + Digital Marketing + Social Media Management',
    description: 'Our complete all-in-one monthly growth package. We shoot your videos, manage your Instagram page, and run the paid ad campaigns to keep customer inquiries flowing.',
    deliverables: [
      'Regular on-site video shoots each month',
      'Full Instagram feed curation, graphics, and scheduled posting',
      'Active Meta and Google ad campaigns to drive continuous leads',
      'Direct customer message management & WhatsApp routing'
    ],
    badge: 'Most Popular'
  },
  {
    id: 'srv-smma',
    title: 'Social Media Management',
    description: 'Turn your Instagram and social channels into an inviting digital shopfront that builds credibility, answers customer questions, and reflects your hard work.',
    deliverables: [
      'Regular posting schedule with thoughtful captions',
      'Clean, cohesive aesthetic that matches your brand style',
      'Highlight organization, bio optimization, and FAQ posts',
      'Direct customer engagement and prompt inquiry forwarding'
    ]
  }
];
