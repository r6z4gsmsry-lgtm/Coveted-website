# Coveted

The range: Tretinoin Cream (Rx), Finasteride 1 mg (Rx), Daily Fluid SPF 50+ PA++++, GHK-Cu Copper Peptide 1%, Hydrocortisone 1% Cream and Gradual Tanning Drops (DHA self-tan).

**Rx products.** Prescription products (tretinoin, finasteride) are marked `rx: true` in `assets/js/data.js`. They're bought like everything else, one click to the bag. When the bag contains an Rx item, checkout adds a 4-question health check in the bag drawer; a licensed clinician must approve the order before it ships, and the customer is charged for the Rx item only once it's approved.

This is required by law in the US and most other countries, and by payment providers and pharmacies. The health check is front-end only in this build, and nothing is stored or sent. To go live you need a telehealth partner (licensed clinicians in each state you ship to, HIPAA-compliant intake, e-prescribing, partner and compounding pharmacy) and a payment provider that supports prescriptions. Replace `REGIONS` in `data.js` with the states you serve, and have a healthcare lawyer review the site before launch.

A storefront for hard-to-source, function-first skin, hair and "looksmaxing" products. Static HTML/CSS/JS — no build step. Open `index.html` in a browser, or serve the folder with any static host.

**Cloudflare Workers:** `wrangler.jsonc` serves the folder as static assets (files listed in `.assetsignore` are not published). Connect the repo in Cloudflare with no build command and `npx wrangler deploy` as the deploy command.

## Pages

| Page | What it does |
| --- | --- |
| `index.html` | Hero, shop-by-concern grid, stock promise, best sellers, subscribe & save, photo reviews, guides |
| `shop.html` | Full catalogue, filter by concern (`shop.html#hairline`) and type (`shop.html#serum`), in-stock toggle, sort |
| `product.html#<id>` | Problem, active-ingredient table with strengths, subscribe/one-time options, stock record, reorder reminder, how to use, expected results timeline, full INCI list, pairings, reviews, related guides |
| `journal.html`, `guide.html#<slug>` | Education content, filterable by concern, with linked products |
| `subscribe.html` | Subscriptions, "every 5th order" membership, reorder reminders, email policy |
| `help.html` | Shipping, returns, stock promise, samples, FAQ |

## How the brief maps to the build

- **Neutral design** — warm paper and amber-glass palette, no gendered colour coding or language. Typography mixes an editorial serif (Aesop), typewriter-style mono labels (Le Labo) and clinical ingredient tables (The Ordinary).
- **Function-first** — navigation and cards lead with the concern (texture, hairline, dark circles, oil…); each product page opens with "The problem".
- **Ingredient transparency** — every active is listed with its strength on cards and product pages, plus the full ingredient list.
- **Subscribe & save** — 15% off, subscription is the default option, frequency defaults to how long one unit lasts (`supplyDays`). Switchable per line in the bag.
- **Reorder reminders** — one-time buyers can opt in to an email around when the product typically runs out.
- **Results-focused trust** — what-to-expect timelines and photo reviews on every product page. The site makes no service guarantees (stock, dispatch times, returns windows, loyalty rewards or email frequency); add your own policies to `help.html` once they're settled.

## Editing

All products, concerns, guides and store settings (discount, free-shipping threshold, dispatch cutoff, return window, loyalty count) live in `assets/js/data.js`. Product images are generated SVG bottles; swap `productArt()` in `assets/js/app.js` for real photography when you have it.

## Before launch

- **Reviews are placeholder copy**, and the before/after frames are empty placeholders. Replace them with real, verified customer reviews and photos.
- **Product data is illustrative.** Check every claim, strength and INCI list against your actual suppliers, and the regulatory rules (e.g. for minoxidil, ketoconazole, supplements) in the markets you sell to.
- **Checkout, subscriptions and emails are front-end only.** The bag and reminder sign-ups are stored in the browser's `localStorage`. Connect a commerce backend (e.g. Shopify with a subscription app such as Recharge, or Stripe Billing) and an email service (e.g. Klaviyo) to make them real.
- Guides are rendered client-side; for best SEO, pre-render them to static HTML or move to a CMS/static site generator.
