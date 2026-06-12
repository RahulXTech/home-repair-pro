export const services = [
  {
    name: 'AC Repair & Service',
    slug: 'ac-repair',
    emoji: '❄️',
    image: '/images/services/ac-repair.png',
    desc: 'Cooling nahi? Gas leak? — Gas refill, PCB repair, installation & full service',
    price: '449',
    brands: ['Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Blue Star', 'Carrier', 'Whirlpool', 'Panasonic', 'Godrej', 'Lloyd', 'O General', 'Mitsubishi', 'Haier', 'Toshiba', 'Electrolux', 'Sanyo', 'TCL', 'Onida', 'Videocon'],
    plans: [
      {
        name: 'AC Basic Service',
        price: '449',
        popular: false,
        features: ['Filter cleaning', 'Water wash', 'Cooling check', 'GST invoice included'],
      },
      {
        name: 'Indoor + Outdoor Jet Wash',
        price: '699',
        popular: true,
        features: ['High pressure foam wash', 'Deep cleaning', 'Performance optimization', '30-day service warranty'],
      },
      {
        name: 'Gas Refill',
        price: '999',
        popular: false,
        features: ['Leakage testing', 'Pure refrigerant gas', 'Optimal cooling setup', 'GST invoice included'],
      },
    ],
  },
  {
    name: 'Washing Machine Repair',
    slug: 'washing-machine-repair',
    emoji: '🫧',
    image: '/images/services/washing-machine.png',
    desc: 'Spin nahi ho rahi? Paani nahi nikal raha? — Drum, motor, pump & PCB repair',
    price: '350',
    brands: ['LG', 'Samsung', 'IFB', 'Bosch', 'Siemens', 'Whirlpool', 'Haier', 'Panasonic', 'Electrolux', 'Midea', 'Godrej', 'Videocon', 'Onida', 'Lloyd', 'TCL', 'Koryo', 'BPL', 'Sansui', 'Intex'],
  },
  {
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    emoji: '🧊',
    image: '/images/services/refrigerator.png',
    desc: 'Fridge thanda nahi kar raha? — Compressor, gas refill, thermostat & cooling fix',
    price: '350',
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Bosch', 'Siemens', 'Panasonic', 'Hitachi', 'Electrolux', 'Liebherr', 'Godrej', 'Videocon', 'Onida', 'Midea', 'BPL'],
  },
  {
    name: 'Chimney Cleaning',
    slug: 'chimney-cleaning',
    emoji: '🔧',
    image: '/images/services/chimney.png',
    desc: 'Chimney smoke nahi kheench rahi? — Deep cleaning, filter & motor service',
    price: '350',
    brands: ['Elica', 'Faber', 'Glen', 'Hindware', 'Prestige', 'Inalsa', 'Sunflame', 'Kutchina', 'Kaff', 'Bosch', 'Siemens', 'Whirlpool', 'Blowhot', 'Eurodomo', 'Hafele', 'Franke', 'Butterfly', 'Pigeon'],
  },
  {
    name: 'Geyser Repair',
    slug: 'geyser-repair',
    emoji: '🔥',
    image: '/images/services/geyser.png',
    desc: 'Geyser garam paani nahi de raha? — Heating element, thermostat & leakage fix',
    price: '350',
    brands: ['Bajaj', 'Havells', 'Racold', 'AO Smith', 'Venus', 'Jaquar', 'Crompton', 'Orient', 'Usha', 'V-Guard', 'Kenstar', 'Morphy Richards', 'Hindware', 'Activa', 'Rinnai', 'Ferroli', 'Marc'],
  },
  {
    name: 'Microwave Repair',
    slug: 'microwave-repair',
    emoji: '📻',
    image: '/images/services/microwave.png',
    desc: 'Microwave heat nahi kar raha? — Magnetron, door, turntable & PCB repair',
    price: '350',
    brands: ['LG', 'Samsung', 'IFB', 'Panasonic', 'Godrej', 'Whirlpool', 'Bajaj', 'Morphy Richards', 'Haier', 'Onida', 'Electrolux', 'Kenstar', 'Kelvinator', 'Siemens', 'Bosch', 'Koryo', 'TCL'],
  },
];

