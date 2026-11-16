/* =========================================================
   PUBLICATIONS
   To add a paper, copy one block and edit it.
   type: "article", "review" or "chapter"
   Use <i>...</i> for species names. The name in ME is shown in bold.
   ========================================================= */
const ME = "Sinthi, F.";
const BOOK = "In: Hasanuzzaman, M., Fujita, M., Nahar, K., Biswas, J.K. (Eds.), Advances in Rice Research for Abiotic Stress Tolerance, 2nd ed. Woodhead Publishing";

const PUBLICATIONS = [
  /* ---- Research articles ---- */
  { type: "article", year: 2026,
    authors: "Hasanuzzaman, M., Sultana, A., Sinthi, F., Alam, S., Alam, M.M., Prasad, P.V.V.",
    title: "Selenium and seaweed extracts exhibit synergistic actions in regulating antioxidant defense in rice under salt stress",
    source: "Chemical and Biological Technologies in Agriculture",
    doi: "10.1186/s40538-026-00956-6" },
  { type: "article", year: 2025,
    authors: "Hasanuzzaman, M., Rummana, S., Sinthi, F., Alam, S., Raihan, M.R.H., Alam, M.M.",
    title: "Enhancing drought resilience in <i>Brassica campestris</i>: Antioxidant and physiological benefits of <i>Ascophyllum nodosum</i> extract and alginic acid",
    source: "Plant Physiology and Biochemistry, 227, 110198",
    doi: "10.1016/j.plaphy.2025.110198" },
  { type: "article", year: 2025,
    authors: "Shaheenuzzamn, M., Alam, M.S., Miah, M.A.M., Rasheduzzaman, M., Hossain, M.H., Sinthi, F.",
    title: "Effect of soil amendments on tomato yield and soil characteristics in acidic soil at Moulvibazar",
    source: "Bangladesh Agronomy Journal, 27(1), 48–54",
    doi: "10.3329/baj.v27i1.84553" },
  { type: "article", year: 2024,
    authors: "Hasanuzzaman, M., Alam, M.M., Naz, F., Rummana, S., Siddika, A., Sultana, A., Sinthi, F., Prasad, P.V.V.",
    title: "Modulating reactive oxygen species and ion homeostasis for combined salt and cadmium stress tolerance in <i>Brassica campestris</i>: The role of beneficial microbes",
    source: "Plant Stress, 14, 100605",
    doi: "10.1016/j.stress.2024.100605" },

  /* ---- Review article ---- */
  { type: "review", year: 2026,
    authors: "Datta, D., Alam, S., Sinthi, F., Nahar, K., Hasanuzzaman, M.",
    title: "Phytoprotectants in action: Shielding plants from oxidative damage under thermal extremes and flooding stress",
    source: "Journal of Bangladesh Academy of Sciences, 50(3), 347–367",
    doi: "10.3329/jbas.v50i3.93933" },

  /* ---- Book chapters ---- */
  { type: "chapter", year: 2026,
    authors: "Sinthi, F., Hosen, M.S., Sabiha, U.K., Hasanuzzaman, M.",
    title: "Coping with cold: How rice responds and adapts",
    source: BOOK + ", pp. 107–127",
    doi: "10.1016/B978-0-443-33465-8.00017-7" },
  { type: "chapter", year: 2026,
    authors: "Sinthi, F., Alam, S., Datta, D., Nahar, K., Hasanuzzaman, M.",
    title: "Metal and metalloid toxicity in rice: Stress responses and mitigation strategies",
    source: BOOK + ", pp. 163–205",
    doi: "10.1016/B978-0-443-33465-8.00021-9" },
  { type: "chapter", year: 2026,
    authors: "Saha, M., Sinthi, F., Nahar, K., Hasanuzzaman, M.",
    title: "Hotter climates, smarter rice: Coping with heat stress through adaptive reprogramming and tolerance",
    source: BOOK + ", pp. 87–106",
    doi: "10.1016/B978-0-443-33465-8.00026-8" },
  { type: "chapter", year: 2026,
    authors: "Alam, S., Sinthi, F., Hasanuzzaman, M.",
    title: "Strategies to reduce arsenic stress in rice: Physiological, biochemical, and molecular perspectives",
    source: BOOK + ", pp. 223–250",
    doi: "10.1016/B978-0-443-33465-8.00005-0" },
  { type: "chapter", year: 2026,
    authors: "Ria, O.A., Sinthi, F., Sabiha, U.K., Nahar, K., Hasanuzzaman, M.",
    title: "Harnessing biostimulants to mitigate salt stress damage in rice",
    source: BOOK + ", pp. 297–332",
    doi: "10.1016/B978-0-443-33465-8.00014-1" },
  { type: "chapter", year: 2026,
    authors: "Nahar, K., Sinthi, F., Alam, S., Anee, T.I., Bhuiyan, T.F., Rummana, S., Fujita, M., Hasanuzzaman, M.",
    title: "Enhancing rice resilience to abiotic stress: The role of osmolytes",
    source: BOOK + ", pp. 333–370",
    doi: "10.1016/B978-0-443-33465-8.00018-9" },
  { type: "chapter", year: 2026,
    authors: "Ahmed, M.S., Sinthi, F., Alam, S., Hasanuzzaman, M.",
    title: "Molecular tools and strategies to improve abiotic stress resilience in rice: Recent progress and future directions",
    source: BOOK + ", pp. 453–485",
    doi: "10.1016/B978-0-443-33465-8.00028-1" },
  { type: "chapter", year: 2024,
    authors: "Hasanuzzaman, M., Sinthi, F., Alam, S., Sultana, A., Rummana, S., Khatun, A.",
    title: "Perspective chapter: Enhancing plant resilience to salinity-induced oxidative stress – role of exogenous elicitors",
    source: "IntechOpen",
    doi: "10.5772/intechopen.115035" }
];

