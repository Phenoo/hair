export type NavLink = {
  href: string;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  image: string;
  hoverImage: string;
  gallery: string[];
  imageAlt: string;
  badge?: "Best Seller" | "New" | "Limited";
  rating: number;
  reviewCount: number;
  length: string;
  texture: string;
  lace: string;
  color: string;
  density: string;
  cap: string;
  collection: string;
  description: string;
  bestFor: string;
  details: string[];
  included: string[];
  care: string[];
  delivery: string;
  returns: string;
  quizTags: {
    length: string;
    texture: string;
    install: string;
    lace: string;
    budget: string;
  };
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  duration: string;
  category: string;
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Transformation = {
  name: string;
  category: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  note: string;
};

export type Review = {
  name: string;
  rating: number;
  body: string;
  context: string;
  image: string;
  imageAlt: string;
};

export type SocialMoment = {
  title: string;
  format: string;
  image: string;
  imageAlt: string;
};

export type FAQCategory = {
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type Policy = {
  slug: string;
  title: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const brandDefaults = {
  name: "KDS Hair & Beauty",
  location: "LONDON, UK]",
  announcement: "Premium Wigs • Professional Installations • UK Delivery",
  heroTitle: "Your Hair. Your Confidence. Elevated.",
  heroCopy:
    "Luxury wigs, flawless installations and professional hair services by KDS Hair & Beauty — created to make you look incredible and feel even better.",
  tagline: "Luxury hair. Beautiful transformations. Effortless confidence.",
  footerStatement:
    "Luxury hair, beautiful transformations and confidence — the KDS way.",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/shop-wigs", label: "Shop Wigs" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-kds", label: "About KDS" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export const desktopNavLinks = navLinks.filter(
  (link) => !["/book-appointment", "/faq"].includes(link.href),
);

const pexelsCurly = "/kds-products/aliyah-1.jpg";
const pexelsBraidsClose = "/kds-products/janelle-1.jpg";
const pexelsLongBraids = "/kds-products/lori-1.jpg";
const pexelsUrbanBraids = "/kds-products/megan-1.jpg";
const kdsAliyahTwo = "/kds-products/aliyah-2.jpg";
const kdsJanelleTwo = "/kds-products/janelle-2.jpg";
const kdsLoriTwo = "/kds-products/lori-2.jpg";
const kdsMeganTwo = "/kds-products/megan-2.jpg";
const kdsPixieIntensive = "/kds-products/pixie-intensive-1.jpg";
const kdsCustomFrontal = "/kds-products/custom-frontal-1.jpg";
const kdsRihRihOne = "/kds-products/rih-rih-1.jpg";
const kdsRihRihTwo = "/kds-products/rih-rih-2.jpg";

const standardDelivery =
  "Standard UK delivery £4.95. Free delivery on orders over £250. Express delivery £8.95.";
const standardReturns =
  "Returns accepted within 14 days on unworn wigs with lace uncut and original packaging intact.";

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/shop-wigs", label: "Shop" },
      { href: "/book-appointment", label: "Book Appointment" },
      { href: "/services", label: "Services" },
      { href: "/about-kds", label: "About" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/legal/cookie-policy", label: "Cookie Policy" },
      { href: "/legal/shipping-policy", label: "Shipping" },
      { href: "/legal/returns-refund-policy", label: "Returns" },
      { href: "/legal/appointment-policy", label: "Appointment Policy" },
      {
        href: "/legal/cancellation-rescheduling-policy",
        label: "Cancellation / Rescheduling",
      },
      { href: "/legal/privacy-policy", label: "Privacy" },
      { href: "/legal/terms-conditions", label: "Terms" },
    ],
  },
];

export const products: Product[] = [
  {
    slug: "nude-signature-straight",
    name: "Nude Signature Straight Wig",
    price: 319,
    priceLabel: "£319",
    image: pexelsLongBraids,
    hoverImage: kdsLoriTwo,
    gallery: [
      pexelsLongBraids,
      kdsLoriTwo,
      kdsMeganTwo,
      kdsCustomFrontal,
    ],
    imageAlt: "Model wearing a sleek styled wig",
    badge: "Best Seller",
    rating: 5,
    reviewCount: 84,
    length: "24 inches",
    texture: "Silky straight",
    lace: "HD lace",
    color: "Natural black",
    density: "180%",
    cap: "Adjustable medium cap",
    collection: "Straight Wigs",
    description:
      "A polished straight finish with natural movement and a soft hairline that photographs beautifully.",
    bestFor: "Editorial softness, everyday polish, sleek installs",
    details: [
      "100% human hair",
      "Pre-plucked hairline",
      "Heat styling safe up to 180C",
      "Wear glueless or install professionally",
    ],
    included: [
      "KDS storage bag",
      "Elastic band",
      "Wig comb set",
      "Care guide",
    ],
    care: [
      "Use sulphate-free products",
      "Store on a stand between wears",
      "Brush from ends upward",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "long",
      texture: "straight",
      install: "either",
      lace: "hd",
      budget: "premium",
    },
  },
  {
    slug: "champagne-body-wave",
    name: "Champagne Body Wave Wig",
    price: 345,
    priceLabel: "£345",
    image: pexelsUrbanBraids,
    hoverImage: kdsMeganTwo,
    gallery: [
      pexelsUrbanBraids,
      kdsMeganTwo,
      pexelsCurly,
      kdsAliyahTwo,
    ],
    imageAlt: "Model wearing a soft styled wig",
    badge: "New",
    rating: 5,
    reviewCount: 57,
    length: "22 inches",
    texture: "Body wave",
    lace: "Transparent lace",
    color: "Soft brunette",
    density: "200%",
    cap: "Adjustable medium cap",
    collection: "Body Wave",
    description:
      "A full-bodied wave with shine, bounce and effortless softness for everyday luxury.",
    bestFor: "Soft glamour, event styling, versatile parting",
    details: [
      "Soft layered finish",
      "Natural density blend",
      "Holds curls and body well",
      "Beginner-friendly finish",
    ],
    included: [
      "KDS satin dust bag",
      "Lace melt band",
      "Care card",
    ],
    care: [
      "Wrap or pin-curl before sleeping",
      "Use low heat for wave definition",
      "Refresh with a wide-tooth comb",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "medium",
      texture: "body-wave",
      install: "either",
      lace: "transparent",
      budget: "mid",
    },
  },
  {
    slug: "mocha-soft-curl-bob",
    name: "Mocha Soft Curl Bob",
    price: 229,
    priceLabel: "£229",
    image: pexelsCurly,
    hoverImage: kdsAliyahTwo,
    gallery: [
      pexelsCurly,
      kdsAliyahTwo,
      pexelsBraidsClose,
      kdsJanelleTwo,
    ],
    imageAlt: "Client wearing a polished short wig",
    badge: "Limited",
    rating: 4.9,
    reviewCount: 32,
    length: "12 inches",
    texture: "Soft curl",
    lace: "Closure",
    color: "Mocha brown",
    density: "150%",
    cap: "Petite to medium cap",
    collection: "Bob Wigs",
    description:
      "A refined bob with soft curls and face-framing movement for an elevated ready-to-wear look.",
    bestFor: "Short luxury styles, low-fuss styling, soft structure",
    details: [
      "Lightweight cap",
      "Rounded cut shape",
      "Salon-finished curl pattern",
    ],
    included: [
      "Storage sleeve",
      "Comb clips",
      "Styling card",
    ],
    care: [
      "Finger-comb curls to keep the shape",
      "Use a heat protectant when restyling",
      "Store away from direct sunlight",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "short",
      texture: "curly",
      install: "glueless",
      lace: "closure",
      budget: "mid",
    },
  },
  {
    slug: "espresso-hd-lace-glueless",
    name: "Espresso HD Lace Glueless",
    price: 289,
    priceLabel: "£289",
    image: kdsCustomFrontal,
    hoverImage: pexelsUrbanBraids,
    gallery: [
      kdsCustomFrontal,
      pexelsUrbanBraids,
      pexelsLongBraids,
      kdsMeganTwo,
    ],
    imageAlt: "Custom frontal wig displayed on a wig stand",
    rating: 4.9,
    reviewCount: 46,
    length: "18 inches",
    texture: "Straight with body",
    lace: "HD lace",
    color: "Espresso",
    density: "180%",
    cap: "Glueless adjustable cap",
    collection: "Glueless Wigs",
    description:
      "A polished ready-to-wear silhouette with an easy glueless fit and premium hairline finish.",
    bestFor: "Fast styling, first-time wig buyers, everyday elegance",
    details: [
      "Secure glueless fit",
      "Natural lace parting",
      "Easy on-and-off wear",
    ],
    included: [
      "Adjustable band",
      "Wig comb set",
      "Storage bag",
    ],
    care: [
      "Keep the lace clean and dry",
      "Re-style using low heat",
      "Store flat or on a wig stand",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "medium",
      texture: "straight",
      install: "glueless",
      lace: "hd",
      budget: "premium",
    },
  },
  {
    slug: "blonde-money-piece-wave",
    name: "Blonde Money Piece Wave",
    price: 369,
    priceLabel: "£369",
    image: kdsRihRihOne,
    hoverImage: kdsRihRihTwo,
    gallery: [
      kdsRihRihOne,
      kdsRihRihTwo,
      kdsLoriTwo,
      kdsMeganTwo,
    ],
    imageAlt: "Client wearing a styled premium wig",
    badge: "New",
    rating: 4.8,
    reviewCount: 21,
    length: "20 inches",
    texture: "Loose wave",
    lace: "Frontal",
    color: "Brunette with blonde money piece",
    density: "180%",
    cap: "Medium cap",
    collection: "Coloured Wigs",
    description:
      "Dimension, movement and brightness in a statement colour blend that still feels luxe and wearable.",
    bestFor: "Statement installs, birthday looks, colour without compromise",
    details: [
      "Salon colour blend",
      "Face-framing money piece",
      "Soft wave styling",
    ],
    included: ["Dust bag", "Elastic band", "Care card"],
    care: [
      "Use cool-toned conditioning care",
      "Protect from excessive heat",
      "Refresh with a moisture mist",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "medium",
      texture: "body-wave",
      install: "professional",
      lace: "frontal",
      budget: "premium",
    },
  },
  {
    slug: "ready-to-wear-silk-press",
    name: "Ready-To-Wear Silk Press Wig",
    price: 249,
    priceLabel: "£249",
    image: pexelsBraidsClose,
    hoverImage: kdsJanelleTwo,
    gallery: [
      pexelsBraidsClose,
      kdsJanelleTwo,
      pexelsCurly,
      kdsCustomFrontal,
    ],
    imageAlt: "Client wearing a ready-to-wear styled wig",
    rating: 5,
    reviewCount: 39,
    length: "16 inches",
    texture: "Silk press straight",
    lace: "Closure",
    color: "Natural brown",
    density: "150%",
    cap: "Glueless cap",
    collection: "Ready-to-Wear",
    description:
      "A softly polished straight unit designed for quick styling, easy wear and effortless confidence.",
    bestFor: "Low-maintenance luxury, office polish, fast mornings",
    details: [
      "Light daily wear",
      "Smooth silk press finish",
      "Easy beginner fit",
    ],
    included: ["Storage bag", "Combs", "Care insert"],
    care: [
      "Wrap at night with a silk scarf",
      "Use light serum for shine",
      "Avoid heavy oil near the lace",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "medium",
      texture: "straight",
      install: "glueless",
      lace: "closure",
      budget: "accessible",
    },
  },
  {
    slug: "deep-curl-krown",
    name: "Deep Curl Krown Wig",
    price: 389,
    priceLabel: "£389",
    image: kdsPixieIntensive,
    hoverImage: pexelsCurly,
    gallery: [
      kdsPixieIntensive,
      pexelsCurly,
      pexelsBraidsClose,
      pexelsUrbanBraids,
    ],
    imageAlt: "Client wearing a short textured wig",
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 67,
    length: "24 inches",
    texture: "Deep curl",
    lace: "HD lace",
    color: "Natural black",
    density: "200%",
    cap: "Adjustable medium cap",
    collection: "Curly",
    description:
      "Defined curls with premium fullness, movement and a striking shape designed to turn heads.",
    bestFor: "Voluminous looks, glam installs, camera-ready curls",
    details: [
      "Defined curl pattern",
      "Soft lace finish",
      "Full density finish",
    ],
    included: [
      "Satin bag",
      "Elastic band",
      "Curl-care insert",
    ],
    care: [
      "Detangle only when damp",
      "Use curl-defining mousse lightly",
      "Air dry to preserve pattern",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "long",
      texture: "curly",
      install: "professional",
      lace: "hd",
      budget: "premium",
    },
  },
  {
    slug: "soft-beige-luxe-frontal",
    name: "Soft Beige Luxe Frontal",
    price: 419,
    priceLabel: "£419",
    image: kdsCustomFrontal,
    hoverImage: kdsRihRihTwo,
    gallery: [
      kdsCustomFrontal,
      kdsRihRihTwo,
      pexelsLongBraids,
      kdsMeganTwo,
    ],
    imageAlt: "Styled frontal wig in close detail",
    rating: 4.8,
    reviewCount: 18,
    length: "26 inches",
    texture: "Straight",
    lace: "Frontal",
    color: "Warm beige brunette",
    density: "180%",
    cap: "Medium cap",
    collection: "HD Lace",
    description:
      "An ultra-refined frontal unit with seamless parting space and a polished salon finish.",
    bestFor: "High-impact installs, styling versatility, luxe glam",
    details: [
      "Extended parting space",
      "Colour dimension",
      "Install-ready finish",
    ],
    included: ["Storage bag", "Band", "Care guide"],
    care: [
      "Use a tint-safe treatment",
      "Avoid product build-up near the hairline",
      "Schedule revamps to maintain finish",
    ],
    delivery: standardDelivery,
    returns: standardReturns,
    quizTags: {
      length: "long",
      texture: "straight",
      install: "professional",
      lace: "frontal",
      budget: "premium",
    },
  },
];

export const services: Service[] = [
  {
    slug: "luxury-wig-installation",
    name: "Luxury Wig Installation",
    description:
      "Your wig, perfected. Professional preparation, application and styling for a seamless KDS finish.",
    price: 120,
    priceLabel: "From £120",
    duration: "2 hr 30 min",
    category: "Installations",
  },
  {
    slug: "lace-frontal-installation",
    name: "Lace Frontal Installation",
    description:
      "Tailored frontal installation with precision placement, melt and styling.",
    price: 140,
    priceLabel: "From £140",
    duration: "3 hr",
    category: "Installations",
  },
  {
    slug: "closure-installation",
    name: "Closure Installation",
    description:
      "A polished closure install designed for a soft, refined and natural-looking finish.",
    price: 110,
    priceLabel: "From £110",
    duration: "2 hr 15 min",
    category: "Installations",
  },
  {
    slug: "wig-customisation",
    name: "Wig Customisation",
    description:
      "Plucking, bleaching, styling and finishing touches to make your wig appointment-ready.",
    price: 65,
    priceLabel: "From £65",
    duration: "1 hr 15 min",
    category: "Customisation",
  },
  {
    slug: "wig-revamp",
    name: "Wig Revamp",
    description:
      "Refresh tired units with cleansing, restoration and restyling for a renewed finish.",
    price: 55,
    priceLabel: "From £55",
    duration: "1 hr 30 min",
    category: "Maintenance",
  },
  {
    slug: "hair-styling",
    name: "Hair Styling",
    description:
      "Glam curls, silky finishes or polished waves styled with a premium touch.",
    price: 45,
    priceLabel: "From £45",
    duration: "45 min",
    category: "Styling",
  },
  {
    slug: "wig-foundation-braiding",
    name: "Braiding / Wig Foundation",
    description:
      "Neat foundation prep to support secure, comfortable and long-lasting installs.",
    price: 30,
    priceLabel: "From £30",
    duration: "30 min",
    category: "Preparation",
  },
  {
    slug: "consultation",
    name: "Consultation",
    description:
      "A guided session to discuss your dream look, service plan, wig choice or custom order.",
    price: 20,
    priceLabel: "£20",
    duration: "20 min",
    category: "Consultation",
  },
  {
    slug: "custom-wig-service",
    name: "Custom Wig Service",
    description:
      "A made-for-you service covering sourcing, customisation and final styling.",
    price: 220,
    priceLabel: "From £220",
    duration: "By consultation",
    category: "Custom Wigs",
  },
];

export const collections: Collection[] = [
  {
    slug: "straight-wigs",
    title: "Straight Wigs",
    description: "Glossy, polished and effortless from every angle.",
    image: pexelsLongBraids,
    imageAlt: "Straight wig collection editorial image",
  },
  {
    slug: "body-wave",
    title: "Body Wave",
    description: "Soft movement with premium fullness and bounce.",
    image: pexelsUrbanBraids,
    imageAlt: "Body wave wig collection editorial image",
  },
  {
    slug: "curly",
    title: "Curly",
    description: "Defined texture, lush volume and beautiful shape.",
    image: kdsPixieIntensive,
    imageAlt: "Curly wig collection editorial image",
  },
  {
    slug: "bob-wigs",
    title: "Bob Wigs",
    description: "Sharp, modern silhouettes with an elegant finish.",
    image: pexelsCurly,
    imageAlt: "Bob wig collection editorial image",
  },
  {
    slug: "hd-lace",
    title: "HD Lace",
    description: "Melts beautifully for a refined luxury hairline.",
    image: kdsCustomFrontal,
    imageAlt: "HD lace wig collection editorial image",
  },
  {
    slug: "glueless-wigs",
    title: "Glueless Wigs",
    description: "Easy confidence for fast, beautiful everyday wear.",
    image: pexelsBraidsClose,
    imageAlt: "Glueless wig collection editorial image",
  },
  {
    slug: "coloured-wigs",
    title: "Coloured Wigs",
    description: "Dimensional colour for statement KDS looks.",
    image: kdsRihRihOne,
    imageAlt: "Coloured wig collection editorial image",
  },
  {
    slug: "ready-to-wear",
    title: "Ready-to-Wear",
    description: "Quick luxury with no compromise on finish.",
    image: kdsJanelleTwo,
    imageAlt: "Ready-to-wear wig collection editorial image",
  },
  {
    slug: "best-sellers",
    title: "Best Sellers",
    description: "The KDS units clients return to again and again.",
    image: kdsMeganTwo,
    imageAlt: "Best seller wig collection editorial image",
  },
  {
    slug: "new-arrivals",
    title: "New Arrivals",
    description: "Fresh additions for your next hair era.",
    image: kdsAliyahTwo,
    imageAlt: "New arrival wig collection editorial image",
  },
];

export const transformations: Transformation[] = [
  {
    name: "Seamless Melt",
    category: "Wig Installations",
    before: pexelsBraidsClose,
    after: pexelsLongBraids,
    beforeAlt: "Client before luxury wig installation",
    afterAlt: "Client after seamless KDS wig installation",
    note: "Use this module for real client before-and-after drops.",
  },
  {
    name: "Soft Glam Finish",
    category: "Custom Wigs",
    before: kdsCustomFrontal,
    after: pexelsCurly,
    beforeAlt: "Client before custom wig styling",
    afterAlt: "Client after custom wig styling",
    note: "Works well for custom wig styling and salon finish reveals.",
  },
  {
    name: "Ready-To-Wear Upgrade",
    category: "Client Transformations",
    before: kdsPixieIntensive,
    after: pexelsUrbanBraids,
    beforeAlt: "Client before ready-to-wear styling",
    afterAlt: "Client after ready-to-wear styling",
    note: "Good for quick content drops from installs, styling and revamps.",
  },
];

export const reviews: Review[] = [
  {
    name: "Amina",
    rating: 5,
    body:
      "The finish looked so polished and soft. My install felt secure, comfortable and camera-ready all day.",
    context: "Luxury Wig Installation",
    image: pexelsCurly,
    imageAlt: "Client portrait for appointment review",
  },
  {
    name: "Jade",
    rating: 5,
    body:
      "I wanted a wig that felt premium and easy to wear, and this gave exactly that. The texture was beautiful.",
    context: "Nude Signature Straight Wig",
    image: pexelsLongBraids,
    imageAlt: "Client portrait for wig review",
  },
  {
    name: "Sade",
    rating: 5,
    body:
      "The overall experience felt elevated from start to finish. I left feeling genuinely transformed.",
    context: "Closure Installation",
    image: pexelsBraidsClose,
    imageAlt: "Client portrait for KDS review",
  },
];

export const socialMoments: SocialMoment[] = [
  {
    title: "Install reveal",
    format: "Reel",
    image: pexelsUrbanBraids,
    imageAlt: "Vertical reel showing curly hair styling",
  },
  {
    title: "Styling finish",
    format: "TikTok",
    image: kdsRihRihOne,
    imageAlt: "Vertical clip showing long braid styling",
  },
  {
    title: "Behind the scenes",
    format: "Story",
    image: kdsCustomFrontal,
    imageAlt: "Vertical story showing studio beauty close-up",
  },
  {
    title: "Transformation recap",
    format: "Carousel",
    image: kdsPixieIntensive,
    imageAlt: "Vertical carousel showing braid transformation recap",
  },
];

export const whyChooseKds = [
  {
    title: "Clean Installs",
    body: "Precise melts, tidy parting and polished styling.",
  },
  {
    title: "Strong Wig Edit",
    body: "Straight, body wave, curly, glueless and HD lace.",
  },
  {
    title: "Book + Buy",
    body: "Clients can shop a wig and book the install in one flow.",
  },
  {
    title: "UK Based",
    body: "Appointments in studio and tracked delivery across the UK.",
  },
  {
    title: "Aftercare",
    body: "Clear prep, care and rebooking support after the appointment.",
  },
];

export const faqCategories: FAQCategory[] = [
  {
    title: "Appointments",
    items: [
      {
        question: "Do I need to pay a deposit?",
        answer:
          "Deposit terms are left as editable placeholders until KDS confirms the final booking policy and payment split.",
      },
      {
        question: "What is the cancellation or rescheduling policy?",
        answer:
          "Cancellation and rescheduling terms should be managed from the legal and admin areas once the final business rules are supplied.",
      },
      {
        question: "How should I prepare for my appointment?",
        answer:
          "Clients can be guided on arrival time, hair prep and whether to bring their wig. This copy is editable from the booking and FAQ content areas.",
      },
      {
        question: "Can I bring my own wig?",
        answer:
          "Yes. The booking flow includes a question for this, helping KDS tailor installation and customisation recommendations.",
      },
      {
        question: "How long will my appointment take?",
        answer:
          "Each service card includes a duration placeholder so the studio can publish accurate timing when ready.",
      },
      {
        question: "Where is the studio located?",
        answer:
          "The studio location is intentionally shown as an editable UK placeholder until the final address is confirmed.",
      },
    ],
  },
  {
    title: "Wigs",
    items: [
      {
        question: "How do I choose the right wig size?",
        answer:
          "Each product page includes cap information, and the KDS Wig Finder helps narrow down likely matches before purchase.",
      },
      {
        question: "What lace options are available?",
        answer:
          "The catalogue is structured around HD lace, frontal, closure and glueless options so clients can shop by finish and maintenance level.",
      },
      {
        question: "Do you offer glueless wigs?",
        answer:
          "Yes. Dedicated glueless and ready-to-wear collections are included to support easy everyday shopping.",
      },
      {
        question: "How should I care for my wig?",
        answer:
          "Every wig page includes care notes, and KDS can expand this into a fuller aftercare library when the final content is ready.",
      },
      {
        question: "How long does UK shipping take?",
        answer:
          "Shipping timings remain editable placeholders until final dispatch and courier details are set.",
      },
      {
        question: "Can I order a custom wig?",
        answer:
          "Yes. Consultation and custom wig service pathways are included to support bespoke enquiries and future expansion.",
      },
    ],
  },
];

export const policies: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "Use this page to publish KDS Hair & Beauty's approved privacy wording, data handling details and contact information.",
    sections: [
      {
        heading: "Information KDS Collects",
        body: "Editable placeholder for the categories of personal data collected across appointments, ecommerce, contact forms and email signups.",
      },
      {
        heading: "How Your Information Is Used",
        body: "Editable placeholder for service delivery, marketing consent, transactional communication and customer support terms.",
      },
      {
        heading: "Your Rights",
        body: "Editable placeholder for UK data rights, access requests, deletion requests and privacy contact steps.",
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    intro:
      "Use this page to explain analytics, functionality and marketing cookies once the final tooling stack is confirmed.",
    sections: [
      {
        heading: "Essential Cookies",
        body: "Placeholder copy for cookies required to run the site, store bag contents and support customer login.",
      },
      {
        heading: "Analytics and Performance",
        body: "Placeholder copy for website analytics, session measurement and performance optimisation tools.",
      },
      {
        heading: "Cookie Preferences",
        body: "Placeholder copy for how customers can manage consent or change preferences later.",
      },
    ],
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    intro:
      "Use this page for the approved store and service terms that govern site usage, ordering and studio transactions.",
    sections: [
      {
        heading: "General Use",
        body: "Placeholder copy for permitted site use, account use and brand intellectual property language.",
      },
      {
        heading: "Orders and Payments",
        body: "Placeholder copy for product ordering, accepted payment methods and pricing updates.",
      },
      {
        heading: "Appointments and Services",
        body: "Placeholder copy for studio service terms, client responsibilities and service limitations.",
      },
    ],
  },
  {
    slug: "shipping-policy",
    title: "Shipping Policy",
    intro:
      "Use this page to publish final UK delivery methods, dispatch windows and packaging expectations.",
    sections: [
      {
        heading: "Processing",
        body: "Placeholder copy for ready-to-ship, customisation and pre-order lead times.",
      },
      {
        heading: "Delivery Methods",
        body: "Placeholder copy for standard, express and tracked UK delivery options.",
      },
      {
        heading: "Delivery Support",
        body: "Placeholder copy for order tracking, delays and lost parcel contact details.",
      },
    ],
  },
  {
    slug: "returns-refund-policy",
    title: "Returns / Refund Policy",
    intro:
      "Use this page to publish the final product return, exchange and refund terms approved by KDS Hair & Beauty.",
    sections: [
      {
        heading: "Eligible Returns",
        body: "Placeholder copy for hygiene rules, unworn units, sealed packaging and return windows.",
      },
      {
        heading: "Non-Returnable Items",
        body: "Placeholder copy for customised wigs, installed units and made-to-order products.",
      },
      {
        heading: "Refund Timeline",
        body: "Placeholder copy for inspections, refund approval and payment reversal timing.",
      },
    ],
  },
  {
    slug: "appointment-policy",
    title: "Appointment Policy",
    intro:
      "Use this page for final appointment preparation, deposit and service-day expectations once approved.",
    sections: [
      {
        heading: "Booking Requirements",
        body: "Placeholder copy for deposits, consultation steps and booking confirmations.",
      },
      {
        heading: "Arrival and Preparation",
        body: "Placeholder copy for lateness, clean hair expectations and bring-your-own-wig requirements.",
      },
      {
        heading: "Service Changes",
        body: "Placeholder copy for adjustments, add-ons and same-day service limitations.",
      },
    ],
  },
  {
    slug: "cancellation-rescheduling-policy",
    title: "Cancellation / Rescheduling Policy",
    intro:
      "Use this page to publish final rescheduling windows, cancellation notice periods and deposit handling rules.",
    sections: [
      {
        heading: "Notice Period",
        body: "Placeholder copy for how much notice clients must give before changing an appointment.",
      },
      {
        heading: "Late Changes and No-Shows",
        body: "Placeholder copy for no-show handling, forfeited deposits and exceptional circumstances.",
      },
      {
        heading: "How To Reschedule",
        body: "Placeholder copy for online, WhatsApp or direct contact rescheduling steps.",
      },
    ],
  },
];

export const bookingExtras = [
  "Styling finish",
  "Wig customisation",
  "Wig cap and prep kit",
  "Aftercare guidance",
  "Photo-ready finish",
];

export const bookingTimeSlots = [
  "09:00",
  "10:30",
  "12:00",
  "13:30",
  "15:00",
  "16:30",
];

export const accountOrders = [
  {
    id: "KDS-1001",
    item: "Nude Signature Straight Wig",
    status: "Order in progress",
    action: "BUY AGAIN",
  },
  {
    id: "KDS-0984",
    item: "Ready-To-Wear Silk Press Wig",
    status: "Delivered",
    action: "BUY AGAIN",
  },
];

export const accountAppointments = [
  {
    id: "APT-204",
    item: "Luxury Wig Installation",
    status: "Upcoming",
    action: "BOOK AGAIN",
  },
  {
    id: "APT-176",
    item: "Consultation",
    status: "Completed",
    action: "BOOK AGAIN",
  },
];

export const adminSections = [
  {
    title: "Appointments",
    items: [
      "Services",
      "Prices",
      "Availability",
      "Blocked dates",
      "Bookings",
      "Deposits",
      "Rescheduling",
      "Cancellations",
    ],
  },
  {
    title: "Store",
    items: [
      "Wigs",
      "Variations",
      "Prices",
      "Stock",
      "Orders",
      "Shipping",
      "Discounts",
      "Returns",
    ],
  },
  {
    title: "Website",
    items: [
      "Homepage banners",
      "Images",
      "Transformations",
      "Reviews",
      "FAQs",
      "Copy",
      "Featured products",
      "Collections",
    ],
  },
  {
    title: "Marketing",
    items: [
      "Discount codes",
      "Email subscribers",
      "Restock alerts",
      "Customer lists",
      "Promotions",
      "Cart recovery",
      "Appointment reminders",
    ],
  },
];

export const allProductCollections = Array.from(
  new Set(products.map((product) => product.collection)),
);

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        (candidate.collection === product.collection ||
          candidate.texture === product.texture),
    )
    .slice(0, 3);
}

export function getPolicyBySlug(slug: string) {
  return policies.find((policy) => policy.slug === slug);
}
