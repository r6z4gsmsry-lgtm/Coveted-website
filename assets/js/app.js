/* Coveted — shared UI: header, footer, cart drawer, product imagery. */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const money = (n) => "$" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, "");
const subPrice = (p) => p.price * (1 - STORE.subscribeDiscount);
const byId = (id) => PRODUCTS.find((p) => p.id === id);
/* Pages are addressed with a bare hash token (product.html#tretinoin, shop.html#hairline),
   which works on any static host. Old ?id= style links still resolve. */
const params = new URLSearchParams(location.search);
const route = decodeURIComponent(location.hash.slice(1));
const isRoute = (t) => [PRODUCTS, GUIDES, CONCERNS, CATEGORIES].some((list) => list.some((x) => (x.id || x.slug) === t));
addEventListener("hashchange", () => { if (isRoute(decodeURIComponent(location.hash.slice(1)))) location.reload(); });
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function store(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

function formatDate(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long" });
}

/* Frequency options offered for subscriptions, defaulting to how long one unit lasts. */
function frequencyOptions(p) {
  const base = [30, 45, 60, 90];
  if (!base.includes(p.supplyDays)) base.push(p.supplyDays);
  return base.sort((a, b) => a - b);
}
const freqLabel = (d) => d % 30 === 0 ? `Every ${d / 30 === 1 ? "month" : d / 30 + " months"}` : `Every ${Math.round(d / 7)} weeks`;

/* ---------- Product imagery (inline SVG, no image assets needed) ---------- */

/* Packaging is drawn per product from its colour, cap and label fields in data.js. */

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return "#" + [n >> 16, (n >> 8) & 255, n & 255].map((v) => c(v).toString(16).padStart(2, "0")).join("");
}

