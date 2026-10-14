/* Coveted — catalogue, concerns and guides.
   Products with "rx: true" are prescription treatments: they're bought
   like anything else, and checkout adds a short health check that a
   licensed clinician approves before the item ships.
   Reviews are placeholder copy: replace them with real, verified customer
   reviews before launch. */

const CONCERNS = [
  {
    "id": "texture",
    "name": "Texture",
    "tint": "#e7dcc7",
    "line": "For smoother, softer-feeling skin."
  },
  {
    "id": "breakouts",
    "name": "Breakouts & oil",
    "tint": "#d3dfdd",
    "line": "For clearer, calmer, less shiny skin."
  },
  {
    "id": "hairline",
    "name": "Hairline",
    "tint": "#d3dcc6",
    "line": "For fuller, healthier-looking hair."
  },
  {
    "id": "tone",
    "name": "Uneven tone",
    "tint": "#ebd5c4",
    "line": "For a clearer, more even complexion."
  },
  {
    "id": "redness",
    "name": "Redness & itch",
    "line": "For calmer, more comfortable skin.",
    "tint": "#e4d8d2"
  },
  {
    "id": "tan",
    "name": "Tan",
    "line": "For an even, natural-looking glow.",
    "tint": "#e9d5b9"
  },
  {
    "id": "protection",
    "name": "Daily protection",
    "tint": "#ebe3c2",
    "line": "Everyday care that protects everything else."
  }
];

const CATEGORIES = [
  {
    "id": "prescription",
    "name": "Prescription"
  },
  {
    "id": "skincare",
    "name": "Skincare"
  },
  {
    "id": "sunscreen",
    "name": "Sunscreen"
  },
  {
    "id": "tanning",
    "name": "Tanning"
  }
];

