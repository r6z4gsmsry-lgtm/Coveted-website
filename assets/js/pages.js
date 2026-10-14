/* Coveted — page renderers. Each HTML page calls one of these. */

function reviewCard(r, p) {
  return `<article class="review">
    ${r.photos ? `<div class="ba">
      <figure><figcaption>Week 0</figcaption></figure>
      <figure><figcaption>Week ${r.weeks}</figcaption></figure>
    </div>` : ""}
    ${stars(r.rating)}
    <h3>${esc(r.title)}</h3>
    <p>${esc(r.text)}</p>
    <p class="review__meta">${esc(r.name)}${r.verified ? " · Verified buyer" : ""} · ${r.weeks} weeks of use${p ? `<br><a href="product.html#${p.id}">${esc(p.name)}</a>` : ""}</p>
  </article>`;
}

function guideCard(g) {
  const c = CONCERNS.find((x) => x.id === g.concern);
  return `<a class="guide" href="guide.html#${g.slug}">
    <span class="eyebrow" style="margin:0">${esc(c.name)} · ${g.minutes} min read</span>
    <h3>${esc(g.title)}</h3>
    <p>${esc(g.intro)}</p>
  </a>`;
}

function buyBlock(p, out) {
  return `
      <form class="buy" id="buy">
        ${stockBadge(p, true)}
        <label class="option">
          <input type="radio" name="mode" value="sub" checked>
          <span>
            <strong>Subscribe &amp; save ${STORE.subscribeDiscount * 100}%</strong>
            <span class="small muted">One lasts about ${p.supplyDays} days, so the next arrives before you run out. Skip or cancel any time.</span>
            <select class="select" name="every" aria-label="Delivery frequency">
              ${frequencyOptions(p).map((d) => `<option value="${d}" ${d === p.supplyDays ? "selected" : ""}>${freqLabel(d)}${d === p.supplyDays ? " · recommended" : ""}</option>`).join("")}
            </select>
          </span>
          <span class="price">${money(subPrice(p))}<s>${money(p.price)}</s></span>
        </label>
        <label class="option">
          <input type="radio" name="mode" value="once">
          <span><strong>One-time purchase</strong><span class="small muted">Optional reorder reminder when you're running low.</span></span>
          <span class="price">${money(p.price)}</span>
        </label>
        <button class="btn btn--block" type="submit">${out ? `Reserve — ships ${formatDate(p.stock.restock)}` : "Add to bag"}</button>
        ${out ? `<p class="small muted" style="margin:0">Reserving is free. You're charged only when it ships, and we'll send one email on dispatch.</p>` : ""}
        <ul class="reassure">
          <li>Free shipping over ${money(STORE.freeShippingOver)}. Weekday orders before ${STORE.dispatchCutoff} dispatched same day</li>
          <li>${STORE.returnDays}-day returns, even if opened</li>
          <li>Two free samples of your choice in every order</li>
        </ul>
        <div class="record">
          In stock ${p.stock.record} of the last 365 days
          <div class="bar"><span style="width:${(p.stock.record / 365) * 100}%"></span></div>
        </div>
      </form>

      <div class="remind" id="remind" hidden style="margin-top:14px">
        <p><strong>Reorder reminder</strong><br><span class="small muted">One ${esc(p.size.split(" ·")[0])} lasts about ${p.supplyDays} days. We'll send a single email on day ${p.supplyDays - 7} with a one-click reorder link. That's all.</span></p>
        <form class="field-row" id="remind-form">
          <label class="sr" for="remind-email">Email</label>
          <input id="remind-email" type="email" required placeholder="Email address">
          <button class="btn btn--ghost">Remind me</button>
        </form>
      </div>`;
}

/* Prescription products: no add-to-bag. The patient starts a consultation instead. */
function rxBlock(p) {
  return `
      <div class="buy">
        ${stockBadge(p)}
        <div class="rx-box">
          <p class="eyebrow" style="margin:0">Prescription treatment</p>
          <p class="rx-box__price">From ${money(p.price)} <span class="muted">/ month</span></p>
          <p class="small muted" style="margin:0">Includes your online consultation, ongoing clinician support, the medication and delivery. You're only charged if a clinician prescribes it.</p>
          <ol class="rx-steps">
            <li><strong>Answer a few questions</strong><span>About 5 minutes, online.</span></li>
            <li><strong>A licensed clinician reviews</strong><span>Usually within 24 hours. They decide whether it's right for you.</span></li>
            <li><strong>Delivered to your door</strong><span>From a licensed pharmacy, in plain packaging. Refills arrive monthly.</span></li>
          </ol>
          <a class="btn btn--block" href="consult.html#${p.id}">Start free consultation</a>
        </div>
        <div class="record">
          In stock ${p.stock.record} of the last 365 days
          <div class="bar"><span style="width:${(p.stock.record / 365) * 100}%"></span></div>
        </div>
      </div>`;
}