function label(p, x, y, w, h) {
  const lines = p.label || [p.name];
  const longest = Math.max(...lines.map((l) => l.length));
  const size = Math.min(15, (w - 10) / (longest * 0.56));
  const top = y + 22;
  const text = lines.map((l, i) => `<text x="${x + w / 2}" y="${top + size * (i + 1)}" text-anchor="middle" font-family="Familjen Grotesk, Arial, sans-serif" font-weight="600" font-size="${size.toFixed(1)}" letter-spacing="-.2" fill="#1d1c1a">${esc(l)}</text>`).join("");
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#fbf7ef"/>
    <text x="${x + w / 2}" y="${y + 13}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="5.5" letter-spacing="1.6" fill="#6b665d">COVETED</text>
    ${text}
    <text x="${x + w / 2}" y="${top + size * lines.length + 12}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="5.6" fill="#4b4740">${esc(p.sub || "")}</text>
    <rect x="${x}" y="${y + h - 7}" width="${w}" height="7" fill="${p.color}" opacity=".85"/>
  </g>`;
}

function productArt(p) {
  const color = p.color || "#8a531f";
  const cap = p.cap || "#1d1c1a";
  const g = `g-${p.id}`;
  const defs = `<linearGradient id="${g}" x1="0" x2="1">
      <stop offset="0" stop-color="${shade(color, -.12)}"/><stop offset=".42" stop-color="${shade(color, .1)}"/><stop offset="1" stop-color="${shade(color, -.16)}"/></linearGradient>`;
  const fill = `url(#${g})`;
  const sheen = (x, y, h) => `<rect x="${x}" y="${y}" width="7" height="${h}" rx="3.5" fill="#fff" opacity=".22"/>`;
  let body = "";
  switch (p.bottle) {
    case "tube":
      body = `<path d="M60 36 H140 L131 202 Q130 210 122 210 H78 Q70 210 69 202 Z" fill="${fill}"/>
        <rect x="58" y="28" width="84" height="11" rx="2" fill="${shade(color, -.2)}"/>
        <rect x="76" y="208" width="48" height="34" rx="7" fill="${cap}"/>
        ${sheen(70, 46, 140)}
        ${label(p, 73, 74, 54, 96)}`;
      break;
    case "capsules":
      body = `<rect x="54" y="96" width="92" height="144" rx="16" fill="${fill}"/>
        <rect x="58" y="62" width="84" height="38" rx="7" fill="${cap}"/>
        <g stroke="${shade(cap, .12)}" stroke-width="1.4">${Array.from({ length: 9 }, (_, i) => `<line x1="${66 + i * 8.5}" y1="68" x2="${66 + i * 8.5}" y2="94"/>`).join("")}</g>
        ${sheen(62, 108, 118)}
        ${label(p, 64, 124, 72, 92)}`;
      break;
    default: // dropper
      body = `<rect x="60" y="100" width="80" height="140" rx="16" fill="${fill}"/>
        <rect x="83" y="84" width="34" height="20" rx="3" fill="${shade(cap, .08)}"/>
        <rect x="87" y="36" width="26" height="52" rx="13" fill="${cap}"/>
        ${sheen(67, 112, 112)}
        ${label(p, 69, 128, 62, 92)}`;
  }
  return `<svg viewBox="0 0 200 260" role="img" aria-label="${esc(p.name)}, ${esc(p.size)}"><defs>${defs}</defs>
    <ellipse cx="100" cy="244" rx="60" ry="6" fill="#000" opacity=".1"/>${body}</svg>`;
}

/* ---------- Stock ---------- */

function stockBadge(p, long = false) {
  if (p.stock.status === "out") {
    return `<span class="stock stock--out">Out of stock</span>`;
  }
  if (p.stock.status === "low") {
    return `<span class="stock stock--low">Only ${p.stock.qty} left</span>`;
  }
  return `<span class="stock stock--in">In stock</span>`;
}

/* ---------- Product card ---------- */

const tintOf = (p) => p.bg || (CONCERNS.find((c) => c.id === p.concerns[0]) || {}).tint || "var(--sunk)";

function productCard(p) {
  const out = p.stock.status === "out";
  const concern = CONCERNS.find((c) => c.id === p.concerns[0]);
  return `<article class="card" style="--tint:${tintOf(p)};--pack:${p.color || "var(--green)"}">
    <a href="product.html#${p.id}" class="card__link">
      <div class="card__art">
        ${productArt(p)}
        <div class="card__badges">
          ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
          ${p.rx && p.badge !== "Rx" ? `<span class="badge badge--rx">Rx</span>` : ""}
        </div>
      </div>
      <div class="card__body">
        <p class="card__rating">${stars(p.rating)} <span>${p.rating} (${p.reviewCount.toLocaleString("en-US")})</span></p>
        <h3 class="card__name">${esc(p.name)}</h3>
        <p class="card__format">${esc(p.benefit || p.format)}</p>
        <p class="card__concern">${esc(concern.name)}</p>
      </div>
    </a>
    <div class="card__foot">
      <div>
        <p class="card__price">${money(p.price)}</p>
        <p class="card__sub">${money(subPrice(p))} with subscribe</p>
      </div>
      ${out ? `<span class="quick quick--off">Sold out</span>` : `<button class="quick" data-add="${p.id}" aria-label="Add ${esc(p.name)} to bag">Add to bag</button>`}
    </div>
  </article>`;
}

/* ---------- Cart ---------- */

const cart = {
  items: store("cv-cart", []),
  persist() { save("cv-cart", this.items); renderCart(); },
  add(id, mode = "once", every = null, qty = 1) {
    const p = byId(id);
    const line = this.items.find((l) => l.id === id && l.mode === mode);
    if (line) line.qty += qty;
    else this.items.push({ id, mode, every: every || p.supplyDays, qty });
    this.persist();
  },
  update(i, patch) { Object.assign(this.items[i], patch); this.persist(); },
  remove(i) { this.items.splice(i, 1); this.persist(); },
  count() { return this.items.reduce((n, l) => n + l.qty, 0); },
  subtotal() {
    return this.items.reduce((s, l) => {
      const p = byId(l.id);
      return s + l.qty * (l.mode === "sub" ? subPrice(p) : p.price);
    }, 0);
  }
};

function renderCart() {
  $$(".js-cart-count").forEach((el) => (el.textContent = cart.count()));
  const body = $("#cart-body");
  if (!body) return;

  if (!cart.items.length) {
    body.innerHTML = `<div class="drawer__empty">
      <p>Your bag is empty.</p>
      <a class="btn" href="shop.html">Shop by concern</a>
    </div>`;
    $("#cart-foot").innerHTML = "";
    return;
  }

  const subtotal = cart.subtotal();
  const remaining = STORE.freeShippingOver - subtotal;

  body.innerHTML = `
    <div class="ship-meter">
      <p>${remaining > 0 ? `${money(remaining)} away from free shipping` : "Free shipping unlocked"}</p>
      <div class="ship-meter__bar"><span style="width:${Math.min(100, (subtotal / STORE.freeShippingOver) * 100)}%"></span></div>
    </div>
    <ul class="lines">${cart.items.map((l, i) => {
      const p = byId(l.id);
      return `<li class="line">
        <div class="line__art" style="--tint:${tintOf(p)}">${productArt(p)}</div>
        <div class="line__info">
          <p class="line__name">${esc(p.name)}</p>
          <p class="muted small">${esc(p.size)}</p>
          <div class="seg seg--small" role="group" aria-label="Purchase type">
            <button data-line="${i}" data-mode="once" aria-pressed="${l.mode === "once"}">One-time</button>
            <button data-line="${i}" data-mode="sub" aria-pressed="${l.mode === "sub"}">Subscribe −${STORE.subscribeDiscount * 100}%</button>
          </div>
          ${l.mode === "sub" ? `<select class="select select--small" data-line="${i}" data-field="every" aria-label="Delivery frequency">
            ${frequencyOptions(p).map((d) => `<option value="${d}" ${d === l.every ? "selected" : ""}>${freqLabel(d)}</option>`).join("")}
          </select>` : ""}
          <div class="line__row">
            <div class="qty">
              <button data-line="${i}" data-qty="-1" aria-label="Decrease">−</button><span>${l.qty}</span><button data-line="${i}" data-qty="1" aria-label="Increase">+</button>
            </div>
            <span>${money(l.qty * (l.mode === "sub" ? subPrice(p) : p.price))}</span>
          </div>
        </div>
      </li>`;
    }).join("")}</ul>
    `;

  $("#cart-foot").innerHTML = `
    <div class="totals">
      <p><span>Subtotal</span><span>${money(subtotal)}</span></p>
      <p><span>Shipping</span><span>${remaining > 0 ? money(4.95) : "Free"}</span></p>
    </div>
    ${cart.items.some((l) => byId(l.id).rx) ? `<p class="small muted center">Your bag has an Rx item. Checkout includes a quick 4-question health check.</p>` : ""}
    <button class="btn btn--block" id="checkout">Checkout</button>
`;
}

/* Checkout. Bags with an Rx item get a short health check that a licensed
   clinician reviews after the order is placed. Payment isn't connected in
   this build (see README). */
function startCheckout() {
  const rxItems = cart.items.map((l) => byId(l.id)).filter((p) => p.rx);
  if (!rxItems.length) return showPaymentNote();
  $("#cart-body").innerHTML = `<form class="health" id="health">
    <p class="eyebrow">Quick health check</p>
    <h3>4 questions for your ${rxItems.map((p) => esc(p.name)).join(" and ")}</h3>
    <p class="small muted">A licensed clinician reviews these before your Rx item ships.</p>
    <fieldset><legend>Are you 18 or over?</legend>
      <label class="choice"><input type="radio" name="adult" value="yes" required> Yes</label>
      <label class="choice"><input type="radio" name="adult" value="no"> No</label></fieldset>
    <fieldset><legend>Are you pregnant, breastfeeding or trying to conceive?</legend>
      <label class="choice"><input type="radio" name="pregnant" value="yes" required> Yes</label>
      <label class="choice"><input type="radio" name="pregnant" value="no"> No</label></fieldset>
    <fieldset><legend>Do you take any medication or have a liver, heart or skin condition?</legend>
      <label class="choice"><input type="radio" name="health" value="yes" required> Yes</label>
      <label class="choice"><input type="radio" name="health" value="no"> No</label>
      <label for="health-notes" class="sr">Details</label>
      <textarea class="select" id="health-notes" name="notes" rows="2" placeholder="If yes, tell us briefly"></textarea></fieldset>
    <label class="health__state" for="health-state"><span>Shipping state</span>
      <select class="select" id="health-state" name="state" required><option value="">Choose</option>${REGIONS.map((r) => `<option>${r}</option>`).join("")}</select></label>
  </form>`;
  $("#cart-foot").innerHTML = `<button class="btn btn--block" form="health">Continue to payment</button>
    <button class="link small center" id="health-back" type="button">Back to bag</button>`;
  $("#health-back").addEventListener("click", renderCart);
  $("#health").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    if (d.get("adult") === "no") {
      $("#cart-body").innerHTML = `<p class="eyebrow">Health check</p><h3>We can only send Rx items to adults</h3><p class="muted">Remove the Rx item from your bag to continue with everything else.</p>`;
      $("#cart-foot").innerHTML = `<button class="btn btn--block" id="health-back2">Back to bag</button>`;
      $("#health-back2").addEventListener("click", renderCart);
      return;
    }
    showPaymentNote(d.get("pregnant") === "yes");
  });
}

