# Coveted

**Telehealth model.** Prescription treatments (tretinoin, finasteride, topical finasteride + minoxidil, compounded pigment cream, azelaic acid 15%) are marked `rx: true` in `assets/js/data.js`. They can't be added to the bag: their product pages lead to an online consultation (`consult.html`) instead. Non-prescription products (GHK-Cu serums, SPF, niacinamide, ketoconazole shampoo and others) are sold normally.

The consultation is a front-end preview only. Answers are never stored or sent. To go live you need a telehealth infrastructure partner that provides licensed clinicians in each state, a HIPAA-compliant intake and records system, e-prescribing, and a partner (including compounding) pharmacy. Payment processing also needs a provider that supports telehealth and prescriptions. Replace `REGIONS` in `data.js` with the states your clinicians cover, and have a healthcare lawyer review the site copy, claims and flows before launch.

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
- **Reorder reminders** — one-time buyers can opt in to a single email ~7 days before the product typically runs out.
- **Reliable stock** — every product shows "in stock X of the last 365 days". Out-of-stock pages stay live with a restock date, a free reservation option and in-stock pairings.
- **Trust** — photo before/after reviews with weeks of use, guides, same-day dispatch, 30-day returns even opened.
- **Small extras** — choose 2 free samples in the bag.
- **Simple loyalty** — every 5th order gets a free full-size product. No points.
- **No over-emailing** — newsletter capped at one a month; email policy published on the subscribe page.

## Editing

All products, concerns, guides and store settings (discount, free-shipping threshold, dispatch cutoff, return window, loyalty count) live in `assets/js/data.js`. Product images are generated SVG bottles; swap `productArt()` in `assets/js/app.js` for real photography when you have it.

## Before launch

- **Reviews are placeholder copy**, and the before/after frames are empty placeholders. Replace them with real, verified customer reviews and photos.
- **Product data is illustrative.** Check every claim, strength and INCI list against your actual suppliers, and the regulatory rules (e.g. for minoxidil, ketoconazole, supplements) in the markets you sell to.
- **Checkout, subscriptions and emails are front-end only.** The bag and reminder sign-ups are stored in the browser's `localStorage`. Connect a commerce backend (e.g. Shopify with a subscription app such as Recharge, or Stripe Billing) and an email service (e.g. Klaviyo) to make them real.
- Guides are rendered client-side; for best SEO, pre-render them to static HTML or move to a CMS/static site generator.