const Pages = {
  home() {
    // Size the wordmark so it spans the full content width exactly.
    const brand = $(".hero__brand");
    const fit = () => {
      brand.style.fontSize = "";
      const box = getComputedStyle(brand.parentElement);
      const width = brand.parentElement.clientWidth - parseFloat(box.paddingLeft) - parseFloat(box.paddingRight);
      const ratio = (width / brand.scrollWidth) * 0.99;
      brand.style.fontSize = parseFloat(getComputedStyle(brand).fontSize) * ratio + "px";
    };
    fit();
    document.fonts?.ready.then(fit);
    addEventListener("resize", fit);


    $("#concern-grid").innerHTML = CONCERNS.map((c) => {
      const n = PRODUCTS.filter((p) => p.concerns.includes(c.id)).length;
      return `<a class="concern" href="shop.html#${c.id}">
        <div><h3>${c.name}</h3><p>${c.line}</p></div>
        <span>${n} products →</span>
      </a>`;
    }).join("");

    const avg = PRODUCTS.reduce((s, p) => s + p.stock.record, 0) / PRODUCTS.length / 365;
    $("#stock-pct").textContent = Math.floor(avg * 100) + "%";

    $("#bestsellers").innerHTML = [...PRODUCTS]
      .filter((p) => p.supplyDays <= 90 && p.category !== "tool")
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 4).map(productCard).join("");

    const p = byId("spf-50");
    $("#sub-demo").innerHTML = `
      <p class="eyebrow">Example · ${esc(p.name)}</p>
      <div class="sub-demo__row"><span>One-time</span><span>${money(p.price)}</span></div>
      <div class="sub-demo__row"><span>Subscription, every month</span><span>${money(subPrice(p))}</span></div>
      <div class="sub-demo__row"><span>Saved over a year</span><span>${money((p.price - subPrice(p)) * 12)}</span></div>
      <div class="timeline">
        <span class="is-key">Day 0<br>First order</span>
        <span>Day 27<br>One reminder email</span>
        <span class="is-key">Day 30<br>Next tube arrives</span>
      </div>`;


  },

  shop() {
    const state = {
      concern: params.get("concern") || (CONCERNS.some((c) => c.id === route) ? route : "all"),
      category: params.get("category") || (CATEGORIES.some((c) => c.id === route) ? route : "all"),
      inStock: false,
      sort: "popular"
    };

    const filterButtons = (list, key) =>
      [{ id: "all", name: "All" }, ...list].map((x) => `<button data-${key}="${x.id}" aria-pressed="${state[key] === x.id}">${x.name}</button>`).join("");

    function render() {
      $("#concern-filters").innerHTML = filterButtons(CONCERNS, "concern");
      $("#category-filters").innerHTML = filterButtons(CATEGORIES, "category");
      const concern = CONCERNS.find((c) => c.id === state.concern);
      $("#shop-title").textContent = concern ? concern.name : "All products";
      $("#shop-line").textContent = concern ? concern.line : "Everything we stock, in one place.";

      let list = PRODUCTS.filter((p) =>
        (state.concern === "all" || p.concerns.includes(state.concern)) &&
        (state.category === "all" || p.category === state.category) &&
        (!state.inStock || p.stock.status !== "out"));
      const sorts = {
        popular: (a, b) => b.reviewCount - a.reviewCount,
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
        rating: (a, b) => b.rating - a.rating
      };
      list.sort(sorts[state.sort]);
      $("#count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
      $("#results").innerHTML = list.length ? list.map(productCard).join("") : `<p class="muted">Nothing matches those filters yet.</p>`;

      const token = state.concern !== "all" ? state.concern : state.category !== "all" ? state.category : "";
      try { history.replaceState(null, "", "shop.html" + (token ? "#" + token : "")); } catch { /* history unavailable */ }
    }

    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-concern],[data-category]");
      if (!b) return;
      if (b.dataset.concern) state.concern = b.dataset.concern;
      if (b.dataset.category) state.category = b.dataset.category;
      render();
    });
    $("#in-stock").addEventListener("change", (e) => { state.inStock = e.target.checked; render(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
    render();
  },

  product() {
    const p = byId(params.get("id") || route) || PRODUCTS[0];
    const concern = CONCERNS.find((c) => c.id === p.concerns[0]);
    const out = p.stock.status === "out";
    document.title = `${p.name} — ${p.format} | Coveted`;
    $('meta[name="description"]').setAttribute("content", `${p.problem} ${p.actives.map((a) => `${a.name} ${a.pct}`).join(", ")}.`);

    $("#crumbs").innerHTML = `<a href="shop.html">Shop</a> / <a href="shop.html#${concern.id}">${concern.name}</a> / ${esc(p.name)}`;
    $("#art").innerHTML = productArt(p) + (p.hardToSource ? `<span class="tag">Hard to source</span>` : "");

    $("#info").innerHTML = `
      <p class="eyebrow">${p.concerns.map((id) => CONCERNS.find((c) => c.id === id).name).join(" · ")}</p>
      <h1>${esc(p.name)}</h1>
      <p class="muted">${esc(p.format)} · ${esc(p.size)}</p>
      <p><a href="#reviews" style="text-decoration:none">${stars(p.rating)} <span class="small muted">${p.rating} · ${p.reviewCount} reviews</span></a></p>

      <div class="pdp__problem">
        <p class="eyebrow" style="margin-bottom:.3rem">The problem</p>
        <p>${esc(p.problem)}</p>
      </div>
      <p>${esc(p.summary)}</p>

      <table class="table" aria-label="Active ingredients">
        <thead><tr><th>Active</th><th>Strength</th></tr></thead>
        <tbody>${p.actives.map((a) => `<tr><td>${esc(a.name)}</td><td>${esc(a.pct)}</td></tr>`).join("")}</tbody>
      </table>

      ${p.rx ? rxBlock(p) : buyBlock(p, out)}

      <div style="margin-top:2rem">
        <details class="panel" open><summary>${p.rx ? "How it's used" : "How to use"}</summary><div class="panel__body">
          <ol>${p.howTo.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
          <p class="small muted" style="margin-top:1rem"><strong>${p.rx ? "Safety:" : "Note:"}</strong> ${esc(p.avoidWith)}${p.rx ? " Your clinician will confirm exact directions for you." : ""}</p>
        </div></details>
        <details class="panel"><summary>What to expect</summary><div class="panel__body results">
          ${p.results.map((r) => `<div><strong>${esc(r.when)}</strong><span>${esc(r.what)}</span></div>`).join("")}
        </div></details>
        <details class="panel"><summary>Full ingredient list</summary><div class="panel__body">
          <p class="inci">${esc(p.inci)}</p>
        </div></details>
        <details class="panel"><summary>Shipping &amp; returns</summary><div class="panel__body">
          <p>${p.rx
            ? "Dispatched by our partner pharmacy in plain, tracked packaging, usually within 1–3 working days of approval. Free delivery on every prescription. Pharmacy rules mean prescription medicines can't be returned once dispatched; if anything is wrong with your order, message your care team."
            : `Tracked delivery in 1–3 working days. Free over ${money(STORE.freeShippingOver)}, otherwise $4.95. Return anything within ${STORE.returnDays} days, opened or not, with the prepaid label in your box.`} <a href="help.html">Full details</a>.</p>
        </div></details>
      </div>`;

    const remind = $("#remind");
    if ($("#buy")) {
    $("#buy").addEventListener("change", (e) => {
      if (e.target.name === "mode") remind.hidden = e.target.value !== "once";
    });
    $("#buy").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      cart.add(p.id, f.get("mode"), +f.get("every"));
      openCart();
    });
    $("#remind-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const reminders = store("cv-reminders", []);
      reminders.push({ id: p.id, email: $("#remind-email").value, days: p.supplyDays - 7 });
      save("cv-reminders", reminders);
      remind.innerHTML = `<p style="margin:0"><strong>Reminder set.</strong> <span class="small muted">One email on day ${p.supplyDays - 7}. Nothing else.</span></p>`;
    });
    }

    const pairs = p.pairsWith.map(byId).filter(Boolean);
    $("#pairs-title").textContent = out ? "In stock now, and pairs well" : "Pair it with";
    $("#pairs").innerHTML = pairs.map(productCard).join("");

    $("#reviews-summary").innerHTML = `${stars(p.rating)} <span class="muted">${p.rating} average from ${p.reviewCount} verified buyers</span>`;
    $("#product-reviews").innerHTML = p.reviews.map((r) => reviewCard(r)).join("");

    const guides = GUIDES.filter((g) => g.products.includes(p.id));
    $("#product-guides-wrap").hidden = !guides.length;
    $("#product-guides").innerHTML = guides.map(guideCard).join("");
  },

  journal() {
    const all = GUIDES;
    const used = [...new Set(all.map((g) => g.concern))];
    let active = "all";
    function render() {
      $("#journal-filters").innerHTML = [{ id: "all", name: "All" }, ...CONCERNS.filter((c) => used.includes(c.id))]
        .map((c) => `<button data-topic="${c.id}" aria-pressed="${c.id === active}">${c.name}</button>`).join("");
      $("#journal-list").innerHTML = all.filter((g) => active === "all" || g.concern === active).map(guideCard).join("");
    }
    $("#journal-filters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-topic]");
      if (b) { active = b.dataset.topic; render(); }
    });
    render();
  },

  guide() {
    const g = GUIDES.find((x) => x.slug === (params.get("slug") || route)) || GUIDES[0];
    const c = CONCERNS.find((x) => x.id === g.concern);
    document.title = `${g.title} | Coveted Journal`;
    $('meta[name="description"]').setAttribute("content", g.intro);
    $("#article").innerHTML = `
      <p class="crumbs" style="padding:0 0 1.5rem"><a href="journal.html">Journal</a> / ${c.name}</p>
      <p class="eyebrow">${c.name} · ${g.minutes} min read</p>
      <h1>${esc(g.title)}</h1>
      <p class="lede">${esc(g.intro)}</p>
      ${g.sections.map((s) => `<h2>${esc(s.h)}</h2><p>${esc(s.p)}</p>`).join("")}
      <p class="small muted" style="margin-top:3rem;border-top:1px solid var(--line);padding-top:1rem">This guide is general information, not medical advice. If you have a persistent or worsening concern, speak to a doctor or pharmacist.</p>`;
    $("#guide-products").innerHTML = g.products.map(byId).filter(Boolean).map(productCard).join("");
    $("#more-guides").innerHTML = GUIDES.filter((x) => x !== g).slice(0, 3).map(guideCard).join("");
  },

  /* Online consultation. This is a front-end preview: answers are never
     stored or sent. Connect a telehealth platform to submit them to a
     licensed clinician (see README). */
  consult() {
    const rxList = PRODUCTS.filter((p) => p.rx);
    let p = byId(route) && byId(route).rx ? byId(route) : null;
    const steps = ["Treatment", "About you", "Your health", "Review"];
    let step = p ? 1 : 0;
    const form = $("#consult");

    const yesNo = (name, label) => `<fieldset class="q"><legend>${label}</legend>
      <label class="choice"><input type="radio" name="${name}" value="yes" required> Yes</label>
      <label class="choice"><input type="radio" name="${name}" value="no"> No</label></fieldset>`;

    const screens = [
      () => `<h2>What would you like help with?</h2>
        <div class="choices">${rxList.map((x) => `<label class="choice choice--card"><input type="radio" name="product" value="${x.id}" required ${p && p.id === x.id ? "checked" : ""}>
          <span><strong>${esc(x.name)}</strong><span class="small muted">${esc(x.problem)}</span></span></label>`).join("")}</div>`,
      () => `<h2>About you</h2>
        <fieldset class="q"><legend>Are you 18 or older?</legend>
          <label class="choice"><input type="radio" name="adult" value="yes" required> Yes</label>
          <label class="choice"><input type="radio" name="adult" value="no"> No</label></fieldset>
        <fieldset class="q"><legend>Sex assigned at birth</legend>
          <label class="choice"><input type="radio" name="sex" value="female" required> Female</label>
          <label class="choice"><input type="radio" name="sex" value="male"> Male</label>
          <p class="small muted">Some treatments aren't suitable during pregnancy, so your clinician needs to know this.</p></fieldset>
        <label class="q" for="c-region"><span class="legend">Where do you live?</span>
          <select class="select" id="c-region" name="region" required>
            <option value="">Choose your state</option>${REGIONS.map((r) => `<option>${r}</option>`).join("")}
          </select></label>`,
      () => `<h2>Your health</h2>
        ${yesNo("pregnant", "Are you pregnant, breastfeeding, or trying to conceive?")}
        <fieldset class="q"><legend>Do any of these apply to you?</legend>
          ${["Liver disease", "Heart condition or low blood pressure", "History of depression or anxiety", "Eczema, rosacea or very sensitive skin", "None of these"].map((c, i) =>
            `<label class="choice"><input type="checkbox" name="conditions" value="${c}" id="c-cond-${i}"> ${c}</label>`).join("")}</fieldset>
        <label class="q" for="c-meds"><span class="legend">Medications and supplements you take</span>
          <textarea class="select" id="c-meds" name="meds" rows="3" placeholder="Include anything prescribed or over the counter. Write none if none."></textarea></label>
        <label class="q" for="c-photo"><span class="legend">Photos of the area (optional)</span>
          <input type="file" id="c-photo" name="photos" accept="image/*" multiple>
          <span class="small muted">Clear, well-lit photos help your clinician. In this preview they aren't uploaded anywhere.</span></label>`,
      () => {
        const d = { get: (k) => answers[k] };
        const flags = [];
        if (d.get("pregnant") === "yes" && ["tretinoin", "finasteride", "topical-finmin", "pigment-formula"].includes(p.id))
          flags.push("This treatment isn't used during pregnancy or while trying to conceive. Your clinician will suggest safe alternatives.");
        if (p.id === "finasteride" && d.get("sex") === "female")
          flags.push("Finasteride tablets are rarely prescribed to women. Your clinician may recommend a different option.");
        return `<h2>Review and submit</h2>
          <dl class="review-list">
            <div><dt>Treatment</dt><dd>${esc(p.name)}</dd></div>
            <div><dt>Plan</dt><dd>From ${money(p.price)} / month, only charged if prescribed</dd></div>
            <div><dt>State</dt><dd>${esc(d.get("region") || "")}</dd></div>
          </dl>
          ${flags.map((f) => `<p class="flag">${esc(f)}</p>`).join("")}
          <label class="choice"><input type="checkbox" name="consent" required> I confirm my answers are accurate and agree to an online consultation with a licensed clinician.</label>`;
      }
    ];

    function render() {
      if (step > 0 && !p) step = 0;
      $("#consult-steps").innerHTML = steps.map((t, i) => `<li ${i === step ? 'aria-current="step"' : ""} class="${i < step ? "is-done" : ""}">${t}</li>`).join("");
      $("#consult-body").innerHTML = screens[step]();
      $("#consult-back").hidden = step === 0;
      $("#consult-next").textContent = step === screens.length - 1 ? "Submit consultation" : "Continue";
      $("#consult-product").innerHTML = p ? `<div class="consult__art">${productArt(p)}</div><p class="eyebrow" style="margin:0">Your treatment</p><h3>${esc(p.name)}</h3><p class="small muted">${esc(p.format)}</p><p>From ${money(p.price)} <span class="muted">/ month</span></p>` : `<p class="muted">Choose a treatment to get started.</p>`;
    }

    // Keep answers in the form while moving between steps by hiding, not removing, earlier screens.
    const answers = {};
    function remember() { new FormData(form).forEach((v, k) => { answers[k] = v; }); }
    function restore() {
      Object.entries(answers).forEach(([k, v]) => {
        $$(`[name="${k}"]`, form).forEach((el) => {
          if (el.type === "radio" || el.type === "checkbox") el.checked = el.value === v || el.checked;
          else if (el.type !== "file") el.value = v;
        });
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (step === 0) p = byId(new FormData(form).get("product"));
      if (step === 1 && new FormData(form).get("adult") === "no") {
        $("#consult-body").innerHTML = `<h2>We can't treat you yet</h2><p>Our clinicians can only treat people aged 18 and over. Please speak to your doctor or a local pharmacist.</p>`;
        $("#consult-next").hidden = true;
        return;
      }
      remember();
      if (step === screens.length - 1) {
        form.hidden = true;
        $("#consult-done").hidden = false;
        $("#consult-steps").innerHTML = steps.map((t) => `<li class="is-done">${t}</li>`).join("");
        return;
      }
      step++;
      render(); restore();
      window.scrollTo({ top: 0 });
    });
    $("#consult-back").addEventListener("click", () => { remember(); step--; render(); restore(); });
    render();
  }
};
