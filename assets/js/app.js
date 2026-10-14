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

function labelLines(name) {
  const parts = name.split(" + ");
  const lines = [];
  parts.forEach((part, i) => {
    const words = (i ? "+ " + part : part).split(" ");
    let line = "";
    words.forEach((w) => {
      if ((line + " " + w).trim().length > 13 && line) { lines.push(line); line = w; }
      else line = (line + " " + w).trim();
    });
    if (line) lines.push(line);
  });
  return lines.slice(0, 3);
}

function label(p, x, y, w) {
  const lines = labelLines(p.name);
  const h = 34 + lines.length * 11;
  const text = lines.map((l, i) => `<text x="${x + w / 2}" y="${y + 30 + i * 11}" text-anchor="middle" font-size="7.6" fill="#1d1c1a">${esc(l)}</text>`).join("");
  return `<g font-family="Geist Mono, monospace">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#f4efe4"/>
    <text x="${x + w / 2}" y="${y + 13}" text-anchor="middle" font-size="6.5" letter-spacing="2" fill="#6b665d">COVETED</text>
    <line x1="${x + 8}" y1="${y + 18}" x2="${x + w - 8}" y2="${y + 18}" stroke="#bdb5a5" stroke-width=".6"/>
    ${text}
    <text x="${x + w / 2}" y="${y + h - 6}" text-anchor="middle" font-size="5.5" fill="#6b665d">${esc(p.size.split(" ·")[0])}</text>
  </g>`;
}

function productArt(p) {
  const amber = `<linearGradient id="g-${p.id}" x1="0" x2="1"><stop offset="0" stop-color="#5a3412"/><stop offset=".45" stop-color="#8a531f"/><stop offset="1" stop-color="#4e2c0f"/></linearGradient>`;
  const fill = `url(#g-${p.id})`;
  let body = "";
  switch (p.bottle) {
    case "dropper":
      body = `<rect x="64" y="104" width="72" height="136" rx="8" fill="${fill}"/>
        <rect x="84" y="90" width="32" height="16" fill="#2b2925"/>
        <rect x="88" y="44" width="24" height="50" rx="12" fill="#1d1c1a"/>
        ${label(p, 70, 140, 60)}`;
      break;
    case "pump":
      body = `<rect x="60" y="92" width="80" height="148" rx="10" fill="${fill}"/>
        <rect x="88" y="70" width="24" height="24" fill="#2b2925"/>
        <rect x="94" y="46" width="12" height="26" fill="#2b2925"/>
        <rect x="94" y="46" width="44" height="9" rx="2" fill="#2b2925"/>
        ${label(p, 68, 132, 64)}`;
      break;
    case "tube":
      body = `<path d="M66 40 H134 L128 206 H72 Z" fill="#e6e0d3" stroke="#cbc3b3"/>
        <rect x="66" y="34" width="68" height="8" fill="#d8d1c2"/>
        <rect x="80" y="206" width="40" height="34" rx="3" fill="#1d1c1a"/>
        ${label(p, 74, 92, 52)}`;
      break;
    case "roller":
      body = `<rect x="76" y="110" width="48" height="130" rx="8" fill="${fill}"/>
        <rect x="84" y="94" width="32" height="18" fill="#2b2925"/>
        <circle cx="100" cy="88" r="9" fill="#bfbab0" stroke="#8f8a80"/>
        <rect x="80" y="40" width="40" height="50" rx="6" fill="#1d1c1a" opacity=".92"/>
        ${label(p, 79, 140, 42)}`;
      break;
    case "foam":
      body = `<rect x="66" y="70" width="68" height="170" rx="6" fill="#d9d6cf" stroke="#bdb8ad"/>
        <rect x="66" y="70" width="68" height="10" fill="#c6c2b9"/>
        <path d="M74 70 V48 Q100 30 126 48 V70 Z" fill="#1d1c1a"/>
        ${label(p, 72, 120, 56)}`;
      break;
    case "capsules":
      body = `<rect x="56" y="100" width="88" height="140" rx="12" fill="${fill}"/>
        <rect x="62" y="70" width="76" height="34" rx="4" fill="#1d1c1a"/>
        ${label(p, 64, 136, 72)}`;
      break;
    case "tin":
      body = `<rect x="44" y="120" width="112" height="100" rx="10" fill="#cfcac0" stroke="#b6b0a4"/>
        <rect x="40" y="108" width="120" height="22" rx="8" fill="#b9b3a7"/>
        ${label(p, 64, 138, 72)}`;
      break;
    case "roller-tool":
      body = `<rect x="94" y="96" width="12" height="144" rx="6" fill="#1d1c1a"/>
        <rect x="90" y="88" width="20" height="12" fill="#8f8a80"/>
        <rect x="56" y="48" width="88" height="40" rx="18" fill="#bfbab0" stroke="#8f8a80"/>
        <g stroke="#8f8a80" stroke-width="1">${Array.from({ length: 11 }, (_, i) => `<line x1="${62 + i * 7.6}" y1="50" x2="${62 + i * 7.6}" y2="86"/>`).join("")}</g>`;
      break;
  }
  return `<svg viewBox="0 0 200 260" role="img" aria-label="${esc(p.name)}, ${esc(p.size)}"><defs>${amber}</defs>
    <ellipse cx="100" cy="242" rx="58" ry="5" fill="#000" opacity=".08"/>${body}</svg>`;
}

/* ---------- Stock ---------- */

