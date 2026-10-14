/* Coveted — catalogue, concerns and guides.
   All product, stock and review data lives here so the store can be
   edited without touching layout code. Reviews below are placeholder
   copy: replace them with real, verified customer reviews before launch. */

const CONCERNS = [
  { id: "texture", name: "Texture", line: "Rough patches, enlarged pores, uneven surface." },
  { id: "breakouts", name: "Breakouts & oil", line: "Excess sebum, congestion, recurring spots." },
  { id: "hairline", name: "Hairline", line: "Thinning at the temples and crown." },
  { id: "dark-circles", name: "Dark circles", line: "Pigment and puffiness under the eye." },
  { id: "tone", name: "Uneven tone", line: "Post-blemish marks, dullness, sun spots." },
  { id: "jawline", name: "Jaw & definition", line: "Masseter training and facial definition." },
  { id: "protection", name: "Daily protection", line: "UV, the cause of most visible ageing." }
];

const CATEGORIES = [
  { id: "serum", name: "Serums" },
  { id: "treatment", name: "Treatments" },
  { id: "sunscreen", name: "Sunscreen" },
  { id: "hair", name: "Hair & scalp" },
  { id: "supplement", name: "Supplements" },
  { id: "tool", name: "Tools" }
];

const PRODUCTS = [
  {
    id: "retinal-01",
    name: "Retinal 0.1%",
    format: "Encapsulated retinaldehyde serum",
    category: "serum",
    concerns: ["texture", "tone"],
    bottle: "dropper",
    size: "30 ml",
    price: 38,
    supplyDays: 60,
    stock: { status: "in", qty: 214, record: 361 },
    hardToSource: true,
    rating: 4.7,
    reviewCount: 312,
    problem: "Rough texture and visible pores that don't respond to exfoliation alone.",
    summary: "Retinaldehyde is one conversion step from retinoic acid, so it works faster than retinol at a lower, better-tolerated strength. Encapsulated for slow release overnight.",
    actives: [
      { name: "Retinaldehyde (encapsulated)", pct: "0.1%" },
      { name: "Squalane", pct: "5%" },
      { name: "Bisabolol", pct: "0.5%" }
    ],
    inci: "Squalane, Caprylic/Capric Triglyceride, Retinal, Hydrogenated Lecithin, Bisabolol, Tocopherol, Ascorbyl Palmitate, Helianthus Annuus Seed Oil.",
    howTo: [
      "Evening only. Apply 3–4 drops to dry skin after cleansing.",
      "Start every third night for two weeks, then every other night, then nightly.",
      "Follow with a plain moisturiser. Use SPF every morning."
    ],
    pairsWith: ["spf-50", "niacinamide-10"],
    avoidWith: "Don't layer with AHA/BHA exfoliants on the same night.",
    results: [
      { when: "Weeks 1–3", what: "Some dryness or flaking is normal while skin adjusts." },
      { when: "Weeks 4–8", what: "Smoother surface, finer texture on cheeks and forehead." },
      { when: "Week 12+", what: "Visibly refined pores and more even tone." }
    ],
    reviews: [
      { name: "J. M.", verified: true, rating: 5, weeks: 12, photos: true, title: "Texture on my cheeks is gone", text: "Tried two retinols before this and got nothing. Twelve weeks in, the bumpy texture on my cheeks is basically gone. Had a week of flaking at the start." },
      { name: "A. R.", verified: true, rating: 4, weeks: 8, photos: false, title: "Works, ramp up slowly", text: "Went nightly too fast and got irritated. Backed off to every other night like the guide says and it's been fine since." }
    ]
  },
  {
    id: "niacinamide-10",
    name: "Niacinamide 10% + Zinc 1%",
    format: "Water-based oil-control serum",
    category: "serum",
    concerns: ["breakouts", "texture"],
    bottle: "dropper",
    size: "30 ml",
    price: 18,
    supplyDays: 45,
    stock: { status: "in", qty: 488, record: 365 },
    hardToSource: false,
    rating: 4.5,
    reviewCount: 904,
    problem: "Shine by midday and congestion around the nose and chin.",
    summary: "A high-strength vitamin B3 serum that regulates visible sebum and reduces the look of congestion. Zinc PCA adds oil control.",
    actives: [
      { name: "Niacinamide", pct: "10%" },
      { name: "Zinc PCA", pct: "1%" }
    ],
    inci: "Aqua, Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.",
    howTo: [
      "Morning and evening, 2–3 drops before heavier creams.",
      "Let it absorb for a minute before the next step to avoid pilling."
    ],
    pairsWith: ["salicylic-2", "spf-50"],
    avoidWith: "Fine with almost everything. Apply separately from pure vitamin C if you notice flushing.",
    results: [
      { when: "Weeks 1–2", what: "Less midday shine." },
      { when: "Weeks 4–8", what: "Fewer clogged pores around the nose." },
      { when: "Week 8+", what: "More even, less reactive skin." }
    ],
    reviews: [
      { name: "S. K.", verified: true, rating: 5, weeks: 6, photos: true, title: "Shine control that actually lasts", text: "My T-zone used to be greasy by 11am. Now it lasts until late afternoon." },
      { name: "D. P.", verified: true, rating: 4, weeks: 4, photos: false, title: "Good basic", text: "Does what it says. Pills a bit if I put moisturiser on too fast." }
    ]
  },
  {
    id: "salicylic-2",
    name: "Salicylic Acid 2%",
    format: "BHA exfoliating solution",
    category: "treatment",
    concerns: ["breakouts", "texture"],
    bottle: "dropper",
    size: "30 ml",
    price: 16,
    supplyDays: 60,
    stock: { status: "in", qty: 301, record: 363 },
    hardToSource: false,
    rating: 4.4,
    reviewCount: 521,
    problem: "Blackheads, clogged pores and recurring breakouts.",
    summary: "An oil-soluble exfoliant that gets inside the pore to clear the build-up that leads to blackheads and spots.",
    actives: [
      { name: "Salicylic acid", pct: "2%" },
      { name: "Witch hazel distillate", pct: "3%" }
    ],
    inci: "Aqua, Salicylic Acid, Propanediol, Hamamelis Virginiana Water, Sodium Hydroxide, Polysorbate 20, Hydroxyethylcellulose, Phenoxyethanol.",
    howTo: [
      "Evening, 2–3 times a week. Apply to congested areas after cleansing.",
      "Don't use on the same night as Retinal 0.1%."
    ],
    pairsWith: ["niacinamide-10", "spf-50"],
    avoidWith: "Alternate nights with retinoids and other acids.",
    results: [
      { when: "Week 1", what: "Pores look clearer, especially on the nose." },
      { when: "Weeks 3–6", what: "Fewer new breakouts." }
    ],
    reviews: [
      { name: "M. T.", verified: true, rating: 5, weeks: 5, photos: true, title: "Nose blackheads cleared", text: "Three nights a week and the blackheads on my nose are mostly gone. Doesn't sting." }
    ]
  },
  {
    id: "azelaic-15",
    name: "Azelaic Acid 15%",
    format: "Brightening cream-gel",
    category: "treatment",
    concerns: ["tone", "breakouts"],
    bottle: "tube",
    size: "30 ml",
    price: 24,
    supplyDays: 60,
    stock: { status: "low", qty: 18, record: 352, restock: "2026-10-28" },
    hardToSource: true,
    rating: 4.6,
    reviewCount: 187,
    problem: "Red and brown marks left behind after breakouts.",
    summary: "Azelaic acid fades post-blemish marks and calms redness. 15% is a strength that's difficult to find without a prescription in most markets.",
    actives: [
      { name: "Azelaic acid", pct: "15%" },
      { name: "Allantoin", pct: "0.5%" }
    ],
    inci: "Aqua, Azelaic Acid, Propylene Glycol, Cetearyl Alcohol, Glyceryl Stearate, Allantoin, Polysorbate 80, Carbomer, Sodium Hydroxide, Phenoxyethanol.",
    howTo: [
      "Morning or evening, a pea-sized amount over the whole face.",
      "Mild tingling for the first week is normal."
    ],
    pairsWith: ["niacinamide-10", "spf-50"],
    avoidWith: "Space out from strong acids if skin feels sensitised.",
    results: [
      { when: "Weeks 2–4", what: "Calmer, less red skin." },
      { when: "Weeks 8–12", what: "Post-blemish marks noticeably lighter." }
    ],
    reviews: [
      { name: "L. H.", verified: true, rating: 5, weeks: 10, photos: true, title: "Finally fading old marks", text: "Had leftover marks from breakouts for over a year. Ten weeks in, most have faded." }
    ]
  },
  {
    id: "spf-50",
    name: "Daily Fluid SPF 50",
    format: "Invisible broad-spectrum sunscreen",
    category: "sunscreen",
    concerns: ["protection", "tone"],
    bottle: "tube",
    size: "50 ml",
    price: 26,
    supplyDays: 30,
    stock: { status: "in", qty: 640, record: 365 },
    hardToSource: true,
    rating: 4.8,
    reviewCount: 1206,
    problem: "UV exposure — the cause of most visible ageing, pigment and texture.",
    summary: "A thin, no-cast fluid built on the newer UV filters that are widely available in Europe and Asia but hard to source elsewhere. Sits flat under nothing or anything.",
    actives: [
      { name: "Bis-ethylhexyloxyphenol methoxyphenyl triazine", pct: "5%" },
      { name: "Diethylamino hydroxybenzoyl hexyl benzoate", pct: "8%" },
      { name: "Ethylhexyl triazone", pct: "4%" },
      { name: "Niacinamide", pct: "2%" }
    ],
    inci: "Aqua, Alcohol Denat., Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dibutyl Adipate, Niacinamide, Glycerin, Silica, Tocopherol.",
    howTo: [
      "Last step every morning. Two finger-lengths for face and neck.",
      "Reapply every two hours in direct sun."
    ],
    pairsWith: ["retinal-01", "vitc-15"],
    avoidWith: "Nothing. Use it with everything.",
    results: [
      { when: "Daily", what: "Protects the results of everything else you use." },
      { when: "Long term", what: "Prevents new pigment and slows visible ageing." }
    ],
    reviews: [
      { name: "R. N.", verified: true, rating: 5, weeks: 20, photos: false, title: "The only one I'll wear", text: "No white cast, no grease, no eye sting. I've finished six tubes." },
      { name: "C. O.", verified: true, rating: 5, weeks: 8, photos: false, title: "Invisible", text: "Nobody can tell I'm wearing sunscreen, which is the point." }
    ]
  },
  {
    id: "vitc-15",
    name: "Vitamin C 15% + Ferulic",
    format: "L-ascorbic acid antioxidant serum",
    category: "serum",
    concerns: ["tone", "protection"],
    bottle: "dropper",
    size: "30 ml",
    price: 32,
    supplyDays: 45,
    stock: { status: "in", qty: 133, record: 358 },
    hardToSource: false,
    rating: 4.4,
    reviewCount: 276,
    problem: "Dull, uneven skin and early sun spots.",
    summary: "Pure L-ascorbic acid stabilised with ferulic acid and vitamin E. Boosts the protection of your sunscreen and brightens over time.",
    actives: [
      { name: "L-ascorbic acid", pct: "15%" },
      { name: "Ferulic acid", pct: "0.5%" },
      { name: "Tocopherol", pct: "1%" }
    ],
    inci: "Aqua, Ethoxydiglycol, Ascorbic Acid, Propylene Glycol, Glycerin, Laureth-23, Tocopherol, Ferulic Acid, Panthenol, Sodium Hyaluronate, Triethanolamine, Phenoxyethanol.",
    howTo: [
      "Mornings, 4–5 drops before sunscreen.",
      "Store cool and closed. A slight colour change over time is normal."
    ],
    pairsWith: ["spf-50"],
    avoidWith: "Use niacinamide at a different time of day if you flush.",
    results: [
      { when: "Weeks 2–4", what: "Brighter, more even skin." },
      { when: "Weeks 8–12", what: "Sun spots begin to fade." }
    ],
    reviews: [
      { name: "P. A.", verified: true, rating: 4, weeks: 8, photos: true, title: "Noticeably brighter", text: "Skin looks more awake. Tingles for a few seconds then fine." }
    ]
  },
  {
    id: "eye-caffeine",
    name: "Caffeine 5% + Tranexamic 2%",
    format: "Under-eye serum",
    category: "serum",
    concerns: ["dark-circles"],
    bottle: "roller",
    size: "15 ml",
    price: 22,
    supplyDays: 60,
    stock: { status: "in", qty: 176, record: 360 },
    hardToSource: true,
    rating: 4.3,
    reviewCount: 233,
    problem: "Puffiness and dark circles under the eyes.",
    summary: "Caffeine reduces morning puffiness; tranexamic acid targets the pigment component of dark circles. Metal roller tip for a cooling, depuffing apply.",
    actives: [
      { name: "Caffeine", pct: "5%" },
      { name: "Tranexamic acid", pct: "2%" },
      { name: "EGCG (green tea)", pct: "1%" }
    ],
    inci: "Aqua, Caffeine, Tranexamic Acid, Glycerin, Epigallocatechin Gallatyl Glucoside, Propanediol, Sodium Hyaluronate, Xanthan Gum, Phenoxyethanol.",
    howTo: [
      "Morning and evening. Roll gently from inner to outer corner.",
      "Keep it in the fridge for extra depuffing."
    ],
    pairsWith: ["spf-50"],
    avoidWith: "Keep retinoids away from the immediate eye area while adjusting.",
    results: [
      { when: "Immediately", what: "Less morning puffiness." },
      { when: "Weeks 6–10", what: "Pigment-based dark circles lighten." }
    ],
    reviews: [
      { name: "T. B.", verified: true, rating: 4, weeks: 8, photos: true, title: "Puffiness gone in the morning", text: "Puffiness is better within minutes. The darkness took about two months to fade." }
    ]
  },
  {
    id: "minox-5",
    name: "Minoxidil 5% Foam",
    format: "Topical hair regrowth treatment",
    category: "hair",
    concerns: ["hairline"],
    bottle: "foam",
    size: "60 ml · 1 month",
    price: 29,
    supplyDays: 30,
    stock: { status: "in", qty: 402, record: 365 },
    hardToSource: false,
    rating: 4.5,
    reviewCount: 689,
    problem: "Thinning at the temples and crown.",
    summary: "The most studied over-the-counter treatment for hereditary hair loss. Propylene-glycol-free foam for less scalp irritation than solutions.",
    actives: [
      { name: "Minoxidil", pct: "5%" }
    ],
    inci: "Minoxidil 5% w/w. Inactive: Alcohol, Butane, Cetyl Alcohol, Citric Acid, Glycerin, Isobutane, Lactic Acid, Polysorbate 60, Propane, Purified Water, Stearyl Alcohol.",
    howTo: [
      "Half a capful of foam to a dry scalp, twice daily.",
      "Massage in with fingertips and wash hands afterwards.",
      "Consistency is everything — results stop if use stops."
    ],
    pairsWith: ["keto-shampoo", "ghk-scalp"],
    avoidWith: "Not for use during pregnancy. Read the leaflet; talk to a pharmacist if you have heart conditions.",
    results: [
      { when: "Weeks 2–8", what: "Temporary shedding is common and a sign it's working." },
      { when: "Months 3–4", what: "New, fine growth appears." },
      { when: "Months 6–12", what: "Full results; growth thickens." }
    ],
    reviews: [
      { name: "K. W.", verified: true, rating: 5, weeks: 28, photos: true, title: "Temples filled back in", text: "Seven months in. The shed at month one scared me but I stuck with it. Temples noticeably fuller." }
    ]
  },
  {
    id: "keto-shampoo",
    name: "Ketoconazole 1% Shampoo",
    format: "Anti-dandruff scalp shampoo",
    category: "hair",
    concerns: ["hairline"],
    bottle: "pump",
    size: "200 ml",
    price: 17,
    supplyDays: 60,
    stock: { status: "in", qty: 255, record: 362 },
    hardToSource: false,
    rating: 4.5,
    reviewCount: 410,
    problem: "Flaking and scalp inflammation that can accompany thinning.",
    summary: "An antifungal shampoo that controls flaking and keeps the scalp in good condition. A common companion to minoxidil.",
    actives: [
      { name: "Ketoconazole", pct: "1%" },
      { name: "Zinc pyrithione", pct: "0.5%" }
    ],
    inci: "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Ketoconazole, Zinc Pyrithione, Glycol Distearate, Sodium Chloride, Citric Acid, Parfum, Sodium Benzoate.",
    howTo: [
      "2–3 times a week in place of your usual shampoo.",
      "Leave on the scalp for 3–5 minutes before rinsing."
    ],
    pairsWith: ["minox-5", "ghk-scalp"],
    avoidWith: "Use your normal shampoo on other days to avoid dryness.",
    results: [
      { when: "Week 1", what: "Less flaking and itch." },
      { when: "Ongoing", what: "A healthier scalp environment." }
    ],
    reviews: [
      { name: "N. G.", verified: true, rating: 4, weeks: 10, photos: false, title: "Scalp feels better", text: "Itch is gone. Using it alongside the minoxidil foam." }
    ]
  },
  {
    id: "ghk-scalp",
    name: "Copper Peptide GHK-Cu 1%",
    format: "Leave-on scalp serum",
    category: "hair",
    concerns: ["hairline"],
    bottle: "dropper",
    size: "50 ml",
    price: 42,
    supplyDays: 45,
    stock: { status: "out", qty: 0, record: 340, restock: "2026-10-21" },
    hardToSource: true,
    rating: 4.2,
    reviewCount: 158,
    problem: "Thin, weak hair and a scalp that feels tight.",
    summary: "Blue copper peptide at a meaningful concentration, with caffeine and rosemary leaf extract. Lightweight and non-greasy, so it disappears into the hair.",
    actives: [
      { name: "Copper tripeptide-1 (GHK-Cu)", pct: "1%" },
      { name: "Caffeine", pct: "1%" },
      { name: "Rosmarinus officinalis leaf extract", pct: "2%" }
    ],
    inci: "Aqua, Copper Tripeptide-1, Caffeine, Rosmarinus Officinalis Leaf Extract, Glycerin, Panthenol, Propanediol, Hydroxyethylcellulose, Phenoxyethanol.",
    howTo: [
      "Once daily. Part hair and apply 1 dropper across thinning areas.",
      "Can be used alongside minoxidil — apply at the opposite end of the day."
    ],
    pairsWith: ["minox-5", "keto-shampoo"],
    avoidWith: "Keep away from vitamin C serums on the same area.",
    results: [
      { when: "Weeks 4–8", what: "Scalp feels healthier; hair less brittle." },
      { when: "Months 3–6", what: "Hair looks thicker and fuller." }
    ],
    reviews: [
      { name: "E. S.", verified: true, rating: 4, weeks: 16, photos: true, title: "Good add-on to my stack", text: "Hard to find at 1% anywhere else. Hair feels thicker but I use minoxidil too so hard to separate." }
    ]
  },
  {
    id: "mastic",
    name: "Mastic Jaw Gum",
    format: "Hard-chew resin gum · 60 pieces",
    category: "supplement",
    concerns: ["jawline"],
    bottle: "tin",
    size: "60 pieces · 1 month",
    price: 19,
    supplyDays: 30,
    stock: { status: "in", qty: 290, record: 357 },
    hardToSource: true,
    rating: 4.3,
    reviewCount: 377,
    problem: "Soft definition along the jaw.",
    summary: "Natural Chios mastic resin — much firmer than ordinary gum, so it gives the masseters real resistance. Sugar-free, unflavoured, no additives.",
    actives: [
      { name: "Chios mastic resin", pct: "100%" }
    ],
    inci: "Pistacia Lentiscus (Mastic) Gum.",
    howTo: [
      "Chew 1–2 pieces for 20–30 minutes a day, alternating sides.",
      "Stop if you feel any jaw-joint (TMJ) pain."
    ],
    pairsWith: ["vitd-k2"],
    avoidWith: "Not recommended if you have TMJ problems.",
    results: [
      { when: "Weeks 1–2", what: "Jaw fatigue eases as muscles adapt." },
      { when: "Weeks 8–12", what: "Masseters feel firmer." }
    ],
    reviews: [
      { name: "B. L.", verified: true, rating: 4, weeks: 12, photos: true, title: "Hard work, in a good way", text: "Way tougher than regular gum. My jaw ached for the first week. Stuck to 20 minutes a day." }
    ]
  },
  {
    id: "vitd-k2",
    name: "Vitamin D3 4000 IU + K2",
    format: "Daily softgel · 90 count",
    category: "supplement",
    concerns: ["tone", "hairline"],
    bottle: "capsules",
    size: "90 softgels · 3 months",
    price: 21,
    supplyDays: 90,
    stock: { status: "in", qty: 520, record: 365 },
    hardToSource: false,
    rating: 4.6,
    reviewCount: 442,
    problem: "Low vitamin D, common in darker months and linked to hair shedding.",
    summary: "Vitamin D3 paired with K2 (MK-7) in olive oil for absorption. One softgel a day with food.",
    actives: [
      { name: "Vitamin D3 (cholecalciferol)", pct: "100 µg / 4000 IU" },
      { name: "Vitamin K2 (MK-7)", pct: "100 µg" }
    ],
    inci: "Extra virgin olive oil, Bovine gelatin, Glycerin, Cholecalciferol, Menaquinone-7.",
    howTo: [
      "One softgel daily with a meal that contains fat.",
      "Get your levels tested if you plan to take it long-term."
    ],
    pairsWith: ["mastic"],
    avoidWith: "Speak to your doctor if you take blood thinners (K2).",
    results: [
      { when: "Weeks 6–8", what: "Vitamin D levels typically normalise." }
    ],
    reviews: [
      { name: "H. J.", verified: true, rating: 5, weeks: 12, photos: false, title: "Simple and cheap", text: "Easy to remember, three months per bottle. Levels went from low to normal." }
    ]
  },
  {
    id: "derma-roller",
    name: "Titanium Micro-roller 0.5 mm",
    format: "540-needle scalp & skin roller",
    category: "tool",
    concerns: ["hairline", "texture"],
    bottle: "roller-tool",
    size: "Single unit · replace every 3 months",
    price: 24,
    supplyDays: 90,
    stock: { status: "in", qty: 88, record: 349 },
    hardToSource: false,
    rating: 4.2,
    reviewCount: 196,
    problem: "Products absorbing poorly into the scalp.",
    summary: "Surgical-grade titanium needles at 0.5 mm. Used weekly on the scalp alongside minoxidil in multiple studies. Comes with a sterilising case.",
    actives: [
      { name: "Needle length", pct: "0.5 mm" },
      { name: "Needle count", pct: "540" }
    ],
    inci: "Titanium needles, ABS handle, polycarbonate storage case.",
    howTo: [
      "Once a week. Sterilise with 70% isopropyl alcohol before and after.",
      "Roll each area 4–5 times in each direction with light pressure.",
      "Wait 24 hours before applying minoxidil to the rolled area."
    ],
    pairsWith: ["minox-5", "ghk-scalp"],
    avoidWith: "Never use on active breakouts, broken or infected skin. Never share.",
    results: [
      { when: "Months 3+", what: "Used with minoxidil, improved response vs minoxidil alone in studies." }
    ],
    reviews: [
      { name: "F. D.", verified: true, rating: 4, weeks: 16, photos: false, title: "Solid build", text: "Needles stay sharp for the full three months. The case is a good touch." }
    ]
  }
];