/* =========================================================
   Below this line is the animation code. No need to edit it.
   ========================================================= */
(function () {
  const root = document.documentElement;
  const body = document.body;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  /* ---- publications list and tabs ---- */
  const list = $("#pubs");
  const tabs = $$(".tabs button");
  function showPubs(type) {
    const rows = PUBLICATIONS.filter(p => p.type === type);
    list.innerHTML = rows.map((p, i) => `
      <li class="pub" style="animation-delay:${i * 0.06}s">
        <span class="pub__n">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3 class="pub__title">${p.title}</h3>
          <p class="pub__meta">${p.authors.replace(ME, "<b>" + ME + "</b>")} (${p.year}). ${p.source}.</p>
        </div>
        <a class="pub__doi" href="https://doi.org/${p.doi}" target="_blank" rel="noopener" aria-label="Open DOI for: ${p.title.replace(/<[^>]+>/g, "")}" title="Open DOI">↗</a>
      </li>`).join("");
  }
  tabs.forEach(t => {
    $("sup", t).textContent = PUBLICATIONS.filter(p => p.type === t.dataset.type).length;
    t.addEventListener("click", () => {
      tabs.forEach(x => x.setAttribute("aria-selected", x === t));
      showPubs(t.dataset.type);
    });
  });
  showPubs("article");

  /* ---- split the hero name into letters ---- */
  $$(".split").forEach((el, row) => {
    el.innerHTML = Array.from(el.textContent).map((c, i) =>
      `<span class="ch-wrap"><span class="ch" style="--d:${(0.25 + row * 0.18 + i * 0.045).toFixed(3)}s">${c}</span></span>`).join("");
  });
  $$(".hero .line > span").forEach((el, i) => el.style.setProperty("--d", (0.2 + i * 0.75) + "s"));

  /* ---- split headings into words ---- */
  $$(".words").forEach(el => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w, i) =>
      `<span class="w"><span style="--d:${(i * 0.05).toFixed(2)}s">${w}</span></span>`).join(" ");
  });

  /* ---- keyword strip: duplicate once so it loops without a gap ---- */
  const track = $(".marquee__track");
  if (track) track.innerHTML += track.innerHTML;

  /* ---- preloader ---- */
  const count = $(".loader__count");
  function ready() { body.classList.add("loaded"); }
  if (still) ready();
  else {
    let n = 0;
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9));
      count.textContent = n;
      if (n === 100) { clearInterval(tick); setTimeout(ready, 250); }
    }, 45);
  }

  /* ---- reveal on scroll, with a small stagger between neighbours ---- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      if (e.target.dataset.count) countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal, .words").forEach(el => {
    if (el.classList.contains("reveal")) {
      const sibs = Array.from(el.parentElement.children).filter(c => c.classList.contains("reveal"));
      el.style.setProperty("--d", Math.min(sibs.indexOf(el), 5) * 0.09 + "s");
    }
    io.observe(el);
  });
  $$("[data-count]").forEach(el => io.observe(el));

  /* ---- counters ---- */
  function countUp(el) {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    if (still) { el.textContent = end.toFixed(dec); return; }
    const t0 = performance.now(), dur = 1600;
    (function frame(t) {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec);
      if (k < 1) requestAnimationFrame(frame);
    })(t0);
  }

  /* ---- progress bar, nav hide and show, parallax ---- */
  const nav = $(".nav"), bar = $(".progress"), photo = $(".hero__photo"), name = $(".hero__name");
  let last = 0, mx = 0, my = 0, waiting = false;
  function paint() {
    waiting = false;
    const y = window.scrollY, max = root.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("is-scrolled", y > 40);
    nav.classList.toggle("is-hidden", y > last && y > 400 && !body.classList.contains("menu-open"));
    last = y;
    if (!still && window.innerWidth > 860 && y < window.innerHeight) {
      photo.style.transform = `translate3d(${mx * -14}px, ${y * 0.12 + my * -8}px, 0)`;
      name.style.transform = `translate3d(${mx * 18}px, ${y * -0.08 + my * 8}px, 0)`;
    }
  }
  function ask() { if (!waiting) { waiting = true; requestAnimationFrame(paint); } }
  window.addEventListener("scroll", ask, { passive: true });
  window.addEventListener("resize", () => { photo.style.transform = name.style.transform = ""; ask(); });
  window.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    mx = e.clientX / window.innerWidth - 0.5; my = e.clientY / window.innerHeight - 0.5; ask();
  });
  paint();

  /* ---- mobile menu ---- */
  const toggle = $(".nav__toggle");
  function menu(open) {
    body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", () => menu(!body.classList.contains("menu-open")));
  $$(".nav__links a").forEach(a => a.addEventListener("click", () => menu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") menu(false); });

  $("#year").textContent = new Date().getFullYear();
})();
