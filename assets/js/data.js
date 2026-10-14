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
    "id": "dark-circles",
    "name": "Dark circles",
    "tint": "#dcd9e0",
    "line": "For brighter, more rested-looking eyes."
  },
  {
    "id": "tone",
    "name": "Uneven tone",
    "tint": "#ebd5c4",
    "line": "For a clearer, more even complexion."
  },
  {
    "id": "jawline",
    "name": "Jaw & definition",
    "tint": "#d2d7dc",
    "line": "For a sharper, more defined profile."
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
    "id": "serum",
    "name": "Serums"
  },
  {
    "id": "sunscreen",
    "name": "Sunscreen"
  },
  {
    "id": "hair",
    "name": "Hair & scalp"
  },
  {
    "id": "supplement",
    "name": "Supplements"
  },
  {
    "id": "tool",
    "name": "Tools"
  }
];

const PRODUCTS = [
  {
    "id": "tretinoin",
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
      "niacinamide-10"
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
      "topical-finmin",
      "keto-shampoo"
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
    "id": "topical-finmin",
    "name": "Topical Finasteride + Minoxidil",
    "format": "Prescription scalp spray",
    "category": "prescription",
    "concerns": [
      "hairline"
    ],
    "bottle": "pump",
    "size": "60 ml · 1 month",
    "price": 45,
    "rx": true,
    "supplyDays": 30,
    "stock": {
      "status": "in",
      "qty": 214,
      "record": 361
    },
    "hardToSource": true,
    "rating": 4.5,
    "reviewCount": 402,
    "problem": "Thinning hair, for people who'd prefer a topical over a tablet.",
    "summary": "Finasteride and minoxidil combined in one fast-drying spray, prepared by a licensed compounding pharmacy. Applied straight to the scalp where it's needed.",
    "actives": [
      {
        "name": "Finasteride",
        "pct": "0.25%"
      },
      {
        "name": "Minoxidil",
        "pct": "6%"
      }
    ],
    "inci": "Finasteride, Minoxidil in an alcohol and propylene glycol base. Prepared by a licensed compounding pharmacy.",
    "howTo": [
      "Once daily, 4–6 sprays to a dry scalp over thinning areas.",
      "Let it dry before styling or bed."
    ],
    "pairsWith": [
      "keto-shampoo",
      "derma-roller"
    ],
    "avoidWith": "Not for use during pregnancy. Keep away from children and pets.",
    "results": [
      {
        "when": "Weeks 2–8",
        "what": "Some temporary shedding is common."
      },
      {
        "when": "Months 4–6",
        "what": "New growth and less shedding."
      }
    ],
    "reviews": [
      {
        "name": "D. P.",
        "verified": true,
        "rating": 5,
        "weeks": 30,
        "photos": true,
        "title": "Easier than tablets",
        "text": "Wanted to avoid tablets. One spray at night, and my temples look much fuller at month seven."
      }
    ]
  },
  {
    "id": "pigment-formula",
    "name": "Pigment Formula",
    "format": "Prescription brightening cream",
    "category": "prescription",
    "concerns": [
      "tone",
      "dark-circles"
    ],
    "bottle": "tube",
    "size": "30 g · about 2 months",
    "price": 39,
    "rx": true,
    "supplyDays": 60,
    "stock": {
      "status": "low",
      "qty": 22,
      "record": 352,
      "restock": "2026-10-28"
    },
    "hardToSource": true,
    "rating": 4.6,
    "reviewCount": 296,
    "problem": "Dark spots, post-blemish marks and patches of uneven pigment.",
    "summary": "A compounded cream combining three ingredients that fade pigment in different ways. Your clinician tailors the formula and how long you use it.",
    "actives": [
      {
        "name": "Hydroquinone",
        "pct": "4%"
      },
      {
        "name": "Tretinoin",
        "pct": "0.025%"
      },
      {
        "name": "Azelaic acid",
        "pct": "10%"
      }
    ],
    "inci": "Hydroquinone, Tretinoin, Azelaic Acid in a cream base. Prepared by a licensed compounding pharmacy.",
    "howTo": [
      "Evening, a thin layer on affected areas only.",
      "Use for the course your clinician sets, then take a break.",
      "SPF every morning is essential."
    ],
    "pairsWith": [
      "spf-50",
      "niacinamide-10"
    ],
    "avoidWith": "Not for use during pregnancy. Use only for the time your clinician advises.",
    "results": [
      {
        "when": "Weeks 4–8",
        "what": "Marks begin to lighten."
      },
      {
        "when": "Weeks 12+",
        "what": "Noticeably more even tone."
      }
    ],
    "reviews": [
      {
        "name": "L. H.",
        "verified": true,
        "rating": 5,
        "weeks": 12,
        "photos": true,
        "title": "Old marks finally gone",
        "text": "Had marks from breakouts for years. Twelve weeks on this and they've mostly faded."
      }
    ]
  },
  {
    "id": "ghk-face",
    "name": "Copper Peptide GHK-Cu 1% Serum",
    "format": "Face serum",
    "category": "serum",
    "concerns": [
      "texture",
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
    "hardToSource": true,
    "rating": 4.5,
    "reviewCount": 211,
    "problem": "Skin that looks tired, thin or slow to bounce back.",
    "summary": "Blue copper peptide at a meaningful 1% in a light, fragrance-free serum. A gentle companion to tretinoin.",
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
      "Morning or evening, 3–4 drops after cleansing.",
      "If you use tretinoin, apply them at different times of day."
    ],
    "pairsWith": [
      "tretinoin",
      "spf-50"
    ],
    "avoidWith": "Keep separate from vitamin C and strong acids.",
    "results": [
      {
        "when": "Weeks 2–4",
        "what": "Skin feels more comfortable and hydrated."
      },
      {
        "when": "Weeks 8–12",
        "what": "Firmer, smoother-looking skin."
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
    "id": "niacinamide-10",
    "name": "Niacinamide 10% + Zinc 1%",
    "format": "Water-based oil-control serum",
    "category": "serum",
    "concerns": [
      "breakouts",
      "texture"
    ],
    "bottle": "dropper",
    "size": "30 ml",
    "price": 18,
    "supplyDays": 45,
    "stock": {
      "status": "in",
      "qty": 488,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.5,
    "reviewCount": 904,
    "problem": "Shine by midday and congestion around the nose and chin.",
    "summary": "A high-strength vitamin B3 serum that regulates visible sebum and reduces the look of congestion. Zinc PCA adds oil control.",
    "actives": [
      {
        "name": "Niacinamide",
        "pct": "10%"
      },
      {
        "name": "Zinc PCA",
        "pct": "1%"
      }
    ],
    "inci": "Aqua, Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.",
    "howTo": [
      "Morning and evening, 2–3 drops before heavier creams.",
      "Let it absorb for a minute before the next step to avoid pilling."
    ],
    "pairsWith": [
      "spf-50"
    ],
    "avoidWith": "Fine with almost everything. Apply separately from pure vitamin C if you notice flushing.",
    "results": [
      {
        "when": "Weeks 1–2",
        "what": "Less midday shine."
      },
      {
        "when": "Weeks 4–8",
        "what": "Fewer clogged pores around the nose."
      },
      {
        "when": "Week 8+",
        "what": "More even, less reactive skin."
      }
    ],
    "reviews": [
      {
        "name": "S. K.",
        "verified": true,
        "rating": 5,
        "weeks": 6,
        "photos": true,
        "title": "Shine control that actually lasts",
        "text": "My T-zone used to be greasy by 11am. Now it lasts until late afternoon."
      },
      {
        "name": "D. P.",
        "verified": true,
        "rating": 4,
        "weeks": 4,
        "photos": false,
        "title": "Good basic",
        "text": "Does what it says. Pills a bit if I put moisturiser on too fast."
      }
    ]
  },
  {
    "id": "azelaic-15",
    "name": "Azelaic Acid 15%",
    "format": "Prescription brightening and calming gel",
    "category": "prescription",
    "concerns": [
      "tone",
      "breakouts"
    ],
    "bottle": "tube",
    "size": "30 ml",
    "price": 24,
    "supplyDays": 60,
    "stock": {
      "status": "low",
      "qty": 18,
      "record": 352,
      "restock": "2026-10-28"
    },
    "hardToSource": true,
    "rating": 4.6,
    "reviewCount": 187,
    "problem": "Red and brown marks left behind after breakouts.",
    "summary": "Azelaic acid fades post-blemish marks and calms redness. At 15% it's a prescription strength, so checkout includes a quick health check.",
    "actives": [
      {
        "name": "Azelaic acid",
        "pct": "15%"
      },
      {
        "name": "Allantoin",
        "pct": "0.5%"
      }
    ],
    "inci": "Aqua, Azelaic Acid, Propylene Glycol, Cetearyl Alcohol, Glyceryl Stearate, Allantoin, Polysorbate 80, Carbomer, Sodium Hydroxide, Phenoxyethanol.",
    "howTo": [
      "Morning or evening, a pea-sized amount over the whole face.",
      "Mild tingling for the first week is normal."
    ],
    "pairsWith": [
      "niacinamide-10",
      "spf-50"
    ],
    "avoidWith": "Space out from strong acids if skin feels sensitised.",
    "results": [
      {
        "when": "Weeks 2–4",
        "what": "Calmer, less red skin."
      },
      {
        "when": "Weeks 8–12",
        "what": "Post-blemish marks noticeably lighter."
      }
    ],
    "reviews": [
      {
        "name": "L. H.",
        "verified": true,
        "rating": 5,
        "weeks": 10,
        "photos": true,
        "title": "Finally fading old marks",
        "text": "Had leftover marks from breakouts for over a year. Ten weeks in, most have faded."
      }
    ],
    "rx": true
  },
  {
    "id": "spf-50",
    "name": "Daily Fluid SPF 50",
    "format": "Invisible broad-spectrum sunscreen",
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
    "hardToSource": true,
    "rating": 4.8,
    "reviewCount": 1206,
    "problem": "UV exposure — the cause of most visible ageing, pigment and texture.",
    "summary": "A thin, no-cast fluid built on the newer UV filters that are widely available in Europe and Asia but hard to source elsewhere. Sits flat under nothing or anything.",
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
      "tretinoin"
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
    "id": "eye-caffeine",
    "name": "Caffeine 5% + Tranexamic 2%",
    "format": "Under-eye serum",
    "category": "serum",
    "concerns": [
      "dark-circles"
    ],
    "bottle": "roller",
    "size": "15 ml",
    "price": 22,
    "supplyDays": 60,
    "stock": {
      "status": "in",
      "qty": 176,
      "record": 360
    },
    "hardToSource": true,
    "rating": 4.3,
    "reviewCount": 233,
    "problem": "Puffiness and dark circles under the eyes.",
    "summary": "Caffeine reduces morning puffiness; tranexamic acid targets the pigment component of dark circles. Metal roller tip for a cooling, depuffing apply.",
    "actives": [
      {
        "name": "Caffeine",
        "pct": "5%"
      },
      {
        "name": "Tranexamic acid",
        "pct": "2%"
      },
      {
        "name": "EGCG (green tea)",
        "pct": "1%"
      }
    ],
    "inci": "Aqua, Caffeine, Tranexamic Acid, Glycerin, Epigallocatechin Gallatyl Glucoside, Propanediol, Sodium Hyaluronate, Xanthan Gum, Phenoxyethanol.",
    "howTo": [
      "Morning and evening. Roll gently from inner to outer corner.",
      "Keep it in the fridge for extra depuffing."
    ],
    "pairsWith": [
      "spf-50"
    ],
    "avoidWith": "Keep retinoids away from the immediate eye area while adjusting.",
    "results": [
      {
        "when": "Immediately",
        "what": "Less morning puffiness."
      },
      {
        "when": "Weeks 6–10",
        "what": "Pigment-based dark circles lighten."
      }
    ],
    "reviews": [
      {
        "name": "T. B.",
        "verified": true,
        "rating": 4,
        "weeks": 8,
        "photos": true,
        "title": "Puffiness gone in the morning",
        "text": "Puffiness is better within minutes. The darkness took about two months to fade."
      }
    ]
  },
  {
    "id": "minox-5",
    "name": "Minoxidil 5% Foam",
    "format": "Topical hair regrowth treatment",
    "category": "hair",
    "concerns": [
      "hairline"
    ],
    "bottle": "foam",
    "size": "60 ml · 1 month",
    "price": 29,
    "supplyDays": 30,
    "stock": {
      "status": "in",
      "qty": 402,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.5,
    "reviewCount": 689,
    "problem": "For fuller, healthier-looking hair.",
    "summary": "The most studied over-the-counter treatment for hereditary hair loss. Propylene-glycol-free foam for less scalp irritation than solutions.",
    "actives": [
      {
        "name": "Minoxidil",
        "pct": "5%"
      }
    ],
    "inci": "Minoxidil 5% w/w. Inactive: Alcohol, Butane, Cetyl Alcohol, Citric Acid, Glycerin, Isobutane, Lactic Acid, Polysorbate 60, Propane, Purified Water, Stearyl Alcohol.",
    "howTo": [
      "Half a capful of foam to a dry scalp, twice daily.",
      "Massage in with fingertips and wash hands afterwards.",
      "Consistency is everything — results stop if use stops."
    ],
    "pairsWith": [
      "keto-shampoo",
      "ghk-scalp"
    ],
    "avoidWith": "Not for use during pregnancy. Read the leaflet; talk to a pharmacist if you have heart conditions.",
    "results": [
      {
        "when": "Weeks 2–8",
        "what": "Temporary shedding is common and a sign it's working."
      },
      {
        "when": "Months 3–4",
        "what": "New, fine growth appears."
      },
      {
        "when": "Months 6–12",
        "what": "Full results; growth thickens."
      }
    ],
    "reviews": [
      {
        "name": "K. W.",
        "verified": true,
        "rating": 5,
        "weeks": 28,
        "photos": true,
        "title": "Temples filled back in",
        "text": "Seven months in. The shed at month one scared me but I stuck with it. Temples noticeably fuller."
      }
    ]
  },
  {
    "id": "keto-shampoo",
    "name": "Ketoconazole 1% Shampoo",
    "format": "Anti-dandruff scalp shampoo",
    "category": "hair",
    "concerns": [
      "hairline"
    ],
    "bottle": "pump",
    "size": "200 ml",
    "price": 17,
    "supplyDays": 60,
    "stock": {
      "status": "in",
      "qty": 255,
      "record": 362
    },
    "hardToSource": false,
    "rating": 4.5,
    "reviewCount": 410,
    "problem": "Flaking and scalp inflammation that can accompany thinning.",
    "summary": "An antifungal shampoo that controls flaking and keeps the scalp in good condition. A common companion to minoxidil.",
    "actives": [
      {
        "name": "Ketoconazole",
        "pct": "1%"
      },
      {
        "name": "Zinc pyrithione",
        "pct": "0.5%"
      }
    ],
    "inci": "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Ketoconazole, Zinc Pyrithione, Glycol Distearate, Sodium Chloride, Citric Acid, Parfum, Sodium Benzoate.",
    "howTo": [
      "2–3 times a week in place of your usual shampoo.",
      "Leave on the scalp for 3–5 minutes before rinsing."
    ],
    "pairsWith": [
      "minox-5",
      "ghk-scalp"
    ],
    "avoidWith": "Use your normal shampoo on other days to avoid dryness.",
    "results": [
      {
        "when": "Week 1",
        "what": "Less flaking and itch."
      },
      {
        "when": "Ongoing",
        "what": "A healthier scalp environment."
      }
    ],
    "reviews": [
      {
        "name": "N. G.",
        "verified": true,
        "rating": 4,
        "weeks": 10,
        "photos": false,
        "title": "Scalp feels better",
        "text": "Itch is gone. Using it alongside the minoxidil foam."
      }
    ]
  },
  {
    "id": "ghk-scalp",
    "name": "Copper Peptide GHK-Cu 1%",
    "format": "Leave-on scalp serum",
    "category": "hair",
    "concerns": [
      "hairline"
    ],
    "bottle": "dropper",
    "size": "50 ml",
    "price": 42,
    "supplyDays": 45,
    "stock": {
      "status": "out",
      "qty": 0,
      "record": 340,
      "restock": "2026-10-21"
    },
    "hardToSource": true,
    "rating": 4.2,
    "reviewCount": 158,
    "problem": "Thin, weak hair and a scalp that feels tight.",
    "summary": "Blue copper peptide at a meaningful concentration, with caffeine and rosemary leaf extract. Lightweight and non-greasy, so it disappears into the hair.",
    "actives": [
      {
        "name": "Copper tripeptide-1 (GHK-Cu)",
        "pct": "1%"
      },
      {
        "name": "Caffeine",
        "pct": "1%"
      },
      {
        "name": "Rosmarinus officinalis leaf extract",
        "pct": "2%"
      }
    ],
    "inci": "Aqua, Copper Tripeptide-1, Caffeine, Rosmarinus Officinalis Leaf Extract, Glycerin, Panthenol, Propanediol, Hydroxyethylcellulose, Phenoxyethanol.",
    "howTo": [
      "Once daily. Part hair and apply 1 dropper across thinning areas.",
      "Can be used alongside minoxidil — apply at the opposite end of the day."
    ],
    "pairsWith": [
      "minox-5",
      "keto-shampoo"
    ],
    "avoidWith": "Keep away from vitamin C serums on the same area.",
    "results": [
      {
        "when": "Weeks 4–8",
        "what": "Scalp feels healthier; hair less brittle."
      },
      {
        "when": "Months 3–6",
        "what": "Hair looks thicker and fuller."
      }
    ],
    "reviews": [
      {
        "name": "E. S.",
        "verified": true,
        "rating": 4,
        "weeks": 16,
        "photos": true,
        "title": "Good add-on to my stack",
        "text": "Hard to find at 1% anywhere else. Hair feels thicker but I use minoxidil too so hard to separate."
      }
    ]
  },
  {
    "id": "mastic",
    "name": "Mastic Jaw Gum",
    "format": "Hard-chew resin gum · 60 pieces",
    "category": "supplement",
    "concerns": [
      "jawline"
    ],
    "bottle": "tin",
    "size": "60 pieces · 1 month",
    "price": 19,
    "supplyDays": 30,
    "stock": {
      "status": "in",
      "qty": 290,
      "record": 357
    },
    "hardToSource": true,
    "rating": 4.3,
    "reviewCount": 377,
    "problem": "Soft definition along the jaw.",
    "summary": "Natural Chios mastic resin — much firmer than ordinary gum, so it gives the masseters real resistance. Sugar-free, unflavoured, no additives.",
    "actives": [
      {
        "name": "Chios mastic resin",
        "pct": "100%"
      }
    ],
    "inci": "Pistacia Lentiscus (Mastic) Gum.",
    "howTo": [
      "Chew 1–2 pieces for 20–30 minutes a day, alternating sides.",
      "Stop if you feel any jaw-joint (TMJ) pain."
    ],
    "pairsWith": [
      "vitd-k2"
    ],
    "avoidWith": "Not recommended if you have TMJ problems.",
    "results": [
      {
        "when": "Weeks 1–2",
        "what": "Jaw fatigue eases as muscles adapt."
      },
      {
        "when": "Weeks 8–12",
        "what": "Masseters feel firmer."
      }
    ],
    "reviews": [
      {
        "name": "B. L.",
        "verified": true,
        "rating": 4,
        "weeks": 12,
        "photos": true,
        "title": "Hard work, in a good way",
        "text": "Way tougher than regular gum. My jaw ached for the first week. Stuck to 20 minutes a day."
      }
    ]
  },
  {
    "id": "vitd-k2",
    "name": "Vitamin D3 4000 IU + K2",
    "format": "Daily softgel · 90 count",
    "category": "supplement",
    "concerns": [
      "tone",
      "hairline"
    ],
    "bottle": "capsules",
    "size": "90 softgels · 3 months",
    "price": 21,
    "supplyDays": 90,
    "stock": {
      "status": "in",
      "qty": 520,
      "record": 365
    },
    "hardToSource": false,
    "rating": 4.6,
    "reviewCount": 442,
    "problem": "Low vitamin D, common in darker months and linked to hair shedding.",
    "summary": "Vitamin D3 paired with K2 (MK-7) in olive oil for absorption. One softgel a day with food.",
    "actives": [
      {
        "name": "Vitamin D3 (cholecalciferol)",
        "pct": "100 µg / 4000 IU"
      },
      {
        "name": "Vitamin K2 (MK-7)",
        "pct": "100 µg"
      }
    ],
    "inci": "Extra virgin olive oil, Bovine gelatin, Glycerin, Cholecalciferol, Menaquinone-7.",
    "howTo": [
      "One softgel daily with a meal that contains fat.",
      "Get your levels tested if you plan to take it long-term."
    ],
    "pairsWith": [
      "mastic"
    ],
    "avoidWith": "Speak to your doctor if you take blood thinners (K2).",
    "results": [
      {
        "when": "Weeks 6–8",
        "what": "Vitamin D levels typically normalise."
      }
    ],
    "reviews": [
      {
        "name": "H. J.",
        "verified": true,
        "rating": 5,
        "weeks": 12,
        "photos": false,
        "title": "Simple and cheap",
        "text": "Easy to remember, three months per bottle. Levels went from low to normal."
      }
    ]
  },
  {
    "id": "derma-roller",
    "name": "Titanium Micro-roller 0.5 mm",
    "format": "540-needle scalp & skin roller",
    "category": "tool",
    "concerns": [
      "hairline",
      "texture"
    ],
    "bottle": "roller-tool",
    "size": "Single unit · replace every 3 months",
    "price": 24,
    "supplyDays": 90,
    "stock": {
      "status": "in",
      "qty": 88,
      "record": 349
    },
    "hardToSource": false,
    "rating": 4.2,
    "reviewCount": 196,
    "problem": "Products absorbing poorly into the scalp.",
    "summary": "Surgical-grade titanium needles at 0.5 mm. Used weekly on the scalp alongside minoxidil in multiple studies. Comes with a sterilising case.",
    "actives": [
      {
        "name": "Needle length",
        "pct": "0.5 mm"
      },
      {
        "name": "Needle count",
        "pct": "540"
      }
    ],
    "inci": "Titanium needles, ABS handle, polycarbonate storage case.",
    "howTo": [
      "Once a week. Sterilise with 70% isopropyl alcohol before and after.",
      "Roll each area 4–5 times in each direction with light pressure.",
      "Wait 24 hours before applying minoxidil to the rolled area."
    ],
    "pairsWith": [
      "minox-5",
      "ghk-scalp"
    ],
    "avoidWith": "Never use on active breakouts, broken or infected skin. Never share.",
    "results": [
      {
        "when": "Months 3+",
        "what": "Used with minoxidil, improved response vs minoxidil alone in studies."
      }
    ],
    "reviews": [
      {
        "name": "F. D.",
        "verified": true,
        "rating": 4,
        "weeks": 16,
        "photos": false,
        "title": "Solid build",
        "text": "Needles stay sharp for the full three months. The case is a good touch."
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
      "ghk-face"
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
    "title": "Hair loss treatment: tablets, topicals and what actually works",
    "concern": "hairline",
    "minutes": 6,
    "products": [
      "finasteride",
      "topical-finmin",
      "keto-shampoo",
      "derma-roller"
    ],
    "intro": "Most hereditary hair loss responds to treatment, especially if you start early. Here's how the main options compare.",
    "sections": [
      {
        "h": "Finasteride",
        "p": "A daily tablet that targets the hormone behind most hereditary hair loss. It's the most proven option for keeping the hair you have."
      },
      {
        "h": "Topical finasteride and minoxidil",
        "p": "A scalp spray for people who'd rather avoid tablets. It combines two treatments in one daily application."
      },
      {
        "h": "Supporting the scalp",
        "p": "Ketoconazole shampoo a few times a week, and weekly microneedling, are common additions to a prescription routine."
      },
      {
        "h": "Be patient",
        "p": "Take photos in the same light every month. Real progress shows between months four and twelve."
      },
      {
        "h": "Talk to your clinician",
        "p": "If your hair loss is sudden, patchy or you're under 20, your clinician may recommend an in-person check first."
      }
    ]
  },
  {
    "slug": "oil-control-routine",
    "title": "A three-step routine for oily, congested skin",
    "concern": "breakouts",
    "minutes": 3,
    "products": [
      "niacinamide-10",
      "tretinoin",
      "spf-50"
    ],
    "intro": "Over-stripping oily skin makes it produce more oil. This routine controls shine without the rebound.",
    "sections": [
      {
        "h": "Morning",
        "p": "Gentle cleanser, Niacinamide 10% + Zinc 1%, then Daily Fluid SPF 50."
      },
      {
        "h": "Evening",
        "p": "Cleanse, then your prescription treatment if you have one. Tretinoin helps keep pores clear over time."
      },
      {
        "h": "What to expect",
        "p": "Shine drops within a couple of weeks. Congestion improves over one to three months."
      }
    ]
  },
  {
    "slug": "dark-circles-explained",
    "title": "Dark circles: pigment, shadow or blood vessels?",
    "concern": "dark-circles",
    "minutes": 4,
    "products": [
      "eye-caffeine",
      "spf-50"
    ],
    "intro": "There are three causes of dark circles, and only two respond to topicals. Work out which one you have first.",
    "sections": [
      {
        "h": "The stretch test",
        "p": "Gently stretch the skin under your eye. If the darkness lightens, it's likely vascular or shadow. If it stays, it's pigment."
      },
      {
        "h": "Pigment",
        "p": "Brown-toned. Responds to tranexamic acid and daily sunscreen over 6–10 weeks."
      },
      {
        "h": "Puffiness and vessels",
        "p": "Blue or purple-toned, worse in the morning. Caffeine and cold application help in the short term; sleep and salt intake matter more."
      },
      {
        "h": "Hollows",
        "p": "Shadows from volume loss under the eye don't respond to creams. Be sceptical of any product claiming otherwise."
      }
    ]
  },
  {
    "slug": "jaw-training",
    "title": "Jaw training with mastic gum: what's realistic",
    "concern": "jawline",
    "minutes": 3,
    "products": [
      "mastic"
    ],
    "intro": "Hard-chew gum trains the masseter muscles. Here's what it can and can't do.",
    "sections": [
      {
        "h": "What it does",
        "p": "Like any muscle, the masseter responds to resistance. Mastic is much firmer than regular gum, so it gives real resistance."
      },
      {
        "h": "How much",
        "p": "20–30 minutes a day, alternating sides. More isn't better — overdoing it can strain the jaw joint."
      },
      {
        "h": "What it doesn't do",
        "p": "It won't change bone structure. Body fat level matters more for visible jaw definition than any chewing routine."
      }
    ]
  }
];

const STORE = {
  "name": "Coveted",
  "subscribeDiscount": 0.15,
  "freeShippingOver": 50
};

// States where your clinician network is licensed. Replace with your real list.
const REGIONS = ["Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Massachusetts", "New Jersey", "New York", "North Carolina", "Ohio", "Pennsylvania", "Texas", "Virginia", "Washington"];