function showPaymentNote(flag) {
  $("#cart-body").innerHTML = `<p class="eyebrow">Payment</p>
    <h3>Almost there</h3>
    ${flag ? `<p class="flag small">Some Rx treatments aren't used during pregnancy. A clinician will contact you about a suitable alternative before anything ships.</p>` : ""}
    <p class="muted">This is where payment goes. Checkout isn't connected in this preview, so nothing was charged or saved. See README to connect Shopify, Stripe or a telehealth checkout.</p>`;
  $("#cart-foot").innerHTML = `<button class="btn btn--block" id="health-back3">Back to bag</button>`;
  $("#health-back3").addEventListener("click", renderCart);
}

function bindCart() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    if (t.matches(".js-open-cart")) openCart();
    if (t.matches(".js-close-cart")) closeCart();
    if (t.id === "checkout") startCheckout();
    if (t.dataset.add) {
      e.preventDefault();
      cart.add(t.dataset.add);
      openCart();
    }
    if (t.dataset.line !== undefined) {
      const i = +t.dataset.line;
      if (t.dataset.mode) cart.update(i, { mode: t.dataset.mode });
      if (t.dataset.qty) {
        const q = cart.items[i].qty + +t.dataset.qty;
        q < 1 ? cart.remove(i) : cart.update(i, { qty: q });
      }
    }
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.field === "every") cart.update(+t.dataset.line, { every: +t.value });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });
  $(".scrim").addEventListener("click", closeCart);
}