const GUIDES = [
  {
    slug: "start-a-retinoid",
    title: "How to start a retinoid without wrecking your skin",
    concern: "texture",
    minutes: 4,
    products: ["retinal-01", "spf-50"],
    intro: "Retinoids are the most proven ingredient for texture, but most people quit in the first month because they go too fast. Here's the schedule that works.",
    sections: [
      { h: "Why retinal and not retinol", p: "Your skin converts retinol to retinal, then to retinoic acid. Starting one step closer means you get results at a lower, gentler strength." },
      { h: "The ramp-up", p: "Weeks 1–2: every third night. Weeks 3–4: every other night. Week 5 onwards: nightly if your skin is comfortable. If you get stinging or peeling, drop back a step for a week." },
      { h: "What to pair it with", p: "A plain moisturiser after, and SPF 50 every morning without exception. Retinoids make skin more sensitive to sun, and UV undoes the results." },
      { h: "What to expect", p: "Some flaking in the first three weeks is normal. Texture improves noticeably around week eight. Pores and tone keep improving until week twelve and beyond." }
    ]
  },
  {
    slug: "hairline-stack",
    title: "The hairline stack: minoxidil, ketoconazole, microneedling",
    concern: "hairline",
    minutes: 6,
    products: ["minox-5", "keto-shampoo", "derma-roller", "ghk-scalp"],
    intro: "There's no single fix for thinning, but three over-the-counter tools have good evidence behind them and work well together.",
    sections: [
      { h: "Minoxidil is the base", p: "Twice daily, every day. It extends the growth phase of the hair follicle. Expect a shed in the first two months — it's old hair making way for new growth." },
      { h: "Ketoconazole for the scalp", p: "Two to three washes a week with a 3–5 minute contact time. It keeps the scalp calm and is a common addition to minoxidil routines." },
      { h: "Microneedling once a week", p: "0.5 mm, once a week, sterilised. Skip minoxidil for 24 hours on rolled areas. Studies combining the two show a better response than minoxidil alone." },
      { h: "Be patient and take photos", p: "Take photos in the same light every four weeks. Real progress shows at months four to six, and daily mirror checks will only make you anxious." },
      { h: "When to see a doctor", p: "If you're losing hair quickly, in patches, or under 20, see a doctor or dermatologist first. Prescription options exist that we can't sell." }
    ]
  },
  {
    slug: "oil-control-routine",
    title: "A three-step routine for oily, congested skin",
    concern: "breakouts",
    minutes: 3,
    products: ["niacinamide-10", "salicylic-2", "spf-50"],
    intro: "Over-stripping oily skin makes it produce more oil. This routine controls shine without the rebound.",
    sections: [
      { h: "Morning", p: "Gentle cleanser, Niacinamide 10% + Zinc 1%, then Daily Fluid SPF 50. That's it." },
      { h: "Evening", p: "Cleanse, then Salicylic Acid 2% on three nights a week. On the other nights, niacinamide again or nothing." },
      { h: "What to expect", p: "Shine drops within two weeks. Clogged pores and blackheads improve over four to six." }
    ]
  },
  {
    slug: "dark-circles-explained",
    title: "Dark circles: pigment, shadow or blood vessels?",
    concern: "dark-circles",
    minutes: 4,
    products: ["eye-caffeine", "spf-50"],
    intro: "There are three causes of dark circles, and only two respond to topicals. Work out which one you have first.",
    sections: [
      { h: "The stretch test", p: "Gently stretch the skin under your eye. If the darkness lightens, it's likely vascular or shadow. If it stays, it's pigment." },
      { h: "Pigment", p: "Brown-toned. Responds to tranexamic acid and daily sunscreen over 6–10 weeks." },
      { h: "Puffiness and vessels", p: "Blue or purple-toned, worse in the morning. Caffeine and cold application help in the short term; sleep and salt intake matter more." },
      { h: "Hollows", p: "Shadows from volume loss under the eye don't respond to creams. Be sceptical of any product claiming otherwise." }
    ]
  },
  {
    slug: "jaw-training",
    title: "Jaw training with mastic gum: what's realistic",
    concern: "jawline",
    minutes: 3,
    products: ["mastic"],
    intro: "Hard-chew gum trains the masseter muscles. Here's what it can and can't do.",
    sections: [
      { h: "What it does", p: "Like any muscle, the masseter responds to resistance. Mastic is much firmer than regular gum, so it gives real resistance." },
      { h: "How much", p: "20–30 minutes a day, alternating sides. More isn't better — overdoing it can strain the jaw joint." },
      { h: "What it doesn't do", p: "It won't change bone structure. Body fat level matters more for visible jaw definition than any chewing routine." }
    ]
  }
];

const STORE = {
  name: "Coveted",
  subscribeDiscount: 0.15,
  freeShippingOver: 50,
  dispatchCutoff: "2pm",
  returnDays: 30,
  loyaltyEvery: 5
};