const PRODUCTS = [
  {
    "id": "tretinoin",
    "color": "#2f5d4e",
    "cap": "#1b3a30",
    "bg": "#dfe9df",
    "label": ["Tretinoin"],
    "sub": "Cream · Rx",
    "badge": "Bestseller",
    "benefit": "Smoother, clearer, younger skin",
    "name": "Tretinoin Cream",
    "format": "Prescription retinoid · strength set by your clinician",
    "category": "prescription",
    "concerns": [
      "texture",
      "tone",
      "breakouts"
    ],
    "bottle": "tube",
    "size": "20 g · about 2 months",
    "price": 29,
    "rx": true,
    "supplyDays": 60,
    "stock": {
      "status": "in",
      "qty": 380,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.8,
    "reviewCount": 1342,
    "problem": "Rough texture, clogged pores, fine lines and uneven tone.",
    "summary": "Tretinoin is the most studied topical for skin texture and renewal. Your clinician chooses a starting strength (0.025%, 0.05% or 0.1%) based on your skin and goals, and adjusts it as you go.",
    "actives": [
      {
        "name": "Tretinoin",
        "pct": "0.025% · 0.05% · 0.1%"
      }
    ],
    "inci": "Tretinoin (strength as prescribed) in a non-comedogenic cream base. Full ingredients are listed on your pharmacy label.",
    "howTo": [
      "Evening only, a pea-sized amount for the whole face on dry skin.",
      "Start two or three nights a week and build up as your clinician advises.",
      "Moisturise, and wear SPF every morning."
    ],
    "pairsWith": [
      "spf-50",
      "ghk-cu"
    ],
    "avoidWith": "Not for use during pregnancy or while trying to conceive. Avoid using with other exfoliating acids unless your clinician says otherwise.",
    "results": [
      {
        "when": "Weeks 1–6",
        "what": "Dryness and some flaking while skin adjusts."
      },
      {
        "when": "Weeks 8–12",
        "what": "Smoother texture and clearer pores."
      },
      {
        "when": "Months 6+",
        "what": "More even tone and softened fine lines."
      }
    ],
    "reviews": [
      {
        "name": "J. M.",
        "verified": true,
        "rating": 5,
        "weeks": 24,
        "photos": true,
        "title": "My skin has never been this smooth",
        "text": "Clinician started me on 0.025% and moved me up at month three. Texture on my cheeks is totally different."
      }
    ]
  },
  {
    "id": "finasteride",
    "color": "#c27a35",
    "cap": "#1e3a32",
    "bg": "#f4e2cc",
    "label": ["Finasteride"],
    "sub": "1 mg · Rx",
    "badge": "Rx",
    "benefit": "Keep the hair you have",
    "name": "Finasteride 1 mg",
    "format": "Prescription hair loss tablet",
    "category": "prescription",
    "concerns": [
      "hairline"
    ],
    "bottle": "capsules",
    "size": "30 tablets · 1 month",
    "price": 22,
    "rx": true,
    "supplyDays": 30,
    "stock": {
      "status": "in",
      "qty": 610,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.6,
    "reviewCount": 988,
    "problem": "Hereditary thinning at the crown and hairline.",
    "summary": "A once-daily tablet that lowers the hormone (DHT) responsible for most hereditary hair loss. It's best at keeping the hair you have, and many people see regrowth too.",
    "actives": [
      {
        "name": "Finasteride",
        "pct": "1 mg"
      }
    ],
    "inci": "Finasteride 1 mg. Inactive ingredients are listed on your pharmacy label.",
    "howTo": [
      "One tablet a day, with or without food.",
      "Take it every day. Benefits fade if you stop."
    ],
    "pairsWith": [
      "ghk-cu"
    ],
    "avoidWith": "Not prescribed to anyone who is or may become pregnant; crushed or broken tablets shouldn't be handled during pregnancy. Your clinician will go through possible side effects with you.",
    "results": [
      {
        "when": "Months 3–6",
        "what": "Shedding slows."
      },
      {
        "when": "Months 6–12",
        "what": "Visible improvement in density for many people."
      }
    ],
    "reviews": [
      {
        "name": "K. W.",
        "verified": true,
        "rating": 5,
        "weeks": 40,
        "photos": true,
        "title": "Crown is filling in",
        "text": "Ten months in and my crown has noticeably filled in. Ordering was as easy as anything else on the site."
      }
    ]
  },
  {
    "id": "spf-50",
    "color": "#f2c84b",
    "cap": "#fbf6ea",
    "bg": "#fbefc4",
    "label": ["SPF 50+"],
    "sub": "PA++++",
    "badge": "Bestseller",
    "benefit": "Invisible, all-day protection",
    "name": "Daily Sunscreen SPF 50+ PA++++",
    "format": "Broad-spectrum UVA/UVB sunscreen",
    "category": "sunscreen",
    "concerns": [
      "protection",
      "tone"
    ],
    "bottle": "tube",
    "size": "50 ml",
    "price": 26,
    "supplyDays": 30,
    "stock": {
      "status": "in",
      "qty": 640,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.8,
    "reviewCount": 1206,
    "problem": "UV exposure — the cause of most visible ageing, pigment and texture.",
    "summary": "A thin, no-cast fluid with the highest UVA rating (PA++++), built on modern filters used widely in Asia and Europe. Sits flat under nothing or anything.",
    "actives": [
      {
        "name": "Bis-ethylhexyloxyphenol methoxyphenyl triazine",
        "pct": "5%"
      },
      {
        "name": "Diethylamino hydroxybenzoyl hexyl benzoate",
        "pct": "8%"
      },
      {
        "name": "Ethylhexyl triazone",
        "pct": "4%"
      },
      {
        "name": "Niacinamide",
        "pct": "2%"
      }
    ],
    "inci": "Aqua, Alcohol Denat., Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dibutyl Adipate, Niacinamide, Glycerin, Silica, Tocopherol.",
    "howTo": [
      "Last step every morning. Two finger-lengths for face and neck.",
      "Reapply every two hours in direct sun."
    ],
    "pairsWith": [
      "tretinoin",
      "tanner"
    ],
    "avoidWith": "Nothing. Use it with everything.",
    "results": [
      {
        "when": "Daily",
        "what": "Protects the results of everything else you use."
      },
      {
        "when": "Long term",
        "what": "Prevents new pigment and slows visible ageing."
      }
    ],
    "reviews": [
      {
        "name": "R. N.",
        "verified": true,
        "rating": 5,
        "weeks": 20,
        "photos": false,
        "title": "The only one I'll wear",
        "text": "No white cast, no grease, no eye sting. I've finished six tubes."
      },
      {
        "name": "C. O.",
        "verified": true,
        "rating": 5,
        "weeks": 8,
        "photos": false,
        "title": "Invisible",
        "text": "Nobody can tell I'm wearing sunscreen, which is the point."
      }
    ]
  },
  {
    "id": "ghk-cu",
    "color": "#2c6f74",
    "cap": "#163b3e",
    "bg": "#d7e9e7",
    "label": ["GHK-Cu"],
    "sub": "Copper peptide 1%",
    "badge": "",
    "benefit": "Firmer skin, stronger hair",
    "name": "GHK-Cu Copper Peptide 1%",
    "format": "Serum for face and scalp",
    "category": "skincare",
    "concerns": [
      "texture",
      "hairline",
      "tone"
    ],
    "bottle": "dropper",
    "size": "30 ml",
    "price": 46,
    "supplyDays": 45,
    "stock": {
      "status": "in",
      "qty": 140,
      "record": 359
    },
    "hardToSource": false,
    "rating": 4.5,
    "reviewCount": 211,
    "problem": "Skin that looks tired or thin, and hair that feels weak.",
    "summary": "Blue copper peptide at a meaningful 1% in a light, fragrance-free serum. Use it on your face, your scalp, or both.",
    "actives": [
      {
        "name": "Copper tripeptide-1 (GHK-Cu)",
        "pct": "1%"
      },
      {
        "name": "Sodium hyaluronate",
        "pct": "1%"
      },
      {
        "name": "Panthenol",
        "pct": "2%"
      }
    ],
    "inci": "Aqua, Copper Tripeptide-1, Glycerin, Panthenol, Sodium Hyaluronate, Propanediol, Hydroxyethylcellulose, Phenoxyethanol.",
    "howTo": [
      "Face: 3–4 drops after cleansing, morning or evening.",
      "Scalp: part hair and apply a dropper across thinning areas once a day.",
      "If you use tretinoin, apply them at different times of day."
    ],
    "pairsWith": [
      "tretinoin",
      "finasteride"
    ],
    "avoidWith": "Keep separate from vitamin C and strong acids.",
    "results": [
      {
        "when": "Weeks 2–4",
        "what": "Skin feels more comfortable and hydrated."
      },
      {
        "when": "Weeks 8–12",
        "what": "Firmer, smoother-looking skin and stronger-feeling hair."
      }
    ],
    "reviews": [
      {
        "name": "S. K.",
        "verified": true,
        "rating": 5,
        "weeks": 10,
        "photos": false,
        "title": "Lovely alongside tretinoin",
        "text": "Use this in the morning, tretinoin at night. My skin is much less irritated than before."
      }
    ]
  },
  {
    "id": "hydrocortisone",
    "color": "#d58c6c",
    "cap": "#fbf6ea",
    "bg": "#f3dfd4",
    "label": ["Hydro","cortisone"],
    "sub": "1% cream",
    "badge": "",
    "benefit": "Calms itch and redness fast",
    "name": "Hydrocortisone 1% Cream",
    "format": "Anti-itch and redness cream",
    "category": "skincare",
    "concerns": [
      "redness"
    ],
    "bottle": "tube",
    "size": "30 g",
    "price": 12,
    "supplyDays": 60,
    "stock": {
      "status": "in",
      "qty": 260
    },
    "hardToSource": false,
    "rating": 4.6,
    "reviewCount": 318,
    "problem": "Itchy, red or irritated patches of skin.",
    "summary": "A mild steroid cream that calms itching and redness from irritation, insect bites and rashes. Fragrance-free.",
    "actives": [
      {
        "name": "Hydrocortisone",
        "pct": "1%"
      }
    ],
    "inci": "Hydrocortisone 1%. Inactive: Aqua, Cetearyl Alcohol, Glycerin, Paraffinum Liquidum, Petrolatum, Ceteareth-20, Phenoxyethanol.",
    "howTo": [
      "Apply a thin layer to the affected area 1–2 times a day.",
      "Use for up to 7 days. If it hasn't improved, speak to a pharmacist or doctor.",
      "Avoid the eyes and broken skin."
    ],
    "pairsWith": [
      "spf-50"
    ],
    "avoidWith": "For short-term use only. Don't use on the face for more than a few days without medical advice, or on children under 10.",
    "results": [
      {
        "when": "Hours",
        "what": "Itching eases."
      },
      {
        "when": "Days 2–5",
        "what": "Redness and irritation calm down."
      }
    ],
    "reviews": [
      {
        "name": "R. T.",
        "verified": true,
        "rating": 5,
        "weeks": 1,
        "photos": false,
        "title": "Calmed a flare in two days",
        "text": "Had an itchy red patch on my neck. Two days of this and it settled right down."
      }
    ]
  },
  {
    "id": "tanner",
    "color": "#a9652b",
    "cap": "#d9a441",
    "bg": "#f2ddc1",
    "label": ["Glow","Drops"],
    "sub": "Gradual tan",
    "badge": "",
    "benefit": "A natural tan, no sun",
    "name": "Gradual Tanning Drops",
    "format": "Self-tan drops for face and body",
    "category": "tanning",
    "concerns": [
      "tan"
    ],
    "bottle": "dropper",
    "size": "30 ml",
    "price": 28,
    "supplyDays": 45,
    "stock": {
      "status": "in",
      "qty": 190
    },
    "hardToSource": false,
    "rating": 4.5,
    "reviewCount": 274,
    "problem": "Pale or uneven skin tone, without time in the sun.",
    "summary": "Mix a few drops into your moisturiser for a natural tan that builds over a few days. Add more drops for a deeper colour. No sun exposure needed.",
    "actives": [
      {
        "name": "Dihydroxyacetone (DHA)",
        "pct": "10%"
      },
      {
        "name": "Erythrulose",
        "pct": "2%"
      },
      {
        "name": "Hyaluronic acid",
        "pct": "0.5%"
      }
    ],
    "inci": "Aqua, Dihydroxyacetone, Glycerin, Erythrulose, Sodium Hyaluronate, Propanediol, Xanthan Gum, Phenoxyethanol, Sodium Metabisulfite.",
    "howTo": [
      "Mix 2–4 drops into your moisturiser for the face, or 6–10 drops for the body.",
      "Apply evenly and wash your hands afterwards.",
      "Use every day until you reach your shade, then every few days to keep it."
    ],
    "pairsWith": [
      "spf-50"
    ],
    "avoidWith": "A self-tan doesn't protect you from the sun. Keep wearing sunscreen.",
    "results": [
      {
        "when": "4–8 hours",
        "what": "A light, natural colour develops."
      },
      {
        "when": "3–5 days",
        "what": "A deeper, even tan you can build or maintain."
      }
    ],
    "reviews": [
      {
        "name": "M. A.",
        "verified": true,
        "rating": 5,
        "weeks": 3,
        "photos": true,
        "title": "Looks like a real tan",
        "text": "Mixed four drops into my moisturiser every night. By day three I looked like I'd been away. No streaks."
      }
    ]
  }
];

const GUIDES = [
  {
    "slug": "start-a-retinoid",
    "title": "Starting tretinoin: what the first three months look like",
    "concern": "texture",
    "minutes": 4,
    "products": [
      "tretinoin",
      "spf-50",
      "ghk-cu"
    ],
    "intro": "Retinoids are the most proven ingredient for texture, but most people quit in the first month because they go too fast. Here's the schedule that works.",
    "sections": [
      {
        "h": "Your clinician picks the strength",
        "p": "Most people start low, at 0.025%, and move up once their skin is comfortable. Starting too strong is the most common reason people give up."
      },
      {
        "h": "The ramp-up",
        "p": "Two or three nights a week for the first few weeks, then more often as your skin allows. If it stings or peels a lot, step back and message your clinician."
      },
      {
        "h": "What to pair it with",
        "p": "A plain moisturiser after, and SPF every morning. A gentle peptide serum in the morning can help with comfort."
      },
      {
        "h": "What to expect",
        "p": "Some dryness early on is normal. Texture usually improves around week eight to twelve, and keeps improving for months."
      }
    ]
  },
  {
    "slug": "hairline-stack",
    "title": "Hair loss: where to start",
    "concern": "hairline",
    "minutes": 4,
    "products": [
      "finasteride",
      "ghk-cu"
    ],
    "intro": "Most hereditary hair loss responds to treatment, especially if you start early.",
    "sections": [
      {
        "h": "Finasteride",
        "p": "A daily tablet that targets the hormone behind most hereditary hair loss. It's the most proven option for keeping the hair you have."
      },
      {
        "h": "Supporting the scalp",
        "p": "A copper peptide serum on the scalp once a day is a common, gentle addition."
      },
      {
        "h": "Be patient",
        "p": "Take photos in the same light every month. Real progress shows between months four and twelve."
      }
    ]
  },
  {
    "slug": "what-pa-means",
    "title": "SPF and PA++++: what the ratings mean",
    "concern": "protection",
    "minutes": 3,
    "products": [
      "spf-50",
      "tretinoin"
    ],
    "intro": "SPF only tells you half the story. Here's how to read a sunscreen label.",
    "sections": [
      {
        "h": "SPF is for UVB",
        "p": "UVB causes burning. SPF 50 blocks about 98% of it when you apply enough."
      },
      {
        "h": "PA is for UVA",
        "p": "UVA causes most visible ageing and pigment, and it gets through clouds and windows. PA++++ is the highest UVA rating there is."
      },
      {
        "h": "How much to use",
        "p": "Two finger-lengths for your face and neck, every morning, and reapply in direct sun. It matters most if you use tretinoin."
      }
    ]
  },
  {
    "slug": "self-tan-guide",
    "title": "How to get an even self-tan",
    "concern": "tan",
    "minutes": 3,
    "products": [
      "tanner",
      "spf-50"
    ],
    "intro": "Tanning drops are the easiest way to a natural tan. A little prep makes all the difference.",
    "sections": [
      {
        "h": "Prep",
        "p": "Exfoliate the day before, and moisturise dry spots like elbows, knees and ankles so they don't grab too much colour."
      },
      {
        "h": "Mix and apply",
        "p": "Mix the drops into your usual moisturiser and apply evenly. Start with fewer drops; you can always build it up."
      },
      {
        "h": "Keep wearing sunscreen",
        "p": "A self-tan looks like a tan but doesn't protect you from the sun."
      }
    ]
  }
];

const STORE = {
  "name": "Coveted",
  "subscribeDiscount": 0.15,
  "freeShippingOver": 50
};

// Countries you ship Rx items to.
const REGIONS = [
  "Australia",
  "UK",
  "USA"
];