function stockBadge(p, long = false) {
  if (p.stock.status === "out") {
    return `<span class="stock stock--out">Back ${formatDate(p.stock.restock)}${long ? " · reserve yours now" : ""}</span>`;
  }
  if (p.stock.status === "low") {
    return `<span class="stock stock--low">Only ${p.stock.qty} left${long ? ` · more arriving ${formatDate(p.stock.restock)}` : ""}</span>`;
  }
  return `<span class="stock stock--in">In stock${long ? ` · dispatched today if ordered before ${STORE.dispatchCutoff}` : ""}</span>`;
}

/* ---------- Product card ---------- */

const tintOf = (p) => (CONCERNS.find((c) => c.id === p.concerns[0]) || {}).tint || "var(--sunk)";

function productCard(p) {
  return `<article class="card" style="--tint:${tintOf(p)}">
    <a href="product.html#${p.id}" class="card__link">
      <div class="card__art">${productArt(p)}${p.rx ? `<span class="tag tag--rx">Rx</span>` : p.hardToSource ? `<span class="tag">Hard to source</span>` : ""}</div>
      <div class="card__body">
        <p class="card__problem">${esc(CONCERNS.find((c) => c.id === p.concerns[0]).name)}</p>
        <h3 class="card__name">${esc(p.name)}</h3>
        <p class="card__format">${esc(p.format)}</p>
      </div>
    </a>
    <div class="card__foot">
      <div>
        <p class="card__price">${money(p.price)} <span class="muted">· ${esc(p.size.split(" ·")[0])}</span></p>
        <p class="card__sub">${money(subPrice(p))} on subscription</p>
      </div>
      <button class="quick" data-add="${p.id}" aria-label="Add ${esc(p.name)} to bag">${p.stock.status === "out" ? "Reserve" : "Add +"}</button>
    </div>
  </article>`;
}

/* ---------- Cart ---------- */

const cart = {
  items: store("cv-cart", []),
  samples: store("cv-samples", []),
  persist() { save("cv-cart", this.items); save("cv-samples", this.samples); renderCart(); },
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
  const inCart = new Set(cart.items.map((l) => l.id));
  const sampleChoices = PRODUCTS.filter((p) => !inCart.has(p.id) && !p.rx && p.category !== "tool" && p.stock.status !== "out").slice(0, 6);
  cart.samples = cart.samples.filter((id) => sampleChoices.some((p) => p.id === id));

  body.innerHTML = `
    <div class="ship-meter">
      <p>${remaining > 0 ? `${money(remaining)} away from free shipping` : "Free shipping unlocked"}</p>
      <div class="ship-meter__bar"><span style="width:${Math.min(100, (subtotal / STORE.freeShippingOver) * 100)}%"></span></div>
    </div>
    <ul class="lines">${cart.items.map((l, i) => {
      const p = byId(l.id);
      return `<li class="line">
        <div class="line__art">${productArt(p)}</div>
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
          ${p.stock.status === "out" ? `<p class="small note">Reserved — ships ${formatDate(p.stock.restock)}. We won't charge until it ships.</p>` : ""}
        </div>
      </li>`;
    }).join("")}</ul>
    <div class="samples">
      <p class="eyebrow">Choose 2 complimentary samples</p>
      <div class="samples__grid">${sampleChoices.map((p) => `<label class="chip-check">
        <input type="checkbox" value="${p.id}" ${cart.samples.includes(p.id) ? "checked" : ""} ${!cart.samples.includes(p.id) && cart.samples.length >= 2 ? "disabled" : ""}>
        <span>${esc(p.name)}</span></label>`).join("")}</div>
    </div>`;

  $("#cart-foot").innerHTML = `
    <div class="totals">
      <p><span>Subtotal</span><span>${money(subtotal)}</span></p>
      <p><span>Shipping</span><span>${remaining > 0 ? money(4.95) : "Free"}</span></p>
    </div>
    ${cart.items.some((l) => byId(l.id).rx) ? `<p class="small muted center">Your bag has an Rx item. Checkout includes a quick 4-question health check.</p>` : ""}
    <button class="btn btn--block" id="checkout">Checkout</button>
    <p class="small muted center">Every ${ordinal(STORE.loyaltyEvery)} order includes a full-size product of your choice.</p>
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
    <p class="small muted">A licensed clinician checks these before your Rx item ships, usually the same day. You're only charged for it once it's approved.</p>
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

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
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
    if (t.closest(".samples")) {
      cart.samples = $$(".samples input:checked").map((i) => i.value);
      cart.persist();
    }
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
      <span>Discreet, tracked delivery</span>
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
          <p class="muted">Hard-to-find essentials for skin, hair and face. Always in stock, made for everyone.</p>
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
          <a href="help.html#shipping">Shipping</a>
          <a href="help.html#returns">Returns</a>
          <a href="subscribe.html">Subscriptions</a>
          <a href="help.html#stock">Our stock promise</a>
          <a href="journal.html">Journal</a>
        </div>
        <form class="newsletter js-newsletter">
          <p class="eyebrow">One email a month</p>
          <p class="muted small">New guides and restocks. Never more than one a month, never a countdown timer.</p>
          <div class="field-row">
            <label class="sr" for="nl-email">Email</label>
            <input id="nl-email" type="email" required placeholder="Email address">
            <button class="btn btn--ghost">Join</button>
          </div>
          <p class="small note" hidden>You're on the list. See you next month.</p>
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