function openCart() {
  document.body.classList.add("cart-open");
  $("#cart").setAttribute("aria-hidden", "false");
  $("#cart .js-close-cart").focus();
}
function closeCart() {
  document.body.classList.remove("cart-open");
  $("#cart").setAttribute("aria-hidden", "true");
}

/* ---------- Layout chrome ---------- */

function renderChrome() {
  const page = document.body.dataset.page;
  const nav = [
    ["shop", "shop.html", "Shop"],
    ["concerns", "./#concerns", "Concerns"],
    ["journal", "journal.html", "Journal"],
    ["subscribe", "subscribe.html", "Subscribe & save"],
    ["help", "help.html", "Help"]
  ];
  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip" href="#main">Skip to content</a>
    <div class="announce">
      <span>Free shipping over ${money(STORE.freeShippingOver)}</span>
      <span>Subscribe &amp; save 15%</span>
    </div>
    <header class="header">
      <div class="wrap header__inner">
        <a class="logo" href="./" aria-label="Coveted home">Coveted</a>
        <nav class="nav" aria-label="Main">
          ${nav.map(([k, href, t]) => `<a href="${href}" ${k === page ? 'aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
        <button class="cart-btn js-open-cart" aria-label="Open bag">Bag (<span class="js-cart-count">0</span>)</button>
        <button class="menu-btn" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
        ${nav.map(([, href, t]) => `<a href="${href}">${t}</a>`).join("")}
      </nav>
    </header>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="wrap footer__grid">
        <div>
          <p class="logo">Coveted</p>
          <p class="muted">Skin and hair treatments that work, made for everyone.</p>
        </div>
        <div>
          <p class="eyebrow">Shop</p>
          ${CATEGORIES.map((c) => `<a href="shop.html#${c.id}">${c.name}</a>`).join("")}
        </div>
        <div>
          <p class="eyebrow">Concerns</p>
          ${CONCERNS.map((c) => `<a href="shop.html#${c.id}">${c.name}</a>`).join("")}
        </div>
        <div>
          <p class="eyebrow">Help</p>
          <a href="help.html">Shipping &amp; returns</a>
          <a href="subscribe.html">Subscriptions</a>
          <a href="journal.html">Journal</a>
        </div>
        <form class="newsletter js-newsletter">
          <p class="eyebrow">Newsletter</p>
          <p class="muted small">New products and guides.</p>
          <div class="field-row">
            <label class="sr" for="nl-email">Email</label>
            <input id="nl-email" type="email" required placeholder="Email address">
            <button class="btn btn--ghost">Join</button>
          </div>
          <p class="small note" hidden>You're on the list.</p>
        </form>
      </div>
      <div class="wrap footer__base small muted">
        <span>© ${new Date().getFullYear()} Coveted</span>
        <span>Products marked Rx are reviewed by a licensed clinician before they ship. Information on this site is not medical advice.</span>
      </div>
    </footer>
    <div class="scrim"></div>
    <aside class="drawer" id="cart" aria-hidden="true" aria-label="Bag">
      <div class="drawer__head">
        <p class="eyebrow">Your bag</p>
        <button class="link js-close-cart">Close</button>
      </div>
      <div class="drawer__body" id="cart-body"></div>
      <div class="drawer__foot" id="cart-foot"></div>
    </aside>`);

  const menuBtn = $(".menu-btn");
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    $("#mobile-nav").hidden = open;
  });

  $$(".js-newsletter").forEach((f) => f.addEventListener("submit", (e) => {
    e.preventDefault();
    f.querySelector(".note").hidden = false;
    f.querySelector("input").value = "";
  }));
}

function toast(msg) {
  let t = $(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("is-on"), 2600);
}

function stars(r) {
  const full = Math.round(r);
  return `<span class="stars" aria-label="${r} out of 5">${"★".repeat(full)}<span class="muted">${"★".repeat(5 - full)}</span></span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  bindCart();
  renderCart();
});