export const cities = [
  {
    name: 'Indore',
    slug: 'indore',
    localities: ['Vijay Nagar', 'Scheme 54', 'AB Road', 'Rau', 'Palasia', 'Rajwada', 'LIG Colony', 'MIG Colony', 'HIG Colony', 'Mahalakshmi Nagar', 'Bhawarkuan', 'Nipania', 'Super Corridor', 'Silicon City', 'Scheme 78', 'Rajendra Nagar', 'Annapurna', 'Tilak Nagar', 'Bengali Square', 'Geeta Bhawan', 'South Tukoganj', 'Janjeerwala', 'Lasudia', 'Sukhliya', 'Aerodrome Road', 'New Palasia', 'Saket Nagar', 'Sudama Nagar', 'Pardesipura', 'Banganga', 'Old Palasia', 'Scheme 140', 'Scheme 94', 'Ring Road', 'Khandwa Road', 'IIM Area'],
  },
  {
    name: 'Bhopal',
    slug: 'bhopal',
    localities: ['Kolar', 'Kolar Road', 'Lalghati', 'Bairagarh', 'Minal Residency', 'Awadhpuri', 'Katara Hills', 'Arera Colony', 'Arera Hills', 'MP Nagar Zone 1', 'MP Nagar Zone 2', 'New Market', 'Hamidia Road', 'Habibganj', 'Shyamla Hills', 'Char Imli', 'Shahpura', 'Govindpura', 'Piplani', 'BHEL', 'Patel Nagar', 'Berasia Road', 'Karond', 'Misrod', 'Hoshangabad Road', 'Nayapura', 'Trilanga', 'Chunabhatti', 'TT Nagar', 'Roshanpura', 'Gulmohar Colony', 'Indrapuri', 'Pratap Nagar', 'Kohefiza', 'Shivaji Nagar'],
  },
  {
    name: 'Ujjain',
    slug: 'ujjain',
    localities: ['Freeganj', 'Madhav Nagar', 'Dewas Road', 'Indore Road', 'Mahakal Area', 'Mahakaleshwar', 'Vikram Nagar', 'Nanakheda', 'Tower Chowk', 'Dwarkapuri', 'Triveni', 'Maksi Road', 'Neelganga', 'Subhash Nagar'],
  },
  {
    name: 'Mhow',
    slug: 'mhow',
    localities: ['Mhow Cantonment', 'Old Mhow', 'New Mhow', 'Sanawad Road', 'Military Area', 'Station Road', 'Pithampur Road', 'Ghatabillod Road'],
  },
  {
    name: 'Dewas',
    slug: 'dewas',
    localities: ['Dewas City', 'Industrial Area', 'Sai Nagar', 'Patel Colony', 'Kshipra Road', 'Ujjain Road', 'Tonk Colony', 'Manavar Road'],
  },
  {
    name: 'Sehore',
    slug: 'sehore',
    localities: ['Sehore City', 'Ashta', 'Kotwali Area', 'Bus Stand Area', 'Hospital Road', 'Bhopal Road', 'Industrial Colony', 'Maksi Road'],
  },
  {
    name: 'Jabalpur',
    slug: 'jabalpur',
    localities: ['Napier Town', 'Wright Town', 'Vijay Nagar', 'Gorakhpur', 'Medical College Area', 'Gwarighat', 'Russell Chowk', 'Sadar', 'Adhartal', 'Tilwara', 'Bargi', 'Damoh Naka', 'Madan Mahal', 'Gohalpur', 'Civil Lines', 'Mandla Road', 'Ranjhi', 'Garha'],
  },
  {
    name: 'Jaipur',
    slug: 'jaipur',
    localities: ['Vaishali Nagar', 'Mansarovar', 'Malviya Nagar', 'C-Scheme', 'Tonk Road', 'Jagatpura', 'Sanganer', 'Sitapura', 'Raja Park', 'Bani Park', 'Nirman Nagar', 'Pratap Nagar', 'Shyam Nagar', 'Vidhyadhar Nagar', 'Civil Lines', 'Sodala', 'Jhotwara', 'MI Road', 'Pink City'],
  },
  {
    name: 'Pritampur',
    slug: 'pritampur',
    localities: ['Sector 1', 'Sector 2', 'Sector 3', 'Industrial Area Phase 1', 'Industrial Area Phase 2', 'Industrial Area Phase 3', 'Mhow Road', 'Dhar Road', 'Pithampur Bypass', 'Township Area', 'AKVN Colony'],
  },
  {
    name: 'Mumbai',
    slug: 'mumbai',
    localities: ['Andheri East', 'Andheri West', 'Bandra', 'Bandra Kurla Complex', 'Thane', 'Navi Mumbai', 'Borivali', 'Malad', 'Kandivali', 'Goregaon', 'Jogeshwari', 'Kurla', 'Ghatkopar', 'Vikhroli', 'Powai', 'Mulund', 'Dadar', 'Worli', 'Lower Parel', 'Chembur', 'Mira Road', 'Vasai', 'Virar', 'Kharghar', 'Vashi', 'Nerul', 'Panvel'],
  },
];

export const reviews = [
  {
    name: 'Rahul Sharma',
    city: 'Vijay Nagar, Indore',
    service: 'AC Repair',
    rating: 5,
    text: 'Voltas AC mein cooling bilkul band ho gayi thi garmi mein. Call kiya aur 45 minute mein technician aa gaya. Gas refill + service karke ₹799 liye — bilkul fair price. GST invoice bhi mili. Highly recommend!',
    avatar: 'R',
  },
  {
    name: 'Priya Verma',
    city: 'Kolar, Bhopal',
    service: 'Washing Machine Repair',
    rating: 5,
    text: 'LG washing machine spin nahi ho rahi thi aur paani nahi nikal raha tha. Same day service mili, technician ne drum belt change kiya. Ab perfectly chal rahi hai. Pehle price bataya phir kaam shuru kiya — bahut honest service.',
    avatar: 'P',
  },
  {
    name: 'Amit Patel',
    city: 'Ujjain',
    service: 'Refrigerator Repair',
    rating: 5,
    text: 'Samsung fridge 3 din se thanda nahi kar rahi thi — ghar mein saari cheezein kharab ho rahi thi. HomeRepairPro ko call kiya, 1 ghante mein technician aaya, thermostat fix kiya. Ab ekdum sahi chal rahi hai. Best service!',
    avatar: 'A',
  },
];

export const faqs = [
  {
    q: 'Kitne time mein technician aayega?',
    a: 'Humara promise hai same day service. Indore aur Bhopal mein typically 30-60 minutes mein technician pahunch jaata hai. Peak hours mein 2 ghante tak lag sakte hain.',
  },
  {
    q: 'Kya service charges fixed hain?',
    a: 'Visiting charge ₹99 hai jo service pe adjust ho jaata hai. AC, washing machine, refrigerator, geyser, microwave — sabki service starting ₹350 se shuru hoti hai. Parts alag se charge hote hain.',
  },
  {
    q: 'Kya aap GST receipt dete ho?',
    a: 'Haan, hum GST registered business hain. Har service pe proper GST invoice milti hai jo aap tax purposes ke liye use kar sakte ho.',
  },
  {
    q: 'Kya service ke baad koi warranty milti hai?',
    a: 'Haan! Humari service pe 30-day warranty hai. Agar same problem dobara aaye toh free service milegi.',
  },
  {
    q: 'Aap kaunse brands repair karte ho?',
    a: 'Hum sab major brands repair karte hain — LG, Samsung, Whirlpool, Voltas, Daikin, Carrier, Godrej, Haier, IFB, Bosch, aur aur bhi. Koi bhi brand ho, hum fix kar sakte hain.',
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    price: '299',
    features: ['Diagnosis & inspection', 'Minor repair', 'Labour charges included', 'Service report'],
  },
  {
    name: 'Standard',
    price: '599',
    features: ['Everything in Basic', 'Complete service & cleaning', 'Gas top-up (AC/Fridge)', '30-day warranty'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '999',
    features: ['Everything in Standard', 'Parts replacement', 'Annual maintenance', '90-day warranty'],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug) {
  return cities.find((c) => c.slug === slug);
}

export const blogPosts = [
  {
    slug: 'ac-ki-cooling-kam-kyu-hoti-hai',
    title: 'AC Ki Cooling Kam Ho Gayi? 7 Main Reasons Aur Ghar Pe Solution',
    excerpt: 'Garmi mein AC ki cooling kam ho jaaye toh tension hoti hai. Yahan 7 common reasons aur unke solutions bataye gaye hain.',
    date: '2025-05-15',
    readTime: '5 min',
    image: '/images/blog/blog-ac-cooling.png',
    category: 'AC Repair',
  },
  {
    slug: 'washing-machine-pani-nahi-nikal-rahi',
    title: 'Washing Machine Paani Nahi Nikal Rahi — Fix Karo 5 Steps Mein',
    excerpt: 'Washing machine ka paani drain nahi ho raha? Yeh 5 simple steps follow karo aur problem ghar pe fix karo.',
    date: '2025-05-20',
    readTime: '4 min',
    image: '/images/blog/blog-washing.png',
    category: 'Washing Machine',
  },
  {
    slug: 'fridge-thanda-nahi-kar-raha',
    title: 'Fridge Thanda Nahi Kar Raha — Kab Repair Zaroori Hai',
    excerpt: 'Fridge ki cooling problem ka matlab hamesha compressor nahi hota. Pehle yeh check karo.',
    date: '2025-05-25',
    readTime: '5 min',
    image: '/images/blog/blog-fridge.png',
    category: 'Refrigerator',
  },
  {
    slug: 'ac-service-cost-indore-bhopal-2025',
    title: 'AC Service Cost Indore & Bhopal 2025 — Complete Price Guide',
    excerpt: 'Indore aur Bhopal mein AC service kitne mein padti hai? Complete price breakdown yahan hai.',
    date: '2025-06-01',
    readTime: '6 min',
    image: '/images/blog/blog-ac-cost.png',
    category: 'AC Repair',
  },
  {
    slug: 'geyser-garam-pani-nahi-de-raha',
    title: 'Geyser Garam Paani Nahi De Raha — 6 Reasons & Solution',
    excerpt: 'Subah thanda paani mil raha hai? Geyser ki yeh 6 common problems check karo.',
    date: '2025-06-05',
    readTime: '4 min',
    image: '/images/blog/blog-geyser.png',
    category: 'Geyser',
  },
  {
    slug: 'ro-water-purifier-service-repair-indore-bhopal',
    title: 'RO Water Purifier Repair & Service — Complete Guide 2026',
    excerpt: 'RO ka paani kam aa raha hai ya TDS high hai? Yeh common problems aur unke solutions jaano — Indore & Bhopal mein same day service.',
    date: '2026-06-08',
    readTime: '5 min',
    image: '/images/blog/blog-ro.png',
    category: 'RO Purifier',
  },
];
